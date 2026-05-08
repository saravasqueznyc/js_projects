const BASE_URL = `https://jsonplaceholder.typicode.com/`;

async function putBody(id, body) {

    const oldReponse = await fetch(`${BASE_URL}/posts/${id}`);
    if(!oldReponse.ok){
        console.log(`old response ${oldReponse.status}, ${oldReponse.statusText}`);
        return;
    }

    const {userId, title}= await oldReponse.json();

    const response = await fetch(`${BASE_URL}/posts/${id}`, {
        method: "PUT",
        headers: {"Content-Type" : "application/json"},
        body: JSON.stringify({id, userId, title, body})
    });

    if(!response.ok){
        console.log(`response ${response.status}, ${response.statusText}`);
        return;
    }

    const data =  await response.json();
    return data;
    
}

console.log(await putBody(2, "holaaa"));


async function patch(id, body) {
    
    const response = await fetch(`${BASE_URL}/posts/${id}`, {
        method: "PUT",
        headers: {"Content-Type" : "application/json"}, 
        body: JSON.stringify({body})
    });

    if(!response.ok){
        console.log(`response ${response.status}, ${response.statusText}`);
        return;
    }
    

    return await response.json();

}

console.log(await patch(1, "hola, como estas?"));
