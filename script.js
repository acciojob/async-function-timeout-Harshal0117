//your JS code here. If required.
Problem Statement: Async Function with Timeout
Objective
Your task is to create an asynchronous function that simulates a delay before displaying a message on the webpage. This should be done using the async/await syntax in JavaScript.

Requirements
You are provided with a simple HTML form. Your task is to implement JavaScript functionality to:

Display a message on the webpage after a specified delay.
The message and the delay are input by the user.
HTML Form Elements
The form contains the following elements:

input with type text:

id: text
This is where the user will enter the text that will be displayed after the delay.
input with type number:

id: delay
This is where the user will specify the delay time (in milliseconds) before the message is displayed.
button:

id: btn
The user will click this button to submit the form and trigger the delay.
div with id output:

This is where the message will be displayed after the specified delay.
Instructions
The provided HTML file contains the necessary form elements. You are not required to modify the HTML.
In the JavaScript file:
Retrieve the values of the text and delay input fields.
Use async/await to introduce the delay before displaying the message in the output div.
After the delay, display the text input value inside the output div.
Task
You need to implement the logic for the following:

When the user enters the desired message and delay and clicks the submit button, the message should be displayed in the output div after the specified delay.
Use the setTimeout functionality with the async/await approach to achieve the delay before the message is shown.
Examples
Example 1: Empty Form

Upon loading the page, the form should be empty with:
Empty fields for text and delay.
The output div should be empty as well.
Example 2: Checking Values - 1

User Input:
Text: "Test - 1"
Delay: 1000 milliseconds (1 second)
Expected Behavior:
After clicking the submit button, the output div should display "Test - 1" after a delay of 1 second.
Example 3: Checking Values - 2

User Input:
Text: "Test - 2"
Delay: 2000 milliseconds (2 seconds)
Expected Behavior:
After clicking the submit button, the output div should display "Test - 2" after a delay of 2 seconds.