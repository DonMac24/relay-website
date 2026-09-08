import { cn } from '@/lib/utils'

export function RelayLogo({
  className,
  showWordmark = true,
}: {
  className?: string
  showWordmark?: boolean
}) {
  return (
    <span className={cn('inline-flex items-center gap-2', className)}>
      <span className="grid size-7 place-items-center rounded-lg bg-mint-strong">
        <span className="text-[1.05rem] font-bold leading-none text-primary-foreground">
          R
        </span>
      </span>
      {showWordmark && (
        <span className="flex items-baseline gap-1.5">
          <span className="text-[1.1rem] font-semibold tracking-tight text-foreground">
            elay
          </span>
          <span className="font-mono text-[0.7rem] font-semibold tracking-[0.12em] text-mint-strong">
            ECI
          </span>
        </span>
      )}
    </span>
  )
}
