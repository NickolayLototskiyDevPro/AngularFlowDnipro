export class MathService {
    public static factorial(input: number): number{
        input = Math.floor(input);

        if(input < 0 ){
            throw new Error('Wrong argument range');
        }

        if(input === 0) {
            return 1;
        } else {
            return MathService.factorial(input - 1) * input;
        }
    }

    public static factorialAsync(input: number, cb: (num: number) => void){
        setTimeout( () => {
            const val = MathService.factorial(input);
            cb(val);
        } , 500);
    }

    public static factorialPromisify(input: number): Promise<number> {
        return new Promise((res: (data: number) => void, rej: (err: Error) => void) => {
            setTimeout(() => {
                if(input < 0){
                    return rej(new Error('Wrong argument range'));
                } else {
                    return res(MathService.factorial(input));
                }
            }, 500);
        });
    }

    public static async factorialAwait(input: number):Promise<number>{
        const result = await MathService.factorialPromisify(input);
        return result; 
    }

}