import { formatMoney } from './money'

describe('formatMoney', () => {
  it('should format the number as BRL currency', () => {
    expect(formatMoney(1234.56)).toBe('R$ 1.234,56')
    expect(formatMoney(0)).toBe('R$ 0,00')
    expect(formatMoney(1000000)).toBe('R$ 1.000.000,00')
    expect(formatMoney(-1234.56)).toBe('-R$ 1.234,56')
  })
})
