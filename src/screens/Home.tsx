import { useApp } from '../context'
import { alignmentAssets } from '../assets/alignment/assets'
import { XPBar } from '../components/XPBar'
import { AppIcon, IconDisc } from '../components/AppIcon'

function ProfileButton({ onPress }: { onPress: () => void }) {
  return (
    <button onClick={onPress} className="w-9 h-9 rounded-full flex items-center justify-center" style={{ border: '1.5px solid #D4B070', background: '#FFF8ED' }} aria-label="Profile">
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <circle cx="10" cy="7" r="3.2" stroke="#9B6B18" strokeWidth="1.4" />
        <path d="M4.8 16c.9-3 2.6-4.6 5.2-4.6S14.3 13 15.2 16" stroke="#9B6B18" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    </button>
  )
}

function LeafDisc() {
  return (
    <div className="w-12 h-12 rounded-full flex items-center justify-center shrink-0" style={{ background: '#ECE9DA' }}>
      <svg width="23" height="23" viewBox="0 0 23 23" fill="none">
        <path d="M11.5 19V9.5" stroke="#607255" strokeWidth="1.6" strokeLinecap="round" />
        <path d="M11.5 10c-2.3-2.3-5.4-3-7.8-2.2 1 3.8 4.1 6.1 7.8 6.5" fill="#607255" opacity="0.35" />
        <path d="M11.5 10c2.4-2.7 5.6-3.6 8.1-3-1 4-4.4 6.4-8.1 7" fill="#607255" />
      </svg>
    </div>
  )
}

const pathPieces = [
  {
    label: 'Devotional',
    title: 'Trust Without Demanding an Outcome',
    detail: 'Read the teaching from your current Path',
    recency: 'Today',
    action: 'Read',
    icon: 'book' as const,
    bg: '#F3E6C9',
    color: '#9B6B18',
    screen: 'devotional' as const,
  },
  {
    label: 'Prayer',
    title: 'Pray Proverbs 3:5-6',
    detail: 'Respond to the Scripture you just studied',
    recency: 'Yesterday',
    action: 'Pray',
    icon: 'prayer' as const,
    bg: '#F5E4D2',
    color: '#741630',
    screen: 'prayer-mode' as const,
  },
  {
    label: 'Scripture Practice',
    title: 'Proverbs 3:5-6',
    detail: 'Practiced recently · Level 2 of 5 · not mastered',
    recency: '3 days ago',
    action: 'Practice',
    icon: 'leaf' as const,
    bg: '#E6ECE2',
    color: '#607255',
    screen: 'practice-intro' as const,
  },
]

function PathPieceCard({ item, onPress }: { item: (typeof pathPieces)[number]; onPress: () => void }) {
  return (
    <button onClick={onPress} className="w-full rounded-[14px] p-4 text-left" style={{ background: '#FFFCF6', border: '1px solid #E5D7C6', boxShadow: '0 1px 12px rgba(30,21,18,0.07)' }}>
      <div className="flex items-start gap-3">
        <IconDisc name={item.icon} size={44} iconSize={22} bg={item.bg} color={item.color} />
        <div className="min-w-0 flex-1">
          <div className="flex items-center justify-between gap-2">
            <p className="text-[11px] font-semibold uppercase tracking-[0.11em]" style={{ color: item.color }}>{item.label}</p>
            <span className="shrink-0 text-[11px]" style={{ color: '#897A76' }}>{item.recency}</span>
          </div>
          <h3 className="mt-1 font-serif text-[19px] font-semibold leading-[23px]" style={{ color: '#24171A' }}>{item.title}</h3>
          <p className="mt-1 text-[13px] leading-[18px]" style={{ color: '#675A5D' }}>{item.detail}</p>
        </div>
        <span className="mt-8 text-[24px] leading-none" style={{ color: '#9B6B18' }}>›</span>
      </div>
      <div className="mt-3 flex items-center justify-between rounded-full px-3 py-2" style={{ background: '#F4EBDD' }}>
        <span className="flex items-center gap-1.5 text-[12px] font-medium" style={{ color: '#675A5D' }}>
          <AppIcon name="sync" size={14} color="#897A76" />
          Continue this part only
        </span>
        <span className="text-[13px] font-semibold" style={{ color: '#741630' }}>{item.action}</span>
      </div>
    </button>
  )
}

