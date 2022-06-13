// Estructura HTML de la seccion "Carrito de compras | Pago de productos"
function estructuraCart() {
  app.innerHTML = `
    <header class="cart-header--container">
      <h2>Carrito de compras</h2>
    </header>
    <main class="cart-main--container">
      <section class="cart-price--container box-shadow">
        <h2>Precio Total</h2>
        <h2>$<span id="precioTotal">0</span></h2>
      </section>
      <section class="cart-products--container box-shadow">
        <h3 id="productsTitle"></h3>
        <section class="cart-products--items"></section>
      </section>
      <section class="cart-buy--container">
        <button id="btnPay">Pagar</button>
      </section>
    </main>
  `;
  informacionProducto();

  const menuList = document.getElementById("menuList");
  const menuItems = menuList.querySelectorAll(".menu-item");
  for (const item of menuItems) {
    item.classList.remove("selected");
  }

  guardarSeccionActual("cart");
}

function crearProducto({id, nombre, precio, cantidad, imagen, alt}) {
  const contenedor = document.querySelector(".cart-products--items");
  contenedor.innerHTML += `
    <article class="cart-item--container box-shadow" data-id="${id}">
      <section class="cart-item--info">
        <picture>
          <img src="${imagen}" alt="${alt}"/>
        </picture>
        <section class="cart-item--info__price">
          <h3>${nombre}</h3>
          <h2>
            <span class="cart-price-item--container">${precio}</span>
          </h2>
        </section>
      </section>
      <section class="cart-item--quantity box-shadow">
        <button class="cart-icon--decrease"> - </button>
        <span class="cart-amount--container">${cantidad}</span>
        <button class="cart-icon--add"> + </button>
      </section>
      <button class="cart-icon--close"> x </button>
    </article>
  `;
  eliminarProductoCarrito();
}

const contenedorProducto = document.querySelectorAll(".cart-item--container");
function informacionProducto() {
  const tituloProductos = document.getElementById("productsTitle");
  const btnPagar = document.getElementById("btnPay");
  const producto = JSON.parse(localStorage.getItem("carrito"));
  if(producto != null) {
    if(producto.length > 0) {
      tituloProductos.innerText = "Productos seleccionados";
      btnPagar.style.display = "block";
      for (let i = 0; i < producto.length; i++) {
        crearProducto(producto[i]);
      }
    } else {
      tituloProductos.innerText = "No has seleccionado ningun producto";
      btnPagar.style.display = "none";
    }
  } else {
    tituloProductos.innerText = "No has seleccionado ningun producto";
    btnPagar.style.display = "none";
  }

  btnPagar.addEventListener("click", () => {
    Swal.fire({
      title: "Productos comprados",
      text: "Todos los productos en tu lista han sido comprados, gracias por usar nuestros servicios.",
      icon: "success",
      confirmButtonText: "Aceptar",
      timer: 8000
    })
    for (const producto of contenedorProducto) {
      producto.remove();
    }
    localStorage.clear();
    estructuraCart();
  })
}

function eliminarProductoCarrito() {
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
              if (productosLS.length > 0) {
                localStorage.setItem("carrito", JSON.stringify(productosLS));
              } else {
                productosLS = [];
                localStorage.setItem("carrito", JSON.stringify(productosLS));
                informacionProducto();
              }
            }
          }
        }
      })
    })
  }
}