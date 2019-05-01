# WARMUP

Files used to finish the task 2: task2/index.js

## STEP 1: New debugging tools

  1. There are two new tools that help to make our app more performant
    1.1. whyDidYouUpdate - it's a small npm package that monkey patches React and notifies you in the console when potentially unnecessary re-renders occur. To make it work, add these lines to App.js file:

    ```javascript
    import {whyDidYouUpdate} from 'why-did-you-update'
    whyDidYouUpdate(React)
    ```

    1.2. Custom eventCounter logs the renders on the screen so we don’t have to run React Profiler every time. Everytime you want to log an event just place `eventCounter(nameOfEvent)` in the code. Check how it works when toggling the theme button. What components are being rerendered? Which ones would be rerendered without corrections from task1?

## STEP 2: Fixing a new 'select' functionality

  1. There is a new functionality implemented - get to know the changes in the code and click on the any cell - notice it's being selected.

  2. But why are all the rows and cells being re-rendered? How many of them do actually change props they receive? Debug it with why-did-you-update and eventCounter.

  3. Limit re-renders of rows to maximum 2 and cells to maximum 2. Don't rererender components that don't change.

  4. Hint: there are at least two different approaches for solving this problem.

## STEP 3: Need help?

  1. Stuck? Remember that:

    * You shouldn’t create any objects that will become props in render method if you don’t want children to be re-rendered
    * This.props.children is cool, but https://github.com/facebook/react/issues/8669
    * On every click you’re passing activeCell=[row, column] to every single cell = every cell gets rerendered because the props change. What if instead you’d pass information specific to the cell itself (hint: selected ={true | false})
    * The rules from the first exercise still apply!
    * Function and Array is an object in JS (inherits from object)

## WAY AHEAD OF THE GROUP?

1. Go to whyDidYouUpdate documentation and check out additional params the app allows to use.
2. Implement your own whyDidYouUpdate Component. Hint: use lifecycle method: `getSnapshotBeforeUpdate(nextProps)` (it's an equivalent of `componentWillUpdate` that was deprecated in newest versions of React).