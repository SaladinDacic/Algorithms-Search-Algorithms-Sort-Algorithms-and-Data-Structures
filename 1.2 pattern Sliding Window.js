// SLIDING WINDOW
// Very useful for keeping track of a subset of data in an array/string etc.

// This pattern involves creating a window which can either be an array or number 
// from one position to another

// Depending on certain condition, the window ether increases or closes
// (and a new window is created)




// Write a function called maxSubarraySum which accepts an array of integers and a number called n.
// The function should calculate the maximum sum of n consectuive elements in the array


//maxSubarraySum([1,2,5,2,8,1,5],2) //10
//maxSubarraySum([1,2,5,2,8,1,5],4) //17
//maxSubarraySum([4,2,1,6],1) //6
//maxSubarraySum([4,2,1,6,2],4) //13
//maxSubarraySum([],4) //null
function maxSubarraySum(arrOfInt, n){
if(n>arrOfInt.length) return null;
//input je array od integera i jedan dodatni n integer 
var pointers =new Array(n).fill(undefined).map((val,idx) => idx);
let sums = new Array(arrOfInt.length).fill(0);
if(n>arrOfInt.length)return null;
for(let j = 0; j<arrOfInt.length; j++){
    pointers.forEach(val=>{
//             console.log(`krug ${j}`, "prije values","suma je: "+ sums[j],"dodaje se na sumu: "+ arrOfInt[val])
            sums[j] = sums[j] + arrOfInt[val];  
    })
    pointers = pointers.map(val=>val+1)
}
var counter=0;
// sums=sums.filter(val=> JSON.stringify(val) !== JSON.stringify(NaN))
for(let i=j=0; i<sums.length; i++){
    if(sums[i]<sums[i+1]) j = i+1
    counter=j;
}
//korisnik unese arr i n zatim program izračuna kolika je suma svih susjednih elemenata iz arraja rejndža n

return sums[counter];
//output je broj suma susjednih elemenata u arrayu baziranih na broju n
}

//_________________________________________________________________________________________
//Colt "Naive solution"
function maxSubarraySum2(arr,num){
    if(num>arr.length){
        return null;
    }
    let max = -Infinity;
    for(let i =0; i<arr.length-num+1; i++){
        temp=0;
        for(let j = 0; j<num; j++){
            temp += arr[i+j];
        }
        if(temp>max) max=temp;
    }
    return max;
}

//_________________________________________________________________________________________
//REFACTORED by Colt
//_________________________________________________________________________________________
function maxSubarraySum3(arr,num){
    let maxSum=0;
    let tempSum=0;
    if(arr.length<num) return null;
    for(let i = 0; i<num; i++){
        maxSum += arr[i]
    }
    tempSum = maxSum;
    for(let i = num; i<arr.length; i++){ // stavio je i = num
        tempSum = tempSum - arr[i-num] + arr[i]; // i onda pomjera taj range između i i num na desno, kao ovdje oduzeo index 0(i-num) a dodao index num(i)
        maxSum = Math.max(maxSum, tempSum);
    }
//     for(let i; i<arr.length; i++){
//         tempSum = tempSum - arr[i] + arr[i+num]; 
//         maxSum = Math.max(maxSum, tempSum);
//     }
    return maxSum;
}