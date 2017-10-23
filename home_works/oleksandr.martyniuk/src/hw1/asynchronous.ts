const getPromise: (delay: number) => Promise<void> = (delay) => {
    return new Promise<void>((resolve, reject) => {
        setTimeout((): void => { resolve() }, delay);
    });
}

function run(t1: number, t2: number, t3: number): void {
    
    // SZ missed type for arrow function  +
    new Promise<void>((resolve, reject): void => {
        let done = false;
        const onFirstComplete = (): void => { console.log('Done!'); };
        const onAllComplete = (): void => {
            if (!done) {
                done = true;
            } else {
                console.log('DONE!');
            }
        };

        // SZ missed return type for arrow functions +
        getPromise(t1).then((): Promise<void> => getPromise(t2))
            .then(() => {
                onFirstComplete();
                onAllComplete();
            });
        getPromise(t3).then(onAllComplete);
    })
}

run(10,15,30);