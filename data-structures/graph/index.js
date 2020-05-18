class Graph {
  adjList = null;

  constructor() {
    this.adjList = new Map();
  }

  addVertex(v) {
    if (!this.adjList.has(v)) {
      this.adjList.set(v, []);
    }
  }

  addEdge(v1, v2) {
    this.adjList.get(v1).push(v2);
    this.adjList.get(v2).push(v1);
  }

  removeEdge(v1, v2) {
    this.adjList.set(
      v1,
      this.adjList.get(v1).filter((v) => v !== v2)
    );
    this.adjList.set(
      v2,
      this.adjList.get(v2).filter((v) => v !== v1)
    );
  }

  removeVertex(v) {
    if (this.adjList.has(v)) {
      this.adjList.get(v).forEach((adjecentVertex) => {
        this.removeEdge(v, adjecentVertex);
      });

      this.adjList.delete(v);
    }
  }

  dfs() {
    const visited = [];

    const recursiveDFS = (vName) => {
      if (vName && !visited.includes(vName)) {
        visited.push(vName);

        this.adjList.get(vName).forEach((vName) => recursiveDFS(vName));
      }
    };

    recursiveDFS(this.adjList.keys().next().value);

    return visited;
  }
}

export default Graph;
