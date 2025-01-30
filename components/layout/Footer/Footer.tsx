import Link from 'next/link'
import React, { Suspense, lazy } from 'react'

const FaHome = lazy(() => import('react-icons/fa').then((module) => ({ default: module.FaHome })))
const FaRegNewspaper = lazy(() => import('react-icons/fa').then((module) => ({ default: module.FaRegNewspaper })))
const GiNorthStarShuriken = lazy(() =>
  import('react-icons/gi').then((module) => ({ default: module.GiNorthStarShuriken })),
)
const GiNightSleep = lazy(() => import('react-icons/gi').then((module) => ({ default: module.GiNightSleep })))
const TbMapHeart = lazy(() => import('react-icons/tb').then((module) => ({ default: module.TbMapHeart })))

const Footer = () => {
  return (
    <footer className="fixed bottom-0 w-full bg-background">
      <Suspense fallback={<div>Loading...</div>}>
        <div className="mx-auto flex min-h-20 max-w-[400px] items-center justify-evenly pb-1">
          <div className="rounded-full bg-slate-800 p-3">
            <Link href="/" aria-label="Home">
              <FaHome size={20} aria-hidden="true" />
            </Link>
          </div>

          <div className="rounded-full bg-slate-900 p-3">
            <Link href="/horoscopo" prefetch={false} aria-label="Horóscopo">
              <GiNorthStarShuriken size={20} aria-hidden="true" />
            </Link>
          </div>

          <div className="rounded-full bg-slate-900 p-3">
            <Link href="/sonhos" prefetch={false} aria-label="Sonhos">
              <GiNightSleep size={20} aria-hidden="true" />
            </Link>
          </div>

          <div className="rounded-full bg-slate-900 p-3">
            <Link href="/noticias" prefetch={false} aria-label="Notícias">
              <FaRegNewspaper size={20} aria-hidden="true" />
            </Link>
          </div>

          <div className="rounded-full bg-slate-900 p-3">
            <Link href="/mapa-astral" prefetch={false} aria-label="Mapa Astral">
              <TbMapHeart size={20} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </Suspense>
    </footer>
  )
}

export default Footer
