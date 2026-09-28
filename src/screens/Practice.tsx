import { useState } from 'react'
import { useApp } from '../context'
import { alignmentAssets } from '../assets/alignment/assets'
import { AppIcon } from '../components/AppIcon'
import { XPBar } from '../components/XPBar'

function BackButton({ onBack }: { onBack: () => void }) {
  return (
    <button onClick={onBack} className="w-10 h-10 flex items-center justify-center rounded-full" aria-label="Back">
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M12 4L6 10l6 6" stroke="#675A5D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </button>
  )
}

function PracticeLearningSheet({ onClose }: { onClose: () => void }) {
  const outcomes = [
    {
      icon: 'book' as const,
      title: 'Understand the teaching',
      body: 'Recognize what Proverbs 3:5–6 actually says about trusting the Lord as the final authority.',
    },
    {
      icon: 'alert' as const,
      title: 'Keep the boundary',
      body: 'Separate faithful trust from the idea that God must give the specific outcome you prefer.',
    },
    {
      icon: 'leaf' as const,
      title: 'Choose faithfully',
      body: 'Practice applying the passage to a real decision without letting fear or money master the choice.',
    },
  ]

  return (
    <div className="absolute inset-0 z-30 flex flex-col justify-end" style={{ background: 'rgba(36,23,26,0.34)' }}>
      <button className="flex-1" onClick={onClose} aria-label="Close what you will learn" />
      <div className="max-h-[76%] overflow-y-auto rounded-t-[28px] px-5 pb-10 pt-4 shadow-2xl" style={{ background: '#FFFCF6' }}>
        <div className="mx-auto mb-4 h-1 w-12 rounded-full" style={{ background: '#D7C4AF' }} />
        <div className="mb-5 flex items-start justify-between gap-4">
          <div>
            <p className="text-[12px] font-semibold uppercase tracking-[0.14em]" style={{ color: '#B68425' }}>Level 2 practice</p>
            <h2 className="mt-1 font-serif text-[28px] font-bold leading-[34px]" style={{ color: '#24171A' }}>What you’ll learn</h2>
            <p className="mt-2 text-[14px] leading-[20px]" style={{ color: '#675A5D' }}>
              You identified what this passage says. Now practice recognizing what it means to trust God without treating trust as a guarantee of the outcome you want.
            </p>
          </div>
          <button onClick={onClose} className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full" style={{ background: '#F4EBDD' }} aria-label="Close">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M4 4l10 10M14 4L4 14" stroke="#675A5D" strokeWidth="1.8" strokeLinecap="round" /></svg>
          </button>
        </div>

        <div className="rounded-[18px] p-4" style={{ background: '#F7F1E7', border: '1px solid #E5D7C6' }}>
          <div className="flex items-center justify-between">
            <span className="text-[13px]" style={{ color: '#675A5D' }}>Passage Mastery</span>
            <span className="text-[13px] font-semibold" style={{ color: '#24171A' }}>Level 2 of 5</span>
          </div>
          <div className="mt-3 h-2 rounded-full overflow-hidden" style={{ background: '#DDD0C0' }}>
            <div className="h-full rounded-full" style={{ width: '40%', background: '#741630' }} />
          </div>
        </div>

        <div className="mt-4 flex flex-col gap-3">
          {outcomes.map(item => (
            <div key={item.title} className="flex gap-3 rounded-[16px] p-4" style={{ background: '#FFFCF6', border: '1px solid #E5D7C6' }}>
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full" style={{ background: '#F4EBDD' }}>
                <AppIcon name={item.icon} size={21} color="#7B4B16" />
              </span>
              <div>
                <p className="font-semibold text-[14px]" style={{ color: '#24171A' }}>{item.title}</p>
                <p className="mt-1 text-[13px] leading-[18px]" style={{ color: '#675A5D' }}>{item.body}</p>
              </div>
            </div>
          ))}
        </div>

        <button onClick={onClose}
          className="mt-5 w-full rounded-full font-semibold text-[16px]"
          style={{ height: 52, background: '#741630', color: '#FFFCF6' }}>
          Got it
        </button>
      </div>
    </div>
  )
}

