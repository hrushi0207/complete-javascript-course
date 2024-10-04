'use strict';



// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  
  
  
  
  order: function(starterIndex,MainIndex){
    return new Array(this.starterMenu[starterIndex], this.mainMenu[MainIndex])
  },

  
  
  
  
  openingHours: {
    mon: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },




  orderDeliver : function(obj){
    // console.log(obj);
  },

  specificCountry : function({time,region,item}){
    // console.log(`please deliver ${item} at ${time} in ${region}`)
  },


  orderPasta : function(ing1,ing2,ing3){
    console.log(`here is u r pasta with ${ing1},${ing2},${ing3}`)
  },
  

}












restaurant.orderDeliver({
  time : 20.00,
  region : 'india',
  item : 'pizza'
})


restaurant.specificCountry({
  time: 12.00,
  region : 'US',
  item : 'burger'
})















// // destructing arrays
let [main,secondary] =  restaurant.categories
console.log(main,secondary)                                   // Italian, pizzeria


const [first, ,third] = restaurant.categories
console.log(first, third);                                    // Italian, vegetarian


// // switching variables
[main,secondary] = [secondary, main]
console.log(main ,secondary)                                  //pizzeria, Italian


// // returning values from functions and assigning to variables
// const [starterCourse, MainCourse] = restaurant.order(2,0)
// console.log(starterCourse, MainCourse)                        //Garlic, bread pizza 



// // destructing nested loops
// const nested = [2,4,[5,6]];
// // const [i, ,j ] = nested;
// // console.log(i,j)                          // 2,[5,6]
// const [x, , [y,z]] = nested;
// console.log(x,y,z)                           // 2,5,6


// // defualt values 
// const [p=1,q=1,r=1] = [2,5]
// console.log(p,q,r)                          // 2,5,1










// Mutating variables
let a = 111;
let b = 123;
const obj = {a:2, b:5};
({a,b} = obj);
console.log(a,b)







// destructing  objects 
// const {name, openingHours, categories} = restaurant;
// console.log(name, openingHours, categories);


// assigning new variables names  to object properties
// const {name : Name, openingHours:Hours, categories: tags} = restaurant;
// console.log(Name,Hours,tags)


// assigning default values to object properties
// const { starterMenu:starters=[], categories:types=[]}= restaurant;
// console.log(starters, types)


// Nested objects
// const {fri: {open : o,close: c}} = restaurant.openingHours;
// console.log(o,c);













// spreadOperator  Arrays

// let arr = [5,6,7]
// const badarr = [5,6,7,arr]
// // console.log(badarr)
// const newarr = [1,2,3,...arr]
// console.log(newarr)



// const newMenu = [...restaurant.mainMenu, 'kabab']
// console.log(newMenu)

// const menu  = [...restaurant.mainMenu,...restaurant.starterMenu]
// console.log(menu )


// Iterables:strings, arrays, maps, sets. Not objects.


// passing as an funtion argument 
// const ingredients = [prompt('what is the ingeredient 1 '), prompt('what is ingredient 2 '), prompt('what is ingredient 3' )]
// restaurant.orderPasta(...ingredients);















// spreadOperator Objects
// const newRestaurant = {foundedIN: 2000,...restaurant,founder:'hrushikesh'}
// console.log(newRestaurant)



// const CopyRestaurant  = {
//   ...newRestaurant
// }
// CopyRestaurant.founder='Harsha';
// console.log(newRestaurant.founder,CopyRestaurant.founder)














// Rest Operators


//  1)Destructing
// Spread:becoz on right side

// const [a,b,...others] = [1,2,...[3,4,5,6]]
// console.log(a,b,others)

// // rest:becoz on the left
// const [pizza,pasta,...excess]=[...restaurant.mainMenu,...restaurant.starterMenu]
// console.log(excess)


// // objects
// const {sat, ...weekdays}=restaurant.openingHours
// console.log(weekdays)



// 2) Functions

// const addition = function(...numbers){
//   let sum = 0;
//   for(let i=0;i<=numbers.length-1;i++){
//     sum +=numbers[i];
//   }
//   console.log(sum)
// }
// addition(1,2,3,4)
// addition(12,13)
// addition(5,5)

// const x = [10,13,13]
// addition(...x)



// restaurant.orderpizza = function(items,...others){
//   console.log(items);
//   console.log(others);
// }
// restaurant.orderpizza('mushromms','olive','onions','mirchi')
// console.log(restaurant)

 














// using OR operator to assign values 
// const num_guest = 2;
// const num_guest = 0;
// const no_of_guest = num_guest || 10;
// console.log(no_of_guest)



// Using AND operator as IF,else statements 
// restaurant.guest = [2,3,4,5]
// restaurant.guest && console.log(restaurant.guest)           // [2,3,4,5]





// NUllish operator works for null or undefined (not for 0 or '')
// let guests = null;
// const no_of_guest = guests ?? 10;     //10
// console.log(no_of_guest)












// let rest1 = {
//   name : 'luxury',
//   guest : 5
//   // guest : 0
// }

