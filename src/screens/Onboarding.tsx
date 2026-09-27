import React, { useState } from 'react'
import { useApp } from '../context'
import { alignmentAssets } from '../assets/alignment/assets'
import { XPBar } from '../components/XPBar'

const HERO_LANDSCAPE = alignmentAssets.currentPath
const STONE_PATH = alignmentAssets.currentPath

const ONBOARDING_LEVEL_1_QUESTIONS = [
  {
    passage: 'Proverbs 14:12',
    verse: ['There is a way that seems', 'right to a man, but its end', 'is the way to death.'],
    prompt: 'What should determine whether the belief is true?',
    answers: ['The strength of the feeling', 'The person’s intention', 'What Scripture establishes'],
    correct: 2,
    feedbackTitle: 'Scripture comes first',
    feedback: 'A belief is not proven by how strongly it feels true. Scripture establishes the boundary.',
  },
  {
    passage: 'Proverbs 14:12',
    verse: ['There is a way that seems', 'right to a man, but its end', 'is the way to death.'],
    prompt: 'What does this passage warn against?',
    answers: ['Treating inner certainty as proof', 'Asking wise people for counsel', 'Testing a belief against Scripture'],
    correct: 0,
    feedbackTitle: 'A feeling can seem right',
    feedback: 'The passage warns that a way can feel right and still lead away from wisdom.',
  },
  {
    passage: 'Proverbs 3:5–6',
    verse: ['Trust in the LORD with all thine heart;', 'and lean not unto thine own understanding.'],
    prompt: 'Which response keeps the passage in bounds?',
    answers: ['God must give me the outcome I want', 'Trust God without making my view final', 'Planning means I am not trusting'],
    correct: 1,
    feedbackTitle: 'Trust does not demand',
    feedback: 'The passage calls you to trust the Lord rather than turning your preferred outcome into His promise.',
  },
  {
    passage: 'James 4:13–15',
    verse: ['If the Lord will, we shall live,', 'and do this, or that.'],
    prompt: 'What does humble planning sound like?',
    answers: ['I control what happens next', 'I should never make a plan', 'I will plan while submitting the outcome to God'],
    correct: 2,
    feedbackTitle: 'Plan humbly',
    feedback: 'James does not forbid planning. It teaches you to plan while submitting the outcome to the Lord.',
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
  const [checked, setChecked] = useState(false)
  const question = ONBOARDING_LEVEL_1_QUESTIONS[questionIndex]
  const isCorrect = selected === question.correct
  const continueLabel = checked && isCorrect
    ? questionIndex === ONBOARDING_LEVEL_1_QUESTIONS.length - 1 ? 'Complete Level 1' : 'Next Question'
    : 'Check Answer'
  const handlePrimary = () => {
    if (selected === null) return
    if (!checked) {
      setChecked(true)
      return
    }
    if (isCorrect) {
      onCorrect()
    } else {
      setSelected(null)
      setChecked(false)
    }
  }

  return (
    <div className="relative flex h-full flex-col overflow-hidden" style={{ background: '#F7F1E7' }}>
      <NativeStatusBar />
      <button onClick={onBack} className="absolute left-5 top-[62px] z-20 flex h-10 w-10 items-center justify-center rounded-full" aria-label="Back">
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M11 3L5 9l6 6" stroke="#3A0D18" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" /></svg>
      </button>
      <div className="relative z-10 flex h-full flex-col px-7 pb-6 pt-[76px]">
        <section className="relative -mx-7 h-[242px] shrink-0 overflow-hidden" style={{ background: '#F1E5D2' }}>
          <div className="relative z-10 mx-7 flex h-[128px] flex-col items-center justify-center">
            <p className="text-center text-[11px] font-semibold uppercase tracking-[0.32em]" style={{ color: '#9B6B18' }}>{question.passage}</p>
            <p className="mx-auto mt-3 max-w-[285px] text-center font-serif text-[17px] leading-[23px]" style={{ color: '#24171A' }}>
              {question.verse.map((line, index) => (
                <React.Fragment key={line}>{line}{index < question.verse.length - 1 && <br />}</React.Fragment>
              ))}
            </p>
            <div className="mx-auto mt-2.5 h-px w-12" style={{ background: '#B68425' }} />
          </div>
          <div className="absolute inset-x-0 bottom-0 h-[128px] overflow-hidden">
            <img src={alignmentAssets.questionLandscape} alt="Ancient hillside and city landscape" className="h-full w-full object-cover" />
            <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, rgba(241,229,210,0.18) 0%, rgba(247,241,231,0.18) 48%, rgba(247,241,231,0.9) 100%)' }} />
          </div>
        </section>

        <div className="flex-1 overflow-y-auto scrollbar-hide pt-5">
          <h2 className="font-serif text-[25px] font-semibold leading-[30px]" style={{ color: '#24171A' }}>
            {question.prompt}
          </h2>
          <p className="mt-2 text-[12px]" style={{ color: '#897A76' }}>Question {questionIndex + 1} of {ONBOARDING_LEVEL_1_QUESTIONS.length}</p>
          <div className="mt-4 flex flex-col gap-2 pb-4">
            {question.answers.map((answer, index) => (
              <button
                key={answer}
                onClick={() => {
                  setSelected(index)
                  setChecked(false)
                }}
                className={`${checked ? 'min-h-[46px]' : 'min-h-[48px]'} flex items-center gap-4 rounded-[10px] px-4 py-2 text-left`}
                style={{
                  background: selected === index ? checked && isCorrect ? '#F2F6EA' : checked && !isCorrect ? '#FFF1F1' : '#FFF6F0' : 'rgba(255,252,246,0.72)',
                  border: `1px solid ${selected === index ? checked && isCorrect ? '#607255' : checked && !isCorrect ? '#A33A3A' : '#741630' : '#E0CDB8'}`,
                  boxShadow: '0 1px 5px rgba(30,21,18,0.04)',
                }}
              >
                <span className="flex h-[19px] w-[19px] shrink-0 items-center justify-center rounded-full" style={{ border: `1.5px solid ${selected === index ? checked && isCorrect ? '#607255' : checked && !isCorrect ? '#A33A3A' : '#741630' : '#9A8B7C'}` }}>
                  {selected === index && <span className="h-[9px] w-[9px] rounded-full" style={{ background: checked && isCorrect ? '#607255' : checked && !isCorrect ? '#A33A3A' : '#741630' }} />}
                </span>
                <span className="text-[13px] font-medium" style={{ color: '#30272A' }}>{answer}</span>
              </button>
            ))}
          </div>
          {checked && (
            <div className="mt-3 rounded-[12px] p-3 text-left" style={{ background: isCorrect ? '#F2F6EA' : '#FFF1F1', border: `1px solid ${isCorrect ? '#B7C4A4' : '#E4B2B2'}` }}>
              <p className="text-[13px] font-semibold" style={{ color: isCorrect ? '#40513B' : '#7A1E1E' }}>{isCorrect ? question.feedbackTitle : 'Try the Scripture boundary'}</p>
              <p className="mt-1 text-[13px] leading-[18px]" style={{ color: '#30272A' }}>{isCorrect ? question.feedback : 'Pause and look again at what the passage itself establishes.'}</p>
            </div>
          )}
        </div>
        <div className="shrink-0 pt-4">
          <PrimaryButton label={checked && !isCorrect ? 'Try Again' : continueLabel} onPress={handlePrimary} disabled={selected === null} />
        </div>
      </div>
    </div>
  )
}

