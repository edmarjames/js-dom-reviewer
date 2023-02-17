// 1. element.attributes

/* 
    - element.attributes property provides a live collection of attributes on a specific element.
    - note that element.attributes is a 'NamedNodeMap', not an Array, therefore, it has no Array's method

    Syntax:
        element.attributes;
*/
// select the element with the id of heading
let text = document.querySelector('#heading');

function getAllAttributes() {
    // loop through the attributes and print its name and value
    console.log('\n\t\tThese are the attributes of the header\n\n'.toUpperCase());
    for (let attr of text.attributes) {
        console.log(`${attr.name} ${attr.value}`);
    }
};
getAllAttributes();


// 2. Attribute-property synchronization

/* 
    - when a standard attribute changes, the corresponding property is auto-updated with some exceptions and vice versa
*/
function attributePropertySynchronization() {
    console.log('\n\t\tAttribute-property synchronization\n\n'.toUpperCase());

    // to set an attribute value you can use setAttribute
    text.setAttribute('class', 'first-header');
    // to get the value of an attribute you can access it by using dot notation - element.attribute
    console.log(text.className);

    // You can also set an attribute value by accessing it and assigning the value directly
    text.className = "second-header";
    // You can also get the value of an attribute by using getAttribute
    console.log(text.getAttribute('class'));
};
attributePropertySynchronization();


// 3. DOM properties are typed

/* 
    - the value of an attribute is always a string. However, when the attribute is converted to the property of a DOM object, the property value can be a string, a boolean, an object, etc.
*/
function domPropertiesAreTyped() {
    // select the element with the id of 'submitBtn'
    const btn = document.querySelector('#submitBtn');
    // select the element with the id of 'container'
    const container = document.querySelector('#container');

    // add an event listener to the submitBtn
    btn.addEventListener('click', () => {
        // get the elements with the name of 'theme'
        const themes = document.getElementsByName('theme');

        // loop through the themes
        themes.forEach(color => {
            // if an element is checked, then get its value and set it as the background color for container
            if (color.checked) {
                console.log('\n\t\tThe checked attribute is converted to a boolean value\n\n'.toUpperCase());
                // this outputs a boolean value
                console.log(color.checked);

                // set the background color of container to the selected radio button value
                container.style.backgroundColor = color.value;
                // get all the text labels
                const header = document.querySelector('#heading');
                const labels = document.getElementsByTagName('label');
                const h3 = document.querySelector('.footer h3');
                const icons = document.getElementsByTagName('i');
                const small = document.getElementsByTagName('small');
                const copyright = document.querySelector('.copyright');
                const hr = document.getElementsByTagName('hr');
                const h2 = document.querySelector('h2');

                // set all text labels to white
                function setToWhite(header, labels, h3, icons, small, copyright, hr, h2) {
                    header.style.color = "white";
                    h3.style.color = "white";
                    copyright.style.color = "white";
                    h2.style.color = "white";
                    for (let h of hr) {
                        h.className = "hr-white";
                    };
                    for (let l of labels) {
                        l.style.color = "white";
                    };
                    for (let i of icons) {
                        i.style.color = "white";
                    };
                    for (let s of small) {
                        s.style.color = "white";
                    };
                }

                // set all text labels to black
                function setToBlack(header, labels, h3, icons, small, copyright, hr, h2) {
                    header.style.color = "black";
                    h3.style.color = "black";
                    copyright.style.color = "black";
                    h2.style.color = "black";
                    for (let h of hr) {
                        h.className = "hr";
                    }; 
                    for (let l of labels) {
                        l.style.color = "black";
                    }
                    for (let i of icons) {
                        i.style.color = "black";
                    }
                    for (let s of small) {
                        s.style.color = "black";
                    }
                };

                // if the color selected is dark, set the color of heading and labels to white
                if (color.value == '#131313') {
                    setToWhite(header, labels, h3, icons, small, copyright, hr, h2);
                
                // otherwise, set it to black
                } else {
                    setToBlack(header, labels, h3, icons, small, copyright, hr, h2);
                }
            }
        });
    });
};
domPropertiesAreTyped();


// 4. The data-* attributes

