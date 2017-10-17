class User {
    name: string;
    age: number;

    constructor(name: string, age:number){
        this.name = name;
        this.age = age;
    }

    greetings():void{
        console.log(`Greetings ${this.name}!`);
    }
}

 class Employee extends User {
    workingHours: number;

     constructor(name: string, age: number, workingHours: number){
         super(name, age);
         this.workingHours = workingHours;
     }

     greetings():void {
         super.greetings();
         console.log(`You are ${this.age} years old.`);
     }
 }