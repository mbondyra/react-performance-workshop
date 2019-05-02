# WARMUP

Files used to finish the task 3: task3/index.js

## STEP 1: New debugging tool

Custom eventCounter logs the renders on the screen so we don’t have to run React Profiler every time. Everytime you want to log an event just place `eventCounter(nameOfEvent)` in the code. Check how it works when toggling the theme button. What components are being rerendered?

## STEP 2: Fixing a new 'select' functionality

  1. There is a new functionality implemented - Click on the any cell - notice it's being selected.

  2. But why are all the rows and cells being re-rendered? How many of them do change props they receive? Debug it with why-did-you-update and eventCounter.

  3. Limit re-renders of rows to maximum 2 and cells to maximum 2. Don't rererender components that don't change.

  4. Hint: there are at least two different approaches for solving this problem. (similar to last problem!)


## WAY AHEAD OF THE GROUP?

1. Once you make one solution working, try to implement the other one (ask me for help if you need hints)