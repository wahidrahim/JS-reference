import Graph from '.';

describe('Graph class', () => {
  test('addVertex() method', () => {
    const graph = new Graph();

    graph.addVertex('Toronto');
    graph.addVertex('Ottawa');
    graph.addVertex('Hamilton');
    graph.addVertex('Markham');
    graph.addVertex('Mississauga');

    expect(graph.adjencyList).toEqual({
      Toronto: [],
      Ottawa: [],
      Hamilton: [],
      Markham: [],
      Mississauga: [],
    });
  });

  test('addEdge() method', () => {
    const graph = new Graph();

    graph.addVertex('Toronto');
    graph.addVertex('Ottawa');
    graph.addVertex('Hamilton');
    graph.addVertex('Markham');

    graph.addEdge('Toronto', 'Ottawa');
    graph.addEdge('Toronto', 'Hamilton');
    graph.addEdge('Ottawa', 'Hamilton');
    graph.addEdge('Markham', 'Toronto');

    expect(graph.adjencyList).toEqual({
      Toronto: ['Ottawa', 'Hamilton', 'Markham'],
      Ottawa: ['Toronto', 'Hamilton'],
      Hamilton: ['Toronto', 'Ottawa'],
      Markham: ['Toronto'],
    });
  });

  test('removeEdge() method', () => {
    const graph = new Graph();

    graph.addVertex('Toronto');
    graph.addVertex('Ottawa');
    graph.addVertex('Hamilton');
    graph.addVertex('Markham');

    graph.addEdge('Toronto', 'Ottawa');
    graph.addEdge('Toronto', 'Hamilton');
    graph.addEdge('Ottawa', 'Hamilton');
    graph.addEdge('Markham', 'Toronto');

    graph.removeEdge('Ottawa', 'Toronto');
    graph.removeEdge('Hamilton', 'Ottawa');

    expect(graph.adjencyList).toEqual({
      Toronto: ['Hamilton', 'Markham'],
      Ottawa: [],
      Hamilton: ['Toronto'],
      Markham: ['Toronto'],
    });
  });

  test('removeVertex() method', () => {
    const graph = new Graph();

    graph.addVertex('Toronto');
    graph.addVertex('Ottawa');
    graph.addVertex('Hamilton');
    graph.addVertex('Markham');

    graph.addEdge('Toronto', 'Ottawa');
    graph.addEdge('Toronto', 'Hamilton');
    graph.addEdge('Ottawa', 'Hamilton');
    graph.addEdge('Markham', 'Toronto');

    graph.removeVertex('Ottawa');

    expect(graph.adjencyList).toEqual({
      Toronto: ['Hamilton', 'Markham'],
      Hamilton: ['Toronto'],
      Markham: ['Toronto'],
    });
  });
});
