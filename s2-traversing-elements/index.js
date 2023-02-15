// 1. parentNode
// Get the parent element

/* 
    - parentNode is read only
    - Document and DocumentFragment nodes do not have a parent. Therefore, the parentNode will always be null.
    - if you create a new node but haven't attached it to the DOM tree, the parentNode of that node will also be null

    Syntax:
        node.parentNode;
*/
function getParentNode() {
    // get the element with the id of 'heading'
    const heading = document.getElementById('heading');
    console.log("This is the parentNode of heading \n");
    // logs the 'parentNode' of 'heading' element
    console.log(heading.parentNode);
};
getParentNode();

// 2. firstChild, firstElementChild, lastChild, lastElementChild, childNodes and children
// Getting child elements of a node

/*
    firstChild
    - to get the first child element of a specified element.
    - if the parentElement does not have any child element it returns null.
    - the firstChild property returns a child node which can be any node type such as an element node, a text node, or a comment node.
    - it will return any type of node

    Syntax:
        parentElement.firstChild;

*/
// get the element with the id of 'prog_field'
const field = document.querySelector('#prog_field');

function getFirstChild() {    
    console.log("This is the firstChild of UL");
    // logs the 'firstChild' of the 'field' element
    console.log(field.firstChild.nodeName);
};
getFirstChild();

// generate dynamic typing effect
new TypeIt("#firstChildSyntax", {
    speed: 50,
    waitUntilVisible: true,
}).go();

/* 
    The console window show #text because a text node is inserted to maintain the whitespace between the opening <ul> and <li> tags. This whitespace creates a #text node

    NOTE: any whitespace such as a single space, multiple spaces, returns and tabs will create a #text node. To remove the #text node, you can remove the white spaces by converting it as a single line.
*/

/* 
    firstElementChild
    - to get the first child with the element node only.

    Syntax:
        parentElement.firstElementChild;
*/
function getFirstElementChild() {
    console.log("This is the firstElementChild of UL");
    // logs the 'firstElementChild' of 'field' element
    console.log(field.firstElementChild);
};
getFirstElementChild();

// generate dynamic typing effect
new TypeIt("#firstElementChildSyntax", {
    speed: 50,
    waitUntilVisible: true,
}).go();

/* 
    lastChild
    - to get the last child element of a node
    - it will return any type of node

    Syntax:
        parentElement.lastChild;
*/
function getLastChild() {
    console.log("This is the lastChild of UL");
    // logs the 'lastChild' of 'field' element
    console.log(field.lastChild);
};
getLastChild();

// generate dynamic typing effect
new TypeIt("#lastChildSyntax", {
    speed: 50,
    waitUntilVisible: true,
}).go();

/* 
    lastElementChild
    - to get the last child element with the element node type

    Syntax:
        parentElement.lastElementChild;
*/
function getLastElementChild() {
    console.log("This is the lastElementChild of UL");
    // logs the 'lastElementChild' of 'field' element
    console.log(field.lastElementChild);
};
getLastElementChild();

// generate dynamic typing effect
new TypeIt("#lastElementChildSyntax", {
    speed: 50,
    waitUntilVisible: true,
}).go();

/* 
    childNodes
    - returns all child elements with any node type.

    Syntax:
        parentElement.childNodes;
*/
function getChildNodes() {
    console.log("This are all the child nodes of UL with ANY node type");
    // logs all 'childNodes' of 'field' element regardless of node type
    console.log(field.childNodes);
};
getChildNodes();

// generate dynamic typing effect
new TypeIt("#childNodesSyntax", {
    speed: 50,
    waitUntilVisible: true,
}).go();

/* 
    children
    - to get the child element with only the element node type

    Syntax:
        parentElement.children;
*/
function getChildren() {
    console.log("This are all the child nodes of UL with ELEMENT node type");
    // logs all 'children' of 'field' with 'element' node type
    console.log(field.children);
};
getChildren();

// generate dynamic typing effect
new TypeIt("#childrenSyntax", {
    speed: 50,
    waitUntilVisible: true,
}).go();

// 3. nextElementSibling, previousElementSibling
// Selecting Siblings

/* 
    nextElementSibling
    - it returns null if the specified element is the first one in the list

    Syntax:
        currentNode.nextElementSibling;
*/
// get the element with the id of 'current'
const current = document.querySelector('#current');

function getNextElementSibling() {
    console.log('This is the next sibling element of the element with id="current"');
    // logs the 'nextElementSibling' of 'current' element
    console.log(current.nextElementSibling);
};
getNextElementSibling();

// generate dynamic typing effect
new TypeIt("#nextElementSiblingSyntax", {
    speed: 50,
    waitUntilVisible: true,
}).go();


/* 
    To get all the next siblings of an element you can use the following code
*/
function getAllNextElementSibling() {
    // assign the 'nextElementSibling' of 'current' element to 'nextSibling' variable
    let nextSibling = current.nextElementSibling;

    console.log('These are all the next siblings of the element with id="current"');
    // checks if 'nextSibling' has a value
    while (nextSibling) {
        // logs 'nextSibling'
        console.log(nextSibling);
        // update the value of 'nextSibling' to the 'nextElementSibling'
        nextSibling = nextSibling.nextElementSibling;
    }
};
getAllNextElementSibling();

/*  
    previousElementSibling
    - to get the previous siblings of an element
    - it returns null if the current element is the first one in the list

    Syntax:
        currentNode.previousElementSibling;
*/
function getPreviousElementSibling() {
    // get the element with the id of 'would-love-to-try'
    const loveToTry = document.querySelector('#would-love-to-try');
    console.log('This is the previous sibling element of the element with id="would-love-to-try"');
    // logs the 'previousElementSibling' of 'loveToTry' element
    console.log(loveToTry.previousElementSibling);
};
getPreviousElementSibling();

// generate dynamic typing effect
new TypeIt("#previousElementSiblingSyntax", {
    speed: 50,
    waitUntilVisible: true,
}).go();

/* 
    To get all siblings of an element, we'll use this logic
    - select the parent element whose siblings that you want to find.
    - select the first child element of that parent element.
    - add the first element to an array.
    - select the next sibling of the first element.
    - finally, repeat the 3rd and 4th steps until there are no siblings left. In case the sibling is the original element, skip it.
*/

function getAllSiblings(e) {
    // Declare an array to store all siblings
    const siblings = [];

    // if no parent node, return no sibling
    if (!e.parentNode) {
        return siblings;
    }

    // first child with element node type
    let sibling = e.parentNode.firstElementChild;

    // get all the siblings
    while (sibling) {
        // checks if the type of node is 'element' and it is not equal to the current target
        if (sibling.nodeType === 1 && sibling !== e) {
            // push it to the siblings array
            siblings.push(sibling);
        }
        // update the value of sibling to the 'nextSibling'
        sibling = sibling.nextSibling;
    }

    return siblings;
}

// assign the result of 'getAllSiblings' function to 'niceToLearn' variable
let niceToLearn = getAllSiblings(document.querySelector('#nice-to-learn'));
// assign the result of mapping through the 'niceToLearn' variable to 'siblingText' variable
let siblingText = niceToLearn.map(s => s.innerHTML);
console.log('These are all the sibling of the element with id="nice-to-learn"');
// logs the 'siblingText' array
console.log(siblingText);
