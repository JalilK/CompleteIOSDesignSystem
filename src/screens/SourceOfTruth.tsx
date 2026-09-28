import { AppIcon, AppIconName, IconDisc } from '../components/AppIcon'
import { useApp, Screen } from '../context'

type MotionEventSpec = {
  event: string
  title: string
  surface: string
  trigger: string
  duration: string
  easing: string
  receipt: 'Required' | 'Not required'
  voiceOver: string
  fallback: string
  icon: AppIconName
  tone: 'gold' | 'sage' | 'rose' | 'burgundy'
}

const toneStyles = {
  gold: { bg: '#F6E9C8', color: '#B68425', border: '#D7B563' },
  sage: { bg: '#E6ECE2', color: '#607255', border: '#AAB99D' },
  rose: { bg: '#F3E1E3', color: '#741630', border: '#D8A8B1' },
  burgundy: { bg: '#F0DDE2', color: '#741630', border: '#A14B64' },
}

const motionEvents: MotionEventSpec[] = [
  { event: 'alignment_mark_intro', title: 'Alignment Mark Intro', surface: 'First launch / brand mark', trigger: 'App purpose becomes clear', duration: '1200-1600 ms', easing: 'gentle spring', receipt: 'Not required', voiceOver: 'Alignment is ready.', fallback: 'Static mark and purpose copy.', icon: 'leaf', tone: 'sage' },
  { event: 'scripture_reveal', title: 'Scripture Reveal', surface: 'Learn / Practice / Prayer', trigger: 'Displayed Scripture enters reading focus', duration: '260-800 ms', easing: 'ease out', receipt: 'Not required', voiceOver: 'Scripture reference shown.', fallback: 'Immediate readable Scripture card.', icon: 'book', tone: 'gold' },
  { event: 'answer_correct', title: 'Answer Correct', surface: 'Practice feedback', trigger: 'User demonstrates the passage boundary', duration: '420-650 ms', easing: 'ease out', receipt: 'Not required', voiceOver: 'Correct. Explanation shown.', fallback: 'Static check and explanation.', icon: 'check', tone: 'sage' },
  { event: 'answer_reconsider', title: 'Answer Reconsider', surface: 'Practice feedback', trigger: 'User misses or overextends the passage', duration: '420-650 ms', easing: 'ease out', receipt: 'Not required', voiceOver: 'Not quite. Correction shown.', fallback: 'Static correction state.', icon: 'alert', tone: 'rose' },
  { event: 'saved_scripture', title: 'Saved Scripture', surface: 'Library / Reader', trigger: 'User saves a passage', duration: '180-220 ms', easing: 'ease out', receipt: 'Not required', voiceOver: 'Scripture saved.', fallback: 'Saved icon selected.', icon: 'book', tone: 'gold' },
  { event: 'xp_transfer', title: 'Verified XP Transfer', surface: 'Practice completion / Progress', trigger: 'Server or authoritative local receipt commits XP', duration: '1200-2000 ms', easing: 'ease out level sweep', receipt: 'Required', voiceOver: 'Verified XP added.', fallback: 'Determinate XP bar final value.', icon: 'sync', tone: 'gold' },
  { event: 'mastery_segment_complete', title: 'Mastery Segment Complete', surface: 'Practice completion', trigger: 'Passage mastery segment advances', duration: '1200-2000 ms', easing: 'ease out', receipt: 'Required', voiceOver: 'Passage mastery advanced.', fallback: 'Static filled mastery segment.', icon: 'book', tone: 'gold' },
  { event: 'user_level_up', title: 'User Level Up', surface: 'Level-up screen', trigger: 'Verified XP crosses account threshold', duration: '1800-2500 ms', easing: 'milestone spring', receipt: 'Required', voiceOver: 'Level increased.', fallback: 'Static level-up receipt.', icon: 'star', tone: 'gold' },
  { event: 'achievement_unlock', title: 'Achievement Unlock', surface: 'Progress / completion', trigger: 'Achievement criteria commit', duration: '1600-2200 ms', easing: 'medallion rise', receipt: 'Required', voiceOver: 'Achievement unlocked.', fallback: 'Unlocked medallion state.', icon: 'star', tone: 'burgundy' },
  { event: 'achievement_progress', title: 'Achievement Progress', surface: 'Progress / completion', trigger: 'Achievement partial progress commits', duration: '420-800 ms', easing: 'ease out', receipt: 'Required', voiceOver: 'Achievement progress updated.', fallback: 'Static progress row.', icon: 'calendar', tone: 'gold' },
  { event: 'review_ready', title: 'Review Ready', surface: 'Home / Library', trigger: 'Review schedule makes passage due', duration: '420-800 ms', easing: 'ease out', receipt: 'Required', voiceOver: 'Review is ready.', fallback: 'Static review badge.', icon: 'flag', tone: 'burgundy' },
  { event: 'learn_stage_complete', title: 'Learn Stage Complete', surface: 'Path Learn', trigger: 'Teaching segment completed', duration: '420-800 ms', easing: 'ease out', receipt: 'Required', voiceOver: 'Learn step complete.', fallback: 'Static step check.', icon: 'book', tone: 'sage' },
  { event: 'practice_stage_complete', title: 'Practice Stage Complete', surface: 'Path Practice', trigger: 'Canonical practice returns receipt', duration: '900-1500 ms', easing: 'ease out', receipt: 'Required', voiceOver: 'Practice step complete.', fallback: 'Static practice receipt.', icon: 'check', tone: 'sage' },
  { event: 'prayer_stage_complete', title: 'Prayer Stage Complete', surface: 'Path Prayer', trigger: 'Prayer step completes without score', duration: '420-800 ms', easing: 'quiet settle', receipt: 'Required', voiceOver: 'Prayer step complete. No XP awarded.', fallback: 'Static prayer check.', icon: 'prayer', tone: 'sage' },
  { event: 'path_session_complete', title: 'Path Session Complete', surface: 'Session receipt', trigger: 'Learn, Practice, and Prayer are finished', duration: '1800-2500 ms', easing: 'milestone spring', receipt: 'Required', voiceOver: 'Session complete.', fallback: 'Static session receipt.', icon: 'path', tone: 'gold' },
  { event: 'path_complete', title: 'Path Complete', surface: 'Path final receipt', trigger: 'Final Path session completes', duration: '3000-4000 ms', easing: 'major milestone', receipt: 'Required', voiceOver: 'Path complete.', fallback: 'Static Path completion receipt.', icon: 'tree', tone: 'gold' },
  { event: 'onboarding_loop_complete', title: 'Onboarding Loop Complete', surface: 'Onboarding receipt', trigger: 'First practice and recommendation are complete', duration: '3000-4000 ms', easing: 'major milestone', receipt: 'Required', voiceOver: 'First Scripture practice complete.', fallback: 'Static onboarding receipt.', icon: 'leaf', tone: 'gold' },
  { event: 'sync_complete', title: 'Sync Complete', surface: 'Account / offline recovery', trigger: 'Pending receipt syncs successfully', duration: '180-220 ms', easing: 'ease out', receipt: 'Required', voiceOver: 'Sync complete.', fallback: 'Static synced label.', icon: 'sync', tone: 'sage' },
  { event: 'offline_saved', title: 'Offline Saved', surface: 'Offline action', trigger: 'A permitted action is saved locally', duration: '180-220 ms', easing: 'ease out', receipt: 'Required', voiceOver: 'Saved offline.', fallback: 'Static offline saved badge.', icon: 'shield', tone: 'sage' },
  { event: 'prayer_audio_ready', title: 'Prayer Audio Ready', surface: 'Meditation / prayer player', trigger: 'Generated or cached prayer audio is ready', duration: '180-220 ms', easing: 'ease out', receipt: 'Required', voiceOver: 'Prayer audio ready.', fallback: 'Static play control enabled.', icon: 'audio', tone: 'sage' },
]

