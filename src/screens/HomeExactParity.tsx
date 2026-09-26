/**
 * ALIGN-GAP-006A — Home Exact Parity
 * Pixel-faithful recreation of the first iPhone screen from the reference.
 * Layer names match the handoff spec.
 */

const UNSPLASH = 'https://images.unsplash.com'

// Hero landscape — ancient city at golden hour
const HERO_IMG = `${UNSPLASH}/photo-1544441892-794166f1e3be?w=800&h=600&fit=crop&auto=format`
// Devotional card 1 — valley / olive trees
const DEV_FOR_YOU_IMG = `${UNSPLASH}/photo-1464822759023-fed622ff2c3b?w=400&h=260&fit=crop&auto=format`
// Devotional card 2 — stone path / ancient landscape
const DEV_FOR_EVERYONE_IMG = `${UNSPLASH}/photo-1473448912268-2022ce9509d8?w=400&h=260&fit=crop&auto=format`
// Avatar photo (small circular)
const AVATAR_IMG = `${UNSPLASH}/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&auto=format&face`

/* ─── Design tokens ──────────────────────────────────────────── */
const T = {
  parchment: '#F7F1E7',
  surface: '#FFFCF6',
  surfaceAlt: '#F4EBDD',
  burgundy: '#741630',
  burgundyDark: '#4B1021',
  gold: '#B68425',
  goldLight: '#E6C878',
  sage: '#607255',
  textPrimary: '#24171A',
  textSecondary: '#675A5D',
  textMuted: '#897A76',
  border: '#DDD0C0',
  overlay: 'rgba(30,21,18,',
}

/* ─── Status Bar ─────────────────────────────────────────────── */
function StatusBar() {
  return (
    // Layer: Status Bar
    <div className="flex items-center justify-between px-6 pt-3 pb-1 absolute top-0 left-0 right-0 z-50"
      style={{ pointerEvents: 'none' }}>
      <span className="text-[15px] font-semibold" style={{ color: T.textPrimary, fontFamily: 'var(--font-sans)' }}>9:41</span>
      <div className="flex items-center gap-1.5">
        {/* Signal bars */}
        <svg width="17" height="12" viewBox="0 0 17 12" fill="none">
          <rect x="0" y="8" width="3" height="4" rx="0.5" fill={T.textPrimary} />
          <rect x="4.5" y="5.5" width="3" height="6.5" rx="0.5" fill={T.textPrimary} />
          <rect x="9" y="3" width="3" height="9" rx="0.5" fill={T.textPrimary} />
          <rect x="13.5" y="0" width="3" height="12" rx="0.5" fill={T.textPrimary} />
        </svg>
        {/* WiFi */}
        <svg width="16" height="12" viewBox="0 0 16 12" fill="none">
          <path d="M8 9.5a1.5 1.5 0 100 3 1.5 1.5 0 000-3z" fill={T.textPrimary} />
          <path d="M3.5 7C4.9 5.5 6.3 4.5 8 4.5s3.1 1 4.5 2.5" stroke={T.textPrimary} strokeWidth="1.3" strokeLinecap="round" fill="none" />
          <path d="M1 4.5C3 2.3 5.4 1 8 1s5 1.3 7 3.5" stroke={T.textPrimary} strokeWidth="1.3" strokeLinecap="round" fill="none" />
        </svg>
        {/* Battery */}
        <svg width="25" height="12" viewBox="0 0 25 12" fill="none">
          <rect x="0.5" y="0.5" width="21" height="11" rx="3.5" stroke={T.textPrimary} strokeOpacity="0.35" />
          <rect x="1.5" y="1.5" width="16" height="9" rx="2.5" fill={T.textPrimary} />
          <path d="M23 4v4a2 2 0 000-4z" fill={T.textPrimary} fillOpacity="0.4" />
        </svg>
      </div>
    </div>
  )
}

/* ─── Leaf / olive icon (for alignment card) ─────────────────── */
function LeafIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path d="M3 17c1-4 3-7 8-9 3-1.5 6-1 7-1-1 2-3 7-7 9-2.5 1.2-5.5 1.5-8 1z"
        fill="#E6ECE2" stroke={T.sage} strokeWidth="1.3" strokeLinejoin="round" />
      <path d="M3 17l5-5" stroke={T.sage} strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  )
}

/* ─── Tab bar icons ──────────────────────────────────────────── */
function HomeTabIcon({ active }: { active: boolean }) {
  const c = active ? T.burgundy : T.textMuted
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M3 9.5L12 3l9 6.5V20a1 1 0 01-1 1H5a1 1 0 01-1-1V9.5z"
        fill={active ? T.burgundy : 'none'} stroke={c} strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M9 21V12h6v9" stroke={active ? '#FFFCF6' : c} strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
  )
}

