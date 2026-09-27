import { useState } from 'react'
import { useApp } from '../context'
import { IconDisc } from '../components/AppIcon'
import { alignmentAssets } from '../assets/alignment/assets'

const IMG1 = alignmentAssets.currentPath
const IMG2 = alignmentAssets.questionLandscape
const IMG3 = alignmentAssets.forYou
const IMG4 = alignmentAssets.completionLandscape

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
  const [searchOpen, setSearchOpen] = useState(false)
  const [query, setQuery] = useState('')
  const [showProgress, setShowProgress] = useState(false)
  const [showMastered, setShowMastered] = useState(false)
  const visiblePassages = showProgress ? passages.slice(1) : passages.slice(1, 3)
  const filteredPassages = query.trim()
    ? [...passages, ...mastered].filter(p => `${p.ref} ${p.context}`.toLowerCase().includes(query.toLowerCase()))
    : []

  return (
    <div className="flex flex-col h-full" style={{ background: '#F7F1E7' }}>
      {/* Header */}
      <div className="px-5 pt-14 pb-4 flex items-center justify-between" style={{ background: '#F7F1E7' }}>
        <h1 className="font-serif text-[30px] font-bold" style={{ color: '#24171A' }}>Scripture Library</h1>
        <button onClick={() => setSearchOpen(v => !v)} className="w-10 h-10 flex items-center justify-center" aria-label="Search library">
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
            <circle cx="9.5" cy="9.5" r="6.5" stroke="#675A5D" strokeWidth="1.8" />
            <path d="M14.5 14.5L20 20" stroke="#675A5D" strokeWidth="1.8" strokeLinecap="round" />
          </svg>
        </button>
      </div>

      <div className="flex-1 overflow-y-auto scrollbar-hide" style={{ paddingBottom: 'calc(env(safe-area-inset-bottom, 0px) + 24px)' }}>
        {searchOpen && (
          <div className="px-5 pb-4">
            <input
              value={query}
              onChange={event => setQuery(event.target.value)}
              autoFocus
              placeholder="Search Scripture, alignments, devotionals..."
              className="h-12 w-full rounded-[14px] px-4 text-[15px] outline-none"
              style={{ background: '#FFFCF6', border: '1px solid #DDD0C0', color: '#24171A' }}
            />
            {query.trim() && (
              <div className="mt-3 rounded-[14px] overflow-hidden" style={{ background: '#FFFCF6', border: '1px solid #DDD0C0' }}>
                {filteredPassages.length ? filteredPassages.map((p, index) => (
                  <button key={`${p.ref}-${index}`} onClick={() => navigate('practice-intro')} className="flex w-full items-center gap-3 px-3 py-3 text-left" style={{ borderBottom: index < filteredPassages.length - 1 ? '1px solid #DDD0C0' : 'none' }}>
                    <img src={p.img} alt="" className="h-12 w-12 rounded-[9px] object-cover" />
                    <span>
                      <span className="block font-serif text-[15px] font-semibold" style={{ color: '#24171A' }}>{p.ref}</span>
                      <span className="block text-[12px]" style={{ color: '#675A5D' }}>{p.context}</span>
                    </span>
                  </button>
                )) : (
                  <p className="px-4 py-3 text-[13px]" style={{ color: '#897A76' }}>No matching Scripture found.</p>
                )}
              </div>
            )}
          </div>
        )}

        {/* Ready for Review */}
        <div className="px-5 mb-2">
          <div className="flex items-center justify-between mb-3">
            <p className="text-[17px] font-semibold" style={{ color: '#24171A' }}>Ready for Review</p>
            <button onClick={() => setSearchOpen(true)} className="text-[13px] font-medium" style={{ color: '#741630' }}>See All</button>
          </div>
          <div className="rounded-[14px] overflow-hidden relative" style={{ height: 154, background: '#1a1208' }}>
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
            <button onClick={() => setShowProgress(v => !v)} className="text-[13px] font-medium" style={{ color: '#741630' }}>{showProgress ? 'Show Less' : 'See All'}</button>
          </div>
          <div className="flex flex-col gap-2.5">
            {visiblePassages.map((p, i) => (
              <button key={i} onClick={() => navigate('practice-intro')} className="rounded-[16px] flex items-center gap-4 overflow-hidden p-3 text-left" style={{ background: '#FFFCF6', border: '1px solid #DDD0C0' }}>
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
              </button>
            ))}
          </div>
        </div>

        {/* Mastered */}
        <div className="px-5 mt-5 pb-2">
          <div className="flex items-center justify-between mb-3">
            <p className="text-[17px] font-semibold" style={{ color: '#24171A' }}>Mastered</p>
            <button onClick={() => setShowMastered(v => !v)} className="text-[13px] font-medium" style={{ color: '#741630' }}>{showMastered ? 'Show Less' : 'See All'}</button>
          </div>
          {(showMastered ? mastered : mastered.slice(0, 1)).map((p, i) => (
            <button key={i} onClick={() => navigate('context-study')} className="rounded-[16px] flex w-full items-center gap-4 p-3 text-left" style={{ background: '#FFFCF6', border: '1px solid #DDD0C0' }}>
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
            </button>
          ))}
        </div>

        {/* Recent Alignments */}
        <div className="px-5 pb-8">
          <p className="text-[17px] font-semibold mb-3" style={{ color: '#24171A' }}>Recent Alignments</p>
          {[
            { title: 'Deciding whether to accept this job', time: 'Today', status: 'Faithful action waiting' },
            { title: 'Navigating conflict with a friend', time: '3 days ago', status: 'Complete' },
            { title: 'Finding contentment in this season', time: '1 week ago', status: 'Complete' },
          ].map((a, i) => (
            <button key={i} onClick={() => navigate(i === 0 ? 'faithful-action' : 'alignment-report')} className="flex w-full items-center gap-3 py-3 text-left" style={{ borderBottom: i < 2 ? '1px solid #DDD0C0' : 'none' }}>
              <IconDisc name="leaf" size={32} iconSize={17} bg="#F4EBDD" color="#607255" />
              <div className="flex-1">
                <p className="text-[14px] font-medium" style={{ color: '#24171A' }}>{a.title}</p>
                <p className="text-[12px]" style={{ color: '#897A76' }}>{a.time} · <span style={{ color: a.status === 'Complete' ? '#607255' : '#A66F17' }}>{a.status}</span></p>
              </div>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M6 4l4 4-4 4" stroke="#DDD0C0" strokeWidth="1.5" strokeLinecap="round" /></svg>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
