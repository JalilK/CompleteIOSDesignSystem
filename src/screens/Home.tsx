import { useApp } from '../context'

const UNSPLASH = 'https://images.unsplash.com'
const HERO_IMG = `${UNSPLASH}/photo-1544441892-794166f1e3be?w=800&h=500&fit=crop&auto=format`
const DEVOTIONAL_IMG = `${UNSPLASH}/photo-1464822759023-fed622ff2c3b?w=400&h=260&fit=crop&auto=format`
const ALIGNMENT_IMG = `${UNSPLASH}/photo-1542314831-068cd1dbfeeb?w=400&h=260&fit=crop&auto=format`

function LevelRing({ level, xp, maxXP }: { level: number; xp: number; maxXP: number }) {
  const pct = xp / maxXP
  const r = 14
  const circ = 2 * Math.PI * r
  return (
    <div className="relative w-10 h-10">
      <svg width="40" height="40" className="rotate-[-90deg]">
        <circle cx="20" cy="20" r={r} fill="none" stroke="#DDD0C0" strokeWidth="2.5" />
        <circle cx="20" cy="20" r={r} fill="none" stroke="#741630" strokeWidth="2.5"
          strokeDasharray={circ} strokeDashoffset={circ * (1 - pct)} strokeLinecap="round" />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-[11px] font-bold" style={{ color: '#741630' }}>{level}</span>
      </div>
    </div>
  )
}

function PathCard({ onContinue }: { onContinue: () => void }) {
  return (
    <div className="rounded-[24px] overflow-hidden" style={{ background: '#FFFCF6', boxShadow: '0 2px 20px rgba(30,21,18,0.10)' }}>
      <div className="relative h-44 overflow-hidden">
        <img src={HERO_IMG} alt="Ancient path at golden hour" className="w-full h-full object-cover" />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(30,21,18,0) 40%, rgba(30,21,18,0.7) 100%)' }} />
        <div className="absolute bottom-4 left-5 right-5">
          <p className="text-[11px] font-semibold uppercase tracking-wider mb-1" style={{ color: '#E6C878', letterSpacing: '0.1em' }}>Your Path</p>
          <p className="font-serif text-[20px] font-bold leading-[25px]" style={{ color: '#FFFCF6' }}>Trusting God Through Uncertainty</p>
        </div>
      </div>
      <div className="px-5 py-4">
        <p className="text-[13px] mb-3" style={{ color: '#675A5D' }}>Session 2 of 7 · Trust without demanding an outcome · ~6 min</p>
        <button onClick={onContinue} className="w-full rounded-full font-semibold text-[16px] flex items-center justify-center gap-2 transition-all"
          style={{ height: 52, background: '#741630', color: '#FFFCF6' }}>
          Continue Path
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M4 9h10M10 5l4 4-4 4" stroke="#FFFCF6" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
        </button>
      </div>
    </div>
  )
}

function AlignmentCard({ onContinue }: { onContinue: () => void }) {
  return (
    <div className="rounded-[20px] overflow-hidden" style={{ background: '#FFFCF6', border: '1px solid #DDD0C0' }}>
      <div className="relative h-24 overflow-hidden">
        <img src={ALIGNMENT_IMG} alt="Olive tree landscape" className="w-full h-full object-cover" />
        <div className="absolute inset-0" style={{ background: 'rgba(30,21,18,0.45)' }} />
        <div className="absolute inset-0 px-4 flex items-center">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-wider" style={{ color: '#E6C878', letterSpacing: '0.1em' }}>Your Current Alignment</p>
            <p className="font-serif text-[17px] font-bold leading-[22px]" style={{ color: '#FFFCF6' }}>Deciding whether to accept this job</p>
          </div>
        </div>
      </div>
      <div className="px-4 py-3">
        <p className="text-[12px] mb-3" style={{ color: '#675A5D' }}>Proverbs 3:5–6 · James 4:13–15 · Next: Choose your faithful action</p>
        <button onClick={onContinue} className="rounded-full font-semibold text-[14px] px-5 flex items-center gap-1.5 transition-all"
          style={{ height: 40, border: '1.5px solid #741630', color: '#741630', background: 'transparent' }}>
          Continue Alignment →
        </button>
      </div>
    </div>
  )
}

function DevotionalCard({ onBegin }: { onBegin: () => void }) {
  return (
    <div className="rounded-[20px] overflow-hidden" style={{ background: '#FFFCF6', border: '1px solid #DDD0C0' }}>
      <div className="relative h-32 overflow-hidden">
        <img src={DEVOTIONAL_IMG} alt="Peaceful valley landscape" className="w-full h-full object-cover" />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(30,21,18,0) 20%, rgba(30,21,18,0.65) 100%)' }} />
        <div className="absolute bottom-3 left-4 right-4">
          <p className="text-[11px] font-semibold uppercase tracking-wider" style={{ color: '#E6C878', letterSpacing: '0.1em' }}>For You</p>
          <p className="font-serif text-[18px] font-bold leading-[23px]" style={{ color: '#FFFCF6' }}>Trust Without Demanding an Outcome</p>
        </div>
      </div>
      <div className="px-4 py-3 flex items-center justify-between">
        <div>
          <p className="text-[13px]" style={{ color: '#675A5D' }}>Proverbs 3:5–6 · ~5 min</p>
          <button className="text-[12px] font-medium" style={{ color: '#B68425' }}>Why this was selected</button>
        </div>
        <button onClick={onBegin}
          className="rounded-full font-semibold text-[14px] px-4 transition-all"
          style={{ height: 38, background: '#741630', color: '#FFFCF6' }}>
          Begin
        </button>
      </div>
    </div>
  )
}

