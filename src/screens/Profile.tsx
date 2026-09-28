import { useState } from 'react'
import { useApp } from '../context'
import { AppIcon, IconDisc, type AppIconName } from '../components/AppIcon'

function SettingsRow({ icon, label, value, destructive, onPress }: { icon: AppIconName; label: string; value?: string; destructive?: boolean; onPress?: () => void }) {
  return (
    <button onClick={onPress} className="flex w-full items-center gap-3 py-3.5 text-left" style={{ borderBottom: '1px solid #E5D7C6', background: destructive ? '#FFF0EE' : 'transparent' }}>
      <IconDisc name={icon} size={38} iconSize={19} bg={destructive ? '#F8D8D5' : '#F4EBDD'} color={destructive ? '#A33A3A' : '#7B4B16'} />
      <span className="min-w-0 flex-1">
        <span className="block text-[15px]" style={{ color: destructive ? '#A33A3A' : '#24171A' }}>{label}</span>
        {value && <span className="mt-0.5 block truncate text-[12px]" style={{ color: destructive ? '#A33A3A' : '#897A76' }}>{value}</span>}
      </span>
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d="M6 4l4 4-4 4" stroke={destructive ? '#A33A3A' : '#DDD0C0'} strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </button>
  )
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="shrink-0 overflow-hidden rounded-[8px]" style={{ background: '#FFFCF6', border: '1px solid #DDD0C0', boxShadow: '0 1px 12px rgba(30,21,18,0.05)' }}>
      <p className="px-4 text-[11px] font-semibold uppercase pt-4 pb-2" style={{ color: '#B68425', letterSpacing: '0.12em' }}>{title}</p>
      {children}
    </div>
  )
}

function SettingsDetailSheet({ title, body, action, onClose }: { title: string; body: string; action?: string; onClose: () => void }) {
  return (
    <div className="absolute inset-0 z-30 flex flex-col justify-end" style={{ background: 'rgba(36,23,26,0.30)' }}>
      <button className="flex-1" onClick={onClose} aria-label="Close settings detail" />
      <div className="rounded-t-[28px] px-5 pb-10 pt-4 shadow-2xl" style={{ background: '#FFFCF6' }}>
        <div className="mx-auto mb-5 h-1 w-12 rounded-full" style={{ background: '#D7C4AF' }} />
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-[12px] font-semibold uppercase" style={{ color: '#B68425', letterSpacing: '0.14em' }}>Settings</p>
            <h2 className="mt-1 font-serif text-[28px] font-semibold leading-[33px]" style={{ color: '#24171A' }}>{title}</h2>
          </div>
          <button onClick={onClose} className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full" style={{ background: '#F4EBDD' }} aria-label="Close">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M4 4l10 10M14 4L4 14" stroke="#675A5D" strokeWidth="1.8" strokeLinecap="round" /></svg>
          </button>
        </div>
        <p className="mt-4 text-[15px] leading-[22px]" style={{ color: '#30272A' }}>{body}</p>
        {action && <p className="mt-4 rounded-[14px] px-4 py-3 text-[13px] leading-[18px]" style={{ background: '#F7F1E7', border: '1px solid #E5D7C6', color: '#675A5D' }}>{action}</p>}
        <button onClick={onClose} className="mt-6 h-13 w-full rounded-full text-[16px] font-semibold" style={{ height: 52, background: '#741630', color: '#FFFCF6' }}>Done</button>
      </div>
    </div>
  )
}

