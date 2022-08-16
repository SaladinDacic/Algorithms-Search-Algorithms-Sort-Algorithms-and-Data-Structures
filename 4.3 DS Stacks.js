// Stack ------> is not built in data structure in JavaScript / but are relatively simple to implement
//A LIFO data structure!
//The last element added to the stack 
//will be the first element removed from the stack

//-Managing function invocations
//-Undo/Redo
//-Routing (the hustory object) is treated like a stack // Like in React


// Creating stack with array
// var stack=[]; stack.push("something"); stack.pop(); or unshift(); shift();

class Node{
    constructor(val){
        this.val = val;
        this.prev = null;
    }
}

class Stack{
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    push(val){
        let node = new Node(val);
        if(!this.first){this.first=node; this.last=this.first;}
        else{
            node.prev = this.last;
            this.last = node;
        }
        this.size ++;
        return this;
    }
    pop(val){
        if(!this.first) return undefined;
        let nodeToRemove = this.last;
        if(this.size === 1){this.first = null; this.last=this.first;}
        else{
            this.last = this.last.prev;
            nodeToRemove.prev = null;
        }
        this.size --;
        return nodeToRemove;
    }
}

class Stack2{
    constructor(){
        this.last = null;
    }
    push(val){
        let node = new Node(val);
        if(!this.last)this.last = node;
        else{node.prev = this.last; this.last=node;}
        return this;
    }
    pop(){
        if(!this.last)return undefined;
        let currentLast = this.last;
        this.last = this.last.prev
        currentLast.prev = null;
        return currentLast;
    }
}

var stack2 = new Stack2();
stack2.push(1);
stack2.push(2);
stack2.push(3);
// var stack = new Stack();
// stack.push(1);
// stack.push(2);
// stack.push(3);