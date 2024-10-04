'use strict';

////////////////11-Arrays-Bankist/starter/index.html/////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

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



// bankist application 

const display_movements = function(movements, sort=false){

  containerMovements.innerHTML = ''
  
  const sorted_movs = sort ? movements.slice().sort((a,b)=>a-b) : movements
  
  movements.forEach(function(mov, i ){
        const type = mov>0? 'deposit':'withdrawal' 
        const html = `
        <div class="movements__row">
          <div class="movements__type movements__type--${type}">${i+1} ${type}</div>
          <div class="movements__value">${mov}</div>
        </div>
              `
        containerMovements.insertAdjacentHTML('afterbegin',html)      
      })
}



// ACCOUNT BALANCE
const cal_display_balance = function(acc){
   acc.balance = acc.movements.reduce((acc,mov)=>acc+mov,0)
  labelBalance.textContent = `${acc.balance} INR`

}



// DISPLAY SUMMARY
const calc_Display_summary_IN = function(acc){
     const income = acc.movements.filter(mov=>mov>0).reduce((acc,mov)=>acc+mov,0)
     labelSumIn.textContent = `${income} INR`



     const out_gng= acc.movements.filter(mov=>mov<0).reduce((acc,mov)=>acc+mov,0)
  labelSumOut.textContent= `${Math.abs(out_gng)}
   INR`


    const interest = acc.movements.filter(mov=>mov>0)
    .map(deposit=>deposit*acc.interestRate/100)
    .filter((int,i,arr)=>{
      // console.log(arr)
      return i>=1
    })
    .reduce((acc,int)=>acc+int)
    labelSumInterest.textContent  = `${interest} INR`

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
   display_movements(acc.movements)
   
   // Display balance
   cal_display_balance(acc)

   // Display summary
   calc_Display_summary_IN(acc)
}


// EVENT HANDLERS

// USER LOGIN 
let currentAccount
btnLogin.addEventListener('click',function(e){
  e.preventDefault()
  currentAccount = accounts.find(acc=>acc.username ===inputLoginUsername.value)
  console.log(currentAccount)


  if(currentAccount?.pin === Number(inputLoginPin.value)){

    // Display UI and message
    labelWelcome.textContent = `Wecome Mr.${currentAccount.owner.split(' ')[0]}`
    containerApp.style.opacity = 100

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

    // Update UI
    updateUI(currentAccount)
  }

})



