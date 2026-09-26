import { useState } from 'react'
import { useApp } from '../context'

const UNSPLASH = 'https://images.unsplash.com'
const DEV_IMG = `${UNSPLASH}/photo-1464822759023-fed622ff2c3b?w=800&h=400&fit=crop&auto=format`

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
  const { navigate } = useApp()

  return (
    <div className="flex flex-col h-full overflow-hidden">
      <div className="relative h-52 overflow-hidden shrink-0">
        <img src={DEV_IMG} alt="Valley landscape with golden light" className="w-full h-full object-cover" />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(30,21,18,0.2) 0%, rgba(247,241,231,1) 100%)' }} />
        <div className="absolute top-14 left-5 right-5 flex items-start justify-between">
          <BackButton onBack={() => navigate('home')} />
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
            <p className="text-[13px] font-semibold mt-3" style={{ color: '#675A5D' }}>Proverbs 3:5–6 · KJV</p>
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
            <p className="text-[12px] font-semibold mt-1" style={{ color: '#675A5D' }}>James 4:15 · KJV</p>
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
          <span className="text-[16px] shrink-0">⚠️</span>
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
              className="flex-1 rounded-full font-semibold text-[14px] transition-all"
              style={{ height: 48, background: 'transparent', border: '1.5px solid #DDD0C0', color: '#675A5D' }}>
              🙏 Pray Scripture
            </button>
            <button className="flex-1 rounded-full font-semibold text-[14px] transition-all"
              style={{ height: 48, background: 'transparent', border: '1.5px solid #DDD0C0', color: '#675A5D' }}>
              🎧 Listen
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
  const [mode, setMode] = useState<'pray' | 'guided' | null>(null)
  const [praying, setPraying] = useState(false)

  if (praying && mode === 'pray') {
    return <PrayScripture onBack={() => setPraying(false)} onFinish={() => navigate('home')} />
  }
  if (praying && mode === 'guided') {
    return <GuidedPrayer onBack={() => setPraying(false)} onFinish={() => navigate('home')} />
  }

  return (
    <div className="flex flex-col h-full" style={{ background: '#F7F1E7' }}>
      <div className="px-5 pt-14 pb-6 flex items-center gap-3">
        <button onClick={() => navigate('home')} className="w-10 h-10 flex items-center justify-center rounded-full" aria-label="Back">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M12 4L6 10l6 6" stroke="#675A5D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        <h1 className="font-serif text-[22px] font-bold" style={{ color: '#24171A' }}>Pray with Scripture</h1>
      </div>

      <div className="flex-1 px-5 flex flex-col gap-5">
        {/* Psalm reference */}
        <div className="rounded-[18px] p-4 text-center" style={{ background: '#FFFCF6', border: '1px solid #DDD0C0' }}>
          <p className="text-[12px] font-semibold uppercase tracking-wider" style={{ color: '#897A76', letterSpacing: '0.08em' }}>Psalm anchor for this teaching</p>
          <p className="font-serif text-[18px] font-semibold mt-1" style={{ color: '#24171A' }}>Psalm 23 · KJV</p>
          <p className="font-serif text-[14px] italic mt-1" style={{ color: '#675A5D' }}>The LORD is my shepherd; I shall not want.</p>
        </div>

        {/* Mode selection */}
        <div className="flex flex-col gap-3">
          {[
            { id: 'pray' as const, title: 'Pray Scripture', desc: 'Pray Psalm 23 exactly as written, with optional pauses and repetition.', icon: '📖' },
            { id: 'guided' as const, title: 'Guided Prayer', desc: 'A Scripture-shaped prayer built from this teaching and your context.', icon: '🙏' },
          ].map(m => (
            <button key={m.id} onClick={() => setMode(m.id)}
              className="rounded-[20px] p-5 text-left flex gap-4 items-start transition-all duration-200"
              style={{
                background: mode === m.id ? '#FDEEF1' : '#FFFCF6',
                border: `1.5px solid ${mode === m.id ? '#741630' : '#DDD0C0'}`,
              }}>
              <span className="text-[28px]">{m.icon}</span>
              <div>
                <p className="font-serif font-semibold text-[17px] mb-1" style={{ color: '#24171A' }}>{m.title}</p>
                <p className="text-[13px] leading-[19px]" style={{ color: '#675A5D' }}>{m.desc}</p>
              </div>
            </button>
          ))}
        </div>
      </div>

      <div className="px-5 pb-10 pt-4">
        <button onClick={() => mode && setPraying(true)} disabled={!mode}
          className="w-full rounded-full font-semibold text-[17px] transition-all"
          style={{ height: 56, background: mode ? '#741630' : '#DDD0C0', color: mode ? '#FFFCF6' : '#897A76' }}>
          Begin →
        </button>
      </div>
    </div>
  )
}

