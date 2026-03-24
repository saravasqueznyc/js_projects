import path from "path";
import fs from "fs/promises";


export function handleViewRoutes(req, res){

    const filePath = req.url === "/" ? "/index.html" : req.url;

    // http://localhost:8000/books?q=HarryPotter&lang=sp;

    const cleanURL = filePath.split("?")[0];

    const absPath = path.join()

}