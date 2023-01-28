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