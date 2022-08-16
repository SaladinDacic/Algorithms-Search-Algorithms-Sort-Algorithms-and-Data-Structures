// Queue

//koristi se u igricama npr. kada neko čeka da join njegov quque je prvi kliknuo prvi će uć kad nađe game
//U printerima se koristi, tj. printa od prvog ka zadnjem listu, 1 u vremenu 1 per time
// ili npr Uload data, jedan po jedan file ide a ne svi zajedno


//A FIFO data structure!
//The first element added to the stack 
//will be the first element removed from the stack

// Creating queue with array
// var queue=[]; queue.push("something"); queue.shift(); or unshift(); pop();

class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}
class Queue{
    constructor(){
        this.first = null;
        this.last = null;
        this.length = 0;
    }
    enqueue(val){
        let node = new Node(val)
        if(!this.first){this.first = node; this.last = this.first;}
        else{
            this.last.next = node;
            this.last = node;
        }
        this.length++;
        return this;
    }
   dequeue(){
        if(!this.first) return null;
        let currentFirst = this.first;
        if(this.length === 1){this.first = null; this.last = null}
        else{
            this.first = this.first.next;
        }
        currentFirst.next = null;
        this.length --;
        return currentFirst;
    }
}

var queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);