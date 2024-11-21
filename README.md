# Table of contents
+ [Introduction](#js-dom-manipulation)
+ [Topics](#topics)
+ [Upcoming new features](#upcoming-new-features)
+ [Installation](#installation)
+ [Languages and tools](#language-and-tools)

## <a name="#js-dom-manipulation"></a>JavaScript DOM Manipulation reviewer

The goal of this repository is for me to study about JavaScript DOM manipulation even though some might say that it is not worth studying for since we already have frameworks for frontend now such as React, Vue, Svelte, etc. But I really want to understand the most native way so that I can have a much better understanding of events, event listeners and DOM whenever I am using a framework for frontend.

### DOM Manipulation is still important

While frameworks like React and Vue have simplified front-end development, understanding the underlying principles of DOM manipulation is still important for several reasons.

+ DOM manipulation is at the core of web development, and a solid understanding of how it works can help developers diagnose and fix problems in their code more effectively.

+ By learning the basics of DOM manipulation, developers can write more efficient and performant code, even when working with frameworks.

### Repository structure

This repository is organized into several topics, covering everything from basic DOM selection to more advanced event handling, I created this repository in a way that I am documenting every key points and examples for each topics so that I can use it as my reference in the future. 

Each topic is separated by folders and you can find the subtopics on the JavaScript file. Within each topic, you'll find examples of how to manipulate the DOM using vanilla JavaScript, along with comments that explain how each line of code works. Each code example is clearly labeled and organized, making it easy to find what you're looking for and learn at your own pace.

### This is useful for all levels

This repository is designed for anyone looking to learn or refresh their knowledge of DOM manipulation, regardless of their experience level. If you're a beginner just starting out in web development, this repository can help you build a strong foundation in the basics of JavaScript and the DOM. Even experienced developers can benefit from this repository, using it as a quick reference guide for specific topics or as a way to refresh their memory on certain techniques.

### Feedback and contributions

I welcome feedback and suggestions from other developers, and I encourage you to leave a comment or open an issue if you have any ideas or recommendations for improving the repository. If you find an error in one of the code examples, please feel free to submit a pull request with a fix or create an issue so that I can correct it. As an open-source project, this repository is meant to be a collaborative effort, and I hope that others can contribute to it and benefit from it as much as I have.

## Topics

1. ### **Session 1 - Selecting elements**

    ![s1](https://user-images.githubusercontent.com/112933982/220562294-f439a9e6-96f8-4c73-8c92-87e690f5e80f.png)

    On this session, you will learn different ways on how to select an element/s in JavaScript together with their return values and differences with each other. So that you can decide which one to use on a specific scenario.

    **Subtopics**
    + `getElementById`
    + `getElementsByName`
    + `getElementsByTagName`
    + `getElementsByClassName`
    + `querySelector`
    + `querySelectorAll`

2. ### **Session 2 - Traversing elements**

    ![s2](https://user-images.githubusercontent.com/112933982/220563632-d53f1b1f-b766-48d7-b592-9e383c20d254.png)

    On this session, you will learn how to get the firstChild, lastChild, firstElementChild, lastElementChild, sibling elements and child nodes of a parent node.

    **Subtopic**
    + `parentNode`
    + `firstChild`
    + `firstElementChild`
    + `lastChild`
    + `lastElementChild`
    + `childNodes`
    + `children`
    + `nextElementSibling`
    + `previousElementSibling`

3. ### **Session 3 - Manipulating elements**

    ![s3](https://user-images.githubusercontent.com/112933982/220565076-140dd56e-e7be-4a94-bd2a-1e4970fc0f23.png)
    
    On this session, you will learn how to create a new element, append it to a parent node, set it's innerHTML, innerText or textContent, creating a documentFragment, append an element after a specific element, insert multiple nodes after the lastChild of the parentNode, insert multiple nodes before the firstChild of the parentNode, insert nodes on specific positions using insertAdjacentHTML, replace a child node, clone a node, remove a child node, insert a single node before the firstChild of the parentNode and use insertAfter helper function to insert a single node after the lastChild of the parent node.

    **Subtopics**
    + `createElement`
    + `appendChild`
    + `textContent`
    + `innerHTML`
    + `innerText`
    + `documentFragment`
    + `after`
    + `append`
    + `prepend`
    + `insertAdjacentHTML`
    + `replaceChild`
    + `cloneNode`
    + `removeChild`
    + `insertBefore`
    + `insertAfter` helper function

4. ### **Session 4 - Working with attributes**

    ![s4](https://user-images.githubusercontent.com/112933982/220567575-5bba4d58-39b0-4c9a-baac-700a02af50ec.png)

    On this session, you will learn how to add or modify an element's attribute, get the value of a specific attribute, remove a certain attribute and check if the element contains an attribute

    **Subtopics**
    + `element.attributes`
    + Attribute-property synchronization
    + DOM properties are typed
    + The data-* attributes
    + `setAttribute`
    + `getAttribute`
    + `removeAttribute`
    + `hasAttribute`

5. ### **Session 5 - Manipulating elements styles**
    
    ![s5](https://user-images.githubusercontent.com/112933982/220568773-2c4ccbf0-b734-480b-ac46-045da1226ae6.png)

    On this session, you will learn how to manipulate the CSS style of an element using different methods and get the width and height of an element.

    **Subtopics**
    + `element.style`
    + `cssText`
    + Using `setAttribute` to set a style attribute
    + Using `cssText` to append a new styling to the existing one
    + `getComputedStyle`
    + `className`
    + `classList`
    + `clientWidth` and `clientHeight`
    + `offsetWidth` and `offsetHeight`

6. ### **Session 6 - Working with events**

    ![s6](https://user-images.githubusercontent.com/112933982/220570193-1c12ad10-8f06-4f5a-9b92-f9c9c4286a8d.png)

    On this session, you will learn how to add and remove event listeners, different load events, mouse events, keyboard events, scroll events, event throttling, scrollIntoView, focus events, hashChange event, event delegation, dispatchEvent, custom event and MutationObserver

    **Subtopics**
    + event
    + event flow
    + event bubbling
    + event capturing
    + event object
    + `preventDefault`
    + `stopPropagation`
    + HTML event handler
    + DOM level 0 event handler
    + DOM level 2 event handler
    + `addEventListener`
    + `removeEventListener`
    + `DOMContentLoaded`
    + `load`
    + `beforeunload`
    + `unload`
    + `mousedown`
    + `mouseup`
    + `click`
    + `dblclick`
    + `mousemove`
    + `mouseover`
    + `mouseout`
    + `mouseenter`
    + `mouseleave`
    + detecting mouse buttons
    + modifier keys
    + `keydown`
    + `keypress`
    + `keyup`
    + `scroll`
    + `scrollTop`
    + `scrollLeft`
    + event throttling
    + passive events
    + `scrollIntoView`
    + `focus`
    + `blur`
    + `hashchange`
    + event delegation
    + `dispatchEvent`
    + custom events
    + `MutationObserver`

7. ### **Session 7 - Scripting web forms**

    ![s7](https://user-images.githubusercontent.com/112933982/220573652-c6c1b071-2a58-4ae2-9a50-9e09966b946c.png)

    On this session, you will learn how to work with form events, radio events, checkbox events, select box events, change event and input event.

    **Subtopics**
    + Form basics
    + Form referencing
    + Submitting a form
    + Accessing form fields
    + `checked`
    + `selectedIndex`
    + `select.value`
    + `select.options[ctr]`
    + `select.add`
    + `select.remove`
    + `change`
    + `input`

## <a name="#upcoming-new-features"></a>Upcoming New Features

The only one thing that is missing for this project is a home page wherein you can navigate through each topics. Since as of now each topic is separated by a folder.

+ Add a home page

## Installation

If you want to check the code and modify it on your local machine you may clone my repo by simply running this command.

**With SSH key**

### `git clone https://github.com/edmarjames/js-dom-reviewer.git`

**For Https**

### `git clone git@github.com:edmarjames/js-dom-reviewer.git`

## <a name="#language-and-tools"></a>Languages and tools used
<p align="left"> 
    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="40" height="40"/>
    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="40" height="40"/>
    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/>
</p>


