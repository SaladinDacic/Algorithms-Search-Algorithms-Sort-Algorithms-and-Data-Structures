//Objectives
// -Define what a binary heap is
// -Compare and contrast min and max heaps
// -Implement basic methods on heaps
// -Understand where heaps are used in real the world 
//  and what other data structures can be constructed from heaps

//What is binary heap?
// Very simlar to a binary search tree, but with some different rules!
//It have no order!
//In a MaxBinaryHeap, parent nodes are always larger than child nodes.
//In a MinBinaryHeap, parent nodes are always smaller than child nodes.


// MaxBinaryHeap
//Each parent has at most two child nodes
//The value of each parent node is always greater than its child nodes
//In a max Binary Heap the parent is greater than the children, but
//   there are no guarantees between sibling nodes.
//A binary heap is as compact as possible. All the children of each
//   node are as full as they can be and left children are filled out first

// Why?
//They are used to implement Priority Queues which are very commonly used data structures
//They are also used quite a bit, with graph traversal algorithms

//Formula to represent MaxBinaryHeap into array is: for 2 childs 2n+1; 2n+2 and oposite Math.floor(n-1)/2


//Push the value into the values property on the heap
//Bubble the value up to the correct spot!!
class MaxBinaryHeap{
    constructor(){
        this.values = [];
    }
    insert(val){
        this.values.push(val);
        this.bubbleUp(val);
        return this.values;
        
    }
    bubbleUp(element){
        let idxOfChild = this.values.length-1;
        while(idxOfChild > 0){
            let idxOfParent = Math.floor((idxOfChild-1)/2);
            let parent = this.values[idxOfParent];
            if(element<=parent)break;

            this.values[idxOfParent] = element;
            this.values[idxOfChild] = parent;
            idxOfChild = idxOfParent;
        }
    }
    extractMax(){
        let returnVal = this.values[0];
        [this.values[0],this.values[this.values.length-1]]=[this.values[this.values.length-1],this.values[0]]
        let arr = this.values;
        arr.pop();
        let rootIndex = 0;
        let firstChildIdx = rootIndex*2+1;
        let secoundChildIdx = rootIndex*2+2;

        this.sinkDown2(rootIndex,firstChildIdx,secoundChildIdx)
        console.log(arr)
        return returnVal;
    }
    sinkDown2(ri, fcIdx, scIdx){
        while(this.values[ri]<this.values[fcIdx] || this.values[ri] <this.values[scIdx]){
            if(this.values[fcIdx]>=this.values[scIdx]){
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
    }
    sinkDown(ri, fcIdx,scIdx){
            if(
                (this.values[ri]>this.values[fcIdx] && this.values[ri]>this.values[scIdx])
                ||(this.values[ri]>this.values[fcIdx] && this.values[scIdx]===undefined)
                ||(this.values[ri]>this.values[scIdx] && this.values[fcIdx]===undefined)
                ||(this.values[fcIdx]===undefined && this.values[scIdx]===undefined)
            ) return;
            let swap = false;
            if(
                this.values[fcIdx]>ri && this.values[fcIdx]>=this.values[scIdx]
                ||this.values[fcIdx]>ri && this.values[scIdx]===undefined
            ){
                [this.values[ri],this.values[fcIdx]]=[this.values[fcIdx],this.values[ri]];
                ri = fcIdx;
                fcIdx = ri*2+1;
                scIdx = ri*2+2;
                swap = true;
            }
            if(
                this.values[scIdx]>ri && this.values[scIdx]>=this.values[fcIdx]
                ||this.values[scIdx]>ri && this.values[fcIdx]===undefined
            ){
                [this.values[ri],this.values[scIdx]]=[this.values[scIdx],this.values[ri]];
                ri = scIdx;
                fcIdx = ri*2+1;
                scIdx = ri*2+2;
                swap = true;
            }
            if(!swap) return;
            this.sinkDown(ri,fcIdx,scIdx)
     }
}

var MBH = new MaxBinaryHeap();
MBH.insert(5);
MBH.insert(7);
MBH.insert(3);
MBH.insert(14);
MBH.insert(20);
MBH.insert(15);
MBH.insert(10);
MBH.insert(35);
MBH.insert(23);
MBH.insert(54);
MBH.insert(88);
MBH.insert(31);
MBH.insert(63);
MBH.insert(47);