function PurposeSelectionScreen({ onNext, onBack }: { onNext: () => void; onBack: () => void }) {
  const [selected, setSelected] = useState('decision')
  const choices = [
    { id: 'decision', icon: 'compass', label: 'Make a faithful decision' },
    { id: 'pattern', icon: 'leaf', label: 'Change a pattern in my life' },
    { id: 'weight', icon: 'heart', label: 'Work through something weighing on me' },
    { id: 'understand', icon: 'book', label: 'Understand something I’m facing' },
    { id: 'grow', icon: 'sprout', label: 'Grow in understanding Scripture' },
  ]

  return (
    <div className="relative flex h-full flex-col overflow-hidden" style={{ background: '#F7F1E7' }}>
      <NativeStatusBar />
      <img src={alignmentAssets.questionLandscape} alt="Soft stone path landscape" className="absolute inset-x-0 top-0 h-[380px] object-cover opacity-90" />
      <div className="absolute inset-x-0 top-0 h-[430px]" style={{ background: 'linear-gradient(180deg, rgba(247,241,231,0.68) 0%, rgba(247,241,231,0.22) 38%, rgba(247,241,231,0.34) 58%, #F7F1E7 94%)' }} />
      <div className="relative z-10 flex h-full flex-col px-7 pb-8 pt-[68px]">
        <button onClick={onBack} className="mb-14 flex h-10 w-10 items-center justify-center rounded-full" aria-label="Back">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M11 3L5 9l6 6" stroke="#3A0D18" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" /></svg>
        </button>
        <h2 className="font-serif text-[29px] leading-[34px]" style={{ color: '#3A0D18' }}>
          Where would Scripture<br />help most right now?
        </h2>
        <div className="mt-auto flex flex-col gap-2.5">
          {choices.map(choice => (
            <button
              key={choice.id}
              onClick={() => setSelected(choice.id)}
              className="flex min-h-[71px] items-center gap-4 rounded-[10px] px-4 text-left"
              style={{
                background: selected === choice.id ? '#FFFCF6' : 'rgba(255,252,246,0.82)',
                border: `1px solid ${selected === choice.id ? '#DDB761' : 'rgba(221,208,192,0.72)'}`,
                boxShadow: '0 1px 8px rgba(30,21,18,0.05)',
              }}
            >
              <PurposeIcon name={choice.icon} />
              <span className="flex-1 font-serif text-[17px] leading-[21px]" style={{ color: '#24171A' }}>{choice.label}</span>
              <span className="text-[22px]" style={{ color: '#9B6B18' }}>›</span>
            </button>
          ))}
        </div>
        <div className="mt-3">
          <PrimaryButton label="Continue" onPress={onNext} />
        </div>
      </div>
    </div>
  )
}

