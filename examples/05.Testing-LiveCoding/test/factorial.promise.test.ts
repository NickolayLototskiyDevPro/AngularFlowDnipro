import * as chai from 'chai';

import { MathService } from '../src/math.service'
const { assert } = chai;



describe('Promise factorial test suite', () => {
    it('Input 3, expected 6 after 500 ms', ( done ) => {
        // Arrange
        const input = 3;
        const expectedValue = 6;

        MathService
            .factorialPromisify(input)
            .then( (data: number) => {
                assert.equal(expectedValue, data, 'Wrong calculation');
                done();
            })
    });

    it('Input 5, expected 120 after 500 ms', () => {
        // Arrange
        const input = 3;
        const expectedValue = 6;

        return MathService
            .factorialPromisify(input)
            .then( (data: number) => {
                assert.equal(expectedValue, data, 'Wrong calculation');
            });
    });

    it('Input -1, trows Error after 500 ms', () => {
        // Arrange
        const input = -1;

        return expect(MathService.factorialPromisify(input))
            .rejects.toEqual(new Error('Wrong argument range'));
    });
});
