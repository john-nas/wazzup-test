export function formatPrice(priceInCents: number, currency: string) {
  const hasCents = priceInCents % 100 !== 0

  return new Intl.NumberFormat('en-AU', {
    style: 'currency',
    currency,
    minimumFractionDigits: hasCents ? 2 : 0,
    maximumFractionDigits: hasCents ? 2 : 0,
  }).format(priceInCents / 100)
}