function PurposeIcon({ name }: { name: string }) {
  const common = { stroke: '#9B6B18', strokeWidth: 1.7, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const }
  return (
    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full" style={{ background: '#F5E6C9' }}>
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
        {name === 'compass' && <><circle cx="11" cy="11" r="7" {...common} /><path d="M13.8 7.8l-2 5-3.6 1.4 1.8-4.7 3.8-1.7z" {...common} /></>}
        {name === 'leaf' && <><path d="M11 19V9" {...common} /><path d="M11 11c-3-3-6-3.6-8-2.4.8 4 3.8 6.2 8 6.4" {...common} /><path d="M11 11c2.8-3.4 6-4.1 8-3-.8 4.2-3.8 6.5-8 7" {...common} /></>}
        {name === 'heart' && <path d="M11 18s-7-4.3-7-9a3.8 3.8 0 016.8-2.4A3.8 3.8 0 0118 9c0 4.7-7 9-7 9z" {...common} />}
        {name === 'book' && <><path d="M11 6c-2-1.6-4.4-2.3-7-2.3v13c2.6 0 5 .7 7 2.3V6z" {...common} /><path d="M11 6c2-1.6 4.4-2.3 7-2.3v13c-2.6 0-5 .7-7 2.3V6z" {...common} /></>}
        {name === 'sprout' && <><path d="M11 19V9" {...common} /><path d="M11 10c-2.4-2.4-5-3-7.2-2.2.7 3.5 3.4 5.5 7.2 5.8" {...common} /><path d="M11 10c2.4-2.8 5.1-3.5 7.3-2.6-.6 3.7-3.4 5.8-7.3 6.2" {...common} /></>}
      </svg>
    </span>
  )
}

