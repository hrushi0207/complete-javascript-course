// // Functions
// function logger() {
//     console.log(`My name is hrushi`);
// }

// logger();
// logger();




// function juice_procedure(a, b) {
//     const juice = `To prepare juice we need ${a} apples and ${b} oranges\n`;
//     return juice;
// }
// console.log(juice_procedure(2, 3));
// console.log(juice_procedure(4, 5));

// const no_juice = juice_procedure(0, 0);
// console.log(no_juice);












// function declarations and expressions

// function declaration

// function calAge_1(birthyear) {
//     return 2037 - birthyear;
// }                                  //   we can call the function where ever we want .
// const age_1 = calAge_1(1995);
// console.log(age_1);

// // function expression

// const calAge_2 = function (birthyear) {
//     return 2037 - birthyear;
// }                         //  we have to call the function after the function itself.
// const age_2 = calAge_2(2000);
// console.log(age_2);














// Arrow functions

// const calAge = birthyear => 2037 - birthyear;
// const age = calAge(2000);                         //if we hav3e only single parameter.
// console.log(age);

// const calAge_1 = (birthyear, naame) => {
//     const age = 2037 - birthyear;              //if we have more than 1 parameter;
//     return `${naame} has ${age} years to retire`;
// }
// console.log(calAge_1(2000, 'hrushi'));



// console.log(calAge_1(2005, 'kesh'));












// // funtions calling another function
// function double_fruits(fruits) {
//     return fruits * 2;
// }

// function fruitjuice(apples, oranges) {
//     const double_apples = double_fruits(apples);
//     const double_oranges = double_fruits(oranges);
//     const juice = `we need ${double_apples} apples and ${double_oranges} oranges to make a juice`;
//     return juice;
// }
// console.log(fruitjuice(2, 3));
// console.log(`cutting fruits into multiple pieces, ${fruitjuice(7, 6)}`)














// Arrays

// friend1 = 'mickeal';
// friden2 = 'hrushi';
// friend3 = 'kesh';

// const friends = ['mickeal', 'hrushi', 'kesh'];
// console.log(friends)
// console.log(friends[0]);
// console.log(friends.length);
// console.log(friends[friends.length - 1]);
// friends[1] = 'funny';
// console.log(friends);
// // friends = ['20', 'awesome', 'beautiful'];  //does not work -------> friends has been already declared...!

// const firstName = 'kolli'
// const details = [firstName, 'hrushi', 'kesh', 22, friends];
// console.log(details);
// console.log(details.length)
// console.log(details[4][1])

// const calAge = function (birthyear) {
//     return 2040 - birthyear;
// }

// const years = [2000, 2004, 2009, 2013];
// calAge(years)                                         //does not work

// const age1 = calAge(years[0]);
// const age2 = calAge(years[2]);
// const age3 = calAge(years[years.length - 1]);
// console.log(age1, age2, age3);

// const ages = [age1, age2, age3]                     // or  const ages = [calAge(years[0]), calAge(years[2]), calAge(years[years.length-1])]
// console.log(ages);



















// Arrays operation methods.

// friends = ['kolli', 'hrushi', 'kesh'];
// console.log(friends);







// // adding elements
// friends.push('harsha');                           //adds element to the last
// console.log(friends);
// const pushed = friends.push('sai');
// console.log(pushed);                           // consoles the no of elements in array
// console.log(friends);

// friends.unshift('pavan');                  // adds element in the first place of array
// console.log(friends);
// const unshifted = friends.unshift('uday');         // consoles the num of elements
// console.log(unshifted);








// // removing elements
// friends.pop();                                    // removes the last element
// console.log(friends);
// const popped = friends.pop();                    //consoles the removed element.
// console.log(popped);
// console.log(friends);

// friends.shift();                                // removes the first element;
// console.log(friends);
// const shifted = friends.shift();               // consoles the removed element;
// console.log(shifted);
// console.log(friends);

// console.log(friends.indexOf('hrushi'));
// console.log(friends.indexOf('katty'));

// console.log(friends.includes('hrushi'));
// console.log(friends.includes('katty'));

// if (friends.includes('hrushi')) {
//     console.log(`you are having a frind named hrushi`);
// }






















// Objects Intro

// const details = {
//     firstName: 'kolli',
//     MiddleName: 'Hrushi',
//     lastName: 'kesh',
//     age: '22',
//     friends: ['harsha', 'uday', 'ravi']
// };

