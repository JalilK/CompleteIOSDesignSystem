import { useApp } from '../context'

function SettingsRow({ icon, label, value, destructive }: { icon: string; label: string; value?: string; destructive?: boolean }) {
  return (
    <div className="flex items-center gap-3 py-3.5" style={{ borderBottom: '1px solid #DDD0C0' }}>
      <span className="text-[18px] w-7 text-center shrink-0">{icon}</span>
      <span className="flex-1 text-[15px]" style={{ color: destructive ? '#A33A3A' : '#24171A' }}>{label}</span>
      {value && <span className="text-[13px]" style={{ color: '#897A76' }}>{value}</span>}
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d="M6 4l4 4-4 4" stroke={destructive ? '#A33A3A' : '#DDD0C0'} strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </div>
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
  const { totalXP, level } = useApp()

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
          <span className="text-[20px]">🛤️</span>
          <div className="flex-1">
            <p className="font-semibold text-[14px]" style={{ color: '#24171A' }}>Trusting God Through Uncertainty</p>
            <p className="text-[12px]" style={{ color: '#675A5D' }}>Session 2 of 7 · Active Path</p>
          </div>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M6 4l4 4-4 4" stroke="#DDD0C0" strokeWidth="1.5" strokeLinecap="round" /></svg>
        </div>

        <Section title="Scripture">
          <SettingsRow icon="📖" label="Translation" value="KJV" />
          <SettingsRow icon="🌱" label="Personalization" />
        </Section>

        <Section title="Experience">
          <SettingsRow icon="🔔" label="Notifications" />
          <SettingsRow icon="🎵" label="Sensory Preferences" />
          <SettingsRow icon="♿" label="Accessibility" />
        </Section>

        <Section title="Subscription">
          <SettingsRow icon="💳" label="Subscription" value="Annual · Active" />
          <SettingsRow icon="🔄" label="Restore Purchases" />
        </Section>

        <Section title="Privacy & Data">
          <SettingsRow icon="🔒" label="How Personalization Works" />
          <SettingsRow icon="📤" label="Download My Data" />
          <SettingsRow icon="🧹" label="Clear Personalization" />
          <SettingsRow icon="🗑️" label="Delete Account" destructive />
        </Section>

        <Section title="Help">
          <SettingsRow icon="❓" label="Help & Support" />
          <SettingsRow icon="🚨" label="Report a Problem" />
          <SettingsRow icon="🛡️" label="Safety Information" />
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
