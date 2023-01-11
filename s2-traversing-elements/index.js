// 1. parentNode
// Get the parent element

/* 
    - parentNode is read only
    - Document and DocumentFragment nodes do not have a parent. Therefore, the parentNode will always be null.
    - if you create a new node but haven't attached it to the DOM tree, the parentNode of that node will also be null

    Syntax:
        node.parentNode;
*/
const heading = document.getElementById('heading');
console.log("This is the parentNode of heading \n");
console.log(heading.parentNode);

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
const field = document.querySelector('#prog_field');
console.log("This is the firstChild of UL");
console.log(field.firstChild.nodeName);

/* 
    The console window show #text because a text node is inserted to maintain the whitespace between the opening <ul> and <li> tags. This whitespace creates a #text node

    NOTE: any whitespace such as a single space, multiple spaces, returns and tabs will create a #text node. To remove the #text node, you can remove the whitespaces by converting it as a single line.
*/

/* 
    firstElementChild
    - to get the first child with the element node only.

    Syntax:
        parentElement.firstElementChild;
*/
console.log("This is the firstElementChild of UL");
console.log(field.firstElementChild);

/* 
    lastChild
    - to get the last child element of a node
    - it will return any type of node

    Syntax:
        parentElement.lastChild;
*/
console.log("This is the lastChild of UL");
console.log(field.lastChild);

/* 
    lastElementChild
    - to get the last child element with the element node type

    Syntax:
        parentElement.lastElementChild;
*/
console.log("This is the lastElementChild of UL");
console.log(field.lastElementChild);

/* 
    childNodes
    - returns all child elements with any node type.

    Syntax:
        parentElement.childNodes;
*/
console.log("This are all the child nodes of UL with ANY node type");
console.log(field.childNodes);

/* 
    children
    - to get the child element with only the element node type

    Syntax:
        parentElement.children;
*/
console.log("This are all the child nodes of UL with ELEMENT node type");
console.log(field.children);


// 3. nextElementSibling, previousElementSibling
// Selecting Siblings

/* 
    nextElementSibling
    - it returns null if the specified element is the first one in the list

    Syntax:
        currentNode.nextElementSibling;
*/
const current = document.querySelector('#current');
console.log('This is the next sibling element of the element with id="current"');
console.log(current.nextElementSibling);

/* 
    To get all the next siblings of an element you can use the following code
*/
let nextSibling = current.nextElementSibling;

console.log('These are all the next siblings of the element with id="current"');
while (nextSibling) {
    console.log(nextSibling);
    nextSibling = nextSibling.nextElementSibling;
}

/*  
    previousElementSibling
    - to get the previous siblings of an element
    - it returns null if the current element is the first one in the list

    Syntax:
        currentNode.previousElementSibling;
*/
const loveToTry = document.querySelector('#would-love-to-try');
console.log('This is the previous sibling element of the element with id="would-love-to-try"');
console.log(loveToTry.previousElementSibling);

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
        if (sibling.nodeType === 1 && sibling !== e) {
            siblings.push(sibling);
        }
        sibling = sibling.nextSibling;
    }

    return siblings;
}

let niceToLearn = getAllSiblings(document.querySelector('#nice-to-learn'));
let siblingText = niceToLearn.map(s => s.innerHTML);
console.log('These are all the sibling of the element with id="nice-to-learn"');
console.log(siblingText);
