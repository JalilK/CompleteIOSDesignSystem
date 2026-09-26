import { useApp } from '../context'

function HomeIcon({ active }: { active: boolean }) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M3 9.5L12 3l9 6.5V20a1 1 0 01-1 1H5a1 1 0 01-1-1V9.5z"
        fill={active ? '#741630' : 'none'}
        stroke={active ? '#741630' : '#897A76'} strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M9 21V12h6v9" stroke={active ? '#FFFCF6' : '#897A76'} strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
  )
}

function AlignIcon({ active }: { active: boolean }) {
  const c = active ? '#741630' : '#897A76'
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M12 20V10.5" stroke={c} strokeWidth="1.6" strokeLinecap="round" />
      <path d="M12 11c-2.9-3-6.1-3.9-9-2.7.9 4.5 4.1 7 9 7.3" fill={active ? '#741630' : 'none'} stroke={c} strokeWidth="1.4" strokeLinejoin="round" />
      <path d="M12 11c2.7-3.3 6.1-4.2 9-3-.9 4.4-4.3 7-9 7.6" fill={active ? '#741630' : 'none'} stroke={c} strokeWidth="1.4" strokeLinejoin="round" />
    </svg>
  )
}

function DevotionalIcon({ active }: { active: boolean }) {
  const c = active ? '#741630' : '#897A76'
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M12 6.5c-2-1.7-4.4-2.5-7-2.5v15c2.6 0 5 .8 7 2.5V6.5z" fill={active ? '#741630' : 'none'} stroke={c} strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M12 6.5c2-1.7 4.4-2.5 7-2.5v15c-2.6 0-5 .8-7 2.5V6.5z" fill={active ? '#741630' : 'none'} stroke={c} strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
  )
}

function MoreIcon({ active }: { active: boolean }) {
  const c = active ? '#741630' : '#897A76'
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <circle cx="5.5" cy="12" r="1.7" fill={c} />
      <circle cx="12" cy="12" r="1.7" fill={c} />
      <circle cx="18.5" cy="12" r="1.7" fill={c} />
    </svg>
  )
}

export function BottomNav() {
  const { screen, setTab, navigate } = useApp()
  const items = [
    { id: 'home', label: 'Home', icon: HomeIcon, active: screen === 'home', action: () => setTab('home') },
    { id: 'align', label: 'Align', icon: AlignIcon, active: screen.startsWith('alignment') || screen === 'faithful-action', action: () => navigate('alignment-intake', { replace: true }) },
    { id: 'devotionals', label: 'Devotionals', icon: DevotionalIcon, active: screen === 'devotional' || screen === 'prayer-mode', action: () => navigate('devotional', { replace: true }) },
    { id: 'more', label: 'More', icon: MoreIcon, active: screen === 'profile', action: () => setTab('you') },
  ]

  return (
    <div className="flex bg-surface border-t border-border safe-area-bottom" style={{ paddingBottom: 'max(20px, env(safe-area-inset-bottom))' }}>
      {items.map(t => {
        const active = t.active
        const Icon = t.icon
        return (
          <button
            key={t.id}
            onClick={t.action}
            className="flex-1 flex flex-col items-center gap-0.5 pt-2 pb-1"
            aria-label={t.label}
            aria-selected={active}
          >
            <Icon active={active} />
            <span className="text-[10px] font-medium leading-none" style={{ color: active ? '#741630' : '#897A76' }}>
              {t.label}
            </span>
          </button>
        )
      })}
    </div>
  )
}
