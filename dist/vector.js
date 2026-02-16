"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vector2 = exports.Vector3 = void 0;
class Vector3 {
    one;
    two;
    three;
    constructor(one, two, three) {
        this.one = one;
        this.two = two;
        this.three = three;
    }
    static fromObject(obj) {
        return new Vector3(obj.one, obj.two, obj.three);
    }
    toObject() {
        return { one: this.one, two: this.two, three: this.three };
    }
}
exports.Vector3 = Vector3;
class Vector2 {
    one;
    two;
    constructor(one, two) {
        this.one = one;
        this.two = two;
    }
    static fromObject(obj) {
        return new Vector2(obj.one, obj.two);
    }
    toObject() {
        return { one: this.one, two: this.two };
    }
}
exports.Vector2 = Vector2;
//# sourceMappingURL=vector.js.map