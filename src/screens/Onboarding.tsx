import React, { useState } from 'react'
import { useApp } from '../context'
import activatedHomeCurrentPath from '../assets/alignment/activated-home-current-path-clean.png'
import activatedHomeForYou from '../assets/alignment/activated-home-for-you-reference.png'
import onboardingMission from '../assets/alignment/onboarding-reference/onboarding-01-mission.png'
import onboardingMethod from '../assets/alignment/onboarding-reference/onboarding-02-method.png'
import onboardingQuestion from '../assets/alignment/onboarding-reference/onboarding-03-question.png'
import onboardingCompletion from '../assets/alignment/onboarding-reference/onboarding-04-completion.png'

const UNSPLASH = 'https://images.unsplash.com'

const HERO_LANDSCAPE = `${UNSPLASH}/photo-1544441892-794166f1e3be?w=800&h=1000&fit=crop&auto=format`
const INTERIOR_BIBLE = `${UNSPLASH}/photo-1509021436665-8f07dbf5bf1d?w=800&h=600&fit=crop&auto=format`
const STONE_PATH = `${UNSPLASH}/photo-1473448912268-2022ce9509d8?w=800&h=700&fit=crop&auto=format`
const VALLEY_GOLDEN = `${UNSPLASH}/photo-1464822759023-fed622ff2c3b?w=800&h=700&fit=crop&auto=format`

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

function SecondaryButton({ label, onPress }: { label: string; onPress: () => void }) {
  return (
    <button onClick={onPress}
      className="w-full rounded-full font-semibold text-[17px] border transition-all duration-200"
      style={{ height: 56, borderColor: '#741630', color: '#741630', background: 'transparent' }}>
      {label}
    </button>
  )
}

function ReferenceOnboardingScreen({
  image,
  alt,
  controls,
}: {
  image: string
  alt: string
  controls: Array<{
    label: string
    onPress: () => void
    frame: { left: string; top: string; width: string; height: string }
    disabled?: boolean
  }>
}) {
  return (
    <div className="relative h-full overflow-hidden" style={{ background: '#F7F1E7' }}>
      <img src={image} alt={alt} className="absolute inset-0 h-full w-full object-cover" />
      {controls.map(control => (
        <button
          key={control.label}
          onClick={control.onPress}
          disabled={control.disabled}
          className="absolute rounded-full"
          style={{
            left: control.frame.left,
            top: control.frame.top,
            width: control.frame.width,
            height: control.frame.height,
            background: 'transparent',
            border: 0,
          }}
          aria-label={control.label}
        />
      ))}
    </div>
  )
}

function ReferenceQuestionScreen({ onNext }: { onNext: () => void }) {
  const [selected, setSelected] = useState<number | null>(null)
  return (
    <ReferenceOnboardingScreen
      image={onboardingQuestion}
      alt="Proverbs 14 question onboarding screen"
      controls={[
        { label: 'The strength of the feeling', onPress: () => setSelected(0), frame: { left: '8%', top: '58%', width: '84%', height: '7%' } },
        { label: "The person's intention", onPress: () => setSelected(1), frame: { left: '8%', top: '67%', width: '84%', height: '7%' } },
        { label: 'What Scripture establishes', onPress: () => setSelected(2), frame: { left: '8%', top: '76%', width: '84%', height: '7%' } },
        { label: 'Check Answer', onPress: onNext, disabled: selected !== 2, frame: { left: '5%', top: '90%', width: '90%', height: '7%' } },
      ]}
    />
  )
}

