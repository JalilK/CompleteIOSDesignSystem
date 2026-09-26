import React, { useState } from 'react'
import { useApp } from '../context'
import { alignmentAssets } from '../assets/alignment/assets'

const HERO_LANDSCAPE = alignmentAssets.currentPath
const STONE_PATH = alignmentAssets.currentPath

const ONBOARDING_LEVEL_1_QUESTIONS = [
  {
    passage: 'Proverbs 14:12',
    verse: ['There is a way that seems', 'right to a man, but its end', 'is the way to death.'],
    prompt: 'What should determine whether the belief is true?',
    answers: ['The strength of the feeling', 'The person’s intention', 'What Scripture establishes'],
    correct: 2,
  },
  {
    passage: 'Proverbs 14:12',
    verse: ['There is a way that seems', 'right to a man, but its end', 'is the way to death.'],
    prompt: 'What does this passage warn against?',
    answers: ['Treating inner certainty as proof', 'Asking wise people for counsel', 'Testing a belief against Scripture'],
    correct: 0,
  },
  {
    passage: 'Proverbs 3:5–6',
    verse: ['Trust in the LORD with all thine heart;', 'and lean not unto thine own understanding.'],
    prompt: 'Which response keeps the passage in bounds?',
    answers: ['God must give me the outcome I want', 'Trust God without making my view final', 'Planning means I am not trusting'],
    correct: 1,
  },
  {
    passage: 'James 4:13–15',
    verse: ['If the Lord will, we shall live,', 'and do this, or that.'],
    prompt: 'What does humble planning sound like?',
    answers: ['I control what happens next', 'I should never make a plan', 'I will plan while submitting the outcome to God'],
    correct: 2,
  },
]

function StepDots({ total, current }: { total: number; current: number }) {
  return (
    <div className="flex gap-1.5 items-center justify-center">
      {Array.from({ length: total }).map((_, i) => (
        <div key={i} className="rounded-full transition-all duration-300"
          style={{ width: i === current ? 16 : 6, height: 6, background: i === current ? '#741630' : '#DDD0C0' }} />
      ))}
    </div>
  )
}

function BackButton({ onBack }: { onBack: () => void }) {
  return (
    <button onClick={onBack} className="w-10 h-10 flex items-center justify-center rounded-full" aria-label="Back">
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M12 4L6 10l6 6" stroke="#675A5D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </button>
  )
}

