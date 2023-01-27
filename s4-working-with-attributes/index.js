// element.attributes

/* 
    - element.attributes property provides a live collection of attributes on a specific element.
    - note that element.attributes is a 'NamedNodeMap', not an Array, therefore, it has no Array's method

    Syntax:
        element.attributes;
*/
let text = document.querySelector('#heading');

console.log('\n\t\tThese are the attributes of the header\n\n'.toUpperCase());
for (let attr of text.attributes) {
    console.log(`${attr.name} ${attr.value}`);
}


// Attribute-property synchronization

/* 
    - when a standard attribute changes, the corresponding property is auto-updated with some exceptions and vice versa
*/
console.log('\n\t\tAttribute-property synchronization\n\n'.toUpperCase());

// to set an attribute value you can use setAttribute
text.setAttribute('class', 'first-header');
// to get the value of an attribute you can access it by using dot notation - element.attribute
console.log(text.className);

// You can also set an attribute value by accessing it and assigning the value directly
text.className = "second-header";
// You can also get the value of an attribute by using getAttribute
console.log(text.getAttribute('class'));


// DOM properties are typed

/* 
    - the value of an attribute is always a string. However, when the attribute is converted to the property of a DOM object, the property value can be a string, a boolean, an object, etc.
*/
const btn = document.querySelector('#submitBtn');
const container = document.querySelector('#container');

btn.addEventListener('click', () => {
    const themes = document.getElementsByName('theme');

    themes.forEach(color => {
        if (color.checked) {
            console.log('\n\t\tThe checked attribute is converted to a boolean value\n\n'.toUpperCase());
            console.log(color.checked);

            container.style.backgroundColor = color.value;
            const header = document.querySelector('#heading');
            const labels = document.getElementsByTagName('label');
            if (color.value == '#131313') {
                header.style.color = "white";
                for (let l of labels) {
                    l.style.color = "white";
                }
            } else {
                header.style.color = "black";
                for (let l of labels) {
                    l.style.color = "black";
                }
            }
        }
    });
});

// The data-* attributes

/* 
    - to access data-* attributes, you can use the dataset property.

    Syntax:
        element.dataset;
*/
const themeContainer = document.querySelector('.theme-container');
console.log('\n\t\tHere are the data-* attributes of the themeContainer\n\n'.toUpperCase());
console.log(themeContainer.dataset);