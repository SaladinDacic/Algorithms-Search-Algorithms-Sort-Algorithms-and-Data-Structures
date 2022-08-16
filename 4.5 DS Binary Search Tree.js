//Trees----> non-linear data sructures that contain a root and child nodes
//-Binary trees can have values of any type, but at most two children for each parent
// We can treverse trees using:
// -Breadth-first Search
// -Depth-first Search

//Lot of different applications!
//-HTML DOM (document object model)
//-Netvor Routing
//-Abstract syntax tree
//-Artifical Intelligence ( Iks Oks primjer)
//-Folders in operating system
//-JSON
//-...

//Types:
//Trees ----> non-linear data sructures that contain a root and child nodes
//Binary Trees (Svaki node može imati maximalno 2 childrena 0, 1 i 2)
//Binary Search Trees (je specijalni BT u kojem je data sortiran pa ga je lako pretraživati)
//    sortiran na način da je svaki veći broj na desnoj strani od parent node.a
//    a manji broj na lijevoj strani node.a, te se taj postupak ponavlja kao relacija 
//    između svakoj parent-children odnosa

class Node{
    constructor(val){
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree{
    constructor(){
        this.root = null;
    }
    insert(val){
        let node = new Node(val);
        let current = this.root;
        while(true){
            if(current===null){this.root = node; return this;};
            if(val === current.val) return "Already there!!";
            if(val > current.val){
                if(current.right === null){current.right = node; return this;}
                else{current = current.right;}
            };
            if(val < current.val){
                if(current.left === null){current.left = node; return this;}
                else{current = current.left;}
            };
        }
    }
    find(val){
        let current = this.root;
        while(true){
            if(!val) return false;
            if(!current.left && !current.right && current.val !== val){return false;};
            if(val === current.val) return true;
            if(val > current.val){
                if(current.right !== null){current = current.right}
                else return null
            }
            if(val < current.val){
                if(current.left !== null){current = current.left}
                else return null
            }
        }
    }
    BFS(){
        let queue=[];
        let visited=[];
        let current = this.root;
        queue.push(current);
        (function repeat (){
            if(queue.length === 0)return;
            let dequeued = queue.shift();
            visited.push(dequeued.val)
            if(dequeued.left)queue.push(dequeued.left)
            if(dequeued.right)queue.push(dequeued.right)
            repeat()
        })()
        return visited;
    }
    DFS_PreOrder(){
        let visited=[];
        let current = this.root;
        (function repeat(node){
            visited.push(node.val)
            if(node.left)repeat(node.left);
            if(node.right)repeat(node.right);
        })(current)
        return visited;
    }
    DFS_PostOrder(){
        let visited=[];
        (function repeat(node){
            if(node.left)repeat(node.left);
            if(node.right)repeat(node.right);
            visited.push(node.val)
        })(this.root)
        return visited;
    }
}

var tree = new BinarySearchTree();
tree.insert(10)
tree.insert(6)
tree.insert(15)
tree.insert(3)
tree.insert(8)
tree.insert(20)
// tree.insert(7)
// tree.insert(25)
// tree.insert(14)
// tree.insert(11)
// tree.root = new Node(10);
// tree.root.right = new Node(15);
// tree.root.left = new Node(7);
// tree.root.left.right = new Node(9);