export function Home() {
  const { navigate, setTab, totalXP, level, recentXPGain } = useApp()

  return (
    <div className="flex flex-col h-full overflow-hidden" style={{ background: '#F7F1E7' }}>
      <div className="px-6 pt-14 pb-4 flex items-start justify-between shrink-0">
        <div>
          <h1 className="font-serif text-[26px] leading-[31px] font-normal" style={{ color: '#24171A' }}>
            Good morning, Jalil
          </h1>
          <p className="text-[13px] mt-1" style={{ color: '#675A5D' }}>Level {level} · {totalXP} verified XP</p>
          <div className="mt-2 w-32">
            <XPBar totalXP={totalXP} awardedXP={recentXPGain} compact id="home-header-xp" />
          </div>
        </div>
        <ProfileButton onPress={() => setTab('you')} />
      </div>

      <div className="flex-1 overflow-y-auto scrollbar-hide px-6 pb-6 flex flex-col gap-5">
        <section className="relative rounded-[14px] overflow-hidden shrink-0" style={{ height: 315, boxShadow: '0 2px 18px rgba(30,21,18,0.14)' }}>
          <img src={alignmentAssets.currentPath} alt="Stone path toward ancient hillside village" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(30,21,18,0.08) 0%, rgba(30,21,18,0.26) 38%, rgba(30,21,18,0.88) 100%)' }} />
          <div className="absolute left-5 right-5 bottom-4">
            <button onClick={() => navigate('path-overview')} className="text-left">
              <p className="text-[11px] font-semibold uppercase tracking-[0.11em] mb-2" style={{ color: '#E0B95F', textShadow: '0 1px 8px rgba(0,0,0,0.60)' }}>Your Path</p>
              <h2 className="font-serif text-[26px] leading-[31px] font-normal mb-2" style={{ color: '#FFFCF6', textShadow: '0 2px 12px rgba(0,0,0,0.64)' }}>
                Trusting God Through<br />Uncertainty
              </h2>
              <p className="text-[14px] leading-[19px] mb-3" style={{ color: 'rgba(255,252,246,0.94)', textShadow: '0 1px 8px rgba(0,0,0,0.60)' }}>
                Session 2 of 7 · Trust without demanding<br />an outcome
              </p>
            </button>
            <div className="mb-3 h-1.5 overflow-hidden rounded-full" style={{ background: 'rgba(255,252,246,0.32)' }}>
              <div className="h-full rounded-full" style={{ width: '28.5%', background: '#E6C878' }} />
            </div>
            <button onClick={() => navigate('path-cover')}
              className="w-full rounded-[24px] font-semibold text-[15px] flex items-center justify-center gap-2"
              style={{ height: 50, background: '#8E1F3D', color: '#FFFCF6' }}>
              Continue Path <span className="text-[24px] leading-none">›</span>
            </button>
          </div>
        </section>

        <section className="rounded-[14px] p-4" style={{ background: '#FFFCF6', boxShadow: '0 1px 12px rgba(30,21,18,0.07)' }}>
          <button onClick={() => navigate('faithful-action')} className="w-full text-left flex items-start gap-3">
            <LeafDisc />
            <div className="flex-1 pt-0.5">
              <p className="text-[11px] font-semibold uppercase tracking-[0.11em]" style={{ color: '#B18423' }}>Your Current Alignment</p>
              <h2 className="font-serif text-[19px] leading-[24px] mt-1" style={{ color: '#24171A' }}>
                Deciding whether to<br />accept this job
              </h2>
              <p className="text-[13px] leading-[18px] mt-1" style={{ color: '#675A5D' }}>Next: Choose your faithful action</p>
            </div>
            <span className="text-[26px] pt-6" style={{ color: '#24171A' }}>›</span>
          </button>
          <button onClick={() => navigate('faithful-action')}
            className="w-full mt-3 rounded-[24px] font-semibold text-[14px] flex items-center justify-center gap-2"
            style={{ height: 45, background: '#EFE7D8', color: '#741630' }}>
            Continue Alignment <span className="text-[23px] leading-none">›</span>
          </button>
        </section>

        <section>
          <div className="mb-3 flex items-end justify-between gap-3">
            <div>
              <h2 className="font-serif text-[21px] leading-[25px] font-normal" style={{ color: '#24171A' }}>Continue your study</h2>
              <p className="mt-1 text-[12px] leading-[16px]" style={{ color: '#675A5D' }}>Newest activity first. Do a devotional, pray, or revisit Scripture without starting the full Path.</p>
            </div>
            <button onClick={() => navigate('library')} className="shrink-0 text-[13px]" style={{ color: '#675A5D' }}>See All</button>
          </div>
          <div className="flex flex-col gap-3">
            {pathPieces.map(item => (
              <PathPieceCard key={item.label} item={item} onPress={() => navigate(item.screen)} />
            ))}
          </div>
        </section>

      </div>
    </div>
  )
}