function PrimaryButton({ label, onPress, disabled }: { label: string; onPress: () => void; disabled?: boolean }) {
  return (
    <button onClick={onPress} disabled={disabled}
      className="w-full rounded-full font-semibold text-[17px] transition-all duration-200 flex items-center justify-center gap-2"
      style={{ height: 56, background: disabled ? '#DDD0C0' : '#741630', color: disabled ? '#897A76' : '#FFFCF6' }}>
      {label}
      {!disabled && <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M4 9h10M10 5l4 4-4 4" stroke="#FFFCF6" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>}
    </button>
  )
}

function NativeStatusBar({ light = false }: { light?: boolean }) {
  return (
    <div className="absolute left-0 right-0 top-0 z-20 flex items-center justify-between px-[26px] pt-[15px] text-[13px] font-semibold" style={{ color: light ? '#FFFCF6' : '#24171A' }}>
      <span>9:41</span>
      <div className="flex items-center gap-1.5" aria-hidden="true">
        <div className="flex h-3 items-end gap-0.5">
          <span className="block w-1 rounded-sm" style={{ height: 4, background: light ? '#FFFCF6' : '#24171A' }} />
          <span className="block w-1 rounded-sm" style={{ height: 6, background: light ? '#FFFCF6' : '#24171A' }} />
          <span className="block w-1 rounded-sm" style={{ height: 8, background: light ? '#FFFCF6' : '#24171A' }} />
          <span className="block w-1 rounded-sm" style={{ height: 10, background: light ? '#FFFCF6' : '#24171A' }} />
        </div>
        <svg width="15" height="11" viewBox="0 0 15 11" fill="none">
          <path d="M1 4.3c3.8-3.8 9.2-3.8 13 0M3.5 6.7c2.4-2.2 5.6-2.2 8 0M6.2 9.1c.8-.7 1.8-.7 2.6 0" stroke={light ? '#FFFCF6' : '#24171A'} strokeWidth="1.4" strokeLinecap="round" />
        </svg>
        <div className="h-[10px] w-[21px] rounded-[3px] border" style={{ borderColor: light ? '#FFFCF6' : '#24171A' }}>
          <div className="m-[1px] h-[6px] w-[14px] rounded-[2px]" style={{ background: light ? '#FFFCF6' : '#24171A' }} />
        </div>
      </div>
    </div>
  )
}

function MissionReferenceNativeScreen({ onNext }: { onNext: () => void }) {
  return (
    <div className="relative h-full overflow-hidden" style={{ background: '#F7F1E7' }}>
      <NativeStatusBar />
      <img src={alignmentAssets.missionLandscape} alt="Open Bible overlooking an ancient city at sunrise" className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, rgba(255,252,246,0.9) 0%, rgba(255,252,246,0.45) 35%, rgba(255,252,246,0.02) 60%, rgba(30,21,18,0.35) 100%)' }} />
      <div className="relative z-10 flex h-full flex-col items-center px-8 pb-8 pt-[106px] text-center">
        <h1 className="font-serif text-[33px] font-semibold leading-[39px]" style={{ color: '#3A0D18' }}>
          Bring the Word<br />of God into<br /><em className="font-medium" style={{ color: '#7B4B16' }}>real life.</em>
        </h1>
        <p className="mt-5 text-[15px] leading-[22px]" style={{ color: '#30272A' }}>
          Understand Scripture.<br />Act faithfully. Communicate<br />it clearly.
        </p>
        <div className="mt-auto w-full pb-1">
          <PrimaryButton label="Begin" onPress={onNext} />
        </div>
      </div>
    </div>
  )
}

function MethodReferenceNativeScreen({ onNext, onBack }: { onNext: () => void; onBack: () => void }) {
  return (
    <div className="relative h-full overflow-hidden" style={{ background: '#F7F1E7' }}>
      <NativeStatusBar light />
      <img src={alignmentAssets.methodBibleRoom} alt="Open Bible and cup in warm morning light" className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0" style={{ background: 'linear-gradient(90deg, rgba(247,241,231,0.86) 0%, rgba(247,241,231,0.55) 48%, rgba(247,241,231,0.06) 100%)' }} />
      <button onClick={onBack} className="absolute left-5 top-[70px] z-20 flex h-10 w-10 items-center justify-center rounded-full" aria-label="Back">
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M11 3L5 9l6 6" stroke="#3A0D18" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" /></svg>
      </button>
      <div className="relative z-10 flex h-full flex-col px-7 pb-8 pt-[142px]">
        <h2 className="font-serif text-[36px] font-semibold leading-[41px]" style={{ color: '#3A0D18' }}>
          Scripture<br />comes before<br /><em className="font-medium" style={{ color: '#9B6B18' }}>advice.</em>
        </h2>
        <p className="mt-5 text-[15px] leading-[21px]" style={{ color: '#30272A' }}>
          Understand the moment.<br />Read what Scripture says.<br />Choose one faithful step.
        </p>
        <div className="mt-auto w-full pb-1">
          <PrimaryButton label="Try it" onPress={onNext} />
        </div>
      </div>
    </div>
  )
}

