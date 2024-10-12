
## Event Handling in JavaScript

This repository explores various event handling techniques in JavaScript.

### What is Event Handling?

Event handling allows web pages to respond to user interactions and other events that occur on the page. This creates a dynamic and interactive user experience.

### Common Events

* **Click:** Occurs when a user clicks on an element.
* **Mouseover:** Occurs when the mouse pointer moves over an element.
* **Mouseout:** Occurs when the mouse pointer moves out of an element.
* **Keydown:** Occurs when a key is pressed down.
* **Keyup:** Occurs when a key is released.
* **Submit:** Occurs when a form is submitted.
* **Change:** Occurs when the value of an element changes (e.g., a dropdown selection).

### Adding Event Listeners

To respond to an event, you use the `addEventListener()` method:

```javascript
element.addEventListener(eventType, eventHandlerFunction);
```

* `element`: The HTML element to listen for events on.
* `eventType`: The specific event you want to listen for (e.g., "click", "mouseover").
* `eventHandlerFunction`: The function that will be executed when the event occurs.

This function can receive an `event` object as an argument, providing details about the event.

### Examples

This repository contains examples demonstrating how to handle different events using `addEventListener()`. You'll find examples for:

* Changing an element's style on hover.
* Logging a message to the console when a button is clicked.
* Validating form input on change.
* Handling keyboard events.

### Learning More

This repository provides a basic introduction to event handling. 

To explore further:

* The Mozilla Developer Network (MDN): [https://developer.mozilla.org/en-US/docs/Web/Events](https://developer.mozilla.org/en-US/docs/Web/Events)
* W3Schools: [https://www.w3schools.com/js/js_htmldom_eventlistener.asp](https://www.w3schools.com/js/js_htmldom_eventlistener.asp)

Feel free to explore the files in this repository to see practical examples of event handling in JavaScript!
