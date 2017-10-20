import { runAll } from '../hw1/async';

it('runs async task', async () => {
    const querySpy = jest.spyOn(window.console, 'log');
    await runAll();
    expect(window.console.log).toBeCalledWith('DONE!');
    expect(querySpy.mock.calls).toEqual([
        ["job1 job started."], ["job2 job started."], 
        ["job1 job finished."], ["job2 job finished."], 
        ["job3 job started."], ["job3 job finished."], 
        ["DONE!"]]);
});