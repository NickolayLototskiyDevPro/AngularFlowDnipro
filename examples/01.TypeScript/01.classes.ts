class MyFirstClass {
   static PI: number = 3.14
   count: number;
    
    constructor();
    constructor(count:number);
    constructor(count:number, count2:number);

    constructor(count:number = 10.00, count2:number = 5 ){
        this.count = count;
    }

    getTotalCount(): number {
        return this.count + MyFirstClass.PI;
    }
}

const a  = new MyFirstClass()
const myClassInstance = new MyFirstClass(12,34);
myClassInstance.getTotalCount();
