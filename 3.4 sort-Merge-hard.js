//Objectives:
//Understand the limitations of the sorting algorithms we've learned so far.
//Implement merge sort
//Implement quick sort
//Implement radix sort

//Big O- time ==== O(n log(n)) u najboljem, average i najgorem slučaju
//Big O- space === O(n)


//Merge Sort
//It's combination of spliting, sorting and merging!
//Exploits the fact that arrays of 0 or 1 element are sorted

// 1: Write function merge that accepts 2 arrays and merge them in correct order of elements

function merge(arr1, arr2){
    if(arr2.length === 0) return arr1;
    if(arr1.length === 0) return arr2;
    for(let i=0; i<arr1.length; i++){
        for(let j=0; j<arr2.length; j++){
            if(arr1[i]>arr2[j] && j===arr2.length-1) {arr2.push(arr1[i]); break;}
            if(arr1[i]>arr2[j]) continue;
            if(arr1[i]<=arr2[j]){arr2.splice(j,0,arr1[i]); break;}
        }
    }
    return arr2;
}

// function merge2(arr1,arr2){
//     if(arr2.length === 0) return arr1;
//     if(arr1.length === 0) return arr2;
//     let newArr=[];
//     var min;
//     for(var i=0; i<arr1.length; i++){
//         min = arr1[i];
//         for(let j=0; j<arr2.length; j++){
//             if(arr2[j]<min){min=arr2[j];arr2=arr2.slice(1); i--}
//         }
//         newArr.push(min);
//     }
//     return newArr;
// }

// function merge3(arr1,arr2){
//     if(arr2.length === 0) return arr1;
//     if(arr1.length === 0) return arr2;
//     let newArr = [];
//     let i=0;
//     let j=0;
//     while(i<arr1.length){
//         if(arr1[i]<arr2[j]){newArr.push(arr1[i]);i++};
//         if(arr1[i]>=arr2[j]){newArr.push(arr2[j]); j++;};
//         if(j>=arr2.length) {newArr.push(arr1[i]); i++;};
//     }
//     return	newArr;
// }

function mergeColt(arr1,arr2){
    let newArr=[];
    let i =0;
    let j=0;
    while(i<arr1.length && j<arr2.length){
        if(arr2[j]>arr1[i]){newArr.push(arr1[i]);i++}
        else{newArr.push(arr2[j]); j++}
    }
    while(i<arr1.length){
        newArr.push(arr1[i]);i++
    }
    while(j<arr2.length){
        newArr.push(arr2[j]); j++
    }
    return newArr;
}




function mergeSort(arr){
    let newArr=[];
    let mergedArr;
    function splitArr(arr){
        var arr1= arr.slice(0,arr.length/2)
        var arr2= arr.slice(arr.length/2, arr.length)
        if(arr1.length < 2 && arr2.length <2){newArr.push(arr1); newArr.push(arr2); return}
        splitArr(arr1);
        splitArr(arr2);
    }
    splitArr(arr);
    function mergeSplitted(arr){
        if(arr.length < 2){ mergedArr= arr[0]; return}
        let i=0;
        let j=1;
        var tempArr = [];
        while(j<arr.length){
            var mergedOne = mergeColt(arr[i],arr[j])
            tempArr.push(mergedOne)
            i+=2;
            j+=2;
        }
        
        mergeSplitted(tempArr)
    }
    mergeSplitted(newArr);
    return mergedArr;
}


function mergeSortColt(arr){
    if(arr.length <=1) return arr;
    let mid = Math.floor(arr.length/2);
    let left = mergeSortColt(arr.slice(0,mid));
    let right = mergeSortColt(arr.slice(mid));
    return mergeColt(left,right);
}