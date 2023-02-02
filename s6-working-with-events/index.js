// 1. event

/* 
    - an event is an action that occurs in the web browser, which the web browser feedbacks to you so that you can respond to it.
    - each event may have an event handler which is a block of code that will execute when the event occurs.
    - event handler is also known as an event listener. It listens to the event and executes when the event occurs.
*/
const btnAlert = document.querySelector('#click-me');

btnAlert.addEventListener('click', () => {
    alert("Welcome to Session 6!");
});

// 2. event flow

/* 
    - event flow explains the order in which events are received on the page from the element where the event occurs and propagated throught the DOM tree.
    - There are two main event models: event bubbling and event capturing.
*/

// 2.1 event bubbling

/* 
    - in the event bubbling model, an event starts at the most specific element and then flows upward toward the least specific element
    - when you click the button, the 'click' event occurs in the following order
        button -> div with the id container -> body -> html -> document
    - the 'click' event first occurs on the button which is the element that was clicked. Then the 'click' event goes up the DOM tree, firing on each node along its way until it reaches the 'document' object.
    - note that modern browsers bubble the event up to the 'window' object.
*/

// 2.2 event capturing

/* 
    - in the event capturing model, an event starts at the least specific element and flows downward toward the most specific element.
    - when you click the button, the 'click' event occurs in the following order
        document -> html -> body -> div with the id container -> button
*/

// 2.3 DOM level 2 event flow

/* 
    DOM level 2 event specify that event flow has three phases
        - first event capturing occurs, which provides the opportunity to intercept the event
        - Then, the actual target receives the event
        - finally, event bubbling occurs, which allows a final response to the event.
*/


// 3. event object

/* 
    - when the event occurs, the web browser passed an 'event' object to the event handler
    - note that the event object is only accessible inside the event handler. Once all the event handlers have been executed, the event object is automatically destroyed.
*/
console.log('\n\t\tThis is the type of event on the button and the target of the event\n\n'.toUpperCase());
btnAlert.addEventListener('click', (e) => {
    console.log(e.type);
    console.log(e.target);
});


// 4. preventDefault()

/* 
    - to prevent the default behavior of an event, you use the 'preventDefault()' method.
    - note that the 'preventDefault()' method does not stop the event from bubbling up the DOM. And an event can be cancelled when its 'cancelable' property is 'true'.
*/
const link = document.querySelector('#docs-events');

link.addEventListener('click', (e) => {
    alert("You have clicked the link!");
    e.preventDefault();
});


// 5. stopPropagation()

/* 
    - this method immediately stops the flow of an event through the DOM tree. However, it does not stop the browsers default behavior
*/
btnAlert.addEventListener('click', (e) => {
    console.log('You have clicked the button!');
    e.stopPropagation();
});

document.body.addEventListener('click', () => {
    console.log('The body was clicked!');
});
/* 
    - without the 'stopPropagation()' method, you would see two messages on the console window.
    - however, the 'click' event never reaches the 'body' because the 'stopPropagation()' was called on the 'click' event handler of the button.
*/


// 6. HTML event handler attributes

/* 
    - event handlers typically have names that begin with 'on', for example, the event handler for the 'click' event is 'onclick'.
    - to assign an event handler to an event associated with an HTML element, you can use an HTML attribute with the name of the event handler.
    - when you assign JavaScript code as the value of the onclick attribute, you need to escape the HTML characters such as ampersand(&), double quotes("), less than(<), etc., or you will get a syntax error

    Syntax:
        <input type="button" value="save" onClick="alert('clicked!')">
        <input type="button" value="save" onClick="function()">

    Important notes:
        - the code in the event handler can access the event object without explicitly defining it.
            <input type="button" value="save" onClick="alert(event.type)">
        - the 'this' value inside the event handler is equivalent to the event's target element
            <input type="button" value="save" onClick="alert(this.value)">
        - the event handler can access the element's properties
            <input type="button" value="save" onClick="alert(value)">

    Disadvantages of using HTML event handler attributes
        * assigning event handlers using HTML event handler attributes are considered as 'BAD PRACTICES' and 'SHOULD BE AVOIDED' as much as possible because of the following reasons
            - the event handler code is mixed with the HTML code, which will make the code more difficult to maintain and extend
            - it is a timing issue. If the element is loaded fully before the JavaScript code, users can start interacting with the element on the webpage which will cause an error.
*/
const showAlert = () => alert('Here is the alert!');


