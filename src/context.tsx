import { createContext, useContext, useState, ReactNode } from 'react'
import { levelForXP } from './components/XPBar'

export type Screen =
  | 'onboarding'
  | 'paywall'
  | 'home'
  | 'alignment-intake'
  | 'alignment-analyzing'
  | 'alignment-report'
  | 'faithful-action'
  | 'practice-intro'
  | 'practice-question'
  | 'practice-level-complete'
  | 'path-cover'
  | 'path-teaching'
  | 'path-practice-handoff'
  | 'path-practice-return'
  | 'path-prayer-handoff'
  | 'path-prayer-return'
  | 'path-session-complete'
  | 'path-overview'
  | 'path-paused'
  | 'path-complete'
  | 'library'
  | 'progress'
  | 'profile'
  | 'devotionals'
  | 'devotional'
  | 'prayer-mode'
  | 'pray-scripture'
  | 'guided-prayer'
  | 'meditation-player'
  | 'sound-controls'
  | 'privacy-settings'
  | 'context-study'
  | 'motion-source-truth'
  | 'prototype-graph'

export type DevotionalActivity = {
  id: string
  title: string
  detail: string
  lastActivityAt: number
}

export type PrayerActivity = {
  id: string
  title: string
  detail: string
  lastActivityAt: number
}

export type ScripturePracticeActivity = {
  id: string
  passage: string
  context: string
  mastery: number
  masteryGoal: number
  lastActivityAt: number
}

interface AppState {
  screen: Screen
  history: Screen[]
  tab: 'home' | 'library' | 'progress' | 'you'
  onboardingStep: number
  alignmentText: string
  totalXP: number
  level: number
  recentXPGain: number
  passageMastery: number
  practiceLevel2Complete: boolean
  devotionalActivities: DevotionalActivity[]
  prayerActivities: PrayerActivity[]
  scripturePracticeActivities: ScripturePracticeActivity[]
}

interface AppContextType extends AppState {
  navigate: (screen: Screen, options?: { replace?: boolean }) => void
  goBack: (fallback?: Screen) => void
  setTab: (tab: 'home' | 'library' | 'progress' | 'you') => void
  nextOnboardingStep: () => void
  prevOnboardingStep: () => void
  setAlignmentText: (t: string) => void
  completePracticeLevel: () => void
}

const AppContext = createContext<AppContextType | null>(null)

const screens: Screen[] = [
  'onboarding',
  'paywall',
  'home',
  'alignment-intake',
  'alignment-analyzing',
  'alignment-report',
  'faithful-action',
  'practice-intro',
  'practice-question',
  'practice-level-complete',
  'path-cover',
  'path-teaching',
  'path-practice-handoff',
  'path-practice-return',
  'path-prayer-handoff',
  'path-prayer-return',
  'path-session-complete',
  'path-overview',
  'path-paused',
  'path-complete',
  'library',
  'progress',
  'profile',
  'devotionals',
  'devotional',
  'prayer-mode',
  'pray-scripture',
  'guided-prayer',
  'meditation-player',
  'sound-controls',
  'privacy-settings',
  'context-study',
  'motion-source-truth',
  'prototype-graph',
]

function previewInitialScreen(): Screen {
  if (typeof window === 'undefined') return 'onboarding'
  const requested = new URLSearchParams(window.location.search).get('screen') as Screen | null
  return requested && screens.includes(requested) ? requested : 'onboarding'
}

function previewInitialTab(screen: Screen): AppState['tab'] {
  if (screen === 'library') return 'library'
  if (screen === 'progress') return 'progress'
  if (screen === 'profile' || screen === 'privacy-settings' || screen === 'sound-controls') return 'you'
  return 'home'
}

function previewInitialOnboardingStep(): number {
  if (typeof window === 'undefined') return 1
  const requested = Number(new URLSearchParams(window.location.search).get('onboardingStep'))
  return Number.isInteger(requested) && requested >= 1 && requested <= 8 ? requested : 1
}

function previewParams() {
  if (typeof window === 'undefined') return new URLSearchParams()
  return new URLSearchParams(window.location.search)
}

