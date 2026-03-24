/*
File: public\js\ui\notifications.js
Description:
- Goal: Mostrar mensajes breves en pantalla (Toasts) al usuario.
- Rebuild this module so 'notifications' provides the expected behavior for this project.

Assignment:
- Recreate imports and exports required by neighboring modules.
- Implement the logic using clean, testable functions.
- Implement these required members:
  - TODO: Implement function showToast and describe its expected behavior.
- Add validation and error handling where relevant.

Suggested implementation order:
1) Define data shapes and dependencies.
2) Implement core behavior.
3) Wire exports/events/UI integration.
4) Add edge-case handling and tests.
*/

import{ $ } from "../utils/domHelpers.js";

export function showToast(message){

  const contanier = $("#toast-container");
  const toast = document.createElement("div");
  toast.classList.add("toast");
  toast.textContent = message;
  contanier.appendChild(toast)

  setTimeout(()=>{
    toast.style.opacity = "0";
    
    setTimeout(()=> toast.remove(), 300)
  },3000)
}