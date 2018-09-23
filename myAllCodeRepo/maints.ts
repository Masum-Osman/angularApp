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

