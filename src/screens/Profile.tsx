import { useState } from 'react'
import { useApp } from '../context'
import { AppIcon, type AppIconName } from '../components/AppIcon'

function SettingsRow({ icon, label, value, destructive, onPress }: { icon: AppIconName; label: string; value?: string; destructive?: boolean; onPress?: () => void }) {
  return (
    <button onClick={onPress} className="flex w-full items-center gap-3 py-3.5 text-left" style={{ borderBottom: '1px solid #DDD0C0' }}>
      <span className="w-7 shrink-0 text-center">
        <AppIcon name={icon} size={20} color={destructive ? '#A33A3A' : '#7B4B16'} />
      </span>
      <span className="flex-1 text-[15px]" style={{ color: destructive ? '#A33A3A' : '#24171A' }}>{label}</span>
      {value && <span className="text-[13px]" style={{ color: '#897A76' }}>{value}</span>}
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d="M6 4l4 4-4 4" stroke={destructive ? '#A33A3A' : '#DDD0C0'} strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </button>
  )
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-[20px] px-4 pt-1 pb-1" style={{ background: '#FFFCF6', border: '1px solid #DDD0C0' }}>
      <p className="text-[12px] font-semibold uppercase tracking-wider pt-3 pb-2" style={{ color: '#897A76', letterSpacing: '0.08em' }}>{title}</p>
      {children}
    </div>
  )
}

export function Profile() {
  const { totalXP, level, navigate } = useApp()

  return (
    <div className="flex flex-col h-full" style={{ background: '#F7F1E7' }}>
      <div className="px-5 pt-14 pb-4">
        <h1 className="font-serif text-[30px] font-bold" style={{ color: '#24171A' }}>You</h1>
      </div>

      <div className="flex-1 overflow-y-auto scrollbar-hide px-5 pb-8 flex flex-col gap-4">
        {/* Profile card */}
        <div className="rounded-[24px] p-5 flex items-center gap-4" style={{ background: '#FFFCF6', boxShadow: '0 2px 16px rgba(30,21,18,0.07)' }}>
          <div className="w-16 h-16 rounded-full flex items-center justify-center font-bold text-[24px]" style={{ background: 'linear-gradient(135deg, #D8A8B1, #741630)', color: '#FFFCF6' }}>
            J
          </div>
          <div className="flex-1">
            <p className="font-serif text-[20px] font-bold" style={{ color: '#24171A' }}>Jalil</p>
            <p className="text-[13px]" style={{ color: '#675A5D' }}>Level {level} · {totalXP} XP</p>
            <p className="text-[13px]" style={{ color: '#741630' }}>Annual subscription · Active</p>
          </div>
        </div>

        {/* Active Path */}
        <div className="rounded-[18px] p-4 flex items-center gap-3" style={{ background: '#FFFCF6', border: '1px solid #DDD0C0' }}>
          <AppIcon name="path" size={22} color="#7B4B16" />
          <div className="flex-1">
            <p className="font-semibold text-[14px]" style={{ color: '#24171A' }}>Trusting God Through Uncertainty</p>
            <p className="text-[12px]" style={{ color: '#675A5D' }}>Session 2 of 7 · Active Path</p>
          </div>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M6 4l4 4-4 4" stroke="#DDD0C0" strokeWidth="1.5" strokeLinecap="round" /></svg>
        </div>

        <Section title="Scripture">
          <SettingsRow icon="book" label="Translation" value="Selected" />
          <SettingsRow icon="leaf" label="Personalization" />
        </Section>

        <Section title="Experience">
          <SettingsRow icon="info" label="Notifications" />
          <SettingsRow icon="music" label="Sensory Preferences" onPress={() => navigate('sound-controls')} />
          <SettingsRow icon="settings" label="Accessibility" />
        </Section>

        <Section title="Subscription">
          <SettingsRow icon="card" label="Subscription" value="Annual · Active" />
          <SettingsRow icon="sync" label="Restore Purchases" />
        </Section>

        <Section title="Privacy & Data">
          <SettingsRow icon="lock" label="How Personalization Works" onPress={() => navigate('privacy-settings')} />
          <SettingsRow icon="upload" label="Download My Data" />
          <SettingsRow icon="broom" label="Clear Personalization" onPress={() => navigate('privacy-settings')} />
          <SettingsRow icon="trash" label="Delete Account" destructive />
        </Section>

        <Section title="Help">
          <SettingsRow icon="help" label="Help & Support" />
          <SettingsRow icon="alert" label="Report a Problem" />
          <SettingsRow icon="shield" label="Safety Information" />
        </Section>

        <button className="w-full rounded-full font-semibold text-[16px] transition-all"
          style={{ height: 52, border: '1.5px solid #DDD0C0', color: '#675A5D', background: 'transparent' }}>
          Sign Out
        </button>

        <p className="text-center text-[12px]" style={{ color: '#DDD0C0' }}>Alignment · Version 1.0</p>
      </div>
    </div>
  )
}

