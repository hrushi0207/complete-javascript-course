'use strict'


// // Contructor Funtions

// const Person = function(FirstName,birthYear){
//     this.First_Name = FirstName,
//     this.birth_Year = birthYear

    
    // Never to use a method in constructor function
    // this.calc_age = function(){
    //     console.log(2040-this.birth_Year)
    // }
        
// }


// Static Methods
// Person.hey = function(){
//     console.log('Hey hi ✌️')
// }
// Person.hey()


// console.log(new Person('HrushiKesh',2000))

// const Harsha = new Person('HarshaVardhan', 24)
// const Allu = new Person('ALLU Vamshi Vishal',23)

// console.log(Harsha, Allu)

// console.log(Harsha instanceof Person)
// console.log(Allu instanceof Person)







// // Prototypes

// Person.prototype.calc_age = function(){
//     console.log(2040-this.birth_Year)
// }
// Harsha.calc_age()
// Allu.calc_age()

// console.log(Person.prototype)


// console.log(Harsha.__proto__)
// console.log(Allu.__proto__ == Person.prototype)


// console.log(Person.prototype.isPrototypeOf(Harsha))
// console.log(Person.prototype.isPrototypeOf(Allu))

// Person.prototype.species = "Happy Birthday"

// console.log(Harsha.species, Allu.species)

// console.log(Harsha.hasOwnProperty('First_Name'))
// console.log(Allu.hasOwnProperty('birth_Year'))

// console.log(Harsha.hasOwnProperty('cacl_age'))
// console.log(Harsha.hasOwnProperty('species'))




// console.log(Harsha.__proto__)
// console.log(Harsha.__proto__.__proto__)


// const arr =[1,2,3,4,5,6,6,7,7]
// console.log(arr)
// console.log(arr.__proto__)
// console.log(arr.__proto__.__proto__)
// console.log(arr.__proto__ == Array.prototype)


// //  new method to the built in contructor Array
// Array.prototype.unique = function(){
//     return [...new Set(this)]
// }
// console.log(Array.prototype.__proto__.constructor == arr.__proto__.__proto__.constructor)
// console.log(arr.unique())

// console.dir(document.querySelector('h1'))






// E6Classes

// class PersonCL{
//     constructor(f_name, birthyear){
//         this.Full_Name = f_name,
//         this.Birth_Year = birthyear

//         // this.calc_age = function(){
//         //     console.log(2040 - this.Birth_Year)
//     }
//         calc_age(){
//             console.log(2040 - this.Birth_Year)
        
//         }

//         // get age(){
//         //     return 2050 - this.Birth_Year
//         // }

//         // set Full_Name(name){
//         //     if(name.includes(' ') this.Full_Name = name)
//         //     else alert(`${name} is not a full name`);    
//         // }

//         static hey(){
//             console.log('Hello there ✌️✌️✌️')
//         }
//     }

// PersonCL.prototype.greet = function(){
//     console.log(`Hey ${this.First_Name}, your birthyear is ${this.Birth_Year} `)
// }

// PersonCL.hey()

// const jessica = new PersonCL('jessica',2016)
// console.log(jessica)
// jessica.calc_age()
// jessica.greet()

// console.log(jessica.__proto__ == PersonCL.prototype)
// console.log(jessica.__proto__.__proto__ == PersonCL.prototype.__proto__)



 
// getters setters
// const accounts = {
//     owner : 'Hrushikesh',
//     movements : [120, 450, 360, 299],

//     get latest(){
//         return this.movements.slice(-1).pop()
//     },

//     set latest(mov){
//         this.movements.push(mov)
//     }
// }

// console.log(accounts.latest)
// accounts.latest = 350
// console.log(accounts.movements)





// Object Create
// const PersonProto = {
//     calc_age(){
//         console.log(2040-this.BirthYear)
//     },

//     init(f_name, b_year){
//         this.FirstName = f_name,
//         this.BirthYear = b_year
//     }
// }

// const White = Object.create(PersonProto)   //personProto is Prototype
// White.Full_Name = 'Wlter White'
// White.birth_Year = 2015
// White.calc_age()


// console.log(White)
// console.log(PersonProto)          //prototype
// console.log(White.__proto__)


