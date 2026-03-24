/*
File: public\js\utils\formatters.js
Description:
- Goal: Proveer funciones puras para dar formato a los datos en la vista.
- Rebuild this module so 'formatters' provides the expected behavior for this project.

Assignment:
- Recreate imports and exports required by neighboring modules.
- Implement the logic using clean, testable functions.
- Implement these required members:
  - TODO: Implement function formatYear and describe its expected behavior.
  - TODO: Implement function capitalize and describe its expected behavior.
- Add validation and error handling where relevant.

Suggested implementation order:
1) Define data shapes and dependencies.
2) Implement core behavior.
3) Wire exports/events/UI integration.
4) Add edge-case handling and tests.
*/

// formatYear () if year = yaer, !if "N/A", capitalize("dss") return toUppercase()"";

export function formatYear(year){

  if(year) return year;
  return "N/A";
}

export function capitalize(str){

  if(!str) return "";
  return str.charAt(0).toUpperCase() + str.slice(1);
}
