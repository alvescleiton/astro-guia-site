import React from 'react'

import Link from 'next/link'
import Image from 'next/image'

const Logo = () => {
  return (
    <Link href="/">
      <Image priority src="/assets/logo.webp" alt="Astro Guia" width={120} height={33} />
    </Link>
  )
}

export default Logo
