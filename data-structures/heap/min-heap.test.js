import Heap from './min-heap';

describe('Heap class', () => {
  test('insert method', () => {
    const heap = new Heap();

    heap.insert(8);
    heap.insert(10);
    heap.insert(11);
    heap.insert(7);
    heap.insert(9);
    heap.insert(5);

    expect(heap.values).toEqual([5, 8, 7, 10, 9, 11]);
  });
});
