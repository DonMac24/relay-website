import Image from 'next/image'
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
        src="/relay-logo.png.jpg"
        alt="Relay ECI"
        width={420}
        height={120}
        priority
        className={cn(
          'w-auto object-contain',
          showWordmark ? 'h-10' : 'h-9'
        )}
      />
    </span>
  )
}