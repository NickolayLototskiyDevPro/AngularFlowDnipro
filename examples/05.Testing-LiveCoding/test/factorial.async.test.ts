import * as chai from 'chai';

import { MathService } from '../src/math.service'
const { assert } = chai;



describe('Async factorial test suite', () => {
    it('Input 3, expected 6 after 500 ms', ( done ) => {
        // Arrange
        const input = 3;
        const expectedValue = 6;

        const callback = (val: number): void => {
            // Assert
            assert.equal(val, expectedValue, 'Wrong factorial calculation');
            done();
        }

        //Act
        MathService.factorialAsync(input, callback);
    });

    it('Input 5, expected 120 after 500 ms', ( done ) => {
        // Arrange
        const input = 5;
        const expectedValue = 120;

        const callback = (val: number): void => {
            // Assert
            assert.equal(val, expectedValue, 'Wrong factorial calculation');
            done();
        }

        //Act
        MathService.factorialAsync(input, callback);
    });

    xit('Input -1, trows Error after 500 ms', (done) => {
        // Arrange
        const input = -1;
        expect(MathService.factorialAsync(input, () => {})).toThrow('Wrong argument range');
    });
});
