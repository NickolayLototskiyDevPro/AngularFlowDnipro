import {} from 'jest';
import { assert } from 'chai';
import { Math } from '../src/math';

test('Input 1, expected 1', ( done ) => {
    const cb = function(factorial){
        assert.equal(120, factorial, 'Wrong factorial');
        done();
    };
    Math.factorialAsync(5, cb)
});

test('Input 1, expected 1', (done: Function):void => {
    const callback:(num:number)=> void = (data:number): void => {
        assert.equal(1, data, 'Unexpected output');
        done();
    }

    Math.factorialAsync(1, callback);
});

test('Input 1, expected 1', () => {
    return Math.factorialAwait(1)
        .then((data) => {
            assert.equal(1, data);
        })
})