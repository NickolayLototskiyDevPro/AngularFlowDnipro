class Disposable {
    value: string;

    dispose(): void {
        this.value = '';
    }
}

class Deletable {
    value: string;

    delete(): void {
        this.value = 'deleted';
    }
}

class Readable {

    static init(inst: Readable, id: string){
        Object.defineProperty(inst, 'id', {
            value: id,
            writable: false,
            enumerable: true
        });
    }

    id: string;
}

class Mixer implements Disposable, Deletable, Readable {
    constructor();
    constructor(id: string);
    constructor(id?: string) {
        Readable.init(this, id); // sorry, had no better idea of how to do this
    }

    value: string = 'ok';

    // Readable
    id: string;

    // Disposable
    dispose: () => void;

    //Deletable
    delete: () => void;

    toString(): string {
        return JSON.stringify(this);
    }
}

applyMixins(Mixer, [Disposable, Deletable, Readable]);

function applyMixins(derivedCtor: any, baseCtors: any[]) {
    baseCtors.forEach(baseCtor => {
        Object.getOwnPropertyNames(baseCtor.prototype).forEach(name => {
            derivedCtor.prototype[name] = baseCtor.prototype[name];
        });
    });
}

var smm = new Mixer('3');
console.log('Created: ' + smm);
smm.delete();
console.log('Deleted: ' + smm);
smm.dispose();
console.log('Disposed: ' + smm);
smm = new Mixer('4');
console.log('Created with id: ' + smm);
smm.id = '2';
console.log('After trying to reassign id: ' + smm);