// Importing Module
console.log(`Importing Modules`)


import add,{addTocart, cart, totalPrice as TP, TQ} from './shippingCart.js'
// addTocart('apples',10)
// console.log(TP, TQ)

// import * as ShoppingCard from './shippingCart.js'
// ShoppingCard.addTocart('bread',12)
// console.log(ShoppingCard.totalPrice)


// import add, {addTocart,totalPrice,TQ} from './shippingCart.js'


// import add, {cart} from './shippingCart.js'
// add('pizza', 5)
// add('bread', 10)
// add('burger', 15)
// console.log(cart)







// TOP LEVEL AWAIT

// const res = await fetch(`https://jsonplaceholder.typicode.com/posts`)
// const data = await res.json()
// console.log(data)




// const getLastPost = async function(){
// const res = await fetch(`https://jsonplaceholder.typicode.com/posts`)
// const data = await res.json()
// console.log(data)

// return {title : data.at(-1).title, text : data.at(-1).body}
// }

// // const lastPost = getLastPost()
// // console.log(lastPost)
// // lastPost.then(last=> console.log(last))

// const lastPost2 = await getLastPost()
// console.log(lastPost2)




// REQUIRE  ----> importing 
// export.logging = function(message){
//     console.log(message)
// }

// const {log} = require('./shippingCart')





// npm library import

// import  cloneDeep  from './node_modules/lodash-es/cloneDeep.js'

import cloneDeep from 'lodash-es'

const state = {
    cart : [
        {product : 'bread', quantity : 2},
        {product : 'jam', quantity : 5}
    ],
    user : {loggedIn : true}
}

const state_clone = Object.assign({},state)
const state_clone_deep = cloneDeep(state)

state.user.loggedIn = false

console.log(state)

console.log(state_clone)

console.log(state_clone_deep)




