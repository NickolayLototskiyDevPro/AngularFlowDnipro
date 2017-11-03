import * as chai from 'chai';

import { MathService } from '../src/math.service'
const { assert } = chai;



describe('Promise factorial test suite', () => {
    it('Input 3, expected 6 after 500 ms', async () => {
        // Arrange
        const input = 3;
        const expectedValue = 6;

        const actualValue = await MathService.factorialAwait(input);
        assert.equal(actualValue, expectedValue, 'Wrong calculation');
            
    });

    it('Input 5, expected 120 after 500 ms', async () => {
        // Arrange
        const input = 5;
        const expectedValue = 120;

        const actualValue = await MathService.factorialAwait(input);
        assert.equal(actualValue, expectedValue, 'Wrong calculation');
            
    });

    it('Input -1, trows Error after 500 ms', () => {
        // Arrange
        const input = -1;
        
        return expect(MathService.factorialAwait(input))
                    .rejects.toEqual(new Error('Wrong argument range'));
        });
});