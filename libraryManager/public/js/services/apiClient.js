/*
File: public\js\services\apiClient.js
Description:
- Goal: Envolver la API 'fetch' nativa para no repetir configuraciones
- Rebuild this module so 'apiClient' provides the expected behavior for this project.

Assignment:
- Recreate imports and exports required by neighboring modules.
- Implement the logic using clean, testable functions.
- Implement these required members:
  - TODO: Implement function request and describe its expected behavior.
- Add validation and error handling where relevant.

Suggested implementation order:
1) Define data shapes and dependencies.
2) Implement core behavior.
3) Wire exports/events/UI integration.
4) Add edge-case handling and tests.
*/

const BASE_URL = "/api";

export async function request(enpoint, options = {}) {
  
  try{  
      const url = BASE_URL + enpoint;

      const defaultHeaders = {"Content-Type" : "application/json"};

      const confi = {
        ...options, 
        headers : {...defaultHeaders, ...options.headers}
      }

      const response = await fetch(url, confi)

      if(!response.ok){
        const errorData = await response.json().catch(() => {});
        throw new Error(errorData.error || `http error:  ${response.status}`);
      }

      return await response.json();
  }catch(error){
      console.error("Api error ", error)
      throw error;
  }
}