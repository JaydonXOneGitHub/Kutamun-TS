export type PrimativeVector3<T> = {one: T, two: T, three: T};
export type PrimativeVector2<T> = {one: T, two: T};

export class Vector3<T>
{
    public one: T;
    public two: T;
    public three: T;

    public constructor(one: T, two: T, three: T)
    {
        this.one = one;
        this.two = two;
        this.three = three;
    }

    public static fromObject<T>(obj: PrimativeVector3<T>): Vector3<T> {
        return new Vector3(obj.one, obj.two, obj.three);
    }

    public toObject(): PrimativeVector3<T> {
        return { one: this.one, two: this.two, three: this.three };
    }
}

export class Vector2<T>
{
    public one: T;
    public two: T;

    public constructor(one: T, two: T)
    {
        this.one = one;
        this.two = two;
    }

    public static fromObject<T>(obj: PrimativeVector2<T>): Vector2<T> {
        return new Vector2(obj.one, obj.two);
    }

    public toObject(): PrimativeVector2<T> {
        return { one: this.one, two: this.two };
    }
}