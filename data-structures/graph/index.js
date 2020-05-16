class Graph {
  adjencyList = null;

  constructor() {
    this.adjencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjencyList[vertex]) {
      this.adjencyList[vertex] = [];
    }
  }

  addEdge(vertex1, vertex2) {
    this.adjencyList[vertex1].push(vertex2);
    this.adjencyList[vertex2].push(vertex1);
  }

  removeEdge(vertex1, vertex2) {
    this.adjencyList[vertex1] = this.adjencyList[vertex1].filter(
      (vertex) => vertex !== vertex2
    );
    this.adjencyList[vertex2] = this.adjencyList[vertex2].filter(
      (vertex) => vertex !== vertex1
    );
  }

  removeVertex(vertex) {
    this.adjencyList[vertex].forEach((connection) => {
      this.removeEdge(vertex, connection);
    });

    delete this.adjencyList[vertex];
  }
}

export default Graph;