type DestinationSpec = {
  area: string
  control: string
  destination: Screen | 'sheet' | 'state' | 'notice' | 'disabled' | 'external'
  result: string
  back: string
  risk: 'Covered' | 'Needs native QA' | 'Create in Figma'
}

const destinations: DestinationSpec[] = [
  { area: 'Onboarding', control: 'Begin / Try it / Continue / Start This Path', destination: 'onboarding', result: 'Advances through mission, method, situation, practice, completion, purpose, recommendation, and paywall states.', back: 'Previous onboarding state', risk: 'Covered' },
  { area: 'Paywall', control: 'Annual / Monthly', destination: 'state', result: 'Selects plan and updates CTA copy.', back: 'Paywall', risk: 'Covered' },
  { area: 'Paywall', control: 'Start Free Trial / Start Monthly', destination: 'home', result: 'Activates preview entitlement and lands on Home.', back: 'Home', risk: 'Needs native QA' },
  { area: 'Paywall', control: 'Restore / Terms / Privacy', destination: 'notice', result: 'Shows truthful preview notice; native opens restore/legal surfaces.', back: 'Paywall', risk: 'Needs native QA' },
  { area: 'Home', control: 'Path card / Continue Path', destination: 'path-cover', result: 'Starts or resumes the current Path Learn step.', back: 'Home', risk: 'Covered' },
  { area: 'Home', control: 'Current Alignment / Continue Alignment', destination: 'faithful-action', result: 'Opens the current faithful action recommendation.', back: 'Home', risk: 'Covered' },
  { area: 'Home', control: 'Continue your study cards', destination: 'devotional', result: 'Devotional, Prayer, and Scripture Practice route to their standalone part.', back: 'Home', risk: 'Needs native QA' },
  { area: 'Home', control: 'See All', destination: 'library', result: 'Opens the Library / study history destination.', back: 'Home', risk: 'Covered' },
  { area: 'Bottom Nav', control: 'Home / Align / Devotionals / Progress / You', destination: 'home', result: 'Switches to the matching top-level destination and resets stack.', back: 'Top-level tab', risk: 'Covered' },
  { area: 'Alignment Intake', control: 'Choose example situation', destination: 'state', result: 'Fills the input with an editable example.', back: 'Input remains editable', risk: 'Covered' },
  { area: 'Alignment Intake', control: 'How Alignment uses this information', destination: 'notice', result: 'Shows privacy explanation.', back: 'Alignment Intake', risk: 'Covered' },
  { area: 'Alignment Intake', control: 'Bring This Under Scripture', destination: 'alignment-analyzing', result: 'Starts analysis route, then report.', back: 'Alignment Intake', risk: 'Needs native QA' },
  { area: 'Alignment Report', control: 'Continue', destination: 'faithful-action', result: 'Moves from Scripture teaching to faithful next step.', back: 'Alignment Report', risk: 'Covered' },
  { area: 'Faithful Action', control: 'Mark as Chosen', destination: 'state', result: 'Marks action chosen and can return Home.', back: 'Faithful Action', risk: 'Needs native QA' },
  { area: 'Faithful Action', control: 'Practice This Scripture', destination: 'practice-intro', result: 'Starts canonical practice for the governing passage.', back: 'Faithful Action', risk: 'Covered' },
  { area: 'Practice Intro', control: 'Begin / Resume Practice', destination: 'practice-question', result: 'Starts six-question practice engine.', back: 'Practice Intro', risk: 'Covered' },
  { area: 'Practice Intro', control: "What You'll Learn", destination: 'sheet', result: 'Opens learning goals sheet.', back: 'Practice Intro', risk: 'Covered' },
  { area: 'Practice Question', control: 'View Scripture', destination: 'sheet', result: 'Opens Scripture reference bottom sheet without losing answer state.', back: 'Practice Question', risk: 'Covered' },
  { area: 'Practice Question', control: 'Answer choice / Check Answer', destination: 'state', result: 'Selects answer, enables CTA, shows feedback.', back: 'Practice Question', risk: 'Covered' },
  { area: 'Practice Feedback', control: 'Next Question', destination: 'practice-question', result: 'Advances to next question or completion.', back: 'Feedback state', risk: 'Covered' },
  { area: 'Practice Complete', control: 'Return to Alignment / Continue to Level 3', destination: 'faithful-action', result: 'Commits receipt and routes to Alignment or next practice intro.', back: 'Completion receipt', risk: 'Needs native QA' },
  { area: 'Path', control: 'Begin / Continue / Practice This Teaching', destination: 'path-teaching', result: 'Moves Learn -> Practice handoff -> canonical Practice.', back: 'Path origin', risk: 'Create in Figma' },
  { area: 'Path', control: 'Continue to Prayer / Complete Session', destination: 'path-prayer-handoff', result: 'Moves Practice receipt -> Prayer -> Session receipt.', back: 'Path origin', risk: 'Create in Figma' },
  { area: 'Path Overview', control: 'Session row / Pause / Choose different path', destination: 'path-overview', result: 'Session row opens session; pause/change path uses explicit path states.', back: 'Home or Path', risk: 'Create in Figma' },
  { area: 'Devotionals', control: 'Filter chips / devotional card', destination: 'devotional', result: 'Filters list or opens selected devotional reader.', back: 'Devotionals', risk: 'Needs native QA' },
  { area: 'Devotional Reader', control: 'Read Scripture / Practice / Prayer / Listen', destination: 'practice-intro', result: 'Routes to reader action, canonical practice, prayer doorway, or audio state.', back: 'Devotional Reader', risk: 'Needs native QA' },
  { area: 'Prayer Mode', control: 'Scripture row / Pray Scripture / Guided Prayer / Meditation', destination: 'pray-scripture', result: 'Opens chosen non-scored prayer/meditation surface.', back: 'Prayer Mode', risk: 'Covered' },
  { area: 'Meditation Player', control: 'Play / rewind / forward / speed / transcript / sound settings', destination: 'state', result: 'Updates player state or opens sound controls.', back: 'Meditation Player', risk: 'Needs native QA' },
  { area: 'Library', control: 'Search / See All / rows / review', destination: 'practice-intro', result: 'Searches, expands sections, opens Scripture reader or review practice.', back: 'Library', risk: 'Needs native QA' },
  { area: 'Progress', control: 'Path card / achievement See All / settings', destination: 'path-overview', result: 'Opens path overview, expands achievements, or routes to profile.', back: 'Progress', risk: 'Covered' },
  { area: 'Profile', control: 'Settings rows', destination: 'privacy-settings', result: 'Routes to privacy, sound, subscription, restore, or explanatory sheet.', back: 'Profile', risk: 'Covered' },
  { area: 'Privacy', control: 'Toggles / clear history', destination: 'state', result: 'Toggles personalization states or shows destructive notice.', back: 'Privacy Settings', risk: 'Needs native QA' },
  { area: 'Source Of Truth', control: 'Motion Source / Button Graph', destination: 'motion-source-truth', result: 'Design-only parity reference screens for Figma export.', back: 'Profile', risk: 'Covered' },
]