// let rest2 = {
//   name : 'duplicate',
//   owner : 'kolli'
// }


// or assignment operator
// rest1 = rest1.guest || 10;
// rest2 = rest2.guest || 10;
// rest1 ||= 10;
// rest2 ||= 10;
// console.log(rest1)
// console.log(rest2)


// nulli assignment operator
// rest1.guest ??=10;                   
// rest2.guest ??=10;                   



// AND assigment operator
// rest1.owner = rest1.owner && 'hrushikesh';
// rest2.owner = rest2.owner && 'hrushikesh';
// rest1.owner &&= 'hrushikesh';
// rest2.owner &&= 'hrushikesh';

// console.log(rest1)
// console.log(rest2)
















//  // FOR OF to iterate through arrays
// let menu = [...restaurant.starterMenu, ...restaurant.mainMenu]
// console.log(menu)
// for(const i of menu) console.log(i)



// printing indexes by entries method
// for (const [i, el] of menu.entries() ){
//   console.log(`${i + 1}: ${el}`)
// }














// // Optional chaining 
// if(restaurant.openingHours && restaurant.openingHours.mon){
//   console.log(restaurant.openingHours.mon.open)
// }

// // with optional chaining
// console.log(restaurant.openingHours.mon?.open)
// console.log(restaurant.openingHours?.mon?.close)


// const days = ['mon','tue','wed','thur','fri','sat','sun']

// for(const day of days){
//   console.log(day)
//   const open = restaurant.openingHours[day]?.open ?? 'closed';
//   console.log(`opening time of ${day} is ${open}`)
// }



// with methods
// console.log(restaurant.order?.(0,2)??'method does not exists')
// console.log(restaurant.orderrrr?.(5,5)??'method does not exists')

// with arrays
// const users = [{name:'hrushikesh',email:'hrushikesh.kollli@gmail.com'}]
// // const users = []
// console.log(users[0]?.name??'users does not exists')












// Looping through objects

// // parameters {keys}
// const parameters = Object.keys(restaurant.openingHours)
// console.log(parameters)
// for(const i of parameters){
//   console.log(`we are open at ${parameters.length} days : ${i}`)
// }

// //  Looping values
// const values = Object.values(restaurant.openingHours)
// console.log(values)


// // looping through entire object
// const full = Object.entries(restaurant.openingHours)
// for(const [key, {open, close}] of full){
//   console.log(`We are open on ${key} at ${open} and closes at ${close}`)
// } 







 


















// SETS
// let orderSet = new Set(['hrushikesh','kolli','hrushikesh','kolli','kesh'])
//  let str = new Set('hrushikesh')
// console.log(str)
// console.log(orderSet.size)
// console.log(orderSet.add('pizza'))
// console.log(orderSet.delete('pizza'))
// console.log(orderSet)
// console.log(orderSet.has('hrushikesh'))
// console.log(orderSet.has('pizza'))



// orderSet.clear()
// console.log(orderSet)

// for(const order of orderSet){
//   console.log(order)
// }



// coverting sets to arrays
// const sets = ['hrushikesh','harsha','punnam','kolla','saiteja']
// const setsUniq = [...new Set(sets)]
// console.log(setsUniq)

// console.log(new Set(['chicken','mutton','prawns','fish','chicken']).size)
// console.log(new Set('hrushikesh').size)















// MAPS

// const resting = new Map()
// resting.set('hrushi','headdigitals')
// resting.set('harsha','oyo')
// resting.set('prashanth','amazon')
// console.log(resting)

// resting.set('pcn', 'genpact').set('manoj','dell').set(true,'we are working').set(1,'prashanth').set('suman',['oyo','harness','lotus']).set('open',11).set('close',23).set(false,`We aren't working`)
// console.log(resting);

// console.log(resting.get('hrushi'))
// console.log(resting.get(1))
// console.log(resting.get(true))
// console.log(resting.get('suman'))

// const time = 21;
// console.log(resting.get(time>resting.get('open') && time<resting.get('close')))

// resting.delete('prashanth')
// resting.delete(1)

// console.log(resting.has('hrushi'))
// console.log(resting)
// console.log(resting.size)
// // resting.clear()


// // resting.set([1,2],'testing')
// // console.log(resting.get([1,2]))                can't be executed 
// const arr =[1,2]
// resting.set(arr, 'testing')
// console.log(resting.get(arr))






// // creating map without set method
// const new_MAP = new Map([
//   ['Name','hrushikesh'],
//   ['age ',22],
//   ['job' , 'software']
// ])
// new_MAP.set('games','cricket, volleyball, badminton').set('oher_proffesion','freelancing ')
// console.log(new_MAP)







// // converting objects to maps
// const hoursSet = new Map(Object.entries(restaurant.openingHours))
// console.log(hoursSet)








// // quizz app 
// const question = new Map([
//   [1,'CPP'],
//   [2,'java'],
//   [3,'javascript'],
//   ['correct',3],
//   [true,'correct'],
//   [false,'incorrect']
// ])
// console.log(question)

