//Objectives
//-Understand the importance of Dijkstra's algorithm
//-Implement a Weighted Graph
//-Walk through the steps of Dijkstra's
//-implement Dijkstra's using naive priority queue
//-Implement Dijkstra's using a binary heap priority queue

// What is it
//Finds the shortest path between two vertices on a grap
//"What's the fastest way to get from point A to point B?"

//Edsger Dijkstra was a Dutch programmer, physicist, essayist, and all around smarty-pants
//He helped to advance the field of computer science from an "art" to an academic discipline

// Why is it useful?
// -GPS - finding fastest route
// -Netvork Routing - finds open shortest path for data
// -Biology - used to model the spread of viruses among humans
// -Airline tickets - finding cheapest route to your destination
// -...
class PriorityQueueSimple{
    constructor(){
        this.values = [];
    }
    enqueue(val, priority){
        this.values.push({val,priority});
        this.sort();
    };
    dequeue(){
        return this.values.shift();
    };
    sort(){
        this.values.sort((a,b)=>a.priority - b.priority);
    }
}
class WeightedGraph{
    constructor(){
        this.adjacencyList = {};
    }
    addVertex(vertex){
        if(this.adjacencyList[vertex])return "already there";
        this.adjacencyList[vertex] = [];
    }
    addEdge(vertex1, vertex2, weight){
            this.adjacencyList[vertex1].push({node:vertex2,weight:weight});
            this.adjacencyList[vertex2].push({node:vertex1,weight:weight});
            return this;
    }
    dijkstra(start="A", finish="E"){
        let distances = {}
        let nodes = new PriorityQueue();
        let previous = {}
        let smallest;
        let path = []; //to return at the end
        Object.keys(this.adjacencyList).forEach(vertex=>{
            if(vertex === start){
                distances[vertex] = 0;
                nodes.enqueue(vertex,0)
            }else{
                distances[vertex] = Infinity;
                nodes.enqueue(vertex,Infinity)
            }
            previous[vertex] = null;
        })
        while(nodes.values){
            smallest = nodes.values.shift().val;
            if(smallest === finish){
                //WE are done; 
                //Build path to return
                while(previous[smallest]){
                    path.push(smallest)
                    smallest = previous[smallest]
                }
                path.push(start)
                return path.reverse();
            }
            if(smallest || distances[smallest] !== Infinity){
                //find neighbor nodes
               this.adjacencyList[smallest].forEach(neighbor=>{
                   //Calculate new distance to neighbor node
                   let candidate = distances[smallest] + neighbor.weight
                   if(candidate<distances[neighbor.node]){
                       //updating new smallest distance to neighbor
                       distances[neighbor.node]=candidate;
                       //updating previous - How we got to neighbor
                       previous[neighbor.node]=smallest;
                       //enqueue in priority queue with new priority
                       nodes.enqueue(neighbor.node, candidate)
                   }
                }) 
            }
            
        }  
    }
}

//The approach
// 1. Every time we look to visit a new node, we  pick the node with smallest known distance to visit first.
// 2. Once we've moved to the node we're going to visit, we look at each of its neighbors
// 3. For Each neighboring node, we calculate the distance by summing the total edges 
//    that lead to the node we're checking from the starting node.
// 4. If the new total distance to a node is less than the previous total, 
//    we store the new shorter distance for that node.




//_____________________________________________________________________________________________
//PriorityQueue
class Node{
    constructor(val, priority){
        this.val = val;
        this.priority = priority;
    }
}
class PriorityQueue {
    constructor(){
        this.values = [];
    }
    enqueue(val, priority){
        let newNode = new Node(val, priority);
        this.values.push(newNode);
        this.bubbleUp();
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

var graph = new WeightedGraph();
graph.addVertex("A")
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");

graph.addEdge("A", "B", 4);
graph.addEdge("A", "C", 2);
graph.addEdge("B", "E", 3);
graph.addEdge("C", "D", 2);
graph.addEdge("C", "F", 4);
graph.addEdge("D", "E", 3);
graph.addEdge("D", "F", 1);
graph.addEdge("E", "F", 1);
