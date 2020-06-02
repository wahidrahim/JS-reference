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
    this.adjList[v].forEach((adjV) => this.removeEdge(v, adjV));
    delete this.adjList[v];
  }

  dfs() {
    const firstNode = Object.keys(this.adjList)[0];
    const result = [];
    const visited = {};

    const recursiveDFS = (vertex) => {
      visited[vertex] = true;
      result.push(vertex);

      this.adjList[vertex].forEach((adjV) => {
        if (!visited[adjV]) {
          recursiveDFS(adjV);
        }
      });
    };

    recursiveDFS(firstNode);

    return result;
  }

  bfs() {
    const firstVertex = Object.keys(this.adjList)[0];
    const result = [];
    const visited = {};
    const queue = [firstVertex];

    visited[firstVertex] = true;

    while (queue.length) {
      const v = queue.shift();

      result.push(v);

      this.adjList[v].forEach((adjV) => {
        if (!visited[adjV]) {
          visited[adjV] = true;
          queue.push(adjV);
        }
      });
    }

    return result;
  }
}

export default Graph;
