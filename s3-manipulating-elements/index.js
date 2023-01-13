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


/* 3. textContent
    - this property is used to get and set the text content of a node and its descendants */

/* 
    To GET the text content of a node and its descendants here is the syntax
    Syntax:
        node.textContent;
*/
console.log('\t\t This is the textContent of container \n\n'.toUpperCase());
console.log(container.textContent);
// As you can see on the console, it returns the concatenation of the textContent of every child node, excluding comments (and also processing instructions).

/* 
    To SET the text content of a node here is the syntax
    Syntax:
        element.textContent = "string";
*/
innerChildSquare.textContent = "This is the innermost child square";
// when you set textContent on a node, all the  node's children will be removed and replaced by a single text node.

/* 
    - on the other hand, the "innerText" takes the CSS style into account and returns only human readable text.

    Syntax:
        element.innerText;
*/
console.log('\n\t\t These are the innerText of container \n\n'.toUpperCase());
console.log(container.innerText);


/* 4. innerHTML
    - it allows you to get or set the HTML markup contained within the element */

/* 
    Reading the innerHTML property of an element
    Syntax:
        element.innerHTML;
*/
console.log('\n\t\t This is the innerHTML of element with id="choices" \n\n'.toUpperCase());
console.log(choices.innerHTML);

/* 
    Setting the innerHTML property of an element
    Syntax:
        element.innerHTML = "HtmlMarkup"
*/
const how = document.createElement('h2');
how.innerHTML = 'Here\'s how we <em>manipulate</em> the elements';
how.id = "how";
container.appendChild(how);

/* 
    - The setting will replace the existing content of an element with the new content
    - For example, you can remove the entire contents of the document by clearing the contents of the document.body element

    Example:
        document.body.innerHTML = '';
*/

/* 
    NOTE:
        - innerHTML returns the current HTML source of the element, including any change that has been made since the page was loaded.
        - Do not use innerHTML to set new contents that you have no control to avoid a security risk.
*/

/* 
    5. DIFFERENCE BETWEEN innerHTML AND createElement
    - createElement is more performant, you can create new elements to a div element by creating an element and appending it
    - createElement is more secure, you should only use innerHTML when the data comes from a trusted source like a database.
*/
let row = document.createElement('div');
row.className = "row";
container.appendChild(row);

/* 
    - You can also manipulate an element's HTML directly using innerHTML
    - using innerHTML is cleaner and shorter when you want to add attributes to the element.
    - however, using innerHTML causes the web browsers to reparse and recreate all DOM nodes inside the div element. Therefore, it is less efficient than creating a new element and appending to the div. In other words, creating a new element and appending it to the DOM tree provides better performance.
*/
row.innerHTML = '<div class="result"><h3>Using <em>createElement</em><br><small>Syntax: document.createElement("HtmlTag")</small></div>';
row.innerHTML += '<div class="result"><h3>Using <em>appendChild</em><br><small>Syntax: parentNode.appendChild(childNode)</small></div>';

const newContainer = document.createElement('div');
newContainer.className = "newContainer";
document.body.appendChild(newContainer);

let row_2 = document.createElement('div');
row_2.className = "row";
newContainer.appendChild(row_2);
row_2.innerHTML = '<div class="result"><h3>Using <em>textContent</em><br><small>Syntax: document.textContent = "string"</small></div>';
row_2.innerHTML += '<div class="result"><h3>Using <em>innerHTML</em><br><small>Syntax: document.innerHTML = "HtmlMarkup"</small></div>';

/* 6. DocumentFragment 
    this is used if you have a list of elements and you need loop/iteration to create it */

let fragment = document.createDocumentFragment();
for (let ctr = 1; ctr < 6; ctr++) {
    let text = document.createElement('small');

    text.innerHTML = `<br> ${ctr} this is the innermost child square<br>`;

    fragment.appendChild(text);
}

innerChildSquare.appendChild(fragment);
/* 
    -In this example, we composed the DOM nodes by using the DocumentFragment object and append the fragment to the active DOM tree once at the end.
    - A fragment does not link to the active DOM tree, therefore it doesn't incur any performance.
*/

// Footer
const footer = document.querySelector('.footer');
newContainer.appendChild(footer);