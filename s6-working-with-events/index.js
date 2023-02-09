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
    - event flow explains the order in which events are received on the page from the element where the event occurs and propagated through the DOM tree.
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


// 10. Mouse events

/* 
    - mouse events fire when you use the mouse to interact with the elements on the page. DOM level 3 events define nine mouse events.
*/

// 10.1 mousedown, mouseup and click

/* 
    - when you 'click' an element, there are no less than three mouse events fire in the following sequence.
        - the 'mousedown' fires when you depress the mouse button on the element
        - the 'mouseup' fires when you release the mouse button on the element
        - the 'click' fires when one 'mousedown' and one 'mouseup' detected on the element

    - if you depress the mouse button on an element and move your mouse off the element, and then release the mouse button. Only the 'mousedown' event fires on the element.
    - likewise, if you depress the mouse button, move the mouse over the element and release the mouse button, the only 'mouseup' event fires on the element.
    - In both cases, the 'click' event never fires.
*/
const mouseEvents = document.querySelector('#mouse-events');

mouseEvents.addEventListener('mousedown', () => {
    console.log('Mousedown event is triggered!');
});

mouseEvents.addEventListener('mouseup', () => {
    console.log('Mouseup event is triggered!');
});

mouseEvents.addEventListener('click', () => {
    console.log('Click event is triggered!');
});

// 10.2 dblclick

/* 
    - The 'dblclick' event fires when you double click over an element
    - The 'dblclick' event has four events fired in the following order
        - mousedown
        - mouseup
        - click

        - mousedown
        - mouseup
        - click

        - dblclick

    - as you can see, the 'click' events always take place before the 'dblclick' event. If you register both 'click' and 'dblclick' event handlers on the same element, you will now know exactly if the user has clicked or double-clicked the element.
*/

mouseEvents.addEventListener('dblclick', () => {
    alert('You double clicked the button');
});

// 10.3 mousemove

/* 
    - the 'mousemove' event fires repeatedly when you move the mouse cursor around an element. Even when you move the mouse one pixel, the 'mousemove' event still fires. It will cause the page to be slow, therefore you only register 'mousemove' event handler only when you need it and immediately remove the event handler as soon as it is no longer needed.
*/
const mouseMoveEvent = () => {
    console.log('You are moving the mouse cursor');
};

document.body.addEventListener('mousemove', mouseMoveEvent);

setTimeout(() => {
    document.body.removeEventListener('mousemove', mouseMoveEvent);
}, 5000);

// 10.4 mouseover/mouseout

/* 
    - 'mouseover' fires when the mouse cursor is outside of the element and then move to inside the boundaries of the element
    - 'mouseout' fires when the mouse cursor is over an element and then moves to another element
*/

mouseEvents.addEventListener('mouseover', () => {
    mouseEvents.title = "You hover over me!";
});

mouseEvents.addEventListener('mouseout', () => {
    alert('You hover out of the button!');
});

// 10.5 mouseenter/mouseleave

/* 
    - 'mouseenter' fires when the mouse cursor is outside of an element and then moves to inside the boundaries of the element
    - 'mouseleave' fires when the mouse cursor is over an element and then moves to the outside of the element's boundaries
    - both 'mouseenter' and 'mouseleave' does not bubble and does not fire when the mouse cursor moves over descendant elements
*/

mouseEvents.addEventListener('mouseenter', () => {
    console.log('You hover over the button!');
});

mouseEvents.addEventListener('mouseleave', () => {
    console.log('You hover out of the button!');
});

// DIFFERENCE BETWEEN 'mouseover' and 'mouseenter' as per ChatGPT

/* 
    - 'mouseover' triggers when the mouse enters the element or one of its descendants
    - 'mouseenter' triggers only when the mouse enters the element, not it's descendants
*/

// DIFFERENCE BETWEEN 'mouseout' and 'mouseleave' as per ChatGPT

