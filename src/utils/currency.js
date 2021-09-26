const formatter = new Intl.NumberFormat('de-DE', { currency: 'EUR', style: 'currency' })

export function currency(value) {
    return formatter.format(value)
}