// PRAC-01 Practice Intro
export function PracticeIntro() {
  const { navigate, goBack, scripturePracticeActivities } = useApp()
  const [showLearning, setShowLearning] = useState(false)
  const currentPractice = scripturePracticeActivities.find(activity => activity.mastery < activity.masteryGoal)

  return (
    <div className="relative flex flex-col h-full overflow-hidden">
      <div className="relative h-[208px] overflow-hidden shrink-0">
        <img src={alignmentAssets.currentPath} alt="Valley landscape at golden hour" className="w-full h-full object-cover" />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(30,21,18,0.22) 0%, rgba(247,241,231,0.48) 60%, rgba(247,241,231,1) 100%)' }} />
        <div className="absolute top-14 left-5 flex items-center gap-3">
          <BackButton onBack={() => goBack('home')} />
        </div>
        <div className="absolute bottom-4 left-5 right-5 rounded-[16px] px-4 py-3" style={{ background: 'rgba(255,252,246,0.92)', border: '1px solid rgba(229,215,198,0.78)', boxShadow: '0 10px 24px rgba(30,21,18,0.08)', backdropFilter: 'blur(10px)' }}>
          <p className="text-xs font-semibold uppercase tracking-wider mb-1" style={{ color: '#B68425', letterSpacing: '0.1em' }}>{currentPractice ? 'Resume Scripture Practice' : 'From: Trusting God Through Uncertainty'}</p>
          <h1 className="font-serif text-[26px] font-bold leading-[32px]" style={{ color: '#24171A' }}>
            Trust without demanding an outcome
          </h1>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto scrollbar-hide px-5 pt-7 flex flex-col gap-5" style={{ background: '#F7F1E7', paddingBottom: 'calc(env(safe-area-inset-bottom, 0px) + 42px)' }}>
        {/* Scripture card */}
        <div className="rounded-[20px] p-5 relative overflow-hidden" style={{ background: '#F4EBDD' }}>
          <div className="text-[28px] font-serif leading-none mb-2" style={{ color: '#741630' }}>"</div>
          <p className="font-serif text-[18px] leading-[28px] italic" style={{ color: '#24171A' }}>
            Trust in the LORD with all thine heart; and lean not unto thine own understanding.
          </p>
          <p className="text-[13px] font-semibold mt-3" style={{ color: '#675A5D' }}>Proverbs 3:5 · Selected translation</p>
          <div className="absolute left-0 top-0 bottom-0 w-1 rounded-l-[20px]" style={{ background: '#741630' }} />
        </div>

        <p className="text-[15px] leading-[23px]" style={{ color: '#675A5D' }}>
          Trust places final confidence in the Lord. It does not turn the outcome we prefer into a promise.
        </p>

        {/* Practice metadata */}
        <div className="rounded-[18px] p-4 flex flex-col gap-3" style={{ background: '#FFFCF6', border: '1px solid #DDD0C0' }}>
          <div className="flex justify-between">
            <span className="text-[13px]" style={{ color: '#675A5D' }}>Passage Mastery</span>
            <span className="text-[13px] font-semibold" style={{ color: '#24171A' }}>Level {currentPractice?.mastery ?? 2} · {currentPractice?.passage ?? 'Proverbs 3:5–6'}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-[13px]" style={{ color: '#675A5D' }}>Questions</span>
            <span className="text-[13px] font-semibold" style={{ color: '#24171A' }}>6 questions</span>
          </div>
          <div className="flex justify-between">
            <span className="text-[13px]" style={{ color: '#675A5D' }}>Eligible XP</span>
            <span className="text-[13px] font-semibold" style={{ color: '#B68425' }}>Up to 50 XP</span>
          </div>
          <div className="flex justify-between">
            <span className="text-[13px]" style={{ color: '#675A5D' }}>Duration</span>
            <span className="text-[13px] font-semibold" style={{ color: '#24171A' }}>~4 minutes</span>
          </div>
        </div>

        <button onClick={() => navigate('practice-question')}
          className="w-full rounded-full font-semibold text-[17px] flex items-center justify-center gap-2 transition-all"
          style={{ height: 56, background: '#741630', color: '#FFFCF6' }}>
          {currentPractice ? 'Resume Practice →' : 'Begin Practice →'}
        </button>
        <button onClick={() => setShowLearning(true)} className="text-center text-[14px] font-medium" style={{ color: '#741630' }}>
          What You'll Learn
        </button>
      </div>

      {showLearning && <PracticeLearningSheet onClose={() => setShowLearning(false)} />}
    </div>
  )
}