/* 
    - 'mouseout' triggers when the mouse leaves the element or moves to one of its descendants
    - 'mouseleave' triggers only when the mouse leaves the element, not when it moves to one of its descendants
*/

// 10.6 detecting mouse buttons

/* 
    - the 'event' object passed to the mouse event handler has a property called 'button' that indicates which mouse button was pressed on the mouse to trigger the event.
    - the mouse button is represented by a number
        - 0 -> the main mouse button is pressed, usually the left button
        - 1 -> the auxiliary button is pressed, usually the middle button or the wheel button
        - 2 -> the secondary button is pressed, usually the right button
        - 3 -> the fourth button is pressed, usually the browser back button
        - 4 -> the fifth button is pressed, usually the browser forward button
*/

const buttonDetect = document.querySelector('#mouse-button-detect');

buttonDetect.addEventListener('contextmenu', (e) => {
    e.preventDefault();
});

buttonDetect.addEventListener('mouseup', (e) => {
    switch(e.button) {
        case 0: 
            console.log('Left mouse button is clicked');
            break;
        case 1:
            console.log('Middle mouse button is clicked');
            break;
        case 2:
            console.log('Right mouse button is clicked');
            break;
        default:
            console.log('Unknown mouse button is clicked');
    }
});

// 10.7 modifier keys

/* 
    - when you click an element, you may press one or more modifier keys
        - shift
        - ctrl
        - alt
        - meta

    - note the meta key is the 'Windows' key on windows keyboard and the 'Command' key on the apple keyboard
    - to detect if these modifier keys have been pressed, you can use the 'event' object passed to the mouse event handler
        - e.shiftKey -> to detect if 'shift' key is pressed
        - e.ctrlKey -> to detect if 'ctrl' key is pressed
        - e.altKey -> to detect if 'alt' key is pressed
        - e.metaKey -> to detect if 'meta' key is pressed
*/
function detectButton () {
    buttonDetect.addEventListener('click', (e) => {
        if (e.shiftKey) {
            console.log('You pressed the button with shift key');
        } else if (e.ctrlKey) {
            console.log('You pressed the button with ctrl key');
        } else if (e.altKey) {
            console.log('You pressed the button with alt key');
        } else if (e.metaKey) {
            console.log('You pressed the button with meta key');
        } else {
            console.log('You pressed the button with unknown modifier key');
        }
    });
}
detectButton();


// 10.8 getting screen coordinates

/* 
    - the 'screenX' and 'screenY' properties of the event passed to the mouse event handler return the screen coordinates of the location of the mouse in relation to the entire screen.
    - the 'clientX' and 'clientY' properties provide the horizontal and vertical coordinates within the applications client area at which the mouse event occured.
*/
function getCoordinates() {
    const coordinateContainer = document.querySelector('.coordinates');

    coordinateContainer.addEventListener('mousemove', (e) => {
        const screen = document.querySelector('#screenXY');
        const client = document.querySelector('#clientXY');

        screen.textContent = `Screen X/Y: ${e.screenX}, ${e.screenY}`;
        client.textContent = `Client X/Y: ${e.clientX}, ${e.clientY}`;
    });
}
getCoordinates();


// 11. keyboard events

/* 
    - when you interact with the keyboard, the keyboard events are fired.
        - 'keydown' -> fires when you press a key on the keyboard and fires repeatedly while you're holding down the key
        - 'keyup' -> fires when you release a key on the keyboard
        - 'keypress' -> fires when you press character keyboard like 'a, b or c' not the left arrow key, home or end keyboard keys. The 'keypress' also fires repeatedly while you hold down the key on the keyboard

    - when you press a character key once on the keyboard, three keyboard events are fired in the following order
        - keydown
        - keypress
        - keyup

    - both 'keydown' and 'keypress' events are fired before any changes is made to the text box, whereas the keyup event fires after the changes have been made to the text box. If you hold down a character key, the 'keydown' and 'keypress' are fired repeatedly until you release the key.

    - when you press a non-character key, the 'keydown' event is fired first followed by the 'keyup' event.
    if you hold down the non-character key, the 'keydown' is fired repeatedly until you release the key.
*/
const message = document.querySelector('#message');

