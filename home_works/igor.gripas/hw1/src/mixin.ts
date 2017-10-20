class Disposable{
    _value: string;
    dispose(){
        this._value = '';
    }
}

class Deletable{
    _value: string;
    delete(){
        this._value = 'deleted';
    }
}

class Readable{
    isReadOnly: boolean;
    readOnly(){
        this.isReadOnly = true;
    }
}

class SmartObject implements Disposable, Deletable, Readable {
    constructor(){
        console.log('Created smart class');
    }

    _value: string;

    dispose: () => void;
    delete: () => void;
    isReadOnly: boolean = false;
    readOnly: () => void;

    public set value(val:string){
        if (!this.isReadOnly) {
            this._value = val;
        }
    }

    public get value():string {
        return this._value;
    }
}

applyMixins(SmartObject, [Disposable, Deletable, Readable]);

function applyMixins(derivedCtor: any, baseCtors: any[]){
    baseCtors.forEach(baseCtor => {
        Object.getOwnPropertyNames(baseCtor.prototype).forEach(name => {
            derivedCtor.prototype[name] = baseCtor.prototype[name];
        });
    });
}

var smm = new SmartObject();
smm.value = 'test';
smm.delete();
console.log('after delete value', smm.value);
smm.value = 'new';
smm.dispose();
console.log('desposed value', smm.value);
smm = new SmartObject();
smm.value = 'before readonly';
smm.readOnly();
smm.value = 'after readonly';
console.log('readonly value', smm.value);
