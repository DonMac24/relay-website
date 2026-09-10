import Image from 'next/image'
import relayLogo from '@/public/relay-eci-logo-white-v2.png'
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
      <Image
        src={relayLogo}
        alt="Relay ECI"
        priority
        className={cn(
          'block w-auto object-contain',
          showWordmark ? 'h-16 sm:h-20' : 'h-14'
        )}
      />
    </span>
  )
}