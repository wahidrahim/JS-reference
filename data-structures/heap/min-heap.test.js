import Heap from './min-heap';

describe('MinHeap class', () => {
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

  test('extractMin method', () => {
    const heap = new Heap();

    heap.insert(8);
    heap.insert(10);
    heap.insert(11);
    heap.insert(7);
    heap.insert(9);
    heap.insert(5);

    expect(heap.extractMin()).toEqual(5);
    expect(heap.values).toEqual([7, 8, 11, 10, 9]);
  });
});
