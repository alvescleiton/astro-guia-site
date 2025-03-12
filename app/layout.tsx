import React from 'react'
import dynamic from 'next/dynamic'
import type { Metadata } from 'next'
import './globals.css'

import { Montserrat } from 'next/font/google'

const DynamicHeader = dynamic(() => import('@/components/layout/Header'), {
  loading: () => <div className="h-11 w-full bg-gray-300"></div>,
})

const DynamicFooter = dynamic(() => import('@/components/layout/Footer'), {
  loading: () => <div className="h-11 w-full bg-gray-300"></div>,
})

const font = Montserrat({
  weight: ['300', '400', '600', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Astro Guia',
  description: 'O maior portal esotérico do Brasil',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Astro Guia | O maior portal esotérico do Brasil" />
        <meta property="og:site_name" content="Astro Guia" />
        <meta property="og:image" content={`${process.env.NEXT_PUBLIC_DOMAIN}/assets/logo.webp`} />
        <meta property="og:image:alt" content="Astro Guia | O maior portal esotérico do Brasil" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content="Astro Guia | O maior portal esotérico do Brasil" />
        <meta property="twitter:description" content="Astro Guia | O maior portal esotérico do Brasil" />
        <meta property="twitter:image" content={`${process.env.NEXT_PUBLIC_DOMAIN}/assets/logo.webp`} />
        <meta property="twitter:image:alt" content="Astro Guia | O maior portal esotérico do Brasil" />

        <link rel="icon" type="image/x-icon" href="/favicon/favicon-32x32.ico" />
        <link rel="apple-touch-icon" sizes="32x32" href="/favicon/favicon-32x32.ico" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className={`${font.className} antialiased`}>
        <DynamicHeader />
        <main>{children}</main>
        <DynamicFooter />
      </body>
    </html>
  )
}
