import Link from 'next/link'
import React from 'react'
import { FaHome, FaRegNewspaper } from 'react-icons/fa'
import { GiNorthStarShuriken, GiNightSleep } from 'react-icons/gi'
import { TbMapHeart } from 'react-icons/tb'

const Footer = () => {
  return (
    <footer className="fixed bottom-0 w-full bg-background">
      <div className="mx-auto flex min-h-20 max-w-[400px] items-center justify-evenly pb-1">
        <div className="rounded-full bg-slate-800 p-3">
          <Link href="/">
            <FaHome size={20} />
          </Link>
        </div>

        <div className="rounded-full bg-slate-900 p-3">
          <Link href="/horoscopo">
            <GiNorthStarShuriken size={20} />
          </Link>
        </div>

        <div className="rounded-full bg-slate-900 p-3">
          <Link href="/sonhos">
            <GiNightSleep size={20} />
          </Link>
        </div>

        <div className="rounded-full bg-slate-900 p-3">
          <Link href="/noticias">
            <FaRegNewspaper size={20} />
          </Link>
        </div>

        <div className="rounded-full bg-slate-900 p-3">
          <Link href="/mapa-astral">
            <TbMapHeart size={20} />
          </Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer
