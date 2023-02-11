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

    // to reset the value of the input elements, either set their value to empty string or use '.reset()' method
    // username.value = '';
    // password.value = '';
    form.reset();
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


// 3. Checkbox

/* 
    - it's a good practice to always associate a checkbox with a label to improve usability and accessibility. By doing this, clicking the label also checks/unchecks the checkbox.
    - note that the 'for' attribute's value of the label must match the 'id' of the checkbox.
*/


// 3.1 checking if a checkbox is checked

/* 
    - a checkbox has two states: checked and unchecked.
    - if its 'checked' property is 'true', then the checkbox is checked otherwise, it is not.
*/
// get the element with the id of 'agree'
const agree = document.querySelector('#agree');

// add a 'change' event listener to the 'agree' element
agree.addEventListener('change', () => {
    // checks if the checkbox is checked
    if (agree.checked) {
        console.log('The user agree to the terms and agreement');
    } else {
        console.log('The user doesn\'t agree to the terms and agreement');
    }
});

// alternative way to check if the checkbox is checked
const agreed = document.querySelector('#agree:checked') !== null;
console.log(agreed);

// the selector '#agree:checked' selects the element with the id '#agree' and has the attribute 'checked'
// Therefore, if the checkbox element with the id '#agree' is checked, the 'document.querySelector()' will return it. On the console, you'll see the value 'false' because the checkbox is unchecked.


// 3.2 getting checkbox value

/* 
    - when you get the 'value' attribute of a checkbox, you always get the 'on' string whether the checkbox is checked or not. if the 'value' attribute is not included on the element.
    - on this case the value of checkbox is 'agree' since we included it as an attribute of the element.
*/
// get the element with the id of 'sendBtn'
const sendBtn = document.querySelector('#sendBtn');

// add a 'click' event listener to the 'sendBtn' element
sendBtn.addEventListener('click', () => {
    // logs the 'value' of agree checkbox -> prints 'agree'
    console.log(agree.value);
});


// 3.3 getting values of multiple selected checkboxes
// get the element with the id of 'strengthZoneBtn'
const strengthZoneBtn = document.querySelector('#strengthZoneBtn');

// add a 'click' event listener to the 'strengthZoneBtn' element
strengthZoneBtn.addEventListener('click', () => {
    // get all elements with the name attribute of 'strength'
    let strengthZones = document.getElementsByName('strength');
    let strengths = [];

    // loop through the strengthZones
    for (let strength of strengthZones) {
        // checks if the checkbox is checked
        if (strength.checked) {
            // if check, the value of the checkbox will be pushed to the strengths array
            strengths.push(strength.value);
        }
    }

    // if the strengths array has only one element, show this alert
    if (strengths.length == 1) {
        alert(`Your specialization is \n ${strengths.join(", ")}`);

    // if it has more than one element, show this alert
    } else if (strengths.length > 1) {
        alert(`Your specializations are \n ${strengths.join(", ")}`);
    
    // if the array is empty, show this alert
    } else {
        alert('You don\'t have specializations');
    }
});


// 3.4 check/uncheck all checkboxes
// get the element with the id of 'select-all'
const selectAll = document.querySelector('#select-all');

function check(checked) {
    // get all the elements with the name attribute of 'strength'
    let strengthZones = document.getElementsByName('strength');
    // loop through each element of 'strengthZones'
    strengthZones.forEach(checkbox => {
        // assign the value of 'checked' parameter. it is either TRUE or FALSE
        checkbox.checked = checked;
    });
}

function checkAll() {
    // calls the 'check' function and pass a 'true' argument
    check(true);
    // once the element receives a 'click' event it will call the 'uncheckAll' function
    this.onclick = uncheckAll;
}

function uncheckAll() {
    // calls the 'check' function and pass a 'false' argument
    check(false);
    // once the element receives a 'click' event it will call the 'checkAll' function
    this.onclick = checkAll;
}

// add a 'onclick' event handler to the 'selectAll' button and invoke the 'checkAll' function initially
selectAll.onclick = checkAll;


// 3.5 creating checkboxes dynamically
// create an array of objects that contains the theme details
const colors = [
    {
        name: 'default',
        hex: '#F3DFCB'
    },
    {
        name: 'dark',
        hex: '#131313'
    },
    {
        name: 'light',
        hex: '#ffffff'
    }
];

// map through the colors array and return a checkbox element with label with it's corresponding attributes
const radioBtnColor = colors.map(color => 
    `<label for="${color.name}">
        <input type="checkbox" name="themes" id="color-${color.name}" value="${color.hex}"> ${color.name}
    </label>`).join(" ");
    // use 'join(" ")' function to convert the array into a single string separated by a 'space'

// select the target container with the id of 'theme'
const themeContainer = document.querySelector('#theme');
// assign it's innerHTMl to 'radioBtnColor'
themeContainer.innerHTML = radioBtnColor;


