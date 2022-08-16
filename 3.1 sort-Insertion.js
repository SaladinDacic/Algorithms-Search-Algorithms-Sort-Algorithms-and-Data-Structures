// Insertion Sort 
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// MOGUĆA KORIST OVOG SORTA JE ONLINE SORTING, TJ. SORTIRA KAKO INFORMACIJE STIŽU, NEMA POTREBE ZA CIJELIM ARRAJOM!!!!!!!!
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

//Build up the sort by gradully creating a larger left half which is always sorted

//Write a function insertionSort that accepts an array and returns sorted one by usin insertion algorithm
//Start by picking the second element in the array
//Now compare the second element with the one before it and swap if necessary
//Continiue to the next element and if it is in the incorrect order,
// iterate through the sorted portion (i.e. the left side)
// to place the element in the correct place.
//Repeat until the array is sorted.

function insertionSort(arr){
    for(let i=1; i<arr.length; i++){
        for(let j=i-1; j>=0; j--){
            if(arr[j]>arr[j+1]) {[arr[j],arr[j+1]]=[arr[j+1],arr[j]]}
        }
    }
    return arr;
}

// [5, 3, 7,2,7,8]
//  j  cv

function insertionSortColt(arr){
    for(let i=1; i<arr.length; i++){
        var currVal = arr[i];
        for(var j=i-1; j>=0 && arr[j]>currVal ; j--){
           arr[j+1]=arr[j]
        }
        arr[j+1] = currVal;
    }
    return arr;
}