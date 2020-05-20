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
    const result = [];
    const visited = {};
    const firstVertex = Object.keys(this.adjList)[0];
    const recursDFS = (v) => {
      visited[v] = true;
      result.push(v);
      this.adjList[v].forEach((vChild) => {
        if (!visited[vChild]) {
          recursDFS(vChild);
        }
      });
    };

    recursDFS(firstVertex);

    return result;
  }

  dfsIterative() {
    const result = [];
    const stack = [];
    const visited = {};
    const firstVertex = Object.keys(this.adjList)[0];

    stack.push(firstVertex);

    while (stack.length) {
      const v = stack.pop();

      if (!visited[v]) {
        visited[v] = true;
        result.push(v);

        this.adjList[v].forEach((vChild) => stack.push(vChild));
      }
    }

    console.log(result);
    return result;
  }
}

export default Graph;