export function Profile() {
  const { totalXP, level, navigate } = useApp()
  const [notice, setNotice] = useState<string | null>(null)
  const [detail, setDetail] = useState<{ title: string; body: string; action?: string } | null>(null)
  const openDetail = (title: string, body: string, action?: string) => {
    setNotice(null)
    setDetail({ title, body, action })
  }

  return (
    <div className="relative flex flex-col h-full" style={{ background: '#F7F1E7' }}>
      <div className="px-5 pt-14 pb-4">
        <h1 className="font-serif text-[30px] font-bold" style={{ color: '#24171A' }}>You</h1>
      </div>

      <div
        className="flex-1 overflow-y-auto scrollbar-hide px-5 flex flex-col gap-4"
        style={{ paddingBottom: 'calc(env(safe-area-inset-bottom, 0px) + 96px)' }}
      >
        {/* Profile card */}
        <div className="shrink-0 rounded-[8px] p-5 flex items-center gap-4" style={{ background: '#FFFCF6', boxShadow: '0 2px 16px rgba(30,21,18,0.07)' }}>
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
        <button onClick={() => navigate('path-overview')} className="shrink-0 rounded-[8px] p-4 flex w-full items-center gap-3 text-left" style={{ background: '#FFFCF6', border: '1px solid #DDD0C0' }}>
          <IconDisc name="path" size={42} iconSize={22} bg="#F3E6C9" color="#9B6B18" />
          <div className="flex-1">
            <p className="font-semibold text-[14px]" style={{ color: '#24171A' }}>Trusting God Through Uncertainty</p>
            <p className="text-[12px]" style={{ color: '#675A5D' }}>Session 2 of 7 · Active Path</p>
          </div>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M6 4l4 4-4 4" stroke="#DDD0C0" strokeWidth="1.5" strokeLinecap="round" /></svg>
        </button>

        <Section title="Scripture">
          <SettingsRow icon="book" label="Translation" value="Selected" onPress={() => openDetail('Translation', 'Choose the translation used for Scripture display, practice references, devotional quotations, and prayer surfaces.', 'Current preview: Selected translation. Production should list available licensed translations and remember the preference.')} />
          <SettingsRow icon="leaf" label="Personalization" onPress={() => navigate('privacy-settings')} />
        </Section>

        <Section title="Experience">
          <SettingsRow icon="info" label="Notifications" onPress={() => openDetail('Notifications', 'Control practice reminders, Path resume nudges, and quiet-hour behavior without exposing sensitive spiritual or personal details on the lock screen.', 'Preview state: reminders are off until the native app requests notification permission.')} />
          <SettingsRow icon="music" label="Sensory Preferences" onPress={() => navigate('sound-controls')} />
          <SettingsRow icon="settings" label="Accessibility" onPress={() => openDetail('Accessibility', 'Alignment must support Dynamic Type, VoiceOver labels, sufficient contrast, reduced motion, and text alternatives for progress, medals, and charts.', 'Use Sound Controls for reduce-motion preview. Native builds should mirror iOS accessibility settings.')} />
          <SettingsRow icon="sync" label="Motion Source of Truth" onPress={() => navigate('motion-source-truth')} />
          <SettingsRow icon="path" label="Button Destination Graph" onPress={() => navigate('prototype-graph')} />
        </Section>

        <Section title="Subscription">
          <SettingsRow icon="card" label="Subscription" value="Annual · Active" onPress={() => navigate('paywall')} />
          <SettingsRow icon="sync" label="Restore Purchases" onPress={() => openDetail('Restore Purchases', 'Checks the signed-in App Store account for an active entitlement and refreshes access without starting a new purchase.', 'Preview state: restore is simulated. StoreKit must be connected in the native app.')} />
        </Section>

        <Section title="Privacy & Data">
          <SettingsRow icon="lock" label="How Personalization Works" onPress={() => navigate('privacy-settings')} />
          <SettingsRow icon="upload" label="Download My Data" onPress={() => openDetail('Download My Data', 'Exports saved Alignments, practiced passages, XP receipts, prayer/meditation history, and personalization preferences.', 'Export must redact transient analysis prompts and preserve private-user-control language.')} />
          <SettingsRow icon="broom" label="Clear Personalization" onPress={() => navigate('privacy-settings')} />
          <SettingsRow icon="trash" label="Delete Account" destructive onPress={() => openDetail('Delete Account', 'This permanently removes the account profile, personalization data, and synced progress after a confirmation step.', 'Native app requirement: require explicit confirmation and explain what is retained for legal/subscription records.')} />
        </Section>

        <Section title="Help">
          <SettingsRow icon="help" label="Help & Support" onPress={() => openDetail('Help & Support', 'Open support for billing, access, app behavior, Scripture/content questions, and accessibility problems.', 'Production should provide contact paths and app diagnostics without collecting unnecessary personal content.')} />
          <SettingsRow icon="alert" label="Report a Problem" onPress={() => openDetail('Report a Problem', 'Start a problem report with the current screen, app version, device model, and optional user description.', 'Never attach private Alignment text unless the user explicitly chooses to include it.')} />
          <SettingsRow icon="shield" label="Safety Information" onPress={() => openDetail('Safety Information', 'Explains that the app teaches Scripture and supports reflection, but does not replace emergency, medical, legal, financial, or pastoral care.', 'Crisis and abuse boundaries must be explicit in the native app.')} />
        </Section>

        {notice && (
          <p role="status" className="shrink-0 rounded-[14px] px-4 py-3 text-[13px] leading-[18px]" style={{ background: '#F4EBDD', color: '#675A5D', border: '1px solid #DDD0C0' }}>{notice}</p>
        )}

        <button onClick={() => setNotice('Signed out of the preview session.')}
          className="shrink-0 w-full rounded-full font-semibold text-[16px] transition-all"
          style={{ height: 52, border: '1.5px solid #DDD0C0', color: '#675A5D', background: 'transparent' }}>
          Sign Out
        </button>

        <p className="shrink-0 text-center text-[12px]" style={{ color: '#DDD0C0' }}>Alignment · Version 1.0</p>
      </div>
      {detail && <SettingsDetailSheet title={detail.title} body={detail.body} action={detail.action} onClose={() => setDetail(null)} />}
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
    <button
      onClick={onToggle}
      aria-pressed={enabled}
      aria-label={`${title}. ${enabled ? 'On' : 'Off'}. ${body}`}
      className="flex w-full items-center gap-3 px-4 py-3.5 text-left"
      style={{ borderBottom: '1px solid #E5D7C6' }}
    >
      <IconDisc name={icon} size={38} iconSize={19} bg="#F4EBDD" color="#40513B" />
      <span className="flex-1">
        <span className="block text-[15px] font-medium" style={{ color: '#24171A' }}>{title}</span>
        <span className="mt-0.5 block text-[12px] leading-[16px]" style={{ color: '#675A5D' }}>{body}</span>
        <span className="mt-1 block text-[11px] font-semibold uppercase tracking-[0.08em]" style={{ color: enabled ? '#40513B' : '#897A76' }}>{enabled ? 'On' : 'Off'}</span>
      </span>
      <span className="h-8 w-14 rounded-full p-1" style={{ background: enabled ? '#5E986A' : '#DDD0C0' }}>
        <span className="block h-6 w-6 rounded-full bg-white transition-transform" style={{ transform: enabled ? 'translateX(24px)' : 'translateX(0)' }} />
      </span>
    </button>
  )
}

