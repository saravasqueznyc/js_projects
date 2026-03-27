/*
File: public\js\utils\closures.js
Description:
- Goal: Demostrar el uso de closures en casos reales y útiles.
- Rebuild this module so 'closures' provides the expected behavior for this project.

Assignment:
- Recreate imports and exports required by neighboring modules.
- Implement the logic using clean, testable functions.
- Implement these required members:
  - TODO: Implement function debounce and describe its expected behavior.
  - TODO: Implement function createClickTracker and describe its expected behavior.
- Add validation and error handling where relevant.

Suggested implementation order:
1) Define data shapes and dependencies.
2) Implement core behavior.
3) Wire exports/events/UI integration.
4) Add edge-case handling and tests.
*/


export function createClickTracker(){
  let counter = 0;

  return function (increment = true){
    if(increment) counter += increment;
    return counter;
  }
}

export function debounce(fn, delay = 500){

  let timer;

  return function (...arg){

    clearTimeout(timer)
    timer = setTimeout(() =>{
      fn.apply(this, arg);
    }, delay);
  }

}