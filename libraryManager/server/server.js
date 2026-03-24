//"/api/books.(get)(post)" "/api/search (get)" "/\/api\/books\/.*\/status/ (put)" 
import { createServer } from "http"
import { routes } from "./routes/apiRoutes.js";


const PORT = 8000;


const server = createServer(routes)
server.listen(PORT, () =>{
    console.log(`Running in port: ${PORT}`);
})

