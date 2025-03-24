import React from 'react'
import Logo from '@/components/layout/Header/components/Logo'

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 z-50 w-full bg-background">
      <div className="container mx-auto flex min-h-14 items-center justify-center md:justify-between">
        <Logo />
      </div>
    </header>
  )
}

export default Header
