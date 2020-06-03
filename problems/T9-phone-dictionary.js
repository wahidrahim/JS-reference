/* 
Your previous Plain Text content is preserved below:

https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Telephone-keypad2.svg/2560px-Telephone-keypad2.svg.png


Implement the following functions.

insert(word)           - inserts a word into the T9 dictionary
find(number)           - finds any words the number spells
find_by_prefix(number) - finds any words matching a the prefix number.


Phone keyword map https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Telephone-keypad2.svg/2560px-Telephone-keypad2.svg.png

Letter to number mapping - {"a": 2, "b": 2, "c": 2, "d": 3, "e": 3, "f": 3, "g": 4, "h": 4, "i": 4, "j": 5, "k": 5, "l": 5, "m": 6, "n": 6, "o": 6, "p": 7, "q": 7, "r": 7, "s": 7, "t": 8, "u": 8, "v": 8, "w": 9, "x": 9, "y": 9, "z": 9}
*/

const LETTER_MAP = {
  a: 2,
  b: 2,
  c: 2,
  d: 3,
  e: 3,
  f: 3,
  g: 4,
  h: 4,
  i: 4,
  j: 5,
  k: 5,
  l: 5,
  m: 6,
  n: 6,
  o: 6,
  p: 7,
  q: 7,
  r: 7,
  s: 7,
  t: 8,
  u: 8,
  v: 8,
  w: 9,
  x: 9,
  y: 9,
  z: 9,
};

class Node {
  words = [];
  children = {};
}

class T9Dictionary {
  root = new Node();

  /**
   * Inserts a word into the T9 dictionary
   * @param {string} word
   */
  insert(word) {
    let currentNode = this.root;

    for (const char of word.split('')) {
      const num = LETTER_MAP[char];

      if (!currentNode.children[num]) {
        currentNode.children[num] = new Node();
      }

      currentNode = currentNode.children[num];
    }

    currentNode.words.push(word);
  }

  /**
   * Finds any words the number spells
   * @param {number} number
   */
  find(number) {
    let currentNode = this.root;

    for (const num of number.toString().split('')) {
      if (currentNode.children[num]) {
        currentNode = currentNode.children[num];
      }
    }

    return currentNode.words;
  }

  /**
   * Finds any words matching a the prefix number
   * @param {number} number
   */
  findByPrefix(number) {
    let currentNode = this.root;

    for (const num of number.toString().split('')) {
      if (currentNode.children[num]) {
        currentNode = currentNode.children[num];
      } else {
        return null;
      }
    }

    return this.print(currentNode);
  }

  /**
   * Prints all words stored in the dictionary
   */
  print(node = this.root) {
    let results = [];

    /**
     * @param {Node} node
     */
    const recursivePrint = (node) => {
      if (node.words.length) {
        results = [...results, ...node.words];
      }

      for (const key in node.children) {
        recursivePrint(node.children[key]);
      }
    };

    recursivePrint(node);

    return results;
  }
}

export default T9Dictionary;