function ToggleRow({ icon, title, body, enabled, onToggle }: {
  icon: AppIconName
  title: string
  body: string
  enabled: boolean
  onToggle: () => void
}) {
  return (
    <button onClick={onToggle} className="flex w-full items-center gap-3 px-4 py-3.5 text-left" style={{ borderBottom: '1px solid #E5D7C6' }}>
      <span className="w-8 shrink-0 text-center"><AppIcon name={icon} size={21} color="#7B4B16" /></span>
      <span className="flex-1">
        <span className="block text-[15px] font-medium" style={{ color: '#24171A' }}>{title}</span>
        <span className="mt-0.5 block text-[12px] leading-[16px]" style={{ color: '#675A5D' }}>{body}</span>
      </span>
      <span className="h-8 w-14 rounded-full p-1" style={{ background: enabled ? '#5E986A' : '#DDD0C0' }}>
        <span className="block h-6 w-6 rounded-full bg-white transition-transform" style={{ transform: enabled ? 'translateX(24px)' : 'translateX(0)' }} />
      </span>
    </button>
  )
}

export function PrivacySettings() {
  const { navigate } = useApp()
  const [recent, setRecent] = useState(true)
  const [path, setPath] = useState(true)
  const [why, setWhy] = useState(true)

  return (
    <div className="flex h-full flex-col" style={{ background: '#F7F1E7' }}>
      <div className="px-5 pt-14 pb-4">
        <button onClick={() => navigate('profile')} className="mb-3 h-10 w-10" aria-label="Back">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M12 4L6 10l6 6" stroke="#24171A" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
        </button>
        <h1 className="font-serif text-[28px] font-semibold leading-[34px]" style={{ color: '#4B1021' }}>Personalization & privacy</h1>
        <p className="mt-1 text-[15px] leading-[20px]" style={{ color: '#24171A' }}>Your content is shaped by what’s meaningful to you, and you’re always in control.</p>
      </div>

      <div className="flex-1 overflow-y-auto scrollbar-hide px-5 pb-8">
        <p className="mb-2 text-[15px] font-medium" style={{ color: '#24171A' }}>Used for recommendations</p>
        <div className="overflow-hidden rounded-[15px]" style={{ background: '#FFFCF6', border: '1px solid #E5D7C6' }}>
          <ToggleRow icon="leaf" title="Use recent Alignments" body="Include your latest Alignments in recommendations" enabled={recent} onToggle={() => setRecent(v => !v)} />
          <ToggleRow icon="path" title="Use active Path" body="Include your current Path in recommendations" enabled={path} onToggle={() => setPath(v => !v)} />
          <ToggleRow icon="info" title="Explain why content was selected" body="Show a short note when we recommend content for you" enabled={why} onToggle={() => setWhy(v => !v)} />
        </div>

        <p className="mb-2 mt-7 text-[15px] font-medium" style={{ color: '#24171A' }}>Prayer and meditation history</p>
        <div className="overflow-hidden rounded-[15px]" style={{ background: '#FFFCF6', border: '1px solid #E5D7C6' }}>
          <SettingsRow icon="sync" label="Clear prayer and meditation history" value="Remove past sessions" />
        </div>

        <p className="mb-2 mt-7 text-[15px] font-medium" style={{ color: '#24171A' }}>Audio preferences</p>
        <div className="overflow-hidden rounded-[15px]" style={{ background: '#FFFCF6', border: '1px solid #E5D7C6' }}>
          <SettingsRow icon="music" label="Preferred voice" value="A gentle, steady pace" />
          <SettingsRow icon="trash" label="Delete personalization data" value="Remove saved preferences" destructive />
        </div>
      </div>
    </div>
  )
}
