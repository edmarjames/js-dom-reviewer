// 1. createElement

/* 
    - creates a new HTML element and attach it to the DOM tree.
    - it accepts an HTML tag name and returns a new node with the element type.
    - using 'appendChild' we can append the created element to a parent element.

    Syntax:
        document.createElement('HTMLTagName');
*/
const container = document.querySelector('.myContainer');
const square = document.createElement('div');
square.className = "main-square";
container.appendChild(square);

// to add an id to a div, you set the id attribute of the element to a value. See example below.
const childSquare = document.createElement('div');
childSquare.className = "child-square";
childSquare.id = "first-child";
square.appendChild(childSquare);

// to add a CSS class use 'className'. See example below.
const alternateChildSquare = document.createElement('div');
alternateChildSquare.className = "child-square-alternate";
alternateChildSquare.id = "middle-child";
childSquare.appendChild(alternateChildSquare);

// to add a piece of text, you can use the innerHTML property. See example below.
const innerChildSquare = document.createElement('div');
innerChildSquare.className = "child-square";
innerChildSquare.id = "last-child";
innerChildSquare.innerHTML = "This squares are created using <em>createElement</em>"
alternateChildSquare.appendChild(innerChildSquare);

// If you want to load a JavaScript file dynamically. You can do that using "createElement" to create the script element and add it to the document.

// first create a function that creates a script and assign it's attributes one by one
function loadJS(url) {
    let script = document.createElement('script');
    script.src = url;
    script.async = true;
    document.body.appendChild(script);
}

// Invoke the helper function to load the hello.js file.
loadJS('./hello.js');


// 2. appendChild

/* 
    - this method allows you to add a node to the end of the list of child nodes of a specified parent node.
    - if the childNode is a reference to an existing node in the document, the "appendChild" method moves the childNode from its current position to the new position.

    Syntax:
        parentNode.appendChild(childNode);
*/
const choices = document.querySelector('#choices');

function createChoices(content, id) {
    let li = document.createElement('li');
    let radio = document.createElement('input');
    radio.type = "radio";
    radio.name = "answer";
    radio.id = id;

    let label = document.createElement('label');
    label.for = id;
    label.textContent = content;

    li.appendChild(radio);
    li.appendChild(label);
    return li;
}

choices.appendChild(createChoices("2 (two)", "answer-1"));
choices.appendChild(createChoices("4 (four)", "answer-2"));
choices.appendChild(createChoices("3 (three)", "answer-3"))