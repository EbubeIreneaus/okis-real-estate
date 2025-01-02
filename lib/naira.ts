export function Naira(val: number){
    return new Intl.NumberFormat('en-NG', {
        currency: 'NGN',
        style: 'currency',
        maximumFractionDigits: 2,
    }).format(val)
}