function AlignTabIcon({ active }: { active: boolean }) {
  const c = active ? T.burgundy : T.textMuted
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M5 18c1-5 3-9 9-11 3-2 7-1.5 9-1-1 3-4 9-9 11-3 1.5-6.5 2-9 1z"
        fill={active ? T.burgundy : 'none'} stroke={c} strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M5 18l6-6" stroke={active ? '#FFFCF6' : c} strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

function DevotionalsTabIcon({ active }: { active: boolean }) {
  const c = active ? T.burgundy : T.textMuted
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M2 4a2 2 0 012-2h6c1.5 0 2 .8 2 2v16l-5-2.5L2 20V4z"
        fill={active ? T.burgundy : 'none'} stroke={c} strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M12 4a2 2 0 012-2h6a2 2 0 012 2v16l-5-2.5-5 2.5V4z"
        fill={active ? T.burgundy : 'none'} stroke={c} strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
  )
}

function MoreTabIcon({ active }: { active: boolean }) {
  const c = active ? T.burgundy : T.textMuted
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <circle cx="5" cy="12" r="2" fill={c} />
      <circle cx="12" cy="12" r="2" fill={c} />
      <circle cx="19" cy="12" r="2" fill={c} />
    </svg>
  )
}

/* ─── Bottom Nav ─────────────────────────────────────────────── */
function BottomNav() {
  const tabs = [
    { id: 'home', label: 'Home', Icon: HomeTabIcon },
    { id: 'align', label: 'Align', Icon: AlignTabIcon },
    { id: 'devotionals', label: 'Devotionals', Icon: DevotionalsTabIcon },
    { id: 'more', label: 'More', Icon: MoreTabIcon },
  ]
  return (
    // Layer: Bottom Nav
    <div className="flex shrink-0" style={{ background: T.surface, borderTop: `1px solid ${T.border}`, paddingBottom: 20 }}>
      {tabs.map(t => {
        const active = t.id === 'home'
        return (
          <button key={t.id} className="flex-1 flex flex-col items-center gap-0.5 pt-2 pb-1">
            <t.Icon active={active} />
            <span className="text-[10px] font-medium" style={{ color: active ? T.burgundy : T.textMuted }}>
              {t.label}
            </span>
          </button>
        )
      })}
    </div>
  )
}

/* ─── Header ─────────────────────────────────────────────────── */
function Header() {
  return (
    // Layer: Header
    <div className="relative shrink-0">
      {/* Hero image with gradient fade */}
      <div className="relative overflow-hidden" style={{ height: 200 }}>
        <img src={HERO_IMG} alt="Ancient city at golden hour" className="w-full h-full object-cover" />
        <div className="absolute inset-0"
          style={{ background: `linear-gradient(to bottom, ${T.overlay}0.15) 0%, ${T.overlay}0.55) 55%, ${T.parchment} 100%)` }} />
      </div>

      {/* Greeting row — sits at bottom of hero zone */}
      <div className="absolute bottom-0 left-0 right-0 px-5 pb-3 flex items-end justify-between">
        <div>
          <h1 className="font-serif text-[28px] font-bold leading-[33px]" style={{ color: T.textPrimary }}>
            Good morning, Jalil
          </h1>
          <p className="text-[13px] mt-0.5" style={{ color: T.textSecondary }}>Level 3 · 275 XP</p>
        </div>

        {/* Avatar */}
        <div className="w-10 h-10 rounded-full overflow-hidden shrink-0 mb-0.5"
          style={{ border: `2px solid ${T.border}`, boxShadow: '0 1px 6px rgba(30,21,18,0.18)' }}>
          <img src={AVATAR_IMG} alt="Profile" className="w-full h-full object-cover" />
        </div>
      </div>
    </div>
  )
}

/* ─── Path Card ──────────────────────────────────────────────── */
function PathCard() {
  return (
    // Layer: Path Card
    <div className="rounded-[22px] overflow-hidden mx-5"
      style={{ background: T.surface, boxShadow: '0 2px 18px rgba(30,21,18,0.10)' }}>

      {/* Image section */}
      <div className="relative overflow-hidden" style={{ height: 168 }}>
        <img src={HERO_IMG} alt="Ancient golden city" className="w-full h-full object-cover" />
        <div className="absolute inset-0"
          style={{ background: `linear-gradient(to bottom, ${T.overlay}0.05) 30%, ${T.overlay}0.72) 100%)` }} />
        <div className="absolute inset-0 flex flex-col justify-end px-5 pb-4">
          <p className="text-[11px] font-semibold uppercase tracking-widest mb-1"
            style={{ color: T.goldLight, letterSpacing: '0.1em' }}>Your Path</p>
          <h2 className="font-serif text-[21px] font-bold leading-[26px] mb-1"
            style={{ color: '#FFFCF6' }}>Trusting God Through Uncertainty</h2>
          <p className="text-[12px]" style={{ color: 'rgba(255,252,246,0.78)' }}>
            Session 2 of 7 · Trust without demanding an outcome
          </p>
        </div>
      </div>

      {/* Button section */}
      <div className="px-5 py-4">
        <button className="w-full rounded-full font-semibold text-[16px] flex items-center justify-center gap-2"
          style={{ height: 50, background: T.burgundy, color: '#FFFCF6' }}>
          Continue Path
          <svg width="17" height="17" viewBox="0 0 17 17" fill="none">
            <path d="M3.5 8.5h10M9.5 4.5l4 4-4 4" stroke="#FFFCF6" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
    </div>
  )
}

