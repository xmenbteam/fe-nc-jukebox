# React Intro

## Getting started

Welcome to React and your very own pizza Parlour. To get up and running with this repo:

- run `npm install` to install `react`, `react-dom`, `react-scripts` and their dependencies. (They are quite large and this may take a few minutes)
- run `npm start` to serve the app on `localhost:3000`

This repo has some hard coded data and css classes setup for you to work with in order to setup your pizza parlour.

For the purposes of this sprint all the data you will be working with will be static and won't change. This is for you to practice making React components, passing props and rendering a UI based on JS variables.

In the future these variables will change over time with the use of React state but for today they will remain constant as the principles for rendering that data remain the same.

## Tasks

1. Time to open up your shop. Replace the `shopOwner` variables value with your own name. Update the `h1` tag to render your name in front of the words Pizza Parlour so everybody knows who's the best chef in town. **nb** makes sure you use the value from the `shopOwner` and don't just hard code your name into the `h1` for the purpose of this exercise.

2. Now you've put your name to it, it's time to show the world what pizza you have for sale. Underneath your heading render and `unordered list` of `list items` for your pizzas. Each list item should contain a `h2` containing the pizzas name and an image of the pizza. Again make sure that you are generating these `list items` dynamically based on what's in the `pizzas` variable.

3. Those are some large pizzas! Add some CSS classes to your pizzas to present them in a nicer way. There are some pre-built classes in `index.css` of `menu-list`, `menu-item` and `menu-img` that you can use. Open your browsers dev tools and inspect the console. Make sure that you have no warnings from React. Resolve any warnings that React is giving you.

4. Before you go any further it's time to extract some of this rendering logic to separate components. Create a new functional Component called `Header`. Extract the `h1` that you are currently rendering to this new component but do not move the `shopOwner` variable. Pass this information to your new component via `props` instead. Everything should render on the page as it did before.

5. Create a new component called `Menu`. Extract the rendering your list of pizzas to this new component. As before everything should render just as it was and your `App` is rendering two child components.

6. Time for a daily special. Render the name of `todaysSpecial` inside of your `Menu` component above the list of available pizzas.

7. In order to make todays special stand out from the list of pizzas add some styling to it. There is a pre-built class of `menu-special`. Add this to the relevant pizza so it looks different from the others.

8. The next step is to show the user how many of each pizza they have ordered. Create a new component called `Basket` and render it underneath your `Menu`. This component should show the user how many of each pizza they've ordered according to the `basket` variable.

9. Add a total to your `Basket` telling the user how many pizzas they've ordered in total.

10. This file is getting long. Time to extract each component to it's own file. Create a `components` directory inside of `src` and create a file for each of your components. A good naming convention is to name the files after the components themselves e.g. `Header.js`. Import each of your components into `App.js` and render them as you were before. Make sure that your app still renders correctly once you are done.

## Advanced

11. Your pizza parlour is going to accept social media likes from your users. Unlike all of the data we have used before this is going to be dynamic and change over time. Create a new component called `Likes` and render it above your `Menu`. This component should render the current number of likes (initially 0, we all gotta start somewhere!) and a button the users can click.

In order for the number of likes to be dynamic our component is going to need some `state`. Take a look at the [React Docs](https://reactjs.org/docs/hooks-intro.html) on the `useState hook` and research how to keep the number of likes you've received in state.

Time to feel good about ourselves. When the user clicks on the like button increase the number of likes our page has received. The user should be able to click this button as many times as they like 👍.
