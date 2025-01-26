// Lotteries
export enum LotteriesId {
  MegaSena = 1,
  DuplaSena = 2,
  Lotomania = 3,
  Quina = 4,
  LoteriaFederal = 5,
  Loteca = 6,
  Lotofacil = 7,
  Timemania = 8,
  DiaDeSorte = 9,
  SuperSete = 10,
  MaisMilionaria = 11,
}

export type LotteriesSlug =
  | 'mega-sena'
  | 'dupla-sena'
  | 'lotomania'
  | 'quina'
  | 'loteria-federal'
  | 'loteca'
  | 'lotofacil'
  | 'timemania'
  | 'dia-de-sorte'
  | 'super-sete'
  | 'mais-milionaria'

export type LotteriesName =
  | 'Mega-Sena'
  | 'Dupla Sena'
  | 'Lotomania'
  | 'Quina'
  | 'Loteria Federal'
  | 'Loteca'
  | 'Lotofácil'
  | 'Timemania'
  | 'Dia de Sorte'
  | 'Super Sete'
  | 'Mais Milionária'

interface Lottery {
  id: LotteriesId
  title: LotteriesName
  slug: LotteriesSlug
}

export const LotteriesList: Lottery[] = [
  {
    id: LotteriesId.MegaSena,
    title: 'Mega-Sena',
    slug: 'mega-sena',
  },
  {
    id: LotteriesId.DuplaSena,
    title: 'Dupla Sena',
    slug: 'dupla-sena',
  },
  {
    id: LotteriesId.Lotomania,
    title: 'Lotomania',
    slug: 'lotomania',
  },
  {
    id: LotteriesId.Quina,
    title: 'Quina',
    slug: 'quina',
  },
  {
    id: LotteriesId.LoteriaFederal,
    title: 'Loteria Federal',
    slug: 'loteria-federal',
  },
  {
    id: LotteriesId.Loteca,
    title: 'Loteca',
    slug: 'loteca',
  },
  {
    id: LotteriesId.Lotofacil,
    title: 'Lotofácil',
    slug: 'lotofacil',
  },
  {
    id: LotteriesId.Timemania,
    title: 'Timemania',
    slug: 'timemania',
  },
  {
    id: LotteriesId.DiaDeSorte,
    title: 'Dia de Sorte',
    slug: 'dia-de-sorte',
  },
  {
    id: LotteriesId.SuperSete,
    title: 'Super Sete',
    slug: 'super-sete',
  },
  {
    id: LotteriesId.MaisMilionaria,
    title: 'Mais Milionária',
    slug: 'mais-milionaria',
  },
]

// Special Lotteries
export enum SpecialLotteriesId {
  DuplaDePascoa = 100,
  QuinaDeSaoJoao = 101,
  LotofacilDaIndependencia = 102,
  MegaDaVirada = 103,
}
export type SpecialLotteriesSlug =
  | 'dupla-de-pascoa'
  | 'quina-de-sao-joao'
  | 'lotofacil-da-independencia'
  | 'mega-da-virada'

export type SpecialLotteriesTitle =
  | 'Dupla de Páscoa'
  | 'Quina de São João'
  | 'Lotofácil da Independência'
  | 'Mega da Virada'

interface SpecialLottery {
  id: SpecialLotteriesId
  title: SpecialLotteriesTitle
  slug: SpecialLotteriesSlug
}

export const SpecialLotteriesList: SpecialLottery[] = [
  {
    id: SpecialLotteriesId.DuplaDePascoa,
    title: 'Dupla de Páscoa',
    slug: 'dupla-de-pascoa',
  },
  {
    id: SpecialLotteriesId.QuinaDeSaoJoao,
    title: 'Quina de São João',
    slug: 'quina-de-sao-joao',
  },
  {
    id: SpecialLotteriesId.LotofacilDaIndependencia,
    title: 'Lotofácil da Independência',
    slug: 'lotofacil-da-independencia',
  },
  {
    id: SpecialLotteriesId.MegaDaVirada,
    title: 'Mega da Virada',
    slug: 'mega-da-virada',
  },
]
