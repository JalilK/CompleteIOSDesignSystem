import { useState } from 'react'
import { useApp } from '../context'
import { AppIcon, type AppIconName } from '../components/AppIcon'
import { XPBar, levelForXP } from '../components/XPBar'
import { alignmentAssets } from '../assets/alignment/assets'

const achievements = [
  { id: 'tba', name: 'Text Before Assumption', desc: 'Read deeply, act wisely', unlocked: true, icon: 'book' as AppIconName, req: 'Answer 3 boundary questions correctly', progress: 3, total: 3 },
  { id: 'sic', name: 'Scripture in Context', desc: 'See the bigger picture', unlocked: true, icon: 'globe' as AppIconName, req: 'Complete 3 Context Studies', progress: 3, total: 3 },
  { id: 'fia', name: 'Faithful in Action', desc: 'Know it, live it', unlocked: true, icon: 'leaf' as AppIconName, req: 'Choose 3 faithful actions', progress: 3, total: 3 },
  { id: 'cc', name: 'Clear Communicator', desc: 'Listen well, speak true', unlocked: false, icon: 'message' as AppIconName, req: 'Complete 5 Communication Practice sessions', progress: 2, total: 5 },
  { id: 'pb', name: 'Path Begun', desc: 'The first step is real', unlocked: true, icon: 'path' as AppIconName, req: 'Begin your first Path', progress: 1, total: 1 },
  { id: 'pc', name: 'Path Completed', desc: 'You saw it through', unlocked: false, icon: 'flag' as AppIconName, req: 'Complete your first Path', progress: 0, total: 1 },
  { id: 'fa', name: 'First Alignment', desc: 'Brought it under the Word', unlocked: true, icon: 'scales' as AppIconName, req: 'Complete your first Alignment', progress: 1, total: 1 },
  { id: 'pm', name: 'Passage Mastered', desc: 'Deep understanding earned', unlocked: false, icon: 'book' as AppIconName, req: 'Reach Mastery Level 5 on any passage', progress: 2, total: 5 },
  { id: 'rr', name: 'Ready to Review', desc: 'Building lasting memory', unlocked: false, icon: 'sync' as AppIconName, req: 'Have 5 passages ready to review', progress: 1, total: 5 },
  { id: 'rw', name: 'Rooted in the Word', desc: 'Breadth and depth', unlocked: false, icon: 'tree' as AppIconName, req: 'Encounter 10 unique passages', progress: 4, total: 10 },
  { id: 'pts', name: 'Prayer Through Scripture', desc: 'Pray what God has said', unlocked: false, icon: 'prayer' as AppIconName, req: 'Complete 3 Pray Scripture sessions', progress: 1, total: 3 },
  { id: 'cp', name: 'Consistent Practice', desc: 'Faithfulness over time', unlocked: false, icon: 'calendar' as AppIconName, req: 'Practice 7 days this month', progress: 4, total: 7 },
]

function MedalBadge({ a }: { a: typeof achievements[0] }) {
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="relative">
        <div className="w-16 h-16 rounded-full flex items-center justify-center transition-all"
          style={{
            background: a.unlocked
              ? 'linear-gradient(135deg, #B68425 0%, #E6C878 50%, #B68425 100%)'
              : 'linear-gradient(135deg, #C8BFB2 0%, #E0D6CC 50%, #C8BFB2 100%)',
            boxShadow: a.unlocked ? '0 4px 20px rgba(182,132,37,0.4)' : '0 2px 8px rgba(0,0,0,0.1)',
          }}>
          <div className="w-12 h-12 rounded-full flex items-center justify-center"
            style={{ background: a.unlocked ? 'linear-gradient(135deg, #741630, #4B1021)' : '#B0A899' }}>
            <AppIcon name={a.icon} size={26} color={a.unlocked ? '#E6C878' : '#7E766B'} />
          </div>
        </div>
        {a.unlocked && (
          <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full flex items-center justify-center" style={{ background: '#607255', border: '2px solid #F7F1E7' }}>
            <svg width="10" height="8" viewBox="0 0 10 8" fill="none"><path d="M1 4l3 3 5-6" stroke="#FFFCF6" strokeWidth="1.8" strokeLinecap="round" /></svg>
          </div>
        )}
      </div>
      <p className="text-[11px] font-medium text-center leading-[15px]" style={{ color: a.unlocked ? '#24171A' : '#897A76', maxWidth: 70 }}>{a.name}</p>
    </div>
  )
}

