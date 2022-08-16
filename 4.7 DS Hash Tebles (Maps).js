// Objectives
//-Explain what a hash table is.
//-Define what a hashing algorithm is
//-Discuss what makes a good hashing algorithm
//-Understand how collisions occur in a hash table
//-Handle collisions using: seperate chaining or line probing.

// What is a hash table?
//Hash tables are used to store key-value pairs.
//They are like arrays, but the keys are not ordered.
//Unlike arrays, hash tables are fast for all of the following operations:
//  finding values, adding new values, and removing values!

// Why should i care?
//Nearly every programing language has some sort of hash table data structure
//Because of their speed, hash tables are very commonly used!

// Hash tables in the wild
//Python: Dictionaries
//JavaScript: Objects and Maps*
//Java, Go, Scala: Maps
//Ruby: Hashes

// HASH TABLES
//How can we get human-readability and computer readability?
//Computers don't know how to find an element at index pink!

//To implement a hash table, we'll be using an array.
//In order to look up values by key, we need a way to convert keys into valid array indicies.
//-A function that perfoms this task is called a ----> hash function <-----

//What makes a good hash?
//-Fast (i.e. constant time)
//-Doesn't cluter outputs at specific indices, but distributes uniformly
//-Deterministic (same input yields same output)

// ______________________________________________________________________________
// weak-example
function weak_hash(key, arrayLen){
    let total =0;
    for(let char of key){
        //map "a" to 1, "b" to 2, "c" to 3, etc.
        let value = char.charCodeAt(0) - 96
        total = (total + value) % arrayLen;
    }
    return total;
}
//Problems:
//-Only hashes string (we won't worry about this)
//-Not constant time - linear in key length
//-Could be a little more random
// ______________________________________________________________________________
// ______________________________________________________________________________
// improved version example
function improved_hash(key, arrayLen){
    let total =0;
    let WEIRD_PRIME = 31;
    for(let i=0; i<Math.min(key.length, 100); i++){
        let char = key[i]
        let value = char.charCodeAt(0) - 96
        total = (total * WEIRD_PRIME + value) % arrayLen;
    }
    return total;
}
// ______________________________________________________________________________
//Dealing with Collisions
//Even with large array and great hash function, collisions are inevitable.
//There are may strategies for dealing with collisions, but we'll focus on two:
//-1. Seperate Chaining-> U suštini na jednom bloku memorije spasi se više podataka i kasnije pretražujemo te podatke forEach u tom bloku samo [[]] nested array
//-2. Linear Probing-> kada naiđemo na koliziju, onda pretražujemo array da nam pronađe sledeći prazan slot

//Seperate chaining
//With seperate chaining, ateach index in out array 
//  we store values using more sophisticated data structure (e.g. an arrray or a linked list)
//This allows us to store multiple key-value pairs at the same index.

class HashTable{
    constructor(size=17){
        this.keyMap = new Array(size)
    }
    _hash(key){
        let total = 0;
        let WEIRD_PRIME = 31;
        for(let i=0; i<Math.min(key.length, 100); i++){
            let char = key[i]
            let value = char.charCodeAt(0) - 96
            total = (total * WEIRD_PRIME + value) % this.keyMap.length;
        }
        return total;
    }
    set(key,val){
        let position = this._hash(key);
        if(!this.keyMap[position])this.keyMap[position]=[];
        if(!this.keyMap[position].flat(2).includes(key)){
            this.keyMap[position].push([key,val])
        }
        return this
    }
    get(key){
        if (key === undefined) key = "";
        let position = this._hash(key);
        if(this.keyMap[position]){
            let minArr = this.keyMap[position].find(val=>{
                return val.includes(key)
            })
            return minArr[1]
        }
    }
    amazingKeys(){return hashTable.keyMap.flat().map(([key])=>key)}
    keys(){
        let listOfKeys = [];
        this.keyMap.forEach(val=>{
            if(val.length===1) listOfKeys.push(val[0][0]);
            else{
                (function repeat(val){
                    if(val.length === 0) return;
                    listOfKeys.push(val[0][0])
                    let newVal = val.slice(1)
                    repeat(newVal);
                })(val)
            }
        })
        return listOfKeys;
    }
    amazingValues(){return [...new Set(hashTable.keyMap.flat().map(([,values])=>values))]}
    values(){
        let listOfValues = new Set; // da bih removao data
        this.keyMap.forEach(val=>{
            if(val.length===1) listOfValues.add(val[0][1]);
            else{
                (function repeat(val){
                    if(val.length === 0) return;
                    listOfValues.add(val[0][1])
                    repeat(val.slice(1));
                })(val)
            }
        })
        return [...listOfValues];
    }
}

var hashTable = new HashTable();
hashTable.set("sako", 100);
hashTable.set("sako", 100);
hashTable.set("seno", 100);
hashTable.set("keno", 102);
hashTable.set("babo", 100);
hashTable.set("mama", 104);
hashTable.set("ajla", 105);
hashTable.set("jusuf", 106);
hashTable.set("dedo", 100);
hashTable.set("sikica", 108);
hashTable.set("abida", 109);