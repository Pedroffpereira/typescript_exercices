class Student {
    name:string;
    age:number;
    constructor(theName:string,theAge:number){
        this.name=theName;
        this.age=theAge;
    }
}


function greeter(student: Student) {
    return "Hello, " + student.name + " " + student.age + " years old";
}
const student = new Student("Pedro",12)
console.log(greeter(student));