# FIRST PERFORMANCE IMPORVEMENTS

Files used to finish the task 1: task1/index.js, App.js

## STEP 1: Debug & fix

  1. Make sure you have React Chrome Extension installed.
  2. Go to React Profiler and record the action of clicking on the button.
  3. It is noticeably slow (janked). Can you think of a reason why? What shouldn't your App do to work faster?
  4. There are at least two things you have to fix to make your app more performant.
  5. Expected result is to not render Table at all.
  6. Once you finish, switch to the task2.

## WAY AHEAD OF THE GROUP?

  1. If you used PureComponent in your solution, change it to React.memo for some practice. If you used React.memo, now rewrite your components to PureComponents. When do you think you should use which?
  2. Are you familiar with styled-components? Can you think of a reason why in cases like switching global theme with single index.css file may be more performant than styled-components? Or maybe it may not?