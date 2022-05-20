const contenedorPrincipal = document.querySelector(".main--container");

function mostrarProductos(marca) {
  let contenedorProductos = document.createElement("section");
  contenedorProductos.className = "products--container box-shadow";

  let tituloProductos = document.createElement("h3");
  tituloProductos.className = "products--title";
  tituloProductos.innerText = marca;

  let contenedorElementos = document.createElement("section");
  contenedorElementos.className = "products--items";

  // 
  for (let i = 0; i < productos.length; i++) {
    if (productos[i].marca == marca) {
      let contenedorElemento = document.createElement("article");
      contenedorElemento.className = "item--container";
    
      let imgContenedor = document.createElement("a");
      imgContenedor.setAttribute("href", "../section/product.html");
      imgContenedor.innerHTML = `<picture><img src="#" alt="" /></picture>`;
    
      let nombreProducto = document.createElement("h3");
      nombreProducto.innerText = productos[i].nombre;
    
      let precioProducto = document.createElement("h4");
      precioProducto.innerText = productos[i].precio;
    
      contenedorElemento.append(imgContenedor, nombreProducto, precioProducto);
      contenedorElementos.appendChild(contenedorElemento);
    }
  }
  // 
  contenedorProductos.append(tituloProductos, contenedorElementos);
  contenedorPrincipal.appendChild(contenedorProductos);
}

mostrarProductos("nike");
mostrarProductos("puma");