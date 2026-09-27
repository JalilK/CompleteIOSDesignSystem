import type { CSSProperties } from 'react'

const LEVEL_THRESHOLDS = [
  { level: 1, min: 0, name: 'Beginning Practice' },
  { level: 2, min: 100, name: 'Text Observer' },
  { level: 3, min: 250, name: 'Careful Interpreter' },
  { level: 4, min: 500, name: 'Faithful Applier' },
  { level: 5, min: 850, name: 'Conversation Ready' },
]

export function levelForXP(totalXP: number) {
  return LEVEL_THRESHOLDS.reduce((current, node) => totalXP >= node.min ? node : current, LEVEL_THRESHOLDS[0])
}

function nextLevelForXP(totalXP: number) {
  return LEVEL_THRESHOLDS.find(node => totalXP < node.min)
}

function fractionForXP(totalXP: number) {
  const current = levelForXP(totalXP)
  const next = nextLevelForXP(totalXP)
  if (!next || next.min <= current.min) return 1
  return Math.max(0, Math.min(1, (totalXP - current.min) / (next.min - current.min)))
}

export function XPBar({
  totalXP,
  awardedXP = 0,
  compact = false,
  id = 'xp-bar',
}: {
  totalXP: number
  awardedXP?: number
  compact?: boolean
  id?: string
}) {
  const current = levelForXP(totalXP)
  const next = nextLevelForXP(totalXP)
  const previousTotal = Math.max(0, totalXP - Math.max(0, awardedXP))
  const previous = levelForXP(previousTotal)
  const didCrossLevel = awardedXP > 0 && previous.level !== current.level
  const progress = fractionForXP(totalXP)
  const previousProgress = didCrossLevel ? 0 : fractionForXP(previousTotal)
  const remaining = next ? Math.max(0, next.min - totalXP) : 0

  const fillClass = awardedXP > 0
    ? didCrossLevel
      ? 'xp-fill xp-fill-level-cross'
      : 'xp-fill xp-fill-gain'
    : 'xp-fill'

  return (
    <div
      className={compact ? 'w-full' : 'w-full flex flex-col gap-1.5'}
      aria-label={`Verified XP progress. Level ${current.level}. ${totalXP} verified XP. ${next ? `${remaining} XP to Level ${next.level}.` : 'Top configured level reached.'}`}
      data-testid={id}
    >
      {!compact && (
        <div className="flex items-baseline gap-2">
          <span className="text-[12px] font-semibold" style={{ color: '#24171A' }}>Level {current.level}</span>
          <span className="text-[12px]" style={{ color: '#675A5D' }}>{totalXP} verified XP</span>
          <span className="flex-1" />
          {awardedXP > 0 && (
            <span className="xp-award-chip rounded-full px-2 py-1 text-[11px] font-bold" style={{ background: '#E6ECE2', color: '#40513B' }}>
              +{awardedXP} XP
            </span>
          )}
        </div>
      )}

      <div className={compact ? 'h-[7px] rounded-full overflow-hidden' : 'h-2.5 rounded-full overflow-hidden'} style={{ background: '#DDD0C0' }}>
        <div
          className={fillClass}
          style={{
            '--xp-from': `${previousProgress * 100}%`,
            '--xp-to': `${progress * 100}%`,
          } as CSSProperties}
        />
      </div>

      {!compact && (
        <p className="text-[11px] font-medium" style={{ color: '#897A76' }}>
          {next ? `${remaining} XP to Level ${next.level} at ${next.min} XP` : 'Top configured level reached'}
        </p>
      )}
    </div>
  )
}
