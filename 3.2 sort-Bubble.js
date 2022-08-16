// BubbleSort 
//A sorting algorithm where the largest values bubble up to the top!

//Write a function bubbleSort thath accepts arr of numbers and returns sorted arr
//Start looping from (with a variable called i) the end of the array towards the beginning
//Start an inner loop with a variable called j from the beginning until i-1
//If arr[j] is greater than arr[j+1], swap those two values
//Return sorted arr

function bubbleSort(arr){
    let noSwaps;
    for(let i=arr.length-1; i>=0; i--){
        noSwaps = true;
        for(let j=0; j<i; j++){
            if(arr[j]>arr[j+1]){[arr[j],arr[j+1]]=[arr[j+1],arr[j]]; noSwaps = false;}     
        }
        if(noSwaps){break;} 
    }
    return arr;
}

function bubbleSortES5(arr){
    for(let i=arr.length-1;i>=0;i--){
        for(let j=0; j<i; j++){
            if(arr[j]>arr[j+1]){
                var temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            };
        }
    }
    return arr;
}

