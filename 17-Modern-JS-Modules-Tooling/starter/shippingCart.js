// Exporting Module
console.log(`Exporting Module`)

const shippingCost = 10;
export const cart = []

export const addTocart = function(product, quantity){
    cart.push({product, quantity})
    console.log(`${product} of  ${quantity} quantity has been added to cart `)
}

export {totalPrice, totalquantity as TQ} 
const totalPrice = 50;
const totalquantity = 10


export default function(product, quantity){
    cart.push({product, quantity})
    console.log(`${product} of  ${quantity} quantity has been added to cart `)
}




