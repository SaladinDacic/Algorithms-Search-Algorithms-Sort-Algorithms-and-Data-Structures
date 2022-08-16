// DIVIDE AND CONQUER

// This pattern involves dividing a DATA SET into smaller chuncks and then repeating a process with a subset of data
// This pattern can termendously decrease time complexity !!!!!!!!!



// Given a sorted array of integers, write a function called search,
// that accepts a value and returns the index where the value passed
// to the function is located. If the value is not found, return 1
//tj. custom IndexOf

// search([1,2,3,4,5,6],4) //3
// search([1,2,3,4,5,6],6) //5
// search([1,2,3,4,5,6],11) //-1
function search(sortedArr, num){
    for(let i=0; i<sortedArr.length; i++){
        if(sortedArr[i] === num) return i;
    }
return -1
}

// search([1,2,3,4,5,6],4) //3
// search([1,2,3,4,5,6],6) //5
// search([1,2,3,4,5,6],11) //-1
// function search2(sortedArr, num){
//     if(num > arr[arr.length-1] | num < arr[0])return-1;
//     let halfArrIndex = Math.ceil(sortedArr.length/2)
//     let middleNumber = sortedArr[halfArrIndex];
//     let indexOfMiddle = 0;
//     do{ 
//         if(num===middleNumber) return indexOfMiddle;
//         if(num<middleNumber){sortedArr = sortedArr.slice(0,halfArrIndex)}
//         if(num>middleNumber){sortedArr = sortedArr.slice(halfArrIndex)};
//          halfArrIndex = Math.ceil(sortedArr.length/2)
//          middleNumber = sortedArr[halfArrIndex]; 
//          if(num<middleNumber){indexOfMiddle += middleNumber}
//          if(num>middleNumber){indexOfMiddle -= middleNumber};

//     }while(sortedArr.length > 1)
// }



// search([1,2,3,4,5,6],4) //3
// search([1,2,3,4,5,6],6) //5
// search([1,2,3,4,5,6],11) //-1
function search2(arr, val){
    if(val > arr[arr.length-1] | val < arr[0])return-1;
    let min = 0;
    let max = arr.length - 1;
    do{ 
        let middle = Math.ceil((min+max)/2)
        let currentElement = arr[middle]
        if (arr[middle]<val){min = middle +1}
        else if(arr[middle] > val){max = middle - 1}
        else {return middle}

    }while(min<=max)
    return -1;
}