const CURRENCY_FORMATTER_USD = new Intl.NumberFormat(undefined, { currency: "USD", style: "currency" },)
const CURRENCY_FORMATTER_VIETNAMESE = new Intl.NumberFormat(undefined, { currency: "VND", style: "currency" },)

export function formatCurrency(number: number, type?: number) {
    return type != undefined ? CURRENCY_FORMATTER_VIETNAMESE.format(number) : CURRENCY_FORMATTER_USD.format(number);
}