function PrayScripture({ onBack, onFinish }: { onBack: () => void; onFinish: () => void }) {
  const verses = [
    { ref: '1', text: 'The LORD is my shepherd; I shall not want.' },
    { ref: '2', text: 'He maketh me to lie down in green pastures: he leadeth me beside the still waters.' },
    { ref: '3', text: 'He restoreth my soul: he leadeth me in the paths of righteousness for his name\'s sake.' },
    { ref: '4', text: 'Yea, though I walk through the valley of the shadow of death, I will fear no evil: for thou art with me; thy rod and thy staff they comfort me.' },
  ]
  const [idx, setIdx] = useState(0)

  return (
    <div className="flex flex-col h-full" style={{ background: '#F7F1E7' }}>
      <div className="px-5 pt-14 pb-4 flex items-center gap-3">
        <button onClick={onBack} className="w-10 h-10 flex items-center justify-center rounded-full" aria-label="Back">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M12 4L6 10l6 6" stroke="#675A5D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
        </button>
        <div>
          <h1 className="font-serif text-[20px] font-bold" style={{ color: '#24171A' }}>Pray Scripture</h1>
          <p className="text-[12px]" style={{ color: '#897A76' }}>Psalm 23 · KJV · Verse {idx + 1} of {verses.length}</p>
        </div>
      </div>
      <div className="px-5 mb-4">
        <div className="h-1.5 rounded-full overflow-hidden" style={{ background: '#DDD0C0' }}>
          <div className="h-full rounded-full transition-all" style={{ width: `${((idx + 1) / verses.length) * 100}%`, background: '#741630' }} />
        </div>
      </div>
      <div className="flex-1 px-5 flex flex-col justify-center gap-6">
        <div className="rounded-[24px] p-7" style={{ background: '#F4EBDD' }}>
          <p className="text-[13px] font-semibold mb-3" style={{ color: '#B68425' }}>VERSE {verses[idx].ref}</p>
          <p className="font-serif text-[22px] leading-[34px] italic" style={{ color: '#24171A' }}>{verses[idx].text}</p>
        </div>
        <p className="text-[14px] text-center" style={{ color: '#897A76' }}>Read slowly. Pause. Let the words rest.</p>
      </div>
      <div className="px-5 pb-10 pt-4 flex flex-col gap-2.5">
        {idx < verses.length - 1
          ? <button onClick={() => setIdx(i => i + 1)}
              className="w-full rounded-full font-semibold text-[17px] transition-all"
              style={{ height: 56, background: '#741630', color: '#FFFCF6' }}>
              Continue →
            </button>
          : <button onClick={onFinish}
              className="w-full rounded-full font-semibold text-[17px] transition-all"
              style={{ height: 56, background: '#607255', color: '#FFFCF6' }}>
              ✓ Prayer Complete
            </button>
        }
      </div>
    </div>
  )
}

function GuidedPrayer({ onBack, onFinish }: { onBack: () => void; onFinish: () => void }) {
  return (
    <div className="flex flex-col h-full overflow-hidden">
      <div className="px-5 pt-14 pb-4 flex items-center gap-3 shrink-0">
        <button onClick={onBack} className="w-10 h-10 flex items-center justify-center rounded-full" aria-label="Back">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M12 4L6 10l6 6" stroke="#675A5D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
        </button>
        <div>
          <div className="flex items-center gap-2">
            <h1 className="font-serif text-[20px] font-bold" style={{ color: '#24171A' }}>Guided Prayer</h1>
            <span className="text-[11px] font-semibold px-2 py-0.5 rounded" style={{ background: '#F4EBDD', color: '#795719' }}>Not Scripture</span>
          </div>
          <p className="text-[12px]" style={{ color: '#897A76' }}>Built from Proverbs 3:5–6 and your context</p>
        </div>
      </div>
      <div className="flex-1 overflow-y-auto scrollbar-hide px-5 pb-6 flex flex-col gap-5">
        <div className="rounded-[20px] p-5 flex flex-col gap-4" style={{ background: '#FFFCF6' }}>
          <p className="text-[15px] leading-[24px]" style={{ color: '#24171A' }}>
            Lord, I come to you carrying a decision that feels too large for me. You have said—
          </p>
          <div className="border-l-2 pl-4" style={{ borderColor: '#741630' }}>
            <p className="font-serif text-[16px] leading-[25px] italic" style={{ color: '#24171A' }}>
              "Trust in the LORD with all thine heart; and lean not unto thine own understanding."
            </p>
            <p className="text-[12px] mt-1 font-semibold" style={{ color: '#675A5D' }}>Proverbs 3:5 · KJV</p>
          </div>
          <p className="text-[15px] leading-[24px]" style={{ color: '#24171A' }}>
            I confess that I have been leaning on my own fear and my own hopes instead of on you. Help me to acknowledge you in this way, and to trust that you will direct the path that is faithful—even if it is not the outcome I have preferred.
          </p>
          <p className="text-[15px] leading-[24px]" style={{ color: '#24171A' }}>
            I lay this decision before you. Amen.
          </p>
        </div>
        <p className="text-[12px] text-center" style={{ color: '#897A76' }}>
          This prayer is shaped by Scripture but is pastoral language, not direct Scripture quotation. Scripture is marked above.
        </p>
      </div>
      <div className="px-5 pb-10 pt-3 flex flex-col gap-2.5">
        <button onClick={onFinish}
          className="w-full rounded-full font-semibold text-[17px] transition-all"
          style={{ height: 56, background: '#741630', color: '#FFFCF6' }}>
          ✓ Complete Prayer
        </button>
        <button className="w-full rounded-full font-semibold text-[16px] transition-all"
          style={{ height: 52, background: 'transparent', border: '1.5px solid #DDD0C0', color: '#675A5D' }}>
          Save This Prayer
        </button>
      </div>
    </div>
  )
}
