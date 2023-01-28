// 1. inline styles

/* 
    - to set the inline style of an element
    Syntax:
        element.style.property = 'CSSStyling';

    - if the CSS property contains hyphens ( - ) for example -webkit-text-stroke you can use the array-like notation to access the property
    Syntax:
        element.style.['webkit-text-stock'] = 'unset';

    - to completely override the existing inline style, you set the 'cssText' property of the style object
    Syntax:
        element.style.cssText = 'color:red; background-color:yellow';

    - you can also use the 'setAttribute' method
    Syntax:
        element.setAttribute('style', 'color:red;background-color:yellow');

    - if you do not want to completely overwrite the existing CSS properties, you can concatenate the new CSS propert to the 'cssText'
    Syntax:
        element.style.cssText += 'color:red; background-color:yellow';
*/
const title = document.querySelector('#title');
const btnStyle = document.querySelector('#italic');
btnStyle.addEventListener('click', () => {
    title.style.fontStyle = "Italic";
});

const btnCssText = document.querySelector('#csstext');
btnCssText.addEventListener('click', () => {
    title.style.cssText = 'font-size: 3rem; color: red';
});

const btnSetAttr = document.querySelector('#setattribute');
btnSetAttr.addEventListener('click', () => {
    title.setAttribute('style', 'font-weight: 600; color: black')
});

const btnAppend = document.querySelector('#append');
btnAppend.addEventListener('click', () => {
    title.style.cssText += 'font-size: 4rem; color: orangered; line-height: 50px';
});

// 2. getComputedStyle

/* 
    - is a method of the window object, which returns an object that contains the computed style of an element.
    - the getComputedStyle() method returns a live style object which is an instance of the 'CSSStyleDeclaration' object. The style is automatically updated when the styles of the element are changed.

    Syntax:
        let style = window.getComputedStyle(element, [,pseudoElement]);

    Parameters:
        - 'element' is the element that you want to return the computed styles. if you pass a 'text node', the method will throw an error
        - 'pseudoElement' specifies the pseudo-element to match. It defaults to null.
*/

// 2.1 Simple getComputedStyle example
const row = document.querySelector('.row');
const style = getComputedStyle(row);

console.log('\n\t\tThis is the css styling of element with class of row\n\n'.toUpperCase());
console.log(style.display);
console.log(style.width);
console.log(style.columnGap);

// 2.2 The getComputedStyle for pseudo-elements example
const titleStyle = getComputedStyle(title, '::after');

console.log('\n\t\tThis is the css styling of a pseudo-element\n\n'.toUpperCase());
console.log(titleStyle.backgroundColor);
console.log(titleStyle.display);
console.log(titleStyle.margin);


// 3. className

/* 
    - property to manipulate CSS classes of an element
    - it returns a space-separated list of CSS classes of the element as a string
    - to add a new class to an element, you can concatenate the existing class name with a new one
    Example:
        element.className += ' newClassName';

    Syntax:
        'element.className' - to get the list of CSS classes of an element
        'element.className = "className"' - to set a class for an element
*/
const container = document.querySelector('#container');

console.log('\n\t\tThis is the class of the element with id of container using className\n\n'.toUpperCase());
console.log(container.className);


// 4. classList

/* 
    - property to work with the CSS classes of an element
    - it returns a live collection of CSS classes

    Syntax:
        'element.classList' - to get the list of CSS classes of an element
*/
console.log('\n\t\tThis is the class of the element with id of container using classList\n\n'.toUpperCase());

// unlike the className which returns the classes in a space-separated string
// the classList returns the classes as array-like so we need to loop through it to access every classes.
for (let classes of container.classList) {
    console.log(classes);
}

// 4.1 Add one or more classes to the class list of an element
/* 
    Syntax:
        'element.classList.add("className")' - to add a new class to an element
        'element.classList.add("className1", "className2", "className3")' - to add multiple classes to an element
*/
const icons = document.getElementsByTagName('i');

for (let i of icons) {
    i.classList.add('icons');
};

// 4.2 Remove element's classes
/* 
    Syntax:
        'element.classList.remove("className")' - to remove a class of an element
        'element.classList.remove("className1", "className2", "className3")' - to remove multiple classes of an element
*/
const buttons = document.querySelectorAll('button');

for (let btn of buttons) {
    btn.classList.remove('large-text');
};

// 4.3 Replace a class of an element
/* 
    Syntax:
        element.classList.replace('className', 'newClassName');
*/
const checkBox = document.querySelector('#show-hide');
const label = document.querySelector('[for="show-hide"]');

checkBox.addEventListener('change', () => {
    if (checkBox.checked) {
        label.textContent = "Hide the buttons"
        for (let btn of buttons) {
            btn.classList.replace('hidden', 'show');
        }
    } else {
        label.textContent = "Show the buttons"
        for (let btn of buttons) {
            btn.classList.replace('show', 'hidden');
        }
    }
});

// 4.4 Check if an element has a specific class
/* 
    - the 'contains()' method returns true if the classList contains a specified class, otherwise false.
    Syntax:
        element.classList.contains('className');
*/
console.log('\n\t\tIt checks if the buttons contains a class of hidden\n\n'.toUpperCase());
for (let btn of buttons) {
    console.log(btn.classList.contains('hidden'));
}

// 4.5 Toggle a class
/* 
    - if the class list contains a specified class name, in the 'toggle()' method it removes it. Otherwise if the class list doesn't contain the class name, it adds it to the class list.
    Syntax:
        element.classList.toggle('className');
*/
const toggle = document.querySelector('#toggle');

toggle.addEventListener('change', () => {
    for (let btn of buttons) {
        btn.classList.toggle('large-buttons');
    }    
});


// 5. Getting the width and height of an element

/* 
    - to get the element's width and height that include the padding and border.

    Syntax:
        element.offsetWidth
        element.offsetHeight
*/
console.log('\n\t\tGetting the width and height of an element using offsetWidth and offsetHeight\n\n'.toUpperCase());
console.log(`This is the width of the container ${container.offsetWidth}`);
console.log(`This is the height of the container ${container.offsetHeight}`);

// 5.1 clientWidth & clientHeight
/* 
    - to get the element's width and height that include padding but without border

    Syntax:
        element.clientWidth;
        element.clientHeight;
*/
console.log('\n\t\tGetting the width and height of an element using clientWidth and clientHeight\n\n'.toUpperCase());
console.log(`This is the width of the container ${container.clientWidth}`);
console.log(`This is the height of the container ${container.clientHeight}`);

// 5.2 Get the height and width of the window
console.log('\n\t\tGetting the width of the window\n\n'.toUpperCase());
console.log(window.innerWidth);
console.log(document.documentElement.clientWidth);
console.log(document.body.clientWidth);

console.log('\n\t\tGetting the height of the window\n\n'.toUpperCase());
console.log(window.innerHeight);
console.log(document.documentElement.clientHeight);
console.log(document.body.clientHeight);