function StatusBar() {
  return (
    <div className="flex items-center justify-between px-7 pt-5 text-[13px] font-semibold" style={{ color: '#24171A' }}>
      <span>9:41</span>
      <span>•••  Wi-Fi  ▰</span>
    </div>
  )
}

function Header({ title, eyebrow, onBack }: { title: string; eyebrow: string; onBack: () => void }) {
  return (
    <div className="px-6 pt-5">
      <button onClick={onBack} className="mb-5 flex h-10 w-10 items-center justify-center rounded-full" style={{ background: '#FFFCF6', border: '1px solid #DDD0C0' }} aria-label="Back">
        ‹
      </button>
      <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em]" style={{ color: '#B68425' }}>{eyebrow}</p>
      <h1 className="font-serif text-[32px] leading-[37px] font-semibold" style={{ color: '#24171A' }}>{title}</h1>
    </div>
  )
}

function MotionCard({ spec }: { spec: MotionEventSpec }) {
  const tone = toneStyles[spec.tone]
  const demoClass = spec.event.includes('answer_correct')
    ? 'motion-demo-correct'
    : spec.event.includes('answer_reconsider')
      ? 'motion-demo-reconsider'
      : spec.event.includes('xp') || spec.event.includes('mastery') || spec.event.includes('achievement_progress')
        ? 'motion-demo-xp'
        : spec.event.includes('complete') || spec.event.includes('unlock') || spec.event.includes('level')
          ? 'motion-demo-milestone'
          : 'motion-demo-quiet'
  return (
    <article className="motion-card-enter rounded-[12px] p-4" style={{ background: '#FFFCF6', border: '1px solid #DDD0C0', boxShadow: '0 1px 10px rgba(30,21,18,0.06)' }}>
      <div className="motion-demo-stage mb-3 flex h-[72px] items-center justify-between overflow-hidden rounded-[12px] px-4" style={{ background: tone.bg, border: `1px solid ${tone.border}` }}>
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.13em]" style={{ color: tone.color }}>Start · Impact · Resolve</p>
          <p className="mt-1 text-[13px] font-semibold" style={{ color: '#24171A' }}>{spec.receipt === 'Required' ? 'Receipt-gated' : 'Immediate feedback'}</p>
        </div>
        <span className={`motion-demo-icon ${demoClass} flex h-12 w-12 items-center justify-center rounded-full`} style={{ background: '#FFFCF6', color: tone.color, boxShadow: '0 4px 16px rgba(30,21,18,0.12)' }}>
          <AppIcon name={spec.icon} size={24} color={tone.color} />
        </span>
      </div>
      <div className="mb-3 flex items-start gap-3">
        <IconDisc name={spec.icon} size={44} iconSize={22} bg={tone.bg} color={tone.color} />
        <div className="min-w-0 flex-1">
          <p className="text-[11px] font-semibold uppercase tracking-[0.12em]" style={{ color: '#897A76' }}>{spec.event}</p>
          <h2 className="font-serif text-[20px] leading-[24px] font-semibold" style={{ color: '#24171A' }}>{spec.title}</h2>
        </div>
        <span className="rounded-full px-2.5 py-1 text-[11px] font-semibold" style={{ background: tone.bg, color: tone.color, border: `1px solid ${tone.border}` }}>{spec.receipt}</span>
      </div>
      <div className="grid grid-cols-2 gap-2 text-[12px]" style={{ color: '#675A5D' }}>
        <p><span className="font-semibold" style={{ color: '#24171A' }}>Surface</span><br />{spec.surface}</p>
        <p><span className="font-semibold" style={{ color: '#24171A' }}>Trigger</span><br />{spec.trigger}</p>
        <p><span className="font-semibold" style={{ color: '#24171A' }}>Timing</span><br />{spec.duration}</p>
        <p><span className="font-semibold" style={{ color: '#24171A' }}>Easing</span><br />{spec.easing}</p>
      </div>
      <div className="mt-3 rounded-[10px] p-3" style={{ background: '#F7F1E7', border: '1px solid #E5D7C6' }}>
        <p className="text-[12px] leading-[17px]" style={{ color: '#675A5D' }}><span className="font-semibold" style={{ color: '#24171A' }}>VoiceOver:</span> {spec.voiceOver}</p>
        <p className="mt-1 text-[12px] leading-[17px]" style={{ color: '#675A5D' }}><span className="font-semibold" style={{ color: '#24171A' }}>Fallback:</span> {spec.fallback}</p>
      </div>
    </article>
  )
}