message.addEventListener('keydown', () => {
    console.log('You are typing something');
});

message.addEventListener('keypress', () => {
    console.log('You type a character');
});

message.addEventListener('keyup', () => {
    console.log('Your message is being logged');
});

// 11.1 keyboard event properties

/* 
    - the keyboard event has two important properties
        - 'key' -> property returns the character that has been pressed
        - 'code' -> property return the physical key code

    Example:
        if you press the 'z' character key, the 'event.key' returns 'z' and 'event.code' returns 'KeyZ'
*/
message.addEventListener('keydown', (e) => {
    console.log(`Key = ${e.key} Code = ${e.code}`);
});


// 12. scroll events

/* 
    - when you scroll a document or an element, the scroll event fires. You can trigger the scroll events in the following ways.
        - using the scrollbar manually
        - using the mouse wheel
        - clicking an ID link
        - calling functions in JavaScript
*/
    // const scrollEvent = () => console.log('You are scrolling');
    // window.addEventListener('scroll', scrollEvent);

// 12.1 scroll offsets

/* 
    - the window object has two properties related to the scroll events: 'scrollX' and 'scrollY'
    - the 'scrollX' and 'scrollY' properties return the number of pixels that the document is currently scrolled horizontally and vertically.
    - the 'scrollX' and 'scrollY' are double-precision floating-point values so if you need integer values, you can use the Math.round() to round them off.
    - the initial value are 0 (zero) if the document hasn't been scrolled at all.
    - the 'pageXOffset' and 'pageYOffset' are aliases of the 'scrollX' and 'scrollY' properties
*/
    // window.addEventListener('scroll', () => {
    //     console.log(`This is the Y axis of scroll ${window.scrollY}`);
    //     console.log(`This is the X axis of scroll ${window.scrollX}`);
    // });

// 12.2 scrolling an element

/* 
    - like the window object, you can attach a scroll event handler to any HTML element. However, to track the scroll offset, you use the 'scrollTop' and 'scrollLeft' instead of 'scrollX' and 'scrollY'
    - the 'scrollTop' property sets or gets the number of pixels that the element's content is vertically scrolled.
    - the 'scrollLeft' property gets and sets the number of pixels that an element's content is scrolled from its left edge.
*/
const control = document.querySelector('#controls');

control.addEventListener('click', (event) => {
    let container = document.querySelector('.container');

    let targetId = event.target;

    switch(targetId.id) {
        case 'scroll-top':
            container.scrollTop += 15;
            break;
        case 'scroll-left':
            container.scrollLeft += 15;
            break;
    }
});

// 12.3 better ways to handle the scroll events

/* 
    - many 'scroll' events fire while you are scrolling a page or an element. If you attach an event listener to the 'scroll' event, the code in the event handler needs time to execute.
    - this will cause an issue which is known as the 'scroll jank'. The scroll jank effect causes a delay so that the page doesn't feel anchored to your finger.
*/

// 12.3.1 event throttling

/* 
    - it is much better to keep the 'scroll' event handler lightweight and execute it every N miliseconds by using a timer.
    - the throttling slows down the rate of execution of the scroll event handler.
*/
let scrolling = false;

window.onscroll = () => {
    scrolling = true;
    console.log('You are scrolling');
}

setInterval(() => {
    if (scrolling) {
        scrolling = false;
        console.log('Scrolling paused');
    }
}, 300);

// 12.3.2 passive events

/* 
    - recently, modern web browsers support passive events for the input events like 'scroll', 'touchstart', 'wheel', etc. It allows the UI thread to handle the event immediately before passing over control to your custom event handler.
    - in the web browsers which support the passive events, you need to add the 'passive' flag to any event listener that does not call 'preventDefault()'
*/
    // window.addEventListener('scroll', () => {
    //     console.log('You are scrolling!');
    // }, {passive:true});


