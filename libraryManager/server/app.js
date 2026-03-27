import { handleViewRoutes } from "./routes/viewRoutes.js";
import { routes } from "./routes/apiRoutes.js";


export function requestHandler(req, res){
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Method", "GET, POST, PUT, DELETE, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");

    if(req.method === "OPTIONS"){
        res.writeHead(200);
        return res.end();
    }

    if(req.url.startsWith("/api/")){
        routes(req, res);
    } else {
        handleViewRoutes(req, res)
    }

    
}

