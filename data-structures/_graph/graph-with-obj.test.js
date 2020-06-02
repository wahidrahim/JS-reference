// import Graph from './graph-with-obj';
import Graph from './graph';

describe('Graph class', () => {
  test('addVertex() method', () => {
    const graph = new Graph();

    graph.addVertex('A');
    graph.addVertex('B');
    graph.addVertex('C');
    graph.addVertex('D');
    graph.addVertex('E');

    const expectedMap = {
      A: [],
      B: [],
      C: [],
      D: [],
      E: [],
    };

    expect(graph.adjList).toEqual(expectedMap);
  });

  test('addEdge() method', () => {
    const graph = new Graph();

    graph.addVertex('A');
    graph.addVertex('B');
    graph.addVertex('C');
    graph.addVertex('D');

    graph.addEdge('A', 'B');
    graph.addEdge('A', 'C');
    graph.addEdge('B', 'C');
    graph.addEdge('D', 'A');

    const expectedMap = {
      A: ['B', 'C', 'D'],
      B: ['A', 'C'],
      C: ['A', 'B'],
      D: ['A'],
    };

    expect(graph.adjList).toEqual(expectedMap);
  });

  test('removeEdge() method', () => {
    const graph = new Graph();

    graph.addVertex('A');
    graph.addVertex('B');
    graph.addVertex('C');
    graph.addVertex('D');

    graph.addEdge('A', 'B');
    graph.addEdge('A', 'C');
    graph.addEdge('B', 'C');
    graph.addEdge('D', 'A');

    graph.removeEdge('B', 'A');
    graph.removeEdge('C', 'B');

    const expectedMap = {
      A: ['C', 'D'],
      B: [],
      C: ['A'],
      D: ['A'],
    };

    expect(graph.adjList).toEqual(expectedMap);
  });

  test('removeVertex() method', () => {
    const graph = new Graph();

    graph.addVertex('A');
    graph.addVertex('B');
    graph.addVertex('C');
    graph.addVertex('D');

    graph.addEdge('A', 'B');
    graph.addEdge('A', 'C');
    graph.addEdge('B', 'C');
    graph.addEdge('D', 'A');

    graph.removeVertex('B');

    const expectedMap = {
      A: ['C', 'D'],
      C: ['A'],
      D: ['A'],
    };

    expect(graph.adjList).toEqual(expectedMap);
  });

  test('depth first search', () => {
    const graph = new Graph();

    graph.addVertex('A');
    graph.addVertex('B');
    graph.addVertex('C');
    graph.addVertex('D');
    graph.addVertex('E');
    graph.addVertex('F');

    graph.addEdge('A', 'B');
    graph.addEdge('A', 'D');
    graph.addEdge('A', 'E');
    graph.addEdge('B', 'C');
    graph.addEdge('D', 'E');
    graph.addEdge('E', 'F');
    graph.addEdge('E', 'C');
    graph.addEdge('C', 'F');

    expect(graph.dfs()).toEqual(['A', 'B', 'C', 'E', 'D', 'F']);
  });

  // test('depth first search - iterative', () => {
  //   const graph = new Graph();

  //   graph.addVertex('A');
  //   graph.addVertex('B');
  //   graph.addVertex('C');
  //   graph.addVertex('D');
  //   graph.addVertex('E');
  //   graph.addVertex('F');

  //   graph.addEdge('A', 'B');
  //   graph.addEdge('A', 'D');
  //   graph.addEdge('A', 'E');
  //   graph.addEdge('B', 'C');
  //   graph.addEdge('D', 'E');
  //   graph.addEdge('E', 'F');
  //   graph.addEdge('E', 'C');
  //   graph.addEdge('C', 'F');

  //   expect(graph.dfsIterative()).toEqual(['A', 'E', 'C', 'F', 'D', 'B']);
  // });

  test('breadth first search', () => {
    const graph = new Graph();

    graph.addVertex('A');
    graph.addVertex('B');
    graph.addVertex('C');
    graph.addVertex('D');
    graph.addVertex('E');
    graph.addVertex('F');

    graph.addEdge('A', 'B');
    graph.addEdge('A', 'D');
    graph.addEdge('A', 'E');
    graph.addEdge('B', 'C');
    graph.addEdge('D', 'E');
    graph.addEdge('E', 'F');
    graph.addEdge('E', 'C');
    graph.addEdge('C', 'F');

    expect(graph.bfs()).toEqual(['A', 'B', 'D', 'E', 'C', 'F']);
  });
});
