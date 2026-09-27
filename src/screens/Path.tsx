import { useState } from 'react'
import { useApp } from '../context'
import { alignmentAssets } from '../assets/alignment/assets'
import { AchievementMedallion, AppIcon, IconDisc } from '../components/AppIcon'
import { XPBar } from '../components/XPBar'

const PATH_IMG = alignmentAssets.currentPath
const TEACHING_IMG = alignmentAssets.methodBibleRoom
const CITY_IMG = alignmentAssets.completionLandscape

function PathBack({ fallback = 'home' }: { fallback?: Parameters<ReturnType<typeof useApp>['goBack']>[0] }) {
  const { goBack } = useApp()
  return (
    <button onClick={() => goBack(fallback)} className="flex h-10 w-10 items-center justify-center rounded-full" style={{ background: 'rgba(255,252,246,0.72)' }} aria-label="Back">
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M12 4L6 10l6 6" stroke="#3A0D18" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </button>
  )
}

function Primary({ children, onClick }: { children: React.ReactNode; onClick: () => void }) {
  return (
    <button onClick={onClick} className="flex h-14 w-full items-center justify-center gap-2 rounded-full text-[16px] font-semibold" style={{ background: '#741630', color: '#FFFCF6' }}>
      {children}<span className="text-[22px] leading-none">›</span>
    </button>
  )
}

function Secondary({ children, onClick }: { children: React.ReactNode; onClick: () => void }) {
  return (
    <button onClick={onClick} className="flex h-12 w-full items-center justify-center rounded-full text-[15px] font-medium" style={{ border: '1.3px solid #B68425', color: '#7B4B16', background: 'rgba(255,252,246,0.55)' }}>
      {children}
    </button>
  )
}

function SessionDots({ current = 2, total = 7 }: { current?: number; total?: number }) {
  return (
    <div className="flex items-center justify-center gap-2">
      {Array.from({ length: total }).map((_, i) => (
        <span key={i} className="h-2 w-2 rounded-full" style={{ background: i < current ? '#741630' : '#D8CABA' }} />
      ))}
    </div>
  )
}

function StageRail({ active, complete = [] }: { active: 'Learn' | 'Practice' | 'Pray'; complete?: string[] }) {
  const stages = ['Learn', 'Practice', 'Pray']
  return (
    <div className="flex items-center justify-center gap-2">
      {stages.map((stage, index) => {
        const isComplete = complete.includes(stage)
        const isActive = active === stage
        return (
          <div key={stage} className="flex items-center gap-2">
            <span className="flex h-7 w-7 items-center justify-center rounded-full text-[11px] font-semibold" style={{ background: isComplete ? '#607255' : isActive ? '#741630' : '#E9DDCD', color: isComplete || isActive ? '#FFFCF6' : '#897A76' }}>
              {isComplete ? '✓' : index + 1}
            </span>
            <span className="text-[11px] font-semibold uppercase" style={{ color: isActive ? '#741630' : isComplete ? '#607255' : '#897A76', letterSpacing: '0.08em' }}>{stage}</span>
          </div>
        )
      })}
    </div>
  )
}

function PathFrame({ children, image = PATH_IMG, title = 'Trusting God Through Uncertainty', subtitle = 'Session 2 of 7', imageHeight = 204 }: {
  children: React.ReactNode
  image?: string
  title?: string
  subtitle?: string
  imageHeight?: number
}) {
  return (
    <div className="flex h-full flex-col overflow-hidden" style={{ background: '#F7F1E7' }}>
      <div className="relative shrink-0 overflow-hidden" style={{ height: imageHeight }}>
        <img src={image} alt="" className="h-full w-full object-cover" />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, rgba(247,241,231,0.05) 0%, rgba(247,241,231,0.20) 48%, #F7F1E7 100%)' }} />
        <div className="absolute left-5 right-5 top-14 flex items-start justify-between">
          <PathBack />
          <button className="flex h-10 w-10 items-center justify-center rounded-full" style={{ background: 'rgba(255,252,246,0.72)' }} aria-label="Save Path">
            <AppIcon name="book" size={19} color="#3A0D18" />
          </button>
        </div>
        <div className="absolute inset-x-5 bottom-8 text-center">
          <p className="text-[12px] font-semibold" style={{ color: '#675A5D' }}>{title}</p>
          <p className="mt-1 text-[13px]" style={{ color: '#675A5D' }}>{subtitle}</p>
          <div className="mt-3"><SessionDots /></div>
        </div>
      </div>
      <div className="min-h-0 flex-1 overflow-y-auto scrollbar-hide px-6 pb-12 pt-6" style={{ paddingBottom: 'calc(env(safe-area-inset-bottom, 0px) + 48px)' }}>
        {children}
      </div>
    </div>
  )
}

