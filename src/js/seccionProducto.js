// Estructura HTML de la seccion "Producto Seleccionado"
function esructuraSeccionProducto({nombre, precio, cantidad, imagen, alt}) {
  app.innerHTML = `
    <main class="main--container">
      <section class="product--container box-shadow">
        <section class="product--main">
          <picture>
            <img src="${imagen}" alt="${alt}" />
          </picture>
          <h2 id="nombreProducto">${nombre}</h2>
          <h4 id="precioProducto">${precio}</h4>
          <input type="number" value="1" id="cantidadProducto"/>
          <h4>Cantidad disponible para este producto es: ${cantidad}<h4/>
        </section>
      </section>
    </main>

    <footer class="footer--product">
      <button id="btnBack">Volver</button>
      <button id="btnAgregarCarrito">Agregar al carrito</button>
    </footer>
  `;

  const btnBack = document.getElementById("btnBack");
  btnBack.addEventListener("click", () => {estructuraInicio()});

  const btnAgregarCarrito = document.getElementById("btnAgregarCarrito");
  let productoLS = JSON.parse(localStorage.getItem("producto"));
  btnAgregarCarrito.addEventListener("click", () => {
    agregarCarrito(productoLS);
  });

  const menuList = document.getElementById("menuList");
  const menuItems = menuList.querySelectorAll(".menu-item");
  for (const item of menuItems) {
    item.classList.remove("selected");
  }

  cargarSeccionActual("producto");
}

// Agrega toda la informacion del producto para ser agregado en la seccion del carrito de compras
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