// console.log(White.__proto__ == PersonProto)



// const sarah = Object.create(PersonProto)
// sarah.init('Sarah',2012)
// console.log(sarah)
// sarah.calc_age()






// INHERITANCE

// contructor Functions

// const Person = function(f_name, b_year ){
//         this.FirstName = f_name,
//         this.BirthYear = b_year
// }

// Person.prototype.calc_age = function(){
//     console.log(2050-this.BirthYear)
// }



// const student = function(f_name, b_year, course){
//         Person.call(this,f_name,b_year),
//         this.Course = course
// }

// // linking prototypes
// student.prototype = Object.create(Person.prototype)


// student.prototype.intro = function(){
//     console.log(`Iam ${this.FirstName} and i have taken ${this.Course} course`)
// }

// const mike = new student('Mike mate',2022,'CSE')
// mike.intro()
// mike.calc_age()

// console.log(Person.prototype)
// console.log(student.prototype)
// console.log(mike.__proto__)




// ES6 Classes

// class PersonCL{
//         constructor(f_name, b_year){
//             this.Full_Name = f_name,
//             this.Birth_Year = b_year
    
//             // this.calc_age = function(){
//             //     console.log(2040 - this.Birth_Year)
//         }
//             calc_age(){
//                 console.log(2040 - this.Birth_Year)
            
//             }
    
//             // get age(){
//             //     return 2050 - this.Birth_Year
//             // }
    
//             // set Full_Name(name){
//             //     if(name.includes(' ') this.Full_Name = name)
//             //     else alert(`${name} is not a full name`);    
//             // }
    
//             static hey(){
//                 console.log('Hello there ✌️✌️✌️')
//             }
//         }


// class StundentCL extends PersonCL {
//     constructor(f_name,b_year,course){
//         super(f_name,b_year),
//         this.Course = course
//     }

//     intro(){
//         console.log(`Iam ${this.First_Name} studying in ${this.Course}`)
//     }
// }


// const hrushi = new StundentCL('Hrushikesh',2005, 'CSE')
// console.log(hrushi)
// hrushi.intro()


// console.log(PersonCL.prototype)
// console.log(StundentCL.prototype)
// console.log(hrushi.__proto__)



// const PersonProto = {
//     calc_age(){
//         console.log(2050 - this.Birth_Year)
//     },

//     init(f_name, b_year){
//         this.First_Name = f_name,
//         this.Birth_Year = b_year 
//     }

    
// }

// const studentProto = Object.create(PersonProto)


// studentProto.init = function(f_name,b_year,course){
//     PersonProto.init.call(this, f_name, b_year)
//     this.Course = course
// }

// studentProto.intro = function(){
//     console.log(`Iam ${this.First_Name} and iam studying ${this.Course}`)
// }

// const Hrushi = Object.create(studentProto)
// Hrushi.init('Hrushikesh', 2022, 'CSE')
// Hrushi.intro()
// Hrushi.calc_age() 



 
class Account{

    // 1)Public fields
    locale = navigator.language;

    // 2)Private field
    #movements = [];
    #pin

    constructor(owner, currency, pin){
            this.Onwer = owner,
            this.Currency = currency,
            this._Pin = pin
            // this.locale = navigator.language,
            // this._movements = []

        }

        // public method
        getMovements(){
            return this.#movements
        }

        deposit(rs){
            this.#movements.push(rs)
            return this
        }

        withdraw(rs){
            this.deposit(-rs)
            return this
        }

        

        requestLoan(rs){
            if(this.#approveLoan(rs)){
                this.deposit(rs)
                return this
            }
            
        }

        // 4)private methods

        #approveLoan(rs){
            return true
        }
        
    }

const jonas = new Account('JONAS', 6000, 1111)
jonas.deposit(200)
jonas.withdraw(150)
jonas.deposit(400)
jonas.requestLoan(1000)
console.log(jonas.getMovements())
// console.log(jonas.#approveLoan())
// console.log(jonas.#movements)
// console.log(jonas.#pin)


const hrushi = new Account('Hrushikesh', 500, 2222)
// chaining methods
hrushi.deposit(200).deposit(450).withdraw(300).requestLoan(1500).withdraw(500)
console.log(hrushi.getMovements())