function ProgressCapsule({ level, totalXP }: { level: number; totalXP: number }) {
  return (
    <div className="rounded-[20px] p-5" style={{ background: '#FFFCF6', border: '1px solid #DDD0C0' }}>
      <p className="text-[13px] font-semibold uppercase tracking-wider mb-4" style={{ color: '#897A76', letterSpacing: '0.08em' }}>Your Progress</p>
      <div className="flex gap-4">
        <div className="flex-1 text-center">
          <p className="font-serif text-[28px] font-bold" style={{ color: '#24171A' }}>{level}</p>
          <p className="text-[11px]" style={{ color: '#897A76' }}>Level</p>
        </div>
        <div className="w-px" style={{ background: '#DDD0C0' }} />
        <div className="flex-1 text-center">
          <p className="font-serif text-[28px] font-bold" style={{ color: '#24171A' }}>{totalXP}</p>
          <p className="text-[11px]" style={{ color: '#897A76' }}>XP</p>
        </div>
        <div className="w-px" style={{ background: '#DDD0C0' }} />
        <div className="flex-1 text-center">
          <p className="font-serif text-[28px] font-bold" style={{ color: '#24171A' }}>1</p>
          <p className="text-[11px]" style={{ color: '#897A76' }}>Mastered</p>
        </div>
      </div>
      <div className="mt-4 flex items-center gap-2">
        <div className="w-7 h-7 rounded-full flex items-center justify-center" style={{ background: '#F4EBDD' }}>
          <span className="text-[14px]">📖</span>
        </div>
        <div className="flex-1">
          <p className="text-[12px] font-medium" style={{ color: '#24171A' }}>Text Before Assumption · 1 of 3</p>
          <div className="h-1.5 rounded-full mt-1 overflow-hidden" style={{ background: '#DDD0C0' }}>
            <div className="h-full rounded-full" style={{ width: '33%', background: '#B68425' }} />
          </div>
        </div>
      </div>
    </div>
  )
}

export function Home() {
  const { navigate, totalXP, level } = useApp()

  const hour = new Date().getHours()
  const greeting = hour < 12 ? 'Good morning' : hour < 17 ? 'Good afternoon' : 'Good evening'

  return (
    <div className="flex flex-col h-full overflow-hidden" style={{ background: '#F7F1E7' }}>
      {/* Header */}
      <div className="relative">
        <div className="relative h-48 overflow-hidden">
          <img src={HERO_IMG} alt="Ancient city at golden hour" className="w-full h-full object-cover" />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(30,21,18,0.4) 0%, rgba(247,241,231,1) 100%)' }} />
        </div>
        <div className="absolute top-0 left-0 right-0 px-5 pt-14 flex items-start justify-between">
          <div>
            <h1 className="font-serif text-[26px] font-bold leading-[32px]" style={{ color: '#FFFCF6' }}>{greeting}, Jalil</h1>
            <p className="text-[13px]" style={{ color: 'rgba(255,252,246,0.75)' }}>Continue growing in the Word</p>
          </div>
          <div className="flex items-center gap-3">
            <LevelRing level={level} xp={totalXP % 400} maxXP={400} />
            <div className="w-9 h-9 rounded-full overflow-hidden" style={{ background: '#D8A8B1', border: '2px solid rgba(255,252,246,0.5)' }}>
              <div className="w-full h-full flex items-center justify-center font-bold text-[14px]" style={{ color: '#741630' }}>J</div>
            </div>
          </div>
        </div>
        <div className="px-5 pt-1 pb-1">
          <p className="text-[12px] font-medium" style={{ color: '#897A76' }}>Level {level} · {totalXP} XP</p>
        </div>
      </div>

      {/* Scrollable content */}
      <div className="flex-1 overflow-y-auto scrollbar-hide px-5 pb-6 flex flex-col gap-4 pt-2">
        <PathCard onContinue={() => navigate('practice-intro')} />
        <AlignmentCard onContinue={() => navigate('alignment-report')} />

        {/* Today's Devotionals */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <p className="font-semibold text-[16px]" style={{ color: '#24171A' }}>Today's Devotionals</p>
            <button className="text-[13px] font-medium" style={{ color: '#741630' }}>See All</button>
          </div>
          <DevotionalCard onBegin={() => navigate('devotional')} />
        </div>

        {/* Pray or meditate */}
        <div className="rounded-[18px] p-4 flex items-center gap-4" style={{ background: '#FFFCF6', border: '1px solid #DDD0C0' }}>
          <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0" style={{ background: '#E6ECE2' }}>
            <span className="text-[20px]">🙏</span>
          </div>
          <div className="flex-1">
            <p className="font-semibold text-[15px]" style={{ color: '#24171A' }}>Pray or meditate with Scripture</p>
            <p className="text-[12px]" style={{ color: '#675A5D' }}>Proverbs 3:5–6 · Based on your current journey</p>
          </div>
          <button onClick={() => navigate('prayer-mode')}
            className="rounded-full text-[13px] font-semibold px-3"
            style={{ height: 36, background: '#E6ECE2', color: '#607255' }}>
            Begin
          </button>
        </div>

        <ProgressCapsule level={level} totalXP={totalXP} />

        {/* Start new alignment */}
        <button onClick={() => navigate('alignment-intake')}
          className="w-full rounded-[18px] p-4 flex items-center gap-3 text-left transition-all"
          style={{ background: '#FFFCF6', border: '1.5px dashed #DDD0C0' }}>
          <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ background: '#F4EBDD' }}>
            <span className="text-[18px]">+</span>
          </div>
          <div>
            <p className="font-semibold text-[14px]" style={{ color: '#24171A' }}>Start a new Alignment</p>
            <p className="text-[12px]" style={{ color: '#897A76' }}>Bring a decision or burden under Scripture</p>
          </div>
        </button>
      </div>
    </div>
  )
}