// selects the main container
const mainContainer = document.querySelector('#container');
// select the 'paragraph' element
const paragraphs = document.querySelector('p');
// select all 'h2' elements
const h2 = document.querySelectorAll('h2');
// select all 'h3' elements
const h3 = document.querySelectorAll('h3');
// select all 'label' elements
const labels = document.querySelectorAll('label');

// get all elements with the name attribute of 'themes'
const themes = document.getElementsByName('themes');

// loop through the themes
for (let theme of themes) {
    // add a 'change' event listener to every checkbox and invoke the 'getSelected' function
    theme.addEventListener('change', getSelected);
}

function getSelected() {
    // checks if the checkbox is checked
    if (this.checked) {
        // if the value of the checked checkbox is "#131313"
        if (this.value == "#131313") {
            // change the background color of the main container to dark
            mainContainer.style.backgroundColor = this.value;
            // change the colors of p, h2, h3 and label elements to white
            toWhite(paragraphs, h2, h3, labels);
        } else {
            // change the background color of the main container to either default or light
            mainContainer.style.backgroundColor = this.value;
            // change the colors of p, h2, h3 and label elements to black
            toBlack(paragraphs, h2, h3, labels);
        }
    }
}

// changes the color of p, h2, h3 and label elements to white
function toWhite(p, h2, h3, l) {
    const color = "white";
    p.style.color = color;

    for (let heading2 of h2) {
        heading2.style.color = color;
    }

    for (let heading3 of h3) {
        heading3.style.color = color;
    }

    for (let label of l) {
        label.style.color = color;
    }
};

// changes the color of p, h2, h3 and label elements to black
function toBlack(p, h2, h3, l) {
    const color = "black";
    p.style.color = color;

    for (let heading2 of h2) {
        heading2.style.color = color;
    }

    for (let heading3 of h3) {
        heading3.style.color = color;
    }

    for (let label of l) {
        label.style.color = color;
    }
};


// 4. select box

/* 
    - a '<select>' element allows you to select one or multiple options.
    - to enable multiple selections, you add 'multiple' attribute to '<select>' element
*/

// 4.1 HTMLSelectElement type

/* 
    - the 'HTMLSelectElement' represents the '<select>' element.
    - to interact with '<select>' element in JavaScript, you use the 'HTMLSelectElement'
    - the 'HTMLSelectElement' type has the following useful properties.
        - 'selectedIndex' -> returns the zero-based index of the selected option. The 'selectedIndex' is '-1' if no option is selected. If the '<select>' element allows multiple selections, the 'selectedIndex' returns the 'value' of the first option selected.
        - 'value' -> returns the 'value' property of the first selected option element if there is one. Otherwise, it returns an empty string.
        - 'multiple' -> returns 'true' if the '<select>' element allows multiple selections. It is equivalent to the 'multiple' attribute.
*/

// 4.1.1 selectedIndex property
const frameworkBtn = document.querySelector('#frameworkBtn');
const frameworks = document.querySelector('#framework');

frameworkBtn.addEventListener('click', () => {
    console.log(frameworks.selectedIndex);
});

// 4.1.2 value property

/* 
    - the 'value' property of the '<select>' element depends on the '<option>' element and its HTML 'multiple' attribute
    - if no option is selected, the 'value' property of the select box is an EMPTY STRING
    - if an option is selected and HAS a 'value' attribute, the 'value' property of the select box is the VALUE of the selected option.
    - if an option is selected and has NO 'value' attribute, the 'value' property of the select box is the TEXT of the selected option.
    - if MULTIPLE options are selected, the 'value' property of the select box is derived from the first selected option based on the previous two rules.
*/
frameworkBtn.addEventListener('click', () => {
    console.log(`You selected ${frameworks.value}`);
});


// 4.2 HTMLOptionElement type

/* 
    - the 'HTMLOptionElement' represents the '<option>' element
    - the 'HTMLOptionElement' type has the following handy properties
        - 'index' -> the index of the option inside the collection of options.
        - 'selected' -> returns 'true' when the option is selected. You set this property to 'true' to select an option.
        - 'text' -> returns the options text
        - 'value' -> returns the HTML value attribute

    - the '<select>' element has the 'options' property that allows you to access the collection options.
        Syntax:
            selectBox.options

        Example:
            selectBox.options[1].text;
            selectBox.options[1].value;
    
    - to get the selected option of a '<select>' element with a SINGLE selection.
        Syntax:
            let selectedOption = selectBox.options[selectBox.selectedIndex];
  
    - when a '<select>' element allows multiple selections, you can use the 'selected' property to determine which options are selected
*/