function CompletionReferenceNativeScreen({ onNext }: { onNext: () => void }) {
  return (
    <div className="relative h-full overflow-y-auto scrollbar-hide" style={{ background: '#F7F1E7' }}>
      <NativeStatusBar light />
      <div className="relative h-[222px] overflow-hidden">
        <img src={alignmentAssets.completionLandscape} alt="Ancient stone path and city at golden hour" className="h-full w-full object-cover" />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, rgba(30,21,18,0.05) 0%, rgba(247,241,231,0.02) 48%, #F7F1E7 100%)' }} />
      </div>
      <div className="relative -mt-[44px] flex flex-col items-center px-6 text-center" style={{ paddingBottom: 'calc(env(safe-area-inset-bottom, 0px) + 42px)' }}>
        <div className="relative flex h-[88px] w-[88px] items-center justify-center rounded-full" style={{ background: 'linear-gradient(145deg, #F9E8B9 0%, #B68425 44%, #F5D98A 100%)', boxShadow: '0 5px 24px rgba(182,132,37,0.4)' }}>
          <div className="flex h-[70px] w-[70px] items-center justify-center rounded-full" style={{ background: 'linear-gradient(145deg, #40513B 0%, #687B56 100%)', border: '1px solid rgba(255,252,246,0.48)' }}>
            <svg width="44" height="44" viewBox="0 0 48 48" fill="none">
              <path d="M23 38V12" stroke="#DDB761" strokeWidth="2.2" strokeLinecap="round" />
              <path d="M23 29c-6-7-6-13-2-20 5 6 6 13 2 20z" fill="#DDB761" opacity="0.86" />
              <path d="M24 27c7-3 12-8 14-15-8 1-13 6-14 15zM23 34c-6-2-10-6-12-12 7 0 11 4 12 12z" fill="#E6C878" opacity="0.92" />
            </svg>
          </div>
        </div>
        <h2 className="mt-4 font-serif text-[29px] font-semibold leading-[34px]" style={{ color: '#3A0D18' }}>
          First Scripture<br />practice <em className="font-medium" style={{ color: '#7B4B16' }}>complete</em>
        </h2>
        <p className="mt-3 text-[14px]" style={{ color: '#30272A' }}>Account Level 2 reached · Passage Mastery Level 1 of 5</p>
        <div className="mt-2.5 flex items-center justify-center gap-3">
          {Array.from({ length: 5 }).map((_, index) => (
            <span key={index} className="h-[13px] w-[13px] rounded-full" style={{ background: index === 0 ? '#B68425' : '#D8CDBC' }} />
          ))}
        </div>
        <div className="mt-4 flex w-full flex-col gap-2 rounded-[9px] px-5 py-3 text-left" style={{ background: 'rgba(255,252,246,0.56)', border: '1px solid rgba(221,208,192,0.78)' }}>
          <span className="text-center font-serif text-[28px]" style={{ color: '#9B6B18' }}>+25 verified XP</span>
          <XPBar totalXP={25} awardedXP={25} id="onboarding-completion-xp" compact />
          <span className="text-center text-[11px] font-medium" style={{ color: '#897A76' }}>Level 2 reached · 225 XP to Level 3</span>
        </div>
        <div className="mt-3 h-px w-10" style={{ background: '#B68425' }} />
        <div className="mt-3 flex h-[50px] w-full items-center gap-3 rounded-[9px] px-4" style={{ background: 'rgba(255,252,246,0.46)', border: '1px solid rgba(221,208,192,0.78)' }}>
          <span className="flex h-34 w-34 items-center justify-center rounded-full" style={{ width: 34, height: 34, background: '#B68425' }}>
            <svg width="21" height="18" viewBox="0 0 21 18" fill="none"><path d="M2 3.5c0-1 1-1.8 2-1.5l4.8 1.3c.8.2 1.4 1 1.4 1.8v10.4c0-.8-.6-1.5-1.4-1.8L4 12.4c-1-.3-2 .5-2 1.5V3.5zM19 3.5c0-1-1-1.8-2-1.5l-4.8 1.3c-.8.2-1.4 1-1.4 1.8v10.4c0-.8.6-1.5 1.4-1.8l4.8-1.3c1-.3 2 .5 2 1.5V3.5z" stroke="#FFFCF6" strokeWidth="1.3" strokeLinejoin="round"/></svg>
          </span>
          <span className="text-[13px] font-medium" style={{ color: '#30272A' }}>Text Before Assumption · 1 of 3</span>
        </div>
        <div className="mt-4 w-full">
          <PrimaryButton label="Continue" onPress={onNext} />
        </div>
      </div>
    </div>
  )
}

