// Traversing Tree
// -Breadth-first Search
// -Depth-first Search

// BFS
//create a queue (this cam be array) amd a variable to store the values of node visited
//Place the root node in the queue
//Loop as long as there is anysthing in queue
// -Dequeue a node from the queque and push the value of node
//  into the variable that stores the nodes
// -If there is a left property on the node dequeued -add it to the queue
// -if there is a right property on the node dequeued -add it to the queue

// DFS - PreOrder //dobar ako hoćemo duplicirati tree; bukvalno ubacuješ values po redosljedu iz arraya
//create a variable to store the values visited
//store the root of the BST(tree) in a variable callled current
//Write a helper function of the node to the variable that stores the values
//  -Push the value of the node to the variable that stores the values
//  -If the node has a left property, call the helper function with 
//   the left property on the node
//  -If the node has a right property, call the helper function with
//   the right property on the node
//Invoke the helper function with the current variable
//Return the array of values

// DFS - PostOrder
//create a variable to store the values visited
//store the root of the BST(tree) in a variable callled current
//Write a helper function of the node to the variable that stores the values
//  -If the node has a left property, call the helper function with 
//   the left property on the node
//  -If the node has a right property, call the helper function with
//   the right property on the node
//  -Push the value of the node to the variable that stores the values
//Invoke the helper function with the current variable
//Return the array of values

// DFS - InOrder //dobar za soriranje jer daje rezultat sortiran ako je binary tree u pitanju
//create a variable to store the values visited
//store the root of the BST(tree) in a variable callled current
//Write a helper function of the node to the variable that stores the values
//  -If the node has a left property, call the helper function with 
//   the left property on the node
//  -Push the value of the node to the variable that stores the values
//  -If the node has a right property, call the helper function with
//   the right property on the node
//Invoke the helper function with the current variable
//Return the array of values