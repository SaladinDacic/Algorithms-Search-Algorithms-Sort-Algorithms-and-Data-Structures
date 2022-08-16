//Write a function stringSearch thath takes longer string and a pattern to search
//Loop over the longer string
//Loop over the shorter string
//If the characters don't match, break out of the inner loop
//If the caracters do match keep going...
//If you complete the  inner loop and find a match, increment the count of matches
//Return count

function stringSearch(longStr, shortStr){
    let counter = 0;
    let pointer1 = 0;
    let pointer2 = 0;
    for(let i=0; i<longStr.length; i++){
        if(longStr[pointer1] === shortStr[pointer2] && longStr[pointer1+1] === shortStr[pointer2+1]&& shortStr.length!==1) {pointer1++; pointer2++}
        else{pointer1++; pointer2=0};
        if(longStr[pointer1] === shortStr[pointer2] && shortStr.length===1) {counter++}
        if(pointer2 === shortStr.length-1 && shortStr.length!==1) {counter++; pointer2=0}
    }
    return counter;
}

// stringSearch("wowomgzomg","omg") //2

function stringSearchColt(longStr, shortStr){
    let counter = 0;
    for(let i=0; i<longStr.length; i++){
        for(let j = 0; j<shortStr.length; j++){
            if(shortStr[j] !== longStr[i+j]) break;
            if(j === shortStr.length -1) counter++;
        }
    }
    return counter;
}