function AccountLevelUpScreen({ onNext, onBack }: { onNext: () => void; onBack: () => void }) {
  const milestones = [
    ['Changed', 'Level 1 to Level 2'],
    ['Unlocked', 'Level 2 Practice'],
    ['Next', 'Start your Path'],
  ]

  return (
    <div className="relative h-full overflow-y-auto scrollbar-hide" style={{ background: '#F7F1E7' }}>
      <NativeStatusBar light />
      <div className="relative h-[156px] overflow-hidden">
        <img src={alignmentAssets.completionLandscape} alt="Jerusalem hillside at sunrise" className="h-full w-full object-cover" />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, rgba(30,21,18,0.02) 0%, rgba(247,241,231,0.04) 45%, #F7F1E7 100%)' }} />
        <button onClick={onBack} className="absolute left-5 top-[62px] z-20 flex h-10 w-10 items-center justify-center rounded-full" aria-label="Back">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M11 3L5 9l6 6" stroke="#FFFCF6" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" /></svg>
        </button>
      </div>
      <div className="relative -mt-[30px] flex flex-col items-center px-6 text-center" style={{ paddingBottom: 'calc(env(safe-area-inset-bottom, 0px) + 42px)' }}>
        <div className="relative flex h-[68px] w-[68px] items-center justify-center rounded-full" style={{ background: 'linear-gradient(145deg, #F9E8B9 0%, #B68425 48%, #F5D98A 100%)', boxShadow: '0 8px 28px rgba(182,132,37,0.38)' }}>
          <div className="flex h-[52px] w-[52px] items-center justify-center rounded-full" style={{ background: 'linear-gradient(145deg, #40513B 0%, #687B56 100%)', border: '1px solid rgba(255,252,246,0.52)' }}>
            <span className="font-serif text-[27px] leading-none" style={{ color: '#F9E8B9' }}>2</span>
          </div>
        </div>
        <p className="mt-2 text-[10px] font-semibold uppercase tracking-[0.26em]" style={{ color: '#B18423' }}>Account Level Up</p>
        <h2 className="mt-1 font-serif text-[27px] font-semibold leading-[31px]" style={{ color: '#3A0D18' }}>
          Alignment Level 2<br />reached
        </h2>
        <p className="mt-1.5 text-[13px] leading-[18px]" style={{ color: '#30272A' }}>
          Text Observer · your first verified Scripture Practice moved your account progress forward.
        </p>

        <div className="mt-3 flex w-full flex-col gap-1.5 rounded-[10px] px-5 py-2.5 text-left" style={{ background: 'rgba(255,252,246,0.68)', border: '1px solid rgba(221,208,192,0.86)' }}>
          <span className="text-center font-serif text-[26px]" style={{ color: '#9B6B18' }}>+25 verified XP</span>
          <XPBar totalXP={25} awardedXP={25} id="onboarding-level-up-xp" compact />
          <span className="text-center text-[11px] font-medium" style={{ color: '#897A76' }}>Level 2 reached · 225 XP to Level 3</span>
        </div>

        <div className="mt-2.5 grid w-full gap-1.5 text-left">
          {milestones.map(([title, detail]) => (
            <div key={title} className="flex items-center justify-between gap-3 rounded-[10px] px-4 py-2" style={{ background: 'rgba(255,252,246,0.54)', border: '1px solid rgba(221,208,192,0.72)' }}>
              <p className="text-[11px] font-bold uppercase tracking-[0.16em]" style={{ color: '#B18423' }}>{title}</p>
              <p className="text-right text-[13px] leading-[18px]" style={{ color: '#30272A' }}>{detail}</p>
            </div>
          ))}
        </div>
        <p className="mt-2.5 text-[11px] italic leading-[16px]" style={{ color: '#897A76' }}>
          Level reflects verified learning progress, not spiritual worth.
        </p>
        <div className="mt-2.5 w-full">
          <PrimaryButton label="See My Path" onPress={onNext} />
        </div>
      </div>
    </div>
  )
}

