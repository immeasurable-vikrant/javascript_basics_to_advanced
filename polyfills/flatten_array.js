// Array.prototype.myFlatten = function (depth = Infinity) {
//   let res = [];

//   function flattenArray(arr, currentDepth) {
//     for (let i = 0; i < arr.length; i++) {
//       if (Array.isArray(arr[i]) && currentDepth < depth) {
//         flattenArray(arr[i], currentDepth + 1);
//       } else {
//         res.push(arr[i]);
//       }
//     }
//   }

//   flattenArray(this, 1);
//   return res;
// };

// const arr1 = [1, 2, 3, [4, [5, 6, 7], 8], 9];
// //   console.log(arr1.myFlatten()); // Flattens to infinite depth
// console.log(arr1.myFlatten(2)); // Flattens to a depth of 2

Array.prototype.myFlatten = function (depth = Infinity) {
  let flatArray = [];
  function flattenArray(arr, currDepth) {
    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i]) && currDepth < depth) {
        flattenArray(arr[i], currDepth + 1);
      } else {
        flatArray.push(arr[i]);
      }
    }
  }

  flattenArray(this, 0);
  return flatArray;
};


const arr1 = [1, 2, 3, [4, [5, 6, 7], 8], 9];
//   console.log(arr1.myFlatten()); // Flattens to infinite depth
console.log(arr1.myFlatten(2)); // Flattens to a depth of 2




Array.prototype.myFlat1 = function(deep=Infinity){
  let flattened = []
  function flattenedFunc(arr, currDepth){
    for(let i = 0; i < arr.length; i++){
      if(Array.isArray(arr) && currDepth < depth){
        flattenedFunc(arr[i], currDepth + 1)
      } else{
        flattened.push(ar[i])
      }
    }

    flattenedFunc(this, 0)  
  }
  return flattened

}

console.log([1, 2, [3, 5,[5,[6]]], [7]].flat(3))
