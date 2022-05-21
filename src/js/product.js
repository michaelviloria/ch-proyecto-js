const productoContenedor = document.querySelector(".product--main");

let productoLS = JSON.parse(localStorage.getItem("producto"));

function mostrarProducto() {
  let imgContenedor = document.createElement("picture");
  imgContenedor.innerHTML = `<img src="${productoLS.imagen}" alt="${productoLS.alt}" />`;
  let nombreProducto = document.createElement("h2");
  nombreProducto.innerText = productoLS.nombre;
  nombreProducto.setAttribute("id", "nombreProducto");
  let precioProducto = document.createElement("h4");
  precioProducto.innerText = productoLS.precio;
  precioProducto.setAttribute("id", "precioProducto");
  let cantidadProducto = document.createElement("input");
  cantidadProducto.setAttribute("type", "number");
  cantidadProducto.setAttribute("value", "1");
  cantidadProducto.setAttribute("id", "cantidadProducto");

  productoContenedor.append(imgContenedor, nombreProducto, precioProducto, cantidadProducto);
}
mostrarProducto();

const btnAgregarCarrito = document.getElementById("btnAgregarCarrito");
btnAgregarCarrito.addEventListener("click", agregarCarrito);

function agregarCarrito() {
  const cantidadProducto = document.getElementById("cantidadProducto");
  let errorMensaje = document.createElement("h5");
  let exitoContenedor = document.createElement("h5");
  let exitoMensaje = "Este producto ha sido agregado al carrito, porfavor sigue utilizando nuestros servicos";

  if(cantidadProducto.value > productos[0].cantidad) {
    errorMensaje.innerText = "Has superado la cantidad maxima del producto, su cantidad maxima es:" + productos[0].cantidad;
    errorMensaje.classList.add("error-message");
    // productoContenedor.append(errorMensaje);
  } else if(cantidadProducto.value <= 0) {
    errorMensaje.innerText = "No has seleccionado una cantidad para el producto, porfavor selecciona una.";
    errorMensaje.classList.add("error-message");
    // productoContenedor.append(errorMensaje);
  } else {
    let condicion = localStorage.getItem("carrito");
    if(condicion) {
      let productosCarrito = JSON.parse(localStorage.getItem("carrito"));
      let nuevoProducto = {
        id: productosCarrito.length + 1,
        nombre: productos[0].nombre,
        cantidad: parseInt(cantidadProducto.value),
        precio: productos[0].precio
      };
      
      productosCarrito.push(nuevoProducto);
      localStorage.setItem("carrito", JSON.stringify(productosCarrito));
      exitoContenedor.innerText = exitoMensaje;
      exitoContenedor.classList.add("success-message");
      // productoContenedor.append(exitoContenedor);
    } else {
      let nuevoProducto = [
        {
          id: 1,
          nombre: productos[0].nombre,
          cantidad: parseInt(cantidadProducto.value),
          precio: productos[0].precio
        }
      ];

      localStorage.setItem("carrito", JSON.stringify(nuevoProducto));
      
      exitoContenedor.innerText = exitoMensaje;
      exitoContenedor.classList.add("success-message");
      // productoContenedor.append(exitoContenedor);
    }
  }
}