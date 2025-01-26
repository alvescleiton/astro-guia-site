'use client'

import Link from 'next/link'
import React, { useState } from 'react'
import { IoIosArrowForward } from 'react-icons/io'

interface AccordionProps {
  title: string
  url?: string
  children?: React.ReactNode
}

const Accordion = ({ children, title, url }: AccordionProps) => {
  const [open, setOpen] = useState(false)

  return (
    <ul className="mt-2">
      <li className="border-b border-black/5 text-sm leading-10">
        <div className="flex items-center justify-between px-4 py-2">
          {!!url && url?.length > 0 ? (
            <Link href={url} className="flex w-full items-center justify-between">
              {title}{' '}
              <IoIosArrowForward
                className={`transition-all duration-300 ease-out ${open ? 'rotate-90' : 'rotate-0'} `}
              />
            </Link>
          ) : (
            <div className="flex w-full items-center justify-between" onClick={() => setOpen(!open)}>
              {title}{' '}
              <IoIosArrowForward
                className={`transition-all duration-300 ease-out ${open ? 'rotate-90' : 'rotate-0'} `}
              />
            </div>
          )}
        </div>
        {!!open && <div className="bg-black/5 px-4 py-2">{children}</div>}
      </li>
    </ul>
  )
}

export default Accordion