export function PathCover() {
  const { navigate } = useApp()
  return (
    <PathFrame image={TEACHING_IMG}>
      <div className="text-center">
        <p className="text-[11px] font-semibold uppercase" style={{ color: '#B68425', letterSpacing: '0.2em' }}>Session 2</p>
        <h1 className="mt-3 font-serif text-[33px] font-semibold leading-[39px]" style={{ color: '#3A0D18' }}>Trust without<br />demanding an<br />outcome</h1>
        <div className="mx-auto mt-4 h-px w-16" style={{ background: '#B68425' }} />
        <p className="mx-auto mt-5 max-w-[270px] text-[15px] leading-[22px]" style={{ color: '#30272A' }}>Trusting God does not mean pretending that the future is certain.</p>
        <p className="mt-5 text-[11px] font-semibold uppercase" style={{ color: '#675A5D', letterSpacing: '0.18em' }}>Proverbs 3:5-6 · James 4:13-15</p>
        <div className="mt-5"><StageRail active="Learn" /></div>
        <p className="mt-3 text-[13px]" style={{ color: '#675A5D' }}>Learn · Practice · Pray · About 5 minutes</p>
        <div className="mt-8"><Primary onClick={() => navigate('path-teaching')}>Begin</Primary></div>
      </div>
    </PathFrame>
  )
}

export function PathTeaching() {
  const { navigate } = useApp()
  return (
    <PathFrame image={PATH_IMG}>
      <div className="text-center">
        <h1 className="font-serif text-[28px] font-semibold leading-[32px]" style={{ color: '#3A0D18' }}>How the passages<br />teach together</h1>
        <div className="mx-auto mt-4 h-px w-16" style={{ background: '#B68425' }} />
        <div className="mt-6 rounded-[8px] p-5 text-left" style={{ background: '#FFFCF6', border: '1px solid #E5D7C6' }}>
          <p className="font-serif text-[18px] leading-[28px] italic" style={{ color: '#24171A' }}>Trust in the LORD with all thine heart; and lean not unto thine own understanding.</p>
          <p className="mt-3 text-[12px] font-semibold" style={{ color: '#675A5D' }}>Proverbs 3:5-6 · Selected translation</p>
        </div>
        <p className="mt-6 text-[16px] leading-[24px]" style={{ color: '#30272A' }}>
          Proverbs addresses where your confidence rests. James addresses how you hold your plans when the outcome remains outside your control. Together, they teach you to plan responsibly while refusing to treat your understanding or preferred outcome as the final authority.
        </p>
        <div className="mt-6 rounded-[8px] p-4 text-left" style={{ background: '#FFF3CD', border: '1px solid #E6C878' }}>
          <p className="text-[12px] font-semibold uppercase" style={{ color: '#9B6B18', letterSpacing: '0.1em' }}>What this does not promise</p>
          <p className="mt-2 text-[13px] leading-[19px]" style={{ color: '#795719' }}>These passages do not promise the exact outcome you prefer. They form trust, humility, and faithful action.</p>
        </div>
        <div className="mt-8"><Primary onClick={() => navigate('path-practice-handoff')}>Continue</Primary></div>
      </div>
    </PathFrame>
  )
}

export function PathPracticeHandoff() {
  const { navigate, goBack } = useApp()
  return (
    <PathFrame image={PATH_IMG}>
      <div className="text-center">
        <h1 className="font-serif text-[27px] font-semibold uppercase leading-[32px]" style={{ color: '#24171A' }}>Put the teaching<br />into practice</h1>
        <div className="mx-auto mt-4 h-px w-16" style={{ background: '#B68425' }} />
        <p className="mx-auto mt-5 max-w-[300px] text-[15px] leading-[22px]" style={{ color: '#30272A' }}>Now practice recognizing what these passages say, what they do not promise, and how they guide a faithful response.</p>
        <div className="mt-7 rounded-[8px] p-4 text-left" style={{ background: '#FFFCF6', border: '1px solid #E5D7C6' }}>
          <div className="flex items-center gap-3">
            <IconDisc name="book" size={50} iconSize={25} bg="#F3E6C9" color="#9B6B18" />
            <div>
              <p className="font-serif text-[18px] font-semibold" style={{ color: '#24171A' }}>Scripture Practice</p>
              <p className="text-[12px]" style={{ color: '#675A5D' }}>Proverbs 3:5-6 · James 4:13-15</p>
              <p className="mt-1 text-[12px]" style={{ color: '#675A5D' }}>Level 2 · 6 questions · About 4 minutes</p>
            </div>
          </div>
        </div>
        <div className="mt-7"><Primary onClick={() => navigate('path-practice-return')}>Begin Scripture Practice</Primary></div>
        <button onClick={() => goBack('path-teaching')} className="mt-4 text-[13px] italic" style={{ color: '#675A5D' }}>Your Path will resume here when Practice is complete.</button>
      </div>
    </PathFrame>
  )
}

export function PathPracticeReturn() {
  const { navigate } = useApp()
  return (
    <PathFrame image={PATH_IMG}>
      <div className="text-center">
        <AchievementMedallion name="check" size={98} iconSize={42} tone="sage" />
        <h1 className="mt-5 font-serif text-[30px] font-semibold uppercase leading-[34px]" style={{ color: '#3A0D18' }}>Practice Complete</h1>
        <p className="mx-auto mt-2 max-w-[275px] text-[15px] leading-[20px]" style={{ color: '#30272A' }}>You strengthened your understanding of trusting God while holding your plans humbly.</p>
        <div className="mt-6 flex flex-col gap-2">
          <ReceiptRow icon="book" label="Passage Mastery" value="Level 2 of 5" />
          <ReceiptRow icon="star" label="XP Earned" value="+50 XP earned" />
        </div>
        <div className="mt-5"><StageRail active="Pray" complete={['Learn', 'Practice']} /></div>
        <h2 className="mt-7 font-serif text-[25px] font-semibold uppercase" style={{ color: '#3A0D18' }}>Now respond in prayer</h2>
        <p className="mx-auto mt-2 max-w-[250px] text-[14px] leading-[20px]" style={{ color: '#30272A' }}>Bring what you have learned before God through Scripture.</p>
        <div className="mt-7"><Primary onClick={() => navigate('path-prayer-handoff')}>Continue to Prayer</Primary></div>
      </div>
    </PathFrame>
  )
}

function ReceiptRow({ icon, label, value }: { icon: 'book' | 'star' | 'leaf' | 'path'; label: string; value: string }) {
  return (
    <div className="flex items-center gap-3 rounded-[8px] px-4 py-2.5 text-left" style={{ background: '#FFFCF6', border: '1px solid #E5D7C6' }}>
      <IconDisc name={icon} size={36} iconSize={19} bg="#F3E6C9" color="#9B6B18" />
      <div>
        <p className="text-[9px] font-semibold uppercase" style={{ color: '#B68425', letterSpacing: '0.14em' }}>{label}</p>
        <p className="text-[13px] leading-[17px]" style={{ color: '#24171A' }}>{value}</p>
      </div>
    </div>
  )
}

export function PathPrayerHandoff() {
  const { navigate } = useApp()
  return (
    <PathFrame image={TEACHING_IMG}>
      <div className="text-center">
        <h1 className="font-serif text-[30px] font-semibold uppercase leading-[35px]" style={{ color: '#3A0D18' }}>Respond in Prayer</h1>
        <p className="mx-auto mt-4 max-w-[285px] text-[15px] leading-[22px]" style={{ color: '#30272A' }}>Psalm 25:4-5 was selected because it asks God for guidance while placing the way forward under His truth.</p>
        <button onClick={() => navigate('pray-scripture')} className="mt-7 flex w-full items-center gap-4 rounded-[8px] p-4 text-left" style={{ background: '#FFFCF6', border: '1px solid #E5D7C6' }}>
          <IconDisc name="book" size={48} iconSize={24} bg="#F3E6C9" color="#9B6B18" />
          <span className="flex-1">
            <span className="block font-serif text-[17px]" style={{ color: '#24171A' }}>Psalm 25:4-5</span>
            <span className="text-[12px]" style={{ color: '#675A5D' }}>Selected translation</span>
          </span>
          <span style={{ color: '#675A5D' }}>›</span>
        </button>
        <div className="mt-7"><Primary onClick={() => navigate('path-prayer-return')}>Open Prayer</Primary></div>
        <button onClick={() => navigate('home')} className="mt-4 text-[13px] italic" style={{ color: '#675A5D' }}>Your Path will resume when Prayer is finished.</button>
      </div>
    </PathFrame>
  )
}

