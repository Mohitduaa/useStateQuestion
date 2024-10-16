What is State?
---------------
In React, state refers to a JavaScript object that holds dynamic data that can change over time. When this data changes, React re-renders the component to reflect the new state.

For example, you may have a counter, a form input value, or a toggle switch — these are things that can change based on user interaction or other logic. React needs to track these changes, and that’s where state comes in.

What is useState?
------------------
useState is a React hook that lets you add state to a functional component. Before useState, state was only available in class components, but with React hooks, functional components can now manage their own state.

Syntax of useState
- - - - - - - - - -
const [stateVariable, setStateFunction] = useState(initialValue);

stateVariable: The current state value.
setStateFunction: A function that lets you update the state.
initialValue: The initial value of the state when the component first renders.
--------------------------------------------------------------------------------------
Example 1: Counter
===================
Let’s start with a simple example — a counter that increments by 1 every time you click a button.

Code: ->
=== * ===
import React, { useState } from 'react';

function Counter() {
  // Declare a state variable called 'count', initial value is 0
  const [count, setCount] = useState(0);

  return (
    <div className="counter">
      <p>Current Count: {count}</p>
      {/* When the button is clicked, the state 'count' is updated */}
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
}

export default Counter;

Explanation:

->We declare a state variable count and a state updater function setCount.
->The initial value of count is set to 0 by useState(0).
->The button's onClick event updates the state by calling setCount(count + 1), which increments the current value of count by 1.
->The component re-renders every time the state changes, displaying the updated value of count.


Theory Behind useState
========================
State Preservation Across Renders: 
== * == * == * == * == * == * ====
Every time the component renders, the value returned by useState remains persistent. React keeps track of this value and gives it back during the next render.

Reactivity: When we call the state updater function (setCount), React internally triggers a re-render of the component. During this re-render, it provides the updated state value.

Initial State: The initial state you pass to useState is only used the first time the component renders. On subsequent renders, the useState hook will return the current state value.

Example 2: Input Field with useState
========================================
Let’s create a text input field where you can type, and the value of the input is stored in the component's state.

Code:

import React, { useState } from 'react';

function TextInput() {
  // Declare a state variable called 'text', initial value is an empty string
  const [text, setText] = useState('');

  return (
    <div className="text-input">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)} // Update state on input change
      />
      <p>Entered Text: {text}</p>
    </div>
  );
}

export default TextInput;

Explanation:

-> We declare a state variable text and a state updater function setText.
-> The initial value of text is an empty string ''.
-> The input field uses text as its value, and whenever the user types, the onChange event calls setText, passing the new input value.
-> The entered text is displayed below the input field in real time.
Functional Updates
Sometimes, you might need to update state based on the previous state value. In such cases, React provides a way to safely update the state using a functional update.

Example 3: Counter with Previous State

import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Current Count: {count}</p>
      <button onClick={() => setCount(prevCount => prevCount + 1)}>
        Increment
      </button>
    </div>
  );
}

export default Counter;

Explanation:
============
The setCount function now takes a function as an argument. This function receives the previous state (prevCount) and returns the new state.
This ensures that React always updates the state based on the latest value, which is crucial when you have multiple updates in quick succession.
Multiple State Variables
You can have multiple pieces of state in one component by calling useState multiple times.

Example 4: Managing Multiple States
====================================
import React, { useState } from 'react';

function UserProfile() {
  const [name, setName] = useState('');
  const [age, setAge] = useState(0);

  return (
    <div className="user-profile">
      <input
        type="text"
        placeholder="Enter name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="number"
        placeholder="Enter age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />
      <p>
        Name: {name}, Age: {age}
      </p>
    </div>
  );
}

export default UserProfile;

Explanation:

We are using two pieces of state here: one for the user’s name (name) and one for their age (age).
The inputs are controlled by these state values, and they update in real time as the user types.
Rules of useState
=====================
Only Call Hooks at the Top Level: 
===================================
You cannot call useState inside loops, conditions, or nested functions. Always call hooks at the top level of your component.
Only Call Hooks from React Functions: 
======================================
You can only use hooks like useState inside functional components or custom hooks.
Conclusion
===========
React’s useState hook provides a powerful yet simple way to manage component state. It's important to understand how it works so that you can make dynamic, interactive components.


