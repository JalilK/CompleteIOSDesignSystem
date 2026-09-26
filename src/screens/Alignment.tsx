import { useState, useEffect } from 'react'
import { useApp } from '../context'
import { AppIcon, IconDisc } from '../components/AppIcon'
import { alignmentAssets } from '../assets/alignment/assets'

const REPORT_IMG = alignmentAssets.currentPath
const JOURNAL_IMG = alignmentAssets.methodBibleRoom
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

// ALN-02 Alignment Intake
export function AlignmentIntake() {
  const { navigate, alignmentText, setAlignmentText } = useApp()
  const [text, setText] = useState(alignmentText)

  return (
    <div className="flex flex-col h-full overflow-hidden">
      <div className="relative h-40 overflow-hidden">
        <img src={JOURNAL_IMG} alt="Journal and pen" className="w-full h-full object-cover" />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(30,21,18,0.3), rgba(247,241,231,1))' }} />
        <div className="absolute top-14 left-5 flex items-center gap-3">
          <BackButton onBack={() => navigate('home')} />
          <h1 className="font-serif text-[22px] font-bold" style={{ color: '#24171A' }}>New Alignment</h1>
        </div>
      </div>
      <div className="flex-1 px-5 pt-3 flex flex-col gap-4 overflow-y-auto scrollbar-hide" style={{ background: '#F7F1E7' }}>
        <div>
          <h2 className="font-serif text-[26px] font-bold leading-[32px] mb-2" style={{ color: '#24171A' }}>What are you facing?</h2>
          <p className="text-[14px] leading-[21px]" style={{ color: '#675A5D' }}>
            Describe the situation in your own words. You can be as general or specific as you choose.
          </p>
        </div>
        <div className="rounded-[20px] p-4 flex-1 min-h-[180px]" style={{ background: '#FFFCF6', border: '1.5px solid #DDD0C0' }}>
          <textarea
            value={text}
            onChange={e => setText(e.target.value)}
            className="w-full h-full min-h-[160px] resize-none bg-transparent text-[16px] leading-[24px] outline-none"
            style={{ color: '#24171A', fontFamily: 'var(--font-sans)' }}
            placeholder="I'm anxious about whether to accept a new job. I don't want fear or money to make the decision for me."
          />
        </div>
        <div className="flex flex-col gap-2">
          <button className="text-[13px] text-left inline-flex items-center gap-1.5" style={{ color: '#741630' }}><AppIcon name="info" size={14} color="#741630" /> Choose an example situation</button>
          <button className="text-[13px] text-left inline-flex items-center gap-1.5" style={{ color: '#897A76' }}><AppIcon name="lock" size={14} color="#897A76" /> How Alignment uses this information</button>
        </div>

        {/* Recent Alignments */}
        <div>
          <p className="text-[13px] font-semibold uppercase tracking-wider mb-3" style={{ color: '#897A76', letterSpacing: '0.08em' }}>Recent Alignments</p>
          <div className="flex flex-col gap-0" style={{ background: '#FFFCF6', borderRadius: 16, border: '1px solid #DDD0C0', overflow: 'hidden' }}>
            {[
              { label: 'Deciding whether to accept this job', when: 'Today' },
              { label: 'Navigating conflict with a friend', when: '3 days ago' },
              { label: 'Finding contentment in this season', when: '1 week ago' },
            ].map((a, i, arr) => (
              <button key={i} onClick={() => navigate('alignment-report')}
                className="flex items-center gap-3 px-4 py-3.5 text-left w-full transition-all"
                style={{ borderBottom: i < arr.length - 1 ? '1px solid #DDD0C0' : 'none' }}>
                <div className="w-7 h-7 rounded-full flex items-center justify-center shrink-0" style={{ background: '#F4EBDD' }}>
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M3 5c0-1 1-2 2-2h4c1 0 2 1 2 2v6L7 9l-4 2V5z" stroke="#B68425" strokeWidth="1.2" strokeLinejoin="round" /></svg>
                </div>
                <div className="flex-1">
                  <p className="text-[14px] font-medium" style={{ color: '#24171A' }}>{a.label}</p>
                  <p className="text-[12px]" style={{ color: '#897A76' }}>{a.when}</p>
                </div>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M6 4l4 4-4 4" stroke="#DDD0C0" strokeWidth="1.5" strokeLinecap="round" /></svg>
              </button>
            ))}
          </div>
        </div>
      </div>
      <div className="px-5 pb-10 pt-4" style={{ background: '#F7F1E7' }}>
        <button
          disabled={text.trim().length < 10}
          onClick={() => { setAlignmentText(text); navigate('alignment-analyzing') }}
          className="w-full rounded-full font-semibold text-[17px] flex items-center justify-center gap-2 transition-all"
          style={{ height: 56, background: text.trim().length >= 10 ? '#741630' : '#DDD0C0', color: text.trim().length >= 10 ? '#FFFCF6' : '#897A76' }}>
          Bring This Under Scripture →
        </button>
      </div>
    </div>
  )
}

