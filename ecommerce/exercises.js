// fn que muestre un reporte por cada categoria, 
// r(numero total de unidades vendidas, ingresos totales, 
// total en promedio por cada cat, solo mostrar cat con mas de 10000 en ingresos)

import { db } from './db.js'

// function getReports(){

//     const prepare = db.prepare(
//         `SELECT cat.nombre AS categorias,
//             SUM(dp.cantidad) AS total_unidades,
//             ROUND(SUM(dp.subtotal), 2) AS ingresos_totales, 
//             ROUND(SUM(dp.subtotal) / SUM(dp.cantidad), 2) AS promedio_categoria
//         FROM Detalles_Pedido dp
//         INNER JOIN Productos pr ON dp.id_producto = pr.id_producto
//         LEFT JOIN Categorias cat ON pr.id_categoria = cat.id_categoria
//         GROUP BY cat.nombre
//         HAVING SUM(dp.subtotal) > 10000
//         ORDER BY ingresos_totales DESC
//         `
//     );
//     return prepare.all()
// }

// console.log(getReports())

//fn para identificar a los 5 mejores clientes
// los que tiene mayor gasto total
//(nombre, email, numero de pedidos completados y el gasto total)

// function getBestClients(){
    
//     const prepare = db.prepare(
//         `SELECT cl.nombre AS nombre, 
//             cl.email AS email,
//             COUNT(DISTINCT pe.id_pedido) AS pedidos_completados,
//             ROUND(SUM(dp.subtotal), 2 )AS total
//         FROM Clientes cl
//         INNER JOIN Pedidos pe ON cl.id_cliente = pe.id_cliente
//         INNER JOIN Detalles_Pedido dp ON pe.id_pedido = dp.id_pedido
//         WHERE pe.estado = 'Completado'
//         GROUP BY  cl.nombre, cl.email
//         ORDER BY total DESC 
//         LIMIT 5
//         `
//     );
//     return prepare.all()
// }

// console.log(getBestClients())

//fn categoria cuyos productos nunca se hayan vendido
//re(nombre categoria, cuantos productos tiene asignados)

function getCategoriesNotSales(){

    const prepare = db.prepare(
        `SELECT cat.nombre AS nombre,
            COUNT( pr.id_producto) AS productos
        FROM Categorias cat
        LEFT JOIN Productos pr ON cat.id_categoria = pr.id_categoria
        LEFT JOIN Detalles_Pedido dp ON pr.id_producto = dp.id_producto
        GROUP BY cat.nombre
        HAVING SUM(dp.cantidad) = 0 OR SUM(dp.cantidad) IS NULL
        `
    );
    return prepare.all()
}

console.log(getCategoriesNotSales())