import express = require("express");
// Create a new express app instance

class Person{
    name:string;
    age:number;
    job:string;
    constructor(name:string,age:number,job:string){
        this.name=name
        this.age=age
        this.job=job
    }

}


const app: express.Application = express();
app.get("/", function (req, res) {
    res.send("Hello typescript!");
});
app.get("/person",(req, res)=>{
    const person1 = new Person("Pedro Pereira",19,"Backend dev");
 
    res.send(person1)
})
app.listen(3000);