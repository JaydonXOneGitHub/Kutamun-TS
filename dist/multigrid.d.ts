import { Direction } from "./direction";
import { Grid } from "./grid";
import { Either, NavCallback, Result } from "./types";
export declare class MultiGrid<GridButton> {
    private grids;
    private gridIndex;
    constructor();
    withGrid(index: number, grid: Grid<GridButton>): MultiGrid<GridButton>;
    withGridIndex(index: number): MultiGrid<GridButton>;
    moveFocus(direction: Direction, callback: NavCallback<GridButton>): Result<void, string>;
    getGrid(index: number): Either<Grid<GridButton>, undefined>;
    getGridButton(index: number): Result<GridButton, string>;
}
//# sourceMappingURL=multigrid.d.ts.map