export function MotionSourceTruth() {
  const { goBack, navigate } = useApp()
  return (
    <div className="flex h-full flex-col overflow-hidden" style={{ background: '#F7F1E7' }}>
      <StatusBar />
      <Header title="Motion source of truth" eyebrow="Revision 22.3 semantic events" onBack={() => goBack('profile')} />
      <div className="mt-5 flex-1 overflow-y-auto px-6 pb-8 scrollbar-hide">
        <div className="mb-4 rounded-[12px] p-4" style={{ background: '#24171A', color: '#FFFCF6' }}>
          <p className="text-[13px] leading-[19px]">
            These are the Figma design states that map directly to the native motion registry. Lottie assets must be authored from these events, not from ad hoc screen animation.
          </p>
          <button onClick={() => navigate('prototype-graph')} className="mt-4 h-11 w-full rounded-full text-[14px] font-semibold" style={{ background: '#FFFCF6', color: '#741630' }}>
            View Button Destination Graph
          </button>
        </div>
        <div className="space-y-3">
          {motionEvents.map((spec) => <MotionCard key={spec.event} spec={spec} />)}
        </div>
      </div>
    </div>
  )
}

function DestinationRow({ item }: { item: DestinationSpec }) {
  const riskStyle = item.risk === 'Covered'
    ? { background: '#E6ECE2', color: '#40513B' }
    : item.risk === 'Needs native QA'
      ? { background: '#F6E9C8', color: '#795719' }
      : { background: '#F3E1E3', color: '#741630' }

  return (
    <article className="rounded-[12px] p-4" style={{ background: '#FFFCF6', border: '1px solid #DDD0C0' }}>
      <div className="mb-2 flex items-start justify-between gap-3">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.12em]" style={{ color: '#B68425' }}>{item.area}</p>
          <h2 className="text-[16px] font-semibold leading-[21px]" style={{ color: '#24171A' }}>{item.control}</h2>
        </div>
        <span className="shrink-0 rounded-full px-2.5 py-1 text-[11px] font-semibold" style={riskStyle}>{item.risk}</span>
      </div>
      <p className="text-[13px] leading-[18px]" style={{ color: '#675A5D' }}>{item.result}</p>
      <div className="mt-3 flex items-center gap-2 text-[12px]" style={{ color: '#897A76' }}>
        <AppIcon name="path" size={15} color="#B68425" />
        <span>Destination: <strong style={{ color: '#24171A' }}>{item.destination}</strong></span>
      </div>
      <p className="mt-1 text-[12px]" style={{ color: '#897A76' }}>Back: {item.back}</p>
    </article>
  )
}

