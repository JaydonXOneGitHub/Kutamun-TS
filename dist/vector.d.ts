export type PrimativeVector3<T> = {
    one: T;
    two: T;
    three: T;
};
export type PrimativeVector2<T> = {
    one: T;
    two: T;
};
export declare class Vector3<T> {
    one: T;
    two: T;
    three: T;
    constructor(one: T, two: T, three: T);
    static fromObject<T>(obj: PrimativeVector3<T>): Vector3<T>;
    toObject(): PrimativeVector3<T>;
}
export declare class Vector2<T> {
    one: T;
    two: T;
    constructor(one: T, two: T);
    static fromObject<T>(obj: PrimativeVector2<T>): Vector2<T>;
    toObject(): PrimativeVector2<T>;
}
//# sourceMappingURL=vector.d.ts.map