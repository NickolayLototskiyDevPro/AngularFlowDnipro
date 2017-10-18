// SZ please address all your qustions about comments below to Nickolay Lototskiy

// SZ missed type of constant
// SZ missed return type of arrow funcitons
const delay = (ms:number) => new Promise(resolve => setTimeout(resolve, ms));
const delay500withReport = async (jobId: string) => {
    console.time(jobId);
    console.log(`{jobId} job started. Timestamp: {Performance.now()}`);
    await delay(500);
    console.log(`{jobId} job finished. Timestamp: {Performance.now()}`);
    console.timeEnd(jobId);
}

// SZ missed type of constants
const run1 = async () => await delay500withReport('job1');
const run2 = async () => await delay500withReport('job2');
const run3 = async () => await delay500withReport('job3');

// SZ missed return type of runction
export async function runAll() {
    console.time('runAll execution time');
    const job1and3cascade = async () => { 
        await run1();
        await run3();
    }
    await Promise.all([ job1and3cascade, run2 ]);
    console.log('DONE!');
    console.timeEnd('runAll execution time');
}