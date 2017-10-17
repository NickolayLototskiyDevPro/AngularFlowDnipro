abstract class Animal {
    public age: number;
    public name: string;

    constructor(age: number, name: string){
        this.age = age;
        this.name = name;
    }

    public abstract eat();
}