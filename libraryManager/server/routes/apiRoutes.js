import { getBooks,searchBooks, postBooks, updateBookStatus } from "../controllers/bookControllers.js";
import { sendError } from "../utils/responseHelpers.js";



export function routes(req, res){
    
    if(req.url === "/api/books" && req.method === "GET"){
        return getBooks(req, res); 
    } else if(req.url === "/api/books" && req.method === "POST"){
        return postBooks(req, res);

    } else if(req.url.startsWith("/api/search") && req.method === "GET"){
        return searchBooks(req, res);

    } else if(req.url.match(/\/api\/books\/.*\/status/) && req.method === "PUT"){
        return updateBookStatus(req, res);
    }
    sendError(res, 404, "cualquier cosa");
}