// ALN-03 Analyzing
export function AlignmentAnalyzing() {
  const { navigate } = useApp()
  const [step, setStep] = useState(0)
  const steps = [
    'Understanding the moment…',
    'Finding governing Scripture…',
    'Building the teaching…',
    'Preparing your next step…',
  ]

  useEffect(() => {
    const timers = steps.map((_, i) =>
      setTimeout(() => setStep(i), i * 900)
    )
    const done = setTimeout(() => navigate('alignment-report'), steps.length * 900 + 500)
    return () => { timers.forEach(clearTimeout); clearTimeout(done) }
  }, [])

  return (
    <div className="flex flex-col h-full items-center justify-center px-8 gap-8" style={{ background: '#F7F1E7' }}>
      <div className="w-16 h-16 rounded-full flex items-center justify-center" style={{ background: '#FFFCF6', boxShadow: '0 4px 24px rgba(116,22,48,0.15)' }}>
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" className="animate-spin" style={{ animationDuration: '2s' }}>
          <circle cx="16" cy="16" r="13" stroke="#DDD0C0" strokeWidth="3" />
          <path d="M16 3a13 13 0 0113 13" stroke="#741630" strokeWidth="3" strokeLinecap="round" />
        </svg>
      </div>
      <div className="flex flex-col gap-4 w-full">
        {steps.map((s, i) => (
          <div key={i} className="flex items-center gap-3 transition-all duration-500"
            style={{ opacity: i <= step ? 1 : 0.3 }}>
            {i < step
              ? <div className="w-5 h-5 rounded-full flex items-center justify-center shrink-0" style={{ background: '#607255' }}>
                  <svg width="10" height="8" viewBox="0 0 10 8" fill="none"><path d="M1 4l3 3 5-6" stroke="#FFFCF6" strokeWidth="1.8" strokeLinecap="round" /></svg>
                </div>
              : i === step
              ? <div className="w-5 h-5 rounded-full shrink-0" style={{ background: '#741630', animation: 'pulse 1.5s infinite' }} />
              : <div className="w-5 h-5 rounded-full shrink-0" style={{ background: '#DDD0C0' }} />
            }
            <p className={`text-[15px] font-medium ${i <= step ? '' : 'opacity-40'}`} style={{ color: '#24171A' }}>{s}</p>
          </div>
        ))}
      </div>
      <p className="text-[13px] text-center" style={{ color: '#897A76' }}>You can leave and come back — this will be saved.</p>
    </div>
  )
}

