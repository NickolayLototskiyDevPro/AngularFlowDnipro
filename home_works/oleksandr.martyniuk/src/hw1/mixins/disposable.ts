export class Disposable {
    public value: string;

    public dispose(): void {
        this.value = '';
    }
}
