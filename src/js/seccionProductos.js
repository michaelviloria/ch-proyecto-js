function estructuraProductos() {
  app.innerHTML = `
    <header>
      <nav class="nav--container">
        <button id="btnLogoNav">
          <picture class="nav--logo logo">
            <img src="#" alt="" />
          </picture>
        </button>
        <section class="nav--search">
          <input type="text" placeholder="Busca lo que desees" />
          <a href="#">
            <picture>
              <img src="./src/img/icons/icon-search.png" alt="icon search" />
            </picture>
          </a>
        </section>
        <section class="nav--notify">
          <button id="btnIconCart">
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

    <main class="main--container"></main>
  `;

  const btnLogoNav = document.getElementById("btnLogoNav");
  btnLogoNav.addEventListener("click", () => {estructuraInicio()});

  const btnIconCart = document.getElementById("btnIconCart");
  btnIconCart.addEventListener("click", () => {estructuraCart()});

  mostrarTodosProductos("nike");
  mostrarTodosProductos("puma");
  mostrarTodosProductos("adidas");
}

function mostrarTodosProductos(marca) {
  const contenedorPrincipal = document.querySelector(".main--container");
  contenedorPrincipal.innerHTML += `
    <section class="products--container box-shadow">
      <h3 class="products--title">${marca}</h3>
      <section class="products--items products--${marca}"></section>
    </section>
  `;

  for (let i = 0; i < productos.length; i++) {
    if (productos[i].marca == marca) {
      const contenedorElementos = document.querySelector(`.products--${marca}`);
      contenedorElementos.innerHTML += `
        <article class="item--container" data-id="${productos[i].id}" data-cantidad="${productos[i].cantidad}">
          <button class="btn--item">
            <picture class="box-shadow">
              <img src="${productos[i].img}" alt="${productos[i].imgAlt}" />
            </picture>
          </button>
          <h3>${productos[i].nombre}</h3>
          <h4>$ ${productos[i].precio}</h4>
        </article>
      `;
    }
  }

  agregarProductoLS();
}