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
how.innerHTML = 'Here\'s how to <em>manipulate</em> the elements';
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
row.innerHTML = '<div class="result"><h3>Using <em>createElement</em><br><small>Syntax: document.createElement("HtmlTag")</small></h3></div>';
row.innerHTML += '<div class="result"><h3>Using <em>appendChild</em><br><small>Syntax: parentNode.appendChild(childNode)</small></h3></div>';

// Create a new container and append it to the body
const newContainer = document.createElement('div');
newContainer.className = "newContainer";
document.body.appendChild(newContainer);

// Create a new row and append it to the new container
let row_2 = document.createElement('div');
row_2.className = "row";
newContainer.appendChild(row_2);
row_2.innerHTML = '<div class="result"><h3>Using <em>textContent</em><br><small>Syntax: document.textContent = "string"</small></h3></div>';
row_2.innerHTML += '<div class="result"><h3>Using <em>innerHTML</em><br><small>Syntax: document.innerHTML = "HtmlMarkup"</small></h3></div>';



// 6. DocumentFragment 

/*
    - this is used if you have a list of elements and you need loop/iteration to create it.
    - the DocumentFragment interface is a lightweight version of the Document that stores a piece of document structure like a standard document. However, a DocumentFragment isn't part of the active DOM tree.
    - it inherits the methods of its parent node, and also implements those of the ParentNode interface such as querySelector and querySelectorAll
    - use DocumentFragment to compose DOM nodes before updating them to the active DOM tree to get better performance.

    Syntax:
        let fragment = new DocumentFragment();
        OR
        let fragment = document.createDocumentFragment();
*/

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



// 7. after

/* 
    - this method allows you to insert one or more nodes after the element
    - this method also accepts one or more strings. In this case, the after() method treats the strings as Text nodes.
    - it returns undefined if a node cannot be inserted. It'll throw a 'HierarchyRequestError' exception

    Syntax:
        element.after(node);
        OR
        element.after(node1, node2, node3, ...nodeN);
*/

// create a div and assign the result class
const div = document.createElement('div');
div.className = "result";
div.innerHTML = '<h3 id="heading-after">Using <em>after</em></h3>';

// create a div, assign it with the row class and append it to the new container
let row_3 = document.createElement('div');
row_3.className = "row";
newContainer.appendChild(row_3);

// append the div to the new row_3
row_3.appendChild(div);

// select the heading inside result-div
const afterHeading = document.getElementById('heading-after');
// create a subheading
const syntax = document.createElement('h3');
syntax.innerHTML = '<small>Syntax: element.after(node)</small>';

// insert the subheading after the selected heading
afterHeading.after(syntax);


// 7.1 using after to insert multiple nodes after an element

// create an array of objects for the new choices
const moreChoices = [
    {
        content: '5 (five)',
        id: 'answer-4'
    },
    {
        content: '6 (six)',
        id: 'answer-5'
    }
];

// map the moreChoices array
const items = moreChoices.map(item => {
    // create an li element
    const li = document.createElement('li');

    // create a radio input element and assign its properties
    const radio = document.createElement('input');
    radio.type = "radio";
    radio.name = "answer",
    radio.id = item.id;

    // create a label element and assign its properties
    const label = document.createElement('label');
    label.textContent = item.content;
    label.for = item.id;

    // append the radio and label to the li element
    li.appendChild(radio);
    li.appendChild(label);

    // return the new li element
    return li;
});

// append the new li elements on the lastChild of choices
choices.lastChild.after(...items);



// 8. append

/* 
    - method to insert a set of 'Node' objects or 'DOMString' object after the last child of a parent node.
    - this method will insert 'DOMString' object as Text nodes.
    - the append method has no return value. It means that the append method implicitly returns undefined.

    Syntax:
        parentNode.append(...node);
        parentNode.append(...DOMString);
*/

// create an array of objects for the new choices
const moreChoices_2 = [
    {
        content: '7 (seven)',
        id: 'answer-5'
    },
    {
        content: '8 (eight)',
        id: 'answer-6'
    }
];