export function PathPrayerReturn() {
  const { navigate } = useApp()
  return (
    <PathFrame image={PATH_IMG}>
      <div className="text-center">
        <AchievementMedallion name="leaf" size={100} iconSize={42} tone="sage" />
        <h1 className="mt-5 font-serif text-[31px] font-semibold uppercase leading-[35px]" style={{ color: '#3A0D18' }}>Prayer Complete</h1>
        <p className="mx-auto mt-2 max-w-[260px] text-[15px] leading-[21px]" style={{ color: '#30272A' }}>You finished this session by praying Psalm 25:4-5.</p>
        <p className="mx-auto mt-5 max-w-[290px] text-[14px] leading-[20px]" style={{ color: '#30272A' }}>Your learning, Practice progress, and prayer are now part of this Path session.</p>
        <div className="mt-6"><StageRail active="Pray" complete={['Learn', 'Practice', 'Pray']} /></div>
        <div className="mt-7 grid grid-cols-2 gap-3">
          <button className="rounded-[8px] p-4" style={{ background: '#FFFCF6', border: '1px solid #E5D7C6' }}><AppIcon name="book" size={22} color="#B68425" /><span className="mt-2 block text-[12px]">Save Psalm</span></button>
          <button onClick={() => navigate('path-prayer-handoff')} className="rounded-[8px] p-4" style={{ background: '#FFFCF6', border: '1px solid #E5D7C6' }}><AppIcon name="sync" size={22} color="#B68425" /><span className="mt-2 block text-[12px]">Return to Prayer</span></button>
        </div>
        <div className="mt-7"><Primary onClick={() => navigate('path-session-complete')}>Complete Session</Primary></div>
      </div>
    </PathFrame>
  )
}

export function PathSessionComplete() {
  const { navigate } = useApp()
  return (
    <PathFrame image={CITY_IMG} title="Session 2 Complete" subtitle="Trust without demanding an outcome" imageHeight={124}>
      <div className="text-center">
        <AchievementMedallion name="leaf" size={64} iconSize={28} tone="gold" />
        <h1 className="mt-3 font-serif text-[24px] font-semibold uppercase" style={{ color: '#3A0D18' }}>Session 2 Complete</h1>
        <p className="mt-1 font-serif italic" style={{ color: '#3A0D18' }}>Trust without demanding an outcome</p>
        <div className="mt-3 flex flex-col gap-1.5">
          <ReceiptRow icon="path" label="Path Progress" value="2 of 7 sessions" />
          <ReceiptRow icon="book" label="Passage Mastery" value="Proverbs 3:5-6 · Level 2 of 5" />
          <ReceiptRow icon="star" label="XP Earned" value="+50 XP · 325 XP total" />
          <ReceiptRow icon="leaf" label="Achievement Progress" value="Scripture in Context · 2 of 3" />
        </div>
        <div className="mt-2.5"><XPBar totalXP={325} awardedXP={50} id="path-session-xp" compact /></div>
        <div className="mt-3 flex flex-col gap-2">
          <Primary onClick={() => navigate('home')}>Return Home</Primary>
          <Secondary onClick={() => navigate('path-cover')}>Continue to Session 3</Secondary>
        </div>
      </div>
    </PathFrame>
  )
}

