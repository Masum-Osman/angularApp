/*
//No 1
function log(message) {
    console.log(message);
}

var message = 'Bismillahir Rahmanir Rahim';

log(message);

function math() {
    for (var i = 0; i<5; i++) {
        console.log(i);
    }

    console.log('finally: '+i);
}

math();

//No 2
let message;
message = 'abc';
// 1 way
let check1Way = (<string>message).endsWith('c');

//anotherWay
let check2Way = (message as string).endsWith('c');

//3
//both are same:)

//1
let log = function(message) {
    console.log(message);
}


//2
let dolog = (message) => {
    console.log(message);
}

//3

interface Point {
    x: number,
    y: number
}

let drawPoint = (point: Point) => {
    //...
}

drawPoint( {
    x: 1,
    y: 2
} )

//4

class Point {

    public x;
    public y;

    draw() {
        console.log('Here, your X: '+ this.x + ' and Y: '+ this.y);
    }

}

let now_point = new Point();

now_point.x = 1;
now_point.y = 2;

now_point.draw();

//5 Constractors

class Point {

    public x;
    public y;

    constructor (x? :number, y?: number) {     //'?' defines optional parameter as TS don't support multiple constractors.
        this.x = x;                            // This is a great fun.
        this.y = y;                            //first Y is from the Classes Y. and then same to X.
    }

    public draw() {
        console.log('Here, your X: '+ this.x + ' and Y: '+ this.y);
    }

}

let now_point = new Point(10,20);

now_point.draw();

//5 New way to access modifier. Supports only in TypeScript

class Point {

    constructor (private x? :number, private y?: number) {     //this things...
    }

    public draw() {
        console.log('Here, your X: '+ this.x + ' and Y: '+ this.y);
    }

}

let now_point = new Point(10,20);

now_point.draw();

//6 

getting value of X as it is on the class

    getValue() {
        return this.x;
    }

}

let now_point = new Point(10,20);

let x = now_point.getValue();

//6 Modules

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

import { Point } from './point';

let now_point = new Point(10,20);

let x = now_point.getValue();
console.log(x);
now_point.draw();



*/
