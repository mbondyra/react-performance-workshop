# WARMUP

Files used to finish the task 0: task0/index.js

## STEP 1: Get familiar with the structure of the project

  1. All the styles are in the file index.css - there's no need to modify them but feel free to.
  2. Every README file shows the information about what file you should modify to finish it, it will be 1 or 2 files
  3. After finishing the task go to file App.js and import a file with a next task, eg.
     import Task from './task0'   => import Task from './task1'

## STEP 2: Make it work

  1. Component App consists of the button that is supposed to change the theme of the page by changing the classname of the `<main>` tag from `night` to `day` depending on button's state. Make it work.
  2. In file task0/index.js check the props you're getting. Map names of the columns as headers and display countries data as rows.
  3. Check if everything works as expected and switch to the task1.

## WAY AHEAD OF THE GROUP?

  1. Notice that for now you don't display the proper image in a column flag, but the path to it. Depending on the property of the column `structure`:
    1.1. display text as default
    1.2. display the image if the `column.structure === 'image'`
    1.3. display the words separated by comma if `column.structure === 'array'`