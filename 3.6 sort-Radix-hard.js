// Radix Sort
//Radix sort is a special sorting algorithm that works on list of numbers
//It never makes comparison between elements!
//It exploits the fact that information abut the size of a number is encoded in the number of digits.
//More digits means a bigger number!

//Big O- time ==== O(kn) u najboljem, average i najgorem slučaju O(n log(n))
//Big O- space ===  O(kn) 

//In order to implement radix sort, it's helpful to build a few helper functions first:

// ________________________________________________________________________________________
// ________________________________________________________________________________________
// getDigit(num, place) ----> returns the digit in num at the given value
function getDigit(num, place=0){
    num = Math.abs(num);
    let strNum = JSON.stringify(num)
    if(strNum[strNum.length-1-place]===undefined) return 0
    return JSON.parse(strNum[strNum.length-1-place])
}

function getDigitColt(num, place=0){
    return Math.floor(Math.abs(num)/Math.pow(10,place)%10);

}
// ________________________________________________________________________________________
// ________________________________________________________________________________________
function digitCount(num=undefined){
    if (num === undefined) return 0;
    let result = 0;
    let strNum;
    strNum  = JSON.stringify(num)
    for(let val of strNum){
        result ++;
    }
    return result;
}

function digitCountColt(num){
    if(num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num)))+1
}
// ________________________________________________________________________________________
// ________________________________________________________________________________________
function mostDigits(...args){
    let result=0
    for(let val of args){
        if(result<digitCount(val)) result = digitCount(val);
    }
    return result
}
// ________________________________________________________________________________________
// ________________________________________________________________________________________

//Define a function radixSort that accepts list of numbers
//Figure out how many digits the largest number has and 
//loop from k=0 up to this largest number of digits
//For each iteration of the loop:
//   create buckets for each digit (0 to 9)
//   place each number in the corresponding bucket based on its K-th digit
//Replace our existing array with values in our buckets, starting with 0 and going up to 9
//return list at the end

function radixSort(arr){
    let mDigits = mostDigits(...arr);
    for(let k=0; k<mDigits; k++){
        let newArr=[[],[],[],[],[],[],[],[],[],[]] // ILI Array.from({length: 10}, ()=>[])
        for(let i =0; i<arr.length; i++){
            let digit = getDigit(arr[i],k)
            newArr[digit].push(arr[i])
        }
        arr = [].concat(...newArr);
//         arr = newArr.reduce((acc,next)=>{
//                     return acc.concat(next)
//               },[])
    }
return arr;
}