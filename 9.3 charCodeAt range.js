//47-58 su numeric (0-9)
//64-91 su upper alpha (A-Z)
//96 - 123 su lower alpha (a-z)

//primjer
"s".charCodeAt(0) //----> 0 označava index slova u riječi npr "saladin" 2-index je l
//---> 115 ----> s je 115 char na tastaturi
//-----------------------------------------> ako se oduzme 96 od "a".charCodeAt(0) dobićemo 1 <---------------------------------------------------
function isAlphaNumeric (char){
    var code = char.charCodeAt(0)
    if(!(code > 47 && code < 58)&& // ako kod nije numeric (0-9)
       !(code > 64 && code < 91)&& // ako kod nije upper alpha (A-Z)
       !(code > 96 && code < 123)  // ako kod nije lower alpha (a-z)
    ){
       return false // reci da nije alpha-numeric
    }
    return true; // u suprotnom reci da jeste
}