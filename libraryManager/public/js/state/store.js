/*
File: public\js\state\store.js
Description:
- Goal: Actuar como la "fuente de la verdad" global (Estado) del frontend.
- Rebuild this module so 'store' provides the expected behavior for this project.

Assignment:
- Recreate imports and exports required by neighboring modules.
- Implement the logic using clean, testable functions.
- Implement these required members:
  - TODO: Implement class Store and describe its expected behavior.
- Add validation and error handling where relevant.

Suggested implementation order:
1) Define data shapes and dependencies.
2) Implement core behavior.
3) Wire exports/events/UI integration.
4) Add edge-case handling and tests.
*/

import { Library } from "../models/Library.js";

class Store {

  #library

  constructor(){
    this.#library = new Library();
  }

  getLibrary(){
    return this.#library;
  }

}

export const store = new Store();

