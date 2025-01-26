import React from 'react'

import { LotteriesList } from '@/types/lotteries'
import { ResultCard } from '@/types/result'

import { formatMoney } from '@/utils/money'

interface ResultCardLotteryProps {
  lotteryResult: ResultCard
}

const ResultCardLottery = ({ lotteryResult }: ResultCardLotteryProps) => {
  const lottery = LotteriesList.find((l) => l.id == lotteryResult.id)

  if (!lottery) return

  return (
    <div className={`rounded-2xl bg-${lottery.slug} p-1`}>
      <header className="flex h-9 items-center justify-between px-2 pb-1">
        <h2 className="text-sm font-semibold text-white">{lottery.title}</h2>
        <div className="flex gap-3 text-sm">
          <div className="text-gray-200">
            Prêmio: <strong className="font-semibold">{formatMoney(lotteryResult.prize)}</strong>
          </div>
        </div>
      </header>
      <div className="flex rounded-xl bg-white p-5">
        <div className="flex flex-1 flex-col items-center">
          <div className="mb-3 mt-2 flex gap-3 text-sm">
            <div className="">
              Sorteio: <strong className="font-semibold">{lotteryResult.contestDate?.getDate()}</strong>
            </div>
            <div className="">
              Concurso: <strong className="font-semibold">{lotteryResult.contestNumber}</strong>
            </div>
          </div>
          <div className="flex gap-2">
            <div className={`bg-${lottery.slug} h-8 w-8 rounded-full text-center leading-8 text-white`}>01</div>
            <div className={`bg-${lottery.slug} h-8 w-8 rounded-full text-center leading-8 text-white`}>02</div>
            <div className={`bg-${lottery.slug} h-8 w-8 rounded-full text-center leading-8 text-white`}>03</div>
            <div className={`bg-${lottery.slug} h-8 w-8 rounded-full text-center leading-8 text-white`}>04</div>
            <div className={`bg-${lottery.slug} h-8 w-8 rounded-full text-center leading-8 text-white`}>05</div>
            <div className={`bg-${lottery.slug} h-8 w-8 rounded-full text-center leading-8 text-white`}>06</div>
          </div>
        </div>

        <div className="flex flex-1 justify-center text-sm">
          <table width="80%" className="leading-7">
            <thead className="border-b border-b-slate-200">
              <tr>
                <th align="left">Premiação</th>
                <th align="center">Ganhadores</th>
                <th align="right">Prêmio</th>
              </tr>
            </thead>
            <tbody>
              {lotteryResult.prizeApportionment.map((p) => {
                return (
                  <tr key={`prizeApportionment-${lotteryResult.contestNumber}-${p.prizeTier}`}>
                    <td align="left">{p.description}</td>
                    <td align="center">{p.numberOfWinners}</td>
                    <td align="right">{formatMoney(p.prizeAmount)}</td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default ResultCardLottery
