"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Grid = void 0;
const vector_js_1 = require("./vector.js");
class Grid {
    buttons;
    position;
    constructor(buttons = [], position = new vector_js_1.Vector2(0, 0)) {
        this.buttons = buttons;
        this.position = position;
    }
    getButtons() {
        return this.buttons;
    }
    getPosition() {
        return this.position;
    }
    static from(callback, position = new vector_js_1.Vector2(0, 0)) {
        return new Grid(callback(), position);
    }
    getButton() {
        const b1 = this.buttons.at(this.position.two);
        if (b1 === undefined) {
            return "Section not found!";
        }
        const b2 = b1.at(this.position.one);
        if (b2 === undefined) {
            return "Button not found!";
        }
        return b2;
    }
}
exports.Grid = Grid;
//# sourceMappingURL=grid.js.map