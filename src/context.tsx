import { createContext, useContext, useState, ReactNode } from 'react'

export type Screen =
  | 'onboarding'
  | 'home'
  | 'alignment-intake'
  | 'alignment-analyzing'
  | 'alignment-report'
  | 'faithful-action'
  | 'practice-intro'
  | 'practice-question'
  | 'practice-feedback'
  | 'practice-level-complete'
  | 'library'
  | 'progress'
  | 'profile'
  | 'path-overview'
  | 'devotional'
  | 'prayer-mode'
  | 'pray-scripture'
  | 'context-study'

interface AppState {
  screen: Screen
  tab: 'home' | 'library' | 'progress' | 'you'
  onboardingStep: number
  practiceSource: 'alignment' | 'path' | 'devotional' | 'library'
  selectedAnswer: number | null
  answeredCorrect: boolean
  alignmentText: string
  totalXP: number
  level: number
  passageMastery: number
}

interface AppContextType extends AppState {
  navigate: (screen: Screen) => void
  setTab: (tab: 'home' | 'library' | 'progress' | 'you') => void
  nextOnboardingStep: () => void
  prevOnboardingStep: () => void
  setSelectedAnswer: (i: number | null) => void
  setAnsweredCorrect: (v: boolean) => void
  setAlignmentText: (t: string) => void
  addXP: (amount: number) => void
}

const AppContext = createContext<AppContextType | null>(null)

export function AppProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<AppState>({
    screen: 'onboarding',
    tab: 'home',
    onboardingStep: 1,
    practiceSource: 'alignment',
    selectedAnswer: null,
    answeredCorrect: false,
    alignmentText: '',
    totalXP: 275,
    level: 3,
    passageMastery: 2,
  })

  const navigate = (screen: Screen) => setState(s => ({ ...s, screen }))
  const setTab = (tab: 'home' | 'library' | 'progress' | 'you') => setState(s => ({ ...s, tab, screen: tab === 'home' ? 'home' : tab === 'library' ? 'library' : tab === 'progress' ? 'progress' : 'profile' }))
  const nextOnboardingStep = () => setState(s => ({ ...s, onboardingStep: s.onboardingStep + 1 }))
  const prevOnboardingStep = () => setState(s => ({ ...s, onboardingStep: Math.max(1, s.onboardingStep - 1) }))
  const setSelectedAnswer = (i: number | null) => setState(s => ({ ...s, selectedAnswer: i }))
  const setAnsweredCorrect = (v: boolean) => setState(s => ({ ...s, answeredCorrect: v }))
  const setAlignmentText = (t: string) => setState(s => ({ ...s, alignmentText: t }))
  const addXP = (amount: number) => setState(s => ({ ...s, totalXP: s.totalXP + amount }))

  return (
    <AppContext.Provider value={{ ...state, navigate, setTab, nextOnboardingStep, prevOnboardingStep, setSelectedAnswer, setAnsweredCorrect, setAlignmentText, addXP }}>
      {children}
    </AppContext.Provider>
  )
}

export const useApp = () => {
  const ctx = useContext(AppContext)
  if (!ctx) throw new Error('useApp must be used within AppProvider')
  return ctx
}
