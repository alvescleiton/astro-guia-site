import React from 'react'

import Subtitle from '@/components/common/Subtitle'
import Title from '@/components/common/Title'
import ContainerPage from '@/components/layout/ContainerPage'
import ResultCardLottery from '@/components/Result/ResultCard'
import { ResultCard } from '@/types/result'
import { LotteriesId, LotteriesList } from '@/types/lotteries'

const lottery = LotteriesList.find((l) => l.id == LotteriesId.MegaSena)

const megaSena: ResultCard = {
  id: lottery?.id,
  contestDate: new Date('2024-11-16 00:00:00'),
  contestNumber: 2462,
  heartTeam: null,
  luckyClover: [],
  luckyMonth: null,
  prize: 3523463.46,
  dozensSecondDraw: [],
  dozens: ['01', '02', '03', '04', '05', '06'],
  prizeApportionment: [
    {
      description: '6 acertos',
      prizeTier: 1,
      numberOfWinners: 0,
      prizeAmount: 0.0,
    },
    {
      description: '5 acertos',
      prizeTier: 2,
      numberOfWinners: 44,
      prizeAmount: 50046.4,
    },
    {
      description: '4 acertos',
      prizeTier: 3,
      numberOfWinners: 3878,
      prizeAmount: 811.18,
    },
  ],
}

const Home = () => {
  return (
    <ContainerPage>
      <div className="mx-auto mb-6 mt-3 h-28 w-4/5 bg-gray-300"></div>

      <Title>Últimos resultados</Title>
      <Subtitle>Confira abaixo quais foram os últimos resultados das loterias</Subtitle>

      <div className="mt-6 flex flex-col gap-5">
        <ResultCardLottery lotteryResult={megaSena} />
        <ResultCardLottery lotteryResult={megaSena} />
        <ResultCardLottery lotteryResult={megaSena} />
        <ResultCardLottery lotteryResult={megaSena} />
        <ResultCardLottery lotteryResult={megaSena} />
      </div>
    </ContainerPage>
  )
}

export default Home
