

let currentColor = 0;
let colors = ['red', 'green', 'blue'];

function col() {
    currentColor++;
    if (currentColor > 2) currentColor = 0;
    let a = document.getElementById("p");
    a.style.color = colors[currentColor];
}

/* 1. Create function that returns of times it was called (if you call it 1 time - returns 1, 2 times - 2, etc.) */

function numberOfCalls() {
    let calls = 1;
    return function() {          
        return calls++;
    }
}
call = numberOfCalls();

call();  

/* Write a function that receives one parameter x and returns function which receives parameter a and returns multiplication a * x for the first call, and previous returned value multiplied by a for the all consecutive calls
Example:
x = 3:
first call of generated function, a = 2, it returns 6
second call of generated function, a = 3, it returns 18
third call of generated function, a = 2, it returns 36 */

function f(x) {
    return function (a) {
        return x = a * x;
    }
}

call = f(3)

/* first call */ call(2);
/* second call */ call(3);
/* third call */ call(2);