// ONB-01 Mission
function MissionScreen({ onNext }: { onNext: () => void }) {
  return (
    <div className="relative flex flex-col h-full overflow-hidden">
      <img src={HERO_LANDSCAPE} alt="Ancient city at golden hour" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(30,21,18,0.1) 0%, rgba(30,21,18,0.4) 40%, rgba(30,21,18,0.85) 75%, rgba(30,21,18,0.95) 100%)' }} />
      <div className="relative flex flex-col justify-end h-full px-6 pb-12 gap-6">
        <div className="gap-4 flex flex-col">
          <p className="text-xs font-semibold tracking-widest uppercase" style={{ color: '#E6C878', letterSpacing: '0.12em' }}>Alignment</p>
          <h1 className="font-serif text-[38px] leading-[44px] font-bold" style={{ color: '#FFFCF6' }}>
            Bring the Word of God into <em style={{ color: '#E6C878', fontStyle: 'italic' }}>real life.</em>
          </h1>
          <p className="text-[17px] leading-[24px]" style={{ color: 'rgba(255,252,246,0.78)' }}>
            Understand Scripture. Act faithfully. Communicate it clearly.
          </p>
        </div>
        <PrimaryButton label="Begin" onPress={onNext} />
      </div>
    </div>
  )
}

// ONB-02 Capabilities
function CapabilitiesScreen({ onNext, onBack }: { onNext: () => void; onBack: () => void }) {
  const caps = [
    { emoji: '📖', title: 'Understand Scripture', desc: 'See what a passage teaches, what it establishes, and where its limits lie.' },
    { emoji: '🌿', title: 'Act faithfully', desc: 'Choose one honest next step grounded in what Scripture clearly says.' },
    { emoji: '💬', title: 'Communicate clearly', desc: 'Practice explaining the teaching to others without distortion.' },
  ]
  return (
    <div className="flex flex-col h-full" style={{ background: '#F7F1E7' }}>
      <div className="flex items-center justify-between px-5 pt-14 pb-4">
        <BackButton onBack={onBack} />
        <StepDots total={10} current={1} />
        <div className="w-10" />
      </div>
      <div className="flex-1 px-6 pt-4 flex flex-col gap-6 overflow-y-auto scrollbar-hide">
        <div>
          <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: '#B68425', letterSpacing: '0.1em' }}>What Alignment does</p>
          <h2 className="font-serif text-[30px] leading-[36px] font-bold" style={{ color: '#24171A' }}>
            Three capabilities. One practice.
          </h2>
        </div>
        <div className="flex flex-col gap-4">
          {caps.map((c, i) => (
            <div key={i} className="rounded-[20px] p-5 flex gap-4" style={{ background: '#FFFCF6', boxShadow: '0 2px 12px rgba(30,21,18,0.06)' }}>
              <span className="text-[32px]">{c.emoji}</span>
              <div>
                <p className="font-serif font-semibold text-[17px] mb-1" style={{ color: '#24171A' }}>{c.title}</p>
                <p className="text-[14px] leading-[20px]" style={{ color: '#675A5D' }}>{c.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="px-6 pb-10 pt-4">
        <PrimaryButton label="Continue" onPress={onNext} />
      </div>
    </div>
  )
}

function CompassIcon() {
  return <svg width="22" height="22" viewBox="0 0 22 22" fill="none"><circle cx="11" cy="11" r="9" stroke="#741630" strokeWidth="1.5" /><path d="M11 6v1M11 15v1M6 11h1M15 11h1" stroke="#741630" strokeWidth="1.5" strokeLinecap="round" /><circle cx="11" cy="11" r="2" fill="#741630" /></svg>
}
function LeafIcon() {
  return <svg width="22" height="22" viewBox="0 0 22 22" fill="none"><path d="M4 18c1-4 3-7 8-9 3-1.5 6-1 7-1-1 2-3 7-7 9-2.5 1.2-5.5 1.5-8 1z" stroke="#741630" strokeWidth="1.5" strokeLinejoin="round" /><path d="M4 18l5-5" stroke="#741630" strokeWidth="1.5" strokeLinecap="round" /></svg>
}
function HeartIcon() {
  return <svg width="22" height="22" viewBox="0 0 22 22" fill="none"><path d="M11 18s-8-5-8-10a5 5 0 0110 0 5 5 0 0110 0c0 5-8 10-8 10h-4z" stroke="#741630" strokeWidth="1.5" strokeLinejoin="round" /></svg>
}
function BookOpenIcon() {
  return <svg width="22" height="22" viewBox="0 0 22 22" fill="none"><path d="M2 5a2 2 0 012-2h5c1.5 0 2 1 2 2v12c0-1-1-2-2-2H4a2 2 0 01-2-2V5z" stroke="#741630" strokeWidth="1.5" strokeLinejoin="round" /><path d="M20 5a2 2 0 00-2-2h-5c-1.5 0-2 1-2 2v12c0-1 1-2 2-2h4a2 2 0 002-2V5z" stroke="#741630" strokeWidth="1.5" strokeLinejoin="round" /></svg>
}
function SeedlingIcon() {
  return <svg width="22" height="22" viewBox="0 0 22 22" fill="none"><path d="M11 19V10" stroke="#741630" strokeWidth="1.5" strokeLinecap="round" /><path d="M11 10C9 8 6 7 4 8c1 3 4 5 7 5" stroke="#741630" strokeWidth="1.5" strokeLinejoin="round" /><path d="M11 10c2-2 5-3 7-2-1 3-4 5-7 5" stroke="#741630" strokeWidth="1.5" strokeLinejoin="round" /></svg>
}

// ONB-03 Purpose Selection
function PurposeScreen({ onNext, onBack }: { onNext: () => void; onBack: () => void }) {
  const [selected, setSelected] = useState<number | null>(null)
  const options = [
    { icon: CompassIcon, label: 'Make a faithful decision' },
    { icon: LeafIcon, label: 'Change a pattern in my life' },
    { icon: HeartIcon, label: 'Work through something weighing on me' },
    { icon: BookOpenIcon, label: 'Understand something I\'m facing' },
    { icon: SeedlingIcon, label: 'Grow in understanding Scripture' },
  ]
  return (
    <div className="flex flex-col h-full" style={{ background: '#F7F1E7' }}>
      <div className="flex items-center justify-between px-5 pt-14 pb-4">
        <BackButton onBack={onBack} />
        <StepDots total={10} current={2} />
        <div className="w-10" />
      </div>
      <div className="flex-1 px-6 pt-2 flex flex-col gap-5 overflow-y-auto scrollbar-hide">
        <h2 className="font-serif text-[28px] leading-[34px] font-bold" style={{ color: '#24171A' }}>
          Where would Scripture help most right now?
        </h2>
        <div className="flex flex-col gap-2.5">
          {options.map((o, i) => {
            const Icon = o.icon
            return (
              <button key={i} onClick={() => setSelected(i)}
                className="flex items-center gap-4 rounded-[16px] px-5 py-4 text-left transition-all duration-200"
                style={{
                  background: selected === i ? '#FDEEF1' : '#FFFCF6',
                  border: `1.5px solid ${selected === i ? '#741630' : '#DDD0C0'}`,
                }}>
                <div className="shrink-0"><Icon /></div>
                <span className="text-[16px] font-medium flex-1" style={{ color: '#24171A' }}>{o.label}</span>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M6 4l4 4-4 4" stroke={selected === i ? '#741630' : '#DDD0C0'} strokeWidth="1.5" strokeLinecap="round" /></svg>
              </button>
            )
          })}
        </div>
      </div>
      <div className="px-6 pb-10 pt-4">
        <PrimaryButton label="Continue" onPress={onNext} disabled={selected === null} />
      </div>
    </div>
  )
}

// ONB-04 Method
function MethodScreen({ onNext, onBack }: { onNext: () => void; onBack: () => void }) {
  return (
    <div className="flex flex-col h-full overflow-hidden">
      <div className="relative h-52 overflow-hidden">
        <img src={INTERIOR_BIBLE} alt="Open Bible with morning light" className="w-full h-full object-cover" />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(30,21,18,0.0) 0%, rgba(247,241,231,1) 100%)' }} />
      </div>
      <div className="flex items-center justify-between px-5 -mt-12 relative z-10 pb-2">
        <BackButton onBack={onBack} />
        <StepDots total={10} current={3} />
        <div className="w-10" />
      </div>
      <div className="flex-1 px-6 pt-2 flex flex-col gap-5" style={{ background: '#F7F1E7' }}>
        <div>
          <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: '#B68425', letterSpacing: '0.1em' }}>How it works</p>
          <h2 className="font-serif text-[28px] leading-[34px] font-bold italic" style={{ color: '#24171A' }}>
            Scripture comes before advice.
          </h2>
        </div>
        <p className="text-[16px] leading-[24px]" style={{ color: '#675A5D' }}>
          Alignment first understands what you're facing. Then it brings together relevant Scripture, explains what the passages teach, shows what they do—and do not—establish, and helps you choose one faithful next step.
        </p>
        <div className="flex flex-col gap-3 mt-1">
          {['Understand the moment', 'Read what Scripture says', 'Choose one faithful step'].map((s, i) => (
            <div key={i} className="flex items-center gap-3">
              <div className="w-6 h-6 rounded-full flex items-center justify-center text-[12px] font-bold" style={{ background: '#741630', color: '#FFFCF6' }}>{i + 1}</div>
              <span className="text-[15px] font-medium" style={{ color: '#24171A' }}>{s}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="px-6 pb-10 pt-4" style={{ background: '#F7F1E7' }}>
        <PrimaryButton label="See It in Action" onPress={onNext} />
      </div>
    </div>
  )
}

// ONB-05 Demo Moment
function DemoMomentScreen({ onNext, onBack }: { onNext: () => void; onBack: () => void }) {
  return (
    <div className="flex flex-col h-full" style={{ background: '#F7F1E7' }}>
      <div className="flex items-center justify-between px-5 pt-14 pb-4">
        <BackButton onBack={onBack} />
        <StepDots total={10} current={4} />
        <div className="w-10" />
      </div>
      <div className="flex-1 px-6 pt-4 flex flex-col gap-6">
        <div>
          <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: '#B68425' }}>The moment</p>
          <h2 className="font-serif text-[26px] leading-[32px] font-bold" style={{ color: '#24171A' }}>
            A friend says:
          </h2>
        </div>
        <div className="rounded-[20px] p-6" style={{ background: '#FFFCF6', boxShadow: '0 2px 16px rgba(30,21,18,0.08)' }}>
          <p className="font-serif text-[20px] leading-[30px] italic" style={{ color: '#24171A' }}>
            "If something feels right, how could it be wrong?"
          </p>
        </div>
        <p className="text-[15px] leading-[22px]" style={{ color: '#675A5D' }}>
          This is a claim about how truth works. Alignment will bring Scripture to this question—not to win an argument, but to understand what the text actually teaches.
        </p>
      </div>
      <div className="px-6 pb-10 pt-4">
        <PrimaryButton label="Continue" onPress={onNext} />
      </div>
    </div>
  )
}

