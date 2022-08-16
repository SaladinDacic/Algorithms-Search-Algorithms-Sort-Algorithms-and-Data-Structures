// Binary search only works with sorted arrays
// Write function called binarySearch, which accepts and sorted array and a value
// Create a left pointer at the start of the array, and a right pointer at the end
// While the left pointer comes before the right pointer:
// -Create a pointer in the middle
// -If you find the value you want, return the index
// -If the value is too small, move the left pointer up
// -If the value is too lagre, move the right pointer down
// If you never find the value, return -1;

// Binary Search Exercise
// binarySearch([1,2,3,4,5],2) // 1
// binarySearch([1,2,3,4,5],3) // 2
// binarySearch([1,2,3,4,5],5) // 4
// binarySearch([1,2,3,4,5],6) // -1
// binarySearch([
//   5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 
//   40, 44, 64, 79, 84, 86, 95, 96, 98, 99
// ], 10) // 2
// binarySearch([
//   5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 
//   40, 44, 64, 79, 84, 86, 95, 96, 98, 99
// ], 95) // 16
// binarySearch([
//   5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 
//   40, 44, 64, 79, 84, 86, 95, 96, 98, 99
// ], 100) // -1

function binarySearch(arr, elem){
    let start=0
    let end = arr.length-1
    let middle = Math.floor((start+end)/2);
    while(arr[middle] !== elem && start <= end){
        if(elem<arr[middle]) end = middle- 1;
        else start = middle +1;
        middle=Math.floor((start+end)/2)
    }
    if(arr[middle] === elem) return middle; else return -1;
}

