/*
File: public\js\utils\recursion.js
Description:
- Goal: Demostrar recursión iterando sobre una jerarquía infinita de datos.
- Rebuild this module so 'recursion' provides the expected behavior for this project.

Assignment:
- Recreate imports and exports required by neighboring modules.
- Implement the logic using clean, testable functions.
- Implement these required members:
  - TODO: Implement function buildCategoriesHTML and describe its expected behavior.
- Add validation and error handling where relevant.

Suggested implementation order:
1) Define data shapes and dependencies.
2) Implement core behavior.
3) Wire exports/events/UI integration.
4) Add edge-case handling and tests.
*/



export function buildCategoryHTML(categories){

  if(categories.length === 0 || !categories){
    return "";
  } 

  let html = `<ul>`;
  for(const category of categories){
    html+= `<li class="category-item"><span class="category-name" data-category="${category.name}">📁 ${category.name}</span>`
    if(category.subcategories && categories.subcategories.length > 0){
      html+= buildCategoryHTML(category.subcategories);
    }
    html+= `</li>`
  }
  html+= `</ul>`;
  return html;
}