// ONB-06 Demo Scripture
function DemoScriptureScreen({ onNext, onBack }: { onNext: () => void; onBack: () => void }) {
  return (
    <div className="flex flex-col h-full" style={{ background: '#F7F1E7' }}>
      <div className="flex items-center justify-between px-5 pt-14 pb-4">
        <BackButton onBack={onBack} />
        <StepDots total={10} current={5} />
        <div className="w-10" />
      </div>
      <div className="flex-1 px-6 pt-2 flex flex-col gap-5">
        <div>
          <p className="text-xs font-semibold tracking-widest uppercase mb-2" style={{ color: '#B68425' }}>Governing Scripture</p>
          <p className="font-serif text-[13px] font-semibold" style={{ color: '#741630' }}>PROVERBS 14:12 · KJV</p>
        </div>
        <div className="rounded-[20px] p-6 flex flex-col gap-4 relative overflow-hidden" style={{ background: '#F4EBDD' }}>
          <div className="text-center mb-2">
            <span className="font-serif text-[36px]" style={{ color: '#741630', lineHeight: 1 }}>"</span>
          </div>
          <p className="font-serif text-[20px] leading-[31px] italic text-center" style={{ color: '#24171A' }}>
            There is a way that seemeth right unto a man, but the end thereof are the ways of death.
          </p>
          <p className="text-center text-[13px] font-semibold mt-2" style={{ color: '#675A5D' }}>Proverbs 14:12 · KJV</p>
          <div className="absolute bottom-0 left-0 right-0 h-1 rounded-b-[20px]" style={{ background: '#741630' }} />
        </div>
        <div className="rounded-[14px] p-4" style={{ background: '#FFFCF6' }}>
          <p className="text-[14px] leading-[21px]" style={{ color: '#675A5D' }}>
            This passage establishes that the feeling of rightness is not a reliable guide to truth. It does not say feelings are always wrong—only that they do not determine whether a path is good.
          </p>
        </div>
      </div>
      <div className="px-6 pb-10 pt-4">
        <PrimaryButton label="Continue" onPress={onNext} />
      </div>
    </div>
  )
}

