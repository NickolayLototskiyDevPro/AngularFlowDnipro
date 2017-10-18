// Implementation of 5th homework task

// SZ each class, interface or enum should be in separeate file
// SZ missed access modifiers, each method or property in class should has it
class Disposable{
    smartText: string;
    dispose () {
        this.smartText = '';
    }
}

class Deletable{
    smartText: string;
    delete () {
        this.smartText = 'deleted';
    }
}

class Readable{
    smartText: string;
    isReadOnly: boolean;
    readOnly () {
        this.isReadOnly = false;
    }
    changeText (text: string) {
        if (!this.readOnly) {
            this.smartText = text;
        } else {
            console.log('You can only read this text');
        };
    }
    readText () {
        console.log(this.smartText);
    }
}

class textObject implements Disposable, Deletable, Readable {
    smartText: string

    constructor (text: string){
        this.smartText = text;
        console.log('Created smart class', this);
    }

    // Disposable
    dispose: () => void;

    // Deletable
    delete: () => void;

    // Readable
    isReadOnly: false;
    readOnly: () => void;
    readText: () => void;
    changeText: (text: string) => void;
}

applyMixins(textObject, [Disposable, Deletable, Readable]);

function applyMixins(derivedCtor: any, baseCtors: any[]){
    baseCtors.forEach(baseCtor => {
        Object.getOwnPropertyNames(baseCtor.prototype).forEach(name => {
            derivedCtor.prototype[name] = baseCtor.prototype[name];
        });
    });
}


// SZ please use const instead of var
var txtObj = new textObject('some text');
txtObj.readText();
txtObj.dispose();
txtObj.readText();
txtObj.delete();
txtObj.readText();
txtObj.changeText('new text');
txtObj.readText();
txtObj.readOnly();
txtObj.changeText('new text 2');