export function PrototypeDestinationGraph() {
  const { goBack, navigate } = useApp()
  const unresolved = destinations.filter((item) => item.risk !== 'Covered').length
  return (
    <div className="flex h-full flex-col overflow-hidden" style={{ background: '#F7F1E7' }}>
      <StatusBar />
      <Header title="Button destination graph" eyebrow="No inert controls" onBack={() => goBack('profile')} />
      <div className="mt-5 flex-1 overflow-y-auto px-6 pb-8 scrollbar-hide">
        <div className="mb-4 grid grid-cols-2 gap-3">
          <div className="rounded-[12px] p-4" style={{ background: '#FFFCF6', border: '1px solid #DDD0C0' }}>
            <p className="text-[28px] font-semibold" style={{ color: '#741630' }}>{destinations.length}</p>
            <p className="text-[12px]" style={{ color: '#675A5D' }}>mapped controls</p>
          </div>
          <div className="rounded-[12px] p-4" style={{ background: '#FFFCF6', border: '1px solid #DDD0C0' }}>
            <p className="text-[28px] font-semibold" style={{ color: unresolved ? '#B68425' : '#607255' }}>{unresolved}</p>
            <p className="text-[12px]" style={{ color: '#675A5D' }}>need evidence</p>
          </div>
        </div>
        <button onClick={() => navigate('motion-source-truth')} className="mb-4 h-11 w-full rounded-full text-[14px] font-semibold" style={{ background: '#741630', color: '#FFFCF6' }}>
          View Motion Source
        </button>
        <div className="space-y-3">
          {destinations.map((item) => <DestinationRow key={`${item.area}-${item.control}`} item={item} />)}
        </div>
      </div>
    </div>
  )
}
