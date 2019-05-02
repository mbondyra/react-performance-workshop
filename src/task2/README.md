# WARMUP

Files used to finish the task 2: task2/index.js

## STEP 1: New debugging tool why-did-you-update

  1. whyDidYouUpdate - it's a small npm package that monkey patches React and notifies you in the console when potentially unnecessary re-renders occur. To make it work, add these lines to App.js file:

  ```javascript
    import {whyDidYouUpdate} from 'why-did-you-update'
    whyDidYouUpdate(React)
  ```

  2. In task2 new functionality appeared - click on the header and you'll see that extra styles that increase readability appear. Unfortunately, the app works very slow. Using why-did-you-update and checking what it logs figure out which components' rerender could be avoided.

## STEP 2: Fix the performance of the app

  1. Make corrections in the code so the only re-rendered component is Table.
  2. IMPORTANT NOTE: Start from HeaderCell and Cell, leave Row as the last one because it's the hardest one.

## STEP 3: Need help?

  1. Stuck? Remember that:

    * The rules from the first exercise still apply!
    * Read what's whyDidYouUpdate says
    * Don't create objects in render method
    * Function and Array is an object in JS (inherits from object)
    * This.props.children is cool, but https://github.com/facebook/react/issues/8669 - you can either change the design of the app OR use shouldComponentUpdate to limit renders

## WAY AHEAD OF THE GROUP?

1. Go to whyDidYouUpdate documentation and check out additional params the app allows to use.
2. Implement your own whyDidYouUpdate Component. Hint: use lifecycle method: `getSnapshotBeforeUpdate(nextProps)` (it's an equivalent of `componentWillUpdate` that was deprecated in newest versions of React).