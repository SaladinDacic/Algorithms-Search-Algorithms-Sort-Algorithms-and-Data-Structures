// Recursion----->A process(function) that calls itself

// Tips:
// -arr: slice, concat, the spread operator
// -string: slice, substr, substring
// -object: Object.assign, the spread operator



//ČAROBNJAK je poslao DJEČAKA da ode do zmaja i da ponese listu brojeva
//a da se onda vrati sa neparnim brojevima iz te lise
//Naravno zmaj je ljut i mora nešto da pojede
//Ali kaže da će odgovoriti dječaku samo ukoliko je prvi broj neparan
////Ali dječak ipak treba sve brojeve da ispita, pa se došao na ideju!!
//DOći će i opet pitati da li je prvi broj nove liste neparan, stim da je izuzeo broj kiji je već pitao
//Tako je radi sve dok nije završio sa listom pa je dobio rješenje za sve brojeve, ČAK I ZA LISTU PRAZNIH BROJEVA
//Zmaj je nakon toga odgovorio, bravo momče otkrio si rekurziju
//čekaj znao si ovo sve vrijeme, naravno da jesam HAAHAHAHHAHAHAHAHAHAHHAHAHAHAHAHAHAHA!!!!!!

// Objectives:
// -Define what recursion is and how it can be used
// -Understand the two essential components of a recursive function
// -Visualize the call stack to better debug and understand recursive functions
// -We will see it with more complex data structures
// It's sometimes a cleaner alternative to iteration


//Recursion se koristi obično za:
// - JSON.parse / JSON.stringify
// - document.getElementById and DOM traversal(prelazak)
// - Object traversal(prelazak)

// ____________________________________________________________________________________________________________________
// Two essential parts of a recursive function!:
// -Base Case
// -Different Input

// ____________________________________________________________________________________________________________________
// ____________________________________________________________________________________________________________________
function sumRange(num){
    if(num===1) return 1;
    return num + sumRange(num-1);
}

function factorial(num){
    let result = 1;
    for(i=1;i<=num;i++){
        result *=i
    }
    return result;
}

function factorialRecursion(num){
    if(num === 1) return 1;
    return num * factorialRecursion(num-1)
}

// ____________________________________________________________________________________________________________________
// RECURSION WITH HELPER FUNCTION
// ____________________________________________________________________________________________________________________

function collectOddValues(arr){
    let result=[];
    function helper(helperInput){
        if(helperInput.length === 0){
            return; 
        }
        if(helperInput[0] %2 !==0){
            result.push(helperInput[0])
        }
        helper(helperInput.slice(1))
    }
    helper(arr)
    return result;
}

// ____________________________________________________________________________________________________________________
// RECURSION WITHOUT HELPER FUNCTION
// ____________________________________________________________________________________________________________________

function collectOddValues2(arr){
    let newArr = [];

    if(arr.length === 0) return newArr;
    
    if(arr[0]%2 !==0){
        newArr.push(arr[0]);
    }
    
    newArr = newArr.concat(collectOddValues2(arr.slice(1)));
    return newArr;
}