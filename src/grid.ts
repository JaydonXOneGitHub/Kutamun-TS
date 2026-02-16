import { Result } from "./types.js";
import { Vector2 } from "./vector.js";

export type Layout2D<T> = Array<Array<T>>;

export class Grid<GridButton>
{
    private buttons: Layout2D<GridButton>;
    private position: Vector2<number>

    public constructor(
        buttons: Layout2D<GridButton> = [],
        position: Vector2<number> = new Vector2(0, 0)
    )
    {
        this.buttons = buttons;
        this.position = position;
    }

    public getButtons(): Layout2D<GridButton>
    {
        return this.buttons;
    }

    public getPosition(): Vector2<number>
    {
        return this.position;
    }

    public static from<GridButton>(
        callback: () => Layout2D<GridButton>,
        position: Vector2<number> = new Vector2(0, 0)
    ): Grid<GridButton>
    {
        return new Grid<GridButton>(callback(), position);
    }

    public getButton(): Result<GridButton, string>
    {
        const b1 = this.buttons.at(this.position.two);

        if (b1 === undefined)
        {
            return "Section not found!";
        }

        const b2 = b1.at(this.position.one);

        if (b2 === undefined)
        {
            return "Button not found!";
        }

        return b2;
    }
}