

function getTotal(
    unitPrice: number,
    quantity: number,
    discount: number
): number {
    const priceWithoutDiscount = unitPrice * quantity;
    const discountAmount = priceWithoutDiscount * discount;
    return priceWithoutDiscount - discountAmount;
}


let total: number = getTotal(500, 1, 0.1);
console.log('total', total);
