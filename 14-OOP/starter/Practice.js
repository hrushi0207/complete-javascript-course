// Constructor Function With inheritance

const Person = function(f_name,b_year){
    this.First_Name = f_name,
    this.Birth_Year = b_year
}

Person.prototype.calc_age = function(){
    console.log(2060-this.Birth_Year)
}

const Student = function(f_name,b_year,course){
    Person.call(this, f_name,b_year)
    this.Course = course
}

Student.prototype = Object.create(Person.prototype)


Student.prototype.intro = function(){
    console.log(`Iam ${this.First_Name} and studying ${this.Course} course`)
}
const Harsha = new Student('Harsha Vardhan',2005, 'CSE')
Harsha.intro()
Harsha.calc_age()
console.log(Harsha)



// Object Class with Inheritance
const PersonProto = {
    calc_age(){
        console.log(2060 - this.Birth_Year)
    },

    init(f_name,b_year){
        this.First_Name = f_name,
        this.Birth_Year = b_year
    }
}

const StudentProto = Object.create(PersonProto)
StudentProto.init = function(f_name, b_year, course){
        PersonProto.init.call(this, f_name, b_year)
        this.Course = course
}

StudentProto.intro = function(){
    console.log(`Iam ${this.First_Name} and studying in ${this.Course}`)
}

const Hrushi = Object.create(StudentProto)
Hrushi.init('Hrushikesh', 2002, 'Mech')
Hrushi.intro()
Hrushi.calc_age()

console.log(Hrushi.__proto__)




// ES6 classes with Inheritance
class PersonCL {
    constructor(f_name, b_year){
        this.First_Name = f_name,
        this.Birth_Year = b_year
    }

    calc_age(){
        console.log(2040 - this.Birth_Year)
    }
}

class StudentCL extends PersonCL{
    constructor(f_name, b_year, course){
        super(f_name, b_year),
        this.Course = course
    }

    intro(){
        console.log(`Iam ${this.First_Name} and studying in ${this.Course}`)
    }
}

const Allu = new StudentCL('Allu Vamshi Vishal', 2010, 'ECE')
Allu.intro()
Allu.calc_age()

















