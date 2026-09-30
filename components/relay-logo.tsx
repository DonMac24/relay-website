import Image from 'next/image'

type RelayLogoProps = {
  className?: string
  showWordmark?: boolean
}

export function RelayLogo({ className = '' }: RelayLogoProps) {
  return (
    <Image
      src="/relay-logo-deep-lavender.png"
      alt="Relay ECI"
      width={2048}
      height={757}
      className={`block h-auto w-[150px] max-w-full object-contain sm:w-[170px] ${className}`}
    />
  )
}