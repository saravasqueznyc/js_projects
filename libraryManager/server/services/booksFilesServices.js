import fs from "fs/promises";
import { DATA_FILE_PATH } from "../confi/env.js";


export async function readBooks(){

    try{
        const data = JSON.parse(await fs.readFile(DATA_FILE_PATH, "utf8"));
        return data 
    } catch(err){
        if(err.code === "ENOENT") return [];

        throw err;
    }
}

export async function writeBooks(dataBook){

    try{
        const text = JSON.stringify(dataBook);
        await fs.writeFile(DATA_FILE_PATH, text,"utf8");
    } catch(err){
        if(err.code === "ENOENT") return;

        throw err;       
    }
}