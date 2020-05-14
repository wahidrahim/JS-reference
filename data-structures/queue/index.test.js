import Queue from '.';

describe('Queue', () => {
  test('enqueue()', () => {
    const queue = new Queue();

    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);

    const expectedQueue = {
      first: {
        data: 1,
        next: {
          data: 2,
          next: {
            data: 3,
            next: null,
          },
        },
      },
      last: {
        data: 3,
        next: null,
      },
      size: 3,
    };

    expect(JSON.stringify(queue)).toMatch(JSON.stringify(expectedQueue));
  });

  test('dequeue()', () => {
    const queue = new Queue();

    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);

    expect(queue.size).toBe(3);
    expect(queue.dequeue()).toBe(1);
    expect(queue.size).toBe(2);
    expect(queue.dequeue()).toBe(2);
    expect(queue.size).toBe(1);
    expect(queue.dequeue()).toBe(3);
    expect(queue.size).toBe(0);
    expect(queue.dequeue()).toBe(null);
  });
});
