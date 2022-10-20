## Array Functions

- forEach
  - good for looping through items but not great at any particular use case (except printing)
  - doesn't return anything
  - does something for each element/item in the array

- find
  - good for finding one thing
  - returns one item
  - compares each item with a test function
  - first item where the test is true...it returns

- filter
  - good for finding many things
  - returns a new array of items/things
  - compares each item with a test function
  - all items where the test is true...it returns in one array
  - returns less items than were in the original array

- map
  - good for changing/transforming many things
  - returns same number of items than were in the original array
  - changes/transforms each item with a transform function
  - returns a new array of transformed items/things

- reduce
  - good for grouping/summing items in an array
  - returns one aggregate value (total)
  - aggregates items in the array using a function
    - function takes two parameters, runningTotal and next item
