'use client'

import React, { useState } from 'react'
import Logo from '@/components/layout/Header/components/Logo'
import Accordion from '@/components/common/Accordion'

import { RxHamburgerMenu } from 'react-icons/rx'
import { CgCloseO } from 'react-icons/cg'
import { LotteriesList, SpecialLotteriesList } from '@/types/lotteries'
import Link from 'next/link'

const MenuMobile = () => {
  const [openMenu, setOpenMenu] = useState(false)

  return (
    <>
      <div className="absolute left-3 top-4 w-9 md:hidden">
        <button onClick={() => setOpenMenu(true)} aria-label="Abrir menu">
          <RxHamburgerMenu size="28" />
        </button>
      </div>

      <div
        className={`${!openMenu ? 'pointer-events-none opacity-0' : 'pointer-events-auto opacity-100'} fixed left-0 top-0 z-20 h-full w-full bg-black/30 transition-all duration-200 ease-out md:hidden`}
      >
        <nav
          className={`${!openMenu ? '-left-[100%]' : 'left-0'} relative h-full w-72 overflow-y-auto bg-white pb-8 text-[0.88rem] text-primary transition-all duration-200 ease-out`}
        >
          <header className="relative px-2 pb-1 pt-2">
            <Logo />

            <button className="absolute right-4 top-5" onClick={() => setOpenMenu(false)} aria-label="Fecha menu">
              <CgCloseO size={22} className="text-secondary" />
            </button>
          </header>

          <hr className="mt-1" />

          <Accordion title="Loterias">
            <ul className="text-sm leading-10">
              {LotteriesList.length > 0 &&
                LotteriesList.map((item) => (
                  <li key={`menu-mobile-lotteries-${item.id}`}>
                    <Link href={`/${item.slug}/resultados`} className="hover:text-secondary">
                      {item.title}
                    </Link>
                  </li>
                ))}
            </ul>
          </Accordion>

          <Accordion title="Especiais">
            <ul className="text-sm leading-10">
              {SpecialLotteriesList.length > 0 &&
                SpecialLotteriesList.map((item) => (
                  <li key={`menu-mobile-special-lotteries-${item.id}`}>
                    <Link href={`/${item.slug}/resultados`} className="hover:text-secondary">
                      {item.title}
                    </Link>
                  </li>
                ))}
            </ul>
          </Accordion>

          <Accordion title="Ferramentas">
            <ul className="text-sm leading-10">
              <li>Teste seu palpite</li>
              <li>Ferramenta 2</li>
              <li>Ferramenta 3</li>
            </ul>
          </Accordion>

          <Accordion title="Notícias" url="/noticias" />

          <Accordion title="Fale Conosco" url="/fale-conosco" />
        </nav>
      </div>
    </>
  )
}

export default MenuMobile