function RhythmDots() {
  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  const practiced = [true, true, true, true, false, false, false]
  return (
    <div className="flex gap-2 items-center">
      {days.map((d, i) => (
        <div key={d} className="flex flex-col items-center gap-1">
          <div className="w-8 h-8 rounded-full flex items-center justify-center"
            style={{ background: practiced[i] ? '#741630' : '#DDD0C0' }}>
            {practiced[i] && <svg width="12" height="10" viewBox="0 0 12 10" fill="none"><path d="M1 5l3 4 7-8" stroke="#FFFCF6" strokeWidth="1.8" strokeLinecap="round" /></svg>}
          </div>
          <span className="text-[10px]" style={{ color: '#897A76' }}>{d.slice(0, 1)}</span>
        </div>
      ))}
    </div>
  )
}

export function Progress() {
  const { totalXP, level, navigate, recentXPGain } = useApp()
  const [showAll, setShowAll] = useState(false)
  const levelNode = levelForXP(totalXP)
  const nextThreshold = levelNode.level === 1 ? 100 : levelNode.level === 2 ? 250 : levelNode.level === 3 ? 500 : 850
  const previousThreshold = levelNode.min
  const pct = Math.min(100, ((totalXP - previousThreshold) / Math.max(1, nextThreshold - previousThreshold)) * 100)

  return (
    <div className="relative flex flex-col h-full" style={{ background: '#F7F1E7' }}>
      <div className="absolute left-0 right-0 top-0 h-[270px] overflow-hidden">
        <img src={alignmentAssets.currentPath} alt="" className="h-full w-full object-cover opacity-75" />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(247,241,231,0.05), rgba(247,241,231,0.62) 54%, #F7F1E7 100%)' }} />
      </div>

      <div className="relative z-10 px-5 pt-14 pb-3 flex items-center justify-between">
        <h1 className="font-serif text-[30px] font-bold" style={{ color: '#24171A' }}>Your Progress</h1>
        <button onClick={() => navigate('profile')} className="w-10 h-10 rounded-full flex items-center justify-center" style={{ background: 'rgba(255,252,246,0.76)', border: '1px solid rgba(221,208,192,0.8)' }} aria-label="Progress settings">
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
            <circle cx="11" cy="11" r="9" stroke="#675A5D" strokeWidth="1.8" />
            <path d="M8 8.5C8 7 9.5 6 11 6s3 1 3 2.5c0 2-3 2.5-3 4.5" stroke="#675A5D" strokeWidth="1.5" strokeLinecap="round" />
            <circle cx="11" cy="16.5" r="0.75" fill="#675A5D" />
          </svg>
        </button>
      </div>

      <div className="relative z-10 flex-1 overflow-y-auto scrollbar-hide px-5 pb-8 flex flex-col gap-5">
        {/* Level ring */}
        <div className="rounded-[24px] p-6 flex flex-col items-center gap-4" style={{ background: 'rgba(255,252,246,0.9)', boxShadow: '0 8px 30px rgba(30,21,18,0.10)', backdropFilter: 'blur(14px)' }}>
          <div className="relative w-32 h-32">
            <svg width="128" height="128" className="rotate-[-90deg]">
              <circle cx="64" cy="64" r="54" fill="none" stroke="#DDD0C0" strokeWidth="8" />
              <circle cx="64" cy="64" r="54" fill="none" stroke="url(#goldGrad)" strokeWidth="8"
                strokeDasharray={2 * Math.PI * 54}
                strokeDashoffset={2 * Math.PI * 54 * (1 - pct / 100)}
                strokeLinecap="round" />
              <defs>
                <linearGradient id="goldGrad" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#B68425" />
                  <stop offset="100%" stopColor="#E6C878" />
                </linearGradient>
              </defs>
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <AppIcon name="leaf" size={30} color="#B68425" />
              <p className="font-serif text-[22px] font-bold" style={{ color: '#24171A' }}>Level {level}</p>
              <p className="text-[11px]" style={{ color: '#897A76' }}>{totalXP} XP</p>
            </div>
          </div>
          <XPBar totalXP={totalXP} awardedXP={recentXPGain} id="progress-verified-xp" />
          <div className="flex gap-6">
            <div className="text-center">
              <p className="font-serif text-[22px] font-bold" style={{ color: '#24171A' }}>4</p>
              <p className="text-[11px]" style={{ color: '#897A76' }}>passages growing</p>
            </div>
            <div className="w-px" style={{ background: '#DDD0C0' }} />
            <div className="text-center">
              <p className="font-serif text-[22px] font-bold" style={{ color: '#24171A' }}>1</p>
              <p className="text-[11px]" style={{ color: '#897A76' }}>mastered</p>
            </div>
          </div>
        </div>

        {/* Path Progress */}
        <div className="rounded-[20px] p-5" style={{ background: '#FFFCF6', border: '1px solid #DDD0C0' }}>
          <p className="text-[13px] font-semibold uppercase tracking-wider mb-3" style={{ color: '#897A76', letterSpacing: '0.08em' }}>Active Path</p>
          <p className="font-serif text-[17px] font-semibold mb-1" style={{ color: '#24171A' }}>Trusting God Through Uncertainty</p>
          <p className="text-[13px] mb-3" style={{ color: '#675A5D' }}>Session 2 of 7</p>
          <div className="h-2.5 rounded-full overflow-hidden" style={{ background: '#DDD0C0' }}>
            <div className="h-full rounded-full bar-fill" style={{ width: '28%', background: '#741630' }} />
          </div>
          <p className="text-[12px] mt-1.5" style={{ color: '#897A76' }}>2 of 7 sessions complete</p>
        </div>

        {/* Achievements */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <p className="text-[17px] font-semibold" style={{ color: '#24171A' }}>Achievements</p>
            <button onClick={() => setShowAll(v => !v)} className="text-[13px] font-medium" style={{ color: '#741630' }}>{showAll ? 'Show Less' : 'See All'}</button>
          </div>
          <div className="grid grid-cols-4 gap-3">
            {achievements.slice(0, showAll ? achievements.length : 8).map(a => <MedalBadge key={a.id} a={a} />)}
          </div>
        </div>

        {/* Practice Rhythm */}
        <div className="rounded-[20px] p-5" style={{ background: '#FFFCF6', border: '1px solid #DDD0C0' }}>
          <div className="flex items-center gap-2 mb-4">
            <AppIcon name="calendar" size={20} color="#B68425" />
            <div>
              <p className="text-[15px] font-semibold" style={{ color: '#24171A' }}>Practice Rhythm</p>
              <p className="text-[13px]" style={{ color: '#675A5D' }}>4 days this week</p>
            </div>
          </div>
          <RhythmDots />
          <p className="text-[12px] mt-3" style={{ color: '#897A76' }}>Chosen rhythm: A few minutes every day · Personal best: 6 days</p>
        </div>

        {/* All achievements */}
        {showAll && <div>
          <p className="text-[17px] font-semibold mb-4" style={{ color: '#24171A' }}>All Achievements</p>
          <div className="flex flex-col gap-3">
            {achievements.map(a => (
              <div key={a.id} className="rounded-[16px] p-4 flex items-center gap-4" style={{ background: '#FFFCF6', border: '1px solid #DDD0C0' }}>
                <div className="w-12 h-12 rounded-full flex items-center justify-center shrink-0"
                  style={{ background: a.unlocked ? 'linear-gradient(135deg, #B68425, #E6C878)' : '#E0D6CC', boxShadow: a.unlocked ? '0 2px 12px rgba(182,132,37,0.3)' : 'none' }}>
                  <AppIcon name={a.icon} size={23} color={a.unlocked ? '#741630' : '#7E766B'} />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <p className="font-semibold text-[14px]" style={{ color: a.unlocked ? '#24171A' : '#675A5D' }}>{a.name}</p>
                    {a.unlocked && <span className="text-[10px] font-bold px-1.5 py-0.5 rounded" style={{ background: '#E6ECE2', color: '#40513B' }}>Earned</span>}
                  </div>
                  <p className="text-[12px]" style={{ color: '#897A76' }}>{a.req}</p>
                  {!a.unlocked && (
                    <div className="flex items-center gap-2 mt-1.5">
                      <div className="flex-1 h-1.5 rounded-full overflow-hidden" style={{ background: '#DDD0C0' }}>
                        <div className="h-full rounded-full" style={{ width: `${(a.progress / a.total) * 100}%`, background: '#B68425' }} />
                      </div>
                      <span className="text-[11px]" style={{ color: '#897A76' }}>{a.progress}/{a.total}</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>}
      </div>
    </div>
  )
}
