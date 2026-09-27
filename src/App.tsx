import { AppProvider, useApp } from './context'
import { BottomNav } from './components/BottomNav'
import { Onboarding, PaywallScreen } from './screens/Onboarding'
import { Home } from './screens/Home'
import { Library } from './screens/Library'
import { Progress } from './screens/Progress'
import { Profile, PrivacySettings } from './screens/Profile'
import { Devotional, DevotionalsIndex, GuidedPrayerScreen, MeditationPlayer, PrayerMode, PrayScriptureScreen, SoundControls } from './screens/Devotional'
import { ContextStudy } from './screens/ContextStudy'
import { AlignmentIntake, AlignmentAnalyzing, AlignmentReport, FaithfulAction } from './screens/Alignment'
import { PracticeIntro, PracticeQuestion, PracticeLevelComplete } from './screens/Practice'
import { PathComplete, PathCover, PathOverview, PathPaused, PathPracticeHandoff, PathPracticeReturn, PathPrayerHandoff, PathPrayerReturn, PathSessionComplete, PathTeaching } from './screens/Path'

const SHOW_BOTTOM_NAV = new Set([
  'home', 'library', 'progress', 'profile',
  'alignment-intake', 'devotionals', 'devotional',
])

function AppShell() {
  const { screen } = useApp()
  const showNav = SHOW_BOTTOM_NAV.has(screen)
  const isDesktop = typeof window !== 'undefined' && window.innerWidth > 500

  const renderScreen = () => {
    switch (screen) {
      case 'onboarding': return <Onboarding />
      case 'paywall': return <PaywallScreen />
      case 'home': return <Home />
      case 'library': return <Library />
      case 'progress': return <Progress />
      case 'profile': return <Profile />
      case 'devotionals': return <DevotionalsIndex />
      case 'devotional': return <Devotional />
      case 'prayer-mode': return <PrayerMode />
      case 'pray-scripture': return <PrayScriptureScreen />
      case 'guided-prayer': return <GuidedPrayerScreen />
      case 'meditation-player': return <MeditationPlayer />
      case 'sound-controls': return <SoundControls />
      case 'privacy-settings': return <PrivacySettings />
      case 'context-study': return <ContextStudy />
      case 'alignment-intake': return <AlignmentIntake />
      case 'alignment-analyzing': return <AlignmentAnalyzing />
      case 'alignment-report': return <AlignmentReport />
      case 'faithful-action': return <FaithfulAction />
      case 'practice-intro': return <PracticeIntro />
      case 'practice-question': return <PracticeQuestion />
      case 'practice-level-complete': return <PracticeLevelComplete />
      case 'path-cover': return <PathCover />
      case 'path-teaching': return <PathTeaching />
      case 'path-practice-handoff': return <PathPracticeHandoff />
      case 'path-practice-return': return <PathPracticeReturn />
      case 'path-prayer-handoff': return <PathPrayerHandoff />
      case 'path-prayer-return': return <PathPrayerReturn />
      case 'path-session-complete': return <PathSessionComplete />
      case 'path-overview': return <PathOverview />
      case 'path-paused': return <PathPaused />
      case 'path-complete': return <PathComplete />
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
  return (
    <AppProvider>
      <AppShell />
    </AppProvider>
  )
}
