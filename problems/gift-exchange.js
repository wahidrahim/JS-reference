/**
 * You are tasked with organizing a gift exchange among friends; every member of the group has to both give, and receive, a gift from among the others.
 *
 * The only rule is that one can not receive a gift from the same person to whom they give a gift.
 *
 * Write a solution for the above requirements for groups of varying sizes using Javascript. Remember to account for edge cases that would make the above rules impossible to follow.
 *
 * example input:
 * ['Susan', 'Beth', 'Abe', 'Ardi', 'Quan']
 *
 * example output:
 * Abe gives a gift to Quan
 * Ardi gives a gift to Beth
 * Susan gives a gift to Abe
 * Quan gives a gift to Ardi
 * Beth gives a gift to Susan
 */

import assert from 'assert';

class Person {
  /**
   * @param {string} name
   */
  constructor(name) {
    this.name = name;
    this.givesTo = null;
  }
}

class ExchangeCircle {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  addPerson(name: string): number {
    const newPerson = new Person(name);

    if (!this.tail) {
      this.head = newPerson;
      this.tail = newPerson;
    } else {
      this.tail.givesTo = newPerson;
      this.tail = this.tail.givesTo;
    }

    ++this.size;

    if (this.size >= 3) {
      this.tail.givesTo = this.head;
    }

    return this.size;
  }

  print(): void {
    if (!this.head) {
      return;
    }

    let currentPerson: Person | null = this.head;

    for (let i = 0; i < this.size; ++i) {
      console.log(`${currentPerson?.name} gives to ${currentPerson?.givesTo}`);

      if (currentPerson?.givesTo) {
        currentPerson = currentPerson.givesTo;
      }
    }
  }
}

// function exchangeGifts(names: string[]): string {
//   if (names.length < 3) {
//     return 'Need at least 3 participants to exchange gifts!';
//   }

//   let result = '';

//   return result;
// }

// assert(exchangeGifts([]), 'Need at least 3 participants to exchange gifts!');
// assert(
//   exchangeGifts(['Ivan']),
//   'Need at least 3 participants to exchange gifts!'
// );
// assert(
//   exchangeGifts(['Ivan', 'Norma', 'Sara']),
//   `Ivan gives a gift to Norma
//   Norma gives a gift to Sara
//   Sara gives a gift to Ivan
//   `
// );