// 13. scrollIntoView

/* 
    - method to scroll an element into the view
    - suppose you have a list of elements and you want a specific element to be highlighted and scrolled into view

    Syntax:
        element.scrollIntoView(alignToTop);
        element.scrollIntoView(options);

    Parameters:
        1. 'alignToTop' -> is a boolean value 
            - if it is set to TRUE, the method will align the top of the element to the top of the viewport or top of the visible area of the scrollable ancestor.
            - if it is set to FALSE, the method will align the bottom of the element to the bottom of the viewport or the bottom of the visible area of scrollable ancestor.
        - by default, alignToTop is TRUE

        2. 'options' -> argument is an object that gives more control over of alignment of the element in the view. However, the web browser support may be slightly different. The 'options' object has the following properties
            - 'behavior' -> property defines the transition animation. The 'behavior' property accepts two values: 'auto' or 'smooth'. It defaults to 'auto'
            - 'block' -> property defines the vertical alignment. It accepts one of four values: 'start', 'center', 'end', or 'nearest'. By default, it is 'start'
            - 'inline' -> property defines horizontal alignment. It also accepts one of four values: 'start', 'center', 'end' or 'nearest'. It defaults to 'nearest'
*/
const btn = document.querySelector('#scroll-into-view');

btn.addEventListener('click', () => {
    const fav = document.querySelector('#favorite');
    // fav.scrollIntoView(true);
    fav.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'start'
    });
});


// 14. focus events

/* 
    - the 'focus' events fire when an element receives or loses focus.
        - 'focus' -> fires when an element has received focus
        - 'blur' -> fires when an element has lost focus
    - the 'focusin' and 'focusout' fire at the same time as 'focus' and 'blur', they bubble, while the 'focus' and 'blur' do not.

    - the following elements are focusable
        - the 'window' gains focus when you bring it forward by using 'alt + tab' or clicking on it and loses focus when you send it back.
        - 'links' when you use a mouse or a keyboard.
        - 'form fields' like input text when you use a keyboard or a mouse.
        - elements with 'tabindex', also when you use a keyboard or mouse.
*/
const fullName = document.querySelector('input[type="text"]');
const password = document.querySelector('input[type="password"]');
const submitBtn = document.querySelector('#submitBtn');

function changeStyleOnFocus(e) {
    e.target.style.backgroundColor = 'orangered';
    e.target.classList.add('large-input');
}

function changeStyleOnBlur(e) {
    e.target.style.backgroundColor = '';
    e.target.classList.remove('large-input');
}

fullName.addEventListener('focus', changeStyleOnFocus);

fullName.addEventListener('blur', changeStyleOnBlur);

password.addEventListener('focus', changeStyleOnFocus);

password.addEventListener('blur', changeStyleOnBlur);

submitBtn.addEventListener('click', () => {
    if (fullName.value.length > 0) {
        alert(`Hello ${fullName.value}!`);
    } else {
        alert('Hello user!');
    }
    fullName.value = '';
    password.value = '';
});


// 15. hashchange

/* 
    - The URL has is everything that follows the pound sign ( # ) in the URL.
    Example:
        https://www.javascripttutorial.net/javascript-dom/javascript-hashchange/#header

    - The URL has is 'header'. If the URL hash changes to 'footer', like this.
    Example:
        https://www.javascripttutorial.net/javascript-dom/javascript-hashchange/#footer

    - the 'hashchange' event fires when the URL hash changes from one to another.
    - to get the current URL hash, you access the hash property of the 'location' object
    Example:
        console.log(`${location.hash}`);
*/
window.addEventListener('hashchange', () => {
    alert('The URL hash has changed');
    console.log(`${location.hash}`);
});


// 16. event delegation

