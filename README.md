<!-- #What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll? -->
GetElementById-It is used to find a specific element by its id.
GetElementByClassName-It is used to find same name multiple element by class-name.
querySelector-It is also used to find a specific element by selector like(class,id,tag-name).
querySelectorAll-QuerySelector is same as getElementByClassName.It is also used to find multiple element.

<!-- #How do you create and insert a new element into the DOM? -->

Step-1:First we have to create a element by using document.createElment("element-name").Ex- const div = document.createElement("div");
Step-2:Add inner text by element.innerText.Ex- div.innerText = "Helle";
Step-Then insert the element by parent.appenChild(element).Ex-body.appendChild(div);

<!-- #What is Event Bubbling? And how does it work? -->

Event bubbling is a process where an event is triggered on a target element and then it moves up to its parent elements until it reaches the document.

Step 1:An event happens on an element by clicked.
Step 2:Then its moves towards its parent;
Step 3:Then parent"s parent.
Step 4:Until its reaches the document.

<!-- What is Event Delegation in JavaScript? Why is it useful? -->

Event delegation in JavaScript is a method so that we do not have to apply multiple event listeners.It is usefull because we do not have to add multiple eventlisteners.

<!-- What is the difference between preventDefault() and stopPropagation() methods? -->

stopPropagation()-prevents the default behavior of the browser and does not stop event execution
stopPropagation()-It stops event bubbling sothat the event cannot go to the parent elements. 