//Objectives
//-Explain what a graph is
//-Compare and contrast different types of graphs and their use cases in the real world
//-Implement a graph using an adjacency list
//-Traverse through a graph using BFS and DFS
//-Compare and contrast graph traversal alogrithms

// What are graphs?
//A graph data structure consists of a fine (and possibly mutable) set
//   of vertices or nodes or pointers, together with a set of unordered
//   pairs of those vertices for an undirected GRAPH or set of ordered
//   pairs for a directed GRAPH.
//  ----> = Nodes + connections

//Uses for graphs:
//-Social Networks
//-Location/Mapping
//-Routing Algorithms
//-Visual Hierarchy
//-File System Optimizations
//-Recommendations
//--EVERYWHERE!

//Essential graph terms
//- Vertex ----> is a node
//- Edge ------> is a connection between nodes
//- weighted / unweighted --> values assigned to distances between vertices npr. Google Maps (edges imaju broj kilometara između tačaka na mapi)
//   weighted ---> graph u kojem su edges numerisani tj. sadrže neki value; unweighted ---> kada edges ne sadrže nikakav value
//- directed / undirected --> directions assigned to distanced between vertices
//   directed ----> graph gdje je edge u samo jednom smjeru, npr. Instagram follows; undirected ---> edges su u oba smjera npr. facebook tj. nisu definisani

//Adjacency Matrix (dvodimenzinalna struktura uobičajno prikazana kao nested arrays ali ne uvijek; i mi u njoj storamo informacije koz ROWs and COLUMNs)
//  A B C D E
//A 0 1 0 0 1   ovo je primjer undirected graph-a (brojevi su simetrični)  
//B 1 0 1 0 0   jer postoji poveznica i odozgo i odozdo npr. C i D 
//C 0 1 0 1 0   tj. možemo vidjeti jesu li povezani ako krenemo gledati C
//D 0 0 1 0 1   ili ako krenemo gledati D; Doći ćemo na isti rezultat
//E 1 0 0 1 0

//Adjacency List 
//       [[1,5],[0,2],[1,3],[2,4],[3,5],[4,0]]
// index    0     1     2     3     4     5
// a za tip podataka koji nije broj koristimo hash funkciju da storamo podatke na pravo mjesto
// {A:["B","F"], B:["A","C"], C:["B","D"], D:["C","E"], E:["D","F"], F:["E","A"]}

// Adjacency List:     -Can take up less space - faster to iterate over all edges  - can be slower to lookup specific edge 
//       VS
// Adjacency Matrix:   -Takes up more space    - slower to iterate over all edges  - faster to lookup specific edge

//Adding a vertex:
// -Write a method called addVertex, which accepts a name of a vertex
// -It should add a key to the adjacency list with the name of the vertex and set its value to be an empty array
//Adding an edge 
// -This function should accept two vertices, we can call them vertex1 and vertex2
// -The function should find in the adjacency list the key of vertex1 and push vertex2 to the array
// -and oposite
class Graph {
    constructor(){
        this.adjacencyList = {}
    }
    addVertex(vertex){
        if(this.adjacencyList[vertex])return "already there";
        this.adjacencyList[vertex] = [];
    }
    addEdge(vertex1,vertex2){
        if(this.adjacencyList[vertex1] && this.adjacencyList[vertex2] && !this.adjacencyList[vertex1].includes(vertex2)){
            this.adjacencyList[vertex1].push(vertex2);
            this.adjacencyList[vertex2].push(vertex1);
            return this;
        }else return "One or both of vertices does not exist or connection is already there"
    }
    removeEdge(vertex1, vertex2){
        if(this.adjacencyList[vertex1].includes(vertex2) && this.adjacencyList[vertex2].includes(vertex1)){
            this.adjacencyList[vertex1]= this.adjacencyList[vertex1].filter(val=>val !== vertex2);
            this.adjacencyList[vertex2]= this.adjacencyList[vertex2].filter(val=>val !== vertex1);
            return this;
        }else return "There is no valid edge between them"
    }
    removeVertex(vertex){
        if(this.adjacencyList[vertex]){
            this.adjacencyList[vertex].forEach(vertex2=>{
                this.removeEdge(vertex, vertex2)
            })
            delete this.adjacencyList[vertex];
            return this;
        }else return "vertex not found"
    }
    DFSrecursion(vertex="A"){
        let resultList = [];
        let visited = {};
        const repeatDFS = (vertex)=>{
//             if(this.adjacencyList[vertex].length===0){console.log(`I'll now exit from ${vertex}`); return;}
            resultList.push(vertex);
            visited[vertex] = true;
            this.adjacencyList[vertex].forEach(connection=>{
                if(!visited[connection]){
                    repeatDFS(connection);
                }
            })
        }
        repeatDFS(vertex);
        return resultList
    }
    DFSwhile(vertex="A"){
        let resultList = [];
        let visited = {};
        let stack = [];
        stack.push(vertex);
        while (stack.length > 0){
            vertex = stack.pop();
            if(!visited[vertex]){
                resultList.push(vertex);
                visited[vertex] = true;
                this.adjacencyList[vertex].forEach(connection=>{
                    stack.push(connection);
                })
            }
        }
        return resultList;
    }
    BFSrecursion(vertex = "A"){
        const queue = [];
        const resultList = [];
        const visited = {};
        let adjacencyList = this.adjacencyList;
        (function repeat(vertex){
//             if(queue.length === 0) return;
            queue.push(vertex);
            let takeFirst = queue.shift();
            resultList.push(vertex);
            visited[vertex]=true;
            adjacencyList[takeFirst].slice().reverse().forEach(connection=>{
                if(!visited[connection]){
                    queue.push(connection);
                }
            })
            queue.forEach(nextVertex=>{
                if(!visited[nextVertex]){
                    repeat(nextVertex);
                }
            })
        })(vertex)
        return resultList
    }
    BFSwhileColt(start="A"){
        const queue = [start];
        const result = [];
        const visited = {};
        let currentVertex;
        while(queue.length){
            currentVertex = queue.shift();
            result.push(currentVertex);
            visited[currentVertex] = true;
            this.adjacencyList[currentVertex].slice().reverse().forEach(neighbor=>{
                if(!visited[neighbor]){
                    visited[neighbor] = true;
                    queue.push(neighbor);
                }
            })
        }
        return result;
    }
}

var graph = new Graph();
// graph.addVertex("Mekka");
// graph.addVertex("Sarajevo");
// graph.addVertex("Sjenica");
// graph.addVertex("Pazar");
// graph.addVertex("Bihać");
// graph.addVertex("Mostar");
// graph.addEdge("Mekka", "Sarajevo");
// graph.addEdge("Sjenica", "Mekka");
// graph.addEdge("Pazar", "Mekka");
// graph.addEdge("Pazar", "Sjenica");
// graph.addEdge("Sarajevo", "Pazar");
// graph.addEdge("Sjenica", "Sarajevo");
// graph.addEdge("Sarajevo", "Bihać");
// graph.addEdge("Mostar", "Bihać");
// graph.addEdge("Pazar", "Mostar");
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");

graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("B", "D");
graph.addEdge("C", "E");
graph.addEdge("D", "E");
graph.addEdge("D", "F");
graph.addEdge("E", "F");

//Graph traversal uses
// -Peer to peer networking
// -Web crawlers
// -Finding "closest"
// -matches/recommendations
//-Shorth path problems
//    -GPS Navigation
//    -Solving mazes
//    -Ai (shortest path to win the game)