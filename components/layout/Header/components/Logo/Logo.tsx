import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Logo: React.FC = () => {
  return (
    <Link href="/" prefetch={false} aria-label="Astro Guia Home">
      <Image
        priority
        src="/assets/logo.webp"
        alt="Astro Guia"
        width={120}
        height={33}
        style={{ width: 'auto', height: 'auto' }}
      />
    </Link>
  )
}

export default Logo
