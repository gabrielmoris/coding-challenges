# Merge Sorted Arrays

Implement a function that merge 2 sorted arrays returning a sorted array

[Link to challenge](./index.ts)

**Examples**

```javascript
const arr1 = [1, 3, 5, 7];
const arr2 = [3, 6, 7, 10, 12];

mergeSortedArrays(arr1, arr2); // [1, 3, 3, 5, 6, 7, 7, 10, 12]
```

## Solution

The mergeSortedArrays function takes two sorted input arrays (arr1 and arr2) and returns a new sorted array that combines the elements from both input arrays.

```typescript
export default function mergeSortedArrays(
  { default: arr1 }: { default: number[] },
  { default: arr2 }: { default: number[] }
): Array<number> {
  const sorted: number[] = [];

  let i = 0,
    j = 0;

  while (i < arr1.length || j < arr2.length) {
    if (i < arr1.length && arr1[i] < arr2[j]) {
      sorted.push(arr1[i]);
      i++;
    } else if (j < arr2.length && arr2[j] < arr1[i]) {
      sorted.push(arr2[j]);
      j++;
    } else if (i < arr1.length && j < arr2.length && arr1[i] === arr2[j]) {
      sorted.push(arr1[i], arr2[j]);
      i++;
      j++;
    } else if (i < arr1.length) {
      sorted.push(arr1[i]);
      i++;
    } else if (j < arr2.length) {
      sorted.push(arr2[j]);
      j++;
    }
  }

  return sorted;
}
```

The function uses a while loop to iterate through both input arrays simultaneously. It compares the elements at the current indices of the two arrays and adds the smaller element to the sorted array. If the elements are equal, it adds both to the sorted array. After the main loop, any remaining elements from the two arrays are added to the sorted array.

## Edge Cases

- Empty arrays: If either arr1 or arr2 is an empty array, the function will correctly merge and return the non-empty array.
- Array with strings: The function assumes that the input arrays contain numbers. If the arrays contain non-numeric values, the function will treat them as NaN and they will be sorted accordingly.

## Time Complexity

The time complexity of the mergeSortedArrays function is O(n), where n is the total number of elements in the two input arrays. This is because the function iterates through the two arrays once, with a constant number of operations per iteration.

## Space Complexity

The space complexity of the mergeSortedArrays function is O(n), where n is the total number of elements in the two input arrays. This is because the function creates a new array (sorted) to store the merged and sorted elements, with a size equal to the total number of elements in the input arrays.
