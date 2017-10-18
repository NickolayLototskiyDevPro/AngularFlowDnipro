import { runAll } from '../hw1/async';

it('runs async task', async () => {
    const querySpy = jest.spyOn(window.console, 'log');
    await runAll();
    expect(window.console.log).toBeCalledWith('DONE!');
    expect(querySpy.mock.calls).toBeCalledWith([]);
});