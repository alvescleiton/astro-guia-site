import React from 'react'

import Logo from '@/components/layout/Header/components/Logo'
const Header = () => {
  return (
    <header className="relative w-full">
      <div className="container mx-auto flex min-h-14 items-center justify-center md:justify-between">
        <Logo />
      </div>
    </header>
  )
}

export default Header
