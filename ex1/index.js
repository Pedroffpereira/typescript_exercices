var Student = /** @class */ (function () {
    function Student(theName, theAge) {
        this.name = theName;
        this.age = theAge;
    }
    return Student;
}());
function greeter(student) {
    return "Hello, " + student.name + " " + student.age + " years old";
}
var student = new Student("Pedro", 12);
console.log(greeter(student));
