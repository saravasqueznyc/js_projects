export async function searchExternalBooks(query) {


    try {    
        const URL = `https://openlibrary.org/search.json?q=${encodeURIComponent(query)}&limit=20`
        console.log("aaaa")
        const reponse = await fetch(URL);
        console.log(reponse)
        if(!reponse.ok){
            throw new Error (`Error doing fetch to theopen library: ${reponse.statusCode}`)
        }

        const data = await reponse.json();
        return data.docs.map(book => {
            return {
                title: book.title,
                author: book.author_name[0] ? book.author_name[0] : "unknown",
                year: book.first_publish_year || "unknown",
                subjects: Array.isArray(book.subjects) ? book.subjects.slice(0, 6) : []
            }
        })

    } catch(err){
        console.log(`Error: ${err.name}`)
        throw new Error("Error conecting with the external services");
    }

}