/* ─── Current Alignment Card ─────────────────────────────────── */
function CurrentAlignmentCard() {
  return (
    // Layer: Current Alignment
    <div className="mx-5 rounded-[20px] overflow-hidden"
      style={{ background: T.surface, border: `1px solid ${T.border}` }}>
      <div className="px-4 py-4 flex items-start gap-3">
        {/* Leaf icon circle */}
        <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 mt-0.5"
          style={{ background: '#E6ECE2' }}>
          <LeafIcon />
        </div>

        {/* Text */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-1 mb-0.5">
            <div className="w-1.5 h-1.5 rounded-full" style={{ background: T.gold }} />
            <p className="text-[11px] font-semibold uppercase tracking-wider"
              style={{ color: T.gold, letterSpacing: '0.08em' }}>Your Current Alignment</p>
          </div>
          <p className="font-serif text-[17px] font-bold leading-[22px] mb-0.5" style={{ color: T.textPrimary }}>
            Deciding whether to accept this job
          </p>
          <p className="text-[12px]" style={{ color: T.textSecondary }}>Next: Choose your faithful action</p>
        </div>

        {/* Chevron */}
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="shrink-0 mt-2">
          <path d="M6 4l4 4-4 4" stroke={T.border} strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      </div>

      {/* Continue button */}
      <div className="px-4 pb-4">
        <div style={{ height: 1, background: T.border, marginBottom: 12 }} />
        <button className="flex items-center gap-1.5 rounded-full font-semibold text-[14px] px-5"
          style={{ height: 40, border: `1.5px solid ${T.burgundy}`, color: T.burgundy, background: 'transparent' }}>
          Continue Alignment →
        </button>
      </div>
    </div>
  )
}

/* ─── Devotional mini-card ───────────────────────────────────── */
function DevotionalMiniCard({ img, eyebrow, title }: { img: string; eyebrow: string; title: string }) {
  return (
    <div className="flex-1 rounded-[16px] overflow-hidden relative"
      style={{ height: 140, boxShadow: '0 2px 12px rgba(30,21,18,0.12)' }}>
      <img src={img} alt={eyebrow} className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0"
        style={{ background: `linear-gradient(to bottom, ${T.overlay}0.05) 0%, ${T.overlay}0.72) 100%)` }} />
      <div className="absolute inset-0 flex flex-col justify-end p-3">
        <p className="text-[10px] font-semibold uppercase tracking-wider mb-0.5"
          style={{ color: T.goldLight, letterSpacing: '0.1em' }}>{eyebrow}</p>
        <p className="font-serif text-[13px] font-bold leading-[17px]" style={{ color: '#FFFCF6' }}>{title}</p>
      </div>
      {/* Chevron overlay */}
      <div className="absolute top-2.5 right-2.5">
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
          <path d="M5 3l4 4-4 4" stroke="rgba(255,252,246,0.7)" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      </div>
    </div>
  )
}

/* ─── Devotionals Section ────────────────────────────────────── */
function DevotionalsSection() {
  return (
    // Layer: Devotionals
    <div className="px-5 flex flex-col gap-3">
      {/* Section header */}
      <div className="flex items-center justify-between">
        <p className="font-semibold text-[16px]" style={{ color: T.textPrimary }}>Today's Devotionals</p>
        <button className="text-[13px] font-medium" style={{ color: T.burgundy }}>See All</button>
      </div>

      {/* Two cards side by side */}
      <div className="flex gap-3">
        <DevotionalMiniCard
          img={DEV_FOR_YOU_IMG}
          eyebrow="For You"
          title="A quiet word for your next step"
        />
        <DevotionalMiniCard
          img={DEV_FOR_EVERYONE_IMG}
          eyebrow="For Everyone"
          title="Faith for real life today"
        />
      </div>
    </div>
  )
}

/* ─── ALIGN-GAP-006A — Home Exact Parity ────────────────────── */
export function HomeExactParity() {
  return (
    /* Phone frame: 390 × 844 */
    <div className="flex flex-col mx-auto overflow-hidden"
      style={{
        width: 390,
        height: 844,
        background: T.parchment,
        borderRadius: 44,
        boxShadow: '0 40px 120px rgba(0,0,0,0.7), 0 0 0 1px rgba(255,255,255,0.12)',
        position: 'relative',
        fontFamily: 'var(--font-sans)',
      }}>

      <StatusBar />

      {/* Layer: Header */}
      <div style={{ paddingTop: 44 }}>
        <Header />
      </div>

      {/* Scrollable body */}
      <div className="flex-1 overflow-y-auto scrollbar-hide flex flex-col gap-4 py-4">
        {/* Layer: Path Card */}
        <PathCard />
        {/* Layer: Current Alignment */}
        <CurrentAlignmentCard />
        {/* Layer: Devotionals */}
        <DevotionalsSection />
      </div>

      {/* Layer: Bottom Nav */}
      <BottomNav />
    </div>
  )
}
