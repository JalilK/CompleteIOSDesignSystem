import { AppProvider, useApp } from './context'
import { BottomNav } from './components/BottomNav'
import { HomeExactParity } from './screens/HomeExactParity'
import { Onboarding } from './screens/Onboarding'
import { Home } from './screens/Home'
import { Library } from './screens/Library'
import { Progress } from './screens/Progress'
import { Profile } from './screens/Profile'
import { Devotional, PrayerMode } from './screens/Devotional'
import { ContextStudy } from './screens/ContextStudy'
import { AlignmentIntake, AlignmentAnalyzing, AlignmentReport, FaithfulAction } from './screens/Alignment'
import { PracticeIntro, PracticeQuestion, PracticeLevelComplete } from './screens/Practice'

const SHOW_BOTTOM_NAV = new Set([
  'home', 'library', 'progress', 'profile',
  'alignment-intake', 'devotional',
])

function AppShell() {
  const { screen } = useApp()
  const showNav = SHOW_BOTTOM_NAV.has(screen)
  const isDesktop = typeof window !== 'undefined' && window.innerWidth > 500

  const renderScreen = () => {
    switch (screen) {
      case 'onboarding': return <Onboarding />
      case 'home': return <Home />
      case 'library': return <Library />
      case 'progress': return <Progress />
      case 'profile': return <Profile />
      case 'devotional': return <Devotional />
      case 'prayer-mode': return <PrayerMode />
      case 'context-study': return <ContextStudy />
      case 'alignment-intake': return <AlignmentIntake />
      case 'alignment-analyzing': return <AlignmentAnalyzing />
      case 'alignment-report': return <AlignmentReport />
      case 'faithful-action': return <FaithfulAction />
      case 'practice-intro': return <PracticeIntro />
      case 'practice-question': return <PracticeQuestion />
      case 'practice-level-complete': return <PracticeLevelComplete />
      default: return <Home />
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen" style={{ background: '#1a1208', fontFamily: 'var(--font-sans)' }}>
      {/* Phone frame on desktop */}
      <div className="relative flex flex-col overflow-hidden"
        style={{
          width: '100%',
          maxWidth: 390,
          height: '100vh',
          maxHeight: 844,
          borderRadius: isDesktop ? 44 : 0,
          boxShadow: isDesktop ? '0 40px 120px rgba(0,0,0,0.8), 0 0 0 1px rgba(255,255,255,0.1)' : 'none',
          background: '#F7F1E7',
          overflow: 'hidden',
        }}>

        {/* Status bar simulation (desktop only) */}
        {isDesktop && (
          <div className="flex items-center justify-between px-6 pt-3 pb-1 shrink-0 absolute top-0 left-0 right-0 z-50" style={{ pointerEvents: 'none' }}>
            <span className="text-[13px] font-semibold" style={{ color: 'transparent' }}>9:41</span>
          </div>
        )}

        {/* Screen content */}
        <div className="flex-1 flex flex-col overflow-hidden" key={screen} style={{ paddingTop: isDesktop ? 0 : 0 }}>
          <div className="flex-1 overflow-hidden screen-enter">
            {renderScreen()}
          </div>
          {showNav && <BottomNav />}
        </div>
      </div>
    </div>
  )
}

export default function App() {
  // ?parity=true renders the ALIGN-GAP-006A handoff frame on a dark canvas
  const isParity = typeof window !== 'undefined' && new URLSearchParams(window.location.search).get('parity') === 'true'

  if (isParity) {
    return (
      <div className="min-h-screen flex items-center justify-center py-16" style={{ background: '#1a1208' }}>
        <HomeExactParity />
      </div>
    )
  }

  return (
    <AppProvider>
      <AppShell />
    </AppProvider>
  )
}
