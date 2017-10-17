type ids = string | number;

class HumanBeing {
    id: ids = 'None';

    constructor();
    constructor(id:string);
    constructor(id:number);

    constructor(id?: ids){
        if(id){
            this.id = id;
        }
    }

    calMyName():void {
        console.log(this.id);
    }
}

class Coder extends HumanBeing {
    constructor(){
        let i = 3;
        super();
    }

    calMyName():void {
        console.log('Alexandro');
        super.calMyName();
    }
}