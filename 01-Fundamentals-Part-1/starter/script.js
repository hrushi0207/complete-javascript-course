alert("lets practice");

// let a = "ohh thats great";
// if (a = "ohh thats great") alert("thats really good");
// 56 + 78 + 95;
// console.log(56 + 78 + 95);

// let myFirstName = "Hruhsikesh";
// console.log(myFirstName);
// console.log(myFirstName);
// console.log(myFirstName);
// console.log(myFirstName);
// console.log(myFirstName);
// let first_number = 1;
// console.log(first_number);

// let hrushikesh = true;
// console.log(hrushikesh);
// console.log(typeof true);
// console.log(typeof hrushikesh);
// console.log(typeof 3);
// console.log(typeof "jonas")
// hrushikesh = "kind"
// console.log(typeof hrushikesh)

// var first_NAme = "hrusikesh";
// console.log(first_NAme)
// let country = "India";
// console.log(country)
// const language = "hindi";
// console.log(language);
// language = "telugu";
// let population = "5522000";
// population = "8866633";
// console.log(population);

// // multiple operators
// const present = 2023;
// let oneperson_age = present - 2000;
// let anotherperson_age = present - 2002;
// console.log(oneperson_age, anotherperson_age);
// console.log(oneperson_age * 2, anotherperson_age / 10, 2 ** 3);

// // arithematic operators
// let x = 5 + 5;      //10
// console.log(x);     //10
// x += 10;            //20
// x *= 2;             //40
// x++;                //41
// x--                 //40
// console.log(x)

// let present = 2023;
// let hrushi_age = present - 2000;
// let kesh_age = present - 2005;
// console.log(hrushi_age, kesh_age);

// let average_age = (hrushi_age + kesh_age) / 2
// console.log(average_age)

// let first_Name = "hruhikesh";
// let age = 22;
// let job = "sportsman";
// let string = `iam ${first_Name}, a ${age} old ${job}`
// console.log(string);
// let sentence = `iam ${first_Name} ${age} old iam a ${job}`
// console.log(sentence);

// // if - else statements
// let age = 15;

// if (age >= 18) {
//     console.log(`if hrushi age is above 18,he would get driving liscense`);
// }
// else {
//     console.log(`he wouldn't get a driving liscense, wait for  another  ${18 - age}years`);
// }

// // type coercion
// ----> ('+' sign converts numbers to strings);
// ----> ('-' sign converts strings to numbers )

// const inputYear = '2001';

// console.log(inputYear);
// console.log(Number(inputYear));

// console.log(Number(inputYear) + 9);
// console.log(Number(inputYear) + "9");

// console.log('10' + '5' + 6);
// console.log('10' - '5' + '6');

// let n = '1' + '1';
// n = n - 1;
// console.log(n);

// Truthy and Falsy values;

// ---> (5 false values in js : '0', 'NaN', '', undefined, null)

// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean(NaN));
// console.log(Boolean(''));
// console.log(Boolean({}));
// console.log(Boolean('jonas'));

// let money = 10;
// if (money) {
//     console.log(`please don't spend the money `);
// }
// else {
//     console.log(`you should get a job`);
// }

// let height = '';
// if (height) {
//     console.log(`you are taller than me `);
// }
// else {
//     console.log(`please eat some food`);
// }

// Equality Operators

// let age = 18;

// if (age == 18) console.log(`congrats..!, You became an adult (loose)`);

// if (age === '18') console.log(` You are just perfect (strict) `);       // if age='18'------> this one exectutes

// let Favourate = prompt(`what is your fav number..?`);                           
// let Favourate= Number(prompt(`what is your favourate number...?`));
// if (Favourate === 22) {
//     console.log(` that is an amazing number..!`)                              //    --------> this one executes..
// } else if (Favourate == 22) {
//     console.log(`that is so cool...!`);
// } else {
//     console.log(`You should get better  :(`)
// }

// logical operators

// let hrushi_Driving_liscense = true;
// let has_good_vision = true;
// let is_tired = false;

// const able_to_drive = (hrushi_Driving_liscense && has_good_vision);

// // if (able_to_drive) {
// //     console.log(`we can trust him`);
// // }
// // else {
// //     console.log(`we should  let another person to drive`);
// // }

// if (hrushi_Driving_liscense && has_good_vision && !is_tired) console.log("let go on a road trip ");

// // the swith statement

// let day = prompt(`which day ..?`);

// switch (day) {

//     case 'Monday':
//         console.log(` Have to visit the office, 1st time of the week`);
//         break;
//     case 'Tuesday':
//     case 'Wednestday':
//         console.log(` Can do work from home ..!!`);
//         break;
//     case 'Thursday':
//     case 'Friday':
//         console.log(`Ha to visit the office again 2nd time `);
//         break;
//     case 'Saturday':
//     case 'Sunday':
//         console.log(` get relaxed in the weekend`);
//         break;
//     default:
//         console.log(`Got laid off...!!!`);
// }

// the ternary operator

// let age = Number(prompt(`Mention u r age...!`));

// age >= 18
//   ? console.log(`lets have some wine `)
//   : console.log(` better to have some water..:)`);

// let legal =
//   age >= 18 ? `lets have some wine ` : ` better to have some water..:)`;
// console.log(`hey hrushi, ${legal} `);
