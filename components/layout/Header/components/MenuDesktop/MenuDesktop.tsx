import Link from 'next/link'
import React from 'react'

const MenuDesktop = () => {
  return (
    <nav className="hidden h-full items-center gap-10 text-[0.88rem] text-primary md:flex">
      <div className="flex h-full cursor-pointer items-center hover:text-secondary">Loterias</div>
      <div className="flex h-full cursor-pointer items-center hover:text-secondary">Especiais</div>
      <div className="flex h-full cursor-pointer items-center hover:text-secondary">Ferramentas</div>
      <div className="flex h-full items-center hover:text-secondary">
        <Link href="/noticias">Notícias</Link>
      </div>
      <div className="flex h-full items-center hover:text-secondary">
        <Link href="/fale-conosco">Fale Conosco</Link>
      </div>
    </nav>
  )
}

export default MenuDesktop
