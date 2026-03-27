import path from "path";


export function getContentType(filePath){

    const extension = String(path.extname(filePath)).toLowerCase();

    switch (extension) {
        case ".html" :
            return "text/html";
        case ".js" :
        case ".mjs" : 
            return "text/js";
        case ".css" :
            return "text/css";
        case ".json" : 
            return "application/json";
        case ".png" : 
            return "image/png";
        case ".jpg" :
        case ".jpeg" :
            return "image/jpg";
        case ".svg" :
            return "image/svg+xml";
        default : 
            return "application/octet-stream"
    } 
}