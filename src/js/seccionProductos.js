function estructuraProductos() {
  app.innerHTML = `
    <main class="main--container"></main>
  `;

  const menuList = document.getElementById("menuList");
  const menuItems = menuList.querySelectorAll(".menu-item");
  for (const item of menuItems) {
    const dataSection = item.attributes.getNamedItem("data-section");
    if (dataSection.value === "productos") {
      item.classList.add("selected")
    } else {
      item.classList.remove("selected");
    }
  }

  mostrarTodosProductos("nike");
  mostrarTodosProductos("adidas");
  mostrarTodosProductos("puma");

  cargarSeccionActual("productos");
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
          <button class="btn-image--item">
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

  agregarProductoLS("productos");
}