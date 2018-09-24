class Point {

    public x;
    public y;

    constructor (x? :number, y?: number) {
        this.x = x;
        this.y = y;
    }

    public draw() {
        console.log('Here, your X: '+ this.x + ' and Y: '+ this.y);
    }

}

let now_point = new Point(10,20);

now_point.draw();