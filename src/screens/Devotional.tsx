import { useState } from 'react'
import { useApp } from '../context'
import { AppIcon, IconDisc } from '../components/AppIcon'
import { alignmentAssets } from '../assets/alignment/assets'

const DEV_IMG = alignmentAssets.currentPath
const PRAYER_IMG = alignmentAssets.methodBibleRoom
const STILL_WATERS_IMG = alignmentAssets.completionLandscape
const MORNING_PATH_IMG = alignmentAssets.questionLandscape
const QUIET_ROOM_IMG = alignmentAssets.forYou
const TRANSLATION_LABEL = 'Selected translation'

function BackButton({ onBack }: { onBack: () => void }) {
  return (
    <button onClick={onBack} className="w-10 h-10 flex items-center justify-center rounded-full" aria-label="Back">
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M12 4L6 10l6 6" stroke="#675A5D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </button>
  )
}

export function Devotional() {
  const { navigate, goBack } = useApp()

  return (
    <div className="flex flex-col h-full overflow-hidden">
      <div className="relative h-52 overflow-hidden shrink-0">
        <img src={DEV_IMG} alt="Valley landscape with golden light" className="w-full h-full object-cover" />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(30,21,18,0.2) 0%, rgba(247,241,231,1) 100%)' }} />
        <div className="absolute top-14 left-5 right-5 flex items-start justify-between">
          <BackButton onBack={() => goBack('home')} />
          <button className="w-10 h-10 flex items-center justify-center">
            <svg width="20" height="20" viewBox="0 0 22 22" fill="none">
              <path d="M5 3h12a2 2 0 012 2v14l-7-3-7 3V5a2 2 0 012-2z" stroke="#675A5D" strokeWidth="1.8" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
        <div className="absolute bottom-5 left-5 right-5">
          <p className="text-[11px] font-semibold uppercase tracking-wider mb-1" style={{ color: '#B68425', letterSpacing: '0.1em' }}>For You</p>
          <h1 className="font-serif text-[26px] font-bold leading-[32px]" style={{ color: '#24171A' }}>
            Trust Without Demanding an Outcome
          </h1>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto scrollbar-hide px-5 pb-8 flex flex-col gap-5" style={{ background: '#F7F1E7' }}>
        {/* Why selected */}
        <button className="flex items-center gap-2 text-[13px] font-medium" style={{ color: '#B68425' }}>
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><circle cx="7" cy="7" r="6" stroke="#B68425" strokeWidth="1.5" /><path d="M7 5v3M7 9.5v.5" stroke="#B68425" strokeWidth="1.5" strokeLinecap="round" /></svg>
          Why this was selected for you
        </button>

        {/* Scripture */}
        <div>
          <p className="text-[12px] font-semibold uppercase tracking-wider mb-3" style={{ color: '#B68425', letterSpacing: '0.1em' }}>Principal Scripture</p>
          <div className="rounded-[20px] p-5 relative overflow-hidden" style={{ background: '#F4EBDD' }}>
            <div className="text-[28px] font-serif leading-none mb-2" style={{ color: '#741630' }}>"</div>
            <p className="font-serif text-[19px] leading-[29px] italic" style={{ color: '#24171A' }}>
              Trust in the LORD with all thine heart; and lean not unto thine own understanding. In all thy ways acknowledge him, and he shall direct thy paths.
            </p>
            <p className="text-[13px] font-semibold mt-3" style={{ color: '#675A5D' }}>Proverbs 3:5–6 · {TRANSLATION_LABEL}</p>
            <div className="absolute left-0 top-0 bottom-0 w-1 rounded-l-[20px]" style={{ background: '#741630' }} />
          </div>
        </div>

        {/* Supporting passage */}
        <div className="rounded-[16px] p-4 flex gap-3" style={{ background: '#FFFCF6', border: '1px solid #DDD0C0' }}>
          <div className="w-1 rounded-full shrink-0" style={{ background: '#B68425' }} />
          <div>
            <span className="text-[11px] font-semibold uppercase tracking-wider" style={{ color: '#B68425' }}>Supports</span>
            <p className="font-serif text-[14px] leading-[21px] italic mt-1" style={{ color: '#24171A' }}>
              If the Lord will, we shall live, and do this, or that.
            </p>
            <p className="text-[12px] font-semibold mt-1" style={{ color: '#675A5D' }}>James 4:15 · {TRANSLATION_LABEL}</p>
          </div>
        </div>

        {/* Teaching */}
        <div>
          <p className="text-[12px] font-semibold uppercase tracking-wider mb-2" style={{ color: '#897A76', letterSpacing: '0.1em' }}>What the passages teach</p>
          <p className="text-[15px] leading-[23px]" style={{ color: '#24171A' }}>
            Trust does not require you to pretend that the future is certain. It calls you to place final confidence in the Lord while planning humbly.
          </p>
        </div>

        {/* Boundary */}
        <div className="rounded-[14px] p-4 flex gap-3" style={{ background: '#FFF3CD', border: '1px solid #E6C878' }}>
          <AppIcon name="alert" size={18} color="#9B6B18" className="shrink-0 mt-0.5" />
          <div>
            <p className="text-[12px] font-semibold mb-1" style={{ color: '#795719' }}>What the passages do not establish</p>
            <p className="text-[13px] leading-[20px]" style={{ color: '#795719' }}>
              These passages do not promise that trust will produce the particular outcome you prefer. Faithfulness and specific outcomes are distinct.
            </p>
          </div>
        </div>

        {/* Faithful response */}
        <div>
          <p className="text-[12px] font-semibold uppercase tracking-wider mb-2" style={{ color: '#897A76', letterSpacing: '0.1em' }}>Faithful response</p>
          <p className="text-[15px] leading-[23px]" style={{ color: '#24171A' }}>
            Make decisions without turning your preferred outcome into a promise God made. Trust the direction; release the result.
          </p>
        </div>

        {/* Actions */}
        <div className="flex flex-col gap-2.5 pt-2">
          <button onClick={() => navigate('context-study')}
            className="w-full rounded-full font-semibold text-[17px] flex items-center justify-center gap-2 transition-all"
            style={{ height: 56, background: '#741630', color: '#FFFCF6' }}>
            Read Scripture
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M4 9h10M10 5l4 4-4 4" stroke="#FFFCF6" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </button>
          <button onClick={() => navigate('practice-intro')}
            className="w-full rounded-full font-semibold text-[16px] flex items-center justify-center gap-2 transition-all"
            style={{ height: 52, background: 'transparent', border: '1.5px solid #DDD0C0', color: '#675A5D' }}>
            Practice This Teaching
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M6 4l4 4-4 4" stroke="#675A5D" strokeWidth="1.5" strokeLinecap="round" /></svg>
          </button>
          <div className="flex gap-2.5">
            <button onClick={() => navigate('prayer-mode')}
              className="flex-1 rounded-full font-semibold text-[14px] transition-all flex items-center justify-center gap-2"
              style={{ height: 48, background: 'transparent', border: '1.5px solid #DDD0C0', color: '#675A5D' }}>
              <AppIcon name="prayer" size={17} color="#675A5D" /> Pray Scripture
            </button>
            <button className="flex-1 rounded-full font-semibold text-[14px] transition-all flex items-center justify-center gap-2"
              style={{ height: 48, background: 'transparent', border: '1.5px solid #DDD0C0', color: '#675A5D' }}>
              <AppIcon name="audio" size={17} color="#675A5D" /> Listen
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

// Prayer mode
export function PrayerMode() {
  const { navigate } = useApp()

  return (
    <div className="flex flex-col h-full" style={{ background: '#F7F1E7' }}>
      <div className="px-5 pt-16 pb-5">
        <h1 className="font-serif text-[34px] font-semibold leading-[40px]" style={{ color: '#24171A' }}>Pray or meditate</h1>
      </div>

      <div className="flex-1 overflow-y-auto scrollbar-hide px-5 pb-7 flex flex-col gap-5">
        <button onClick={() => navigate('devotional')} className="rounded-[14px] p-3 flex items-center gap-4 text-left" style={{ background: '#FFFCF6', border: '1px solid #E5D7C6' }}>
          <div className="h-[86px] w-[105px] rounded-[9px] overflow-hidden shrink-0">
            <img src={PRAYER_IMG} alt="Open Bible in quiet light" className="h-full w-full object-cover" />
          </div>
          <div className="flex-1">
            <p className="font-serif text-[16px] font-semibold" style={{ color: '#24171A' }}>Proverbs 3:5–6</p>
            <p className="text-[12px] mt-1" style={{ color: '#675A5D' }}>{TRANSLATION_LABEL}</p>
          </div>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M6 4l4 4-4 4" stroke="#897A76" strokeWidth="1.5" strokeLinecap="round" /></svg>
        </button>

        <p className="text-[15px]" style={{ color: '#30272A' }}>Stay with the Scripture you just studied.</p>

        <div className="flex flex-col gap-3">
          {[
            { screen: 'pray-scripture' as const, title: 'Pray Scripture', desc: 'Turn these verses into a prayer of your own.', icon: 'prayer', bg: '#F5E4D2', fg: '#9B6B18' },
            { screen: 'guided-prayer' as const, title: 'Guided prayer', desc: 'A guided prayer based on this Scripture.', icon: 'document', bg: '#E6ECE2', fg: '#607255' },
            { screen: 'meditation-player' as const, title: 'Guided Scripture meditation · 6 min', desc: 'A calm, reflective journey with this passage.', icon: 'leaf', bg: '#F3E1E3', fg: '#741630' },
          ].map(item => (
            <button key={item.title} onClick={() => navigate(item.screen)}
              className="rounded-[16px] p-4 flex items-center gap-4 text-left"
              style={{ background: '#FFFCF6', border: '1px solid #E5D7C6' }}>
              <span className="flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-full" style={{ background: item.bg }}>
                <PrayerIcon kind={item.icon} color={item.fg} />
              </span>
              <span className="flex-1">
                <span className="block font-serif text-[17px] font-semibold" style={{ color: '#3A0D18' }}>{item.title}</span>
                <span className="mt-1 block text-[13px] leading-[18px]" style={{ color: '#675A5D' }}>{item.desc}</span>
              </span>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M6 4l4 4-4 4" stroke="#897A76" strokeWidth="1.5" strokeLinecap="round" /></svg>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

function PrayerIcon({ kind, color }: { kind: string; color: string }) {
  if (kind === 'prayer') {
    return <svg width="28" height="28" viewBox="0 0 28 28" fill="none"><path d="M11 5c1.5 3.5 1.4 7.6.4 11.5L9 24M17 5c-1.5 3.5-1.4 7.6-.4 11.5L19 24M11.4 16.5c-2.5 1.2-4.3 3.3-5.4 6.5M16.6 16.5c2.5 1.2 4.3 3.3 5.4 6.5" stroke={color} strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/></svg>
  }
  if (kind === 'document') {
    return <svg width="27" height="27" viewBox="0 0 27 27" fill="none"><path d="M7 4h9l4 4v15H7V4z" stroke={color} strokeWidth="1.6" strokeLinejoin="round"/><path d="M16 4v5h5M10 13h7M10 17h7" stroke={color} strokeWidth="1.6" strokeLinecap="round"/></svg>
  }
  return <svg width="27" height="27" viewBox="0 0 27 27" fill="none"><path d="M7 21c1.3-5.8 4.4-10 12.8-13.2-1.4 8.2-5.3 12.2-12.8 13.2z" stroke={color} strokeWidth="1.6" strokeLinejoin="round"/><path d="M7 21l8-8" stroke={color} strokeWidth="1.6" strokeLinecap="round"/></svg>
}

export function PrayScriptureScreen() {
  const { navigate, goBack } = useApp()
  return <PrayScripture onBack={() => goBack('prayer-mode')} onFinish={() => navigate('meditation-player')} />
}

export function GuidedPrayerScreen() {
  const { navigate, goBack } = useApp()
  return <GuidedPrayer onBack={() => goBack('prayer-mode')} onFinish={() => navigate('meditation-player')} />
}

function PrayScripture({ onBack, onFinish }: { onBack: () => void; onFinish: () => void }) {
  const verses = [
    { ref: 'Proverbs 3:5–6', text: 'Trust in the LORD with all thine heart; and lean not unto thine own understanding.' },
    { ref: 'Proverbs 3:5–6', text: 'In all thy ways acknowledge him, and he shall direct thy paths.' },
  ]
  const [idx, setIdx] = useState(0)

  return (
    <div className="flex flex-col h-full" style={{ background: '#F7F1E7' }}>
      <div className="px-5 pt-14 pb-4 flex items-center justify-between">
        <button onClick={onBack} className="w-10 h-10 flex items-center justify-center rounded-full" aria-label="Back">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M12 4L6 10l6 6" stroke="#675A5D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
        </button>
        <div>
          <span className="block h-1 w-8 rounded-full" style={{ background: '#DDD0C0' }} />
        </div>
        <button className="w-10 h-10 flex items-center justify-center" aria-label="More"><span className="text-[20px]" style={{ color: '#24171A' }}>...</span></button>
      </div>
      <div className="px-7">
        <h1 className="font-serif text-[37px] font-semibold leading-[44px]" style={{ color: '#24171A' }}>Pray Scripture</h1>
        <p className="mt-3 text-[16px] leading-[22px]" style={{ color: '#30272A' }}>Read slowly. Pause where the words meet your need.</p>
      </div>
      <div className="flex-1 px-7 pt-5 flex flex-col gap-6">
        <div className="rounded-[15px] p-6" style={{ background: '#F4EBDD', border: '1px solid #E5D7C6' }}>
          <p className="font-serif text-[22px] leading-[34px]" style={{ color: '#24171A' }}>
            {verses.map(v => v.text).join(' ')}
          </p>
          <div className="my-7 h-px" style={{ background: '#D7C4AF' }} />
          <p className="font-serif text-[16px]" style={{ color: '#24171A' }}>Proverbs 3:5–6</p>
          <p className="mt-1 text-[13px]" style={{ color: '#675A5D' }}>{TRANSLATION_LABEL}</p>
        </div>
      </div>
      <div className="px-5 pb-10 pt-4 flex flex-col gap-2.5">
        <button onClick={onFinish}
          className="w-full rounded-full font-semibold text-[17px] flex items-center justify-center gap-2 transition-all"
          style={{ height: 56, background: '#741630', color: '#FFFCF6' }}>
          Begin prayer →
        </button>
      </div>
    </div>
  )
}

function GuidedPrayer({ onBack, onFinish }: { onBack: () => void; onFinish: () => void }) {
  return (
    <div className="flex flex-col h-full overflow-hidden" style={{ background: '#F7F1E7' }}>
      <div className="px-5 pt-14 pb-4 flex items-center justify-between shrink-0">
        <button onClick={onBack} className="w-10 h-10 flex items-center justify-center rounded-full" aria-label="Back">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M12 4L6 10l6 6" stroke="#675A5D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
        </button>
        <button className="w-10 h-10 flex items-center justify-center" aria-label="More"><span className="text-[20px]" style={{ color: '#24171A' }}>...</span></button>
      </div>
      <div className="flex-1 overflow-y-auto scrollbar-hide px-5 pb-6 flex flex-col gap-5">
        <div className="text-center">
          <span className="inline-flex rounded-full px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.1em]" style={{ background: '#EACB8F', color: '#4B1021' }}>Guided prayer</span>
          <h1 className="mt-3 font-serif text-[33px] font-semibold leading-[39px]" style={{ color: '#3A0D18' }}>Guided prayer</h1>
          <p className="mt-2 text-[15px] leading-[21px]" style={{ color: '#30272A' }}>A short prayer to help you respond to this Scripture.</p>
        </div>
        <div className="rounded-[13px] p-4 flex items-center gap-3" style={{ background: '#F4EBDD' }}>
          <IconDisc name="book" size={40} iconSize={22} bg="#F3E6C9" color="#9B6B18" />
          <div>
            <p className="font-serif text-[16px] font-semibold" style={{ color: '#24171A' }}>Proverbs 3:5–6</p>
            <p className="text-[12px]" style={{ color: '#675A5D' }}>{TRANSLATION_LABEL}</p>
          </div>
        </div>
        <div className="rounded-[20px] p-5 flex flex-col gap-4" style={{ background: '#FFFCF6' }}>
          <p className="text-[15px] leading-[24px]" style={{ color: '#24171A' }}>
            Lord, I choose to trust You with all my heart. Help me to let go of my own understanding and to acknowledge You in all my ways. Direct my paths, and give me the courage to follow You today. Amen.
          </p>
        </div>
        <div className="rounded-[13px] p-4 flex gap-3" style={{ background: '#F4EBDD' }}>
          <IconDisc name="info" size={32} iconSize={18} bg="#B68425" color="#FFFCF6" />
          <p className="text-[13px] leading-[18px]" style={{ color: '#30272A' }}>This prayer is shaped by the displayed Scripture.</p>
        </div>
      </div>
      <div className="px-5 pb-10 pt-3 flex flex-col gap-2.5">
        <button onClick={onFinish}
          className="w-full rounded-full font-semibold text-[17px] transition-all flex items-center justify-center gap-2"
          style={{ height: 56, background: '#741630', color: '#FFFCF6' }}>
          <AppIcon name="play" size={18} color="#FFFCF6" /> Listen
        </button>
        <button className="w-full rounded-full font-semibold text-[16px] transition-all flex items-center justify-center gap-2"
          style={{ height: 52, background: 'transparent', border: '1.5px solid #9B6B18', color: '#7B4B16' }}>
          <AppIcon name="edit" size={18} color="#7B4B16" /> Edit prayer
        </button>
      </div>
    </div>
  )
}

export function MeditationPlayer() {
  const { navigate, goBack } = useApp()
  return (
    <div className="relative flex h-full flex-col overflow-hidden" style={{ background: '#111716' }}>
      <img src={DEV_IMG} alt="Still waters at sunrise" className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, rgba(10,18,24,0.25) 0%, rgba(10,18,24,0.18) 42%, rgba(7,12,13,0.88) 100%)' }} />
      <div className="relative z-10 flex h-full flex-col px-6 pb-8 pt-14" style={{ color: '#FFFCF6' }}>
        <div className="flex items-center justify-between">
          <button onClick={() => goBack('prayer-mode')} className="h-10 w-10" aria-label="Back"><svg width="22" height="22" viewBox="0 0 22 22" fill="none"><path d="M14 4l-7 7 7 7" stroke="#FFFCF6" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg></button>
          <button onClick={() => navigate('sound-controls')} className="h-10 w-10 text-[22px]" aria-label="Sound controls">...</button>
        </div>
        <div className="mt-14 text-center">
          <h1 className="font-serif text-[27px] leading-[34px]">Trust without<br />demanding the outcome</h1>
          <p className="mt-3 text-[14px] opacity-90">2 of 7 · Hear the Scripture</p>
        </div>
        <div className="mt-auto">
          <div className="text-center">
            <p className="font-serif text-[15px]">Proverbs 3:5–6</p>
            <p className="mt-1 text-[12px] opacity-85">{TRANSLATION_LABEL}</p>
          </div>
          <div className="mt-7">
            <div className="relative h-[3px] rounded-full" style={{ background: 'rgba(255,252,246,0.42)' }}>
              <div className="absolute left-0 top-0 h-full w-[42%] rounded-full" style={{ background: '#FFFCF6' }} />
              <div className="absolute top-1/2 h-4 w-4 -translate-y-1/2 rounded-full" style={{ left: '42%', background: '#FFFCF6' }} />
            </div>
            <div className="mt-3 flex justify-between text-[12px]"><span>2:14</span><span>6:00</span></div>
          </div>
          <div className="mt-7 flex items-center justify-center gap-8">
            <button className="h-11 w-11 rounded-full border border-white/35">↶<span className="text-[10px]">15</span></button>
            <button className="h-[66px] w-[66px] rounded-full text-[30px]" style={{ background: '#FFFCF6', color: '#24171A' }}>Ⅱ</button>
            <button className="h-11 w-11 rounded-full border border-white/35">↷<span className="text-[10px]">15</span></button>
            <button className="h-11 w-11 rounded-full border border-white/25">1×</button>
          </div>
          <button className="mt-7 h-11 w-full rounded-full border border-white/35 text-[14px]">▤ View transcript</button>
        </div>
      </div>
    </div>
  )
}

export function SoundControls() {
  const { navigate, goBack } = useApp()
  const [music, setMusic] = useState(true)
  const [soundscape, setSoundscape] = useState('Still Waters')
  const scapes = [
    { name: 'Still Waters', img: STILL_WATERS_IMG },
    { name: 'Morning Path', img: MORNING_PATH_IMG },
    { name: 'Quiet Room', img: QUIET_ROOM_IMG },
  ]
  return (
    <div className="flex h-full flex-col" style={{ background: '#F7F1E7' }}>
      <div className="px-5 pt-14 pb-4 flex items-center justify-between">
        <button onClick={() => goBack('meditation-player')} className="h-10 w-10" aria-label="Back"><svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M12 4L6 10l6 6" stroke="#24171A" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg></button>
      </div>
      <div className="flex-1 overflow-y-auto scrollbar-hide px-5 pb-8">
        <h1 className="font-serif text-[30px] font-semibold leading-[36px]" style={{ color: '#24171A' }}>Sound for this moment</h1>
        <p className="mt-2 text-[14px] leading-[20px]" style={{ color: '#675A5D' }}>Adjust the balance, or choose a different soundscape for your time with God.</p>
        <label className="mt-8 flex items-center justify-between">
          <span className="text-[15px]" style={{ color: '#24171A' }}>Background music</span>
          <button onClick={() => setMusic(v => !v)} className="h-8 w-14 rounded-full p-1" style={{ background: music ? '#40513B' : '#DDD0C0' }} aria-label="Toggle background music"><span className="block h-6 w-6 rounded-full bg-white transition-transform" style={{ transform: music ? 'translateX(24px)' : 'translateX(0)' }} /></button>
        </label>
        {[
          ['Narration', '80%'],
          ['Background music', '35%'],
        ].map(([label, value]) => (
          <div key={label} className="mt-7">
            <div className="mb-3 flex justify-between text-[15px]" style={{ color: '#24171A' }}><span>{label}</span><span>{value}</span></div>
            <div className="relative h-[4px] rounded-full" style={{ background: '#DDD0C0' }}>
              <div className="absolute h-full rounded-full" style={{ width: value, background: '#40513B' }} />
              <div className="absolute top-1/2 h-5 w-5 -translate-y-1/2 rounded-full border" style={{ left: value, background: '#FFFCF6', borderColor: '#CDBDAA' }} />
            </div>
          </div>
        ))}
        <p className="mt-8 text-[15px] font-medium" style={{ color: '#24171A' }}>Choose a soundscape</p>
        <div className="mt-4 grid grid-cols-3 gap-3">
          {scapes.map(scape => (
            <button key={scape.name} onClick={() => setSoundscape(scape.name)} className="rounded-[10px] p-1 pb-3 text-center" style={{ border: `1.5px solid ${soundscape === scape.name ? '#B68425' : '#E5D7C6'}`, background: '#FFFCF6' }}>
              <div className="h-[76px] rounded-[8px] overflow-hidden"><img src={scape.img} alt={scape.name} className="h-full w-full object-cover" /></div>
              <p className="mt-2 text-[12px]" style={{ color: '#24171A' }}>{scape.name}</p>
            </button>
          ))}
        </div>
        <button onClick={() => setSoundscape('Music off')} className="mt-4 flex h-52 w-full items-center justify-between rounded-[12px] px-4" style={{ height: 52, background: '#FFFCF6', border: '1px solid #E5D7C6' }}>
          <span className="flex items-center gap-2 text-[14px]" style={{ color: '#24171A' }}><AppIcon name="music" size={17} color="#24171A" /> Music off</span>
          <span className="h-5 w-5 rounded-full border" style={{ borderColor: soundscape === 'Music off' ? '#B68425' : '#A99B8B' }} />
        </button>
        <button className="mt-5 flex h-52 w-full items-center justify-between rounded-[12px] px-4" style={{ height: 52, background: '#FFFCF6', border: '1px solid #E5D7C6' }}>
          <span className="flex items-center gap-2 text-[14px]" style={{ color: '#24171A' }}><AppIcon name="settings" size={17} color="#24171A" /> Sensory settings</span>
          <span>›</span>
        </button>
      </div>
    </div>
  )
}
