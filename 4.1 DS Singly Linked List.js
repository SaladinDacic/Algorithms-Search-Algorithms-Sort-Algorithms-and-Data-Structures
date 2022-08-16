// Objectives
//Define what Single Linked List is
//Compare and contrast Linked List with Arrays

//Implement insertion, removal and traversal methods on Singly Linked List

// A data structure that contain HEAD, TAIL and LENGTH property.
// Linked List consist of nodes, and each NODE has VALUE and a POINTER to another node or null

// HEAD ---- LENGTH=4 ----- TAIL
//  |                         |
//  4 ----> 6 -----> 8 -----> 2 ---->
//    next     next     next    null


// List
//-Don't have indexes!
//-Connected via nodes with NEXT pointer
//-Random access is not allowed

// Arrays
//-Indexed in order!
//-Insertion and deletion can be expensive
//-Can quickly be accessed at a specific index

// pice od data - val
// reference to next node - next
class Node {
    constructor(val){
        this.val = val;
        this.next = null;
    }
}
// var first = new Node("Hi")
// first.next = new Node("There")
// first.next.next = new Node("how")
// first.next.next.next = new Node("are")
// first.next.next.next.next = new Node("you?")

class SinglyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val){
        var newNode = new Node(val)
        if(this.head === null){
            this.head = newNode; 
            this.tail = this.head; 
        }
        else{
            this.tail.next = newNode; 
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
    showVals(){
    var current = this.head;
        let arr = []
        while(current !== null){
            arr.push(current.val);
            current = current.next;
        }
        return arr;
    }
    pop(){
        if(!this.head) return undefined
        else{
            var current = this.head;
            var newTail = current;
            while(current.next){
                newTail = current;
                current = current.next;
            }
            this.tail = newTail;
            this.tail.next = null;
            this.length --;
            if(this.length === 0){this.head = null; this.tail = this.head;}
            return current;
        } 
    }
    shift(){
        if(!this.head) return undefined
        var current = this.head;
        if(this.length === 1){this.head = null; this.tail = this.head; this.length=0;}
        else{ 
            this.head = this.head.next;
            this.length --; 
        } 
        return current;
    }
    unshift(val){
        var newNode = new Node(val)
        if(!this.head){this.head = newNode; this.tail = this.head;}
        else{
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length ++;
        return this;     
    }
    get(index){
        if(this.length <= index || index<0)return undefined;
        var pointer = this.head;
        for(let i=0; i<index; i++){
            pointer = pointer.next
        }
        return pointer;
    }
    set(index, value){
        var pointer = this.get(index);
        if(pointer){
            pointer.val = value;
            return true;
        }
        return false;
    }
    insert(index, value){
        if(index< 0 || index>this.length) return false;
        if(index === 0) return !!this.unshift(value);  // dupli negacija operator vraća boolean npr !"str" ===> false; !!"str" ===>true wow
        if(index === this.length) return !!this.push(value);

        var nodeBeforeIndex = this.get(index-1);
        var nodeOfIndex = nodeBeforeIndex.next;
        var newNode = new Node(value);
        nodeBeforeIndex.next = newNode;
        newNode.next = nodeOfIndex; 
        this.length ++;

        return true;
    }
    remove(index){
        if(this.length === 0) return false;
        if(index< 0 || index>=this.length) return false;
        if(index === 0) return this.shift();
        if(index === this.length-1) return this.pop();

        var nodeBeforeIndex = this.get(index-1);
        var nodeAfterIndex = nodeBeforeIndex.next.next;
        var temp = nodeBeforeIndex.next;
        nodeBeforeIndex.next = nodeAfterIndex;
        this.length --
        return temp;
    }
    reverseColt(){
        var node = this.head;
        this.head = this.tail;
        this.tail = node;
        var prev = null; // zato što je this.tail.next === 0;
        var next;
        for (let i=0; i<this.length; i++){
            next = node.next;
            node.next = prev;
            prev = node;
            node = next;
        }
        
    }
    reverse(){
//      prev   node    next
//        0     1       2    3   4   5
//                    N 2    3   4   5  // next
//                  N.N 0               // node.next
//        1     0                       // prev
//              2       3    4   5      // node
//                    N 3    4   5      // next
//                  N.N 1    0          // node.next
//        2      1      0               // prev
//               3      4    5          // node
//                    N 4    5          // next
//                  N.N 2    1   0      // node.next
//        3      2      1    0          // prev
//               4      5               // node
        var length = this.length;         
        var prev = this.tail;
        var node = this.head;
        var next = node.next;
        
        for (let i=0; i<length; i++){
            next = node.next;
            node.next = prev;
            prev = node;
            node = next;
        }
        this.tail = this.shift();
        this.tail.next = null;
        return this;
    }
}

var singlyList = new SinglyLinkedList()
singlyList.push("Hello");
singlyList.push("I");
singlyList.push("am");
singlyList.push("Saladin");
singlyList.push("!");
// pop(val){ // moje rješenje
//         if(this.length === 1){this.head = null; this.tail = this.head; this.length = 0; return undefined}
//         else{
//             var current = this.head;
//             while(current.next.next !== null){
//                 current = current.next;
//             }
//             let val = current.next;
//             current.next = null;
//             this.length --;
//             return value;
//         }
// }