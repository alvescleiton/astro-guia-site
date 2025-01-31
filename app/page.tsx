import React from 'react'

import ContainerPage from '@/components/layout/ContainerPage'
import Link from 'next/link'

const Home = () => {
  return (
    <ContainerPage>
      <div
        className="flex h-36 w-full items-center justify-center bg-slate-800 bg-right"
        style={{
          backgroundImage: 'url(/assets/banners/banner-horoscopo.png)',
        }}
      ></div>

      <div className="mt-4 grid grid-cols-2 gap-3">
        <div className="flex min-h-16 items-center justify-center rounded-lg bg-red-900 text-sm">
          <Link href="/oraculo/combinacao-de-nomes" prefetch={false} className="text-center">
            Combinação de Nomes
          </Link>
        </div>
        <div className="flex min-h-16 items-center justify-center rounded-lg bg-purple-900 text-sm">
          <Link href="/oraculo/combinacao-de-signos" prefetch={false} className="text-center">
            Combinação de Signos
          </Link>
        </div>
        <div className="flex min-h-16 items-center justify-center rounded-lg bg-blue-900 text-sm">
          <Link href="/oraculo/numerologia-do-nome" prefetch={false} className="text-center">
            Numerologia do Nome
          </Link>
        </div>
        <div className="flex min-h-16 items-center justify-center rounded-lg bg-amber-900 text-sm">
          <Link href="/oraculo/numerologia-do-nascimento" prefetch={false} className="text-center">
            Numerologia do Nascimento
          </Link>
        </div>
      </div>
    </ContainerPage>
  )
}

export default Home
