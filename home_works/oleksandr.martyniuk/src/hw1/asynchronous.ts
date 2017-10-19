const getPromise: (delay: number) => Promise<void> = (delay) => {
    return new Promise<void>((resolve, reject) => {
        setTimeout((): void => { resolve() }, delay);
    });
}

function run(t1: number, t2: number, t3: number): void {
    new Promise<void>((resolve, reject) => {
        let done = false;
        const onFirstComplete = (): void => { console.log('Done!'); };
        const onAllComplete = (): void => {
            if (!done) {
                done = true;
            } else {
                console.log('DONE!');
            }
        };
        getPromise(t1).then(() => getPromise(t2))
            .then(() => {
                onFirstComplete();
                onAllComplete();
            });
        getPromise(t3).then(onAllComplete);
    })
}

run(10,15,30);