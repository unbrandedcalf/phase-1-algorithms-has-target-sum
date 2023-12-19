function hasTargetSum(arr, target) {
    for (let i = 0; i < arr.length - 1; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] + arr[j] === target) {
          return true;
        }
      }
    }
    return false;
  }


/* 
  o(n) linear because it is an array
*/

/* 
  Add your pseudocode here
*/

/*
  two arguments array and target
  i represents first integer, i am having it start at the beggining of the array
  j represent the 2nd integer and it starts at the second number in the array
  if the first two integers equal target return true
  if the first two integers do not equal target move on to the next integer to see if the first and in this case third equal the target
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
