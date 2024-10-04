'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

/////////////////////////////////////////////////
// Data

// DIFFERENT DATA! Contains movement dates, currency and locale

const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    '2023-11-18T21:31:17.178Z',
    '2023-12-23T07:42:02.383Z',
    '2023-09-28T09:15:04.904Z',
    '2023-08-01T10:17:24.185Z',
    '2023-07-08T14:11:59.604Z',
    '2023-07-27T17:01:17.194Z',
    '2023-11-11T23:36:17.929Z',
    '2023-11-12T10:51:36.790Z',
    '2023-11-21T09:12:18.333Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT', // de-DE
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    '2022-11-01T13:15:33.035Z',
    '2022-11-30T09:48:16.867Z',
    '2022-12-25T06:04:23.907Z',
    '2023-01-25T14:18:46.235Z',
    '2023-02-05T16:33:06.386Z',
    '2023-04-10T14:43:26.374Z',
    '2023-06-25T18:49:59.371Z',
    '2023-07-26T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const accounts = [account1, account2];

/////////////////////////////////////////////////
// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
// Functions

const formatMovementDate = function(date){

        const calcDaysPassed = (date1, date2) => Math.round(Math.abs( date2-date1) / (1000*60*60*24))
        
        const daysPassed = calcDaysPassed(new Date(), date)
        console.log(daysPassed)

        if(daysPassed == 0) return 'Today'
        if(daysPassed == 1) return 'yesterday'
        if(daysPassed <= 7) return `${daysPassed} days ago`;
        else {
          const day = `${date.getDate()}`.padStart(2,0)
          const month  = `${date.getMonth() + 1}`.padStart(2,0)
          const year = date.getFullYear()
          return `${day}/${month}/${year}`
        }

        

        
}

const display_movements = function(acc, slice=false){

  containerMovements.innerHTML = ''
  
  const sorted_movs = slice ? acc.movements.slice().sort((a,b)=>a-b) : acc.movements
  
  sorted_movs.forEach(function(mov, i ){
        const type = mov>0? 'deposit':'withdrawal' 

        const date = new Date(acc.movementsDates[i])
        const displayDate = formatMovementDate(date)
        

        const html = `
        <div class="movements__row">
          <div class="movements__type movements__type--${type}">${i+1} ${type}</div>
          <div class="movements__date">${displayDate}</div>
          <div class="movements__value">${mov.toFixed(2)}</div>
        </div>
              `
        containerMovements.insertAdjacentHTML('afterbegin',html)      
      })
}



// ACCOUNT BALANCE
const cal_display_balance = function(acc){
   acc.balance = acc.movements.reduce((acc,mov)=>acc+mov,0)
  labelBalance.textContent = `${acc.balance.toFixed(2)} INR`

}



// DISPLAY SUMMARY
const calc_Display_summary_IN = function(acc){
     const income = acc.movements.filter(mov=>mov>0).reduce((acc,mov)=>acc+mov,0)
     labelSumIn.textContent = `${income.toFixed(2)} INR`



     const out_gng= acc.movements.filter(mov=>mov<0).reduce((acc,mov)=>acc+mov,0)
  labelSumOut.textContent= `${Math.abs(out_gng.toFixed(2))}
   INR`


    const interest = acc.movements.filter(mov=>mov>0)
    .map(deposit=>deposit*acc.interestRate/100)
    .filter((int,i,arr)=>{
      // console.log(arr)
      return i>=1
    })
    .reduce((acc,int)=>acc+int)
    labelSumInterest.textContent  = `${interest.toFixed(2)} INR`

}






// creating usernames for accounts objects(above) using map methods
const create_Usernames = function(accs){
  accs.forEach(function(acc){
    acc.username  = acc.owner.toLowerCase().split(' ').map(word => word[0]).join('')
  })
}
create_Usernames(accounts)
// console.log(accounts)


const updateUI = function(acc){
   // Display movements
   display_movements(acc)
   
   // Display balance
   cal_display_balance(acc)

   // Display summary
   calc_Display_summary_IN(acc)
}


// EVENT HANDLERS
let currentAccount





// Fake logged in to not login for several times
// currentAccount = account1;
// updateUI(currentAccount)
// containerApp.style.opacity= 100;

const now = new Date()
const day = `${now.getDate()}`.padStart(2,0)
const month  = `${now.getMonth() + 1}`.padStart(2,0)
const year = now.getFullYear()
const hour = now.getHours()
const minutes = now.getMinutes()
labelDate.textContent  = `${day}/${month}/${year},   ${hour}:${minutes}`







// USER LOGIN 
btnLogin.addEventListener('click',function(e){
  e.preventDefault()
  currentAccount = accounts.find(acc=>acc.username ===inputLoginUsername.value)
  console.log(currentAccount)


  if(currentAccount?.pin === Number(inputLoginPin.value)){

    // Display UI and message
    labelWelcome.textContent = `Wecome Mr.${currentAccount.owner.split(' ')[0]}`
    containerApp.style.opacity = 100


    const now = new Date()
    const day = `${now.getDate()}`.padStart(2,0)
    const month  = `${now.getMonth() + 1}`.padStart(2,0)
    const year = now.getFullYear()
    const hour = `${now.getHours()}`.padStart(2,0)
    const minutes = `${now.getMinutes()}`.padStart(2,0)
    labelDate.textContent  = `${day}/${month}/${year},   ${hour}:${minutes}`


    // clearing login INputs
    inputLoginUsername.value = inputLoginPin.value =''
    inputLoginPin.blur()

   updateUI(currentAccount)
  }
})




