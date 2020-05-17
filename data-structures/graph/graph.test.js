import Graph from '.';

describe('Graph class', () => {
  test('addVertex() method', () => {
    const graph = new Graph();

    graph.addVertex('Toronto');
    graph.addVertex('Ottawa');
    graph.addVertex('Hamilton');
    graph.addVertex('Markham');
    graph.addVertex('Mississauga');

    const expectedMap = new Map([
      ['Toronto', []],
      ['Ottawa', []],
      ['Hamilton', []],
      ['Markham', []],
      ['Mississauga', []],
    ]);

    expect(graph.adjencyList).toEqual(expectedMap);
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

    const expectedMap = new Map([
      ['Toronto', ['Ottawa', 'Hamilton', 'Markham']],
      ['Ottawa', ['Toronto', 'Hamilton']],
      ['Hamilton', ['Toronto', 'Ottawa']],
      ['Markham', ['Toronto']],
    ]);

    expect(graph.adjencyList).toEqual(expectedMap);
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

    const expectedMap = new Map([
      ['Toronto', ['Hamilton', 'Markham']],
      ['Ottawa', []],
      ['Hamilton', ['Toronto']],
      ['Markham', ['Toronto']],
    ]);

    expect(graph.adjencyList).toEqual(expectedMap);
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

    const expectedMap = new Map([
      ['Toronto', ['Hamilton', 'Markham']],
      ['Hamilton', ['Toronto']],
      ['Markham', ['Toronto']],
    ]);

    expect(graph.adjencyList).toEqual(expectedMap);
  });
});
