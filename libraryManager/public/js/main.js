/*
File: public\js\main.js
Description:
- Goal: Punto de entrada principal en el navegador. Se ejecuta en cuanto el HTML se ha cargado.
- Rebuild this module so 'main' provides the expected behavior for this project.

Assignment:
- Recreate imports and exports required by neighboring modules.
- Implement the logic using clean, testable functions.
- Implement these required members:
  - TODO: Implement function initApp and describe its expected behavior.
  - TODO: Implement function setupStatsDashboard and describe its expected behavior.
- Add validation and error handling where relevant.

Suggested implementation order:
1) Define data shapes and dependencies.
2) Implement core behavior.
3) Wire exports/events/UI integration.
4) Add edge-case handling and tests.
*/

import { renderBooks } from "./ui/renderBooks.js";
import { setUpModalClose } from "./ui/renderBookDetails.js";
import { $ } from "./utils/domHelpers.js";
import { createClickTracker } from "./utils/closures.js";
import { initSidebarCategories } from "./ui/renderCategories.js";
import { setupFormUI } from "./ui/formUI.js";
import { filterHandler } from "./handlers/filterHandlers.js";
import { externalSearch } from "./handlers/searchHandlers.js";
import { store } from "./state/store.js";
import { bookApi } from "./services/bookApi.js";

async function setupStatsDashboard() {
  
  const btnClose = $("#close-stats-modal");
  const btnStats = $("#btn-stats");
  const modal = $("#stats-modal");
  const modalBody = $("#stats-body");

  const activityTracker = createClickTracker();
  window.__recordActivity = activityTracker;

  btnStats.addEventListener("click", () =>{

    const currentBooks = store.getLibrary().getItems();
    const borrowBooks = currentBooks.filter(book => book.isBorrow).length;
    const actionCount = window.__recordActivity ? window.__recordActivity(false) : 0;

    modalBody.innerHTML = `
      <div class="stat-box">
        <span class="stat-value">${currentBooks.length}</span>
        <span class="stat-label">Ítems Totales</span>
      </div>
      <div class="stat-box">
        <span class="stat-value">${borrowed}</span>
        <span class="stat-label">Prestados</span>
      </div>
      <div class="stat-box">
        <span class="stat-value">${currentBooks.length - borrowed}</span>
        <span class="stat-label">Disponibles</span>
      </div>
      <div class="stat-box">
        <span class="stat-value">${actionsCount}</span>
        <span class="stat-label">Niv. de Actividad</span>
      </div>
    `;

    modal.classList.remove("hidden");
  });

  btnClose.addEventListener("click", () =>{
    modal.classList.add("hidden");
  });

  window.addEventListener("click", (e) =>{
    if(e.target === modal){
      modal.classList.add("hidden");
    }
  });
}

async function initApp() {
  
  try {

    const booksRawData = bookApi.getAllBooks();

    store.getLibrary().setItems(booksRawData);

    renderBooks(store.getLibrary().getItems());

  }catch(error){
    $("#books-grid").innerHTML = "<p style='color: red; font-weight: bold;'>Unable to conect with the local backend</p>"
  }

  setUpModalClose();
  setupFormUI();
  filterHandler();
  externalSearch();
  initSidebarCategories();
  setupStatsDashboard();
}

document.addEventListener("DOMContentLoaded", initApp);



