const productoContenedor = document.querySelector(".product--main");

let productoLS = JSON.parse(localStorage.getItem("producto"));

function mostrarProducto({nombre, precio, cantidad, imagen, alt}) {
  let imgContenedor = document.createElement("picture");
  imgContenedor.innerHTML = `<img src="${imagen}" alt="${alt}" />`;
  
  let nombreProducto = document.createElement("h2");
  nombreProducto.innerText = nombre;
  nombreProducto.setAttribute("id", "nombreProducto");
  
  let precioProducto = document.createElement("h4");
  precioProducto.innerText = precio;
  precioProducto.setAttribute("id", "precioProducto");
  
  let cantidadSeleccionar = document.createElement("input");
  cantidadSeleccionar.setAttribute("type", "number");
  cantidadSeleccionar.setAttribute("value", "1");
  cantidadSeleccionar.setAttribute("id", "cantidadProducto");

  let cantidadProducto = document.createElement("h4");
  cantidadProducto.innerText = `Cantidad disponible para este producto es: ${cantidad}`;

  productoContenedor.append(imgContenedor, nombreProducto, precioProducto, cantidadSeleccionar, cantidadProducto);
}
mostrarProducto(productoLS);

const btnAgregarCarrito = document.getElementById("btnAgregarCarrito");
btnAgregarCarrito.addEventListener("click", () => {
  agregarCarrito(productoLS);
});

function agregarCarrito({nombre, precio, cantidad, imagen, alt}) {
  const cantidadProducto = document.getElementById("cantidadProducto");
  let errorMensaje = document.createElement("h4");
  let exitoContenedor = document.createElement("h4");
  let exitoMensaje = "Este producto ha sido agregado al carrito, porfavor sigue utilizando nuestros servicos";

  if(parseInt(cantidadProducto.value) > parseInt(cantidad)) {
    errorMensaje.innerText = "Has superado la cantidad maxima del producto";
    errorMensaje.classList.add("error-message");
    productoContenedor.append(errorMensaje);
    // productoContenedor.append(errorMensaje);
  } else if(cantidadProducto.value <= 0) {
    errorMensaje.innerText = "No has seleccionado una cantidad para el producto, porfavor selecciona una.";
    errorMensaje.classList.add("error-message");
    productoContenedor.append(errorMensaje);
    // productoContenedor.append(errorMensaje);
  } else {
    if(localStorage.getItem("carrito")) {
      let productosCarrito = JSON.parse(localStorage.getItem("carrito"));
      let nuevoProducto = {
        id: productosCarrito.length + 1,
        nombre: nombre,
        cantidad: parseInt(cantidadProducto.value),
        precio: precio,
        imagen: imagen,
        alt: alt
      };
      
      productosCarrito.push(nuevoProducto);
      localStorage.setItem("carrito", JSON.stringify(productosCarrito));
      exitoContenedor.innerText = exitoMensaje;
      exitoContenedor.classList.add("success-message");
      productoContenedor.append(exitoContenedor);
    } else {
      let nuevoProducto = [
        {
          id: 1,
          nombre: nombre,
          cantidad: parseInt(cantidadProducto.value),
          precio: precio,
          imagen: imagen,
          alt: alt
        }
      ];

      localStorage.setItem("carrito", JSON.stringify(nuevoProducto));
      
      exitoContenedor.innerText = exitoMensaje;
      exitoContenedor.classList.add("success-message");
      productoContenedor.append(exitoContenedor);
    }
  }
}