btnLoan.addEventListener('click',function(e){
  e.preventDefault()
  const amount = Number(inputLoanAmount.value)

  if(amount>0 && currentAccount.movements.some(mov=>mov>=amount*0.1)){
    
    // ADD movement
    currentAccount.movements.push(amount)

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

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////















// // SLICE  method ----------> dosen't mutate the original array
// let arr  = ['a','b','c','d','e']
// console.log(arr.slice(1,4))               //['b','c','d']
// console.log(arr.slice(1,-2))               //['b','c']




// //  SPLICE method  --------> mutates the original array
// arr = ['a','b','c','d','e']
// console.log(arr.splice(3,4))             // ['d','e']
// console.log(arr)                         // ['a','b','c']



// // reverse method  -----------> mutates the original array 
// const name = ['kesh','hrushi','kolli']
// console.log(name.reverse())      //['kesh','hrushi','kolli']
// console.log(name)               //['kesh','hrushi','kolli']


// // CONCAT method
// const num = [1,2,3,4]
// const last_num = [5,6,7,8]
// console.log(num.concat(last_num))
// console.log([...num, ...last_num])


// // JOIN method    ---------> converts array to list 
// name = ['kolli','hrushi','kesh']
// console.log(name.join(','))




// AT method 
// const arr = ['a','b','c','d']
// console.log(arr.at(1))
// console.log(arr[arr.length-1])





// // FOR EACH method
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// for(const movement of movements){
//   movement>0? console.log(`you deposited ${movement}`) : console.log(`you dispatched ${movement}`)
// }

// console.log(`------FOR EACH-----`)

// movements.forEach(function(movement){
//   movement>0? console.log(`you deposited ${movement}`) : console.log(`you dispatched ${movement}`)
// })









// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);



// // For EACH methods for maps 
// currencies.forEach(function(value, key, map){
//   console.log(`${key} : ${value}`)
//   console.log(map)
// })

// console.log(`-----------`)


// FOR EACH METHOD FOR SETS
// const currencies_unique = new Set(['usa','india','europe'])
// currencies_unique.forEach(function(value, _value, arr){
//   console.log(`${_value} : ${value}`)
//   console.log(arr)
// })
 





















// Map method

// const movements =  [200, 450, -400, 3000, -650, -130, 70, 1300]
// const euroUsd = 2
// const changing = movements.map(function(mov,i,arr){
//   return mov*euroUsd
// })
// console.log(changing) 




// const arrfun = (mov) => mov*euroUsd
// console.log(movements.map(arrfun))






// const mov_description = movements.map((mov,i)=> 
//   `Movement ${i+1} : You ${mov>0? 'deposited' : 'withdrawal'} ${Math.abs(mov)}`
// )
// console.log(mov_description)











// // creating usernames for accounts objects(above) using map methods

// const create_Usernames = function(accs){
//   accs.forEach(function(acc){
//     acc.username  = acc.owner.toLowerCase().split(' ').map(word => word[0]).join('')
//   })
// }
// create_Usernames(accounts)
// console.log(accounts)












// // Filter method

// const movements =  [200, 450, -400, 3000, -650, -130, 70, 1300]

// const deposit = movements.filter(function(num,i,arr){
//   return num>0
// })
// console.log(deposit)

// const withdrawal = movements.filter(num => num<0 )
// console.log(withdrawal)










// // Reduce Method
// const movements =  [200, 450, -400, 3000, -650, -130, 70, 1300]
// const balance  = movements.reduce(function(acc,curr,i,arr){
//   console.log(`iteration ${i} : ${acc}`)
//   return acc+curr
// },0)
// console.log(balance)











// // chaining of methods
// const movements =  [200, 450, -400, 3000, -650, -130, 70, 1300]
// const euro_USD = 2
// const total_Deposit = movements.filter(mov=>mov>0).map(mov=>mov*euro_USD).reduce((acc,curr)=>acc+curr,0)
// console.log(total_Deposit)









// // FIND method
// const movements =  [200, 450, -400, 3000, -650, -130, 70, 1300]
// const first_Withdrawal = movements.find(mov=>mov<0)
// console.log(first_Withdrawal)


// // finding object using find methods
// const account = accounts.find(acc=>acc.username ==='jd')
// console.log(account)











// // SOME METHOD
// const movements =  [200, 450, -400, 3000, -650, -130, 70, 1300]

// // value equality
// console.log(movements.includes(-130))

// // condition check
// const any_elements = movements.some(mov=>mov>100)
// console.log(any_elements)






// // EVERY METHOD
// const movements =  [200, 450, -400, 3000, -650, -130, 70, 1300]

// console.log(movements.every(mov=>mov>0))
// console.log(account4.movements.every(mov=>mov>0))



// const array = [[1,2,3,4],[5,6]]
// console.log(array[0].concat(array[1]))









// // FLAT METHOD AND flatMap are same but flatmap just goes one level deeper

// const arr = [[1,2,3,4,5],[6,7],8]
// console.log(arr.flat())


// const arrdeep = [[1,2,3,[4,5],[6,7,[8,9]]]]
// console.log(arrdeep.flat(2))


// const overallBalance = accounts.map(acc=>acc.movements).flat().reduce((acc,mov)=>acc+mov,0)
// console.log(overallBalance)






 






// // SORT METHOD
// const owners = ['jonaas','zach','hrushi','kesh']
// console.log(owners.sort())

// // strings
// const movements =  [200, 450, -400, 3000, -650, -130, 70, 1300]
// console.log(movements.sort())


// // NUmbers
// // return < 0, A,B
// // return >0, B,A
// movements.sort((a,b)=>{
//     if(a>b){
//       return 1
//     }else{
//       return -1
//     }
// })
// console.log(movements)
// movements.sort((a,b)=>a-b)      // ascending order
// movements.sort((a,b)=>b-a)     //descending order


const arr1 = [1,2,3,4]
const arr2= [5,6,7,7]
















// REVISING ALL THE ARRAY METHODS

// 1).
const depositSUM = accounts.map(acc=>acc.movements).flat().filter(mov=>mov>0).reduce((acc,curr)=>acc+curr,0)
console.log(depositSUM)


// 2).
const numDeposits_1000 = accounts.flatMap(acc=>acc.movements).filter(mov=>mov>=1000).length
console.log(numDeposits_1000) 




// 3).
const sums = accounts.flatMap(acc=>acc.movements).reduce((acc,curr)=>{ 
    curr > 0 ? acc.deposit += curr : acc.withdrawwal += curr
    // acc[curr>0 ? 'deposit' : 'withdrawwal'] += curr
    return acc
}, {deposit:0,withdrawwal:0})

console.log(sums)



// 4).
// this is a nice title ---> This Is a Nice Title

const convert_title_case = function(string){
  const excp = ['a','the','with', 'an','but','or','on','in']

  const title = string.toLowerCase().split(' ').map(word=> excp.includes(word) ? word : word[0].toUpperCase() + word.slice(1)).join(' ')
  return title
}

console.log(convert_title_case('this is a nice title'))
console.log(convert_title_case('Iam in a nice place with a good person'))


