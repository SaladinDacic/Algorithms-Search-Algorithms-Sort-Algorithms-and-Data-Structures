//ALGORITAM ---> A process or set od steps to accomplish a certain task.

//1. Osmisli plan za rješavanje problema
//2. Masteraj pattern-e za česte probleme

//PROBLEM SOLVING:
//1 UNDERSTAND THE PROBLEM
//2 EXPLORE CONCRETE EXAMPLES  ----> pogledaj kakav input može da bude, šta ako je mali, veliki, prazan, pogrešan
//3 BREAK IT DOWN   ----> napiši korake koje poduzimaš u zadatku
//4 SOLVE/SIMPLIFY  ----> uradi problem koji je lakši tj. pojednostavi sebi zadatak nemoj odmah da udaraš na najtežu logiku
//5 LOOK BACK AND REFACTOR ---> and look at other people solutions

//1 Odrediti problem u zadatku
//2 Istraži konkretne primjere
//3 Podijeli zadatak na više dijelova
//4 riješi/pojednostavi
//5 Pogledaj nazad i refactor code

//_________________________________________________________________________________________
//UNDERSTAND THE PROBLEM:
//1 Možeš li postaviti problem sebi drugim riječima
//2 Koji je input koji se stavlja u zadatak
//3 Koji je output koji treba da se da kao rezultat
//4 Da li imam dovoljno informacija u input-u da bi riješio zadatak i sastavio output
//5 Kako bih trebao označiti bitne dijelove od data koji su dio zadatka
//_________________________________________________________________________________________
//EXPLORE EXAMPLES
//Coming up with examples can help you understand the problem better
//Primjeri sadrže unit testing koji ti govori da li tvoj zadatak radi kako bi trebao
//1. Počni sa jednostavnim primjerima
//2. Napreduj ka više složenim primjerima
//3. Istraži primjere sa praznim inputom
//4. Istraži primjere sa pogrešnim inputom
//_________________________________________________________________________________________
//BREAK IT DOWN
//1. Napiši korake koje trebaš prvo da odradiš u kodu 
//-----> Ovo pomaže da razmisliš o kodu prije nego ga počneš raditi
//-----> i pomaže ti da prepraviš grešku u razmišljanju šta zadatak traži od tebe
//2. Razmišljaj na glas i često možeš tako pokupiti i smjernicu
//_________________________________________________________________________________________
//SOLVE/SIMPLIFY
//1. Pronađi najveći problem u zadatku
//2. Privremeno ignoriši taj problem
//3. Uradi pojednostavljenu verziju
//4. vrati se na najteži dio zadatka
//_________________________________________________________________________________________
//LOOK BACK & REFACTOR
//Provjeri rezultat
//Da li možeš skontati drugi način za riješiti problem
//Da li možeš skontati šta tvoj kod radi na prvi pogled
//Možeš li koristiti tvoje rješenje za neki drugi zadatak u budućnosti ili jesi li mogao u prošlosti
//Možeš li unaprijediti performance i storage cost od trenutnog rješenja
//Možeš li refactor druge stvari kod koda kao što su naming convenctions od jecika koji koristiš, ili upute za pisanje koda kod kompanije za koju radiš ...
// na kraju pogledaj kako su drugi ljudi riješili isti problem
//_________________________________________________________________________________________






//1: Razmišljaj o problemu
//2:
//"aaaa" {a:4}
//"Hello" {H:1, e:1, l:2, o:1}
//3:
function charCount(string){
    //make object to return at end
    //Loop over string, forEach caracter
        //if the char is a number/letter AND key in object, add 1 to counts
        //if the char is number/letter AND not key in object, add it to object and set value to 1
        //if character is something else (space, period, etc.) do not do anything
    //return object at end
return charNumObj;
}
//4:
function charCount(str){
    //make object to return at end
    var result = {};
    //Loop over string, forEach caracter
    for(let i = 0; i<str.length; i++){
        //if the char is a number/letter AND key in object, add 1 to counts
        let char = str[i].toLowerCase();
        if(result[char] > 0){
            result[char]++;
        }
        //if the char is number/letter AND not key in object, add it to object and set value to 1
        else{
            result[char] = 1;
        }
    }
        //if character is something else (space, period, etc.) do not do anything
    //return object at end
return result;
}
//5:
function charCount(str){
    var obj = {};
    for(let i = 0; i<str.length; i++){
        let char = str[i].toLowerCase();
        if(/[a-z0-9]/.test(char)){        //-----------> /[a-z0-9]/.test(char)  provjerava je li character alphanumeric
            if(obj[char] > 0){
                obj[char]++;
            }
            else{
                obj[char] = 1;
            }
         }
    }
return obj;
}
//5:
function charCount(str){
    var obj = {};
    for(let char of str){ //--------------->"for-of" daje value svakog člana array-a --------- "for-in" daje index svakog člana array-a
        char = char.toLowerCase();
        if(/[a-z0-9]/.test(char)){        //-----------> /[a-z0-9]/.test(char)  provjerava je li character alphanumeric
            obj[char] = ++obj[char] || 1;
          //obj[char] = (obj[char] || 0) + 1;
         }
    }
return obj;
}

//5:
function charCount(str){
    var obj = {};
    for(let char of str){
        if(isAlphaNumeric(char)){        //-----------> / provjerava je li character alpha-numeric
            char = char.toLowerCase();   //----> nakon što provjeri je li alphanumeric onda ga pretvara u lowerCase jer tako ima manje posla
          //obj[char] = ++obj[char] || 1;
            obj[char] = (obj[char] || 0) + 1;
         }
    }
return obj;
}
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
//_________________________________________________________________________________________
//_________________________________________________________________________________________
//_________________________________________________________________________________________
//_________________________________________________________________________________________