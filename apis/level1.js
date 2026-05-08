"use strict";


async function test() {
    const response = await fetch('https://dummyjson.com/test');
    if(!response.ok){
        console.log("something failed with the response");
    }

    const data = await response.json()

    console.log(data);
}

test();

async function facts(sizeFact, cantFact) {
    const response = await fetch(`https://catfact.ninja/facts?max_length=${sizeFact}&limit=${cantFact}`);
    if(!response.ok){
        console.log(`${response.status} something failed with the response`);        
    }

    const data = await response.json();
    console.log(data.data);

}

facts(200, 8);