/* 
    - adds a single event handler to the parent element instead of having to register multiple event handlers to the child elements.
    - in JavaScript, if you have large number of event handlers on a page, these event handlers will directly impact the performance because of the following reasons.
        - each event handler is a function which is also an object that takes up memory. The more objects in the memory, the slower the performance.
        - it takes time to assign all the event handlers, which causes a delay in the interactivity of the page.
    - instead of having multiple event handlers, you can assign a single event handler to handle all the click events
    - event delegation refers to the technique of levering event bubbling to handle events at a higher level in the DOM than the element on which the event originated.
*/
const btnGroup = document.querySelector('#button-group');

btnGroup.addEventListener('click', (e) => {
    let target = e.target;

    switch(target.id) {
        case 'btn-1':
            alert('You pressed button 1!');
            break;
        case 'btn-2':
            alert('You pressed button 2!');
            break;
        case 'btn-3':
            alert('You pressed button 3!');
            break;
        default:
            alert('Unknown button');
            break;
    }
});

// 16.1 event delegation benefits

/* 
    * you can have a single event handler on the 'document' that will handle all the events of a particular type. by doing this, you gain the following benefits
        - less memory usage, better performance
        - less time required to set up event handlers on the page
        - the 'document' object is available immediately. As long as the element is rendered, it can start functioning correctly without delay. You don't need to wait for the 'DOMContentLoaded' or 'load' events.
*/


// 17. dispatchEvent

/* 
    - events are generated by user actions such as mouse clicks and key presses. In addition, events can be generated from code
    - to generate an event programmatically, you follow these steps
        - create a new 'Event' object using 'Event' constructor
        - trigger the event using 'element.dispatchEvent()' method

    Syntax for creating an event:
        let event = new Event(type, [,options]);

    Parameters:
    - the 'Event' constructor accepts two parameters:
        - 'type' -> is a string that specifies the event type such as 'click'
        - 'options' -> is an object with two optional properties
            - 'bubbles' -> is a boolean value that determines if the event bubbles or not. If it is 'true' then the event is bubbled and vice versa.
            - 'cancelable' -> is also a boolean value that specifies whether the event is cancelable when it is 'true'
        - by default, the 'options' object is:
            { bubbles: false, cancelable: false }

    Syntax for dispatching an event:
        element.dispatchEvent(event);

    - use 'event.isTrusted' to examine whether the event is generated from code or user actions.
*/
const dispatchEventBtn = document.querySelector('#dispatch-event');

dispatchEventBtn.addEventListener('click', (e) => {
    console.log('Dispatch button click');
    console.log(`The event is authentic ${e.isTrusted}`);
});

let clickEvent = new Event('click');
dispatchEventBtn.dispatchEvent(clickEvent);


// 18. custom events

/* 
    - to create a custom event, you use the 'CustomEvent()' constructor and 'dispatchEvent()' to trigger the event
    - the custom event allow you to decouple the code that you want to execute after another piece of code completes. For example you can separate the event listeners in a separate script. In addition, you can have multiple event listeners to the same custom event.

    Syntax:
        let event = new CustomEvent(eventType, options);

    Parameters:
        - 'eventType' -> is a string that represents the name of the event
        - 'options' -> is an object has the 'detail' property that contains any custom information about the event.
*/
function changeColor(elem) {
    const bgColor = 'blanchedalmond';
    elem.style.backgroundColor = bgColor;

    // create the event
    let event = new CustomEvent('changeColor', {
        detail: {
            backgroundColor: bgColor
        }
    });

    // dispatch the event
    elem.dispatchEvent(event);
};

// select the div
const customEvent = document.querySelector('#custom-event');

// add styling
function addStyle(elem) {
    elem.style.borderRadius = "25px";
    elem.style.boxShadow = "2px 2px 30px black";
}

// listen to the changeColor event
customEvent.addEventListener('changeColor', (event) => {
    addStyle(event.currentTarget);

    // examine the detail of the changeColor event
    console.log(event.detail);
});