// 7. DOM level 0 event handlers

/* 
    - each element has event handler properties such as 'onclick'
    Syntax:
        btn.onclick = function() {
            alert('clicked!');
        };

    - the 'this' value is equivalent to the element. And you can access the element's properties inside the event handler
    Syntax:
        btn.onclick = function() {
            alert(this.id);
        };

    - by using the 'this' value inside the event handler, you can access the element's properties and methods.
    - to remove the event handler, you set the value of the event handler property to 'null'
    Syntax:
        btn.onclick = null;

    - the DOM level 0 event handlers are still being used widely because of its simplicity and cross-browser support.
*/
const showConfirm = document.querySelector('#show-confirm');

showConfirm.onclick = () => {
    let feelings = confirm("Are you having fun?");
    (feelings) ? 
        console.log(`${feelings} the user is having fun`) 
    : 
        console.log(`${feelings} the user is not having fun`)
};


// 8. DOM level 2 event handlers

/* 
    * provide two main methods for dealing with the registering/deregistering event listeners
        - addEventListener() - register an event handler
        - removeEventListener() - remove an event handler
*/


// 8.1 addEventListener()

/* 
    - the addEventListener() method accepts three arguments
        - an event name
        - an event handler function
        - a boolean value that instructs the method to call the event handler during the capture phase (true) or during the bubble phase (false)
    
    - it is possible to add multiple event handlers to handle a single event

    Syntax:
        element.addEventListener('event', function() {
            // statement
        })
*/
const generateLoremIpsum = () => {
    console.log('Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi fuga harum nesciunt placeat, possimus accusantium reiciendis, odio laborum aspernatur beatae nisi. Delectus, sapiente expedita? Necessitatibus saepe totam nihil molestias atque!');
};

showConfirm.addEventListener('click', generateLoremIpsum);

showConfirm.addEventListener('click', (e) => {
    console.log(`This is the event type on rate us button ${e.type.toUpperCase()}`);
});

showConfirm.addEventListener('click', (e) => {
    console.log("This is the target element of the second event listener of rate us button\n");
    console.log(e.target);
});


// 8.2 removeEventListener

/* 
    - the removeEventListener() removes an event listener that was added via the 'addEventListener()'. However, you need to pass the same arguments as were passed to the addEventListener()

    Syntax:
        element.removeEventListener('event', function());

    - using an anonymous event listener will not work
    Syntax:
        // THIS WILL NOT WORK
        element.removeEventListener('event', function () {
            // statement
        });
*/
showConfirm.removeEventListener('click', generateLoremIpsum);


// 9. Page load events

/* 
    * when you open a page, the following event occurs in sequence
        - DOMContentLoaded -> the browser fully loaded HTML and completed building the DOM tree. However, it hasn't loaded external resources like stylesheets and images. In this event, you can start selecting DOM nodes or initialize the interface.
        - load -> the browser fully loaded the HTML and also external resources like images and stylesheets.
        
    * when you leave the page, the following event occurs in sequence
        - beforeunload -> fires before the page and resources are unloaded. You can use this event to show a confirmation dialog to confirm if you really want to leave the page. By doing this, you can prevent data loss in case you are filling out a form and accidentally click a link to navigate to another page
        - unload -> fires when the page has completely unloaded. You can use this event to send the analytic data or to clean up resources

    Syntax:
        document.addEventListener('DOMContentLoaded', () => {
            // handle event
        });

        document.addEventListener('load', () => {
            // handle event
        });

        document.addEventListener('beforeunload', () => {
            // handle event
        });

        document.addEventListener('unload', () => {
            // handle event
        });
*/
document.addEventListener('DOMContentLoaded', (e) => {
    console.log('The DOM has loaded!');
});

// you need to add the 'load' event to the 'window' instead of 'document'
window.addEventListener('load', (e) => {
    // alert('The page has fully loaded!');
});

// Note that the prompt may not be displayed in some browsers, as they have started to remove support for this feature in recent years due to security and usability reasons.
window.addEventListener('beforeunload', (event) => {
    // event.preventDefault();
    // event.returnValue = 'Are you sure you want to leave this page?';
});


// 9.1 load