export function PathOverview() {
  const { navigate } = useApp()
  const sessions = ['Hold Your Plans Humbly', 'Trust without Demanding an Outcome', 'Planning beneath God’s providence', 'When the Outcome Is Not What You Hoped For', 'Faithfulness in the Waiting', 'What Dependence Looks Like', 'A Life of Confident Trust']
  return (
    <PathFrame image={PATH_IMG}>
      <div className="text-center">
        <h1 className="font-serif text-[28px] font-semibold leading-[33px]" style={{ color: '#3A0D18' }}>Trusting God<br />Through Uncertainty</h1>
        <p className="mx-auto mt-3 max-w-[280px] text-[14px] leading-[20px]" style={{ color: '#30272A' }}>Learn to trust God faithfully without treating your preferred outcome as a promise.</p>
        <div className="mt-4"><SessionDots /></div>
        <p className="mt-3 text-[12px]" style={{ color: '#675A5D' }}>One session per day · Complete at your own pace.</p>
        <div className="mt-5 flex flex-col gap-1.5 text-left">
          {sessions.map((session, index) => (
            <button key={session} onClick={() => index <= 2 && navigate(index === 2 ? 'path-cover' : 'path-session-complete')} className="flex items-center gap-3 rounded-[8px] px-3 py-2" style={{ background: index === 2 ? '#FFF0EE' : '#FFFCF6', border: '1px solid #E5D7C6' }}>
              <span className="flex h-7 w-7 items-center justify-center rounded-full text-[12px] font-semibold" style={{ background: index < 2 ? '#607255' : index === 2 ? '#741630' : '#D8CABA', color: '#FFFCF6' }}>{index < 2 ? '✓' : index + 1}</span>
              <span className="flex-1 text-[13px]" style={{ color: '#24171A' }}>{session}</span>
              {index > 2 ? <AppIcon name="lock" size={14} color="#897A76" /> : <span style={{ color: '#897A76' }}>›</span>}
            </button>
          ))}
        </div>
        <div className="mt-5"><Primary onClick={() => navigate('path-cover')}>Continue Session 3</Primary></div>
        <button onClick={() => navigate('path-paused')} className="mt-3 text-[13px]" style={{ color: '#741630' }}>Pause Path</button>
      </div>
    </PathFrame>
  )
}

export function PathPaused() {
  const { navigate } = useApp()
  return (
    <PathFrame image={PATH_IMG}>
      <div className="text-center">
        <AchievementMedallion name="play" size={98} iconSize={38} tone="sage" />
        <p className="mt-5 text-[11px] font-semibold uppercase" style={{ color: '#B68425', letterSpacing: '0.2em' }}>Path Paused</p>
        <h1 className="mt-3 font-serif text-[30px] font-semibold leading-[35px]" style={{ color: '#3A0D18' }}>Trusting God<br />Through Uncertainty</h1>
        <p className="mx-auto mt-4 max-w-[280px] text-[15px] leading-[21px]" style={{ color: '#30272A' }}>Your progress is safe. Resume whenever you are ready.</p>
        <div className="mt-5"><SessionDots /></div>
        <p className="mt-3 text-[12px]" style={{ color: '#675A5D' }}>2 of 7 sessions complete</p>
        <div className="mt-6 rounded-[8px] p-4 text-left" style={{ background: '#F4EBDD' }}>
          <p className="text-[13px] leading-[19px]" style={{ color: '#675A5D' }}>You can return to your current session or choose a different Path at any time.</p>
        </div>
        <div className="mt-7 flex flex-col gap-2.5">
          <Primary onClick={() => navigate('path-overview')}>Resume Path</Primary>
          <Secondary onClick={() => navigate('home')}>Choose a Different Path</Secondary>
        </div>
      </div>
    </PathFrame>
  )
}

export function PathComplete() {
  const { navigate } = useApp()
  return (
    <PathFrame image={CITY_IMG} title="Path Complete" subtitle="Trusting God Through Uncertainty">
      <div className="text-center">
        <AchievementMedallion name="leaf" size={100} iconSize={42} tone="gold" />
        <p className="mt-4 text-[11px] font-semibold uppercase" style={{ color: '#B68425', letterSpacing: '0.2em' }}>Path Complete</p>
        <h1 className="mt-3 font-serif text-[29px] font-semibold leading-[34px]" style={{ color: '#3A0D18' }}>Trusting God<br />Through Uncertainty</h1>
        <p className="mx-auto mt-4 max-w-[295px] text-[14px] leading-[20px]" style={{ color: '#30272A' }}>You can now recognize the difference between trusting God and demanding He produce the outcome you prefer.</p>
        <div className="mt-6 flex flex-col gap-2">
          <ReceiptRow icon="book" label="Passages Studied" value="Proverbs 3:5-6 · James 4:13-15" />
          <ReceiptRow icon="leaf" label="Your Growth" value="You’ve taken meaningful steps toward trusting God in uncertainty." />
        </div>
        <div className="mt-6 flex flex-col gap-2.5">
          <Primary onClick={() => navigate('home')}>Begin Recommended Path</Primary>
          <Secondary onClick={() => navigate('alignment-intake')}>Bring Something Under Scripture</Secondary>
          <Secondary onClick={() => navigate('home')}>Return Home</Secondary>
        </div>
      </div>
    </PathFrame>
  )
}