function QuestionReferenceNativeScreen({ questionIndex, onCorrect, onBack }: { questionIndex: number; onCorrect: () => void; onBack: () => void }) {
  const [selected, setSelected] = useState<number | null>(null)
  const question = ONBOARDING_LEVEL_1_QUESTIONS[questionIndex]
  return (
    <div className="relative flex h-full flex-col overflow-hidden" style={{ background: '#F7F1E7' }}>
      <NativeStatusBar />
      <div className="absolute inset-x-0 top-0 h-[385px]" style={{ background: '#F1E5D2' }}>
        <div className="absolute inset-x-0 bottom-0 h-[130px] overflow-hidden">
          <img src={alignmentAssets.questionLandscape} alt="Ancient hillside and city landscape" className="h-full w-full object-cover" />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, rgba(247,241,231,0) 0%, rgba(247,241,231,0.92) 100%)' }} />
        </div>
      </div>
      <button onClick={onBack} className="absolute left-5 top-[62px] z-20 flex h-10 w-10 items-center justify-center rounded-full" aria-label="Back">
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M11 3L5 9l6 6" stroke="#3A0D18" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" /></svg>
      </button>
      <div className="relative z-10 flex h-full flex-col px-7 pb-8 pt-[118px]">
        <p className="text-center text-[12px] font-semibold uppercase tracking-[0.32em]" style={{ color: '#9B6B18' }}>{question.passage}</p>
        <p className="mx-auto mt-5 max-w-[275px] text-center font-serif text-[20px] leading-[29px]" style={{ color: '#24171A' }}>
          {question.verse.map((line, index) => (
            <React.Fragment key={line}>{line}{index < question.verse.length - 1 && <br />}</React.Fragment>
          ))}
        </p>
        <div className="mx-auto mt-3 h-px w-12" style={{ background: '#B68425' }} />
        <h2 className="mt-[86px] font-serif text-[27px] font-semibold leading-[33px]" style={{ color: '#24171A' }}>
          {question.prompt}
        </h2>
        <p className="mt-2 text-[12px]" style={{ color: '#897A76' }}>Question {questionIndex + 1} of {ONBOARDING_LEVEL_1_QUESTIONS.length}</p>
        <div className="mt-5 flex flex-col gap-2.5">
          {question.answers.map((answer, index) => (
            <button
              key={answer}
              onClick={() => setSelected(index)}
              className="flex h-[54px] items-center gap-4 rounded-[10px] px-4 text-left"
              style={{
                background: selected === index ? '#FFF6F0' : 'rgba(255,252,246,0.72)',
                border: `1px solid ${selected === index ? '#741630' : '#E0CDB8'}`,
                boxShadow: '0 1px 5px rgba(30,21,18,0.04)',
              }}
            >
              <span className="flex h-[19px] w-[19px] shrink-0 items-center justify-center rounded-full" style={{ border: `1.5px solid ${selected === index ? '#741630' : '#9A8B7C'}` }}>
                {selected === index && <span className="h-[9px] w-[9px] rounded-full" style={{ background: '#741630' }} />}
              </span>
              <span className="text-[13px] font-medium" style={{ color: '#30272A' }}>{answer}</span>
            </button>
          ))}
        </div>
        <div className="mt-8 shrink-0">
          <PrimaryButton label={questionIndex === ONBOARDING_LEVEL_1_QUESTIONS.length - 1 ? 'Complete Level 1' : 'Next Question'} onPress={onCorrect} disabled={selected !== question.correct} />
        </div>
      </div>
    </div>
  )
}

