class Wheel {
    material: string;
}

class Vehicle {
    static wheels: Array<Wheel> = new Array<Wheel>(4);

    static fly():void {
        console.log('Fly away')
    }

    run():void{
        console.log(Vehicle.wheels.length);
    }
}

Vehicle.wheels
Vehicle.fly()