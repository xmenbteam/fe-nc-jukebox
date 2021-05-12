# React Intro

## Getting started

Welcome to React and your very own pizza Parlour. To get up and running with this repo:

- run `npm install` to install `react`, `react-dom`, `react-scripts` and their dependencies. (They are quite large and this may take a few minutes)
- run `npm start` to serve the app on `localhost:3000`

The pizza menu has been chosen for you with some basic css to get you started. Work through the tasks below in order to add additional functionality to your Pizza App.

## Rendering and State

1. Your pizza parlour is going to accept social media likes from your users. Add some state to your `App` that will keep track of how many likes you've received. This value should start at 0 (we all gotta start somewhere!). Render this value from your state underneath your header.

2. Time to feel good about ourselves. Add a button that when clicked will increase the number of likes our page has received. The user should be able to click this button as many times as they like 👍.

3. Next we're going to add the ability for our users to order a pizza. First thing we'll need is a way of keeping track of how many pizzas they've ordered. Add some state to your `App` to keep track of the users `basket`. The basket should be an object with the following keys:

```js
{
  Margherita: 0,
  Veggie: 0,
  Pepperoni: 0
}
```

Underneath the menu render a section that shows the user how many of each pizza they've added to their order. (These will all be zero for the time being).

4. Time to order some pizza! Add a button underneath each pizzas name. When clicked this button should add 1 to the relevant pizza in the `basket`. Think carefully about whether or not you will need the current state and how to get access to the right pizza.

5. Your users would like to know how many pizzas they've added to their order altogether. Add a total count of all the pizzas in the basket at the bottom.

6. Add a cancel button next to each type of pizza in the basket. When clicked this button should remove all the pizzas of that type and reset them back to zero.

## Components and Props

Time to split our App up into separate [components](https://reactjs.org/docs/components-and-props.html). Typically each component would be written in a separate file but for the sake of simplicity you can declare them all in `App.js` to get started.

7. Create a new component called `Header`. Extract the existing `h1` tag into this component and render your new component. Your app should look the same as it did before.

8. Create a new component called `Menu`. This component should render the `ul` of pizzas. Think about what information the Menu component will need and which `props` to pass to it in order to receive that information.

9. Create a new component called `Basket`. This component should render the basket section you created earlier. The state of basket should remain in your `App` and information should be passed to your components via `props`.

10. Create a new component called `Likes`. This component should deal with all the likes functionality. It should render the current likes as well as the button to increase our likes. As this component will deal with all of the likes functionality, the state of likes should also be extracted into this component.

## Advanced

11. Create a new component called `Confirmation`. Render this new component underneath your `Basket`.

- This component should render a button that allows your users to confirm their order.
- Once this button is clicked the component should render a message informing the user of how many pizzas have been ordered.
- Once the order is confirmed the button should be removed from the page. You will need to do some research into [conditional rendering](https://reactjs.org/docs/conditional-rendering.html) for this part. Think carefully about how your component will keep track of whether or not the button has been clicked yet.

**Additional**: Once an order is confirmed the user should no longer be able to change their order. Disable the order buttons so that once the order is confirmed they can no longer change their order.
