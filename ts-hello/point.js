"use strict";
exports.__esModule = true;
var Point = /** @class */ (function () {
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    Point.prototype.draw = function () {
        console.log('Here, your X: ' + this.x + ' and Y: ' + this.y);
    };
    Point.prototype.getValue = function () {
        return this.x;
    };
    return Point;
}());
exports.Point = Point;
