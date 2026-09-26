export type AppIconName =
  | 'alert'
  | 'audio'
  | 'book'
  | 'broom'
  | 'calendar'
  | 'card'
  | 'check'
  | 'edit'
  | 'flag'
  | 'globe'
  | 'help'
  | 'info'
  | 'leaf'
  | 'lock'
  | 'message'
  | 'music'
  | 'path'
  | 'play'
  | 'prayer'
  | 'scales'
  | 'settings'
  | 'shield'
  | 'star'
  | 'sync'
  | 'trash'
  | 'tree'
  | 'upload'
  | 'user'

type AppIconProps = {
  name: AppIconName
  size?: number
  color?: string
  strokeWidth?: number
  className?: string
}

export function AppIcon({ name, size = 22, color = '#675A5D', strokeWidth = 1.7, className }: AppIconProps) {
  const common = {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    className,
    'aria-hidden': true,
  }

  switch (name) {
    case 'alert':
      return <svg {...common}><path d="M12 4l8.5 15h-17L12 4z" stroke={color} strokeWidth={strokeWidth} strokeLinejoin="round" /><path d="M12 9v5M12 17.2v.2" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" /></svg>
    case 'audio':
      return <svg {...common}><path d="M5 14H3a1 1 0 01-1-1v-2a1 1 0 011-1h2l5-4v12l-5-4z" stroke={color} strokeWidth={strokeWidth} strokeLinejoin="round" /><path d="M15 9.5a4 4 0 010 5M18 7a8 8 0 010 10" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" /></svg>
    case 'book':
      return <svg {...common}><path d="M4 5.5A3.5 3.5 0 017.5 2H20v16H7.5A3.5 3.5 0 004 21.5v-16z" stroke={color} strokeWidth={strokeWidth} strokeLinejoin="round" /><path d="M4 5.5A3.5 3.5 0 00.5 2H0v16h.5A3.5 3.5 0 014 21.5M12 2v17" transform="translate(0 0)" stroke={color} strokeWidth={strokeWidth} strokeLinejoin="round" /></svg>
    case 'broom':
      return <svg {...common}><path d="M14 4l6 6M19 5l-8.5 8.5" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" /><path d="M9.5 13.5L5 18c2 2 5.8 2.3 8 0l1-1-3.5-3.5z" stroke={color} strokeWidth={strokeWidth} strokeLinejoin="round" /></svg>
    case 'calendar':
      return <svg {...common}><path d="M5 4h14a2 2 0 012 2v13a2 2 0 01-2 2H5a2 2 0 01-2-2V6a2 2 0 012-2zM8 2v4M16 2v4M3 9h18" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" /><path d="M8 13h.1M12 13h.1M16 13h.1M8 17h.1M12 17h.1" stroke={color} strokeWidth={strokeWidth + 1} strokeLinecap="round" /></svg>
    case 'card':
      return <svg {...common}><rect x="3" y="5" width="18" height="14" rx="2" stroke={color} strokeWidth={strokeWidth} /><path d="M3 9h18M7 15h4" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" /></svg>
    case 'check':
      return <svg {...common}><path d="M4 12.5l5 5L20 6.5" stroke={color} strokeWidth={strokeWidth + 0.4} strokeLinecap="round" strokeLinejoin="round" /></svg>
    case 'edit':
      return <svg {...common}><path d="M4 20l4.5-1 10-10a2.1 2.1 0 00-3-3l-10 10L4 20zM14.5 7.5l2 2" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" /></svg>
    case 'flag':
      return <svg {...common}><path d="M6 21V4M6 5h10l-1.5 4L16 13H6" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" /></svg>
    case 'globe':
      return <svg {...common}><circle cx="12" cy="12" r="9" stroke={color} strokeWidth={strokeWidth} /><path d="M3 12h18M12 3c2.2 2.3 3.2 5.2 3.2 9s-1 6.7-3.2 9M12 3c-2.2 2.3-3.2 5.2-3.2 9s1 6.7 3.2 9" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" /></svg>
    case 'help':
      return <svg {...common}><circle cx="12" cy="12" r="9" stroke={color} strokeWidth={strokeWidth} /><path d="M9.5 9a2.7 2.7 0 115 1.7c-1.6 1.1-2.5 1.7-2.5 3.3M12 17.5v.2" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" /></svg>
    case 'info':
      return <svg {...common}><circle cx="12" cy="12" r="9" stroke={color} strokeWidth={strokeWidth} /><path d="M12 10v6M12 7.2v.2" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" /></svg>
    case 'leaf':
      return <svg {...common}><path d="M5 19c1.2-6 4.7-10.8 14-14-1.2 9.2-5.7 13.6-14 14z" stroke={color} strokeWidth={strokeWidth} strokeLinejoin="round" /><path d="M5 19l9-9" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" /></svg>
    case 'lock':
      return <svg {...common}><rect x="5" y="10" width="14" height="10" rx="2" stroke={color} strokeWidth={strokeWidth} /><path d="M8 10V7a4 4 0 018 0v3" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" /></svg>
    case 'message':
      return <svg {...common}><path d="M4 5h16v11H8l-4 4V5z" stroke={color} strokeWidth={strokeWidth} strokeLinejoin="round" /><path d="M8 10h8M8 13h5" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" /></svg>
    case 'music':
      return <svg {...common}><path d="M9 18V5l10-2v13" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" /><circle cx="7" cy="18" r="2.5" stroke={color} strokeWidth={strokeWidth} /><circle cx="17" cy="16" r="2.5" stroke={color} strokeWidth={strokeWidth} /></svg>
    case 'path':
      return <svg {...common}><path d="M4 19c4-1 5-4 6.5-7S14 6 20 5" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" /><circle cx="20" cy="5" r="2" fill={color} /><path d="M3 19h6" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" /></svg>
    case 'play':
      return <svg {...common}><path d="M8 5v14l11-7L8 5z" fill={color} /></svg>
    case 'prayer':
      return <svg {...common}><path d="M9 4c1.3 3.5 1.2 7.2.3 10.8L7 21M15 4c-1.3 3.5-1.2 7.2-.3 10.8L17 21M9.3 14.8c-2.4 1.2-4 3.2-5 6.2M14.7 14.8c2.4 1.2 4 3.2 5 6.2" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" /></svg>
    case 'scales':
      return <svg {...common}><path d="M12 4v17M6 7h12M8 7l-4 7h8L8 7zM16 7l-4 7h8l-4-7z" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" /></svg>
    case 'settings':
      return <svg {...common}><circle cx="12" cy="12" r="3" stroke={color} strokeWidth={strokeWidth} /><path d="M19 12a7 7 0 00-.1-1l2-1.5-2-3.4-2.4 1a7.7 7.7 0 00-1.7-1L14.5 3h-5l-.4 3.1a7.7 7.7 0 00-1.7 1l-2.4-1-2 3.4L5 11a7 7 0 000 2l-2 1.5 2 3.4 2.4-1a7.7 7.7 0 001.7 1l.4 3.1h5l.4-3.1a7.7 7.7 0 001.7-1l2.4 1 2-3.4-2-1.5a7 7 0 00.1-1z" stroke={color} strokeWidth={strokeWidth} strokeLinejoin="round" /></svg>
    case 'shield':
      return <svg {...common}><path d="M12 3l8 3v5.5c0 5-3.3 8-8 9.5-4.7-1.5-8-4.5-8-9.5V6l8-3z" stroke={color} strokeWidth={strokeWidth} strokeLinejoin="round" /><path d="M8.5 12l2.2 2.2 4.8-5" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" /></svg>
    case 'star':
      return <svg {...common}><path d="M12 3l2.7 5.5 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.8 1-6.1-4.4-4.3 6.1-.9L12 3z" stroke={color} strokeWidth={strokeWidth} strokeLinejoin="round" /></svg>
    case 'sync':
      return <svg {...common}><path d="M20 7v5h-5M4 17v-5h5M19 12a7 7 0 00-12-4.9L4 10M5 12a7 7 0 0012 4.9L20 14" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" /></svg>
    case 'trash':
      return <svg {...common}><path d="M4 7h16M9 7V4h6v3M7 7l1 14h8l1-14M10 11v6M14 11v6" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" /></svg>
    case 'tree':
      return <svg {...common}><path d="M12 21v-6M12 15c-5-1-7-4.5-7-9 4.8.5 7 3.7 7 9zM12 15c5-1 7-4.5 7-9-4.8.5-7 3.7-7 9z" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" /></svg>
    case 'upload':
      return <svg {...common}><path d="M12 16V4M7 9l5-5 5 5M5 16v4h14v-4" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" /></svg>
    case 'user':
      return <svg {...common}><circle cx="12" cy="8" r="4" stroke={color} strokeWidth={strokeWidth} /><path d="M4.5 21a7.5 7.5 0 0115 0" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" /></svg>
  }
}

export function IconDisc({
  name,
  size = 40,
  iconSize = 22,
  bg = '#F4EBDD',
  color = '#741630',
}: {
  name: AppIconName
  size?: number
  iconSize?: number
  bg?: string
  color?: string
}) {
  return (
    <span className="inline-flex shrink-0 items-center justify-center rounded-full" style={{ width: size, height: size, background: bg }}>
      <AppIcon name={name} size={iconSize} color={color} />
    </span>
  )
}
