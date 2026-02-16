import { Direction } from "./direction";
import { Grid } from "./grid";
import { Either, NavCallback, Result } from "./types";
import { Vector3 } from "./vector";

export class MultiGrid<GridButton>
{
    private grids: Map<number, Grid<GridButton>>;
    private gridIndex: Either<number, undefined>;

    public constructor()
    {
        this.grids = new Map();
        this.gridIndex = undefined;
    }

    public withGrid(index: number, grid: Grid<GridButton>): MultiGrid<GridButton>
    {
        if (this.grids.has(index))
        {
            return this;
        }

        this.grids.set(index, grid);

        return this;
    }

    public withGridIndex(index: number): MultiGrid<GridButton>
    {
        this.gridIndex = index;
        return this;
    }

    public moveFocus(
        direction: Direction,
        callback: NavCallback<GridButton>
    ): Result<void, string>
    {
        if (this.gridIndex === undefined)
        {
            return "MultiGrid has no assigned grid index!";
        }

        const grid: Either<Grid<GridButton>, undefined> = this.grids.get(this.gridIndex);

        if (grid === undefined)
        {
            return "MultiGrid has no Grid with set ID!";
        }

        const res = callback(
            this, direction, Vector3.fromObject(
                { 
                    one: this.gridIndex,
                    two: grid.getPosition().one,
                    three: grid.getPosition().two
                }
            )
        );

        if (typeof(res) === "string")
        {
            return res;
        }

        const newPos = res;

        this.gridIndex = newPos.one;
        grid.getPosition().one = newPos.two;
        grid.getPosition().two = newPos.three;
    }

    public getGrid(index: number): Either<Grid<GridButton>, undefined>
    {
        return this.grids.get(index);
    }

    public getGridButton(index: number): Result<GridButton, string>
    {
        const grid = this.getGrid(index);

        if (grid === undefined)
        {
            return "Grid at index not found!";
        }

        return grid.getButton();
    }
}