// Nodes: JavaScript

// Creates a basic node that contains data and one link to another node.
// Node’s link to the next node is null when there are no nodes to traverse.

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
    setNextNode(node) {
        if (node instanceof Node || node === null) {
            this.next = node;
        } else {
            throw new Error('Next node must be a member of the Node class.');
        }
    }
    getNextNode() {
        return this.next;
    }
}

const firstNode = new Node('firstNode');
const secondNode = new Node('secondNode');
const thirdNode = new Node('thirdNode');

firstNode.setNextNode(secondNode);
secondNode.setNextNode(thirdNode);

let currentNode =  firstNode;
while (currentNode !== null) {
    console.log(currentNode.data);
    currentNode = currentNode.getNextNode();
}