// SZ each class interface or enum should has separate file

class Deletable {
    public text: string;

    // SZ missed access modifiers for methods
    delete(): void {
        this.text = 'deleted';
    }
}

class Disposable {
    public text: string;

    dispose(): void {
        this.text = '';
    }
}

class Readable {
    public text: string;
    public isReadOnly: boolean;

    readOnly(): void {
        this.isReadOnly = true;
    }
}

class Mixable implements Deletable, Disposable, Readable {
    public text: string;
    public isReadOnly: boolean = false;

    readOnly: () => void;
    dispose: () => void;
    delete: () => void;

    public get value(): string {
        return this.text;
    }

    public set value(text: string) {
        if (!this.isReadOnly) {
            this.text = text;
        }
    }
}

applyMixins(Mixable, [Deletable, Disposable, Readable]);

function applyMixins(derivedCtor: any, baseCtors: any[]) {
    baseCtors.forEach(baseCtor => {
        Object.getOwnPropertyNames(baseCtor.prototype).forEach(name => {
            derivedCtor.prototype[name] = baseCtor.prototype[name];
        });
    });
}

// SZ please use const or let instead
// SZ missed type
var mix = new Mixable();

mix.value = 'mixable';
console.log(mix.value);

mix.delete();
console.log(mix.value);

mix.value = 'mixable2';
console.log(mix.value);

mix.dispose();
console.log(mix.value);

mix.value = 'mixable3';
console.log(mix.value);

mix.readOnly();
mix.value = 'mixable4';
console.log(mix.value);
