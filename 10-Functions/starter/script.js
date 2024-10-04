'use strict';



// Default parameters

// const booking = [] 
// const createBooking = function(flight,numPassengers=1,price=200*numPassengers){
//     const bookings = {
//                 flight,numPassengers,price
//     }
//     console.log(bookings)
//     booking.push(bookings)
// }

// createBooking('A23pn',1,400)
// createBooking('ak147',2)

















// passing primitive value vs reference type value as argument in function 

// const namee = 'hrushikesh'
// const details = {
//     namee:'hrushikesh',
//     passposrt: 9121534628
// }

// const checkin = function(Name,info){
//     Name = 'harshaVardhan'
//     info.passposrt = 'mr'+String(9989050193)
//     console.log(info)
// }
// checkin(namee,details)
// console.log(namee,details)         //hrushikesh,   mr998950193




 















// //HIGHER ORDER FUNCTIONS AND CALL BACK FUNCTIONS

// const singleline = function (str){
//     return str.replaceAll(' ','').toLowerCase();
// }


// const UpperCase = function(str){
//     return str.toUpperCase()
// }

// const High_function = function(str,fn){
//     console.log(`Original String : ${str}`)
//     console.log(`Transfered string : ${fn(str)}`)
//     console.log(`name of function : ${fn.name}`)
// }
// High_function('Hello This IS HrushikesH',UpperCase)
// High_function('Iam a SOFTWARE DEVELOPER IN IT', singleline)


// const consolling = function(){
//     console.log('🔴🔴')
// }
// document.body.addEventListener('click',consolling)
















// FUNCTIONS RETURNING FUNCTIONS
// const greet = function(str){
//     return function(name){
//         console.log(`${str},${name}`)
//     }
// }
// const greeting = greet('hey')
// greeting('jonas')

// greet('hey')('jonas')


// // challenge
// const greetarr = str => namee => console.log(`${str}, ${namee}`)
// greetarr('hey')('hrushikesh') 














