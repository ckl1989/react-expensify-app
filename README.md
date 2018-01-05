# Expensify App from React Web Developer Course [Tutorial](https://www.udemy.com/react-2nd-edition/v4)
React App that allows users to see and add expenses;

Concepts demonstrated:
* React-Router-DOM for client side routing
* Webpack historyApiFallback devServer config to always serve up index.html and enable client side routing
* Route "exact" property?
* React-Router-Dom Switch? 
* NavLink for active class styling
* React-Redux to maintain complex state
* Redux store to manage state
* Redux actions to affect store state
* Redux store subscribe = change listener?
* ES6 object destructuring to keep code clean. Includes default values and aliasing. 
* Redux reducer to define how actions affect state
* Redux combineReducers to allow for separate reducers to promote cleaner code
* Babel transform object rest spread - spread operator for objects
* React-Redux connect and Provider apis to connect components to redux and create higher order components
* Controlled Inputs that give us greater control of input values and connect them directly to the store
* Regex to value expense amount is correct format
* React-moment for better date formatting - time utility library. Also using for date manipulation API for easier testing
* React Dates single date picker for calendar date selection
* Jest for automated tests
* Enzyme for rendering components in tests (shallow for shallow rendering)
* Snapshot testing for testing components
* Mocking moment library to ensure moment's default time stays consistent so that snapshot testing can pass
* Enzyme wrapper.state to get state of component
* Test spies to mock function
* Enzyme access props of a component's children
* MapDispatchtoProps abstracts dispatcher functions away from original component for cleaner code and easier testing
* Jest beforeEach lifecycle method to set up each test before run with common logic
* Enzyme setProps to set props on component for testing components with different props
