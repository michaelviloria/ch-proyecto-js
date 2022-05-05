const precioTotal = document.getElementById("precioTotal");
const cantidadProductos = document.getElementsByClassName("cart-amount--container");
const Productos = [
	{ id: 01, nombre: "Adidas", precio: 100000, cantidad: 1 },
	{ id: 02, nombre: "Reebook", precio: 75600, cantidad: 1 },
	{ id: 03, nombre: "Puma", precio: 89300, cantidad: 1 },
];

alert(
	"Aquí tienes 3 productos donde podrás ver su precio, ver y cambiar su cantidad y luego podrás ver el resultado total tanto en pantalla como en la consola del navegador"
);

// Suma de precios y visualizacion de los resultados
function sumarPrecioProductos() {
	let precioProductos = 0;
	Productos.forEach((producto) => {
    if (producto.cantidad > 0) {
      precioProductos += producto.precio * producto.cantidad;
      console.table(producto);
      console.log(`Precio de total de este producto es: $${producto.precio * producto.cantidad}`);
    }
	});
  for (let i = 0; i < cantidadProductos.length; i++) {
    if (Productos[i].cantidad <= 0) {
      cantidadProductos[i].innerText = 0;    
    } else {
      cantidadProductos[i].innerText = Productos[i].cantidad;
    }
  }
  console.log(`\nEl precio total de todos los productos es: $${precioProductos}`);
	precioTotal.innerText = precioProductos;
}

// Verifica que los datos ingresados sean números.
function verificarValorNumeico() {
  let mensaje = "";
  do {
    mensaje = parseInt(prompt("Porfavor escribe un valor númerico."));
    if (isNaN(mensaje)) {
      mensaje = "";
    }
  } while (mensaje === "");

  return mensaje;
}

// Inicio del proceso y muestra en pantalla mensajes al usuario.
function mensajeCantidadProductos() {
	let cantidadProducto1 = parseInt(
		prompt("¿Qué cantidad deseas en el primer producto?")
	);
  if (isNaN(cantidadProducto1)) {
    cantidadProducto1 = verificarValorNumeico();
    Productos[0].cantidad = cantidadProducto1;
  } else {
    Productos[0].cantidad = cantidadProducto1;
  }

	let cantidadProducto2 = parseInt(
		prompt("¿Qué cantidad deseas en el segundo producto?")
	);
  if (isNaN(cantidadProducto2)) {
    cantidadProducto2 = verificarValorNumeico();
    Productos[1].cantidad = cantidadProducto2;
  } else {
    Productos[1].cantidad = cantidadProducto2;
  }

	let cantidadProducto3 = parseInt(
		prompt("¿Qué cantidad deseas en el tercer producto?")
	);
  if (isNaN(cantidadProducto3)) {
    cantidadProducto3 = verificarValorNumeico();
    Productos[2].cantidad = cantidadProducto3;
  } else {
    Productos[2].cantidad = cantidadProducto3;
  }
	sumarPrecioProductos();
}
mensajeCantidadProductos();