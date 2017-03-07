//this is my javascript

//Create an element in the <head> that looks like this: <link rel="stylesheet" href="styles.css">
var style = document.createElement('link');
style.setAttribute('rel', 'stylesheet');
style.setAttribute('href', 'myStyle.css');
document.querySelector('head').appendChild(style);
//Note: All of this ^^ will need to be replaced by turning the document into a bunch of string literals
// that will be appended to the document with js



//Create some div's to contain our functions
var fibDiv = document.createElement('div');
fibDiv.id = 'bigFibDiv';
document.querySelector('body').appendChild(fibDiv);

var pellDiv = document.createElement('div');
pellDiv.id = 'bigPellDiv';
document.querySelector('body').appendChild(pellDiv);

var triDiv = document.createElement('div');
triDiv.id = 'bigTriDiv';
document.querySelector('body').appendChild(triDiv);

//Write a function that returns a Fibonacci tree

var fibHelper = function(n) {
    var p;
    var value;
    var div = document.createElement('div');
    div.setAttribute("class", "fib");           //<div class='fib'></div>

    if (n<2){ //These won't have children
        if (n===0){
            value = 0;
        }
        else if (n===1){
            value = 1;
        }
        p = document.createElement('p');
        p.textContent = 'Fib(' + n + ') = ' + value;    //For example: <div class='fib'><p>Fib(0) = 0</p></div>
        div.appendChild(p);
    }
    else{ //These ones will have children that are themselves "fibHelper object"s...
        var left = fibHelper(n-1);
        left.html.setAttribute("class", "fib-left");
        var right = fibHelper(n-2);
        right.html.setAttribute("class", "fib-right");

        value = left.value+right.value;
        p = document.createElement('p');
        p.textContent = 'Fib(' +n+ ') = ' + value;
        div.appendChild(p);

        div.appendChild(left.html);
        div.appendChild(right.html);

    }
    return { 'value': value, 'html': div};          // object that includes a 'value' and an 'html' (div)
};


var fibbonaci = function (number) {
    return fibHelper(number).html;
};
//Write a function that returns a Pell tree
function pellHelper(n){
    var value;
    var div = document.createElement('div');
    div.setAttribute('class', 'pell');

    if (n<2){
        if (n===0){
            value = 0;
        } else if (n===1){
            value = 1;
        }
        p = document.createElement('p');
        p.textContent = 'Pell(' + n + ') = ' + value;
        div.appendChild(p);
    } else {
        var left = pellHelper(n-1);
        left.html.setAttribute('class', 'pell-left');
        var right = pellHelper(n-2);
        right.html.setAttribute('class', 'pell-right');

        value = (2*left.value) + right.value;
        p = document.createElement('p');
        p.textContent = 'Pell(' + n + ') = ' + value;
        div.appendChild(p);

        div.appendChild(left.html);
        div.appendChild(right.html);
    }
    return { 'value': value, 'html': div};
}

function pell(number){
    return pellHelper(number).html;
}

//Write a function that returns a Tribonacci tree
function triHelper(n){
    var value;
    var div = document.createElement('div');
    div.setAttribute('class', 'tri');

    if (n<3){
        if (n===0){
            value = 0;
        } else if (n===1||n===2){
            value = 1;
        }
        p = document.createElement('p');
        p.textContent = 'Tri(' + n + ') = ' + value;
        div.appendChild(p);
    } else {
        var left = triHelper(n-1);
        left.html.setAttribute('class', 'tri-left');
        var mid = triHelper(n-2);
        mid.html.setAttribute('class', 'tri-mid');
        var right = triHelper(n-3);
        right.html.setAttribute('class', 'tri-right');

        value = left.value + mid.value + right.value;
        p = document.createElement('p');
        p.textContent = 'Tri(' + n + ') = ' + value;
        div.appendChild(p);

        div.appendChild(left.html);
        div.appendChild(mid.html);
        div.appendChild(right.html);
    }
    return { 'value': value, 'html': div};
}

function tri(number){
    return triHelper(number).html;
}

//They will be called here
fibDiv.appendChild(fibbonaci(11));
pellDiv.appendChild(pell(11));
triDiv.appendChild(tri(11));

document.querySelector('title').innerHTML = 'Recursion Website';



