/*
File: public\js\ui\formUI.js
Description:
- Goal: Manejar el estado visual del formulario (mostrar/ocultar) y qué campos
- Rebuild this module so 'formUI' provides the expected behavior for this project.

Assignment:
- Recreate imports and exports required by neighboring modules.
- Implement the logic using clean, testable functions.
- Implement these required members:
  - TODO: Implement function setupFormUI and describe its expected behavior.
- Add validation and error handling where relevant.

Suggested implementation order:
1) Define data shapes and dependencies.
2) Implement core behavior.
3) Wire exports/events/UI integration.
4) Add edge-case handling and tests.
*/

export function setupFormUI(){

  const openBtn = document.getElementById("btn-toggle-form");
  const closeBtn = document.getElementById("btn-cancel-form");
  const container = document.getElementById("add-form-section");
  const typeSelect = document.getElementById("itemType");
  const form = document.getElementById("add-item-form");
  const pagesGroup = document.getElementById("group-pages");
  const editionGroup = document.getElementById("group-issue");

  openBtn.addEventListener("click", ()=>{
    container.classList.remove("hidden");
  })

  closeBtn.addEventListener("clic", ()=>{
    container.classList.add("hidden");
    form.reset();
  })

  typeSelect.addEventListener("click", (e) =>{

    const value = e.target.value;

    if(value === "book"){
      pagesGroup.classList.remove("hidden");
      editionGroup.classList.add("hidden");

    } else {
      pagesGroup.classList.remove("hidden");
      editionGroup.classList.add("hidden");     
    }
  })

  form.addEventListener("submit", createNewBookHandler);
  
}