// ONB-11 Recommended Path
function RecommendedPathScreen({ onNext, onBack }: { onNext: () => void; onBack: () => void }) {
  return (
    <div className="relative flex h-full flex-col overflow-hidden" style={{ background: '#F7F1E7' }}>
      <NativeStatusBar />
      <button onClick={onBack} className="absolute left-5 top-[62px] z-20 flex h-10 w-10 items-center justify-center rounded-full" aria-label="Back">
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M11 3L5 9l6 6" stroke="#3A0D18" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" /></svg>
      </button>
      <div className="relative h-[462px] shrink-0 overflow-hidden">
        <img src={STONE_PATH} alt="Stone path through ancient landscape" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, rgba(247,241,231,0.94) 0%, rgba(247,241,231,0.78) 35%, rgba(247,241,231,0.26) 64%, #F7F1E7 100%)' }} />
        <div className="absolute inset-x-7 top-[102px] text-center">
          <p className="text-[12px] font-semibold uppercase tracking-[0.26em]" style={{ color: '#B18423' }}>Recommended for you</p>
          <h2 className="mt-3 font-serif text-[29px] leading-[34px]" style={{ color: '#3A0D18' }}>
            Bringing Scripture<br />Into Daily Decisions
          </h2>
          <p className="mt-2 text-[13px]" style={{ color: '#675A5D' }}>7 sessions · About 5 minutes each</p>
        </div>
      </div>
      <div className="-mt-2 flex flex-1 flex-col px-7 pb-8">
        <p className="text-[17px] leading-[24px]" style={{ color: '#30272A' }}>
          Learn to understand what Scripture establishes and choose one faithful next step.
        </p>
        <button onClick={onNext} className="mt-5 flex min-h-[90px] items-center gap-4 rounded-[11px] p-3 text-left" style={{ background: 'rgba(255,252,246,0.82)', border: '1px solid rgba(221,208,192,0.72)', boxShadow: '0 1px 9px rgba(30,21,18,0.05)' }}>
          <span className="relative h-[66px] w-[88px] shrink-0 overflow-hidden rounded-[8px]">
            <img src={STONE_PATH} alt="" className="h-full w-full object-cover" />
            <span className="absolute inset-0 flex items-center justify-center">
              <span className="flex h-9 w-9 items-center justify-center rounded-full" style={{ background: 'rgba(30,21,18,0.72)' }}>
                <svg width="14" height="16" viewBox="0 0 14 16" fill="none"><path d="M13 8L1 15V1l12 7z" fill="#FFFCF6" /></svg>
              </span>
            </span>
          </span>
          <span className="flex-1">
            <span className="block font-serif text-[18px] leading-[22px]" style={{ color: '#24171A' }}>First: Trust Before<br />You Choose</span>
          </span>
          <span className="text-[22px]" style={{ color: '#9B6B18' }}>›</span>
        </button>
        <div className="mt-auto">
          <PrimaryButton label="Start This Path" onPress={onNext} />
        </div>
      </div>
    </div>
  )
}

