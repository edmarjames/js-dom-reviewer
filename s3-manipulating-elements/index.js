// 1. createElement

/* 
    - creates a new HTML element and attach it to the DOM tree.
    - it accepts an HTML tag name and returns a new node with the element type.
    - using 'appendChild' we can append the created element to a parent element.

    Syntax:
        document.createElement('HTMLTagName');
*/
// get the element with the class of 'myContainer'
const container = document.querySelector(".myContainer");
// create a 'div' element
const square = document.createElement("div");

function useCreateElement() {
  // assign the CSS class to 'square' element
  square.className = "main-square";
  // append the 'square' element to 'container' element
  container.appendChild(square);
};
useCreateElement();

// create a 'div' element
const childSquare = document.createElement("div");
function assignElementId() {
  // assign the CSS class
  childSquare.className = "child-square";
  // to add an id to a div, you set the id attribute of the element to a value. See example below.
  childSquare.id = "first-child";
  // append 'childSquare' to 'square' element
  square.appendChild(childSquare);
};
assignElementId();

// create a 'div' element
const alternateChildSquare = document.createElement("div");
function assignElementClass(assignElementId) {
  // to add a CSS class use 'className'. See example below.
  alternateChildSquare.className = "child-square-alternate";
  // assign the id of element
  alternateChildSquare.id = "middle-child";
  // append 'alternateChildSquare' to 'childSquare' element
  childSquare.appendChild(alternateChildSquare);
};
assignElementClass();

// create a 'div' element
const innerChildSquare = document.createElement("div");
function assignInnerHTML() {
  // assign the CSS class
  innerChildSquare.className = "child-square";
  // assign the id of element
  innerChildSquare.id = "last-child";
  // to add a piece of text, you can use the innerHTML property. See example below.
  innerChildSquare.innerHTML =
    "This squares are created using <em>createElement</em>";
  // append 'innerChildSquare' to 'alternateChildSquare'
  alternateChildSquare.appendChild(innerChildSquare);
};
assignInnerHTML();


// If you want to load a JavaScript file dynamically. You can do that using "createElement" to create the script element and add it to the document.

// first create a function that creates a script and assign it's attributes one by one
function loadJS(url) {
  // create a 'script' element
  let script = document.createElement("script");
  // assign its 'src' attribute
  script.src = url;
  script.async = true;
  // append the 'script' element to the body
  document.body.appendChild(script);
}

// Invoke the helper function to load the hello.js file.
loadJS("./hello.js");


// 2. appendChild

/* 
    - this method allows you to add a node to the end of the list of child nodes of a specified parent node.
    - if the childNode is a reference to an existing node in the document, the "appendChild" method moves the childNode from its current position to the new position.

    Syntax:
        parentNode.appendChild(childNode);
*/
// get the element with the id of 'choices'
const choices = document.querySelector("#choices");

function createChoices(content, id) {
  // create a 'li' element
  let li = document.createElement("li");

  // create a 'input' element
  let radio = document.createElement("input");
  // assign it's 'radio' type attribute
  radio.type = "radio";
  // assign it's name attribute
  radio.name = "answer";
  // assign it's id attribute
  radio.id = id;

  // create a 'label' element
  let label = document.createElement("label");
  // assign it's id attribute
  label.for = id;
  // assign it's textContent
  label.textContent = content;

  // append the created radio button and label to 'li'
  li.appendChild(radio);
  li.appendChild(label);

  // return the 'li' element
  return li;
}

// append new 'li' elements to 'choices' element by invoking the 'createChoices' function and passing arguments
choices.appendChild(createChoices("2 (two)", "answer-1"));
choices.appendChild(createChoices("4 (four)", "answer-2"));
choices.appendChild(createChoices("3 (three)", "answer-3"));


/* 3. textContent
    - this property is used to get and set the text content of a node and its descendants */

/* 
    To GET the text content of a node and its descendants here is the syntax
    Syntax:
        node.textContent;
*/
function getTextContent() {
  console.log("\t\t This is the textContent of container \n\n".toUpperCase());
  console.log(container.textContent);
  // As you can see on the console, it returns the concatenation of the textContent of every child node, excluding comments (and also processing instructions).
};
getTextContent();

