import { cn } from '@/lib/utils'

export function RelayLogo({
  className,
  showWordmark = true,
}: {
  className?: string
  showWordmark?: boolean
}) {
  return (
    <span className={cn('inline-flex items-center gap-2.5', className)}>
      <span className="grid size-7 place-items-center rounded-md bg-foreground">
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden="true"
          className="text-mint-strong"
        >
          <circle cx="6.5" cy="16.5" r="2.4" fill="currentColor" />
          <path
            d="M7 14.5C9.2 9.4 13.8 8 17.2 8"
            stroke="currentColor"
            strokeWidth="1.9"
            strokeLinecap="round"
          />
          <path
            d="M14.4 6.6L17.6 8L16.4 11.1"
            stroke="currentColor"
            strokeWidth="1.9"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
      {showWordmark && (
        <span className="text-[1.05rem] font-semibold tracking-tight text-foreground">
          Relay
        </span>
      )}
    </span>
  )
}