// ALN-05 Alignment Report
export function AlignmentReport() {
  const { navigate } = useApp()

  return (
    <div className="flex flex-col h-full overflow-hidden">
      <div className="relative h-52 overflow-hidden shrink-0">
        <img src={REPORT_IMG} alt="Ancient cityscape at golden hour" className="w-full h-full object-cover" />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(30,21,18,0.2) 0%, rgba(247,241,231,1) 100%)' }} />
        <div className="absolute top-14 left-5 right-5 flex items-start justify-between">
          <BackButton onBack={() => navigate('home')} />
          <button className="w-10 h-10 flex items-center justify-center">
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none"><path d="M4 4h14M4 11h14M4 18h7" stroke="#675A5D" strokeWidth="2" strokeLinecap="round" /></svg>
          </button>
        </div>
        <div className="absolute bottom-5 left-5 right-5">
          <p className="text-xs font-semibold uppercase tracking-wider mb-1" style={{ color: '#E6C878', letterSpacing: '0.1em' }}>Your Alignment</p>
          <p className="font-serif text-[26px] font-bold leading-[32px]" style={{ color: '#24171A' }}>
            Making a decision without letting fear or money become your master
          </p>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto scrollbar-hide px-5 pb-8 flex flex-col gap-5" style={{ background: '#F7F1E7' }}>
        {/* What seems to be happening */}
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: '#897A76', letterSpacing: '0.1em' }}>What seems to be happening</p>
          <p className="text-[15px] leading-[23px]" style={{ color: '#675A5D' }}>
            You're facing a significant decision and are concerned that fear or financial desire might be shaping your thinking more than wisdom or faithfulness.
          </p>
        </div>

        {/* Governing Scripture */}
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider mb-3" style={{ color: '#B68425', letterSpacing: '0.1em' }}>Governing Scripture</p>
          <div className="rounded-[20px] p-5 relative overflow-hidden" style={{ background: '#F4EBDD' }}>
            <div className="text-[32px] font-serif leading-none mb-2" style={{ color: '#741630' }}>"</div>
            <p className="font-serif text-[19px] leading-[29px] italic" style={{ color: '#24171A' }}>
              Trust in the LORD with all thine heart; and lean not unto thine own understanding. In all thy ways acknowledge him, and he shall direct thy paths.
            </p>
            <p className="text-[13px] font-semibold mt-3" style={{ color: '#675A5D' }}>Proverbs 3:5–6 · {TRANSLATION_LABEL}</p>
            <div className="absolute left-0 top-0 bottom-0 w-1 rounded-l-[20px]" style={{ background: '#741630' }} />
          </div>
        </div>

        {/* Supporting Scripture */}
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider mb-3" style={{ color: '#897A76', letterSpacing: '0.1em' }}>Supporting Scripture</p>
          <div className="rounded-[16px] p-4 flex gap-3" style={{ background: '#FFFCF6', border: '1px solid #DDD0C0' }}>
            <div className="w-1 rounded-full shrink-0" style={{ background: '#B68425' }} />
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-[11px] font-semibold uppercase tracking-wider" style={{ color: '#B68425', letterSpacing: '0.08em' }}>Supports</span>
              </div>
              <p className="font-serif text-[15px] leading-[23px] italic" style={{ color: '#24171A' }}>
                Go to now, ye that say, To day or to morrow we will go into such a city… ye ought to say, If the Lord will, we shall live…
              </p>
              <p className="text-[12px] font-semibold mt-1" style={{ color: '#675A5D' }}>James 4:13–15 · {TRANSLATION_LABEL}</p>
            </div>
          </div>
        </div>

        {/* How passages teach together */}
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: '#897A76', letterSpacing: '0.1em' }}>How the passages teach together</p>
          <p className="text-[15px] leading-[23px]" style={{ color: '#24171A' }}>
            Trust God, plan humbly, and refuse to treat the outcome you want as a promise He made. Both passages agree: faithful decision-making submits to God's authority, not your preferences.
          </p>
        </div>

        {/* Boundary */}
        <div className="rounded-[14px] p-4 flex gap-3" style={{ background: '#FFF3CD', border: '1px solid #E6C878' }}>
          <AppIcon name="alert" size={18} color="#9B6B18" className="shrink-0 mt-0.5" />
          <div>
            <p className="text-[13px] font-semibold mb-1" style={{ color: '#795719' }}>What the passages do not establish</p>
            <p className="text-[13px] leading-[20px]" style={{ color: '#795719' }}>
              These passages do not provide a verdict about this specific job. They govern how to approach the decision—not what to decide.
            </p>
          </div>
        </div>

        {/* What this means */}
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: '#897A76', letterSpacing: '0.1em' }}>What this means for you</p>
          <p className="text-[15px] leading-[23px]" style={{ color: '#24171A' }}>
            Evaluate the opportunity honestly—against your responsibilities, your motives, and your current understanding of faithfulness. Decide without treating fear or financial desire as the final authority.
          </p>
        </div>

        {/* Actions */}
        <div className="flex flex-col gap-2.5 pt-2">
          <button onClick={() => navigate('faithful-action')}
            className="w-full rounded-full font-semibold text-[17px] flex items-center justify-center gap-2 transition-all"
            style={{ height: 56, background: '#741630', color: '#FFFCF6' }}>
            See Your Faithful Step →
          </button>
          <button onClick={() => navigate('practice-intro')}
            className="w-full rounded-full font-semibold text-[16px] transition-all flex items-center justify-center gap-2"
            style={{ height: 52, background: 'transparent', border: '1.5px solid #741630', color: '#741630' }}>
            <AppIcon name="book" size={17} color="#741630" /> Practice This Scripture
          </button>
          <button onClick={() => navigate('prayer-mode')}
            className="w-full rounded-full font-semibold text-[16px] transition-all flex items-center justify-center gap-2"
            style={{ height: 52, background: 'transparent', border: '1.5px solid #DDD0C0', color: '#675A5D' }}>
            <AppIcon name="prayer" size={17} color="#675A5D" /> Pray with This Scripture
          </button>
        </div>
      </div>
    </div>
  )
}

