function log(message) {
    console.log(message);
}
var message = 'Bismillahir Rahmanir Rahim';
log(message);
function math() {
    for (var i = 0; i < 5; i++) {
        console.log(i);
    }
    console.log('finally: ' + i);
}
math();

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

