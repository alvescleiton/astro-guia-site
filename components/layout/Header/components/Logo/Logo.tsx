import React from 'react'

import Link from 'next/link'
import Image from 'next/image'

const Logo = () => {
  return (
    <Link href="/">
      <div className={`md:h-18 relative h-[40px] w-[70px] md:w-20`}>
        <Image priority src="assets/logo.svg" fill={true} alt="Portal de Loterias" />
      </div>
    </Link>
  )
}

export default Logo
