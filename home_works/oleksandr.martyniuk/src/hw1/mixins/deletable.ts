export class Deletable {
    public value: string;

    public delete(): void {
        this.value = 'deleted';
    }
}
