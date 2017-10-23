import { Readable } from './readable';
import { Deletable } from './deletable';
import { Disposable } from './disposable';

export class Mixer implements Disposable, Deletable, Readable {
    constructor();
    constructor(id: string);
    constructor(id?: string) {
        Readable.init(this, id); // sorry, had no better idea of how to do this
    }

    public value: string = 'ok';

    // Readable
    public id: string;

    // Disposable
    public dispose: () => void;

    //Deletable
    public delete: () => void;

    public toString(): string {
        return JSON.stringify(this);
    }
}