/* 
    To SET the text content of a node here is the syntax
    Syntax:
        element.textContent = "string";
*/
function setTextContent() {
  innerChildSquare.textContent = "This is the innermost child square";
  // when you set textContent on a node, all the  node's children will be removed and replaced by a single text node.
};
setTextContent();

/* 
    - on the other hand, the "innerText" takes the CSS style into account and returns only human readable text.

    Syntax:
        element.innerText;
*/
function getInnerText() {
  console.log("\n\t\t These are the innerText of container \n\n".toUpperCase());
  console.log(container.innerText);
};
getInnerText();


/* 4. innerHTML
    - it allows you to get or set the HTML markup contained within the element */

/* 
    Reading the innerHTML property of an element
    Syntax:
        element.innerHTML;
*/
function getInnerHTML() {
  console.log(
    '\n\t\t This is the innerHTML of element with id="choices" \n\n'.toUpperCase()
  );
  console.log(choices.innerHTML);
};
getInnerHTML();

/* 
    Setting the innerHTML property of an element
    Syntax:
        element.innerHTML = "HtmlMarkup"
*/
function setInnerHTML() {
  // create a 'h2' element
  const how = document.createElement("h2");
  // assign it's 'innerHTML'
  how.innerHTML = "Here's how to <em>manipulate</em> the elements";
  // assign it's id
  how.id = "how";
  // append the 'how' element to the body
  container.appendChild(how);
};
setInnerHTML();

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
// create a 'div' element
let row = document.createElement("div");

function createRow() {
  // assign it's CSS class
  row.className = "row";
  // append the 'row' to 'container' element
  container.appendChild(row);
};
createRow();

/* 
    - You can also manipulate an element's HTML directly using innerHTML
    - using innerHTML is cleaner and shorter when you want to add attributes to the element.
    - however, using innerHTML causes the web browsers to reparse and recreate all DOM nodes inside the div element. Therefore, it is less efficient than creating a new element and appending to the div. In other words, creating a new element and appending it to the DOM tree provides better performance.
*/
function rowInnerHTML() {
  // insert content to 'row' element using 'innerHTML'
  row.innerHTML =
  '<div class="result" id="createElementSyntax"><h3>Using <em>createElement</em><br><small>Syntax: document.createElement("HtmlTag")</small></h3></div>';
  row.innerHTML +=
    '<div class="result" id="appendChildSyntax"><h3>Using <em>appendChild</em><br><small>Syntax: parentNode.appendChild(childNode)</small></h3></div>';
};
rowInnerHTML();

// generate dynamic typing effect
new TypeIt("#createElementSyntax", {
  speed: 50,
  waitUntilVisible: true,
}).go();

// generate dynamic typing effect
new TypeIt("#appendChildSyntax", {
  speed: 50,
  waitUntilVisible: true,
}).go();

// Create a new container and append it to the body
const newContainer = document.createElement("div");
function createNewContainer() {
  // assign the CSS class
  newContainer.className = "newContainer";
  document.body.appendChild(newContainer);
};
createNewContainer();

// Create a new row and append it to the new container
let row_2 = document.createElement("div");
function createSecondRow() {
  // assign the CSS class
  row_2.className = "row";
  newContainer.appendChild(row_2);
};
createSecondRow();

function secondRowInnerHTML() {
  // insert content to 'row_2' element using 'innerHTML'
  row_2.innerHTML =
  '<div class="result" id="textContentSyntax"><h3>Using <em>textContent</em><br><small>Syntax: document.textContent = "string"</small></h3></div>';
  row_2.innerHTML +=
    '<div class="result" id="innerHTMLSyntax"><h3>Using <em>innerHTML</em><br><small>Syntax: document.innerHTML = "HtmlMarkup"</small></h3></div>';
};
secondRowInnerHTML();

// generate dynamic typing effect
new TypeIt("#textContentSyntax", {
  speed: 50,
  waitUntilVisible: true,
}).go();

// generate dynamic typing effect
new TypeIt("#innerHTMLSyntax", {
  speed: 50,
  waitUntilVisible: true,
}).go();


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

