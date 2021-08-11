const formatter = new Intl.NumberFormat('de-DE', { currency: 'EUR', style: 'currency' })

export function currency(val) {
    return formatter.format(val)
}