const QUESTIONS = [
  {
    passage: 'Proverbs 3:5–6',
    prompt: 'Which explanation remains closest to what the passage says?',
    answers: [
      'Trust guarantees the outcome I want.',
      'Trust means refusing to plan.',
      'Trust refuses to make my own understanding the final authority.',
    ],
    correct: 2,
    feedback: {
      teaching: 'The passage calls you to trust the Lord rather than making your own understanding the final authority.',
      boundary: 'It does not promise that trust will produce the particular outcome you prefer.',
    },
  },
  {
    passage: 'Proverbs 3:5–6',
    prompt: 'What does "lean not unto thine own understanding" establish?',
    answers: [
      'Personal judgment is always wrong.',
      'God\'s wisdom, not self-confidence, should be the final authority.',
      'You should not think carefully before deciding.',
    ],
    correct: 1,
    feedback: {
      teaching: 'The passage establishes that God\'s wisdom—not your own certainty—should be the final arbiter in your decisions.',
      boundary: 'It does not say careful reasoning is wrong. It says self-reliance as the final authority is wrong.',
    },
  },
  {
    passage: 'James 4:13–15',
    prompt: 'Which response explains the teaching most faithfully?',
    answers: [
      'Trust means planning humbly without turning your preferred outcome into God\'s promise.',
      'Trust guarantees the outcome.',
      'No one should make plans.',
    ],
    correct: 0,
    feedback: {
      teaching: 'The passage calls believers to plan while acknowledging God\'s sovereign authority over the future.',
      boundary: 'It does not forbid planning—it forbids making plans as though you control the outcome.',
    },
  },
  {
    passage: 'Proverbs 3:5–6',
    prompt: 'What does "in all thy ways acknowledge him" require?',
    answers: [
      'Invite God’s authority into every path, not only the parts that feel spiritual.',
      'Wait until a decision becomes easy before acting.',
      'Assume every open door is God’s endorsement.',
    ],
    correct: 0,
    feedback: {
      teaching: 'The passage calls for acknowledging the Lord across the whole decision, including motives, timing, responsibility, and desired outcomes.',
      boundary: 'It does not make every available opportunity automatically faithful.',
    },
  },
  {
    passage: 'James 4:13–15',
    prompt: 'Which sentence preserves both planning and surrender?',
    answers: [
      'I know this will work because I prayed about it.',
      'If the Lord wills, I will pursue this wisely and receive His redirection.',
      'Making a plan means I am relying on myself.',
    ],
    correct: 1,
    feedback: {
      teaching: 'James keeps planning under the phrase "if the Lord wills," so action remains humble instead of presumptuous.',
      boundary: 'The passage does not condemn wise preparation. It corrects certainty that ignores God’s rule over tomorrow.',
    },
  },
  {
    passage: 'Proverbs 3:5–6 · James 4:13–15',
    prompt: 'What faithful next step follows from these passages together?',
    answers: [
      'Choose the option with the highest salary so provision is secure.',
      'Avoid deciding until fear disappears completely.',
      'Compare the opportunity honestly, pray humbly, and refuse to make fear or money master.',
    ],
    correct: 2,
    feedback: {
      teaching: 'Together, the passages call you to plan honestly while making God—not fear, money, or self-certainty—the final authority.',
      boundary: 'They do not promise a painless choice or a guaranteed preferred result.',
    },
  },
]

