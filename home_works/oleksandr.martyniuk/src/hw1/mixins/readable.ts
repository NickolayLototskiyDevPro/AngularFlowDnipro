export class Readable {

    public static init(inst: Readable, id: string){
        Object.defineProperty(inst, 'id', {
            value: id,
            writable: false,
            enumerable: true
        });
    }

    public id: string;
}
