/*
File: public\js\services\bookApi.js
Description:
- Goal: Concentrar todas las llamadas HTTP que tengan que ver específicamente con los libros.
- Rebuild this module so 'bookApi' provides the expected behavior for this project.

Assignment:
- Recreate imports and exports required by neighboring modules.
- Implement the logic using clean, testable functions.
- Define and implement the main API this module must expose.
- Add validation and error handling where relevant.

Suggested implementation order:
1) Define data shapes and dependencies.
2) Implement core behavior.
3) Wire exports/events/UI integration.
4) Add edge-case handling and tests.
*/

import { request } from "./apiClient.js";


export const bookApi = {
    getAllBooks(){
        return request("/books");
    },

    createBook(bookData){
        return request("/books", {method: "POST", body: JSON.stringify(bookData)});
    }, 

    updateStatus(id, isBorrow){
        return request(`/books/${id}/status`, {method: "PUT", body: JSON.stringify({isBorrow})});
    },

    searchBooks(book){
        return request(`/search?q=${encodeURIComponent(book)}`);
    }
}