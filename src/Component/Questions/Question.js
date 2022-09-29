import React from 'react';
import './Question.css'

const Question = () => {
    return (
        <div className='question'>
            <h4>How does react Work?</h4>
            <p>ReactJS is one of the most popular JavaScript libraries for mobile and web application development. Created by Facebook, React contains a collection of reusable JavaScript code snippets used for user interface (UI) building called components.

Its important to note that ReactJS is not a JavaScript framework. Thats because its only responsible for rendering the components of an applications view layer. React is an alternative to frameworks like Angular and Vue, which all allow to create complex functions.

This article will explore React’s features, explain how it works, and go over its benefits for front-end developers. We’ll also cover the differences between ReactJS and React Native regarding their roles in the web and mobile app development industry.</p>

            <h4>What is the difference between props and state</h4>
            <p>Props are used to pass data from one component to another. The state is a local data storage that is local to the component only and cannot be passed to other components. The this.setState property is used to update the state values in the component.</p>

            <h4>What is the use of useEffect in React?</h4>
            <p>Running once on mount: fetch API data.
                Running on state change: validating input field.
                Running on state change: live filtering.
                Running on state change: trigger animation on new array value.
                Running on props change: update paragraph list on fetched API data update.</p>

        </div>
    );
};

export default Question;