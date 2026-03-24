import path from "path";
import { fileURLToPath } from "url";


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
export const PORT = 8000;
export const DATA_FILE_PATH = path.join(__dirname, "../../data", "books.json");
export const PUBLIC_FOLDER = path.join(__dirname, "../../public")