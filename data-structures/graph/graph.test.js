import Graph from '.';

function addVertices(graph) {
  graph.addVertex('a');
  graph.addVertex('b');
  graph.addVertex('c');
  graph.addVertex('d');
  graph.addVertex('e');
}

function addEdges(graph) {
  graph.addEdge('a', 'c');
  graph.addEdge('a', 'd');
  graph.addEdge('a', 'e');
  graph.addEdge('b', 'c');
  graph.addEdge('b', 'e');
  graph.addEdge('c', 'e');
  graph.addEdge('d', 'e');
}

describe('Graph class', () => {
  test('insert method', () => {
    const graph = new Graph();

    addVertices(graph);

    expect(graph.adjList).toEqual({
      a: [],
      b: [],
      c: [],
      d: [],
      e: [],
    });
  });

  test('connect method', () => {
    const graph = new Graph();

    addVertices(graph);
    addEdges(graph);

    expect(graph.adjList).toEqual({
      a: ['c', 'd', 'e'],
      b: ['c', 'e'],
      c: ['a', 'b', 'e'],
      d: ['a', 'e'],
      e: ['a', 'b', 'c', 'd'],
    });
  });

  test('DFS method', () => {
    const graph = new Graph();

    addVertices(graph);
    addEdges(graph);

    expect(graph.DFS()).toEqual(['a', 'c', 'b', 'e', 'd']);
  });

  test('BFS method', () => {
    const g = new Graph();
    const vertices = ['A', 'B', 'C', 'D', 'E', 'F'];

    // adding vertices
    for (let i = 0; i < vertices.length; i++) {
      g.addVertex(vertices[i]);
    }

    // adding edges
    g.addEdge('A', 'B');
    g.addEdge('A', 'D');
    g.addEdge('A', 'E');
    g.addEdge('B', 'C');
    g.addEdge('D', 'E');
    g.addEdge('E', 'F');
    g.addEdge('E', 'C');
    g.addEdge('C', 'F');

    expect(g.BFS()).toEqual(['A', 'B', 'D', 'E', 'C', 'F']);
  });
});
