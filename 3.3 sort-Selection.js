//Selection Sort
//Simlar to bubble sort, but instead of first placing large values into position,
//it places small values into sorted position

// Write a function which takes an array and sort it using selectionSort algorithm;
// Store the first element as the smallest vale you've seen so far.
// Compare this item to the next item in the array until you find a smaller num.
// if a smaller number is found, designate that smaller number to be the new "min"
//   and continiue until the end of the array.
// If the "minimum" is not the value (index) you initially began with, swap the two values.
// Repeat this with the next element until the array is sorted.

function selectionSort(arr){
    for(let i=0; i<arr.length; i++){
        var min = i;
        for(let j=i+1; j<arr.length; j++){
            if(arr[j] < arr[min]) min = j;
        }
        if(i !== min) [arr[i],arr[min]]=[arr[min],arr[i]];
    }
    return arr;
}