// map the moreChoices array
const items_2 = moreChoices_2.map(item => {
    // create an li element
    const li = document.createElement('li');

    // create a radio input element and assign its properties
    const radio = document.createElement('input');
    radio.type = "radio";
    radio.name = "answer",
    radio.id = item.id;

    // create a label element and assign its properties
    const label = document.createElement('label');
    label.textContent = item.content;
    label.for = item.id;

    // append the radio and label to the li element
    li.appendChild(radio);
    li.appendChild(label);

    // return the new li element
    return li;
});

choices.append(...items_2);



// IMPORTANT: DIFFERENCE BETWEEN append and appendChild

/* 
    append
    - return value -> undefined
    - input -> multiple node objects
    - parameter types -> accept node and DOMString

    appendChild
    - return value -> appendChild
    - input -> a single node object
    - parameter types -> only node
*/

// IMPORTANT: DIFFERENCE BETWEEN append and after

/* 
    - append adds content to the INSIDE of an element
    - after adds content immediately following an element
*/



// 9. prepend

/* 
    - method that inserts 'node' objects or 'DOMString' objects before the first child of a parent node.
    - inserts DOMString objects as Text nodes.

    Syntax:
        parentNode.prepend(...node);
        parentNode.prepend(...DOMStrings);
*/

// create an array of objects for the new choices
const moreChoices_3 = [
    {
        content: '0 (zero)',
        id: 'answer-7'
    },
    {
        content: '1 (one)',
        id: 'answer-8'
    }
];
const items_3 = moreChoices_3.map(item => {
    // create an li element
    const li = document.createElement('li');

    // create a radio input element and assign its properties
    const radio = document.createElement('input');
    radio.type = "radio";
    radio.name = "answer",
    radio.id = item.id;

    // create a label element and assign its properties
    const label = document.createElement('label');
    label.textContent = item.content;
    label.for = item.id;

    // append the radio and label to the li element
    li.appendChild(radio);
    li.appendChild(label);

    // return the new li element
    return li;
});

choices.prepend(...items_3);



// 10. insertAdjacentHTML

/* 
    - this method parses a piece of HTML text and inserts the resulting nodes into the DOM tree at a specified position.
    - method to insert a text as nodes into the DOM tree at a specified position.
    - always escape the user input text that you pass into the insertAdjacentHTML method to avoid security risk.
    - has no return value, or undefined by default.

    Syntax:
        element.insertAdjacentHTML(positionName, text);

    this method has two parameters:

    1. positionName - is a string that represents the position relative to the element. It accepts one of the following four values.
        - 'beforebegin': before the element
        - 'afterbegin': before its first child of the element
        - 'beforeend': after the last child of the element
        - 'afterend': after the element
    
    note that the 'beforebegin' and 'afterend' are only relevant if the element is in the DOM tree and has a parent element.

    2. text - is a string that parses as HTML or XML. It cannot be node objects
*/

// create a new div and assign the footer class
const tools = document.createElement('div');
tools.className = "footer";

// append the tools to the newContainer
newContainer.appendChild(tools);

// create a div and assign the icon-container class
const iconContainer = document.createElement('div');
iconContainer.className = "icon-container";

// tools.insertAdjacentHTML('beforebegin', '<hr>');

// insert a heading before the first child of the element
tools.insertAdjacentHTML('afterbegin', '<h3 id="tools-header">Tools used for this page</h3>');

// select the inserted header
const toolsHeader = document.querySelector('#tools-header');

// insert the iconContainer after the toolsHeader
toolsHeader.after(iconContainer);

// insert the icons using 'afterbegin' and 'beforeend' to the iconContainer
iconContainer.insertAdjacentHTML('afterbegin', '<div class="icon-holder"><i class="bx bxl-visual-studio icons"></i><small>VS code</small></div>');
iconContainer.insertAdjacentHTML('beforeend', '<div class="icon-holder"><i class="bx bxl-chrome icons"></i></i><small>Chrome dev tools</small></div>');
iconContainer.insertAdjacentHTML('beforeend', '<div class="icon-holder"><i class="bx bxs-server icons"></i><small>Live server</small></div>');

// insert a horizontal rule after the tools element
tools.insertAdjacentHTML('afterend', '<hr>');

// Footer
const footer = document.querySelector('.footer');
newContainer.appendChild(footer);