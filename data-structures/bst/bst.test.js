import BST from '.';

describe('BST', () => {
  test('insert()', () => {
    const bst = new BST();

    bst.insert(5);
    bst.insert(3);
    bst.insert(7);
    bst.insert(6);
    bst.insert(8);
    bst.insert(4);
    bst.insert(5);

    const expectedBST = {
      root: {
        value: 5,
        left: {
          value: 3,
          left: null,
          right: {
            value: 4,
            left: null,
            right: null,
          },
        },
        right: {
          value: 7,
          left: {
            value: 6,
            left: null,
            right: null,
          },
          right: {
            value: 8,
            left: null,
            right: null,
          },
        },
      },
    };

    expect(bst).toMatchObject(expectedBST);
  });

  test('inOrderArray()', () => {
    const bst = new BST();

    bst.insert(5);
    bst.insert(3);
    bst.insert(7);
    bst.insert(6);
    bst.insert(8);
    bst.insert(4);

    expect(bst.inOrderArray()).toEqual([3, 4, 5, 6, 7, 8]);
  });

  test('bfsArray', () => {
    const bst = new BST();

    bst.insert(5);
    bst.insert(3);
    bst.insert(7);
    bst.insert(6);
    bst.insert(8);
    bst.insert(4);

    expect(bst.bfsArray()).toEqual([5, 3, 7, 4, 6, 8]);
  });

  test('preOrderArray', () => {
    const bst = new BST();

    bst.insert(5);
    bst.insert(3);
    bst.insert(7);
    bst.insert(6);
    bst.insert(8);
    bst.insert(4);

    expect(bst.preOrderArray()).toEqual([5, 3, 4, 7, 6, 8]);
  });

  test('preOrderArray', () => {
    const bst = new BST();

    bst.insert(5);
    bst.insert(3);
    bst.insert(7);
    bst.insert(6);
    bst.insert(8);
    bst.insert(4);

    expect(bst.postOrderArray()).toEqual([4, 3, 6, 8, 7, 5]);
  });
});