frameworkBtn.addEventListener('click', () => {
    let selectedOptions = []

    for (let ctr = 0; ctr < frameworks.options.length; ctr++) {
        if (frameworks.options[ctr].selected) {
            selectedOptions.push(frameworks.options[ctr].value);
        } else {
            continue;
        }
    };

    alert(`You selected ${selectedOptions.join(", ")}`);
});


// 5. dynamically add & remove options from select box

/* 
    - 'add(option, existingOption)' -> adds a new '<option>' element to the '<select>' before an existing option.'
    - 'remove(index)' -> removes an option specified by the index from a '<select>'

    - ADDING OPTIONS
        - first, create a new option element
        - second, add the option to the select element.
*/

// 5.1 using the 'Option' constructor and add() method

/* 
    - use the 'Option' constructor to create a new option with the specified option text and value
    Syntax:
        let newOption = new Option('Option text', 'Option value');

    - then, call the 'add()' method
        selectBox.add(newOption, undefined);

    - the 'add()' method accepts two arguments. The first argument is the new option and the seconde is an existing option. If 'undefined' is passed as the second argument, the method will add the new option to the END of the options list.
*/

// 5.2 Using the DOM methods

/* 
    - first construct a new option using DOM methods
        const newOption = document.createElement('option');
        const optionText = document.createTextNode('Option text');

        newOption.appendChild(optionText);
        newOption.setAttribute('value', 'Option value');

    - second, add the new option to the select element
        selectBox.appendChild(newOption);
*/
const addFrameworkBtn = document.querySelector('#addFrameworkBtn');
const frameworkName = document.querySelector('#framework-name');
const message = document.querySelector('#error-message');

frameworkName.addEventListener('keydown', (e) => {
    if (frameworkName.value.length > 0 && e.keyCode === 13) {
        message.classList.remove("message-show");
        message.classList.add("message-hide");

        const newOption = document.createElement('option');

        newOption.setAttribute('value', frameworkName.value);
        newOption.textContent = frameworkName.value;

        frameworks.appendChild(newOption);
        frameworkName.value = '';
    } 
});

addFrameworkBtn.addEventListener('click', () => {
    if (frameworkName.value.length <= 0) {
        message.textContent = "Enter a framework name!";
        message.classList.add("message-show");
    } else {
        message.classList.remove("message-show");
        message.classList.add("message-hide");

        const newOption = document.createElement('option');

        newOption.setAttribute('value', frameworkName.value);
        newOption.textContent = frameworkName.value;

        frameworks.appendChild(newOption);
        frameworkName.value = '';
        frameworkName.focus();
    }
});

// 5.3 removing options

/* 
    - there are multiple ways to dynamically remove options from a select element
    - first way is to use the 'remove()' method.
    Syntax:
        selectBox.remove(index);

    - second way is to reference the option by its index using the 'options' collection and set its value to 'null'
    Syntax:
        selectBox.options[index] = null;

    - third way is to use the 'removeChild()' method and remove a specified option.
    Syntax:
        selectBox.removeChild(selectBox.options[0]);

    - to remove all options of a select element
    Syntax:
        while (selectBox.options.length > 0) {
            selectBox.remove(0);
        }
*/
const removeOptionBtn = document.querySelector('#removeOptionBtn');

removeOptionBtn.addEventListener('click', () => {
    const selected = [];

    for (let ctr = 0; ctr < frameworks.options.length; ctr++) {
        if (frameworks.options[ctr].selected) {
            selected.push(ctr);
        }
    }

    // when removing options from a select element, it is important to loop through the selected options in reverse order because, as the options are removed, the indices of the remaining options changes. If the options were removed in the forward direction, then after removing the first option, the index of the next option would be different.
    let reversed = selected.reverse();
    reversed.forEach(option => frameworks.remove(option));

    // for (let ctr1 = selected.length - 1; ctr1 >= 0; ctr1--) {
    //     frameworks.remove(selected[ctr1]);
    // }
});

const removeFromTop = document.querySelector('#removeFromTop');

removeFromTop.addEventListener('click', () => {
    (frameworks.options.length > 0) ?
        frameworks.options[0] = null
    :
        alert('No options left!');
});

const removeFromBottom = document.querySelector('#removeFromBottom');

removeFromBottom.addEventListener('click', () => {
    (frameworks.options.length > 0) ?
        frameworks.removeChild(frameworks.options[frameworks.options.length - 1])
    :
        alert('No options left!');
});

// 5.4 removing items from a select element conditionally

/* 
    - a common mistake is to iterate over the options of a '<select>' element and remove the element inside the loop without being aware that the indices have been adjusted.
*/
const removeNew = document.querySelector('#removeNew');

removeNew.addEventListener('click', () => {
    for (let ctr = frameworks.options.length - 1; ctr >= 0 ; ctr--) {
        let text = frameworks.options[ctr].text;
        if (text.endsWith('js')) {
            frameworks.remove(ctr);
        }
    }
});