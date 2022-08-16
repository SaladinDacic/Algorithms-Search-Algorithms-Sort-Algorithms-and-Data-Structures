//1.Frequency Counter
//_________________________________________________________________________________________


//Write a function called same, witch accepts two arrays.
//The function should return true if every value in the array has it's corresponding
//value squared in the second array. The frequency of values must be the same.


//_________________________________________________________________________________________
//[1,2,3], [1,4,9]
//[1,2,3], [1,3,2,4,9,5]
//[1,2,3], [1,2]
function same(arr1, arr2){
    let counter = 0;
//loop oko arr1 da bi radili funkciju za svaki value
    for(let val1 of arr1){
        let valKvadratni = val1*val1
        //loop oko arr2 da bi poredili value sa arr1 value
        arr2.includes(valKvadratni)&&counter++
    }
return counter===arr1.length?true:false
//funkcija treba returnati true ako svaki element u arr1 postoji kao kvadrat u arr2
//u suprotnom funkcija vraća false 
}

function same2(arr1, arr2){
    if(arr1.length>arr2.length)return false; // -----> ubrzivači funkcije
    let indexHolder = [];
    for(let val1 of arr1){
        let valKvadratni = val1*val1
        let valSqIndex = arr2.indexOf(valKvadratni)
        if(valSqIndex === -1)return false; // ------> ubrzivači funkcije
        valSqIndex!==-1&&indexHolder.push(valSqIndex);
    }
    let frequency = (JSON.stringify(indexHolder)=== JSON.stringify(indexHolder.slice().sort((a,b)=>a-b)));
return indexHolder.length===arr1.length && frequency;
}

//_________________________________________________________________________________________
//REFACTORED

function same3(arr1, arr2){
    if(arr1.length !== arr2.length) return false;
    
    let frequencyCounter1 = {}
    let frequencyCounter2 = {}
    
    for(let val of arr1){
        frequencyCounter1[val] = ++frequencyCounter1[val] || 1
    }
    for(let val of arr2){
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) +1
    }

    for(let key in frequencyCounter1){
        if(!(key ** 2 in frequencyCounter2)) return false;
        if(frequencyCounter2[key ** 2] !== frequencyCounter1[key]) return false;
    }
    
    return true;
}


// Given two strings, write a function to determine if the second string is and anagram of first-
// An anagram is a word, phrase, or name formed by rearranging the letters of another
// such as cinema, formed from iceman


// validAnagram("","")
// validAnagram("sasa","asas")
// validAnagram("sax","sad")
// validAnagram("abc nca","acn cba")
// Šta je sa valikim slovima, šta je sa spaceovima 
function validAnagram(str1, str2){
//napraviti objekte od inputaa
let anagramParent = {}
let anagramChild = {}
//ubaciti value u anagram objekte
for(let val of str1.toLowerCase()){
    anagramParent[val] = ++anagramParent[val] || 1
}
for(let val of str2.toLowerCase()){
    anagramChild[val] = (anagramChild[val] || 0) +1
}

for(let key in anagramParent){
    if(!anagramChild[key]) return false;
    if(!(anagramParent[key] === anagramChild[key])) return false;
}
// napraviti algoritam da upoređuje keys
//funkcija vraća true ili false u zavisnosti da li se str1 može napraviti od str2
return true;
}

function validAnagram2(first,second){
    const holderObj = {}
    
    for(let letter of first){
        holderObj[letter] ? ++holderObj[letter]: holderObj[letter] = 1
    }
    
    for(let letter of second){
        if(!holderObj[letter]){
            return false;
        }
        else{
//             console.log(holderObj)
            --holderObj[letter]
        }
    }
    return true;
}