/*
File: public\js\handlers\searchHandlers.js
Description:
- Goal: Manejar el buscador de la API externa.
- Rebuild this module so 'searchHandlers' provides the expected behavior for this project.

Assignment:
- Recreate imports and exports required by neighboring modules.
- Implement the logic using clean, testable functions.
- Implement these required members:
  - TODO: Implement function fetchAndRenderExternalResults and describe its expected behavior.
  - TODO: Implement function setupExternalSearch and describe its expected behavior.
- Add validation and error handling where relevant.

Suggested implementation order:
1) Define data shapes and dependencies.
2) Implement core behavior.
3) Wire exports/events/UI integration.
4) Add edge-case handling and tests.
*/

import { $, clearHTML } from "../utils/domHelpers.js";
import { bookApi } from "../services/bookApi.js";
import{ renderExternalBookDetails } from "../ui/renderBookDetails.js";
import { debounce } from "../utils/closures.js";

async function fetchAndRenderResults(query){

  const list = $("#external-search-results");

  try{  

    if(!query){
      clearHTML(list);
      return;
    } 

    list.innerHTML = "<li>Searching for books...</li>";
    const result = await bookApi.searchBooks(query);
    clearHTML(list);

    if(result.length === 0){
      list.innerHTML = "<li>Not found results</li>";
      return;
    }

    result.array.forEach(book => {
      const li = document.createElement("li");
      li.style.cursor = "pointer";
      li.style.padding = "8px";
      li.style.borderBottom = "1px solid #ccc";
      li.textContent = `${book.title} - ${book.author} - ${book.year}`
      li.addEventListener("click", ()=> {
        renderExternalBookDetails(book);
      })

      list.appendChild(li);
    }); 
  }catch(error){
    li.innerHTML = "<li style='color: red'>Error conecting with the external api</li>";
  }
}

export function externalSearch(){

  const searchInput = $("#external-search-input");

  const delaySearch = debounce((event) =>{fetchAndRenderResults(event.target.value.trim())}, 800);

  searchInput.addEventListener("input", delaySearch);
  
}