// ALN-06 Faithful Action
export function FaithfulAction() {
  const { navigate } = useApp()
  const [chosen, setChosen] = useState(false)

  return (
    <div className="flex flex-col h-full overflow-hidden">
      <div className="px-5 pt-14 pb-4 flex items-center gap-3 shrink-0" style={{ background: '#F7F1E7' }}>
        <BackButton onBack={() => navigate('alignment-report')} />
        <div>
          <h1 className="font-serif text-[22px] font-bold" style={{ color: '#24171A' }}>Your next faithful step</h1>
          <p className="text-[12px]" style={{ color: '#897A76' }}>Based on Proverbs 3:5–6 · James 4:13–15</p>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto scrollbar-hide px-5 pb-8 flex flex-col gap-5" style={{ background: '#F7F1E7' }}>
        <div className="rounded-[24px] overflow-hidden" style={{ background: '#FFFCF6', boxShadow: '0 2px 16px rgba(30,21,18,0.08)' }}>
          <div className="p-6 flex flex-col gap-4">
            <IconDisc name="leaf" size={48} iconSize={24} bg="#E6ECE2" color="#607255" />
            <p className="font-serif text-[22px] font-bold leading-[30px]" style={{ color: '#24171A' }}>
              Compare the opportunity honestly against your responsibilities and motives, then decide without treating fear or money as your master.
            </p>
            <div className="h-px" style={{ background: '#DDD0C0' }} />
            <div className="flex gap-3">
              <span className="text-[13px] px-3 py-1 rounded-full font-medium" style={{ background: '#F4EBDD', color: '#795719' }}>This week</span>
              <span className="text-[13px] px-3 py-1 rounded-full font-medium" style={{ background: '#E6ECE2', color: '#40513B' }}>Decision</span>
            </div>
          </div>
          <div className="px-6 pb-4">
            <p className="text-[12px] font-semibold uppercase tracking-wider mb-1" style={{ color: '#B68425', letterSpacing: '0.08em' }}>Scripture basis</p>
            <p className="text-[14px]" style={{ color: '#675A5D' }}>Proverbs 3:5–6 · James 4:13–15</p>
          </div>
        </div>

        <p className="text-[14px] leading-[21px] text-center italic" style={{ color: '#897A76' }}>
          Choosing this step does not itself earn XP. XP comes through Scripture Practice.
        </p>

        <div className="flex flex-col gap-2.5">
          <button onClick={() => setChosen(true)}
            className="w-full rounded-full font-semibold text-[17px] flex items-center justify-center gap-2 transition-all"
            style={{ height: 56, background: chosen ? '#607255' : '#741630', color: '#FFFCF6' }}>
            {chosen ? '✓ Step Chosen' : 'Mark as Chosen →'}
          </button>
          <button onClick={() => navigate('practice-intro')}
            className="w-full rounded-full font-semibold text-[16px] transition-all flex items-center justify-center gap-2"
            style={{ height: 52, background: 'transparent', border: '1.5px solid #741630', color: '#741630' }}>
            <AppIcon name="book" size={17} color="#741630" /> Practice This Scripture
          </button>
          <button onClick={() => navigate('home')}
            className="w-full rounded-full font-semibold text-[16px] transition-all"
            style={{ height: 52, background: 'transparent', border: '1.5px solid #DDD0C0', color: '#675A5D' }}>
            Return Home
          </button>
        </div>
      </div>
    </div>
  )
}
