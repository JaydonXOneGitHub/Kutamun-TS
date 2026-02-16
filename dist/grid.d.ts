import { Result } from "./types.js";
import { Vector2 } from "./vector.js";
export type Layout2D<T> = Array<Array<T>>;
export declare class Grid<GridButton> {
    private buttons;
    private position;
    constructor(buttons?: Layout2D<GridButton>, position?: Vector2<number>);
    getButtons(): Layout2D<GridButton>;
    getPosition(): Vector2<number>;
    static from<GridButton>(callback: () => Layout2D<GridButton>, position?: Vector2<number>): Grid<GridButton>;
    getButton(): Result<GridButton, string>;
}
//# sourceMappingURL=grid.d.ts.map