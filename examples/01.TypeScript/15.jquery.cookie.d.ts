export interface JQueryStatic {
    cookie(key: string, value: string): string | void;
}

// Our exports:
export function getPerpetualEnergy(): any[];

export function endWorldHunger(n: boolean): void;

// Make this available as a global for non-module code.
export as namespace MyFavoriteLibrary;