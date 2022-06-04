const app = document.querySelector("#app");

// Estructura HTML de la seccion de Inicio / Home
function estructuraInicio() {
  app.innerHTML = `
    <header>
			<nav class="nav--container">
				<a href="#" id="logoNav">
					<picture class="nav--logo logo">
						<img src="#" alt="" />
					</picture>
				</a>
				<section class="nav--search">
					<input type="text" placeholder="Busca lo que desees" />
					<a href="#">
						<picture>
							<img src="./src/img/icons/icon-search.png" alt="icon search" />
						</picture>
					</a>
				</section>
				<section class="nav--notify">
					<button id="btnCart">
						<picture>
							<img src="./src/img/icons/icon-cart.png" alt="icon cart" />
						</picture>
					</button>
					<a href="#">
						<picture>
							<img src="./src/img/icons/icon-menu.png" alt="icon menu" />
						</picture>
					</a>
				</section>
			</nav>
		</header>

    <main class="main--container">
      <section class="login--container box-shadow">
        <h2>¡Crea una cuenta y mejora tu experiencia!</h2>
        <div class="login--actions">
          <a href="#" class="login--actions__btn">Crear cuenta</a>
          <p>¿Ya tienes una cuenta? <a href="#">Ingresar</a></p>
        </div>
      </section>
    </main>
    <footer class="footer--container">
      <header>
        <picture class="footer--logo logo">
          <img src="" alt="" />
        </picture>
        <h2>¡Compra los zapatos de tus sueños!</h2>
      </header>
      <main>
        <section>
          <a href="#">Mi cuenta</a>
          <a href="#">Mis compras</a>
        </section>
        <section>
          <a href="#">Categorias</a>
          <a href="#">Mis favoritos</a>
        </section>
      </main>
    </footer>
  `;

  // Evento de click para ir a la seccion del carrito de compras
  const btnCart = document.getElementById("btnCart");
  btnCart.addEventListener("click", () => {estructuraCart()});
  mostrarProductos("nike");
  mostrarProductos("puma");
  mostrarProductos("adidas");
}

// Tarjetas / Cards de los productos dentro de su propio contenedor dependiendo su marca
function mostrarProductos(marca) {
  const contenedorPrincipal = document.querySelector(".main--container");
  const contenedorLogin = document.querySelector(".login--container");

  // Crea una cantidad predeterminada de productos de la misma marca
  let producto = "";
  let numeroElementosCreados = 1;
  for (let i = 0; i < productos.length; i++) {
    if (productos[i].marca == marca) {
      producto += `
        <article class="item--container" data-id="${productos[i].id}" data-cantidad="${productos[i].cantidad}">
          <button class="btn-image--item">
            <picture class="box-shadow">
              <img src="${productos[i].img}" alt="${productos[i].imgAlt}" />
            </picture>
          </button>
          <h3>${productos[i].nombre}</h3>
          <h4>$ ${productos[i].precio}</h4>
        </article>
      `;
      if (numeroElementosCreados >= 4) {
        break
      } else {
        numeroElementosCreados += 1;
      }
    }
  }

  // Crea un contenedor segun la marca de los productos
  const contenedorProductos = document.createElement("section");
  contenedorProductos.className = "products--container box-shadow";
  contenedorProductos.innerHTML = `
    <section class="title--container">
      <h3>${marca}</h3>
      <button class="btnMostrarProductos">Mostrar todo</button>
    </section>
    <section class="products--items">${producto}</section>
  `;
  contenedorPrincipal.insertBefore(contenedorProductos, contenedorLogin);

  const btnMostrarProductos = document.querySelectorAll(".btnMostrarProductos");
  for (const btn of btnMostrarProductos) {
    btn.addEventListener("click", () => {estructuraProductos()});
  }

  // Funcion guardar producto seleccionado en el Local Storage
  agregarProductoLS();
}

// Guarda la informacion del producto seleccionado en el Local Storage para ser usado en la seccion producto
function agregarProductoLS() {
  const productoElementos = document.querySelectorAll(".item--container");
  for (const producto of productoElementos) {
    const btnImgElemento = producto.children[0];
    btnImgElemento.addEventListener("click", () => {
      let elemento = {
        id: producto.attributes[1].value,
        nombre: producto.children[1].innerText,
        precio: producto.children[2].innerText,
        cantidad: producto.attributes[2].value,
        imagen: producto.children[0].children[0].children[0].src,
        alt: producto.children[0].children[0].children[0].alt,
      }
      localStorage.setItem("producto", JSON.stringify(elemento));
      esructuraSeccionProducto(elemento);
    });
  }
}