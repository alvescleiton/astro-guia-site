import { LotteriesId, LotteriesName } from './lotteries'

export interface ResultCard {
  id?: LotteriesId
  name?: LotteriesName
  contestDate?: Date
  contestNumber?: number
  prize: number
  dozens: string[]
  dozensSecondDraw: string[]
  luckyClover: string[]
  heartTeam?: string | null
  luckyMonth?: string | null
  prizeApportionment: PrizeApportionment[]
}

interface PrizeApportionment {
  description: string
  prizeTier: number
  numberOfWinners: number
  prizeAmount: number
}
