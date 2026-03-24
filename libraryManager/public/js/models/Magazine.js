/*
File: public\js\models\Magazine.js
Description:
- Goal: Representar una Revista, heredando de LibraryItem.
- Rebuild this module so 'Magazine' provides the expected behavior for this project.

Assignment:
- Recreate imports and exports required by neighboring modules.
- Implement the logic using clean, testable functions.
- Implement these required members:
  - TODO: Implement class Magazine and describe its expected behavior.
- Add validation and error handling where relevant.

Suggested implementation order:
1) Define data shapes and dependencies.
2) Implement core behavior.
3) Wire exports/events/UI integration.
4) Add edge-case handling and tests.
*/

// getRules(), getSumary(), issueNumber, title, year, maxLoanDays = 3

import { LibraryItem } from "./LibraryItem.js";

export class Magazine extends LibraryItem{

  static maxLoanDays = 3;

  constructor ({id, title, author, year, isBorrow = false, subjects = [], issueNumber}){
    super({id, title, author, year, isBorrow, subjects});
    this.issueNumber = issueNumber;
    this.type = "magazine";
  }

  getSumary(){
    return `The name of the magazine is: ${this.title}, it was written ${this.year}, and is the number edition ${this.issueNumber}`;
  }

  static getRules(){
    return `You can borrow a magazine just for ${this.maxLoanDays} days`
  }
}