// console.log(details);











// // Dot vs Bracket Intro

// const details = {
//     firstName: 'kolli',
//     MiddleName: 'Hrushi',
//     lastName: 'kesh',
//     age: '22',
//     friends: ['harsha', 'uday', 'ravi']
// };

// console.log(details);
// console.log(details.firstName);
// console.log(details['MiddleName']);

// const first_string = 'Name';
// console.log(details['first' + first_string])
// console.log(details['Middle' + first_string]);

// const question = prompt(`could you please give me a hint to get the details...!!`);
// if (details[question]) {
//     console.log(`got the details....u can go...`)
// }
// else {
//     console.log('sorry unable to find one..could you give me another hint');
// }

// details.location = 'visakhapatnam';
// details['birthyear'] = 2000;

// console.log(details['birthyear']);
// console.log(details['location']);

// const jonas_details = {
//     Name: 'jonas',
//     no_of_friends: 3,
//     best_friend: 'hrushi'
// };

// console.log(`${jonas_details.Name} has ${jonas_details.no_of_friends} friends and, his bestfriend name is ${jonas_details.best_friend}`)





















// // object method
// const details = {
//     MiddleName: 'Hrushi',
//     lastName: 'kesh',
//     birthyear: 2000,
//     job: 'teacher',
//     friends: ['harsha', 'abhishek', 'ravi'],
//     hasDriverLiscense: false,

//     calAge: function () {
//         console.log(this)
//         this.age = 2040 - this.birthyear; //---------> this refers to details (object)
//         return this.age
//     },

//     confirmation: function () {
//         if (this.hasDriverLiscense) {
//             return `${this.MiddleName} is a ${this.calAge()} old ${this.job} and he has driver's liscense`;

//         }
//         else {
//             return `${this.MiddleName} is a ${this.calAge()} old ${this.job} and he does not have driver' liscense`;
//             ;
//         }
//     }

// };

// console.log(details['calAge']());

// console.log(details.confirmation());














// Iteration for loop :

// for (let rep = 1; rep <= 10; rep++) {
//     console.log(`lifting weight repitations ${rep}`);
// }








// looping arrays
// jonas = ['jonas', 'India', 22, 'student', ['harsha', 'abhishek', 'ravi']]
// const types = []

// for (let i = 0; i <= (jonas.length - 1); i++) {
//     console.log(jonas[i], typeof jonas[i]);
//     types[i] = typeof jonas[i];            //----------> types.push( typeof  jonas[i])
// }
// console.log(types)

// let years = [2000, 1995, 2008, 2010];
// const ages = [];
// for (i = 0; i <= years.length - 1; i++) {
//     ages.push(2040 - years[i]);
// }
// console.log(ages);














// // continue and breaking

// jonas = ['jonas', 'India', 22, 'student', ['harsha', 'abhishek', 'ravi']]
// const types = []

// console.log('------ONLY Strings-------')
// for (let i = 0; i <= (jonas.length - 1); i++) {
//     if (typeof jonas[i] !== 'string') continue;
//     console.log(jonas[i], typeof jonas[i]);
// }

// console.log('-------until found a number---------')
// for (let i = 0; i <= (jonas.length - 1); i++) {
//     if (typeof jonas[i] === 'number') break;
//     console.log(jonas[i], typeof jonas[i]);
// }












// looping backwards
// jonas = ['jonas', 'India', 22, 'student', ['harsha', 'abhishek', 'ravi']]
// for (let i = jonas.length - 1; i >= 0; i--) {
//     console.log(jonas[i], typeof jonas[i]);
// }










// // looping in a loop
// for (let exercise = 1; exercise <= 4; exercise++) {
//     console.log(`----------starting exercise${exercise}`);
//     for (let i = 1; i <= 5; i++) {
//         console.log(`exercise ${exercise}: weightlifting for ${i}`);
//     }
// }






// // whille loop
// let req = 1;
// while (req <= 10) {
//     // console.log(`lifting weight repitation ${req}`);
//     req++;
// }









// let dice = Math.trunc(Math.random() * 6) + 1;
// while (dice !== 6) {
//   console.log(`you rolled a dice num ${dice}`);
//   dice = Math.trunc(Math.random() * 6) + 1;
//   if (dice === 6) console.log(`loop is about to end`);
// }



