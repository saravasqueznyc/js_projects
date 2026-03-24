import fs from "fs/promises"
import { sendJSON, sendError } from "../utils/responseHelpers.js";
import { searchExternalBooks } from "../services/openLibraryService.js";
import { addItem, updateLibraryStatus } from "../services/libraryServices.js";
import { getAllLibraryItems } from "../services/libraryServices.js";

export async  function getBooks(_, res){

    try {
    const data = await getAllLibraryItems()
    sendJSON(res, 200, data);       
    } catch (err){
        sendError(res, 500, "Error getting the books");
    }

}

export async function postBooks(req, res){

try{    
    let body = "";

    req.on("data", chunk =>{
        body+= chunk;
    });

    req.on("end", async () =>{

    try{        
        const data = JSON.parse(body);
        const newItem = await addItem(data);
        sendJSON(res, 201, newItem)

    } catch(err){
        sendError(res, 400, "Wrong data");
    }
    });
}   catch(err){
    sendError(res, 500, "Something went worng");
}
}


export async function searchBooks(req, res) {
    
    try {   
        const url = new URL(req.url, `http://${req.headers.host}`);
        const urlQuery = url.searchParams.get("q");

        if(!urlQuery) return sendError(res, 400, "Q is mandatory");

        const result = await searchExternalBooks(urlQuery)
        sendJSON(res, 200, result);
    } catch(err){
        sendError(res, 500, "It wasn't possible to get the books");
    }
}


export async function updateBookStatus(req, res) {
        
    try{    
        const idUrl = req.url.split("/")[3];
        let body = "";

        res.on("data", chunk =>{
            body+= chunk;
        });
        console.log(body)

        res.on("end", async () =>{

            try{        
                const { isBorrow } = JSON.parse(body)
                if(typeof isBorrow !== "boolean" ){
                    return sendError(res, 400, "isBorrow must be a boolean")
                } 

                const book = await updateLibraryStatus(idUrl, isBorrow);
                sendJSON(res, 200, book);
            } catch(err){
                if(err.message === "Item not found"){
                    return sendError(res, 400, err.message);
                } 

                sendError(res, 500, "It wasn't possible to update the status");
            }

        });
    } catch(err){
        sendError(res, 500, "It wasn't possible to update the status");
    }
}   