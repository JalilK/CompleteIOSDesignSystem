import { useState } from 'react'
import { useApp } from '../context'
import { AppIcon } from '../components/AppIcon'

const QUESTIONS = [
  {
    setup: 'A friend says: "If I trust God, He has to give me this opportunity."',
    passage: 'Proverbs 3:5–6',
    path: 'Trusting God Through Uncertainty',
    question: 'Which response explains the teaching most faithfully?',
    answers: [
      'Trust guarantees the outcome.',
      'Trust means planning humbly without turning your preferred outcome into God\'s promise.',
      'No one should make plans.',
    ],
    correct: 1,
    feedback: {
      teaching: 'Proverbs 3:5–6 calls you to trust the Lord as final authority, not to extract promises from that trust. The verse establishes direction, not guaranteed outcomes.',
      boundary: 'Trust in the Lord does not obligate God to deliver any specific result. The passage establishes reliance on His wisdom, not a formula for outcomes.',
    },
  },
  {
    setup: 'A friend says: "Planning shows a lack of faith."',
    passage: 'James 4:13–15',
    path: 'Trusting God Through Uncertainty',
    question: 'Which explanation stays within what the passage actually teaches?',
    answers: [
      'James forbids planning because it presumes on the future.',
      'James corrects presumption about outcomes, not the act of planning itself.',
      'Faithful people should decide spontaneously.',
    ],
    correct: 1,
    feedback: {
      teaching: 'James 4:13–15 addresses boastful certainty about outcomes, not the legitimacy of planning. The correction is about acknowledging God\'s sovereignty, not abandoning foresight.',
      boundary: 'James does not say planning is faithless. He says planning that ignores God\'s sovereign control is the error.',
    },
  },
]

function BackButton({ onBack }: { onBack: () => void }) {
  return (
    <button onClick={onBack} className="w-10 h-10 flex items-center justify-center rounded-full" aria-label="Back">
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M12 4L6 10l6 6" stroke="#675A5D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </button>
  )
}

