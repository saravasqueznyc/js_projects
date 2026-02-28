// ==================================================
// 1) DOM selection (seleccionar elementos del DOM)
// ==================================================

const form = document.querySelector("#addForm");
const itemInput = document.querySelector("#itemInput");
const container = document.querySelector("#list");
const dropdown = document.querySelector("#filterSelect");
const searchInput = document.querySelector("#searchInput");

const clearPackedBtn = document.getElementById("clearPackedBtn");
const clearAllBtn = document.getElementById("clearAllBtn");
const addBtn = document.getElementById("addBtn");

const stats = document.querySelector("#stats");
const empty = document.querySelector("#emptyState");



// ==================================================
// 2) State (guardar datos en memoria) usando un array
// ==================================================

const state = {
    filter: "all",
    search: "",

}

let items = [];

function createId(){
    return "id_" + Date.now() + "_" + Math.random().toString(16).slice(2);
}

function cleanTtext(text){
    return text.toString().trim().toLowerCase();
}

// const objetCardInfo = {
//     id: "1",
//     name: "passport",
//     packed: false
// }

// const objetCardInfo1 = {
//     id: "2",
//     name: "charger",
//     packed: true
// }

// items.push(objetCardInfo1);
// items.push(objetCardInfo1); 

// items.push(objetCardInfo);
// items.push(objetCardInfo);
// items.push(objetCardInfo);

// items.push(objetCardInfo1);
// items.push(objetCardInfo1); 

// items.push(objetCardInfo);
// items.push(objetCardInfo);
// items.push(objetCardInfo);
// console.log(items);

function mostrarTarjeta (cardInfo){
    const card = `
    <li class="item ${cardInfo.packed ? "packed" : ""}" data-id="${cardInfo.id}">
        <input class="toggle" type="checkbox" aria-label="Toggle packed">
        <div class="name">
          <span class="text">${cardInfo.name}</span>
          <span class="badge">${cardInfo.packed ? "packed" : "unpacked"}</span>
        </div>
        <div class="actionsRow">
          <button class="iconBtn" data-action="edit" type="button">Edit</button>
          <button class="iconBtn" data-action="delete" type="button">Delete</button>
        </div>
      </li>`

    container.insertAdjacentHTML("afterbegin", card);
}



// ==================================================
// 3) render()
// ==================================================

function render(){

    container.innerHTML = "";

    for(let item of items){
        // switch(state.filter){
        //     case "All" : 
        //     case item.packed ? "Packed" : "Unpacked"  :
        //         mostrarTarjeta(item);
        //         break;
        // }
    
        if((state.filter === "all" ||
            state.filter === (item.packed ? "packed" : "unpacked")) && 
            item.name.startsWith(state.search)){
            mostrarTarjeta(item);
        }

        
    }

    const cardList = container.querySelectorAll(".item")
    console.log(cardList)

    if(items.length === 0){
        empty.textContent = "No items yet. Add your first one 👆"
    } else {
        const packed = items.filter(item => item.packed).length
        empty.textContent = `All • Showing ${cardList.length}/${items.length} • Packed ${packed} • Unpacked ${items.length - packed}`
    }

    for(const card of cardList){
        const editBtn = card.querySelector('button[data-action="edit"]');
        editBtn.addEventListener("click", ()=> {
            editItem(card.getAttribute("data-id"));
        })

        const deleteBtn = card.querySelector('button[data-action="delete"]');
        deleteBtn.addEventListener("click", () => {
            deleteItem(card.getAttribute("data-id"));
        })

        const checkbox = card.querySelector('input[aria-label="Toggle packed"]');
        checkbox.checked = card.classList.contains("packed") ? true : false;
        checkbox.addEventListener("change", ()=> {
            togglePacked(card.getAttribute("data-id"), checkbox.checked)
   
        })
    }



}
render();



// ==================================================
// 4) Action functions (funciones pequeñas para acciones)
// ==================================================

function addItem(name){
    const cardInfo = {
        id: createId(),
        name: cleanTtext(name),
        packed: false
         
    }
    items.push(cardInfo);
    render();
}

function deleteItem(id){
    items = items.filter(item => item.id !== id);
    render();
}

function togglePacked(id, isPacked){

    const idFound = items.find(item => item.id === id);
    if(!idFound) return;
    idFound.packed = isPacked;
    render();

}

function editItem(id){

    const itemFound = items.find(item => item.id === id)
    if(!itemFound) return;
    const newName = prompt("What is gonna be the new name?")
    if(!newName || newName.trim() === "") return;
    itemFound.name = newName.trim();
    render();

}

function clearPacked(){
    items = items.filter(item => !item.packed);
    render();
}

function clearAll(){
    items = [];
    render();
}

// ==================================================
// 5) Event listeners (interacción del usuario)
// ==================================================

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const inputText = itemInput.value;
    if(!inputText){
        return 
    } 
    addItem(inputText)
    itemInput.value = "";
    itemInput.focus()
    
})

dropdown.addEventListener("change", ()=>{
    state.filter = dropdown.value;
    render();
})

searchInput.addEventListener("input", () => {
    state.search = searchInput.value;
    render();
})

clearPackedBtn.addEventListener("click", ()=> clearPacked())

clearAllBtn.addEventListener("click", () => {
    if(confirm("Delete all items?")){
        clearAll();
    }
})

searchInput.addEventListener("keydown", (e) => {
    if(e.key === "Escape"){
        searchInput.value = "";
    }
})

// document.addEventListener("keydown", (e) => {
//     console.log(e)
//     if(e.key === "ArrowDown"){
//         e.preventDefault();
//     }
// })




