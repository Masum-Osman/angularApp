var Point = /** @class */ (function () {
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    Point.prototype.draw = function () {
        console.log('Here, your X: ' + this.x + ' and Y: ' + this.y);
    };
    return Point;
}());
var now_point = new Point(10, 20);
now_point.draw();
