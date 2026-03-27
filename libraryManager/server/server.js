//"/api/books.(get)(post)" "/api/search (get)" "/\/api\/books\/.*\/status/ (put)" 
import { createServer } from "http"
import { requestHandler } from "./app.js";



const PORT = 8000;


const server = createServer(requestHandler)
server.listen(PORT, () =>{
    console.log(`Running in port: ${PORT}`);
})