export function PrivacySettings() {
  const { goBack } = useApp()
  const [recent, setRecent] = useState(true)
  const [path, setPath] = useState(true)
  const [why, setWhy] = useState(true)
  const [notice, setNotice] = useState<string | null>(null)

  return (
    <div className="flex h-full flex-col" style={{ background: '#F7F1E7' }}>
      <div className="px-5 pt-14 pb-4">
        <button onClick={() => goBack('profile')} className="mb-3 h-10 w-10" aria-label="Back">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M12 4L6 10l6 6" stroke="#24171A" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
        </button>
        <h1 className="font-serif text-[28px] font-semibold leading-[34px]" style={{ color: '#4B1021' }}>Personalization & privacy</h1>
        <p className="mt-1 max-w-[320px] text-[15px] leading-[20px]" style={{ color: '#24171A' }}>Your content is shaped by what’s meaningful to you, and you’re always in control.</p>
      </div>

      <div className="flex-1 overflow-y-auto scrollbar-hide px-5 pb-8">
        <p className="mb-2 text-[15px] font-medium" style={{ color: '#24171A' }}>Used for recommendations</p>
        <div className="overflow-hidden rounded-[8px]" style={{ background: '#FFFCF6', border: '1px solid #E5D7C6' }}>
          <ToggleRow icon="leaf" title="Use recent Alignments" body="Include your latest Alignments in recommendations" enabled={recent} onToggle={() => setRecent(v => !v)} />
          <ToggleRow icon="path" title="Use active Path" body="Include your current Path in recommendations" enabled={path} onToggle={() => setPath(v => !v)} />
          <ToggleRow icon="info" title="Explain why content was selected" body="Show a short note when we recommend content for you" enabled={why} onToggle={() => setWhy(v => !v)} />
        </div>

        <p className="mb-2 mt-7 text-[15px] font-medium" style={{ color: '#24171A' }}>Prayer and meditation history</p>
        <div className="overflow-hidden rounded-[8px]" style={{ background: '#FFFCF6', border: '1px solid #E5D7C6' }}>
          <SettingsRow icon="sync" label="Clear prayer and meditation history" value="Remove past sessions" onPress={() => setNotice('Prayer and meditation history cleared for this preview.')} />
        </div>

        <p className="mb-2 mt-7 text-[15px] font-medium" style={{ color: '#24171A' }}>Audio preferences</p>
        <div className="overflow-hidden rounded-[8px]" style={{ background: '#FFFCF6', border: '1px solid #E5D7C6' }}>
          <SettingsRow icon="music" label="Preferred voice" value="A gentle, steady pace" onPress={() => setNotice('Preferred voice selector opens from here in the native app.')} />
          <SettingsRow icon="trash" label="Delete personalization data" value="Remove saved preferences" destructive onPress={() => setNotice('Personalization data deletion requires confirmation in the native app.')} />
        </div>
        {notice && <p role="status" className="mt-5 rounded-[14px] px-4 py-3 text-[13px]" style={{ background: '#F4EBDD', color: '#675A5D', border: '1px solid #DDD0C0' }}>{notice}</p>}
      </div>
    </div>
  )
}