const SCRIPTURE_REFERENCES: Record<string, { title: string; edition: string; text: string; note: string }[]> = {
  'Proverbs 3:5–6': [
    {
      title: 'Proverbs 3:5–6',
      edition: 'Selected translation',
      text: 'Trust in the LORD with all thine heart; and lean not unto thine own understanding. In all thy ways acknowledge him, and he shall direct thy paths.',
      note: 'This is the governing passage for this question.',
    },
  ],
  'James 4:13–15': [
    {
      title: 'James 4:13–15',
      edition: 'Selected translation',
      text: 'Go to now, ye that say, To day or to morrow we will go into such a city, and continue there a year, and buy and sell, and get gain: whereas ye know not what shall be on the morrow. For what is your life? It is even a vapour, that appeareth for a little time, and then vanisheth away. For that ye ought to say, If the Lord will, we shall live, and do this, or that.',
      note: 'This supporting passage keeps planning under humble dependence on God.',
    },
  ],
  'Proverbs 3:5–6 · James 4:13–15': [
    {
      title: 'Proverbs 3:5–6',
      edition: 'Selected translation',
      text: 'Trust in the LORD with all thine heart; and lean not unto thine own understanding. In all thy ways acknowledge him, and he shall direct thy paths.',
      note: 'Governing passage.',
    },
    {
      title: 'James 4:13–15',
      edition: 'Selected translation',
      text: 'Go to now, ye that say, To day or to morrow we will go into such a city, and continue there a year, and buy and sell, and get gain: whereas ye know not what shall be on the morrow. For what is your life? It is even a vapour, that appeareth for a little time, and then vanisheth away. For that ye ought to say, If the Lord will, we shall live, and do this, or that.',
      note: 'Supporting passage.',
    },
  ],
}

function ScriptureReferenceSheet({ passage, onClose }: { passage: string; onClose: () => void }) {
  const references = SCRIPTURE_REFERENCES[passage] ?? SCRIPTURE_REFERENCES['Proverbs 3:5–6']

  return (
    <div className="sheet-backdrop absolute inset-0 z-30 flex flex-col justify-end" style={{ background: 'rgba(36,23,26,0.34)' }}>
      <button className="flex-1" onClick={onClose} aria-label="Close Scripture reference" />
      <div className="bottom-sheet-rise max-h-[76%] overflow-y-auto rounded-t-[28px] px-5 pb-10 pt-4 shadow-2xl" style={{ background: '#FFFCF6' }}>
        <div className="mx-auto mb-4 h-1 w-12 rounded-full" style={{ background: '#D7C4AF' }} />
        <div className="mb-4 flex items-start justify-between gap-4">
          <div>
            <p className="text-[12px] font-semibold uppercase tracking-[0.14em]" style={{ color: '#B68425' }}>Scripture reference</p>
            <h2 className="mt-1 font-serif text-[26px] font-bold leading-[32px]" style={{ color: '#24171A' }}>{passage}</h2>
          </div>
          <button onClick={onClose} className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full" style={{ background: '#F4EBDD' }} aria-label="Close">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M4 4l10 10M14 4L4 14" stroke="#675A5D" strokeWidth="1.8" strokeLinecap="round" /></svg>
          </button>
        </div>

        <div className="flex flex-col gap-3">
          {references.map(ref => (
            <div key={ref.title} className="rounded-[18px] p-5" style={{ background: '#F7F1E7', border: '1px solid #E5D7C6' }}>
              <div className="mb-4 flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full" style={{ background: '#F3E6C9' }}>
                  <AppIcon name="book" size={22} color="#9B6B18" />
                </span>
                <div>
                  <p className="font-serif text-[17px] font-semibold" style={{ color: '#24171A' }}>{ref.title}</p>
                  <p className="text-[12px]" style={{ color: '#675A5D' }}>{ref.edition}</p>
                </div>
              </div>
              <p className="font-serif text-[19px] leading-[30px]" style={{ color: '#24171A' }}>{ref.text}</p>
              <div className="mt-4 rounded-[12px] px-3 py-2" style={{ background: '#F4EBDD' }}>
                <p className="text-[12px] leading-[17px]" style={{ color: '#675A5D' }}>{ref.note}</p>
              </div>
            </div>
          ))}
        </div>

        <button onClick={onClose}
          className="mt-5 w-full rounded-full font-semibold text-[16px]"
          style={{ height: 52, background: '#741630', color: '#FFFCF6' }}>
          Return to Question
        </button>
      </div>
    </div>
  )
}

