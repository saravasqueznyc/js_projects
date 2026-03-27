import path from "path";
import fs from "fs/promises";
import { PUBLIC_FOLDER } from "../confi/env.js";
import { getContentType } from "../utils/fileHelpers.js";
import { sendError } from "../utils/responseHelpers.js";
    // http://localhost:8000/books?q=HarryPotter&lang=sp;

export async function handleViewRoutes(req, res){

    try{    
        const filePath = req.url === "/" ? "/index.html" : req.url;

        const cleanURL = filePath.split("?")[0];

        const absPath = path.join(PUBLIC_FOLDER, cleanURL);

        await fs.access(absPath);

        const data = await fs.readFile(absPath);

        const contentType = getContentType(absPath)
        
        res.writeHead(200, {"Content-Type" : contentType})
        res.end(data);
    } catch(err){
        if(err.code === "ENOENT"){
            sendError(res, 404, "File not found");
        } else {
            sendError(res, 500, "There is a problem opening the file");
        }
    }
}