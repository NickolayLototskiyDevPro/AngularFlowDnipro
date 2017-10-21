import {} from 'jest';
import { assert } from 'chai';
import { Math } from '../src/math';


test('Input 1, expected 1', () => {
    const input: number = 1;
    
    const value: number = Math.factorial(input);
    
    assert.equal(value, 1, 'Wrong output');
});

test('Input 0, expected 1', () => {
    const input = 0;
    
    const value = Math.factorial(input);
    
    assert.equal(value, 1, 'Wrong output');
});

test('Input -1, expected Exception', () => {
    const input:number = 0;

    assert.throws(()=>{
        Math.factorial(-1);
    }, 'Wrong parameter range');
})