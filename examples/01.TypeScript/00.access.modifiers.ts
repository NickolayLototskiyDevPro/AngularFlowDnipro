class Pet {
    public name: string;

    constructor(name: string){
        this.name = name;
    }

    public eat(food:string): void{
        this.stomach = food;
        console.log(`${name} Yum yum ${food}`);
    }
    protected tail: boolean;
    private stomach: string;
}

class Dog extends Pet {
    constructor(name: string){
        super(name);
        this.tail = true;
    }

    public eat(food:string): void{
        super.eat(food);
        console.log('Gav gav');
    }
}

interface Animal12{
    counter: string;
    name: string;
    sayHello(greeting: string): void;
}

const a12: Animal12 = {
    counter: 'str',
    name: 'Kitty',
    sayHello: function (greeting: string): void {
        console.log('Hi');
    }
}

class Cat implements Animal12 {

    private _count = '2'
    get counter(): string{
        return this._count;  
    }
        
    set counter(value){
        this._count = value;
    }
    public name: string;
    sayHello(greeting: string): void {
        throw new Error("Method not implemented.");
    }

}

class Elephant extends Pet implements Animal12 {
    counter: string;x
    sayHello(greeting: string): void {
        throw new Error("Method not implemented.");
    }

}

