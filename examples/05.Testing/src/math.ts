export class Math {
    public static factorial(n: number):number {
        if( n < 0 ){
            throw new Error ('Wrong parameter range');
        }

        return n === 0? 1 : n * Math.factorial(n - 1);
    }

    public static factorialAsync(n: number, cb: (res:number) => void):void{
        setTimeout(() => {
            const res = Math.factorial(n);
            cb(res);
        }, 500);
    }

    public static factorialAwait(n: number):Promise<number>{
        return new Promise( (res, rej) =>{
            setTimeout(() => {
                if( n < 0 ){
                    rej(Math.factorial(n));
                }
                res(Math.factorial(n));
            });
        })
    }
}