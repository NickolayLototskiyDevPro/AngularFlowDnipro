interface Bender<T> {
    head: T;
    drink(booze:string):void;
    killAllHumans(humanNames: Array<string>):void;
}

class BenderRodriges<M> implements Bender<string> {
    public head: string;
    public boose: M;
    
    public drink(booze: string): void {
        throw new Error("Method not implemented.");
    }
    
    public killAllHumans(humanNames: string[]) {
        throw new Error("Method not implemented.");
    }

    public makeEval():void{
        throw new Error("Method not implemented.");
    }
}

let bender: Bender<string> = new BenderRodriges();
//bender.makeEval() // Is not working!//