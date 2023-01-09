// 1. getElementById

/* 
    - it returns an element object that represents an HTML element with an id that matches a string
    - if the document has no element with the specified id, the document.getElementById() returns NULL
    - returns an object with the element type

    Syntax:
        document.getElementById('elementId');
        NOTE: the id is case-sensitive. For example the 'root' and 'Root' are totally different
*/

const container = document.getElementById('container');
console.log(container);
container.className = "myContainer";

// This will return null since the id selected is not existing on the document
const firstElement = document.getElementById('first');
console.log(firstElement);

/* 
    If your HTML document has multiple elements with the same id, the method returns the first element it encounters.
*/
const message = document.getElementById('message');
console.log(message.innerHTML);


// 2. getElementsByName

/* 
    - it can select elements that share the same value of the name attribute
    - accepts a name which is the value of the name attribute of elements and returns a live NodeList of elements.
    - live NodeList means that the return elements are automatically updated when elements with the same name are inserted/removed from the document.
    
    Syntax:
        document.getElementsByName('nameAttribute');
*/
const btn = document.getElementById('submitBtn');

btn.addEventListener('click', () => {
    let themes = document.getElementsByName('theme');

    themes.forEach(color => {
        if (color.checked) {
            container.style.backgroundColor = color.value;
            if (color.value === "#131313") {
                const para = document.getElementsByTagName('p');
                for (const p of para) {
                    p.style.color = "white";
                }
                const heading = document.getElementsByTagName('h3');
                for (const h of heading) {
                    h.style.color = "white";
                }
            } else {
                const para = document.getElementsByTagName('p');
                for (const p of para) {
                    p.style.color = "black";
                }
                const heading = document.getElementsByTagName('h3');
                for (const h of heading) {
                    h.style.color = "black";
                }
            }
        } 
    });
});

// 3. getElementsByTagName

/*
    - accepts a tag name and returns a live HTMLCollection of elements with the matching tag name in the order which they appear in the document.
    - the return collection of the method is live, meaning that it is automatically updated when elements with the matching tag name are added/removed from the document.

    Syntax:
        document.getElementsByTagName('tagName');
*/
const countBtn = document.getElementById('countBtn');

countBtn.addEventListener('click', () => {
    let totalCount = document.getElementsByTagName('p');
    alert(`The total number of paragraphs is ${totalCount.length}`);
});