/* 
    - the 'load' event is fired when the whole webpage has loaded fully, including all dependent resources, including JavaScript files, CSS files and images.
    - it's a good practice to use the 'addEventListener()' method to assign the 'onload' event handler whenever possible
    - the <img> and <script> elements also support the 'load' event

    Syntax:
        window.addEventListener('load', (e) => {
            // statement
        })

        OR

        window.onload = (e) => {
            // statement
        }
*/
window.onload = (e) => {
    console.log('The page has fully loaded!');
};

// 9.1.1 image load event

/* 
    - the 'load' event also fires on images. To handle the 'load' event on images, you use the 'addEventListener()' method of the image elements.
*/
const image = document.querySelector('.img-layout');

image.addEventListener('load', (e) => {
    console.log('The image has been loaded!');
});

// 9.1.2 script's load event

/* 
    - the <script> element also supports the 'load' event slightly different from the standard ways. The script's 'load' event allows you to check if a JavaScript file has been completely loaded.
    - unlike images, the web browser starts downloading JavaScript files only after the 'src' property has been assigned and the '<script>' element has been added to the document.
*/
window.addEventListener('load', checkJSLoaded);

function checkJSLoaded() {
    let script = document.createElement('script');

    script.addEventListener('load', () => {
        console.log('the script has been loaded');
    });

    script.src = "app.js";
    document.body.appendChild(script);
};

// 9.2 DOMContentLoaded

/* 
    - the 'DOMContentLoaded' fires when the DOM content is loaded, without waiting for images and stylesheets to finish loading
    - only handle 'DOMContentLoaded' event if you place the JavaScript code in the 'head', which references elements in the body section.

    Example:
    <head>
        <script>
            document.addEventListener('DOMContentLoaded', (e) => {
                let btn = document.getElementById('btn');
                btn.addEventListener('click', () => {
                    console.log('Button clicked');
                });
            });
        <script/>
    </head>
    <body>
        <button id="btn">Click me!</button>
    </body>

    - when you place JavaScript in the HEADER, it will cause BOTTLENECKS and RENDERING DELAYS, so it's better to move the script inside the </body> tag.

    Example:
    <head>
        <title>JS DOMContentLoaded event</title>
    </head>
    <body>
        <button id="btn">Click me!</button>
        <script>
            document.addEventListener('DOMContentLoaded', (e) => {
                let btn = document.getElementById('btn');
                btn.addEventListener('click', () => {
                    console.log('Button clicked');
                });
            });
        <script/>
    </body>
*/


// 9.3 beforeunload

/* 
    - before the webpage and its resources are unloaded, the 'beforeunload' event is fired. At this time, the webpage is still visible and you have an opportunity to cancel the event.
    - if a webpage has a 'beforeunload' event listener and you are about to leave the page, the 'beforeunload' event will trigger a confirmation dialog if you really want to leave the page
    - according to the specification, you need to call the 'preventDefault()' method inside the 'beforeunload' event handler in order to show the confirmation dialog. However, not all browsers implement this.
    - some browsers allow you to display a custom message on the confirmation dialog. This was intended to inform the users that they will lose data if they navigate away. Unfortunately, this feature is often used to scam users. As a result, a custom message is no longer supported.
    - the calls to 'alert()', 'prompt()', and 'confirm()' are ignored in the 'beforeunload' event handler

    Syntax:
        window.addEventListener('beforeunload', (e) => {
            // statement
        })

        OR 

        addEventListener('beforeunload', (e) => {
            // statement
        })
*/
window.addEventListener('beforeunload', (event) => {
    event.preventDefault();
    event.returnValue = '';
});


// 9.4 unload

/* 
    - the 'unload' event fires when a document has completely unloaded. Typically, the 'unload' event fires when you navigate from one page to another.
    - in practice, you should NEVER USE the 'unload' event because it is not reliable on mobile devices and causes an issue with 'bfcache'

    - the 'unload' event is fired after
        - 'beforeunload' event
        - 'pagehide' event

    - at this moment, the HTML document is in the following state
        - UI is not visible to the users and is not effective
        - All the resources like img, iframe, etc., still exist.
        - An error won't stop the unloading flow.

    Syntax:
        window.addEventListener('unload', (event) => {
            // statement
        });

        OR

        window.onunload = (event) => {
            // statement
        };
*/
window.addEventListener('unload', (event) => {
    alert("The page is unloaded");
});