function useDocumentFragment() {
  // create a 'DocumentFragment'
  let fragment = document.createDocumentFragment();

  for (let ctr = 1; ctr < 6; ctr++) {
    // create a 'small' element
    let text = document.createElement("small");
    // assign it's 'innerHTML'
    text.innerHTML = `<br> ${ctr} this is the innermost child square<br>`;
    // append the create elements to 'fragment' element
    fragment.appendChild(text);
  }

  // append the 'fragment' to 'innerChildSquare' element
  innerChildSquare.appendChild(fragment);
};
useDocumentFragment();

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
function useAfter() {
  // create a div and assign the result class
  const div = document.createElement("div");
  div.className = "result";
  div.id = "afterSyntax"
  div.innerHTML = '<h3 id="heading-after">Using <em>after</em></h3>';

  // create a div, assign it with the row class and append it to the new container
  let row_3 = document.createElement("div");
  row_3.className = "row";
  newContainer.appendChild(row_3);

  // append the div to the new row_3
  row_3.appendChild(div);

  // select the heading inside result-div
  const afterHeading = document.getElementById("heading-after");

  // create a subheading
  const syntax = document.createElement("h3");
  syntax.innerHTML = "<small>Syntax: element.after(node)</small>";

  // insert the subheading after the selected heading
  afterHeading.after(syntax);
};
useAfter();

// generate dynamic typing effect
new TypeIt("#afterSyntax", {
  speed: 50,
  waitUntilVisible: true,
}).go();


// 7.1 using after to insert multiple nodes after an element