// for(const [i,j] of question){
//   if(typeof i ==='number'){
//     console.log(`${i} : ${j}`)
//   }
// }


// const answer = Number(prompt('whats the answer..?'))
// console.log(answer)
// // question.get('correct') === answer ? console.log(question.get(true)) : console.log(quetion.get(false))
// console.log(question.get(question.get('correct')===answer))


  


// converting maps to arrays
// // console.log([...question])
// console.log([...question.keys()])
// console.log([...question.values()])
// console.log([...question.entries()])  




























// // Working with strings
// const Name = 'hrushikesh'
// const job = 'software development'

// console.log(Name.indexOf('h'))                      //0
// console.log(Name.lastIndexOf('h'))                  //9
// console.log(Name.length)                            //10
// console.log('harshavardhan'.length)

// console.log(job[3])
// console.log(job[5])
// console.log('birthday'[2], 'birthday'.lastIndexOf('y'))


// console.log(Name.slice(1))          //rushikesh
// console.log(Name.slice(0,6))        //hrushi

// console.log(job.slice(0,job.indexOf(' ')))    //software 
// console.log(job.slice(job.lastIndexOf(' ')+1))  //development

// console.log(Name.slice(-2,))          //sh
// console.log(Name.slice(1,-4))         //rushi


// console.log(Name.toLowerCase())
// console.log(Name.toUpperCase())








// // Fixing capitiation  hrUshikEsh ---> Hrushikesh
// const Name  = 'hrUshikEsh'
// const NameLower = Name.toLowerCase()
// const NameCorrect = Name[0].toUpperCase() + NameLower.slice(1)
// console.log(NameCorrect)








// // comparing emails
// const email = 'hrushikesh.kolli@gmail.com'
// const login_email = '  Hrushikesh.Kolli@gmail.com  \n'
// // const lower_email =login_email.toLowerCase()
// // const trimmed_email = lower_email.trim()
// // console.log(trimmed_email)
// const correct_email  = login_email.toLowerCase().trim()
// console.log(correct_email === email)








// // replacing 
// const Euro = '97,34^'
// const Us = Euro.replace('^','$').replace(',','.')
// console.log(Us)


// const compliment = 'He is very good looking. very good looking!'
// console.log(compliment.replace('good','great'))
// console.log(compliment.replaceAll('good','great'))






// // Booolean
// const plane  = 'Air A23neo';
// console.log(plane.includes('23'))
// console.log(plane.includes('n'))
// console.log(plane.startsWith('Air'))
// console.log(plane.endsWith('neo'))

// plane.startsWith('Air') && plane.endsWith('neo')? console.log('the best plane to travel in '): console.log('do not book tickets ')








// // practice session 
// const checkBaggage = function(items){
//       const bag = items.toLowerCase()
//       bag.includes('knife') || bag.includes('gun') ? console.log('you are not allowed to onboard') : console.log('elcome, You are onboard')
// }

// checkBaggage('Iam having food, knife and a pistol gun ')
// checkBaggage('Iam having PlayStation, Laptop and some food')
// checkBaggage('Iam having Purse, Passport') 









// // split and join 
// console.log('a+very+strong+name'.split('+'))
// console.log('kolli Hrushikesh'.split(' '))


// const [firstname, lastname] = 'kolli hrushikesh'.split(' ')
// // console.log(firstname,lastname)

// const newName  = ['Mr',firstname,lastname].join('+')
// console.log(newName) 






// practice session 
// const capitalization = function(names){
//   const namesUpper = [] 
//   let words = names.split(' ')
//   for (const n of words){
//     // namesUpper.push(n[0].toUpperCase()+n.slice(1))
//     namesUpper.push(n.replace(n[0], n[0].toUpperCase()))
//   }
//   console.log(namesUpper)
// }

// capitalization('kolli hrushikesh harsha punnam')
// capitalization('iam very strong')












// // Padding
//  const age = 'he is 22 yrs old'
//  const Name  = 'kolli Hrushikesh'
//  console.log(age.padStart(25,'-').padEnd(30,'*'))
//  console.log(Name.padStart(25,'-').padEnd(30,'*'))



// //  practice ssn
// const markCredicard=function(number){
//       const n = String(number)
//       const last = n.slice(-4)
//       return last.padStart(n.length,'*')
// }
// console.log(markCredicard(9121534628))
// console.log(markCredicard(9989050193))












// // repeat
// const message = 'I could get a job easily..... '
// console.log(message.repeat(2))


// // concat 
// const combining = message.concat('in flipkart')
// console.log(combining)










// Strings Practice 
// Data needed for a later exercise
// const flights =
//   '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// const get_str = str =>str.slice(0,3).toUpperCase()

// for(const row of flights.split('+')){
//   // console.log(row)
//   const [type,from,to,time] = row.split(';')
//   const output = `${type.startsWith('_Delayed')?'🔴':''}${type.replaceAll('_',' ')}${get_str(from)}${get_str(to)}${time.replace(':','h')}}`
//   console.log(output.padStart(50,' '))
// }



