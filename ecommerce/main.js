import { db } from "./db.js";

function selectPendingOrder(date){
    const prepare = db.prepare(
        `SELECT *
        FROM Pedidos
        WHERE fecha < ?
        AND estado = 'Pendiente'`
    )
    return prepare.all(date)
}

// console.log(selectPendingOrder('2026-02-04'))

function getProductId(id){
    const prepare = db.prepare(
        `SELECT *
        FROM Productos
        WHERE id_producto = ?`
    )
    return prepare.get(id);
}

// console.log(getProductId(20));

// function insertProduct(product){
//     const prepare = db.prepare(
//         `INSERT INTO Productos (id_producto, nombre, precio, id_categoria)
//         VALUES(@id, @name, @price, @category)`
//     )
//     prepare.run(product);
// }

// insertProduct({id: 1000, name: 'papel', price: 30000, category: 5})
// console.log(getProductId(1000))

// function updateProduct(id, product){
//     //['nombre = spa', precio = 1000]
//     const list = [];

//     for(let propiedad in product){
//         list.push(`${propiedad} = ${product[propiedad]}`)
//     }
//     console.log(list)

//     const query = `UPDATE Productos 
//         SET 
//             ${list.join(", ")}
//         WHERE id_producto = ${id}`

//     console.log(query)
//     const prepare = db.prepare(query)
//     return prepare.run();
// }

// function updateProduct(id, product){
//     //['nombre = spa', precio = 1000]
//     const list = [];

//     for(let propiedad in product){
//         list.push(`${propiedad} = @${propiedad}`)
//     }
//     console.log(list)

//     const query = `UPDATE Productos 
//         SET 
//             ${list.join(", ")}
//         WHERE id_producto = ${id}`

//     console.log(query)
//     const prepare = db.prepare(query)
//     return prepare.run(product);
// }


// updateProduct(5, {nombre: 'tijeras', precio: 1000, id_categoria: 6})
// console.log('aaaa')
// console.log(getProductId(5));


function getOrders(id, startDate, endDate){
    const prepare = db.prepare(
        `SELECT *
        FROM Pedidos
        WHERE id_cliente = ${id} AND fecha BETWEEN @startDate AND @endDate`
    );
    return prepare.all({ startDate, endDate})
}

console.log(getOrders(27, '2026-02-08', '2026-04-08' ))