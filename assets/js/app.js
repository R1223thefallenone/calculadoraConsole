// Mensaje de bienvenida y solicitud de uso de la consola

console.log("Bienvenido a la app de compras");
alert("Abre la consola para usar la aplicacion");

// Creacion de la variable del nombre de usuario y del iva

let nombreUsuario = prompt("Ingresa tu nombre");
const iva = 0.19;

console.log("Hola " + nombreUsuario);

// Funciones matematicas para calcular costos 

function calcularSubtotal(precio, cantidad) {
    return precio * cantidad;
}

function calcularIVA(monto) {
    return monto * iva;
}

function calcularTotal(subtotal, ivaCalculado) {
    return subtotal + ivaCalculado;
}

// Creacion de arreglos y ciclos 

let compras = [];

let continuar = true;

while (continuar) {
    let producto = prompt("Nombre del producto");
    let precio = Number(prompt("Precio del producto"));
    let cantidad = Number(prompt("Cantidad"));

    let subtotal = calcularSubtotal(precio, cantidad);
    let ivaProducto = calcularIVA(subtotal);
    let total = calcularTotal(subtotal, ivaProducto);

    // objeto con datos

    let compra = {
        producto: producto,
        precio: precio,
        cantidad: cantidad,
        subtotal: subtotal,
        iva: ivaProducto,
        total: total
    };

    compras.push(compra);

    let respuesta = prompt("Deseas agregar otro producto? (si / no)");

    if (respuesta !== "si") {
        continuar = false;
    }
}

// Mostrar el resultado en la consola 

console.log("Resumen de compras de " + nombreUsuario);

let totalFinal = 0;

compras.forEach(function(item, index) {
    console.log(
        index + 1 + 
        ". " + item.producto +
        " | cantidad: " + item.cantidad +
        " | total: $" + item.total
    );

    totalFinal += item.total;
});

// Crear una condicion con un switch para diferentes eventos

let metodoPago = prompt("Metodo de pago (efectivo / debito / credito)");

switch (metodoPago) {
    case "efectivo":
        console.log("Pago en efectivo seleccionado");
        break;
    case "debito":
        console.log("Pago con tarjeta debito");
        break;
    case "credito":
        console.log("Pago con tarjeta credito");
        break;
    default:
        console.log("Metodo de pago no valido");
}

console.log("Total a pagar: $" + totalFinal);
console.log("Gracias por usar la app");
