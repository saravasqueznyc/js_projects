/*
File: public\js\models\Book.js
Description:
- Goal: Representar un Libro, heredando de LibraryItem.
- Rebuild this module so 'Book' provides the expected behavior for this project.

Assignment:
- Recreate imports and exports required by neighboring modules.
- Implement the logic using clean, testable functions.
- Implement these required members:
  - TODO: Implement class Book and describe its expected behavior.
- Add validation and error handling where relevant.

Suggested implementation order:
1) Define data shapes and dependencies.
2) Implement core behavior.
3) Wire exports/events/UI integration.
4) Add edge-case handling and tests.
*/

//max 14 days, pages, type = book, getRules(), getSumary()..

import { LibraryItem } from "./LibraryItem.js";

export class Book extends LibraryItem{

  static maxLoanDays = 14;

  constructor({id, title, author, year, isBorrow = false, subjects = [], pages}){
    super({id, title, author, year, isBorrow, subjects});
    this.pages = pages;
    this.type = "book";
  }

  getSumary(){
    return `${super.getSumary()}, This is a ${this.type}, with ${this.pages} pages`;
  }

  static getRules(){
    return `You can borrow a book just for ${this.maxLoanDays} days`
  }
}
