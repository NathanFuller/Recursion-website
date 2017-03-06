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
    else{ //These ones will have children
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

//Write a function that returns a Pell tree

//Write a function that returns a Tribonacci tree


//They will be called here
fibDiv.appendChild(fibHelper(6));
pellDiv.innerHTML = 'pelletor';
triDiv.innerHTML = 'what color is this one?';

document.querySelector('title').innerHTML = 'Recursion Website';


