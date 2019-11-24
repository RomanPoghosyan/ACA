class Person {
    constructor(firstName, lastName, gender, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.gender = gender;
        this.age = age;
    }

    get firstName(){
        return this._firstName;
    }
    set firstName(firstName){
        this._firstName = firstName;
    }

    get lastName(){
        return this._lastName;
    }
    set lastName(lastName){
        this._lastName = lastName;
    }

    get gender(){
        return this._gender;
    }
    set gender(gender){
        this._gender = gender;
    }

    get age(){
        return this._age;
    }
    set age(age){
        this._age = age;
    }

    toString(){
        return `Name: ${this.firstName} ${this.lastName},\nGender: ${this.gender},\nAge: ${this.age}`;
    }
}


class Student extends Person {
    constructor(firstName, lastName, gender, age, program, year, fee){
        super(firstName, lastName, gender, age);
        this.program = program;
        this.year = year;
        this.fee = fee;
        this.passedExams = {};
        for(let p of program){
            this.passedExams[p] = 0;
        }
    }

    get program(){
        return this._program;
    }
    set program(program){
        this._program = program;
    }

    get year(){
        return this._year;
    }
    set year(year){
        this._year = year;
    }

    get fee(){
        return this._fee;
    }
    set fee(fee){
        this._fee = fee;
    }

    passExam(program, grade){
        this.passedExams[program] = grade;
        if(!Object.values(this.passedExams).some(grade => grade < 50)){
            this.year++;
        }
    }

    toString() {
        return `${super.toString()},\nYear: ${this.year},\nFee: ${this.fee}`;
    }
}


class Teacher extends Person {
    constructor(firstName, lastName, gender, age, program, pay){
        super(firstName, lastName, gender, age);
        this.program = program;
        this.pay = pay;
    }


    get program(){
        return this._program;
    }
    set program(program){
        this._program = program;
    }


    get pay(){
        return this._pay;
    }
    set pay(pay){
        this._pay = pay;
    }

    toString() {
        return `${super.toString()},\nProgram: ${this.program}\nPay: ${this.pay}`;
    }
}

let student = new Student("Roman", "Poghosyan", "male", 23, ["class 1", "class 2"], 4, 100);
let teacher = new Teacher("mistakes","mistakes", "male", 37, "class 3", 300);

console.log(student.toString());
student.passExam("class 1", 62);
student.passExam("class 2", 73);
console.log(student.toString());

console.log(teacher.toString());



