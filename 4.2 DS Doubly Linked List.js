// Objectives
//Construct Doubly Linked List
//Compare and contrast Doubly Linked List with Singly Linked List
//Implement basic operators on a DLL

// More memory === More Flexibility

// Node
//-val
//-next
//-prev

// DLL
//-head
//-tail
//-length

class Node{
    constructor(val){
        this.prev = null;
        this.val = val;
        this.next = null;
    }
}
class DoublyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val){
        if(!this.head){
            this.head = new Node(val);
            this.tail = this.head;
        }else{
            this.tail.next = new Node(val);
            this.tail.next.prev = this.tail;
            this.tail = this.tail.next;
        }
        this.length ++;
        return this;
    }
    pop(){
        if(!this.head) return undefined;
        var current = this.tail;
        if(this.length === 1){this.head = null; this.tail = this.head; this.length=0; return current;}
        this.tail = this.tail.prev;
        this.tail.next = null;
        this.length--;
        current.prev = null;
        return current;
    }
    shift(){
        if(!this.head) return undefined;
        var current = this.head;
        if(this.length === 1){this.head = null; this.tail = this.head;}
        else{
            this.head = this.head.next;
            this.head.prev = null;
            current.next = null;
        }
        this.length--
        return current;
    }
    unshift(val){
        let node = new Node(val)
        if(!this.head){this.head = node; this.tail = this.head;}
        else{
            let current = this.head;
            this.head = node;
            node.next = current;
            current.prev = node;
        }
        this.length++;
        return this;
    }
    get(val){
        var current;
        if(val<0 || val>this.length-1) return null;
        if(val === this.length - 1){return this.tail}
        if(val === 0){return this.head}
        if(val<=Math.floor(this.length/2)){
            current = this.head;
            for(let i=0; i<val; i++){
                current = current.next;
            }
        }else{
            current = this.tail;
            for(let i=val; i<this.length-1; i++){
                current = current.prev;
            }
        }
        return current;
    }
    set(index, val){
        if(index<0 || index>this.length-1) return false;
        let found = this.get(index);
        found.val = val;
        return true
    }
    insert(index,val){
        if(index<0 || index>this.length-1) return false;
        if(index === 0) return !!this.unshift(val);
        if(index === this.length -1) return !!this.push(val);

        let node = new Node(val)
        let foundNode = this.get(index -1)

        node.next = foundNode.next;
        node.prev = foundNode;
        foundNode.next = node;
        node.next.prev = node;

        this.length ++;
        return true;
    }
    remove(index){
        if(index<0 || index>this.length-1) return undefined;
        if(index === 0){return this.shift()}
        if(index === this.length-1){return this.pop()}

        let nodeToRemove = this.get(index);
        nodeToRemove.prev.next = nodeToRemove.next;
        nodeToRemove.next.prev = nodeToRemove.prev;
        
        nodeToRemove.prev = null; nodeToRemove.next = null;
        this.length --;
        return nodeToRemove;
    }
//  1       2       3       4       5
//  t,H     t.N,H.N         T.prev  T
//   
//  
    reverse(){
        let current = this.head;
        this.head = this.tail;
        this.tail = current;
        for(let i = 0; i<this.length; i++){
            let next = current.next;
            current.next = current.prev;
            current.prev = next;
            current = next;
        }
    }
}
var dll = new DoublyLinkedList();
dll.push(1)
dll.push(2)
dll.push(3)
dll.push(4)
dll.push(5)
dll.push(6)