import { SmartObject } from '../hw1/mixin';

it('creates SmartObject and dispose it', () => {
    let so = new SmartObject();
    expect(so.dispose()).toBeTruthy();
    expect(so.currentState).toEqual('');
});

it('creates SmartObject and delete it', () => {
    let so = new SmartObject();
    expect(so.delete()).toBeTruthy();
    expect(so.currentState).toEqual('deleted');
});

it('creates SmartObject, sets it readonly and tries to dispose and to delete it', () => {
    let so = new SmartObject();
    so.readonly = true;
    expect(so.dispose()).toBeFalsy();
    expect(so.delete()).toBeFalsy();
    expect(so.currentState).toEqual('operating');
});