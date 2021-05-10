// 1. You are to get all elements in your html by id using the selector method in JavaScript.
console.log(document.querySelectorAll('*[id]'));

// 2. You are to change the header text which says "Let's modify the DOM" to "New DOM Layout" and also change the background color by adding this classList "bg-success"
const heading = document.getElementById('main-heading');
heading.textContent = 'New DOM Layout';
const header = document.querySelector('header');
header.classList.remove('bg-dark');
header.classList.add('bg-success');

/*
3. You are to access each paragraph tag from your html and add the following text content to it:
For para1 : The Document Object Model (DOM) is a cross-platform and language-independent interface that treats an XML or HTML document as a tree structure.
For para2: The Document Object Model (DOM) is a programming interface for HTML and XML documents. It represents the page so that programs can change the document structure, style, and content. The DOM represents the document as nodes and objects. That way, programming languages can connect to the page.
*/
const para1 = document.getElementById('para1');
para1.textContent = 'The Document Object Model (DOM) is a cross-platform and language-independent interface that treats an XML or HTML document as a tree structure.';
const para2 = document.getElementById('para2');
para2.textContent = 'The Document Object Model (DOM) is a programming interface for HTML and XML documents. It represents the page so that programs can change the document structure, style, and content. The DOM represents the document as nodes and objects. That way, programming languages can connect to the page.';

// 4. You are to add a click event function to the button which will create a new paragraph in the box layout when on clicks on it.
const button = document.getElementById('btn');
button.addEventListener('click', function() {
    para4.textContent = 'The Document Object Model is a cross-platform and language-independent interface that treats an XML or HTML document as a tree structure wherein each node is an object representing a part of the document.'
})

// 5. You are to change each boxes to the proper colors mentioned in them.
const redCard = document.getElementById('red');
redCard.classList.remove('bg-white');
redCard.classList.add('bg-danger');

const blueCard = document.getElementById('blue');
blueCard.classList.remove('bg-white');
blueCard.classList.add('bg-primary');

const yellowCard = document.getElementById('yellow');
yellowCard.classList.remove('bg-white');
yellowCard.classList.add('bg-warning');

const greenCard = document.getElementById('green');
greenCard.classList.remove('bg-white');
greenCard.classList.add('bg-success');

const blackCard = document.getElementById('black');
blackCard.classList.remove('bg-white');
blackCard.classList.add('bg-dark');