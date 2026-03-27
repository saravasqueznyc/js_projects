/*
File: scripts\seedDatabase.js
Description:
- This file belongs to the 'scripts' layer of the Library Manager app.
- Rebuild this module so 'seedDatabase' provides the expected behavior for this project.

Assignment:
- Recreate imports and exports required by neighboring modules.
- Implement the logic using clean, testable functions.
- Implement these required members:
  - TODO: Implement function seedDatabase and describe its expected behavior.
- Add validation and error handling where relevant.

Suggested implementation order:
1) Define data shapes and dependencies.
2) Implement core behavior.
3) Wire exports/events/UI integration.
4) Add edge-case handling and tests.
*/

import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.__dirname(__filename);
const DATA_FILE_PATH = path.join(__dirname, "../data", "book.json");
const topics = [
  'Science Fiction', 'History', 'Art', 'Romance', 'Fantasy', 
  'Business', 'Programming', 'Mystery', 'Biography', 'Science'
];

async function sseedDataBase(){

  console.log("Getting the books");
  let externalBooks = [];
  
  for(const topic of topics){
    console.log(`Getting books about: ${topic}`);

    try {
      const url = `https://openlibrary.org/search.json?q=${encodeURIComponent(topic)}&limit=15`

      const result = await fetch(url);

      if(!result.ok) throw new Error(`http eror: ${result.status}`);
      const data = await result.json();
      // const mapResult = data.map(item => {
      //   title: item.title,
      //   author: item.author_name ? item.author_name[0] : "unknown",
      //   year: item.first_publish_year || "unknown",
        

      // })
  }
}
