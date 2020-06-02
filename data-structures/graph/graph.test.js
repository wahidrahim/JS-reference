import Graph from './graph';

describe('graph class', () => {
  test('adding a vertex', () => {
    const graph = new Graph();

    graph.addVertex(1);
    graph.addVertex(2);
    graph.addVertex(3);

    expect(graph.adjList).toEqual({
      1: {},
      2: {},
      3: {},
    });
  });
});
