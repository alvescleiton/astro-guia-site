import React from 'react'

import Link from 'next/link'
import Image from 'next/image'

const Logo = () => {
  return (
    <Link href="/">
      <div className={`relative h-[30px] w-[150px]`}>
        <Image priority src="/assets/logo.webp" fill={true} alt="Astro Guia" />
      </div>
    </Link>
  )
}

export default Logo
