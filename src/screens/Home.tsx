import { useApp } from '../context'
import { alignmentAssets } from '../assets/alignment/assets'

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

function SearchIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <circle cx="8.5" cy="8.5" r="5" stroke="#8B6A3A" strokeWidth="1.6" />
      <path d="M12.3 12.3L16 16" stroke="#8B6A3A" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  )
}

function LeafDisc() {
  return (
    <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0" style={{ background: '#E8EBDD' }}>
      <svg width="23" height="23" viewBox="0 0 23 23" fill="none">
        <path d="M11.5 19V9.5" stroke="#607255" strokeWidth="1.6" strokeLinecap="round" />
        <path d="M11.5 10c-2.3-2.3-5.4-3-7.8-2.2 1 3.8 4.1 6.1 7.8 6.5" fill="#607255" opacity="0.35" />
        <path d="M11.5 10c2.4-2.7 5.6-3.6 8.1-3-1 4-4.4 6.4-8.1 7" fill="#607255" />
      </svg>
    </div>
  )
}

function ProgressStrip({ totalXP, passageMastery, onPress }: { totalXP: number; passageMastery: number; onPress: () => void }) {
  const xpToNext = 400 - (totalXP % 400)
  return (
    <button onClick={onPress} className="w-full rounded-[12px] p-4 text-left flex items-center gap-4" style={{ background: '#FFFCF6', border: '1px solid rgba(221,208,192,0.72)' }}>
      <LeafDisc />
      <div className="flex-1">
        <p className="text-[13px] font-semibold" style={{ color: '#24171A' }}>Your progress is current</p>
        <p className="text-[12px]" style={{ color: '#675A5D' }}>{totalXP} XP · {xpToNext} XP to next level · Passage Mastery {passageMastery} of 5</p>
      </div>
      <span style={{ color: '#9B6B18' }}>›</span>
    </button>
  )
}

export function Home() {
  const { navigate, setTab, totalXP, level, passageMastery } = useApp()

  return (
    <div className="flex flex-col h-full overflow-hidden" style={{ background: '#F7F1E7' }}>
      <div className="px-6 pt-14 pb-4 flex items-start justify-between shrink-0">
        <div>
          <h1 className="font-serif text-[26px] leading-[31px] font-bold" style={{ color: '#24171A' }}>
            Good morning, Jalil
          </h1>
          <p className="text-[13px] mt-1" style={{ color: '#675A5D' }}>Level {level} · {totalXP} XP</p>
        </div>
        <ProfileButton onPress={() => setTab('you')} />
      </div>

      <div className="flex-1 overflow-y-auto scrollbar-hide px-6 pb-6 flex flex-col gap-5">
        <section className="relative rounded-[14px] overflow-hidden shrink-0" style={{ height: 306, boxShadow: '0 2px 18px rgba(30,21,18,0.12)' }}>
          <img src={alignmentAssets.currentPath} alt="Stone path toward ancient hillside village" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(30,21,18,0.05) 0%, rgba(30,21,18,0.20) 45%, rgba(30,21,18,0.78) 100%)' }} />
          <div className="absolute left-5 right-5 bottom-5">
            <p className="text-[11px] font-semibold uppercase tracking-[0.12em] mb-2" style={{ color: '#E6C878' }}>Current Path</p>
            <h2 className="font-serif text-[30px] leading-[35px] font-bold mb-2" style={{ color: '#FFFCF6' }}>
              Bringing Scripture<br />Into Daily Decisions
            </h2>
            <p className="text-[15px] mb-5" style={{ color: 'rgba(255,252,246,0.9)' }}>
              Session 1 of 7 · Trust Before You Choose
            </p>
            <button onClick={() => navigate('practice-intro')}
              className="w-full rounded-[9px] font-semibold text-[16px] flex items-center justify-center"
              style={{ height: 50, background: '#8E1F3D', color: '#FFFCF6' }}>
              Begin Session 1
            </button>
          </div>
        </section>

        <section>
          <h2 className="font-serif text-[21px] leading-[26px] font-bold mb-3" style={{ color: '#24171A' }}>
            What are you facing today?
          </h2>
          <button onClick={() => navigate('alignment-intake')} className="w-full rounded-[12px] px-4 flex items-center gap-3 text-left" style={{ height: 54, background: '#FFFCF6', border: '1px solid rgba(221,208,192,0.7)' }}>
            <SearchIcon />
            <span className="flex-1 text-[14px]" style={{ color: '#897A76' }}>Share what’s on your heart...</span>
            <span style={{ color: '#9B6B18' }}>›</span>
          </button>
        </section>

        <section>
          <h2 className="font-serif text-[22px] leading-[27px] font-bold mb-3" style={{ color: '#24171A' }}>For You</h2>
          <button onClick={() => navigate('devotional')} className="relative w-full rounded-[12px] overflow-hidden text-left" style={{ height: 122, background: '#FFFCF6', boxShadow: '0 1px 10px rgba(30,21,18,0.08)' }}>
            <img src={alignmentAssets.forYou} alt="Olive branch devotional recommendation" className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(255,252,246,0.08) 0%, rgba(255,252,246,0.82) 54%, rgba(255,252,246,0.96) 100%)' }} />
            <div className="absolute right-9 left-[42%] top-0 bottom-0 flex items-center">
              <p className="font-serif text-[18px] leading-[23px] font-bold text-right" style={{ color: '#24171A' }}>
                Trust Without<br />Demanding an Outcome
              </p>
            </div>
            <span className="absolute right-4 top-1/2 -translate-y-1/2" style={{ color: '#9B6B18' }}>›</span>
          </button>
        </section>

        <button onClick={() => navigate('prayer-mode')} className="rounded-[12px] p-4 flex items-center gap-4 text-left" style={{ background: '#FFFCF6', border: '1px solid rgba(221,208,192,0.72)' }}>
          <LeafDisc />
          <div className="flex-1">
            <p className="font-serif text-[17px] leading-[21px] font-semibold" style={{ color: '#24171A' }}>Pray or meditate with Scripture</p>
            <p className="text-[12px] mt-1" style={{ color: '#675A5D' }}>Return to God’s presence through Proverbs 3:5–6.</p>
          </div>
          <span style={{ color: '#9B6B18' }}>›</span>
        </button>

        <ProgressStrip totalXP={totalXP} passageMastery={passageMastery} onPress={() => setTab('progress')} />
      </div>
    </div>
  )
}
