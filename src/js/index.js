const contenedorProductos = document.querySelectorAll(".products--container");

function mostrarProductos(marca, numeroContenedor) {
  let tituloContenedor = document.createElement("div");
  tituloContenedor.className = "title--container";
  let titulo = document.createElement("h3");
  titulo.innerText = marca;
  let linkMarca = document.createElement("a");
  linkMarca.setAttribute("href", "./src/section/products.html");
  linkMarca.innerText = "Mostras todo";

  tituloContenedor.append(titulo, linkMarca);

  let contenedorElementos = document.createElement("section");
  contenedorElementos.className = "products--items";

  let numeroElementosCreados = 0;
  for (let i = 0; i < productos.length; i++) {
    if (productos[i].marca == marca) {
      let producto = document.createElement("article");
      producto.className = "item--container";
      producto.setAttribute("data-id", `${productos[i].id}`);
      let imgContenedor = document.createElement("a");
      imgContenedor.setAttribute("href", "./src/section/product.html");
      let imgProducto = document.createElement("picture");
      imgProducto.className = "box-shadow";
      imgProducto.innerHTML = `<img src="${productos[i].img}" alt="${productos[i].imgAlt}" />`;
      imgContenedor.appendChild(imgProducto);
      let nombreProducto = document.createElement("h3");
      nombreProducto.innerText = productos[i].nombre;
      let precioProducto = document.createElement("h4");
      precioProducto.innerText = "$ " + productos[i].precio;
    
      producto.append(imgContenedor, nombreProducto, precioProducto);
      contenedorElementos.appendChild(producto);
      if (numeroElementosCreados >= 3) {
        break
      } else {
        numeroElementosCreados += 1;
      }
    }
    
  }

  contenedorProductos[numeroContenedor].append(tituloContenedor, contenedorElementos);
}

mostrarProductos("nike", 0);
mostrarProductos("puma", 1);
mostrarProductos("adidas", 2);

const productoElementos = document.querySelectorAll(".item--container");

for (const producto of productoElementos) {
  let imgElemento = producto.children[0];
  imgElemento.addEventListener("click", () => {
    let elemento = {
      id: producto.attributes[1].value,
      nombre: producto.children[1].innerText,
      precio: producto.children[2].innerText,
      imagen: producto.children[0].children[0].children[0].src,
      alt: producto.children[0].children[0].children[0].alt,
    }
    localStorage.setItem("producto", JSON.stringify(elemento));
  });
}