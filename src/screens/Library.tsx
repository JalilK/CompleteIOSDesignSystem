import { useApp } from '../context'

const UNSPLASH = 'https://images.unsplash.com'
const IMG1 = `${UNSPLASH}/photo-1506905925346-21bda4d32df4?w=300&h=200&fit=crop&auto=format`
const IMG2 = `${UNSPLASH}/photo-1464822759023-fed622ff2c3b?w=300&h=200&fit=crop&auto=format`
const IMG3 = `${UNSPLASH}/photo-1544441892-794166f1e3be?w=300&h=200&fit=crop&auto=format`
const IMG4 = `${UNSPLASH}/photo-1542314831-068cd1dbfeeb?w=300&h=200&fit=crop&auto=format`

const passages = [
  { ref: 'Proverbs 3:5–6', context: 'Trusting God Through Uncertainty', mastery: 2, img: IMG1, tag: 'Ready for review' },
  { ref: 'James 1:2–4', context: 'Joy in Trials', mastery: 1, img: IMG2, tag: 'Growing' },
  { ref: 'Philippians 4:6–7', context: 'Peace in Every Season', mastery: 1, img: IMG3, tag: 'Growing' },
]
const mastered = [
  { ref: 'Colossians 3:12–14', context: 'A Life of Love', img: IMG4 },
]

