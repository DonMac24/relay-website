import { cn } from '@/lib/utils'

export function RelayLogo({
  className,
  showWordmark = true,
}: {
  className?: string
  showWordmark?: boolean
}) {
  return (
    <span className={cn('inline-flex items-center', className)}>
      <img
        src="/logos/relay-eci-logo-white-v2.jpg"
        alt="Relay ECI"
        className={cn(
          'block w-auto object-contain',
          showWordmark ? 'h-10' : 'h-9'
        )}
      />
    </span>
  )
}