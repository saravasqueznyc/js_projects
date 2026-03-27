/*
File: public\js\handlers\filterHandlers.js
Description:
- Goal: Gestionar los filtros de la lista de biblioteca usando 'switch' statement.
- Rebuild this module so 'filterHandlers' provides the expected behavior for this project.

Assignment:
- Recreate imports and exports required by neighboring modules.
- Implement the logic using clean, testable functions.
- Implement these required members:
  - TODO: Implement function setupFilterHandler and describe its expected behavior.
- Add validation and error handling where relevant.

Suggested implementation order:
1) Define data shapes and dependencies.
2) Implement core behavior.
3) Wire exports/events/UI integration.
4) Add edge-case handling and tests.
*/

import { $ } from "../utils/domHelpers.js";
import { store } from "../state/store.js";
import { renderBooks } from "../ui/renderBooks.js";

export function filterHandler(){

  const filter = $("#filter-status");

  filter.addEventListener("change", (e) =>{
    const selectFilter = e.target.value;

    const books = store.getLibrary().getItems();

    let filterBooks = [];

    switch (selectFilter) {
      case "AVAILABLE" : 
        filterBooks = books.filter(book => book.isBorrow === false);
        break;
      case "BORROWED" :
        filterBooks = books.filter(book => book.isBorrow === true);
        break;
      case "ALL" : 
      default : 
        filterBooks = books;
        break;
    }

    renderBooks(filterBooks);
  });
}