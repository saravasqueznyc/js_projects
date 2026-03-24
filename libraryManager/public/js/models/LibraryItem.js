/*
File: public\js\models\LibraryItem.js
Description:
- Goal: Clase base para todos los elementos de la biblioteca.
- Rebuild this module so 'LibraryItem' provides the expected behavior for this project.

Assignment:
- Recreate imports and exports required by neighboring modules.
- Implement the logic using clean, testable functions.
- Implement these required members:
  - TODO: Implement class LibraryItem and describe its expected behavior.
- Add validation and error handling where relevant.

Suggested implementation order:
1) Define data shapes and dependencies.
2) Implement core behavior.
3) Wire exports/events/UI integration.
4) Add edge-case handling and tests.
*/

//Id, Title, Author, Year, Isborrow, Subjects

export class LibraryItem {

  constructor({id, title, author, year, isBorrow = false, subjects = []}){
    this.id = id;
    this.title = title;
    this.author = author;
    this.year = year;
    this.isBorrow = isBorrow;
    this.subjects = subjects;

  }

  getSumary(){
    return `The title is: ${this.title}, it was written by: ${this.author} in ${this.year}`;
  }

  borrowItem(){
    this.isBorrow = true;
  }

  returnItem(){
    this.isBorrow = false;
  }
}