import { LotteriesList, SpecialLotteriesList } from '@/types/lotteries'
import Link from 'next/link'
import React from 'react'

import { FaInstagram } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer>
      <div className="container mx-auto py-6 text-xs leading-8 text-primary md:text-sm md:leading-8">
        <div className="flex w-full flex-col justify-between sm:flex-row">
          <div className="mb-6 max-w-80">
            <h3 className="font-semibold uppercase text-secondary">Loterias</h3>
            <ul className="columns-2">
              {LotteriesList.length > 0 &&
                LotteriesList.map((item) => (
                  <li className="mr-3" key={`footer-lotteries-${item.id}`}>
                    <Link href={`/${item.slug}/resultados`} className="hover:text-secondary">
                      {item.title}
                    </Link>
                  </li>
                ))}
            </ul>
          </div>

          <div className="mb-6">
            <h3 className="font-semibold uppercase text-secondary">Especiais</h3>
            <ul>
              {SpecialLotteriesList.length > 0 &&
                SpecialLotteriesList.map((item) => (
                  <li key={`footer-special-lotteries-${item.id}`}>
                    <Link href={`/${item.slug}/resultados`} className="hover:text-secondary">
                      {item.title}
                    </Link>
                  </li>
                ))}
            </ul>
          </div>

          <div className="mb-6">
            <h3 className="font-semibold uppercase text-secondary">Ferramentas</h3>
            <ul>
              <li>Teste seu palpite</li>
              <li>Ferramenta 2</li>
              <li>Ferramenta 3</li>
            </ul>
          </div>

          <div className="mb-6">
            <h3 className="font-semibold uppercase text-secondary">Saiba Mais</h3>
            <ul>
              <li>
                <Link href="/noticias" className="hover:text-secondary">
                  Notícias
                </Link>
              </li>
              <li>
                <Link href="/fale-conosco" className="hover:text-secondary">
                  Fale Conosco
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col-reverse justify-between border-t border-black/10 pt-6 text-center">
          <div className="mt-4 text-xs">
            Copyright © {new Date().getFullYear()} Portal de Loterias - Todos os direitos reservados
          </div>

          <div className="flex items-center justify-center gap-2">
            <h3 className="text-xs font-semibold uppercase text-secondary">Redes Sociais</h3>
            <FaInstagram size="18" title="Instagram" />
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
