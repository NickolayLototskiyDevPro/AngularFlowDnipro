export interface IList<T> {
    push(item: T): void;
    getAllItems():Array<T>;
}