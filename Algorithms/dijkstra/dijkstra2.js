// WITH REAL PRIORITY QUEUE
class Node {
  constructor(value, priority) {
    this.val = value
    this.priority = priority
  }
}

class PriorityQueue {
  constructor() {
    this.values = []
  }
  enqueue(val, priority) {
    let newNode = new Node(val, priority)
    this.values.push(newNode)
    this.bubbleUp()
  }

  bubbleUp() {
    let elementIdx = this.values.length - 1
    const element = this.values[elementIdx]
    while (elementIdx > 0) {
      const parentIdx = Math.floor((elementIdx - 1) / 2)
      const parent = this.values[parentIdx]
      if (element.priority >= parent.priority) break
      this.values[parentIdx] = element
      this.values[elementIdx] = parent
      elementIdx = parentIdx
    }
  }

  dequeue() {
    if (!this.values.length) return
    this.swap(0, this.values.length - 1)
    const oldNode = this.values.pop()
    this.bubbleDown()
    return oldNode
  }
  bubbleDown() {
    //trikle down
    let parentIdx = 0,
      childLeftIdx = 1,
      childRightIdx = 2
    //Math.max returns NaN is one of the arguments is undefined
    let min = Math.min(
      this.values[childLeftIdx]?.priority,
      this.values[childRightIdx]?.priority || Infinity
    )

    while (this.values[parentIdx]?.priority > min) {
      let childIdx = this.values[childLeftIdx]?.priority === min ? childLeftIdx : childRightIdx
      this.swap(parentIdx, childIdx)
      parentIdx = childIdx
      childLeftIdx = parentIdx * 2 + 1
      childRightIdx = parentIdx * 2 + 2
      min = Math.min(
        this.values[childLeftIdx]?.priority,
        this.values[childRightIdx]?.priority || Infinity
      )
    }
  }

  swap(inx1, inx2) {
    ;[this.values[inx1], this.values[inx2]] = [this.values[inx2], this.values[inx1]]
  }
}

class WeightedGraph {
  constructor() {
    this.adjacencyList = {}
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = []
  }
  addEdge(vertex1, vertex2, weight) {
    this.adjacencyList[vertex1].push({ node: vertex2, weight })
    this.adjacencyList[vertex2].push({ node: vertex1, weight })
  }

  dijkstra(startVertex, endVertex) {
    const nodes = new PriorityQueue()
    let distances = {}
    let previous = {}
    let path = [] // to return at the end
    let smallest
    // build up initial state
    for (let vertex in this.adjacencyList) {
      if (vertex === startVertex) {
        distances[vertex] = 0
        nodes.enqueue(vertex, 0)
      } else {
        distances[vertex] = Infinity
        nodes.enqueue(vertex, Infinity)
      }
      previous[vertex] = null
    }
    // as long as there is something to visit

    while (nodes.values.length) {
      smallest = nodes.dequeue().val
      if (smallest === endVertex) {
        // WE ARE DONE
        // BUILD UP PATH TO RETURN AT END
        while (previous[smallest]) {
          path.push(smallest)
          smallest = previous[smallest]
        }
        break
      }
      if (smallest || distances[smallest] !== Infinity) {
        for (let neighbor in this.adjacencyList[smallest]) {
          // find neighboring node
          let nextNode = this.adjacencyList[smallest][neighbor]
          // calculate distance to neighboring node
          let candidate = distances[smallest] + nextNode.weight
          let nextNeighbor = nextNode.node
          // compare to currently stored distance
          if (candidate < distances[nextNeighbor]) {
            // updating new smallest distance to neighbor
            distances[nextNeighbor] = candidate
            // updating previous - How we got to neighbor
            previous[nextNeighbor] = smallest
            // enqueue in priority queue with new priority
            nodes.enqueue(nextNeighbor, candidate)
          }
        }
      }
    }
    return path.concat(smallest).reverse()
  }
}

let graph = new WeightedGraph()

graph.addVertex('A')
graph.addVertex('B')
graph.addVertex('C')
graph.addVertex('D')
graph.addVertex('E')
graph.addVertex('F')

graph.addEdge('A', 'B', 4)
graph.addEdge('A', 'C', 2)
graph.addEdge('B', 'E', 3)
graph.addEdge('C', 'D', 2)
graph.addEdge('C', 'F', 4)
graph.addEdge('D', 'E', 3)
graph.addEdge('D', 'F', 1)
graph.addEdge('E', 'F', 1)

// g.dijkstra('A', 'E');
