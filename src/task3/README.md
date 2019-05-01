# WARMUP

Files used to finish the task 3: task3/index.js

## STEP 1: Test removing a row functionality

  1. Try to remove first row, try to remove last row, try to remove some middle rows. Any thoughts?
  2. Think about solution to fix the janky problem we have now. What might be the reason behind that?

## STEP 2: Fix it

  1. There are two problems here:
    1.1. When removing the element, React then re-renders the app based on the keys. If the previous value doesn’t match the key, it re-renders the element
    1.2. We’re passing rowIdx and columnIdx props to Cell component. One of them gets changed when removing a row above. If only we could identify our cell position in the array differently… ?

  2. Hint: ShouldComponentUpdate won't help here, we need to do some changes in props we're passing.

  3. Once done, switch to the next exercise.

## WAY AHEAD OF THE GROUP?

1. Implement remove Column functionality. Oh, that's a tough one!