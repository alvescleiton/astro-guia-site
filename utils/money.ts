export function formatMoney(value: number): string {
  const real = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  })

  return real.format(value)
}
