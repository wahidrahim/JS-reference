class Graph {
  adjencyList = null;

  constructor() {
    this.adjencyList = new Map();
  }

  addVertex(vertex) {
    if (!this.adjencyList.has(vertex)) {
      this.adjencyList.set(vertex, []);
    }
  }

  addEdge(vertex1, vertex2) {
    this.adjencyList.get(vertex1).push(vertex2);
    this.adjencyList.get(vertex2).push(vertex1);
  }

  removeEdge(vertex1, vertex2) {
    this.adjencyList.set(
      vertex1,
      this.adjencyList.get(vertex1).filter((vertex) => vertex !== vertex2)
    );
    this.adjencyList.set(
      vertex2,
      this.adjencyList.get(vertex2).filter((vertex) => vertex !== vertex1)
    );
  }

  removeVertex(vertex) {
    if (this.adjencyList.has(vertex)) {
      this.adjencyList.get(vertex).forEach((adjecentVertex) => {
        this.removeEdge(vertex, adjecentVertex);
      });

      this.adjencyList.delete(vertex);
    }
  }
}

export default Graph;
