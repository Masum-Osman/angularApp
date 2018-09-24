export class Point {

    constructor (private x? :number, private y?: number) {
    }

    public draw() {
        console.log('Here, your X: '+ this.x + ' and Y: '+ this.y);
    }

    getValue() {
        return this.x;
    }

}