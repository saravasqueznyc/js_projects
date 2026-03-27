/*
File: public\js\handlers\bookHandlers.js
Description:
- Goal: Contiene la lógica ejecutada cuando el usuario quiere interactuar con un libro.
- Rebuild this module so 'bookHandlers' provides the expected behavior for this project.

Assignment:
- Recreate imports and exports required by neighboring modules.
- Implement the logic using clean, testable functions.
- Implement these required members:
  - TODO: Implement function handleBorrowReturn and describe its expected behavior.
  - TODO: Implement function createNewBookHandler and describe its expected behavior.
- Add validation and error handling where relevant.

Suggested implementation order:
1) Define data shapes and dependencies.
2) Implement core behavior.
3) Wire exports/events/UI integration.
4) Add edge-case handling and tests.
*/

import{ bookApi } from "../services/bookApi.js";
import { showToast } from "../ui/notifications.js";
import{ renderBooks } from "../ui/renderBooks.js";
import{ store } from "../state/store.js";
import { $ } from "../utils/domHelpers.js";



export async function borrowReturnHandler(book){

  try{  
    const newStatus = !book.isBorrrow;

    await bookApi.updateStatus(book.id, newStatus);

    if(newStatus){
      book.borrowItem();
      showToast("Book borrowed successfully");
    } else {
      book.returnItem();
      showToast("Book returned successfully");
    }

    if(window.__recordActivity) window.__recordActivity(true);
    renderBooks(store.getLibrary().getItems());
  } catch(error){
    showToast("Error while updating items");
  }
}


export async function createNewBookHandler(event) {

  try{  
    event.preventDefault();

    const type = $("#itemType").value;
    const title = $("#title").value;
    const author = $("#author").value;
    const year = parseInt($("#year").value, 10);
    const pages = type === "book" ? $("#pages").value : undefined;
    const issueNumber = type === "magazine" ? $("#issueNumber").value : undefined;

    const newItem = {type, title, author, year, pages, issueNumber};

    const saveBook = await bookApi.createBook(newItem);

    store.getLibrary().addItemRaw(saveBook);

    if(window.__recordActivity) window.__recordActivity(true);

    renderBooks(store,getLibrary().getItems());

    $("#add-item-form").reset();
    $("#add-form-section").classList.add("hidden");
    showToast(`Type book: ${type}, title book: ${title}, was saved`);
  }catch(error){
    showToast("Somthing went wrong");
  }
}

