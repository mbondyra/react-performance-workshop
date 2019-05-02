# BUNDLE OPTIMISATIONS

Files used to finish the task 6: task6/index.js

## STEP 1: ANALYZE YOUR BUNDLE

1. Run in the terminal:
  `npm run build -- --stats`
  This generates the file bundle-stats.json in the public directory.

2. Use this file with webpack-bundle-analyzer:
  `npx webpack-bundle-analyzer ./build/bundle-stats.json`

3. What are the biggest files you see here? There are two chunks - can you guess why some files belong to one and others to second?

4. There are two big packages that don’t have to be used - styled-components and lodash. Replace them and run the analysis again.

## STEP 2: SPLIT THE CODE WITH REACT.LAZY

1. When you click on the name of the country, the map of the country is being loaded.
  What if user never discovers this functionality?
  Why to even load this script? What about code-splitting?

2. To load the component dynamically (when it becomes visible) you need to use React.lazy.

3. Display the fancy Placeholder of your own design when waiting to load the module (use React.Suspense)

4. Check the webpack-bundle-analyzer again. What changed?

## WAY AHEAD OF THE GROUP?

1. Use webpack-bundle-analyzer in your daily project. How does it look?