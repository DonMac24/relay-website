import Image from 'next/image'
import { cn } from '@/lib/utils'

type RelayLogoProps = {
  className?: string
  showWordmark?: boolean
}

export function RelayLogo({
  className,
  showWordmark = true,
}: RelayLogoProps) {
  return (
    <Image
      src="/relay-eci-logo-coral.png"
      alt="Relay ECI"
      width={2048}
      height={684}
      className={cn(
        'h-auto w-[180px] object-contain',
        className,
      )}
    />
  )
}