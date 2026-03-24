

export function sendJSON(res, statusCode, data){
    res.writeHead(statusCode, {"Content-Type" : "application/json"})
    res.end(JSON.stringify(data));
}

export function sendError(res, statusCode, message){
    sendJSON(res, statusCode, {error : message});
}