/*
File: public\js\main.js
Description:
- Goal: Punto de entrada principal en el navegador. Se ejecuta en cuanto el HTML se ha cargado.
- Rebuild this module so 'main' provides the expected behavior for this project.

Assignment:
- Recreate imports and exports required by neighboring modules.
- Implement the logic using clean, testable functions.
- Implement these required members:
  - TODO: Implement function initApp and describe its expected behavior.
  - TODO: Implement function setupStatsDashboard and describe its expected behavior.
- Add validation and error handling where relevant.

Suggested implementation order:
1) Define data shapes and dependencies.
2) Implement core behavior.
3) Wire exports/events/UI integration.
4) Add edge-case handling and tests.
*/

import { renderBooks } from "./ui/renderBooks.js";
import { Book } from "./models/Book.js";
import { setUpModalClose } from "./ui/renderBookDetails.js";


const books = [
  {
    "id": "1",
    "title": "Clean Code",
    "author": "Robert C. Martin",
    "year": 2008,
    "isBorrowed": false,
    "type": "book",
    "pages": 464
  },
  {
    "id": "2",
    "title": "JavaScript: The Good Parts",
    "author": "Douglas Crockford",
    "year": 2008,
    "isBorrowed": true,
    "type": "book",
    "pages": 176
  },
  {
    "id": "1772825235426",
    "isBorrowed": false,
    "type": "book",
    "title": "The Science Fiction Hall of Fame -- Volume One",
    "author": "Robert Silverberg",
    "year": 1970,
    "pages": 322,
    "subjects": []
  },
  {
    "id": "1772825235438",
    "isBorrowed": false,
    "type": "book",
    "title": "Foundation",
    "author": "Isaac Asimov",
    "year": 1951,
    "pages": 432,
    "subjects": []
  },
  {
    "id": "1772825235449",
    "isBorrowed": false,
    "type": "book",
    "title": "A Study of History",
    "author": "Arnold J. Toynbee",
    "year": 1900,
    "pages": 471,
    "subjects": []
  },
  {
    "id": "1772825235462",
    "isBorrowed": false,
    "type": "book",
    "title": "The Enduring Vision",
    "author": "Paul S. Boyer",
    "year": 1987,
    "pages": 352,
    "subjects": []
  },
  {
    "id": "1772825235655",
    "isBorrowed": false,
    "type": "book",
    "title": "Dell'Arte della Guerra",
    "author": "Niccolò Machiavelli",
    "year": 1540,
    "pages": 144,
    "subjects": []
  },
  {
    "id": "1772825235665",
    "isBorrowed": false,
    "type": "book",
    "title": "The Art of Loving",
    "author": "Erich Fromm",
    "year": 1956,
    "pages": 449,
    "subjects": []
  },
  {
    "id": "1772825235676",
    "isBorrowed": false,
    "type": "book",
    "title": "The Blithedale Romance",
    "author": "Nathaniel Hawthorne",
    "year": 1852,
    "pages": 449,
    "subjects": []
  },
  {
    "id": "1772825235687",
    "isBorrowed": false,
    "type": "book",
    "title": "Flatland",
    "author": "Edwin Abbott Abbott",
    "year": 1884,
    "pages": 264,
    "subjects": []
  },
  {
    "id": "1772905663272",
    "isBorrowed": false,
    "type": "book",
    "title": "Labyrinths",
    "author": "Jorge Luis Borges",
    "year": 1962,
    "pages": 157,
    "subjects": []
  }
].map(item => {
  return new Book(item);
})

for(const book of books){
  console.log(book)
}

renderBooks(books);

setUpModalClose();

