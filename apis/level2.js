const api_key = `DZog5B1He8Bo23giRrgVQDB0WHHd0CavCNW3TwPP`;

const BASE_URL = `https://api.nasa.gov`;

async function getPOD({date = "", start_date = "", end_date = "", count = "", thumbs = ""}) {
    
    const params = new  URLSearchParams({
    date,
    start_date,
    end_date,
    count, 
    thumbs,
    api_key
    });

    const url = `${BASE_URL}/planetary/apod?${params}`;
    const response = await fetch(url);

    if(!response.ok){
        console.log(`response ${response.status}, ${response.statusText}`);
        return;
    }

    return await response.json();
}

console.log(await getPOD({date: "2002-03-04", thumbs: true}));

// async function getPOD(count, thumbs) {
    
//     const url = `${BASE_URL}/planetary/apod?count=${count}&thumbs=${thumbs}&api_key=${api_key}`;
//     const response = await fetch(url);

//     if(!response.ok){
//         console.log(`response ${response.status}, ${response.statusText}`);
//         return;
//     }

//     return await response.json();
// }

// const result = await getPOD(1, false);

// // console.log(result);


// async function getLinks(startDate, endDate) {
    
//     const url = `${BASE_URL}/neo/rest/v1/feed?start_date=${startDate}&end_date=${endDate}&api_key=${api_key}`;
//     const response = await fetch(url);

//     if(!response.ok){
//         console.log(`response ${response.status}, ${response.statusText}`);
//         return;
//     }
    
//     const data = await response.json();

//     const result = [];
//     for(const key in data.near_earth_objects){
//         for(const item of data.near_earth_objects[key]){
//             result.push(item.nasa_jpl_url);
//         }
//     }

//     return result;
// }

// console.log(await getLinks("2002-03-03", "2002-03-07"));
