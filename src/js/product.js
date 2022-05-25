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

  if(parseInt(cantidadProducto.value) > parseInt(cantidad)) {
    Swal.fire({
      title: '¡Cantidad excedida!',
      text: 'Has superado la cantidad maxima del producto',
      icon: 'error',
      confirmButtonText: 'Cerrar',
      timer: 5000,
    });
  } else if(cantidadProducto.value <= 0) {
    Swal.fire({
      title: "¡Sin cantidad!",
      text: "No has seleccionado una cantidad para el producto, porfavor selecciona una.",
      icon: "warning",
      confirmButtonText: "Cerrar",
      timer: 5000
    })
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
      Swal.fire({
        title: "Producto Añadido",
        text: "Este producto ha sido agregado al carrito, porfavor sigue utilizando nuestros servicos",
        icon: "success",
        confirmButtonText: "Aceptar",
        timer: 5000
      })
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
      
      Swal.fire({
        title: "Producto Añadido",
        text: "Este producto ha sido agregado al carrito, porfavor sigue utilizando nuestros servicos",
        icon: "success",
        confirmButtonText: "Aceptar",
        timer: 5000
      })
    }
  }
}