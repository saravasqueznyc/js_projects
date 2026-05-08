import "dotenv/config";

const BASE_URL = `https://api.perigon.io`;

const api_key = process.env.NEWS_API_KEY;

// async function getNews(query, language = "en", size = 3) {
    
//     const url = `${BASE_URL}/v1/articles/all?q=${query}&language=${language}&size=${size}`;
//     const response = await fetch(url, {
//         method: "GET",
//         headers: {"Content-Type": "application/json", "Authorization": `Bearer ${api_key}`}
//     });

//     if(!response.ok){
//         console.log(`response ${response.status}, ${response.statusText}`);
//         return;
//     }   

//     const data = await response.json();
//     return data;

// }

// console.log(await getNews("sports"));



async function getNews(query, language = "en", size = 3) {
    
    const url = `${BASE_URL}/v1/articles/all?q=${query}&language=${language}&size=${size}`;
    console.log(url);
    const response = await fetch(url, {
        method: "GET",
        headers: {"Content-Type": "application/json", "x-api-key": `${api_key}`}
    });

    if(!response.ok){
        console.log(`response ${response.status}, ${response.statusText}`);
        return;
    }   

    const data = await response.json();

    const result = [];
    for(const item of data.articles){
        result.push({url: item.url, score: item.score, title: item.title, city: item?.source?.location?.city || "not found"});
    }

    return result;
}

console.log(await getNews("sports"));