function initialDevotionalActivities(): DevotionalActivity[] {
  const params = previewParams()
  if (params.get('emptyStudy') === '1' || params.get('emptyDevotionals') === '1') return []
  return [
    {
      id: 'devotional-trust-outcome',
      title: 'Trust Without Demanding an Outcome',
      detail: 'Read the teaching from your current Path',
      lastActivityAt: 300,
    },
  ]
}

function initialPrayerActivities(): PrayerActivity[] {
  const params = previewParams()
  if (params.get('emptyStudy') === '1' || params.get('emptyPrayers') === '1') return []
  return [
    {
      id: 'prayer-proverbs-3-5-6',
      title: 'Pray Proverbs 3:5-6',
      detail: 'Respond to the Scripture you just studied',
      lastActivityAt: 200,
    },
  ]
}

function initialScripturePracticeActivities(): ScripturePracticeActivity[] {
  const params = previewParams()
  if (params.get('emptyStudy') === '1' || params.get('emptyPractice') === '1') return []
  return [
    {
      id: 'practice-proverbs-3-5-6',
      passage: 'Proverbs 3:5-6',
      context: 'Trusting God Through Uncertainty',
      mastery: 2,
      masteryGoal: 5,
      lastActivityAt: 100,
    },
  ]
}

export function AppProvider({ children }: { children: ReactNode }) {
  const initialScreen = previewInitialScreen()
  const [state, setState] = useState<AppState>({
    screen: initialScreen,
    history: [],
    tab: previewInitialTab(initialScreen),
    onboardingStep: previewInitialOnboardingStep(),
    alignmentText: '',
    totalXP: 275,
    level: 3,
    recentXPGain: 0,
    passageMastery: 2,
    practiceLevel2Complete: false,
    devotionalActivities: initialDevotionalActivities(),
    prayerActivities: initialPrayerActivities(),
    scripturePracticeActivities: initialScripturePracticeActivities(),
  })

  const navigate = (screen: Screen, options?: { replace?: boolean }) => setState(s => {
    if (screen === s.screen) return s
    return {
      ...s,
      screen,
      history: options?.replace ? s.history : [...s.history, s.screen],
    }
  })
  const goBack = (fallback: Screen = 'home') => setState(s => {
    const previous = s.history.at(-1)
    if (!previous) return { ...s, screen: fallback, history: [] }
    return { ...s, screen: previous, history: s.history.slice(0, -1) }
  })
  const setTab = (tab: 'home' | 'library' | 'progress' | 'you') => setState(s => ({ ...s, tab, screen: tab === 'home' ? 'home' : tab === 'library' ? 'library' : tab === 'progress' ? 'progress' : 'profile', history: [] }))
  const nextOnboardingStep = () => setState(s => ({ ...s, onboardingStep: s.onboardingStep + 1 }))
  const prevOnboardingStep = () => setState(s => ({ ...s, onboardingStep: Math.max(1, s.onboardingStep - 1) }))
  const setAlignmentText = (t: string) => setState(s => ({ ...s, alignmentText: t }))
  const completePracticeLevel = () => setState(s => {
    if (s.practiceLevel2Complete) return s
    const totalXP = s.totalXP + 50
    return {
      ...s,
      totalXP,
      level: levelForXP(totalXP).level,
      recentXPGain: 50,
      passageMastery: Math.max(s.passageMastery, 2),
      practiceLevel2Complete: true,
      scripturePracticeActivities: s.scripturePracticeActivities.map(activity =>
        activity.id === 'practice-proverbs-3-5-6'
          ? { ...activity, mastery: Math.max(activity.mastery, 2), lastActivityAt: 400 }
          : activity
      ),
    }
  })

  return (
    <AppContext.Provider value={{ ...state, navigate, goBack, setTab, nextOnboardingStep, prevOnboardingStep, setAlignmentText, completePracticeLevel }}>
      {children}
    </AppContext.Provider>
  )
}

export const useApp = () => {
  const ctx = useContext(AppContext)
  if (!ctx) throw new Error('useApp must be used within AppProvider')
  return ctx
}
