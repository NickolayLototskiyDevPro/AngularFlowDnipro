const delay = (ms:number): Promise<void> => new Promise(resolve => setTimeout(resolve, ms));
const delay500withReport = async (jobId: string): Promise<void> => {
    console.log(`${jobId} job started.`);
    await delay(500);
    console.log(`${jobId} job finished.`);
}

const run1 = async (): Promise<void> => await delay500withReport('job1');
const run2 = async (): Promise<void> => await delay500withReport('job2');
const run3 = async (): Promise<void> => await delay500withReport('job3');

export async function runAll(): Promise<void> {
    const job1and3cascade = async () => { 
        await run1();
        await run3();
    }
    await Promise.all([ job1and3cascade(), run2() ]);
    console.log('DONE!');
}