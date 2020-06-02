class Graph {
  constructor() {
    this.adjList = {};
  }

  addVertex(value) {
    this.adjList[value] = {};
  }
}

export default Graph;
