'use strict'

let a = 0;
let b = ['a', 'b', 'c'];
console.log(b[0]);
for (let i = 0; i < b.length; i++) {
    console.log(b[i]);
}

function func() {
    console.log(a);
}

func();
console.log('hello');

let interval = setInterval(() => {
    a++;
    document.getElementById('a').innerHTML = a;
}, 1000);

setTimeout(() => {
    clearInterval(interval);
}, 10000);