/* 
    - to access data-* attributes, you can use the dataset property.

    Syntax:
        element.dataset;
*/
// get the element with the class of 'theme-container'
const themeContainer = document.querySelector('.theme-container');

function getDataset() {
    console.log('\n\t\tHere are the data-* attributes of the themeContainer\n\n'.toUpperCase());
    console.log(themeContainer.dataset);
};
getDataset();


// 5. setAttribute

/* 
    - method to set a value for an attribute on a specified element.
    - returns undefined
    - if the attribute already exists on the element, it updates the value; otherwise it adds a new attribute with the specified name and value
    
    Syntax:
        element.setAttribute(name, value);

    Parameters
        - 'name' specifies the attribute name whose value is set. It's automatically converted to lowercase if you call the setAttribute() on an HTML element.
        - 'value' specifies the value to assign to the attribute. It's automatically converted to a string if you pass a non-string value to the method.
*/
function useSetAttribute() {
    // get the 'firstElementChild' of 'themeContainer'
    const firstLabel = themeContainer.firstElementChild;
    // get the child of the firstLabel which is the input element
    const child = firstLabel.firstElementChild;
    // add a disabled attribute to the input element
    child.setAttribute('disabled', '');
};
useSetAttribute();

// generate dynamic typing effect
new TypeIt("#setAttributeSyntax", {
    speed: 50,
    waitUntilVisible: true,
}).go();

// 6. getAttribute

/* 
    - method to get the value of a specified attribute on an element
    - if the attribute exists on the element, it returns a string that represents the value of the attribute. In case the attribute does not exists, it returns null.

    Syntax:
        element.getAttribute(name);

    Parameters:
        - 'name' which is the name of the attribute from which you want to return the value.
*/
function useGetAttribute() {
    console.log('\n\t\tThis is the value of the "data-value" attribute of themeContainer\n\n'.toUpperCase());
    console.log(themeContainer.getAttribute('data-value'));
    console.log('\t\tgetAttribute will return null if the attribute is not existing on the element'.toUpperCase());
    console.log(themeContainer.getAttribute('title'));
};
useGetAttribute();

// generate dynamic typing effect
new TypeIt("#getAttributeSyntax", {
    speed: 50,
    waitUntilVisible: true,
}).go();

// 7. removeAttribute

/* 
    - method to remove the attribute with the specified name from the element
    - it returns a value of undefined
    - setting the value of a boolean attribute to 'false' will not work; use the removeAttribute() method instead.

    Syntax:
        element.removeAttribute(name);

    Parameters:
        - 'name' which is the name of the attribute that you want to remove. If the attribute does not exist, the method will NOT raise an error.
*/
function useRemoveAttribute() {
    // use 'removeAttribute' to remove an attribute
    themeContainer.removeAttribute('data-status');
    console.log('\n\t\tThe data-status attribute is now removed from the themeContainer\n\n'.toUpperCase());
    // returns the innerHTML of the whole container to show that the data-status attribute of themeContainer is already removed
    console.log(container.innerHTML);
};
useRemoveAttribute();

// generate dynamic typing effect
new TypeIt("#removeAttributeSyntax", {
    speed: 50,
    waitUntilVisible: true,
}).go();

// 8. hasAttribute

/* 
    - method to check if an element has a specified attribute or not.
    - returns a boolean value that indicates if the element has the specified attribute

    Syntax:
        element.hasAttribute(name);

    Parameters:
        - 'name' which is the name of the attribute that you want to check
*/
function useHasAttribute() {
    console.log('\n\t\tThe themeContainer has a class attribute\n\n'.toUpperCase());
    // returns true
    console.log(themeContainer.hasAttribute('class'));
};
useHasAttribute();

// generate dynamic typing effect
new TypeIt("#hasAttributeSyntax", {
    speed: 50,
    waitUntilVisible: true,
}).go();

// footer
function footerSection() {
    // select the element with the class of 'footer'
    const footer = document.querySelector('.footer');
    // create a 'hr' element
    const horizontalRule = document.createElement('hr');

    // insert the 'hr' before the 'footer'
    container.insertBefore(horizontalRule, footer);
};
footerSection();