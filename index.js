function registrarUsuario() {
    alert("Bienvenido a _Start! \n Ingrese sus datos.");

    let usuario = {};

    usuario.nombre = prompt("Nombre:");
    usuario.apellido = prompt("Apellido:");
    usuario.edad = Number(prompt("Edad"));
    usuario.mail = prompt("Ingrese su correo para recibir las mejores ofertas!");

    alert("Estos son tus datos:\n \n" +
        "Nombre: " + usuario.nombre + "\n" +
        "Apellido: " + usuario.apellido + "\n" +
        "Edad: " + usuario.edad + "\n" +
        "Correo electrónico: " + usuario.mail);
    confirm ("Es correcto? \n Acepta si es correcto de lo contrario cancela y vuelve a registrarte.")
}

registrarUsuario();
let presupuestoUsuario = Number(prompt("Ingresa el monto de tu presupuesto"));
let total = 0;
let totalCompra = 0;

class Producto {
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
    }
}


const listaDeCompras = [
    new Producto("Xbox series S", 160000),
    new Producto("Xbox series X", 200000),
    new Producto("PlayStation 4", 150000),
    new Producto("PlayStation 5", 300000),
    new Producto("Nintendo switch", 280000),
];


let carrito = [];
let seleccion = prompt(`¿Desea agregar un producto? "si" o "no"`);

while (seleccion !== "no" && seleccion !== "si") {
    alert("Por favor ingrese una respuesta válida");
    seleccion = prompt(`¿Desea agregar un producto? "si" o "no"`);
}

while (seleccion !== "no") {
    alert("Elija el producto que deseas comprar");
    let todosLosProductos = listaDeCompras.map((producto) => `${producto.nombre} $${producto.precio}`).join("\n");
    alert(todosLosProductos);

    let producto = prompt("Agrega un producto a tu carrito:");
    let precio = 0;
    
    switch (producto) {
        case "xbox series s":
            precio = 160000;
            break;
        case "xbox series x":
            precio = 200000;
            break;
        case "playstation 4":
            precio = 150000;
            break;
        case "playstation 5":
            precio = 300000;
            break;
        case "nintendo switch":
            precio = 280000;
            break;
        default:
            alert("No tenemos stock de ese producto.");
            continue; 
    }

    let unidades = parseInt(prompt("Indique cuántas unidades quiere agregar:"));


    if (isNaN(unidades) || unidades <= 0) {
        alert("Ingrese una cantidad de unidades válida.");
        continue; 
    }

    carrito.push({ producto, precio });
    console.log(carrito);

    seleccion = prompt("¿Quiere seguir comprando? (sí o no)");
}


if (carrito.length === 0) {
    alert("No se agregó ningún producto.");
} else {

    alert("Detalle de la compra:");
    carrito.forEach((producto) => {
        alert(`Producto: ${producto.producto}, Unidades: ${producto.unidades}, Total a pagar por producto: $${producto.unidades * producto.precio}`);
    });


    const totalCompra = carrito.reduce((acc, el) => acc + el.precio * el.unidades, 0);
    if (totalCompra > presupuestoUsuario) {
        alert(`Lo siento, no tienes suficiente presupuesto para comprar todos los productos. Tu presupuesto es de $${presupuestoUsuario} y tu total a pagar es de $${totalCompra}.`);
    } else {
        alert(`Tu compra ha sido realizada con éxito. Tu presupuesto es de $${presupuestoUsuario} y tu total a pagar es de $${totalCompra}.`);
    }
}


