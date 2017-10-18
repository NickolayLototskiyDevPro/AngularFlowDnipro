
// SZ missed access modifiers for properties in all classes
abstract class Disposable{
    state: string;
    public dispose(): boolean{
        if (this.canBeChanged) this.state = '';
        return this.canBeChanged
    }
    public abstract get canBeChanged():boolean;
}

abstract class Deletable{
    state: string;
    public delete(): boolean{
        // SZ please use curly breakets even for single row expressions
        if (this.canBeChanged) this.state = 'deleted';
        return this.canBeChanged
    }
    public abstract get canBeChanged():boolean;
}

// SZ all other classes are abstract - NOT for rework
class Readable{
    isReadonly: boolean;
    get readonly(): boolean{
        return this.isReadonly;
    }

    set readonly(val: boolean){
        this.isReadonly = val;
    }
}

export class SmartObject implements Disposable, Deletable, Readable{
    isReadonly: boolean;
    readonly: boolean;
    
    public get canBeChanged(): boolean {
        return !this.readonly
    }
    public get currentState(): string{
        return this.state;
    }

    dispose: () => boolean;
    delete: () => boolean;
    state: string = 'operating';
}

applyMixins(SmartObject, [Disposable, Disposable, Deletable, Readable]);

function applyMixins(derivedCtor: any, baseCtors: any[]){
    baseCtors.forEach(baseCtor => {
        Object.getOwnPropertyNames(baseCtor.prototype).forEach(name => {
            derivedCtor.prototype[name] = baseCtor.prototype[name];
        });
    });
}