// ONB-07 Demo Question
function DemoQuestionScreen({ onNext, onBack }: { onNext: () => void; onBack: () => void }) {
  const [selected, setSelected] = useState<number | null>(null)
  const answers = [
    'The strength of the feeling',
    "The person's intention",
    'What Scripture establishes',
  ]
  return (
    <div className="flex flex-col h-full" style={{ background: '#F7F1E7' }}>
      <div className="flex items-center justify-between px-5 pt-14 pb-3">
        <BackButton onBack={onBack} />
        <div className="text-center">
          <p className="text-[12px] font-semibold" style={{ color: '#675A5D' }}>Proverbs 14:12</p>
          <p className="text-[11px]" style={{ color: '#897A76' }}>Question 1 of 3</p>
        </div>
        <div className="w-10" />
      </div>
      <div className="px-5 py-1">
        <div className="h-1.5 rounded-full overflow-hidden" style={{ background: '#DDD0C0' }}>
          <div className="h-full rounded-full" style={{ width: '33%', background: '#741630' }} />
        </div>
      </div>
      <div className="flex-1 px-6 pt-5 flex flex-col gap-5 overflow-y-auto scrollbar-hide">
        <h2 className="font-serif text-[24px] leading-[30px] font-bold" style={{ color: '#24171A' }}>
          What should determine whether the belief is true?
        </h2>
        <div className="flex flex-col gap-2.5">
          {answers.map((a, i) => (
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
              <span className="text-[16px] leading-[22px]" style={{ color: '#24171A' }}>{a}</span>
            </button>
          ))}
        </div>
      </div>
      <div className="px-6 pb-10 pt-4">
        <button onClick={() => selected !== null && onNext()}
          disabled={selected === null}
          className="w-full rounded-full font-semibold text-[17px] transition-all duration-200"
          style={{ height: 56, background: selected === null ? '#DDD0C0' : '#741630', color: selected === null ? '#897A76' : '#FFFCF6' }}>
          Check Answer
        </button>
      </div>
    </div>
  )
}

