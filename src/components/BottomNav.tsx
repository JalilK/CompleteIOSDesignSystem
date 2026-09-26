import { useApp } from '../context'

const tabs = [
  { id: 'home' as const, label: 'Home', icon: HomeIcon },
  { id: 'library' as const, label: 'Library', icon: LibraryIcon },
  { id: 'progress' as const, label: 'Progress', icon: ProgressIcon },
  { id: 'you' as const, label: 'You', icon: YouIcon },
]

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

function LibraryIcon({ active }: { active: boolean }) {
  const c = active ? '#741630' : '#897A76'
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <rect x="3" y="4" width="5" height="16" rx="1" fill={active ? '#741630' : 'none'} stroke={c} strokeWidth="1.5" />
      <rect x="10" y="4" width="5" height="16" rx="1" fill={active ? '#741630' : 'none'} stroke={c} strokeWidth="1.5" />
      <path d="M18 4l3 15.5" stroke={c} strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

function ProgressIcon({ active }: { active: boolean }) {
  const c = active ? '#741630' : '#897A76'
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M4 20V14M9 20V10M14 20V6M19 20V2" stroke={c} strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}

function YouIcon({ active }: { active: boolean }) {
  const c = active ? '#741630' : '#897A76'
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="8" r="4" fill={active ? '#741630' : 'none'} stroke={c} strokeWidth="1.5" />
      <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" stroke={c} strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

export function BottomNav() {
  const { tab, setTab } = useApp()
  return (
    <div className="flex bg-surface border-t border-border safe-area-bottom" style={{ paddingBottom: 'max(20px, env(safe-area-inset-bottom))' }}>
      {tabs.map(t => {
        const active = tab === t.id
        const Icon = t.icon
        return (
          <button
            key={t.id}
            onClick={() => setTab(t.id)}
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
