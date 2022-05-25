const precioTotal = document.getElementById("precioTotal");
const contenedorProductos = document.querySelector(".cart-products--items");
const tituloProductos = document.getElementById("productsTitle");
const btnPagar = document.getElementById("btnPay");

function crearProducto({id, nombre, precio, cantidad, imagen, alt}) {
  let contenedor = document.createElement("article");
  contenedor.className = "cart-item--container box-shadow";
  contenedor.setAttribute("data-id", id);

  let infoProducto = document.createElement("section");
  infoProducto.className = "cart-item--info";

  let imgContenedor = document.createElement("picture");
  imgContenedor.innerHTML = `<img src="${imagen}" alt="${alt}"/>`

  let infoPrecioNombre = document.createElement("section");
  infoPrecioNombre.className = "cart-item--info__price";
  let nombreProducto = document.createElement("h3");
  nombreProducto.innerText = nombre;
  let precioProducto = document.createElement("h2");
  precioProducto.innerHTML = `<span class="cart-price-item--container">${precio}</span>`;
  infoPrecioNombre.append(nombreProducto,precioProducto);

  infoProducto.append(imgContenedor,infoPrecioNombre);

  let infoCantidad = document.createElement("section");
  infoCantidad.className = "cart-item--quantity box-shadow";

  let btnDisminuir = document.createElement("button");
  btnDisminuir.className = "cart-icon--decrease";
  btnDisminuir.innerText = " - ";
  let cantidadProducto = document.createElement("span");
  cantidadProducto.className = "cart-amount--container";
  cantidadProducto.innerText = cantidad;
  let btnAumentar = document.createElement("button");
  btnAumentar.className = "cart-icon--add";
  btnAumentar.innerText = "+";

  let btnCerrar = document.createElement("button");
  btnCerrar.className = "cart-icon--close";
  btnCerrar.innerText = "x";

  infoCantidad.append(btnDisminuir,cantidadProducto,btnAumentar);

  contenedor.append(infoProducto, infoCantidad, btnCerrar);
  contenedorProductos.append(contenedor);
}

function informacionProducto() {
  if(localStorage.getItem("carrito")) {
    tituloProductos.innerText = "Productos seleccionados";
    btnPagar.style.display = "block";
    const producto = JSON.parse(localStorage.getItem("carrito"));
    for (let i = 0; i < producto.length; i++) {
      crearProducto(producto[i]);
    }
  } else {
    tituloProductos.innerText = "No has seleccionado ningun producto";
    btnPagar.style.display = "none";
  }
}
informacionProducto();

const contenedorProducto = document.querySelectorAll(".cart-item--container");

for (const producto of contenedorProducto) {
  const btnElminarProducto = producto.querySelector(".cart-icon--close");
  btnElminarProducto.addEventListener("click", () => {
    Swal.fire({
      title: "¿Eliminar?",
      text: "¿Deseas eliminar este producto?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Si, seguro.",
      cancelButtonText: "No, no quiero.",
    }).then(result => {
      if(result.isConfirmed === true) {
        Swal.fire({
          title: "¡Eliminado!",
          text: "Este producto ha sido eliminado del carrito.",
          icon: "success",
          confirmButtonText: "Cerrar",
          timer: 5000
        });
        let productosLS = JSON.parse(localStorage.getItem("carrito"));
        for (let i = 0; i < productosLS.length; i++) {
          if (producto.attributes[1].value == productosLS[i].id) {
            productosLS.splice(i,1);
            producto.remove();
          }
        }
        localStorage.setItem("carrito", JSON.stringify(productosLS));
      }
    })
  })
}

btnPagar.addEventListener("click", () => {
  Swal.fire({
    title: "Productos comprados",
    text: "Todos los productos en tu lista han sido comprados, gracias por usar nuestros servicios.",
    icon: "success",
    confirmButtonText: "Aceptar",
    timer: 10000
  })
  for (const producto of contenedorProducto) {
    producto.remove();
  }
  localStorage.clear();
  informacionProducto();
})