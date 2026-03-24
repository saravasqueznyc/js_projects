/*
File: public\js\ui\renderCategories.js
Description:
- Goal: Renderizar categorías y añadir eventos click.
- Rebuild this module so 'renderCategories' provides the expected behavior for this project.

Assignment:
- Recreate imports and exports required by neighboring modules.
- Implement the logic using clean, testable functions.
- Implement these required members:
  - TODO: Implement function initSidebarCategories and describe its expected behavior.
- Add validation and error handling where relevant.

Suggested implementation order:
1) Define data shapes and dependencies.
2) Implement core behavior.
3) Wire exports/events/UI integration.
4) Add edge-case handling and tests.
*/


import{ buildCategoryHTML } from "../utils/recursion.js";
import{ $, clearHTML } from  "../utils/domHelpers.js"
import { store } from "../state/store.js";
import { renderBooks } from "../ui/renderBooks.js"
import { showToast } from "../ui/notifications.js"


export function initSidebarCategories(){

  const countainer = $("#categories-container");
  clearHTML(countainer);

  const items = store.getLibrary().getItems();
  const categoryTree = [
    {name: "all"}, 
    ...items.map(item => {
      const results = [];
      for(const category of item.subjects){
        results.push({name : category});
      }
      return results;
    }).flat()
  ]

  const html = buildCategoryHTML(categoryTree);
  countainer.innerHTML = html;

  countainer.addEventListener("click", (e)=>{
    if(e.target.classList.contains("category-name")){
      document.querySelectorAll(".category-name").forEach(element => element.classList.remove("active"));
      e.target.classList.add("active");

      const catName = e.target.getAttribute("data-category");
      showToast(`You chose: ${catName}`);
      if(catName === "all"){
        renderBooks(items);
      } else {
        renderBooks(items.filter(item => item.subjects.includes(catName)));
      }
    }
  })
}

