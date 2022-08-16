// MULTIPLE POINTERS

// Creating pointers or values that correspond to an index or position and move towards the beginning,
// end or middle based on certain condition
//Very efficient for solving problems with minimal space complexity as well


//Write a function called sumZero which accepts a sorted array of integers. The function should find the first pair where the sum is 0. 
//Return an array that includes both values that sum to zero or undefined if a pair does not exist.



// sumZero([-3,-2,-1,0,1,2,3]) //[-3,3]
// sumZero([-2,0,1,3]) //undefined
function sumZero(sortedArr){
//input je sorted array
//iterretaj oko arraya
for(let num of sortedArr){
    for(let num2 of sortedArr.filter(val=>val!==num)){ //poredi se num2 sa svakim brojem iz arraya osim sa sobom
        if(num+num2===0) return [num,num2]
    }
}
    //poredi prvi element sa ostalim iz arraya
//return je parr od prva 2 elementa iz arraya čija je suma 0 ili undefined
return undefined
}
//_________________________________________________________________________________________
//REFACTORED
//_________________________________________________________________________________________
function sumZero2(sortedArr){
    let leftIndex = 0;
    let rightIndex = sortedArr.length - 1;
    while(leftIndex < rightIndex){
        let sum = sortedArr[leftIndex] + sortedArr[rightIndex];
        if(sum === 0) return [sortedArr[leftIndex], sortedArr[rightIndex]];
        if(sum > 0) rightIndex--;
        if(sum < 0) leftIndex++;
    }
}
//_________________________________________________________________________________________



//Implement a function called countUniqueValues, which accepts a sorted array, and counts
//the unique values u+in the array. There can be negative numbers in the array,
//but it will always be sorted.


// countUniqueValues([1,1,1,1,1,2]) // 2
// countUniqueValues([]) // 0
//countUniqueValues([-2,-1,-1,0,1]) // 4
function countUniqueValues(sortedArray){
//input je sorted array
let valObj = {}
for(let number of sortedArray){
    valObj[number]? valObj[number]:valObj[number] = 1;
}
//return je broj unique values
return Object.keys(valObj).length;
}



//_________________________________________________________________________________________
//REFACTORED
//_________________________________________________________________________________________
// countUniqueValues([1,1,1,1,1,2]) // 2
// countUniqueValues([]) // 0
// countUniqueValues([-2,-1,-1,0,1]) // 4
// countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]) // 7
function countUniqueValues2(sortedArr){
if(sortedArr.length===0) return 0;
//input je sorted array
let leftIndex = 0;
let leftPlusIndex = 1;
while(leftPlusIndex < sortedArr.length){
    if(sortedArr[leftIndex] === sortedArr[leftPlusIndex]){
        leftPlusIndex++;
    }else{
        sortedArr[leftIndex + 1]=sortedArr[leftPlusIndex]; leftIndex++; leftPlusIndex ++;
    }
}
//return je broj unique values
return leftIndex + 1;
}
//_________________________________________________________________________________________
//REFACTORED by Colt
//_________________________________________________________________________________________
function countUniqueValues3(sortedArr){
if(sortedArr.length===0) return 0;
//input je sorted array
let i = 0;
for(let j = 1; j<sortedArr.length; j++){
    if(sortedArr[i] !== sortedArr[j]){
        i++; sortedArr[i]=sortedArr[j]
    }
}
//return je broj unique values
return i+1;
}