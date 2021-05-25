# Insertion Sort

## [Link to Blog Post](BLOG.md)

## Other Links
- [Link to PR](https://github.com/LydiaMT/data-structures-and-algorithms/pull/36)
- [Link to code](https://github.com/LydiaMT/data-structures-and-algorithms/blob/main/javascript/code-challenges/insertionSort/insertionSort.js)
- [Link to tests](https://github.com/LydiaMT/data-structures-and-algorithms/blob/main/javascript/code-challenges/insertionSort/__test__/insertionSort.test.js)

## Challenge

Review the pseudocode below, then trace the algorithm by stepping through the process with the provided sample array. Document your explanation by creating a blog article that shows the step-by-step output after each iteration through some sort of visual.

Once you are done with your article, code a working, tested implementation of Insertion Sort based on the pseudocode provided.

In your blog article, visually show the output of processing this input array:

`[8,4,23,42,16,15]`

### Pseudocode
```js
  InsertionSort(int[] arr)
  
    FOR i = 1 to arr.length
    
      int j <-- i - 1
      int temp <-- arr[i]
      
      WHILE j >= 0 AND temp < arr[j]
        arr[j + 1] <-- arr[j]
        j <-- j - 1
        
      arr[j + 1] <-- temp
```

## Approach & Efficiency

See => [Blog Post](BLOG.md)

## Testing & Edge cases

```git
npm run test insertionSort.test.js
```

## API

- [Insertion Sort in JavaScript - Mike Lukic](https://stackabuse.com/insertion-sort-in-javascript/)
- [Code Fellows Example Blog](https://codefellows.github.io/common_curriculum/data_structures_and_algorithms/Code_401/class-26/solutions/BLOG)