//Write function linearSearch that accepts an array and a value
//Loop through the array and check if the current array element is equal to the value
//If it is, return the index at which the element is found
//If there is no value, return -1

function linearSearch(arr, value){
    for(let i in arr){
        if( arr[i] === value) return JSON.parse(i)
    }
    return -1;
}