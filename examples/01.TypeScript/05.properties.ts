class ClassWithProperties {
    private _count: number;
    
    public get counter(): number{
        return this._count;
    }

    public set counter(val: number){
        this._count = val;
    }

    constructor(){
    }
 
     getTotalCount(): number {
         return this.counter + MyFirstClass.PI;
     }
 }

 const property = new ClassWithProperties();
console.log(property.counter)
property.counter = 12;