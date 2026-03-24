/*
File: public\js\models\Library.js
Description:
- Goal: Gestionar el conjunto de instancias (libros y revistas) de la biblioteca.
- Rebuild this module so 'Library' provides the expected behavior for this project.

Assignment:
- Recreate imports and exports required by neighboring modules.
- Implement the logic using clean, testable functions.
- Implement these required members:
  - TODO: Implement class Library and describe its expected behavior.
- Add validation and error handling where relevant.

Suggested implementation order:
1) Define data shapes and dependencies.
2) Implement core behavior.
3) Wire exports/events/UI integration.
4) Add edge-case handling and tests.
*/

import { Book } from "./Book.js";
import { Magazine } from "./Magazine.js"

export class Library {

  #items

  constructor(){
    this.#items = [];
  }

  setItems(items){
    this.#items = items.map(item => {
      if(item.type === "book"){
        return new Book(item);
      } 
      return new Magazine();
    })
  }

  getItems(){
    return this.#items;
  }

  getItemById(id){
    return this.#items.find(item => item.id === id);
  }

  addItemRaw(obj){
    const newItem = obj.type === "book" ? new Book(obj) : new Magazine(obj);
    this.#items.push(newItem);
    return newItem;
  }
}