// ONB-08 Demo Feedback
function DemoFeedbackScreen({ onNext, onBack }: { onNext: () => void; onBack: () => void }) {
  return (
    <div className="flex flex-col h-full overflow-hidden">
      <div className="relative h-44 overflow-hidden">
        <img src={VALLEY_GOLDEN} alt="Valley at golden hour" className="w-full h-full object-cover" />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(30,21,18,0) 0%, rgba(247,241,231,1) 95%)' }} />
      </div>
      <div className="flex-1 flex flex-col px-6 gap-5 -mt-4" style={{ background: '#F7F1E7' }}>
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ background: '#607255' }}>
            <svg width="20" height="16" viewBox="0 0 20 16" fill="none"><path d="M1 8l6 6 12-13" stroke="#FFFCF6" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </div>
          <div>
            <p className="font-serif text-[22px] font-bold" style={{ color: '#24171A' }}>Correct</p>
            <div className="h-0.5 w-12 rounded-full mt-0.5" style={{ background: '#B68425' }} />
          </div>
        </div>
        <div>
          <p className="text-[13px] font-semibold uppercase tracking-wider mb-2" style={{ color: '#B68425', letterSpacing: '0.1em' }}>What the passage teaches</p>
          <p className="text-[16px] leading-[24px]" style={{ color: '#24171A' }}>
            The passage establishes that the feeling of rightness does not determine whether a path leads to life or death. Truth is not determined by how something feels.
          </p>
        </div>
        <div className="rounded-[14px] p-4 flex gap-3" style={{ background: '#FFF3CD', border: '1px solid #E6C878' }}>
          <span className="text-[18px] shrink-0 mt-0.5">⚠️</span>
          <div>
            <p className="text-[13px] font-semibold mb-1" style={{ color: '#795719' }}>Important boundary</p>
            <p className="text-[13px] leading-[20px]" style={{ color: '#795719' }}>
              This passage does not say all feelings are deceptive. It says feelings alone do not establish truth.
            </p>
          </div>
        </div>
      </div>
      <div className="px-6 pb-10 pt-3" style={{ background: '#F7F1E7' }}>
        <PrimaryButton label="Next Question" onPress={onNext} />
      </div>
    </div>
  )
}

