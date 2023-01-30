// 1. event

/* 
    - an event is an action that occurs in the web browser, which the web browser feedbacks to you so that you can respond to it.
    - each event may have an event handler which is a block of code that will execute when the event occurs.
    - event handler is also known as an event listener. It listens to the event and executes when the event occurs.
*/
const btnAlert = document.querySelector('.btn-layout');

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
const link = document.querySelector('a');

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