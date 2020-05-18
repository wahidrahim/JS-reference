class Graph {
  adjList = null;

  constructor() {
    this.adjList = {};
  }

  addVertex(v) {
    this.adjList[v] = [];
  }

  addEdge(v1, v2) {
    this.adjList[v1].push(v2);
    this.adjList[v2].push(v1);
  }

  removeEdge(v1, v2) {
    this.adjList[v1] = this.adjList[v1].filter((v) => v !== v2);
    this.adjList[v2] = this.adjList[v2].filter((v) => v !== v1);
  }

  removeVertex(v) {
    this.adjList[v].forEach((childV) => this.removeEdge(v, childV));
    delete this.adjList[v];
  }

  dfs() {
    const visited = [];
    const firstVertex = Object.keys(this.adjList)[0];
    const recursDFS = (v) => {
      if (v && !visited.includes(v)) {
        visited.push(v);
        this.adjList[v].forEach((vChild) => recursDFS(vChild));
      }
    };

    recursDFS(firstVertex);

    return visited;
  }
}

export default Graph;
