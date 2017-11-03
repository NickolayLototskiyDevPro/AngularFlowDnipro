const delay = function(time: number, message: string):Promise<string> {
    return new Promise<string>((res: (string) => void, rej: (Error) => void) => {
        setTimeout(():void=>{
            console.log(message);
            return res(message);
        }, time * 1000);
    });
}


const promise1 = delay(3, "1").then(():Promise<string> => {
    return delay(2, "2").then((data):string => {
        console.log('done')
        return data;
    });
});

const promise2 = delay(6, "3");

Promise.all([promise1, promise2]).then((): void => console.log('DONE!!!'));