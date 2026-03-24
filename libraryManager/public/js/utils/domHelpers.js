/*
File: public\js\utils\domHelpers.js
Description:
- Goal: Facilidades para encontrar elementos del DOM y crear HTML sin redundancia.
- Rebuild this module so 'domHelpers' provides the expected behavior for this project.

Assignment:
- Recreate imports and exports required by neighboring modules.
- Implement the logic using clean, testable functions.
- Implement these required members:
  - TODO: Implement function $ and describe its expected behavior.
  - TODO: Implement function clearHTML and describe its expected behavior.
- Add validation and error handling where relevant.

Suggested implementation order:
1) Define data shapes and dependencies.
2) Implement core behavior.
3) Wire exports/events/UI integration.
4) Add edge-case handling and tests.
*/


export const $ = (selector) => document.querySelector(selector);

export const clearHTML = (element) => {
  if(element){
    element.innerHTML = "";
  }
}