export function ContextStudy() {
  const { navigate } = useApp()
  const [qIdx, setQIdx] = useState(0)
  const [selected, setSelected] = useState<number | null>(null)
  const [checked, setChecked] = useState(false)
  const [done, setDone] = useState(false)

  const q = QUESTIONS[qIdx]
  const isCorrect = selected === q.correct

  const handleNext = () => {
    if (qIdx < QUESTIONS.length - 1) {
      setQIdx(i => i + 1)
      setSelected(null)
      setChecked(false)
    } else {
      setDone(true)
    }
  }

  if (done) {
    return (
      <div className="flex flex-col h-full" style={{ background: '#F7F1E7' }}>
        <div className="px-5 pt-14 pb-4 flex items-center gap-3">
          <BackButton onBack={() => navigate('devotional')} />
        </div>
        <div className="flex-1 flex flex-col items-center justify-center px-6 gap-6">
          <div className="w-16 h-16 rounded-full flex items-center justify-center" style={{ background: '#607255' }}>
            <svg width="28" height="22" viewBox="0 0 28 22" fill="none"><path d="M1 11l9 9 17-19" stroke="#FFFCF6" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </div>
          <div className="text-center">
            <h2 className="font-serif text-[28px] font-bold leading-[34px]" style={{ color: '#24171A' }}>Practice complete</h2>
            <div className="h-0.5 w-12 rounded-full mx-auto mt-2" style={{ background: '#B68425' }} />
          </div>
          <div className="w-full rounded-[20px] p-5" style={{ background: '#FFFCF6' }}>
            <div className="flex items-center gap-3">
              <AppIcon name="message" size={22} color="#B68425" />
              <div className="flex-1">
                <p className="text-[13px] font-semibold mb-1" style={{ color: '#24171A' }}>Clear Communicator · 1 of 3</p>
                <div className="h-2 rounded-full overflow-hidden" style={{ background: '#DDD0C0' }}>
                  <div className="h-full rounded-full" style={{ width: '33%', background: '#B68425' }} />
                </div>
              </div>
            </div>
            <div className="h-px my-4" style={{ background: '#DDD0C0' }} />
            <p className="text-center font-semibold text-[32px]" style={{ color: '#B68425' }}>+20 XP</p>
          </div>
        </div>
        <div className="px-5 pb-10 pt-4 flex flex-col gap-2.5">
          <button onClick={() => navigate('home')}
            className="w-full rounded-full font-semibold text-[17px] transition-all"
            style={{ height: 56, background: '#741630', color: '#FFFCF6' }}>
            Return Home
          </button>
        </div>
      </div>
    )
  }

  if (checked) {
    return (
      <div className="flex flex-col h-full screen-enter" style={{ background: '#F7F1E7' }}>
        <div className="px-5 pt-14 pb-4 flex items-center gap-3">
          <BackButton onBack={() => navigate('devotional')} />
          <div className="flex-1 text-center pr-10">
            <p className="text-[12px]" style={{ color: '#897A76' }}>{qIdx + 1} of {QUESTIONS.length}</p>
          </div>
        </div>
        <div className="flex-1 px-5 flex flex-col gap-5 overflow-y-auto scrollbar-hide">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0" style={{ background: isCorrect ? '#607255' : '#A33A3A' }}>
              {isCorrect
                ? <svg width="20" height="16" viewBox="0 0 20 16" fill="none"><path d="M1 8l6 6 12-13" stroke="#FFFCF6" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                : <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M3 3l12 12M15 3L3 15" stroke="#FFFCF6" strokeWidth="2.5" strokeLinecap="round" /></svg>
              }
            </div>
            <div>
              <p className="font-serif text-[22px] font-bold" style={{ color: '#24171A' }}>{isCorrect ? 'Correct' : 'Not quite'}</p>
              <div className="h-0.5 w-12 rounded-full mt-0.5" style={{ background: '#B68425' }} />
            </div>
          </div>
          <div>
            <p className="text-[12px] font-semibold uppercase tracking-wider mb-2" style={{ color: '#B68425', letterSpacing: '0.1em' }}>What the passage teaches</p>
            <p className="text-[15px] leading-[23px]" style={{ color: '#24171A' }}>{q.feedback.teaching}</p>
          </div>
          <div className="rounded-[14px] p-4 flex gap-3" style={{ background: '#FFF3CD', border: '1px solid #E6C878' }}>
            <AppIcon name="alert" size={18} color="#9B6B18" className="shrink-0 mt-0.5" />
            <div>
              <p className="text-[12px] font-semibold mb-1" style={{ color: '#795719' }}>Important boundary</p>
              <p className="text-[13px] leading-[20px]" style={{ color: '#795719' }}>{q.feedback.boundary}</p>
            </div>
          </div>
        </div>
        <div className="px-5 pb-10 pt-4">
          <button onClick={handleNext}
            className="w-full rounded-full font-semibold text-[17px] flex items-center justify-center gap-2 transition-all"
            style={{ height: 56, background: '#741630', color: '#FFFCF6' }}>
            {qIdx < QUESTIONS.length - 1 ? 'Next Question' : 'See Results'} →
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="flex flex-col h-full" style={{ background: '#F7F1E7' }}>
      {/* Header */}
      <div className="px-5 pt-14 pb-3 shrink-0 flex items-center justify-between">
        <BackButton onBack={() => navigate('devotional')} />
        <div className="text-center">
          <p className="text-[13px] font-semibold" style={{ color: '#675A5D' }}>Explain this Scripture</p>
          <p className="text-[11px]" style={{ color: '#897A76' }}>{qIdx + 1} of {QUESTIONS.length}</p>
        </div>
        <div className="w-10 flex justify-end">
          <div className="h-1 rounded-full overflow-hidden w-8" style={{ background: '#DDD0C0' }}>
            <div className="h-full rounded-full transition-all" style={{ width: `${((qIdx + 1) / QUESTIONS.length) * 100}%`, background: '#741630' }} />
          </div>
        </div>
      </div>

      <div className="flex-1 px-5 flex flex-col gap-4 overflow-y-auto scrollbar-hide">
        {/* Setup */}
        <div className="rounded-[16px] p-4" style={{ background: '#FFFCF6', border: '1px solid #DDD0C0' }}>
          <p className="text-[14px] leading-[21px] italic" style={{ color: '#675A5D' }}>"{q.setup.replace('A friend says: "', '').replace('"', '')}"</p>
          <p className="text-[12px] mt-1" style={{ color: '#897A76' }}>— A friend</p>
        </div>

        {/* Passage reference */}
        <div className="rounded-[14px] px-4 py-3 flex items-center gap-3" style={{ background: '#F4EBDD', border: '1px solid #DDD0C0' }}>
          <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ background: '#FFFCF6' }}>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M2 3a1 1 0 011-1h4c.8 0 1 .5 1 1v9.5L8 11l-6 1.5V3z" stroke="#B68425" strokeWidth="1.2" strokeLinejoin="round" /><path d="M8 3c0-.5.4-1 1-1h4a1 1 0 011 1v9.5L13 11 8 12.5V3z" stroke="#B68425" strokeWidth="1.2" strokeLinejoin="round" /></svg>
          </div>
          <div>
            <p className="text-[13px] font-semibold" style={{ color: '#24171A' }}>{q.passage}</p>
            <p className="text-[11px]" style={{ color: '#897A76' }}>{q.path}</p>
          </div>
        </div>

        {/* Question */}
        <h2 className="font-serif text-[22px] font-bold leading-[28px]" style={{ color: '#24171A' }}>
          {q.question}
        </h2>

        <div className="flex flex-col gap-2.5">
          {q.answers.map((a, i) => (
            <button key={i} onClick={() => setSelected(i)}
              className="flex items-center gap-4 rounded-[16px] px-5 py-4 text-left transition-all duration-200"
              style={{
                background: selected === i ? '#FDEEF1' : '#FFFCF6',
                border: `1.5px solid ${selected === i ? '#741630' : '#DDD0C0'}`,
              }}>
              <div className="w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 transition-all"
                style={{ borderColor: selected === i ? '#741630' : '#DDD0C0' }}>
                {selected === i && <div className="w-2.5 h-2.5 rounded-full" style={{ background: '#741630' }} />}
              </div>
              <span className="text-[15px] leading-[21px]" style={{ color: '#24171A' }}>{a}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="px-5 pb-10 pt-4">
        <button onClick={() => selected !== null && setChecked(true)}
          disabled={selected === null}
          className="w-full rounded-full font-semibold text-[17px] transition-all duration-200"
          style={{ height: 56, background: selected === null ? '#DDD0C0' : '#741630', color: selected === null ? '#897A76' : '#FFFCF6' }}>
          Check Response
        </button>
      </div>
    </div>
  )
}