// ONB-12 Paywall
export function PaywallScreen({ onNext, onBack }: { onNext?: () => void; onBack?: () => void }) {
  const { setTab, goBack } = useApp()
  const [selectedPlan, setSelectedPlan] = useState<'annual' | 'monthly'>('annual')
  const [notice, setNotice] = useState<string | null>(null)
  const productState = typeof window === 'undefined'
    ? 'available'
    : new URLSearchParams(window.location.search).get('storekit') === 'unavailable' ? 'unavailable' : 'available'
  const isUnavailable = productState === 'unavailable'
  const plans = [
    {
      id: 'annual' as const,
      badge: 'MOST POPULAR',
      title: '7 days free',
      price: isUnavailable ? 'StoreKit unavailable' : 'Annual · $39.99',
    },
    {
      id: 'monthly' as const,
      badge: null,
      title: 'Monthly',
      price: isUnavailable ? 'StoreKit unavailable' : '$7.99',
    },
  ]
  const benefits = [
    'Full access to all Paths',
    'Short, focused sessions',
    'Personalized for your real life',
    'New content added regularly',
  ]
  const activate = () => {
    if (isUnavailable) {
      setNotice('StoreKit products are unavailable in this preview state.')
      return
    }
    if (onNext) onNext()
    else setTab('home')
  }
  const back = () => {
    if (onBack) onBack()
    else goBack('onboarding')
  }

  return (
    <div className="relative flex h-full flex-col overflow-hidden" style={{ background: '#F7F1E7' }}>
      <NativeStatusBar />
      <button onClick={back} className="absolute left-5 top-[62px] z-20 flex h-10 w-10 items-center justify-center rounded-full" aria-label="Back">
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M11 3L5 9l6 6" stroke="#3A0D18" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" /></svg>
      </button>

      <div className="relative h-[246px] shrink-0 overflow-hidden">
        <img src={HERO_LANDSCAPE} alt="Ancient hillside path at golden hour" className="h-full w-full object-cover" />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, rgba(247,241,231,0.80) 0%, rgba(247,241,231,0.28) 46%, #F7F1E7 100%)' }} />
        <div className="absolute inset-x-7 top-[86px] text-center">
          <h2 className="font-serif text-[29px] leading-[34px]" style={{ color: '#3A0D18' }}>
            Continue your<br />journey in Scripture
          </h2>
          <p className="mt-2 text-[13px] leading-[18px]" style={{ color: '#4A3D3A' }}>
            Deeper understanding. A clearer next step.<br />A more rooted you.
          </p>
        </div>
      </div>

      <div className="-mt-1 min-h-0 flex-1 overflow-y-auto scrollbar-hide px-7 pb-8">
        <div className="flex flex-col gap-2">
          {plans.map(p => (
            <button key={p.id} onClick={() => setSelectedPlan(p.id)}
              className="rounded-[10px] px-4 py-1.5 flex items-center gap-3 transition-all duration-200"
              style={{
                background: selectedPlan === p.id ? '#FFFCF6' : 'rgba(255,252,246,0.70)',
                border: `1.5px solid ${selectedPlan === p.id ? '#B68425' : 'rgba(221,208,192,0.72)'}`,
              }}>
              <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full"
                style={{ border: `1.5px solid ${selectedPlan === p.id ? '#B68425' : '#8F8075'}` }}>
                {selectedPlan === p.id && <div className="h-2.5 w-2.5 rounded-full" style={{ background: '#B68425' }} />}
              </div>
              <div className="flex-1 text-left">
                <div className="flex items-center justify-between gap-2">
                  <span className="font-serif text-[19px] leading-[23px]" style={{ color: '#24171A' }}>{p.title}</span>
                  {p.badge && <span className="rounded-full px-2.5 py-1 text-[9px] font-bold" style={{ background: '#B68425', color: '#FFFCF6', letterSpacing: '0.04em' }}>{p.badge}</span>}
                </div>
                <span className="text-[13px]" style={{ color: isUnavailable ? '#A33A3A' : '#4A3D3A' }}>{p.price}</span>
              </div>
            </button>
          ))}
        </div>

        {isUnavailable && (
          <div className="mt-3 rounded-[10px] p-3" style={{ background: '#FFF1F1', border: '1px solid #E4B2B2' }}>
            <p className="text-[12px] font-semibold" style={{ color: '#7A1E1E' }}>Preview StoreKit unavailable</p>
            <p className="mt-1 text-[12px] leading-[17px]" style={{ color: '#4A3D3A' }}>Product metadata is not loaded, so activation is disabled until StoreKit connects.</p>
          </div>
        )}

        <div className="mt-2.5 flex flex-col gap-1">
          {benefits.map((b, i) => (
            <div key={i} className="flex items-start gap-2.5">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="shrink-0 mt-0.5"><circle cx="8" cy="8" r="8" fill="#B68425" /><path d="M4.5 8l2.5 2.5 5-5" stroke="#FFFCF6" strokeWidth="1.5" strokeLinecap="round" /></svg>
              <span className="text-[14px] leading-[20px]" style={{ color: '#4A3D3A' }}>{b}</span>
            </div>
          ))}
        </div>

        <p className="mt-2.5 text-center text-[12px] leading-[17px]" style={{ color: '#675A5D' }}>
          {isUnavailable ? 'No charge can begin until products are available.' : 'Then renews automatically. Cancel anytime.'}
        </p>
        {notice && <p className="mt-2 text-center text-[12px]" style={{ color: '#7A1E1E' }}>{notice}</p>}

        <div className="mt-9 flex flex-col gap-3" style={{ paddingBottom: 'calc(env(safe-area-inset-bottom, 0px) + 24px)' }}>
          <PrimaryButton label={isUnavailable ? 'Products Unavailable' : selectedPlan === 'annual' ? 'Start Free Trial' : 'Start Monthly'} onPress={activate} disabled={isUnavailable} />
          <div className="flex justify-center gap-4">
            <button onClick={() => setNotice('Restore purchases is available when StoreKit is connected.')} className="text-[12px] underline" style={{ color: '#5C4B45' }}>Restore Purchases</button>
            <button onClick={() => setNotice('Terms opens the App Store terms document in production.')} className="text-[12px] underline" style={{ color: '#5C4B45' }}>Terms</button>
            <button onClick={() => setNotice('Privacy opens the privacy policy in production.')} className="text-[12px] underline" style={{ color: '#5C4B45' }}>Privacy</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export function Onboarding() {
  const { onboardingStep, nextOnboardingStep, prevOnboardingStep, setTab } = useApp()
  const [questionIndex, setQuestionIndex] = useState(() => {
    if (typeof window === 'undefined') return 0
    const requested = Number(new URLSearchParams(window.location.search).get('questionIndex'))
    return Number.isInteger(requested) && requested >= 0 && requested < ONBOARDING_LEVEL_1_QUESTIONS.length ? requested : 0
  })

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
    5: <AccountLevelUpScreen onNext={nextOnboardingStep} onBack={prevOnboardingStep} />,
    6: <PurposeSelectionScreen onNext={nextOnboardingStep} onBack={prevOnboardingStep} />,
    7: <RecommendedPathScreen onNext={nextOnboardingStep} onBack={prevOnboardingStep} />,
    8: <PaywallScreen onNext={finishOnboarding} onBack={prevOnboardingStep} />,
  }

  return (
    <div className="h-full screen-enter" key={onboardingStep}>
      {steps[onboardingStep] || steps[1]}
    </div>
  )
}
