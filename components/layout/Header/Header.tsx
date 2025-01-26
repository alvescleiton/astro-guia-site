import React from 'react'
import dynamic from 'next/dynamic'

import Logo from '@/components/layout/Header/components/Logo'
const MenuDesktop = dynamic(() => import('@/components/layout/Header/components/MenuDesktop'))
const MenuMobile = dynamic(() => import('@/components/layout/Header/components/MenuMobile'))

const Header = () => {
  return (
    <header className="relative w-full border-b border-black/10 bg-white">
      <div className="container mx-auto flex min-h-14 items-center justify-center md:justify-between">
        <MenuMobile />

        <Logo />

        <MenuDesktop />
      </div>
    </header>
  )
}

export default Header
