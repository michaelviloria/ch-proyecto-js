function filtroBusqueda(e) {
  if (e.target.value != "") {
    resultadoFiltro(e.target.value.toLowerCase());
  } else {
    cargarSeccionActual();
  }
}

function resultadoFiltro(busqueda) {
  let producto = "";
  let productosEncontrados = 0;
  for (let i = 0; i < productos.length; i++) {
    if (productos[i].nombre.toLowerCase().includes(busqueda)) {
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
      productosEncontrados++;
    }
  }
  if (productosEncontrados > 0) {
    app.innerHTML = `
    <main class="main--container">
      <h1 class="filter--title">Resultados de búsqueda</h1>
      <section class="products--container box-shadow">
        <section class="products--items filter-search">${producto}</section>
      </section>
    </main>
    `;
    agregarProductoLS();
  } else {
    app.innerHTML = `
    <main class="main--container">
      <h1 class="filter--title">No hay resultados en su búsqueda</h1>
    </main>
    `;
  }
}