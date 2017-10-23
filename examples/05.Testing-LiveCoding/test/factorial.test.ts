import * as chai from 'chai';
import { MathService } from '../src/math.service';
const { assert } = chai; 

test('Invoke factorial functionality. Input 5. Expected 120',() => {
    // Arrange
    const inputValue = 5;
    const expectedResult = 120; 

    // Act
    const actualResult = MathService.factorial(inputValue);

    // Assert
    assert.equal(actualResult, expectedResult, 'Not expected factorial result');
});

test('Invoke factorial functionality. Input 0. Expected 1',() => {
    // Arrange
    const inputValue = 0;
    const expectedResult = 1; 

    // Act
    const actualResult = MathService.factorial(inputValue);

    // Assert
    assert.equal(actualResult, expectedResult, 'Not expected factorial result');
});

test('Invoke factorial functionality. Input -1. Expected throw Error',() => {
    // Arrange
    const inputValue = -1;
    
    // Act
    assert.throws(() => {
        MathService.factorial(inputValue);
    }, 'Wrong argument range');
});

test('Invoke factorial functionality. Input 5.6. Expected 120',() => {
    // Arrange
    const inputValue = 5.6;
    const expectedResult = 120; 

    // Act
    const actualResult = MathService.factorial(inputValue);

    // Assert
    assert.equal(actualResult, expectedResult, 'Not expected factorial result');
});