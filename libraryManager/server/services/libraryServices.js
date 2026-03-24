import { readBooks, writeBooks } from "./booksFilesServices.js"


export async function addItem(dataObj) {

    const books = await readBooks()
    const newItem = {
        id: Date.now().toString(),
        isBorrow: false,
        ...dataObj
    }
    books.push(newItem);
    await writeBooks(books);
    return newItem;
}

export async function updateLibraryStatus(id, isBorrow) {
    
    const books = await readBooks();
    const indexBook = books.findIndex(book => book.id === id);

    if(indexBook === -1){
        throw new Error("Item not found");
    } 

    books[indexBook].isBorrow = isBorrow;

    await writeBooks(books)
    return books[indexBook];
}

export async function getAllLibraryItems() {
    return await readBooks()
}
