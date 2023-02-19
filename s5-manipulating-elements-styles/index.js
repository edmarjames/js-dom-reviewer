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

    - if you do not want to completely overwrite the existing CSS properties, you can concatenate the new CSS property to the 'cssText'
    Syntax:
        element.style.cssText += 'color:red; background-color:yellow';
*/
// get the element with id of 'title'
const title = document.querySelector('#title');

// change the styling of header using 'style'
function useStyle() {
    // get the element with the id of 'italic'
    const btnStyle = document.querySelector('#italic');
    // add a 'click' event listener to 'btnStyle' element
    btnStyle.addEventListener('click', () => {
        title.style.fontStyle = "Italic";
    });
};
useStyle();

// generate dynamic typing effect
new TypeIt("#styleSyntax", {
    speed: 50,
    waitUntilVisible: true,
}).go();

// change the styling of header using 'cssText'
function useCssText() {
    // get the element with the id of 'csstext'
    const btnCssText = document.querySelector('#csstext');
    // add a 'click' event listener to 'btnCssText' element
    btnCssText.addEventListener('click', () => {
        title.style.cssText = 'font-size: 3rem; color: red';
    });
};
useCssText();

// generate dynamic typing effect
new TypeIt("#cssTextSyntax", {
    speed: 50,
    waitUntilVisible: true,
}).go();

// change the styling of header using 'setAttribute'
function useSetAttribute() {
    // get the element with the id of 'setattribute'
    const btnSetAttr = document.querySelector('#setattribute');
    // add a 'click' event listener to 'btnSetAttr' element
    btnSetAttr.addEventListener('click', () => {
        title.setAttribute('style', 'font-weight: 600; color: black')
    });
};
useSetAttribute();

// generate dynamic typing effect
new TypeIt("#setAttributeSyntax", {
    speed: 50,
    waitUntilVisible: true,
}).go();

// change the styling of header by using cssText by appending new css to the existing one
function useCssTextToAppend() {
    // get the element with the id of 'append'
    const btnAppend = document.querySelector('#append');
    // add a 'click' event listener to 'btnAppend' element
    btnAppend.addEventListener('click', () => {
        title.style.cssText += 'font-size: 4rem; color: orangered; line-height: 50px';
    });
}
useCssTextToAppend();

// generate dynamic typing effect
new TypeIt("#cssTextAppendingSyntax", {
    speed: 50,
    waitUntilVisible: true,
}).go();


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
function useGetComputedStyle() {
    // get the element with the class of 'row'
    const row = document.querySelector('.row');
    // store the results of 'getComputedStyle' to 'style' variable
    const style = getComputedStyle(row);

    console.log('\n\t\tThis is the css styling of element with class of row\n\n'.toUpperCase());
    console.log(style.display);
    console.log(style.width);
    console.log(style.columnGap);
};
useGetComputedStyle();

// 2.2 The getComputedStyle for pseudo-elements example
function useGetComputedStyleForPseudoElements() {
    // get the computed style of the 'after' pseudo element of 'title' element
    const titleStyle = getComputedStyle(title, '::after');

    console.log('\n\t\tThis is the css styling of a pseudo-element\n\n'.toUpperCase());
    console.log(titleStyle.backgroundColor);
    console.log(titleStyle.display);
    console.log(titleStyle.margin);
};
useGetComputedStyleForPseudoElements();

// generate dynamic typing effect
new TypeIt("#getComputedStyleSyntax", {
    speed: 50,
    waitUntilVisible: true,
}).go();

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
// get the element with the id of 'container'
const container = document.querySelector('#container');

function useClassName() {
    console.log('\n\t\tThis is the class of the element with id of container using className\n\n'.toUpperCase());
    console.log(container.className);
};
useClassName();

// generate dynamic typing effect
new TypeIt("#classNameSyntax", {
    speed: 50,
    waitUntilVisible: true,
}).go();

// 4. classList

/* 
    - property to work with the CSS classes of an element
    - it returns a live collection of CSS classes

    Syntax:
        'element.classList' - to get the list of CSS classes of an element
*/
function useClassList() {
    console.log('\n\t\tThis is the class of the element with id of container using classList\n\n'.toUpperCase());

    // unlike the className which returns the classes in a space-separated string
    // the classList returns the classes as array-like so we need to loop through it to access every classes.
    for (let classes of container.classList) {
        console.log(classes);
    }
};
useClassList();

// 4.1 Add one or more classes to the class list of an element
/* 
    Syntax:
        'element.classList.add("className")' - to add a new class to an element
        'element.classList.add("className1", "className2", "className3")' - to add multiple classes to an element
*/
function useClassListAdd() {
    // get all the 'i' element
    const icons = document.getElementsByTagName('i');

    // use .add() to add a new class
    for (let i of icons) {
        i.classList.add('icons');
    };
};
useClassListAdd();

