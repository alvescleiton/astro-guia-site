import React from 'react'
import Image from 'next/image'
import ContainerPage from '@/components/layout/ContainerPage'
import Link from 'next/link'

const Home = () => {
  return (
    <ContainerPage>
      <div className="container">
        <div className="relative flex h-36 w-full items-center justify-center bg-right">
          <Image
            src="/assets/banners/banner-horoscopo.webp"
            alt="Banner Horoscopo"
            fill
            style={{ objectFit: 'cover', objectPosition: 'right' }}
            priority
          />
        </div>
      </div>

      <div className="container">
        <div className="mt-8">
          <h1 className="mt-4 text-center text-2xl font-bold">Oráculos</h1>
          <p className="mt-2 text-center text-sm">
            Explore a combinação de nomes e signos, e descubra os significados da numerologia do seu nome e nascimento.
          </p>
        </div>
      </div>

      <div className="bg-primary-dark mt-4 flex gap-3 overflow-x-auto scroll-smooth p-4">
        <div className="flex min-h-16 w-[40%] flex-shrink-0 items-center justify-center rounded-lg bg-red-900 text-sm">
          <Link
            href="/oraculo/combinacao-de-nomes"
            prefetch={false}
            className="flex h-full w-full items-center justify-center"
          >
            Combinação de Nomes
          </Link>
        </div>
        <div className="flex min-h-16 w-[40%] flex-shrink-0 items-center justify-center rounded-lg bg-purple-900 text-sm">
          <Link
            href="/oraculo/combinacao-de-signos"
            prefetch={false}
            className="flex h-full w-full items-center justify-center text-center"
          >
            Combinação de Signos
          </Link>
        </div>
        <div className="flex min-h-16 w-[40%] flex-shrink-0 items-center justify-center rounded-lg bg-blue-900 text-sm">
          <Link
            href="/oraculo/numerologia-do-nome"
            prefetch={false}
            className="flex h-full w-full items-center justify-center text-center"
          >
            Numerologia do Nome
          </Link>
        </div>
        <div className="flex min-h-16 w-[40%] flex-shrink-0 items-center justify-center rounded-lg bg-amber-900 text-sm">
          <Link
            href="/oraculo/numerologia-do-nascimento"
            prefetch={false}
            className="flex h-full w-full items-center justify-center text-center"
          >
            Numerologia do Nascimento
          </Link>
        </div>
      </div>
    </ContainerPage>
  )
}

export default Home