btnTransfer.addEventListener('click',function(e){
  e.preventDefault()
  const amount = Number(inputTransferAmount.value)
  const receiverAcc=accounts.find(acc=>acc.username === inputTransferTo.value)
  console.log(amount,receiverAcc)
  
  // clear transfer input details
  inputTransferAmount.value = inputTransferTo.value = ''


  if(amount>0 && receiverAcc && currentAccount.balance >= amount && currentAccount.username !== receiverAcc?.username){
    
    // Doing Transfer
    currentAccount.movements.push(-amount)
    receiverAcc.movements.push(amount)

    // Adding new dates
    currentAccount.movementsDates.push(new Date().toISOString)
    receiverAcc.movementsDates.push(new Date().toISOString)

    // Update UI
    updateUI(currentAccount)
  }

})





btnLoan.addEventListener('click',function(e){
  e.preventDefault()
  const amount = Math.floor(inputLoanAmount.value)

  if(amount>0 && currentAccount.movements.some(mov=>mov>=amount*0.1)){
    
    // ADD movement
    currentAccount.movements.push(amount)

    // adding loan date
    currentAccount.movementsDates.push(new Date().toISOString())


    // update UI
    updateUI(currentAccount)
  }
  inputLoanAmount.value =''
})








 


btnClose.addEventListener('click',function(e){
  e.preventDefault()
  if(inputCloseUsername.value===currentAccount.username && Number(inputClosePin.value) ===currentAccount.pin){

    
    const index = accounts.findIndex(acc=>acc.username==currentAccount.username)

    // DELETE ACCOUNT
    accounts.splice(index,1)

    // HIDE UI
    containerApp.style.opacity=0
  }
  inputCloseUsername.value = inputClosePin.value = ''
})



btnSort.addEventListener('click',function(e){
  e.preventDefault()
  display_movements(currentAccount.movements,!sorted)
  sorted = !sorted
})


/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES








// // Coversion of string to number 
// console.log(Number(23))
// console.log(+'23')










// // Parseint and parseFloat methods
// console.log(+(parseInt('23ex')))
// console.log(+(parseFloat('2.3fx')))









// // isNan and finite methods
// console.log(isNaN(3/10))
// console.log(Number.isNaN('23ex'))


// console.log(isFinite(23))
// console.log(isFinite(parseInt('23ex')))
// console.log(isFinite(parseFloat('5.6ex')))
// console.log(isFinite(20/0))




// // squareRoot and cube root
// console.log(Math.sqrt(36))
// console.log(25**(1/2))
// console.log(8**(1/3))





// console.log(Math.max(1,2,3,4,10,3,5))           //10
// console.log(Math.max(1,2,3,4,'10',3,5))         //10
// console.log(Math.max(1,2,3,4,'10ex',3,5))       //NaN


// console.log(Math.min(1,2,3,4,5))                //1
// console.log(Math.min('1',3,2,4,5,33))           //NaN



// console.log(Math.PI *Number(parseInt('10es')**2))


// console.log(Math.trunc(Math.random()*6) + 1)  //generate random between 1 and 6



  
// const randomInt = (max,min)=>{
//   return Math.trunc(Math.random() * (max-min) + 1 ) + min
// }
// console.log(randomInt(20,10))




// // Rounding off 
// console.log(Math.trunc(25.6))
// console.log(Math.floor(25.6))
// console.log(Math.floor(25.9))
// console.log(Math.floor('25.9'))
// console.log(Math.ceil(32.2))
// console.log(Math.round(32.2))
// console.log(Math.round(32.8))




// // Rouding Decimals
// console.log((0.6).toFixed(2))
// console.log((0.3678).toFixed(1))
// console.log((1.566666).toFixed(4))





// const isEven = n => n%2===0;
// console.log(isEven(23))
// console.log(isEven(45))
// console.log(isEven(44))












// //Changing of movements row colors 

// labelBalance.addEventListener('click',function() {
//     [...document.querySelectorAll('.movements__row')].forEach(function(row,i){
//       if(i%2===0) row.style.backgroundColor = 'orange';
//       if(i%3===0) row.style.backgroundColor = 'blue';
//     })
// })






// // Numeric seperators  for better understanding
// console.log(3_000)
// console.log(45_000)

// const PI = 3.14_15
// console.log(PI)

// console.log(Number('23_000')) //does not work changing to number 
// console.log(parseInt('23_45')) //23








// // Creating dates 

// const curr_date = new Date();
// console.log(curr_date)


//  console.log(new Date('August 30 2023 11:01:22'))
//  console.log(new Date('3 december 2021'))

// console.log(new Date(2030, 6, 2, 16, 2, 30))  // july 2nd 2030


// console.log(new Date(account1.movementsDates[0]))

// console.log(new Date(0))
// console.log(new Date(3*24*60*60*1000)) //3 days after above date 









// // Working with dates
// const future = new Date(2030, 6, 2, 16, 2, 30)
// console.log(future.getFullYear())
// console.log(future.getMonth())
// console.log(future.getDate())
// console.log(future.getHours())
// console.log(future.getMinutes())
// console.log(future.getSeconds())
// console.log(future.toISOString())
// console.log(future.getTime())

// console.log(new Date(1909218750000))

// console.log(Date.now()) //timestamp  

// future.setFullYear(2040)
// console.log(future)



// const future = new Date(2030, 6, 2, 16, 2, 30)
// console.log(+future)
// console.log(Number(future))


// const calcDaysPassed = (date1, date2) => Math.abs((date2-date1) / (1000*60*60*24)) 

// const days1 = calcDaysPassed(new Date(2037,8,12), new Date(2037,8,2))
// console.log(days1)




