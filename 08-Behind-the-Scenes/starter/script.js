'use strict';






// // SCOPING PRACTICE

// function calcAge(birthyear) {
//   const age = 2037 - birthyear;
//   //   console.log(firstName);

//   function printAge() {
//     const output = `${firstName} is ${age} years old, born in ${birthyear}`; // firstName can be accessible becoz firstName is in parent scope i.e global scope, age and birthyear is in parentscope i.e calcAge function scope,
//     console.log(output);

//     if (birthyear >= 1995 && birthyear <= 2005) {
//       var millenial = true;
//       const str = `oh, you are a millenial`;
//       console.log(str);

//       // Creating a new varialble with name as outer scope's variable
//       const firstName = 'kesh';
//       console.log(`${firstName} is very good at playing cricket`); // kesh is printed in this scope. outside this scope hrushikesh will get printed.

//       //Reassigning outer scope's variable
//       output = 'New Output';

//       function add(a, b) {
//         return a + b;
//       }
//       console.log(add(2, 3));
//     }
//     // console.log(add(2, 3));  dosent work as fucntion are also block scoped
//     console.log(millenial); //it works as var is functional scope. i.e it is accessible through out the  printAge function
//     // console.log(str);        dosen't work becoz const and let varialble are block scopes for conditions like if.
//   }

//   printAge();
//   return age;
// }

// const firstName = 'Hrushikesh';
// calcAge(2000);

// // console.log(age);                        does not work becoz the age variable is in calAge function scope, which is unable to access the global scope.









// HOISTING PRACTICE 

// // console.log(me);    undefined
// console.log(place);     
// console.log(birthyear);

// var me  = 'hrushi';
// let place  = 'vizag';
// const birthyear = 2001;


// console.log(addDecl(2,3));
// console.log(addExp(2,3));
// console.log(aaddArrw(2,3));

// function addDecl(a,b){
//   return a+b;
// }

// var addEXP = function(a,b){
//   return a+b;
// }

// const addArrw = (a,b)=> a+b;









// // borrowing methods to another object
// const calAge = {
//     year : 2000,
//     detail : function(){
//         console.log(`you are born in ${this.year}`);
//         return `date of birth : ${this.year}`;
//     }   
// }
// calAge.detail()

// const hrushi = {
//     year : 2005

// }
// hrushi.mydetails = calAge.detail
// hrushi.mydetails()














// primitive types vs reference types

// const hrushi = {
//     age : 20,
//     firstname : 'hrushi',
// }

// const friend = hrushi;
// friend.age = 37;
// console.log(hrushi.age)                                         // 37




// nishitha_adimelli
// eskypleyks