function CompletionReferenceNativeScreen({ onNext }: { onNext: () => void }) {
  return (
    <div className="relative h-full overflow-y-auto scrollbar-hide" style={{ background: '#F7F1E7' }}>
      <NativeStatusBar light />
      <div className="relative h-[276px] overflow-hidden">
        <img src={alignmentAssets.completionLandscape} alt="Ancient stone path and city at golden hour" className="h-full w-full object-cover" />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, rgba(30,21,18,0.05) 0%, rgba(247,241,231,0.02) 48%, #F7F1E7 100%)' }} />
      </div>
      <div className="relative -mt-[66px] flex flex-col items-center px-6 pb-8 text-center">
        <div className="relative flex h-[104px] w-[104px] items-center justify-center rounded-full" style={{ background: 'linear-gradient(145deg, #F9E8B9 0%, #B68425 44%, #F5D98A 100%)', boxShadow: '0 5px 24px rgba(182,132,37,0.4)' }}>
          <div className="flex h-[82px] w-[82px] items-center justify-center rounded-full" style={{ background: 'linear-gradient(145deg, #40513B 0%, #687B56 100%)', border: '1px solid rgba(255,252,246,0.48)' }}>
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
              <path d="M23 38V12" stroke="#DDB761" strokeWidth="2.2" strokeLinecap="round" />
              <path d="M23 29c-6-7-6-13-2-20 5 6 6 13 2 20z" fill="#DDB761" opacity="0.86" />
              <path d="M24 27c7-3 12-8 14-15-8 1-13 6-14 15zM23 34c-6-2-10-6-12-12 7 0 11 4 12 12z" fill="#E6C878" opacity="0.92" />
            </svg>
          </div>
        </div>
        <h2 className="mt-7 font-serif text-[31px] font-semibold leading-[36px]" style={{ color: '#3A0D18' }}>
          First Scripture<br />practice <em className="font-medium" style={{ color: '#7B4B16' }}>complete</em>
        </h2>
        <p className="mt-5 text-[14px]" style={{ color: '#30272A' }}>Passage Mastery · Level 1 of 5</p>
        <div className="mt-4 flex items-center justify-center gap-3">
          {Array.from({ length: 5 }).map((_, index) => (
            <span key={index} className="h-[13px] w-[13px] rounded-full" style={{ background: index === 0 ? '#B68425' : '#D8CDBC' }} />
          ))}
        </div>
        <div className="mt-7 flex h-[58px] w-full items-center justify-center rounded-[9px]" style={{ background: 'rgba(255,252,246,0.45)', border: '1px solid rgba(221,208,192,0.78)' }}>
          <span className="font-serif text-[32px]" style={{ color: '#9B6B18' }}>+25 XP</span>
        </div>
        <div className="mt-6 h-px w-10" style={{ background: '#B68425' }} />
        <div className="mt-5 flex h-[52px] w-full items-center gap-3 rounded-[9px] px-4" style={{ background: 'rgba(255,252,246,0.46)', border: '1px solid rgba(221,208,192,0.78)' }}>
          <span className="flex h-34 w-34 items-center justify-center rounded-full" style={{ width: 34, height: 34, background: '#B68425' }}>
            <svg width="21" height="18" viewBox="0 0 21 18" fill="none"><path d="M2 3.5c0-1 1-1.8 2-1.5l4.8 1.3c.8.2 1.4 1 1.4 1.8v10.4c0-.8-.6-1.5-1.4-1.8L4 12.4c-1-.3-2 .5-2 1.5V3.5zM19 3.5c0-1-1-1.8-2-1.5l-4.8 1.3c-.8.2-1.4 1-1.4 1.8v10.4c0-.8.6-1.5 1.4-1.8l4.8-1.3c1-.3 2 .5 2 1.5V3.5z" stroke="#FFFCF6" strokeWidth="1.3" strokeLinejoin="round"/></svg>
          </span>
          <span className="text-[13px] font-medium" style={{ color: '#30272A' }}>Text Before Assumption · 1 of 3</span>
        </div>
        <div className="mt-7 w-full">
          <PrimaryButton label="Continue" onPress={onNext} />
        </div>
      </div>
    </div>
  )
}