// ONB-09 Demo Completion
function DemoCompletionScreen({ onNext, onBack }: { onNext: () => void; onBack: () => void }) {
  return (
    <div className="flex flex-col h-full overflow-hidden">
      <div className="relative h-52 overflow-hidden">
        <img src={STONE_PATH} alt="Ancient stone path at golden hour" className="w-full h-full object-cover" />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(30,21,18,0.0), rgba(247,241,231,1))' }} />
      </div>
      <div className="flex-1 flex flex-col items-center px-6 pt-2 gap-5" style={{ background: '#F7F1E7' }}>
        <div className="medal-rise flex flex-col items-center gap-3">
          <div className="w-20 h-20 rounded-full flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #B68425 0%, #E6C878 50%, #B68425 100%)', boxShadow: '0 4px 24px rgba(182,132,37,0.4)' }}>
            <div className="w-16 h-16 rounded-full flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #40513B 0%, #607255 100%)' }}>
              <span className="text-[28px]">🌿</span>
            </div>
          </div>
        </div>
        <div className="text-center">
          <h2 className="font-serif text-[28px] font-bold leading-[34px]" style={{ color: '#24171A' }}>
            First Scripture practice <em style={{ color: '#741630', fontStyle: 'italic' }}>complete</em>
          </h2>
        </div>
        <div className="w-full rounded-[20px] p-5 flex flex-col gap-4" style={{ background: '#FFFCF6' }}>
          <div className="flex items-center justify-between">
            <span className="text-[14px]" style={{ color: '#675A5D' }}>Passage Mastery · Level 1 of 5</span>
          </div>
          <div className="h-2 rounded-full overflow-hidden" style={{ background: '#DDD0C0' }}>
            <div className="h-full rounded-full bar-fill" style={{ width: '20%', background: '#741630' }} />
          </div>
          <div className="h-px" style={{ background: '#DDD0C0' }} />
          <div className="xp-pop text-center">
            <p className="font-serif text-[42px] font-bold" style={{ color: '#B68425' }}>+25 XP</p>
          </div>
          <div className="h-px" style={{ background: '#DDD0C0' }} />
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ background: '#F4EBDD' }}>
              <span>📖</span>
            </div>
            <div className="flex-1">
              <p className="text-[13px] font-medium" style={{ color: '#24171A' }}>Text Before Assumption · 1 of 3</p>
              <div className="h-1.5 rounded-full mt-1 overflow-hidden" style={{ background: '#DDD0C0' }}>
                <div className="h-full rounded-full" style={{ width: '33%', background: '#B68425' }} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="px-6 pb-10 pt-3" style={{ background: '#F7F1E7' }}>
        <PrimaryButton label="Continue" onPress={onNext} />
      </div>
    </div>
  )
}

