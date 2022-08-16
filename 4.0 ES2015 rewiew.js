//Objectives
//Explain what class is
//Understand how JavaScript implements the IDEA of classes
//Define terms like abstraction, encaptulation and plymorphism
//Use ES2015 classes to implement data structures


//What is a class?
//A blueprint for creating objects with pre-defined properties and methods

class Student { //obo je blueprint - odnosno šema za student objekt. tj. objek student mora sadržati firstName i lastName
    constructor(firstName, lastName, year=1){
        this.firstName = firstName;
        this.lastName = lastName;
        this.grade = year;
        this.kašnjenja = 0;
        this.scores = [];
    }
    static enrollStudents(...students){
        console.log(...students)
    }
    fullName(){ //Instance methods su metode koje referaju za svaku instancu ponaosob, kao npr push na neki array
        return `Your full name is ${this.firstName} ${this.lastName}`;
    }
    markLate(){
        this.kašnjenja ++;
        if(this.kašnjenja > 5) return "You are expelled!!!";
        return ` ${this.firstName} ${this.lastName} has been late ${this.kašnjenja} times`;
    }
    addScore(score, šifra="pogrešna"){
        if(šifra === "ocjene"){
            this.scores.push(score);
            return this.scores;
        }
        return "vaša šifra je pogrešna";
    }
    calculateAverage(){
        let avg= this.scores.reduce((acc,next)=>acc+next)/this.scores.length;
        return avg;
    }
}



class Point{
    constructor(x,y){
        this.x = x;
        this.y = y;
    }
    static distance(a,b){
        let dx = a.x - b.x;
        let dy = a.y - b.y;
        return Math.hypot(dx, dy);
    }
}
var a = new Point(10,20);
var b = new Point(20,10);