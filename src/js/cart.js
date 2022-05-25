const precioTotal = document.getElementById("precioTotal");
const contenedorProductos = document.querySelector(".cart-products--items");
const tituloProductos = document.getElementById("productsTitle");
const btnPagar = document.getElementById("btnPay");

function crearProducto({nombre, precio, cantidad, imagen, alt}) {
  let contenedor = document.createElement("article");
  contenedor.className = "cart-item--container box-shadow";

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
  infoCantidad.className = "cart-item--quantity boc-shadow";

  let btnDisminuir = document.createElement("button");
  btnDisminuir.className = "cart-icon--decrease";
  btnDisminuir.innerText = " - ";
  let cantidadProducto = document.createElement("span");
  cantidadProducto.className = "cart-amount--container";
  cantidadProducto.innerText = cantidad;
  let btnAumentar = document.createElement("button");
  btnAumentar.className = "cart-icon--add";
  btnAumentar.innerText = "+";

  infoCantidad.append(btnDisminuir,cantidadProducto,btnAumentar);

  contenedor.append(infoProducto, infoCantidad);
  contenedorProductos.append(contenedor);
}

function informacionProducto() {
  if(localStorage.getItem("carrito")) {
    tituloProductos.innerText = "Productos seleccionados";
    btnPagar.style.display = "block";
    const producto = JSON.parse(localStorage.getItem("carrito"));
    for (let i = 0; i < producto.length; i++) {
      console.log(producto);
      crearProducto(producto[i]);
    }
  } else {
    tituloProductos.innerText = "No has seleccionado ningun producto";
    btnPagar.style.display = "none";
  }
}
informacionProducto();