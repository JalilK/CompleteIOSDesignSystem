import { createContext, useContext, useState, ReactNode } from 'react'

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
  | 'library'
  | 'progress'
  | 'profile'
  | 'devotional'
  | 'prayer-mode'
  | 'pray-scripture'
  | 'guided-prayer'
  | 'meditation-player'
  | 'sound-controls'
  | 'privacy-settings'
  | 'context-study'

interface AppState {
  screen: Screen
  history: Screen[]
  tab: 'home' | 'library' | 'progress' | 'you'
  onboardingStep: number
  alignmentText: string
  totalXP: number
  level: number
  passageMastery: number
  practiceLevel2Complete: boolean
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
  'library',
  'progress',
  'profile',
  'devotional',
  'prayer-mode',
  'pray-scripture',
  'guided-prayer',
  'meditation-player',
  'sound-controls',
  'privacy-settings',
  'context-study',
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
  return Number.isInteger(requested) && requested >= 1 && requested <= 7 ? requested : 1
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
    passageMastery: 2,
    practiceLevel2Complete: false,
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
      level: totalXP >= 400 ? 2 : s.level,
      passageMastery: Math.max(s.passageMastery, 2),
      practiceLevel2Complete: true,
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
