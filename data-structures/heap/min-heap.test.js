import Heap from './min-heap';

describe('Heap class', () => {
  test('insert method', () => {
    const heap = new Heap();

    heap.insert(1);

    expect(heap.values).toEqual([1]);

    heap.insert(11);
    heap.insert(33);
    heap.insert(9);

    expect(heap.values).toEqual([1, 9, 33, 11]);
  });
});