// ONB-11 Recommended Path
function RecommendedPathScreen({ onNext, onBack }: { onNext: () => void; onBack: () => void }) {
  return (
    <div className="flex flex-col h-full overflow-hidden">
      <div className="relative h-52 overflow-hidden">
        <img src={STONE_PATH} alt="Stone path through ancient landscape" className="w-full h-full object-cover" />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(30,21,18,0.2), rgba(247,241,231,1))' }} />
        <div className="absolute top-14 left-5 flex items-center gap-2">
          <BackButton onBack={onBack} />
        </div>
        <div className="absolute top-16 right-5">
          <StepDots total={10} current={8} />
        </div>
      </div>
      <div className="flex-1 px-6 pt-2 flex flex-col gap-4 overflow-y-auto scrollbar-hide" style={{ background: '#F7F1E7' }}>
        <p className="text-xs font-semibold tracking-widest uppercase" style={{ color: '#B68425', letterSpacing: '0.1em' }}>Recommended for you</p>
        <h2 className="font-serif text-[26px] leading-[32px] font-bold" style={{ color: '#24171A' }}>
          Bringing Scripture Into Daily Decisions
        </h2>
        <p className="text-[14px]" style={{ color: '#675A5D' }}>7 sessions · About 5 minutes each</p>
        <div className="rounded-[18px] p-4 flex flex-col gap-3" style={{ background: '#FFFCF6' }}>
          <p className="text-[13px] font-semibold uppercase tracking-wider" style={{ color: '#B68425', letterSpacing: '0.08em' }}>First three sessions</p>
          {['Trust Before You Choose', 'Planning Without Controlling the Outcome', 'When Wisdom Conflicts with Instinct'].map((s, i) => (
            <div key={i} className="flex items-center gap-3">
              <span className="text-[12px] font-bold w-5 h-5 rounded-full flex items-center justify-center" style={{ background: '#F4EBDD', color: '#741630' }}>{i + 1}</span>
              <span className="text-[14px]" style={{ color: '#24171A' }}>{s}</span>
            </div>
          ))}
          <button className="text-[13px] font-medium" style={{ color: '#741630' }}>View all sessions →</button>
        </div>
        <p className="text-[14px] leading-[21px]" style={{ color: '#675A5D' }}>
          <strong style={{ color: '#24171A' }}>By the end:</strong> You'll be able to evaluate decisions against what Scripture establishes and choose one faithful next step.
        </p>
        <p className="text-[13px] italic text-center" style={{ color: '#897A76' }}>Complete at your own pace</p>
      </div>
      <div className="px-6 pb-10 pt-3" style={{ background: '#F7F1E7' }}>
        <PrimaryButton label="Continue" onPress={onNext} />
      </div>
    </div>
  )
}