// ONB-10 Starting Mode
function StartingModeScreen({ onNext, onBack }: { onNext: () => void; onBack: () => void }) {
  const [selected, setSelected] = useState<number | null>(null)
  return (
    <div className="flex flex-col h-full" style={{ background: '#F7F1E7' }}>
      <div className="flex items-center justify-between px-5 pt-14 pb-4">
        <BackButton onBack={onBack} />
        <StepDots total={10} current={7} />
        <div className="w-10" />
      </div>
      <div className="flex-1 px-6 pt-2 flex flex-col gap-5">
        <h2 className="font-serif text-[26px] leading-[32px] font-bold" style={{ color: '#24171A' }}>
          Start with a general Path or personalize it to your life.
        </h2>
        <div className="flex flex-col gap-3">
          {[
            { title: 'Start with a general Path', desc: 'Begin with a focused, structured journey through a Scripture topic.' },
            { title: 'Personalize with something I\'m facing', desc: 'Share what\'s on your mind and let Alignment recommend the right Path.' },
          ].map((o, i) => (
            <button key={i} onClick={() => setSelected(i)}
              className="flex flex-col gap-2 rounded-[18px] p-5 text-left transition-all duration-200"
              style={{
                background: selected === i ? '#FDEEF1' : '#FFFCF6',
                border: `1.5px solid ${selected === i ? '#741630' : '#DDD0C0'}`,
              }}>
              <p className="font-semibold text-[16px]" style={{ color: '#24171A' }}>{o.title}</p>
              <p className="text-[13px] leading-[19px]" style={{ color: '#675A5D' }}>{o.desc}</p>
            </button>
          ))}
        </div>
        <button className="text-[13px] font-medium text-center" style={{ color: '#741630' }}>
          How Alignment uses and protects personal information
        </button>
      </div>
      <div className="px-6 pb-10 pt-4">
        <PrimaryButton label="Continue" onPress={onNext} disabled={selected === null} />
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

// ONB-13 Activated Home
function ActivatedHomeScreen({ onFinish }: { onFinish: () => void }) {
  return (
    <div className="flex flex-col h-full overflow-hidden" style={{ background: '#F7F1E7' }}>
      <div className="px-6 pt-14 pb-4 flex items-start justify-between shrink-0">
        <div>
          <h1 className="font-serif text-[26px] leading-[31px] font-bold" style={{ color: '#24171A' }}>
            Good morning, Jalil
          </h1>
          <p className="text-[13px] mt-1" style={{ color: '#675A5D' }}>Level 1 · 25 XP</p>
        </div>
        <button className="w-9 h-9 rounded-full flex items-center justify-center" style={{ border: '1.5px solid #D4B070', background: '#FFF8ED' }} aria-label="Profile">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <circle cx="10" cy="7" r="3.2" stroke="#9B6B18" strokeWidth="1.4" />
            <path d="M4.8 16c.9-3 2.6-4.6 5.2-4.6S14.3 13 15.2 16" stroke="#9B6B18" strokeWidth="1.4" strokeLinecap="round" />
          </svg>
        </button>
      </div>

      <div className="flex-1 overflow-y-auto scrollbar-hide px-6 pb-4 flex flex-col gap-5">
        <div className="relative rounded-[14px] overflow-hidden shrink-0" style={{ height: 306, boxShadow: '0 2px 18px rgba(30,21,18,0.12)' }}>
          <img src={activatedHomeCurrentPath} alt="Stone path toward ancient hillside village" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(30,21,18,0.05) 0%, rgba(30,21,18,0.20) 45%, rgba(30,21,18,0.78) 100%)' }} />
          <div className="absolute left-5 right-5 bottom-5">
            <h2 className="font-serif text-[30px] leading-[35px] font-bold mb-2" style={{ color: '#FFFCF6' }}>
              Bringing Scripture<br />Into Daily Decisions
            </h2>
            <p className="text-[15px] mb-5" style={{ color: 'rgba(255,252,246,0.9)' }}>
              Session 1 of 7 · Trust Before You Choose
            </p>
            <button onClick={onFinish}
              className="w-full rounded-[9px] font-semibold text-[16px] flex items-center justify-center"
              style={{ height: 50, background: '#8E1F3D', color: '#FFFCF6' }}>
              Begin Session 1
            </button>
          </div>
        </div>

        <div>
          <h2 className="font-serif text-[21px] leading-[26px] font-bold mb-3" style={{ color: '#24171A' }}>
            What are you facing today?
          </h2>
          <button className="w-full rounded-[12px] px-4 flex items-center gap-3 text-left" style={{ height: 54, background: '#FFFCF6', border: '1px solid rgba(221,208,192,0.7)' }}>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <circle cx="8.5" cy="8.5" r="5" stroke="#8B6A3A" strokeWidth="1.6" />
              <path d="M12.3 12.3L16 16" stroke="#8B6A3A" strokeWidth="1.6" strokeLinecap="round" />
            </svg>
            <span className="flex-1 text-[14px]" style={{ color: '#897A76' }}>Share what’s on your heart...</span>
            <span style={{ color: '#9B6B18' }}>›</span>
          </button>
        </div>

        <div>
          <h2 className="font-serif text-[22px] leading-[27px] font-bold mb-3" style={{ color: '#24171A' }}>For You</h2>
          <button onClick={onFinish} className="relative w-full rounded-[12px] overflow-hidden text-left" style={{ height: 122, background: '#FFFCF6', boxShadow: '0 1px 10px rgba(30,21,18,0.08)' }}>
            <img src={activatedHomeForYou} alt="Olive branch devotional recommendation" className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(255,252,246,0.08) 0%, rgba(255,252,246,0.82) 54%, rgba(255,252,246,0.96) 100%)' }} />
            <div className="absolute right-9 left-[42%] top-0 bottom-0 flex items-center">
              <p className="font-serif text-[18px] leading-[23px] font-bold text-right" style={{ color: '#24171A' }}>
                Trust Without<br />Demanding an Outcome
              </p>
            </div>
            <span className="absolute right-4 top-1/2 -translate-y-1/2" style={{ color: '#9B6B18' }}>›</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-4 shrink-0 pt-2 pb-7" style={{ background: '#FFFCF6', borderTop: '1px solid #E7DCCE' }}>
        {['Home', 'Paths', 'Explore', 'Profile'].map((label, index) => (
          <button key={label} className="flex flex-col items-center gap-1">
            <span className="text-[20px]" style={{ color: index === 0 ? '#8E1F3D' : '#675A5D' }}>
              {index === 0 ? '⌂' : index === 1 ? '⌁' : index === 2 ? '□' : '♙'}
            </span>
            <span className="text-[10px] font-medium" style={{ color: index === 0 ? '#8E1F3D' : '#675A5D' }}>
              {label}
            </span>
          </button>
        ))}
      </div>
    </div>
  )
}