// change the color of the div
changeColor(customEvent);


// 19. MutationObserver

/* 
    - the 'MutationObserver' API allows you to monitor for changes being made to the DOM tree. When the DOM nodes change, you can invoke a callback function to react to the changes.
    - the basic steps for using the 'MutationObserver' API are
        - first, define the callback function that will execute when the DOM changes.
            Example:
                function callback(mutations) {
                    //
                }

        - second, create a 'MutationObserver' object and pass the callback into the 'MutationObserver()' constructor
            Example:
                let observer = new MutationObserver(callback);

        - third, call the 'observe()' method to start observing the DOM changes.
            Example:
                observer.observe(targetNode, observerOptions);

        - finally, stop observing the DOM changes by calling the 'disconnect()' method
            Example:
                observer.disconnect();

    - the 'observer' method has two parameters.
        - 'target' -> is the root of the subtree of nodes to monitor for changes.
        - 'observerOptions' -> parameter contains properties that specify what DOM changes should be reported to the observer's callback.

    - observerOptions samples
        let options = {
            childList: true,
            attributes: true,
            characterData: false,
            subtree: false,
            attributeFilter: ['attr1', 'attr2'],
            attributeOldValue: false,
            characterDataOldValue: false
        }

    - You don't need to use all the options. However, to make the 'MutationObserver' work, at least one of 'childList', 'attributes' or 'characterData' needs to be set to 'true', otherwise the 'observer()' method will throw an error.
*/
const frameworks = document.querySelector('#frameworks');
const controlButtons = document.querySelector('#control-buttons');

const btnStart = document.querySelector('#btn-start');
const btnAdd = document.querySelector('#btn-add');
const btnRemove = document.querySelector('#btn-remove');

const btnStop = document.querySelector('#btn-stop');
btnStop.disabled = true;

function logs(mutations) {
    for (let mutation of mutations) {
        if (mutation.type === 'childList') {
            console.log(mutation);
        }
    }
}

let observer = new MutationObserver(logs);
let ctr = 1;

controlButtons.addEventListener('click', (e) => {
    let target = e.target;
    
    switch(target.id) {
        case 'btn-start':
            observer.observe(frameworks, {
                childList: true
            });
            btnStart.disabled = true;
            btnStop.disabled = false;
            break;
        case 'btn-add':
            let listItem = document.createElement('li');
            listItem.textContent = `Item ${ctr++}`;
            frameworks.appendChild(listItem);
            break;
        case 'btn-remove':
            frameworks.lastElementChild ?
                frameworks.removeChild(frameworks.lastElementChild)
                :
                console.log('No more child node left');
            break;
        case 'btn-stop':
            observer.disconnect();
            btnStart.disabled = false;
            btnStop.disabled = true;
            break;
    }
});

// 19.1 observing for changes to attributes

/* 
    - to observe for changes to attributes, you use the following attributes property.
    let options = {
        attributes: true
    }

    - if you want to observe the changes to one or more specific 'attributes' while ignoring the others, you can use the 'attributeFilter' property
    let options = {
        attributes: true,
        attributeFilter: ['class', 'style']
    }
*/

// 19.2 observing for changes to a subtree

/* 
    - to monitor the target node and its subtree of nodes, you set the 'subtree' property to 'true'
    let options = {
        subtree: true
    }
*/

// 19.3 observing for changes to character data

/* 
    - to monitor the node for changes to its textual contents, you set the 'characterData' to 'true'
    let options = {
        characterData: true
    }
*/

// 19.4 accessing old values

/* 
    - to access the old values of attributes, you set the 'attributeOldValue' property to 'true'
    let options = {
        attributes: true,
        attributeOldValue: true
    }

    - similarly, you can access the old value of character data by setting the 'characterDataOldValue' property to 'true'
    let options = {
        characterData: true,
        subtree: true,
        characterDataOldValue: true
    }
*/