// ONB-12 Paywall
function PaywallScreen({ onNext, onBack }: { onNext: () => void; onBack: () => void }) {
  const [selectedPlan, setSelectedPlan] = useState<'annual' | 'monthly'>('annual')
  const benefits = [
    'Continue your personalized Path',
    'Bring real situations under Scripture',
    'Build lasting understanding through Practice',
    'See your growth across passages',
    'Receive personal devotionals, prayer, and guided meditation',
    'Save your Library, progress, and achievements',
  ]
  return (
    <div className="flex flex-col h-full overflow-hidden">
      <div className="relative h-44 overflow-hidden">
        <img src={HERO_LANDSCAPE} alt="Ancient city at golden hour" className="w-full h-full object-cover" />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(30,21,18,0.3), rgba(247,241,231,1))' }} />
        <div className="absolute top-14 left-5">
          <BackButton onBack={onBack} />
        </div>
      </div>
      <div className="flex-1 px-6 pt-2 flex flex-col gap-4 overflow-y-auto scrollbar-hide" style={{ background: '#F7F1E7' }}>
        <div>
          <h2 className="font-serif text-[28px] leading-[34px] font-bold" style={{ color: '#24171A' }}>
            Continue your journey in Scripture
          </h2>
          <p className="text-[15px] mt-2" style={{ color: '#675A5D' }}>
            Deeper understanding. A clearer next step. A more rooted you.
          </p>
        </div>
        <div className="flex flex-col gap-2">
          {[
            { id: 'annual' as const, badge: 'MOST POPULAR', line1: '7 days free', line2: 'Annual · $39.99/yr' },
            { id: 'monthly' as const, badge: null, line1: 'Monthly', line2: '$7.99/mo' },
          ].map(p => (
            <button key={p.id} onClick={() => setSelectedPlan(p.id)}
              className="rounded-[16px] p-4 flex items-center gap-3 transition-all duration-200"
              style={{
                background: selectedPlan === p.id ? '#FDEEF1' : '#FFFCF6',
                border: `2px solid ${selectedPlan === p.id ? '#741630' : '#DDD0C0'}`,
              }}>
              <div className="w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0"
                style={{ borderColor: selectedPlan === p.id ? '#741630' : '#DDD0C0' }}>
                {selectedPlan === p.id && <div className="w-2.5 h-2.5 rounded-full" style={{ background: '#741630' }} />}
              </div>
              <div className="flex-1 text-left">
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-[15px]" style={{ color: '#24171A' }}>{p.line1}</span>
                  {p.badge && <span className="text-[10px] font-bold px-2 py-0.5 rounded-full" style={{ background: '#741630', color: '#E6C878', letterSpacing: '0.05em' }}>{p.badge}</span>}
                </div>
                <span className="text-[13px]" style={{ color: '#675A5D' }}>{p.line2}</span>
              </div>
            </button>
          ))}
        </div>
        <div className="flex flex-col gap-2">
          {benefits.map((b, i) => (
            <div key={i} className="flex items-start gap-2.5">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="shrink-0 mt-0.5"><circle cx="8" cy="8" r="8" fill="#607255" /><path d="M4.5 8l2.5 2.5 5-5" stroke="#FFFCF6" strokeWidth="1.5" strokeLinecap="round" /></svg>
              <span className="text-[14px] leading-[20px]" style={{ color: '#675A5D' }}>{b}</span>
            </div>
          ))}
        </div>
        <p className="text-[12px] text-center leading-[18px]" style={{ color: '#897A76' }}>
          Then renews automatically at the selected price. Cancel anytime.
        </p>
      </div>
      <div className="px-6 pb-6 pt-3 flex flex-col gap-3" style={{ background: '#F7F1E7' }}>
        <PrimaryButton label={selectedPlan === 'annual' ? 'Start 7-Day Free Trial' : 'Start Monthly'} onPress={onNext} />
        <div className="flex justify-center gap-4">
          <button className="text-[12px]" style={{ color: '#897A76' }}>Restore Purchases</button>
          <button className="text-[12px]" style={{ color: '#897A76' }}>Terms</button>
          <button className="text-[12px]" style={{ color: '#897A76' }}>Privacy</button>
        </div>
      </div>
    </div>
  )
}

export function Onboarding() {
  const { onboardingStep, nextOnboardingStep, prevOnboardingStep, setTab } = useApp()
  const [questionIndex, setQuestionIndex] = useState(0)

  const finishOnboarding = () => {
    setTab('home')
  }

  const advanceOnboardingQuestion = () => {
    if (questionIndex < ONBOARDING_LEVEL_1_QUESTIONS.length - 1) {
      setQuestionIndex(index => index + 1)
    } else {
      nextOnboardingStep()
    }
  }

  const backFromQuestion = () => {
    if (questionIndex > 0) {
      setQuestionIndex(index => index - 1)
    } else {
      prevOnboardingStep()
    }
  }

  const steps: Record<number, React.ReactElement> = {
    1: <MissionReferenceNativeScreen onNext={nextOnboardingStep} />,
    2: <MethodReferenceNativeScreen onNext={nextOnboardingStep} onBack={prevOnboardingStep} />,
    3: <QuestionReferenceNativeScreen key={questionIndex} questionIndex={questionIndex} onCorrect={advanceOnboardingQuestion} onBack={backFromQuestion} />,
    4: <CompletionReferenceNativeScreen onNext={nextOnboardingStep} />,
    5: <RecommendedPathScreen onNext={nextOnboardingStep} onBack={prevOnboardingStep} />,
    6: <PaywallScreen onNext={finishOnboarding} onBack={prevOnboardingStep} />,
  }

  return (
    <div className="h-full screen-enter" key={onboardingStep}>
      {steps[onboardingStep] || steps[1]}
    </div>
  )
}
