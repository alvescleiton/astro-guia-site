import React from 'react'
import Logo from '@/components/layout/Header/components/Logo'

const Header: React.FC = () => {
  return (
    <header className="fixed w-full bg-background">
      <div className="container mx-auto flex min-h-14 items-center justify-center md:justify-between">
        <Logo />
      </div>
    </header>
  )
}

export default Header
