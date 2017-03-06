//this is my javascript

//Create an element in the <head> that looks like this: <link rel="stylesheet" href="styles.css">
var style = document.createElement('link');
style.setAttribute('rel', 'stylesheet');
style.setAttribute('href', 'myStyle.css');
document.querySelector('head').appendChild(style)
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

//Write a function that returns a Pell tree

//Write a function that returns a Tribonacci tree


//They will be called here
fibDiv.innerHTML = 'goop';
pellDiv.innerHTML = 'pelletor';
triDiv.innerHTML = 'what color is this one?';
fibDiv.
