export class Order {
    private items: number[] = [];
    public get ItemsCount(): number {
        return this.items.length;
    }
    public addItem(item: number): void {
        this.items.push(item);
    }

    public countTotal(tax: number):number {
        if(tax > 100 || tax < 0){
            throw new Error('Invalid tax range');
        }

        const total = this.items.reduce((r, i):number => {
            return r += i;
        });

        return total + (total/100)*tax;
    }
}