// 4.2 Remove element's classes
/* 
    Syntax:
        'element.classList.remove("className")' - to remove a class of an element
        'element.classList.remove("className1", "className2", "className3")' - to remove multiple classes of an element
*/
// get all the 'button' element
const buttons = document.querySelectorAll('button');

function useClassListRemove() {
    // use .remove() to remove a class
    for (let btn of buttons) {
        btn.classList.remove('large-text');
    };
};
useClassListRemove();

// 4.3 Replace a class of an element
/* 
    Syntax:
        element.classList.replace('className', 'newClassName');
*/
function useClassListReplace() {
    // get the checkbox element
    const checkBox = document.querySelector('#show-hide');
    // get the label of the checkbox
    const label = document.querySelector('[for="show-hide"]');

    // add a 'change' event listener to 'checkBox' element
    checkBox.addEventListener('change', () => {
        if (checkBox.checked) {
            // change the text of the label
            label.textContent = "Hide the buttons"
            for (let btn of buttons) {
                // use .replace() to replace 'hidden' to 'show'
                btn.classList.replace('hidden', 'show');
            }
        } else {
            // change the text of the label
            label.textContent = "Show the buttons"
            for (let btn of buttons) {
                // use .replace() to replace 'show' to 'hidden'
                btn.classList.replace('show', 'hidden');
            }
        }
    });
};
useClassListReplace();

// 4.4 Check if an element has a specific class
/* 
    - the 'contains()' method returns true if the classList contains a specified class, otherwise false.
    Syntax:
        element.classList.contains('className');
*/
function useClassListContains() {
    console.log('\n\t\tIt checks if the buttons contains a class of hidden\n\n'.toUpperCase());
    for (let btn of buttons) {
        // use .contains() to check if the element contains a specific class
        console.log(btn.classList.contains('hidden'));
    }
};
useClassListContains();

// 4.5 Toggle a class
/* 
    - if the class list contains a specified class name, in the 'toggle()' method it removes it. Otherwise if the class list doesn't contain the class name, it adds it to the class list.
    Syntax:
        element.classList.toggle('className');
*/
function useClassListToggle() {
    // get the element with the id of 'toggle'
    const toggle = document.querySelector('#toggle');

    // add a 'change' event listener to 'toggle' element
    toggle.addEventListener('change', () => {
        for (let btn of buttons) {
            // use .toggle() to toggle the 'large-button' class on every 'change' event
            btn.classList.toggle('large-buttons');
        }    
    });
};
useClassListToggle();

// generate dynamic typing effect
new TypeIt("#classListSyntax", {
    speed: 50,
    waitUntilVisible: true,
}).go();

// 5. Getting the width and height of an element

/* 
    - to get the element's width and height that include the padding and border.

    Syntax:
        element.offsetWidth
        element.offsetHeight
*/
function getOffsetWidthAndOffsetHeight() {
    console.log('\n\t\tGetting the width and height of an element using offsetWidth and offsetHeight\n\n'.toUpperCase());
    console.log(`This is the width of the container ${container.offsetWidth}`);
    console.log(`This is the height of the container ${container.offsetHeight}`);
};
getOffsetWidthAndOffsetHeight();

// generate dynamic typing effect
new TypeIt("#offsetWidthAndOffsetHeightSyntax", {
    speed: 50,
    waitUntilVisible: true,
}).go();

// 5.1 clientWidth & clientHeight
/* 
    - to get the element's width and height that include padding but without border

    Syntax:
        element.clientWidth;
        element.clientHeight;
*/
function getClientWidthAndClientHeight() {
    console.log('\n\t\tGetting the width and height of an element using clientWidth and clientHeight\n\n'.toUpperCase());
    console.log(`This is the width of the container ${container.clientWidth}`);
    console.log(`This is the height of the container ${container.clientHeight}`);
};
getClientWidthAndClientHeight();

// generate dynamic typing effect
new TypeIt("#clientWidthAndClientHeightSyntax", {
    speed: 50,
    waitUntilVisible: true,
}).go();

// 5.2 Get the height and width of the window
function getWindowWidthAndHeight() {
    // width
    console.log('\n\t\tGetting the width of the window\n\n'.toUpperCase());
    console.log(window.innerWidth);
    console.log(document.documentElement.clientWidth);
    console.log(document.body.clientWidth);

    // height
    console.log('\n\t\tGetting the height of the window\n\n'.toUpperCase());
    console.log(window.innerHeight);
    console.log(document.documentElement.clientHeight);
    console.log(document.body.clientHeight);
};
getWindowWidthAndHeight();

