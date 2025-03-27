import Link from 'next/link'
import dynamic from 'next/dynamic'
import React from 'react'

const FaHome = dynamic(() => import('react-icons/fa').then((module) => ({ default: module.FaHome })))
const FaRegNewspaper = dynamic(() => import('react-icons/fa').then((module) => ({ default: module.FaRegNewspaper })))
const GiNorthStarShuriken = dynamic(() =>
  import('react-icons/gi').then((module) => ({ default: module.GiNorthStarShuriken })),
)
const GiAbstract007 = dynamic(() => import('react-icons/gi').then((module) => ({ default: module.GiAbstract007 })))
const TbMapHeart = dynamic(() => import('react-icons/tb').then((module) => ({ default: module.TbMapHeart })))

const Footer = () => {
  return (
    <footer className="fixed bottom-0 w-full bg-background">
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
          <Link href="/simpatias" prefetch={false} aria-label="Simpatias">
            <GiAbstract007 size={20} aria-hidden="true" />
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
    </footer>
  )
}

export default Footer
