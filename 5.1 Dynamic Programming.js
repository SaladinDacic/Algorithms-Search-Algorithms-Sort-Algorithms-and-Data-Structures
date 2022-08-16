//What is Dynamic programming?
//  A method for solving a complex problem by breaking it down into collection
//  of simpler subproblems, solving each of those subproblems just once, 
//  and sorting their solutions.

//When to use it?
// -Optimal substructure
//          &
// -Overlapping subproblems

//Overlapping subproblems (problem koji se ponavlja ---> npr. fibonnaci)
//  A problem is said to have overlapping subproblems if it can be broken down
//  into subproblems which are reused serval times
//npr: Fibonnaci sequence jer ima ponavljanja koda; veliki broj puta se izračuna ista stvar
//nije primjer: Mergesort; jer uvijek se sortiraju novi dijelovi i nema ponavljanja

//Optimal substructure (sastavljen od više malih dijelova na koji se može koristiti isti algoritam ---> npr. GRAPH najkraći put)
//  A problem is said to have optimal substructure if an optimal solution 
//  can be constructed from optimal solutions of its subproblems
//npr. shortest path u grafovima (A-B-C-D) je najkraći put od A do D ali i (A-B-C) i (A-B) su takođen najkraći putevi
//tj. kada se optimalna solucija može napraviti od manjih optimalnih solucija koji je već čine

function fibonnaci(num){
    if(num<2) return num;
    return fibonnaci(num-1) + fibonnaci(num-2)   
}
function fibColt(num){
    if(num<=2) return 1;
    return fib(num-1) + fib(num-2)
}
function fibonnaci2(num){
    let arr = [1,1];
    for(let i=2; i<num; i++){
        let newNum = arr[i-2] + arr[i-1];
        arr.push(newNum)
    }
    return arr[arr.length-1];
}

//MEMOIZATION!!!!
//Storing the result of expensive function calls and returning the chached result when the same input occur again
function fibMemoColt(num, memo=[undefined,1,1]){
    if(memo[num] !== undefined) return memo[num];
    memo[num] = fibMemoColt(num-1, memo) + fibMemoColt(num-2, memo);
    return memo[num];
}