function appendMultipleElementsUsingAfter() {
  // create an array of objects for the new choices
  const moreChoices = [
    {
      content: "5 (five)",
      id: "answer-4",
    },
    {
      content: "6 (six)",
      id: "answer-5",
    },
  ];

  // map the moreChoices array
  const items = moreChoices.map((item) => {
    // create an li element
    const li = document.createElement("li");

    // create a radio input element and assign its properties
    const radio = document.createElement("input");
    radio.type = "radio";
    (radio.name = "answer"), (radio.id = item.id);

    // create a label element and assign its properties
    const label = document.createElement("label");
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
}
appendMultipleElementsUsingAfter();


// 8. append

/* 
    - method to insert a set of 'Node' objects or 'DOMString' object after the last child of a parent node.
    - this method will insert 'DOMString' object as Text nodes.
    - the append method has no return value. It means that the append method implicitly returns undefined.

    Syntax:
        parentNode.append(...node);
        parentNode.append(...DOMString);
*/

function useAppend() {
  // create an array of objects for the new choices
  const moreChoices_2 = [
    {
      content: "7 (seven)",
      id: "answer-5",
    },
    {
      content: "8 (eight)",
      id: "answer-6",
    },
  ];

  // map the moreChoices array
  const items_2 = moreChoices_2.map((item) => {
    // create an li element
    const li = document.createElement("li");

    // create a radio input element and assign its properties
    const radio = document.createElement("input");
    radio.type = "radio";
    (radio.name = "answer"), (radio.id = item.id);

    // create a label element and assign its properties
    const label = document.createElement("label");
    label.textContent = item.content;
    label.for = item.id;

    // append the radio and label to the li element
    li.appendChild(radio);
    li.appendChild(label);

    // return the new li element
    return li;
  });

  // use 'append' to append created elements at the end
  choices.append(...items_2);
};
useAppend();


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

function usePrepend() {
  // create an array of objects for the new choices
  const moreChoices_3 = [
    {
      content: "0 (zero)",
      id: "answer-7",
    },
    {
      content: "1 (one)",
      id: "answer-8",
    },
  ];

  const items_3 = moreChoices_3.map((item) => {
    // create an li element
    const li = document.createElement("li");

    // create a radio input element and assign its properties
    const radio = document.createElement("input");
    radio.type = "radio";
    (radio.name = "answer"), (radio.id = item.id);

    // create a label element and assign its properties
    const label = document.createElement("label");
    label.textContent = item.content;
    label.for = item.id;

    // append the radio and label to the li element
    li.appendChild(radio);
    li.appendChild(label);

    // return the new li element
    return li;
  });

  // use 'prepend' to append created elements at the beginning
  choices.prepend(...items_3);
};
usePrepend();


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

function useInsertAdjacentHTML() {
  // create a new div and assign the footer class
  const tools = document.createElement("div");
  tools.className = "footer";

  // append the tools to the newContainer
  newContainer.appendChild(tools);

  // create a div and assign the icon-container class
  const iconContainer = document.createElement("div");
  iconContainer.className = "icon-container";

  // tools.insertAdjacentHTML('beforebegin', '<hr>');

  // insert a heading before the first child of the element
  tools.insertAdjacentHTML(
    "afterbegin",
    '<h3 id="tools-header">Tools used for this page</h3>'
  );

  // select the inserted header
  const toolsHeader = document.querySelector("#tools-header");

  // insert the iconContainer after the toolsHeader
  toolsHeader.after(iconContainer);

  // insert the icons using 'afterbegin' and 'beforeend' to the iconContainer
  iconContainer.insertAdjacentHTML(
    "afterbegin",
    '<div class="icon-holder"><i class="bx bxl-visual-studio icons"></i><small>VS code</small></div>'
  );
  iconContainer.insertAdjacentHTML(
    "beforeend",
    '<div class="icon-holder"><i class="bx bxl-chrome icons"></i></i><small>Chrome dev tools</small></div>'
  );
  iconContainer.insertAdjacentHTML(
    "beforeend",
    '<div class="icon-holder"><i class="bx bxs-server icons"></i><small>Live server</small></div>'
  );

  // insert a horizontal rule after the tools element
  tools.insertAdjacentHTML("afterend", "<hr>");
};
useInsertAdjacentHTML();


// 11. replaceChild

/* 
  - method to replace an HTML element by a new one

  Syntax:
    - parentNode.replaceChild(newChild, oldChild);
*/

function useReplaceChild() {
  // create a new li element
  const lastChoice = document.createElement('li');

  // create a label element and assign the textContent and for attributes
  const lastChoiceLabel = document.createElement('label');
  lastChoiceLabel.textContent = "9 (nine)";
  lastChoiceLabel.for = "answer-nine";

  // create an input element and assign the type, name and id attribute
  const lastChoiceRadio = document.createElement('input');
  lastChoiceRadio.type = "radio";
  lastChoiceRadio.name = "answer";
  lastChoiceRadio.id = "answer-nine";

  // append the label and radio element to the li element
  lastChoice.appendChild(lastChoiceRadio);
  lastChoice.appendChild(lastChoiceLabel);

  // get the 'lastElementChild' of 'choices'
  const lastChild = choices.lastElementChild;

  // replace the 'lastElementChild' of the UL with the newly created one
  choices.replaceChild(lastChoice, lastChild)
};  
useReplaceChild();


// 12. cloneNode

/* 
  - method of the Node interface that allows you to clone an element

  Syntax:
      - clonedNode = originalNode.cloneNode(deep)

  Parameters:
      - if 'deep' is true, then the original node and all of its descendants are cloned
      - if 'deep' is false, only the original node will be cloned. All the node's descendants will not be cloned
      - the deep parameter defaults to 'false' if you omit it

  Usage notes:
      - it copies all attributes and inline listeners of the original node. However, it doesn't copy the event listener added via 'addEventListener()' or assignment to element's properties such as originalNode.onclick = eventHandler()
      - if you clone a node with an id attribute and place the cloned node in the same document, the id will be duplicate. In this case you need to change the id before adding it to the DOM tree.
*/

function useCloneNode() {
  // get the lastElementChild of newContainer
  const lastRow = newContainer.lastElementChild;
  // traverse to the previousElementSibling
  const prevSibling = lastRow.previousElementSibling;
  // traverse again to the previousElementSibling
  const anotherPrevSibling = prevSibling.previousElementSibling;

  // clone the third to the last children of newContainer and pass true as deep
  const clonedRow = anotherPrevSibling.cloneNode(true);
  // update it's id
  clonedRow.id = "appendSyntax";
  // create the cloned element
  const clonedRowFirstChild = clonedRow.firstElementChild;
  // create a header for the cloned element
  clonedRowFirstChild.innerHTML = "<h3 id='cloned-row-header'>Using <em>append</em></h3>";

  // put the new cloned element after the third to the last children of newContainer
  anotherPrevSibling.after(clonedRow);

  // create an h3 for the syntax label
  const clonedRowSyntax = document.createElement('h3');
  // assign it's innerHTML
  clonedRowSyntax.innerHTML = "<small>Syntax: element.append('...node')</small>"

  // select the header of the cloned element
  const clonedRowHeader = document.querySelector("#cloned-row-header");
  // put the syntax label after the header
  clonedRowHeader.after(clonedRowSyntax);
};
useCloneNode();

// generate dynamic typing effect
new TypeIt("#appendSyntax", {
  speed: 50,
  waitUntilVisible: true,
}).go();

// 13. removeChild

/* 
  - method to remove a child node from a parent node

  Syntax:
      let childNode = parentNode.removeChild(childNode);
      - if the 'childNode' is not the child node of the parentNode, the method throws an exception
      
  - returns the removed child node from the DOM tree but keeps it in the memory, which can be used later.
  if you don't want to keep the removed child node in the memory, use the following syntax
  - the child node will be in the memory until it is destroyed by the JavaScript garbage collector

  Syntax:
    parentNode.removeChild(childNode);
*/

function useRemoveChild() {
  // select the 'firstElementChild' of choices
  const choiceFirstElement = choices.firstElementChild
  // remove it using the 'removeChild' method
  choices.removeChild(choiceFirstElement)
};
useRemoveChild();


// 13.1 to remove all child nodes

/*
    while (choices.firstChild) {
      choices.removeChild(choices.firstChild);
    }
*/

/* 
    OR set the innerHTML of choices to empty string to remove all child nodes
    choices.innerHTML = '';
*/


// 14. insertBefore

/* 
    - method used to insert a node before another node as a child node of a specified parent node.
    - it returns the inserted child node.

    Syntax:
      parentNode.insertBefore(newNode, existingNode);

    Parameters
      - 'newnode' is the new node to be inserted
      - 'existingNode' is the node before which the new node is inserted. If the 'existingNode' is null, the insertBefore() inserts the newNode at the end of the parentNode's child nodes.
*/

function useInsertBefore() {
  // create a new Li element
  const newChoice = document.createElement('li');

  // create a new label element for the li and assign its attributes
  const newChoiceLabel = document.createElement('label');
  newChoiceLabel.textContent = "10 (ten)"
  newChoiceLabel.for = "answer-10"

  // create a new radio element for the li and assign its attributes
  const newChoiceRadio = document.createElement('input');
  newChoiceRadio.type = "radio";
  newChoiceRadio.name = "answer"
  newChoiceRadio.id = "answer-10"

  // append the radio and label element to the newChoice li
  newChoice.appendChild(newChoiceRadio);
  newChoice.appendChild(newChoiceLabel);

  // insert the newChoice li before the firstElementChild of choices
  choices.insertBefore(newChoice, choices.firstElementChild);
};
useInsertBefore();


// 15. insertAfter() helper function

/* 
    - method that allows you to insert a new node after an existing node as a child node

    Syntax:
      parentNode.insertAfter(newNode, existingNode)
*/

function useInsertAfter() {
  // create a new Li element
  const newChoice_2 = document.createElement('li');

  // create a new label element for the li and assign its attributes
  const newChoice_2_Label = document.createElement('label');
  newChoice_2_Label.textContent = "11 (eleven)"
  newChoice_2_Label.for = "answer-11"

  // create a new radio element for the li and assign its attributes
  const newChoice_2_Radio = document.createElement('input');
  newChoice_2_Radio.type = "radio";
  newChoice_2_Radio.name = "answer"
  newChoice_2_Radio.id = "answer-11"

  // append the radio and label element to the newChoice li
  newChoice_2.appendChild(newChoice_2_Radio);
  newChoice_2.appendChild(newChoice_2_Label);

  // NOTE: JS DOM hasn't supported the insertAfter() method yet
  // Use the insertBefore() method and the nextSibling property to insert a new node after an existing node as a child of a parent node
  insertAfter(newChoice_2, choices.lastElementChild);

  function insertAfter(newNode, existingNode) {
    existingNode.parentNode.insertBefore(newNode, existingNode.nextSibling);
  }
};
useInsertAfter();

// Footer
// get the element with the class of 'footer'
const footer = document.querySelector(".footer");
// append the 'footer' to 'newContainer' element
newContainer.appendChild(footer);
