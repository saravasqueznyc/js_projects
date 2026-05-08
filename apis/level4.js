import { google } from "googleapis";

const ID = `11T9PmAyh2tfPF_cdohT-_xM164a9fncYj73BIqC0-RU`;

async function createSheets() {
    
    const auth = new google.auth.GoogleAuth({
        keyFile: "./credentials.json",
        scopes: ["https://www.googleapis.com/auth/spreadsheets"]
    });

    const client = await auth.getClient();

    return google.sheets({
        version: "v4",
        auth: client
    });
}


async function readSS(sheet, id, range) {
    
    const result = await sheet.spreadsheets.values.get({
        spreadsheetId: id,
        range,
    });

    return result.data.values

}


async function writeSheets(sheet, id, range, data){

    await sheet.spreadsheets.values.append({
        spreadsheetId: id,
        range, 
        valueInputOption : "USER_ENTERED",
        resource: {values: data}
    });
    console.log("Data was add successfully");
}

// async function getEmail(rowNumber) {
    
//     const sheet = await createSheets();
//     const data = await readSS(sheet, ID, "Hoja 1!A:D");

//     return data[rowNumber][1];
// }


async function getEmail(rowNumber) {
    
    const sheet = await createSheets();
    const data = await readSS(sheet, ID, `Hoja 1!A${rowNumber+1}:D${rowNumber+1}`);

    return data[0][1];
}

console.log(await getEmail(3));

// const sheet = await createSheets();

// console.log(await readSS(sheet, ID, "Hoja 1!A:D"));

// await writeSheets(sheet, ID, "Hoja 1!A:D", [["04/06/2026", "josh@gmail.com", "josh", "pro"]]);
// console.log(await readSS(sheet, ID, "Hoja 1!A:D"));