export function Library() {
  const { navigate } = useApp()

  return (
    <div className="flex flex-col h-full" style={{ background: '#F7F1E7' }}>
      {/* Header */}
      <div className="px-5 pt-14 pb-4 flex items-center justify-between" style={{ background: '#F7F1E7' }}>
        <h1 className="font-serif text-[30px] font-bold" style={{ color: '#24171A' }}>Scripture Library</h1>
        <button className="w-10 h-10 flex items-center justify-center">
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
            <circle cx="9.5" cy="9.5" r="6.5" stroke="#675A5D" strokeWidth="1.8" />
            <path d="M14.5 14.5L20 20" stroke="#675A5D" strokeWidth="1.8" strokeLinecap="round" />
          </svg>
        </button>
      </div>

      <div className="flex-1 overflow-y-auto scrollbar-hide">
        {/* Ready for Review */}
        <div className="px-5 mb-2">
          <div className="flex items-center justify-between mb-3">
            <p className="text-[17px] font-semibold" style={{ color: '#24171A' }}>Ready for Review</p>
            <button className="text-[13px] font-medium" style={{ color: '#741630' }}>See All</button>
          </div>
          <div className="rounded-[20px] overflow-hidden relative" style={{ height: 160, background: '#1a1208' }}>
            <img src={IMG1} alt="Valley landscape" className="w-full h-full object-cover opacity-80" />
            <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(30,21,18,0.85) 0%, rgba(30,21,18,0.1) 100%)' }} />
            <div className="absolute bottom-4 left-4 right-4">
              <p className="font-serif text-[20px] font-bold" style={{ color: '#FFFCF6' }}>Proverbs 3:5–6</p>
              <p className="text-[13px]" style={{ color: 'rgba(255,252,246,0.7)' }}>Trusting God Through Uncertainty</p>
              <div className="flex items-center justify-between mt-2">
                <span className="text-[11px] font-medium px-2 py-0.5 rounded-full" style={{ background: 'rgba(182,132,37,0.3)', color: '#E6C878' }}>Passage Mastery · Level 2 of 5</span>
                <button onClick={() => navigate('practice-intro')}
                  className="text-[13px] font-semibold px-3 py-1 rounded-full"
                  style={{ background: '#741630', color: '#FFFCF6' }}>
                  Review →
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Passages in Progress */}
        <div className="px-5 mt-5">
          <div className="flex items-center justify-between mb-3">
            <p className="text-[17px] font-semibold" style={{ color: '#24171A' }}>Passages in Progress</p>
            <button className="text-[13px] font-medium" style={{ color: '#741630' }}>See All</button>
          </div>
          <div className="flex flex-col gap-2.5">
            {passages.slice(1).map((p, i) => (
              <div key={i} className="rounded-[16px] flex items-center gap-4 overflow-hidden p-3" style={{ background: '#FFFCF6', border: '1px solid #DDD0C0' }}>
                <div className="w-16 h-16 rounded-[12px] overflow-hidden shrink-0">
                  <img src={p.img} alt={p.ref} className="w-full h-full object-cover" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-serif font-semibold text-[15px]" style={{ color: '#24171A' }}>{p.ref}</p>
                  <p className="text-[12px] truncate" style={{ color: '#675A5D' }}>{p.context}</p>
                  <div className="flex items-center gap-2 mt-1.5">
                    <div className="flex-1 h-1.5 rounded-full overflow-hidden" style={{ background: '#DDD0C0' }}>
                      <div className="h-full rounded-full" style={{ width: `${p.mastery * 20}%`, background: '#741630' }} />
                    </div>
                    <span className="text-[11px]" style={{ color: '#897A76' }}>Lvl {p.mastery}</span>
                  </div>
                </div>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="shrink-0">
                  <path d="M6 4l4 4-4 4" stroke="#DDD0C0" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </div>
            ))}
          </div>
        </div>

        {/* Mastered */}
        <div className="px-5 mt-5 pb-6">
          <div className="flex items-center justify-between mb-3">
            <p className="text-[17px] font-semibold" style={{ color: '#24171A' }}>Mastered</p>
            <button className="text-[13px] font-medium" style={{ color: '#741630' }}>See All</button>
          </div>
          {mastered.map((p, i) => (
            <div key={i} className="rounded-[16px] flex items-center gap-4 p-3" style={{ background: '#FFFCF6', border: '1px solid #DDD0C0' }}>
              <div className="w-16 h-16 rounded-[12px] overflow-hidden shrink-0">
                <img src={p.img} alt={p.ref} className="w-full h-full object-cover" />
              </div>
              <div className="flex-1">
                <p className="font-serif font-semibold text-[15px]" style={{ color: '#24171A' }}>{p.ref}</p>
                <p className="text-[12px]" style={{ color: '#675A5D' }}>{p.context}</p>
                <span className="text-[11px] font-medium px-2 py-0.5 rounded-full mt-1 inline-block" style={{ background: '#E6ECE2', color: '#40513B' }}>✓ Mastered</span>
              </div>
              <div className="w-7 h-7 rounded-full flex items-center justify-center" style={{ background: '#E6ECE2' }}>
                <svg width="14" height="11" viewBox="0 0 14 11" fill="none"><path d="M1 5.5l4 4 8-9" stroke="#607255" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </div>
            </div>
          ))}
        </div>

        {/* Recent Alignments */}
        <div className="px-5 pb-6">
          <p className="text-[17px] font-semibold mb-3" style={{ color: '#24171A' }}>Recent Alignments</p>
          {[
            { title: 'Deciding whether to accept this job', time: 'Today', status: 'Faithful action waiting' },
            { title: 'Navigating conflict with a friend', time: '3 days ago', status: 'Complete' },
            { title: 'Finding contentment in this season', time: '1 week ago', status: 'Complete' },
          ].map((a, i) => (
            <div key={i} className="flex items-center gap-3 py-3" style={{ borderBottom: i < 2 ? '1px solid #DDD0C0' : 'none' }}>
              <div className="w-8 h-8 rounded-full flex items-center justify-center shrink-0" style={{ background: '#F4EBDD' }}>
                <span className="text-[14px]">🌿</span>
              </div>
              <div className="flex-1">
                <p className="text-[14px] font-medium" style={{ color: '#24171A' }}>{a.title}</p>
                <p className="text-[12px]" style={{ color: '#897A76' }}>{a.time} · <span style={{ color: a.status === 'Complete' ? '#607255' : '#A66F17' }}>{a.status}</span></p>
              </div>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M6 4l4 4-4 4" stroke="#DDD0C0" strokeWidth="1.5" strokeLinecap="round" /></svg>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
