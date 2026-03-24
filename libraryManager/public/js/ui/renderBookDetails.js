/*
File: public\js\ui\renderBookDetails.js
Description:
- Goal: Mostrar las propiedades dinámicas de un objeto en un Modal.
- Rebuild this module so 'renderBookDetails' provides the expected behavior for this project.

Assignment:
- Recreate imports and exports required by neighboring modules.
- Implement the logic using clean, testable functions.
- Implement these required members:
  - TODO: Implement function renderBookDetails and describe its expected behavior.
  - TODO: Implement function renderExternalBookDetails and describe its expected behavior.
  - TODO: Implement function setupModalClose and describe its expected behavior.
- Add validation and error handling where relevant.

Suggested implementation order:
1) Define data shapes and dependencies.
2) Implement core behavior.
3) Wire exports/events/UI integration.
4) Add edge-case handling and tests.
*/

import { $, clearHTML } from"../utils/domHelpers.js"
  //renderBookDetails(item), renderExternalBookDetails(book), 



export function renderExternalBookDetails(book){
  
  const modal = $("#details-modal");
  const modalBody = $("#modal-body");
  
  clearHTML(modalBody);

  let html = `<p><strong>TITLE:</strong> ${book.title}</p>
    <p><strong>AUTHOR:</strong> ${book.author}</p>
    <p><strong>YEAR:</strong> ${book.year}</p>
    <p><strong>SUBJECTS:</strong> ${book.subjects.length > 0 ? book.subjects.join(", ") : "none"}</p>
    
    <div style="margin-top: 1rem; padding: 1rem; background-color: #e0f2fe; border-radius: 4px; text-align: center;">
      <p style="margin-bottom: 0.5rem; color: #0284c7;">¿Quieres añadir este libro a tu colección local?</p>
      <button id="btn-add-external" class="btn-primary" style="width: 100%;">Agregar a mi colección</button>
    </div>`
  //TODO Saving logic

  modalBody.innerHTML = html;
  modal.classList.remove("hidden");
}


export function renderBookDetails(item){
  const modal = $("#details-modal");
  const modalBody = $("#modal-body");

  clearHTML(modalBody);

  let html = "";
  for(const propertie in item){
    if(typeof item[propertie] !== "function"){

      let value = item[propertie]
      if(typeof value === "boolean") {
        value = value ? "si" : "no"; 
      }
      const details = `<p><strong>${propertie.toUpperCase()}:</strong> ${value}</p>`
      html+= details;
    }
  }

  modalBody.innerHTML = html;

  modal.classList.remove("hidden");

}
  

export function setUpModalClose(){
   
  const modal = $("#details-modal");
  const buttonClose = $("#close-modal");

  buttonClose.addEventListener("click", () =>{
    modal.classList.add("hidden");
  })

  window.addEventListener("click", (e) => {
    if(e.target === modal){
        modal.classList.add("hidden");  
    }
  })

}
