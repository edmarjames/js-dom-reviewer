// 1. Form basics

/* 
    - the '<form>' element has two important attributes: 'action' and 'method'
        - 'action' -> attribute specifies a URL that will process the form submission.
        - 'method' -> attribute specifies the HTTP method to submit the form with. Usually, the method is either 'post' or 'get'

    - Generally, you use the 'get' method when you want to retrieve data from the server and the 'post' method when you want to change data on the server.

    - JavaScript uses the 'HTMLFormElement' object to represent a form. The 'HTMLFormElement' has the following properties that correspond to the HTML attributes.
        - 'action' -> is the URL that processes the form data. It is equivalent to the 'action' attribute of the '<form>' element
        - 'method' -> is the HTTP method which is equivalent to the 'method' attribute of the '<form>' element

    - 'HTMLFormElement' element also provides the following useful methods
        - 'submit()' -> submit the form
        - 'reset()' -> reset the form
*/


// 1.1 Referencing forms

/* 
    - to reference the '<form>' element, you can use the DOM selecting methods such as 'getElementById()' or 'querySelector()'
    - an HTML document can have multiple forms. The 'document.forms' property returns a collection of forms. To reference a form, you use an index.

    Example:
        document.forms[0]
*/


// 1.2 Submitting a form

/* 
    - to create a submit button, you use '<input>' or 'button' element with the type 'submit'
    - if the submit button has focus and you press the 'Enter' key, the browser also submits the form data.
    - when you submit the form, the 'submit' event is fired before the request is sent to the server. This gives you a chance to validate the form data. If the form data is invalid, you can stop submitting the form.
    - to attach an event listener to the 'submit' event, you use the 'addEventListener()' method of the form.
    Example:
        form.addEventListener('submit', () => {
            //
        })
    
    - to stop the form from being submitted, you call the 'preventDefault()' method of the event object inside the 'submit' event
    Example:
        form.addEventListener('submit', (e) => {
            e.preventDefault();
        })

    - To submit the form in JavaScript, you call the 'submit()' method of the form object
    Example:
        form.submit();

    - note that the 'submit()' does not fire the 'submit' event. Therefore, you should always validate the form before calling this method.
*/


// 1.3 Accessing form fields

/* 
    - to access form fields, you can use DOM methods like 'getElementsByName()', 'getElementById()', 'querySelector()'
    - You can use the 'elements' property of the 'form' object. The 'form.elements' property stores a collection of the form elements.
    - JavaScript allows you to access an element by index, id or name.
*/

// to access the elements of the form, you get the form element first
const form = document.querySelector('#login-form');

form.addEventListener('submit', () => {
    // use either index, id or name to access the element.

    let username = form.elements[0];
    // let username = form.elements['username'];
    let password = form.elements[1];
    // let password = form.elements['password'];

    // if the username field is not empty, show an alert with the value of the username
    if (username.value.length > 0) {
        alert(`Welcome ${username.value}!`);
        console.log(`Password - ${password.value}`);
    
    // if the username field is empty, show a 'Welcome user!' alert
    } else if (username.value.length <= 0) {
        alert('Welcome user!');
    }
});


// 2. Radio buttons

/* 
    - radio buttons allow you to select only one of a predefined set of mutually exclusive options.
    - to find the selected radio button, you follow these steps:
        - select all radio buttons by using DOM method such as 'querySelector()' or 'getElementsByName' method.
        - get the 'checked' property of the radio button, if the 'checked' property is 'true', the radio button is checked; otherwise, it is unchecked.
    - to know which radio button is checked, you use the 'value' attribute
*/
// get the element with the id of 'submitBtn'
const submit = document.querySelector('#submitBtn');

// add a 'click' event listener to the 'submit' element
submit.addEventListener('click', () => {
    // get all elements with the name of 'level'
    let radioBtn = document.getElementsByName('level');

    // loop through the 'radioBtn'
    for (let level of radioBtn) {
        // checks if the radio button is checked
        if (level.checked) {
            alert(`You are a ${level.value} developer!`);
        }
    }
});

// 2.1 radio button's change event

/* 
    - when you check or uncheck a radio button, it fires the 'change' event.
    - inside the change event handler, you can access the 'this' keyword to access the radio button. To check if the radio button is checked, you can use the 'checked' property.
    - to get the value of the checked button, you use the 'value' property.
*/
// get all elements with the name of 'arrangement'
let workArrangement = document.getElementsByName('arrangement');

// loop through the 'workArrangement'
for (let arrangement of workArrangement) {
    // add a 'change' event listener to every radio button and attach the 'showSelected' function
    arrangement.addEventListener('change', showSelected);
}

function showSelected() {
    // checks if the radio button is checked
    if (this.checked) {
        if (this.value == 'Work from home') {
            alert(`So you want to ${this.value}`);
        } else if (this.value == 'Onsite') {
            alert(`So you want to suffer with the daily heavy traffic by working ${this.value}`);
        } else {
            alert(`So you want to work on a ${this.value} setup`);
        }
    }
}