"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MultiGrid = void 0;
const vector_1 = require("./vector");
class MultiGrid {
    grids;
    gridIndex;
    constructor() {
        this.grids = new Map();
        this.gridIndex = undefined;
    }
    withGrid(index, grid) {
        if (this.grids.has(index)) {
            return this;
        }
        this.grids.set(index, grid);
        return this;
    }
    withGridIndex(index) {
        this.gridIndex = index;
        return this;
    }
    moveFocus(direction, callback) {
        if (this.gridIndex === undefined) {
            return "MultiGrid has no assigned grid index!";
        }
        const grid = this.grids.get(this.gridIndex);
        if (grid === undefined) {
            return "MultiGrid has no Grid with set ID!";
        }
        const res = callback(this, direction, vector_1.Vector3.fromObject({
            one: this.gridIndex,
            two: grid.getPosition().one,
            three: grid.getPosition().two
        }));
        if (typeof (res) === "string") {
            return res;
        }
        const newPos = res;
        this.gridIndex = newPos.one;
        grid.getPosition().one = newPos.two;
        grid.getPosition().two = newPos.three;
    }
    getGrid(index) {
        return this.grids.get(index);
    }
    getGridButton(index) {
        const grid = this.getGrid(index);
        if (grid === undefined) {
            return "Grid at index not found!";
        }
        return grid.getButton();
    }
}
exports.MultiGrid = MultiGrid;
//# sourceMappingURL=multigrid.js.map