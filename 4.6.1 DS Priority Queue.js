//What is a Priority Queue?

//A data structure where each element has a priority. 
//Elements with higher priorities are server before elements with lowe priorities.

//Koristi se u izvršavanju processa na sistemu, pa se određenim funkcijama da veći prioritet

class Node{
    constructor(val, priority){
        this.val = val;
        this.priority = priority;
    }
}

class PriorityQueueColt {
    constructor(){
        this.values = [];
    }
    enqueue(val, priority){
        let newNode = new Node(val, priority);
        this.values.push(newNode);
        this.bubbleUp();
        return this.values;
    }
    bubbleUp(){
        let idx = this.values.length - 1;
        const element = this.values[idx];
        while(idx > 0){
            let parentIdx = Math.floor((idx - 1)/2);
            let parent = this.values[parentIdx];
            if(element.priority >= parent.priority) break;
            this.values[parentIdx] = element;
            this.values[idx] = parent;
            idx = parentIdx;
        }
    }
    dequeue(){
        const min = this.values[0];
        const end = this.values.pop();
        if(this.values.length > 0){
            this.values[0] = end;
            this.sinkDown();
        }
        return min;
    }
    sinkDown(){
        let idx = 0;
        const length = this.values.length;
        const element = this.values[0];
        while(true){
            let leftChildIdx = 2 * idx + 1;
            let rightChildIdx = 2 * idx + 2;
            let leftChild,rightChild;
            let swap = null;

            if(leftChildIdx < length){
                leftChild = this.values[leftChildIdx];
                if(leftChild.priority < element.priority) {
                    swap = leftChildIdx;
                }
            }
            if(rightChildIdx < length){
                rightChild = this.values[rightChildIdx];
                if(
                    (swap === null && rightChild.priority < element.priority) || 
                    (swap !== null && rightChild.priority < leftChild.priority)
                ) {
                   swap = rightChildIdx;
                }
            }
            if(swap === null) break;
            this.values[idx] = this.values[swap];
            this.values[swap] = element;
            idx = swap;
        }
    }
}

class PriorityQueue{
    constructor(){
        this.values = [];
    }
    enqueue(value, priority){
        let node = new Node(value, priority)
        this.values.push(node);
        this.bubbleUp(node);
        return this.values;
        
    }
    bubbleUp(element){
        let idxOfChild = this.values.length-1;
        while(idxOfChild > 0){
            let idxOfParent = Math.floor((idxOfChild-1)/2);
            let parent = this.values[idxOfParent];
            if(element.priority<=parent.priority)break;

            [this.values[idxOfParent],this.values[idxOfChild]]=[this.values[idxOfChild],this.values[idxOfParent]]
            idxOfChild = idxOfParent;
        }
    }
    dequeue(){
        let returnVal = this.values[0];
        [this.values[0],this.values[this.values.length-1]]=[this.values[this.values.length-1],this.values[0]]
        this.values.pop();
        let rootIndex = 0;
        let firstChildIdx = rootIndex*2+1;
        let secoundChildIdx = rootIndex*2+2;

        this.sinkDown2(rootIndex,firstChildIdx,secoundChildIdx)
        console.log(this.values)
        return returnVal;
    }
    sinkDown2(ri, fcIdx, scIdx){
        try{
            while(this.values[ri].priority<this.values[fcIdx].priority || this.values[ri].priority <this.values[scIdx].priority){
                if(this.values[fcIdx].priority>=this.values[scIdx].priority){
                    [this.values[ri],this.values[fcIdx]]=[this.values[fcIdx],this.values[ri]];
                    ri = fcIdx;
                    fcIdx = ri*2+1;
                    scIdx = ri*2+2;
                }else{
                    [this.values[ri],this.values[scIdx]]=[this.values[scIdx],this.values[ri]];
                    ri = scIdx;
                    fcIdx = ri*2+1;
                    scIdx = ri*2+2;
                }
            }
        }catch(err){};
        
    }
    sinkDown(ri, fcIdx,scIdx){
            if(this.values[fcIdx]===undefined && this.values[scIdx]===undefined) return;
            else if(this.values[fcIdx]===undefined) return;
            else if(this.values[scIdx]===undefined) return;
            else if(this.values[ri]===undefined) return;
            else if(!this.values[fcIdx].priority) return;
            else if(!this.values[scIdx].priority) return;
            else if(!this.values[ri].priority) return;
            else if(this.values[ri].priority!== undefined && (!this.values[fcIdx].priority || !this.values[scIdx].priority)) return;
            else if(this.values[ri].priority>this.values[fcIdx].priority && this.values[scIdx]===undefined) return;
            else if(this.values[ri].priority>this.values[scIdx].priority && this.values[fcIdx]===undefined) return;
            else if(this.values[ri].priority>this.values[fcIdx].priority && this.values[ri].priority>this.values[scIdx].priority) return;
            else if(
                this.values[fcIdx].priority>this.values[ri].priority && this.values[fcIdx].priority>=this.values[scIdx].priority
                ||this.values[fcIdx].priority>this.values[ri].priority && this.values[scIdx]===undefined
            ){
                [this.values[ri],this.values[fcIdx]]=[this.values[fcIdx],this.values[ri]];
                ri = fcIdx;
                fcIdx = ri*2+1;
                scIdx = ri*2+2;
            }
            else if(
                this.values[scIdx].priority>this.values[ri].priority && this.values[scIdx].priority>=this.values[fcIdx].priority
                ||this.values[scIdx].priority>this.values[ri].priority && this.values[fcIdx]===undefined
            ){
                [this.values[ri],this.values[scIdx]]=[this.values[scIdx],this.values[ri]];
                ri = scIdx;
                fcIdx = ri*2+1;
                scIdx = ri*2+2;
            }
            this.sinkDown(ri,fcIdx,scIdx)
     }
}

var pq = new PriorityQueue();

pq.enqueue("test",5);
pq.enqueue("test",7);
pq.enqueue("test",3);
pq.enqueue("test",14);
pq.enqueue("test",20);
pq.enqueue("test",15);
pq.enqueue("test",10);
pq.enqueue("test",35);
pq.enqueue("test",23);
pq.enqueue("test",54);
pq.enqueue("test",88);
pq.enqueue("test",31);
pq.enqueue("test",63);
pq.enqueue("test",7);
