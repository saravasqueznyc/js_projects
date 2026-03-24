/*
File: public\js\ui\renderBooks.js
Description:
- Goal: Tomar un array de objetos (libros/revistas) y dibujarlos en el HTML.
- Rebuild this module so 'renderBooks' provides the expected behavior for this project.

Assignment:
- Recreate imports and exports required by neighboring modules.
- Implement the logic using clean, testable functions.
- Implement these required members:
  - TODO: Implement function renderBooks and describe its expected behavior.
- Add validation and error handling where relevant.

Suggested implementation order:
1) Define data shapes and dependencies.
2) Implement core behavior.
3) Wire exports/events/UI integration.
4) Add edge-case handling and tests.
*/

import {$, clearHTML} from "../utils/domHelpers.js";
import { capitalize } from "../utils/formatters.js"; 
import { renderBookDetails } from "./renderBookDetails.js";


  export function renderBooks(items){
    const boxBooks = $("#books-grid")
    clearHTML(boxBooks);

    if(items.length === 0){
      boxBooks.innerHTML = "<p>There aren't books to show</p>";
      return;
    }

    for(const item of items){

      const available = item.isBorrow ? "borrowed" : "available"

      const card = document.createElement("div")
      card.className = "book-card";
      card.innerHTML = `
      <span class="book-tag">${capitalize(item.type)}</span>
      <h3 class="book-title">${item.title}</h3>
      <p class="book-author">${item.author} (${item.year})</p>
      
      <div class="book-status">
        <span class="status-badge status-${available}">${capitalize(available)}</span>
        <div>
          <button class="btn-details" data-id="${item.id}">Ver Detalles</button>
          <button class="btn-action btn-${item.isBorrow ? "secondary" : "primary"}" data-id="${item.id}">
            ${item.isBorrow ? "return the book" : "ask to borrow"}
          </button>
        </div>
      </div>`

      boxBooks.appendChild(card);
      //TODO addEventLis
      const buttonDetails = card.querySelector(".btn-details");

      buttonDetails.addEventListener("click", () => {
        renderBookDetails(item);
      });

    }

  }



