interface Vehicle {
    type: string;
    fuel: number;

    go():void;
}

class Car implements Vehicle {
    public type: string;
    public fuel: number;

    go():void{
        console.log('Go go go');
    }
}