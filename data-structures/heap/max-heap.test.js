import MaxHeap from './max-heap';

describe('MaxHeap class', () => {
  test('insert method', () => {
    const maxHeap = new MaxHeap();

    maxHeap.insert(1);

    expect(maxHeap.values).toEqual([1]);

    maxHeap.insert(11);
    maxHeap.insert(33);
    maxHeap.insert(9);

    expect(maxHeap.values).toEqual([33, 9, 11, 1]);

    maxHeap.insert(12);

    expect(maxHeap.values).toEqual([33, 12, 11, 1, 9]);

    maxHeap.insert(12);

    expect(maxHeap.values).toEqual([33, 12, 12, 1, 9, 11]);

    maxHeap.insert(12);

    expect(maxHeap.values).toEqual([33, 12, 12, 1, 9, 11, 12]);

    maxHeap.insert(33);

    expect(maxHeap.values).toEqual([33, 33, 12, 12, 9, 11, 12, 1]);

    maxHeap.insert(111);

    expect(maxHeap.values).toEqual([111, 33, 12, 33, 9, 11, 12, 1, 12]);

    maxHeap.insert(-1);

    expect(maxHeap.values).toEqual([111, 33, 12, 33, 9, 11, 12, 1, 12, -1]);
  });

  test('extractMax method', () => {
    const maxHeap = new MaxHeap();

    maxHeap.insert(1);
    maxHeap.insert(11);
    maxHeap.insert(33);
    maxHeap.insert(9);
    maxHeap.insert(12);
    maxHeap.insert(12);
    maxHeap.insert(12);
    maxHeap.insert(33);

    expect(maxHeap.extractMax()).toEqual(33);
    expect(maxHeap.values).toEqual([33, 12, 12, 1, 9, 11, 12]);
    expect(maxHeap.extractMax()).toEqual(33);
    expect(maxHeap.values).toEqual([12, 12, 12, 1, 9, 11]);
    expect(maxHeap.extractMax()).toEqual(12);
    expect(maxHeap.values).toEqual([12, 11, 12, 1, 9]);
    expect(maxHeap.extractMax()).toEqual(12);
    expect(maxHeap.values).toEqual([12, 11, 9, 1]);
    expect(maxHeap.extractMax()).toEqual(12);
    expect(maxHeap.values).toEqual([11, 1, 9]);
    expect(maxHeap.extractMax()).toEqual(11);
    expect(maxHeap.values).toEqual([9, 1]);
    expect(maxHeap.extractMax()).toEqual(9);
    expect(maxHeap.values).toEqual([1]);
    expect(maxHeap.extractMax()).toEqual(1);
    expect(maxHeap.values).toEqual([]);
  });
});
