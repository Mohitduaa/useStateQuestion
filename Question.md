list of 10 practice questions to help solidify your understanding of React’s useState hook:
=====================================================================================
1. Counter with Step Control
Create a counter where the user can specify a "step" value. When the user clicks a button, the counter should increment or decrement by that step value.
Example: If the step is set to 5, clicking "Increment" increases the counter by 5, and "Decrement" decreases it by 5.
2. Toggle Visibility
Create a button that toggles the visibility of a paragraph of text. When the button is clicked, the text should either appear or disappear.
Hint: Use a boolean state to track visibility.
3. Color Changer
Create a dropdown menu with several color options (e.g., red, blue, green). When the user selects a color, the background color of a div should change to the selected color.
Hint: Use useState to store the selected color.
4. Controlled Input Form
Build a simple form with two text inputs for "First Name" and "Last Name". Display the full name below the form as the user types.
Bonus: Add validation so that both fields must be filled in before showing the full name.
5. Like Button
Create a button that represents a "Like" action. When clicked, it should toggle between "Liked" and "Unliked" states, and the count of likes should increase or decrease accordingly.
Example: Clicking "Like" increases the count, clicking "Unlike" decreases the count.
6. Todo List
Build a basic todo list where the user can type a task into an input and add it to a list. Each task should have a "delete" button to remove it from the list.
Hint: Use useState to manage an array of tasks.
7. Character Counter
Create a text area where users can type in a message. Below the text area, display the number of characters they have typed.
Bonus: Limit the input to a maximum number of characters (e.g., 200) and show the remaining characters.
8. Increment with Delay
Build a counter that increments its value after a delay of 2 seconds when a button is clicked.
Hint: Use setTimeout and useState.
9. Random Number Generator
Create a button that, when clicked, generates a random number between 1 and 100 and displays it. Each time the button is clicked, the number should update.
Hint: Use Math.random() and useState to store the generated number.
10. Quiz App
Create a simple quiz app where a user can answer multiple-choice questions. Each question should be displayed one by one, and the user’s answer should be stored in state. At the end, display the number of correct answers.
Hint: Use an array of questions and track the current question index in state.