// PRAC-03 Practice Question
export function PracticeQuestion() {
  const { navigate, goBack } = useApp()
  const [questionIdx, setQuestionIdx] = useState(0)
  const [selected, setSelected] = useState<number | null>(null)
  const [checked, setChecked] = useState(false)
  const [showScripture, setShowScripture] = useState(false)

  const q = QUESTIONS[questionIdx]
  const isCorrect = selected === q.correct

  const handleCheck = () => {
    if (selected !== null) setChecked(true)
  }

  const handleNext = () => {
    if (questionIdx < QUESTIONS.length - 1) {
      setQuestionIdx(i => i + 1)
      setSelected(null)
      setChecked(false)
    } else {
      navigate('practice-level-complete')
    }
  }

  if (checked) {
    return <PracticeFeedback
      correct={isCorrect}
      teaching={q.feedback.teaching}
      boundary={q.feedback.boundary}
      onNext={handleNext}
      questionIdx={questionIdx}
      totalQuestions={QUESTIONS.length}
    />
  }

  return (
    <div className="relative flex flex-col h-full" style={{ background: '#F7F1E7' }}>
      {/* Header */}
      <div className="px-5 pt-14 pb-3 shrink-0">
        <div className="flex items-center justify-between mb-2">
          <BackButton onBack={() => goBack('practice-intro')} />
          <div className="text-center">
            <p className="text-[13px] font-semibold" style={{ color: '#675A5D' }}>{q.passage}</p>
            <p className="text-[11px]" style={{ color: '#897A76' }}>Level 2 · Question {questionIdx + 1} of {QUESTIONS.length}</p>
          </div>
          <button onClick={() => setShowScripture(true)} className="text-[13px] font-medium" style={{ color: '#741630' }}>
            View Scripture
          </button>
        </div>
        {/* Progress bar */}
        <div className="h-1.5 rounded-full overflow-hidden" style={{ background: '#DDD0C0' }}>
          <div className="h-full rounded-full transition-all duration-500" style={{ width: `${(questionIdx / QUESTIONS.length) * 100}%`, background: '#741630' }} />
        </div>
      </div>

      {/* Progress dots */}
      <div className="px-5 flex gap-1.5 mb-4 shrink-0">
        {QUESTIONS.map((_, i) => (
          <div key={i} className="flex-1 h-1.5 rounded-full transition-all"
            style={{ background: i < questionIdx ? '#741630' : i === questionIdx ? '#741630' : '#DDD0C0', opacity: i === questionIdx ? 1 : i < questionIdx ? 0.7 : 0.4 }} />
        ))}
      </div>

      <div className="flex-1 px-5 flex flex-col gap-4 overflow-y-auto scrollbar-hide">
        <h2 className="font-serif text-[24px] font-bold leading-[30px]" style={{ color: '#24171A' }}>
          {q.prompt}
        </h2>

        <div className="flex flex-col gap-2.5">
          {q.answers.map((a, i) => (
            <button key={i} onClick={() => !checked && setSelected(i)}
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
        <button onClick={handleCheck} disabled={selected === null}
          className="w-full rounded-full font-semibold text-[17px] transition-all duration-200"
          style={{ height: 56, background: selected === null ? '#DDD0C0' : '#741630', color: selected === null ? '#897A76' : '#FFFCF6' }}>
          Check Answer
        </button>
      </div>

      {showScripture && <ScriptureReferenceSheet passage={q.passage} onClose={() => setShowScripture(false)} />}
    </div>
  )
}

// PRAC-04/05 Feedback
function PracticeFeedback({ correct, teaching, boundary, onNext, questionIdx, totalQuestions }: {
  correct: boolean; teaching: string; boundary: string; onNext: () => void; questionIdx: number; totalQuestions: number;
}) {
  const isLast = questionIdx === totalQuestions - 1

  return (
    <div className="flex flex-col h-full overflow-hidden screen-enter">
      <div className="relative h-44 overflow-hidden shrink-0">
        <img src={alignmentAssets.currentPath} alt="Ancient city landscape" className="w-full h-full object-cover" />
        <div className="absolute inset-0" style={{ background: correct ? 'rgba(88,112,78,0.6)' : 'rgba(163,58,58,0.5)' }} />
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
          <div className="w-14 h-14 rounded-full flex items-center justify-center" style={{ background: correct ? '#607255' : '#A33A3A' }}>
            {correct
              ? <svg width="26" height="20" viewBox="0 0 26 20" fill="none"><path d="M1 10l8 8 16-17" stroke="#FFFCF6" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
              : <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M4 4l12 12M16 4L4 16" stroke="#FFFCF6" strokeWidth="2.5" strokeLinecap="round" /></svg>
            }
          </div>
          <p className="font-serif text-[28px] font-bold" style={{ color: '#FFFCF6' }}>{correct ? 'Correct' : 'Not quite'}</p>
          <div className="h-0.5 w-16 rounded-full" style={{ background: correct ? '#E6C878' : '#D8A8B1' }} />
        </div>
      </div>

      <div className="flex-1 overflow-y-auto scrollbar-hide px-5 pt-7 flex flex-col gap-5" style={{ background: '#F7F1E7', paddingBottom: 'calc(env(safe-area-inset-bottom, 0px) + 42px)' }}>
        <div>
          <p className="text-[12px] font-semibold uppercase tracking-wider mb-2" style={{ color: '#B68425', letterSpacing: '0.1em' }}>What the passage teaches</p>
          <p className="text-[16px] leading-[24px]" style={{ color: '#24171A' }}>{teaching}</p>
        </div>

        {boundary && (
          <div className="rounded-[14px] p-4 flex gap-3" style={{ background: '#FFF3CD', border: '1px solid #E6C878' }}>
            <AppIcon name="alert" size={18} color="#9B6B18" className="shrink-0 mt-0.5" />
            <div>
              <p className="text-[12px] font-semibold mb-1" style={{ color: '#795719' }}>Important boundary</p>
              <p className="text-[13px] leading-[20px]" style={{ color: '#795719' }}>{boundary}</p>
            </div>
          </div>
        )}

        {!correct && (
          <div className="rounded-[14px] p-4" style={{ background: '#FFFCF6', border: '1px solid #DDD0C0' }}>
            <p className="text-[12px] font-semibold mb-1" style={{ color: '#897A76' }}>Why that answer sounds plausible</p>
            <p className="text-[13px] leading-[20px]" style={{ color: '#675A5D' }}>
              Many people associate trust with guaranteed outcomes. The passage, however, calls you to trust the direction, not demand the result.
            </p>
          </div>
        )}

        <button onClick={onNext}
          className="w-full rounded-full font-semibold text-[17px] flex items-center justify-center gap-2 transition-all"
          style={{ height: 56, background: '#741630', color: '#FFFCF6' }}>
          {isLast ? 'See Results →' : 'Next Question →'}
        </button>
      </div>
    </div>
  )
}

// PRAC-07 Level Complete
export function PracticeLevelComplete() {
  const { navigate, totalXP, passageMastery, practiceLevel2Complete, completePracticeLevel } = useApp()
  const earnedXP = practiceLevel2Complete ? 0 : 50
  const displayedTotal = totalXP + earnedXP
  const displayedMastery = Math.max(passageMastery, 2)

  return (
    <div className="flex flex-col h-full overflow-hidden screen-enter">
      <div className="relative h-[154px] overflow-hidden shrink-0">
        <img src={alignmentAssets.completionLandscape} alt="Ancient city at golden hour" className="w-full h-full object-cover" />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(30,21,18,0.1), rgba(247,241,231,1))' }} />
      </div>

      <div className="flex-1 overflow-y-auto scrollbar-hide px-5 flex flex-col items-center gap-3.5" style={{ background: '#F7F1E7', paddingBottom: 'calc(env(safe-area-inset-bottom, 0px) + 42px)' }}>
        <div className="medal-rise w-[68px] h-[68px] rounded-full flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #B68425 0%, #E6C878 45%, #B68425 100%)', boxShadow: '0 6px 32px rgba(182,132,37,0.45)' }}>
          <div className="w-[52px] h-[52px] rounded-full flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #3B1F0F 0%, #741630 100%)' }}>
            <AppIcon name="book" size={25} color="#E6C878" />
          </div>
        </div>

        <div className="text-center">
          <h2 className="font-serif text-[30px] font-bold leading-[35px]" style={{ color: '#24171A' }}>Level 2 complete</h2>
          <div className="h-0.5 w-16 rounded-full mx-auto mt-2" style={{ background: '#B68425' }} />
        </div>

        <p className="text-[14px] text-center leading-[20px]" style={{ color: '#675A5D' }}>
          You can now <strong style={{ color: '#24171A' }}>recognize explanations</strong> that preserve both trust and the passage's boundaries.
        </p>

        <div className="w-full rounded-[18px] p-3.5 flex flex-col gap-3" style={{ background: '#FFFCF6', boxShadow: '0 2px 16px rgba(30,21,18,0.07)' }}>
          <div className="flex items-center gap-3">
            <AppIcon name="book" size={22} color="#B68425" />
            <div className="flex-1">
              <p className="text-[13px] font-semibold mb-1" style={{ color: '#24171A' }}>Passage Mastery · {displayedMastery} of 5</p>
              <div className="h-2 rounded-full overflow-hidden" style={{ background: '#DDD0C0' }}>
                <div className="h-full rounded-full bar-fill" style={{ width: `${(displayedMastery / 5) * 100}%`, background: '#741630' }} />
              </div>
            </div>
          </div>
          <div className="h-px" style={{ background: '#DDD0C0' }} />
          <div className="flex items-center gap-3">
            <AppIcon name="star" size={22} color="#B68425" />
            <div className="flex-1">
              <p className="text-[13px] font-semibold mb-2 xp-pop" style={{ color: '#B68425' }}>+{earnedXP} verified XP · {displayedTotal} XP total</p>
              <XPBar totalXP={displayedTotal} awardedXP={earnedXP} id="completion-xp-bar" compact />
            </div>
          </div>
          <div className="h-px" style={{ background: '#DDD0C0' }} />
          <div className="flex items-center gap-3">
            <AppIcon name="leaf" size={22} color="#607255" />
            <div className="flex-1">
              <p className="text-[13px] font-semibold mb-1" style={{ color: '#24171A' }}>Scripture in Context · 2 of 3</p>
              <div className="h-2 rounded-full overflow-hidden" style={{ background: '#DDD0C0' }}>
                <div className="h-full rounded-full bar-fill" style={{ width: '66%', background: '#B68425' }} />
              </div>
            </div>
          </div>
        </div>

        <div className="w-full flex flex-col gap-2.5">
          <button onClick={() => { completePracticeLevel(); navigate('faithful-action') }}
            className="w-full rounded-full font-semibold text-[17px] transition-all"
            style={{ height: 54, background: '#741630', color: '#FFFCF6' }}>
            Return to Alignment
          </button>
          <button onClick={() => navigate('practice-intro')}
            className="w-full rounded-full font-semibold text-[16px] transition-all"
            style={{ height: 48, background: 'transparent', border: '1.5px solid #B68425', color: '#B68425' }}>
            Continue to Level 3
          </button>
        </div>
      </div>
    </div>
  )
}
