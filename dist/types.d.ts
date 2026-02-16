import { Direction } from "./direction";
import { MultiGrid } from "./multigrid";
import { Vector3 } from "./vector";
export type Either<A, B> = A | B;
export type Result<A, B> = A | B;
export type NavCallback<T> = (multiGrid: MultiGrid<T>, direction: Direction, oldPos: Vector3<number>) => Result<Vector3<number>, string>;
//# sourceMappingURL=types.d.ts.map