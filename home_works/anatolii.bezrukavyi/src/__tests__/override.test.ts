import { override, DateParams } from '../hw1/override';

test('overrides Oct 17, 2017', () => {
    expect(override(17, 'Oct', 2017)).toEqual(new Date(2017, 10 - 1, 17));
});

test('overrides Oct 17, 2017', () => {
    expect(override(17, 'Oct', 2017)).toEqual(override(17, 10, 2017));
});

test('overrides Oct 17, 2017', () => {
    expect(override([new DateParams(17, 10, 2017)])).toEqual([override(17, 'Oct', 2017)]);
});