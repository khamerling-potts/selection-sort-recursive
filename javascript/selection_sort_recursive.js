function selectionSortRecursive(arr) {
  debugger;
  if (arr.length <= 1) {
    return arr;
  }
  const min = Math.min(...arr);
  const minIndex = arr.indexOf(min);
  arr.splice(minIndex, 1);

  const remaining = selectionSortRecursive(arr);
  remaining.unshift(min);
  return remaining;
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: [-1, 2, 3, 5]");
  console.log("=>", selectionSortRecursive([3, -1, 5, 2]));

  console.log("");

  console.log("Expecting: [1]");
  console.log("=>", selectionSortRecursive([1]));

  console.log("Expecting: []");
  console.log("=>", selectionSortRecursive([]));

  console.log("Expecting: [2, 4, 4, 6, 9]");
  console.log("=>", selectionSortRecursive([4, 6, 9, 2, 4]));
}

module.exports = selectionSortRecursive;

// Please add your pseudocode to this file
// And a written explanation of your solution
/*
base case: if array length is 1 or less, return that element
find min and min index of array
push min onto new array
splice remove min element from array
remaining minimum = selectionSortRecursive(arr)
new array.push(remaining minimum)
*/
