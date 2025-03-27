import React from 'react'
import Image from 'next/image'
import ContainerPage from '@/components/layout/ContainerPage'
import Link from 'next/link'

const Home = () => {
  return (
    <ContainerPage>
      <div className="container mx-auto">
        <div className="relative flex h-36 w-full items-center justify-center bg-right">
          <Image
            src="/assets/banners/banner-horoscopo.webp"
            alt="Banner Horóscopo"
            fill
            style={{ objectFit: 'cover', objectPosition: 'right' }}
            priority
          />
        </div>
      </div>

      <div className="mt-6 bg-primary-dark pb-6 pt-4">
        <div className="container mx-auto mb-6">
          <h1 className="text-2xl font-bold">Oráculos</h1>
          <p className="mt-2 text-sm">
            Explore a combinação de nomes e signos, e descubra os significados da numerologia do seu nome e nascimento.
          </p>
        </div>

        <div className="container mx-auto grid grid-cols-2 gap-4 md:grid-cols-4">
          <div className="flex min-h-16 items-center justify-center rounded-lg bg-background py-4 text-xs md:text-sm">
            <Link
              href="/oraculo/combinacao-de-nomes"
              prefetch={false}
              className="flex h-full w-full flex-col items-center justify-center gap-3 text-center"
            >
              <Image
                src="/assets/oracle/combinacao-de-nomes.webp"
                alt="Ícone para combinação de nomes"
                width={60}
                height={60}
                loading="lazy"
              />
              Combinação de Nomes
            </Link>
          </div>
          <div className="flex min-h-16 items-center justify-center rounded-lg bg-background py-4 text-xs md:text-sm">
            <Link
              href="/oraculo/combinacao-de-signos"
              prefetch={false}
              className="flex h-full w-full flex-col items-center justify-center gap-3 text-center"
            >
              <Image
                src="/assets/oracle/combinacao-de-signos.webp"
                alt="Ícone para combinação de signos"
                width={60}
                height={60}
                loading="lazy"
              />
              Combinação de Signos
            </Link>
          </div>
          <div className="flex min-h-16 items-center justify-center rounded-lg bg-background py-4 text-xs md:text-sm">
            <Link
              href="/oraculo/numerologia-do-nome"
              prefetch={false}
              className="flex h-full w-full flex-col items-center justify-center gap-3 text-center"
            >
              <Image
                src="/assets/oracle/numerologia-do-nome.webp"
                alt="Ícone para numerologia do nome"
                width={60}
                height={60}
                loading="lazy"
              />
              Numerologia do Nome
            </Link>
          </div>
          <div className="flex min-h-16 items-center justify-center rounded-lg bg-background py-4 text-xs md:text-sm">
            <Link
              href="/oraculo/numerologia-do-nascimento"
              prefetch={false}
              className="flex h-full w-full flex-col items-center justify-center gap-3 text-center"
            >
              <Image
                src="/assets/oracle/numerologia-do-nascimento.webp"
                alt="Ícone para numerologia do nascimento"
                width={60}
                height={60}
                loading="lazy"
              />
              Numerologia do Nascimento
            </Link>
          </div>
        </div>
      </div>
    </ContainerPage>
  )
}

export default Home
