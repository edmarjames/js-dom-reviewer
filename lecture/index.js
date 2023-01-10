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
                const label = document.getElementsByTagName('label');
                for (const l of label) {
                    l.style.color = "white";
                }
                const icons = document.querySelectorAll('.icon-container i');
                for (const i of icons) {
                    i.style.color = "white";
                }
                const small = document.getElementsByTagName('small');
                for (const s of small) {
                    s.style.color = "white";
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
                const label = document.getElementsByTagName('label');
                for (const l of label) {
                    l.style.color = "black";
                }
                const icons = document.querySelectorAll('.icon-container i');
                for (const i of icons) {
                    i.style.color = "black";
                }
                const small = document.getElementsByTagName('small');
                for (const s of small) {
                    s.style.color = "black";
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


// 4. getElementsByClassName

/*
    - it returns an array-like of objects of the child elements with a specified class name.
    - the method returns the elements which is a live HTMLcollection of the matches element.
    - it searches the entire document and returns the child elements of the document

    Syntax:
        document.getElementsByClassName('className');
        NOTE: to use multiple class names, you separate them by space
*/
const select = document.getElementById('languages');
const selectBtn = document.getElementById('selectBtn');
const resetBtn = document.getElementById('resetBtn');

selectBtn.addEventListener('click', () => {
    const options = Array.from(select.getElementsByClassName('lang'));
    const languages = options.map(lang => {
        if (lang.selected) {
            return lang.innerText;
        }
    }).filter(x => x);
    alert(`You selected ${languages} `);
});

resetBtn.addEventListener('click', () => {
    select.selectedIndex = -1;
});

// 5. querySelector

/* 
    - it is a method that allows you to select the first element that matches one or more CSS selectors
    - if the selector is not valid CSS syntax, the method will raise a "SyntaxError" exception
    - if no element matches the CSS selectors, the querySelector() returns null

    Sample CSS selectors
    * - denotes all elements
    type selector - refers to the HTML tag of the element (e.g - p, h1, div, span)
    id selector - #myTable, #submitBtn
    class selector - .button-layout, .sm-container
    adjacent sibling - div + ul, p + footer
    general sibling - form ~ nav, table ~ div
    type selector - select[multiple], input[disabled]
    child selector - div > ul, div > form
    descendant selector - ul li, nav nav-link
    pseudo-classes - li:nth-child(2)

    Syntax:
        document.querySelector('cssSelector');
        NOTE: the CSS selector can be any type of CSS selector such as class, id, type, attribute, child, descendant, general sibling, adjacent sibling, etc.

        NOTE: We can also group multiple selectors, just separate them with commas
        document.querySelector('div, p');
*/
const copyright = document.querySelector('span');
copyright.className = "copyright";

// 6. querySelectorAll

/* 
    - you can use this method to select all elements that match a CSS selector or a group of CSS selectors.
    - this method returns a "STATIC" nodelist of elements that match the CSS selector. If no element matches, it returns an empty NodeList.

*/
const icons = document.querySelectorAll('.icon-container i');
for (let i = 0; i < icons.length; i++) {
    icons[i].classList.add("icons");
}