export function Onboarding() {
  const { onboardingStep, nextOnboardingStep, prevOnboardingStep, navigate, setTab } = useApp()

  const finishOnboarding = () => {
    setTab('home')
  }

  const steps: Record<number, React.ReactElement> = {
    1: <ReferenceOnboardingScreen
      image={onboardingMission}
      alt="Bring the Word of God into real life onboarding screen"
      controls={[{ label: 'Begin', onPress: nextOnboardingStep, frame: { left: '5%', top: '86%', width: '90%', height: '8%' } }]}
    />,
    2: <ReferenceOnboardingScreen
      image={onboardingMethod}
      alt="Scripture comes before advice onboarding screen"
      controls={[{ label: 'Try it', onPress: nextOnboardingStep, frame: { left: '5%', top: '86%', width: '90%', height: '8%' } }]}
    />,
    3: <ReferenceQuestionScreen onNext={nextOnboardingStep} />,
    4: <ReferenceOnboardingScreen
      image={onboardingCompletion}
      alt="First Scripture practice complete onboarding screen"
      controls={[{ label: 'Continue after first Scripture practice complete', onPress: nextOnboardingStep, frame: { left: '5%', top: '90%', width: '90%', height: '7%' } }]}
    />,
    5: <StartingModeScreen onNext={nextOnboardingStep} onBack={prevOnboardingStep} />,
    6: <RecommendedPathScreen onNext={nextOnboardingStep} onBack={prevOnboardingStep} />,
    7: <PaywallScreen onNext={nextOnboardingStep} onBack={prevOnboardingStep} />,
    8: <ActivatedHomeScreen onFinish={finishOnboarding} />,
  }

  return (
    <div className="h-full screen-enter" key={onboardingStep}>
      {steps[onboardingStep] || steps[1]}
    </div>
  )
}
