const delayedSum = function(a: number, b: number): Promise<number> {
    return new Promise<number>(
    (res: (num:number) => void,
        reject: (err: Error) => void) => {
            setTimeout(()=> {
                if(a < 100500 || b < 100500){
                    return res(a + b);
                } else {
                    reject(new Error('Very big numbers'));
                }
            }, 500);
    });
}

delayedSum(2, 5)
    .then((data: number): string => {
        console.log(data);
        return 'DONE'
    })
    .then((data:string):void => {
        console.log(data);
        throw new Error('Chain failed');
    })
    .catch((err: Error):void => {
        console.log(err);
    });

const delay = function(time: number, message: string):Promise<string> {
    return new Promise<string>((res: (string) => void, rej: (Error) => void) => {
        setTimeout(():void=>{
            return res(message);
        }, time * 1000);
    });
}

delay(1, 'Hello')
    .then((data: string):Promise<string> => {
        console.log(data);
        return delay(2, 'Hi');
    })
    .then((data: string):Promise<string> => {
        console.log(data);
        return delay(0.5, 'How are you');
    })
    .then((data: string) => {
        console.log(data);
        console.log('Completely done!');
    });