const header = document.getElementById("header");
// Estructura del Header
function estructuraHeader() {
  header.innerHTML = `
  <nav class="nav--container">
    <section class="nav--menu">
      <button id="btnMenu" class="menu--btn">
        <picture class="menu--btn__icon">
          <img src="./src/img/icons/icon-menu.png" alt="icon menu">
        </picture>
      </button>
      <section id="menuList" class="menu--list">
        <ul>
          <li class="menu-item selected" data-section="inicio">
            Inicio
          </li>
          <li class="menu-item" data-section="productos">
            Productos
          </li>
        </ul>
      </section>
    </section>
    <section class="nav--search">
      <input type="search" placeholder="Buscar...." id="inputSearch" />
    </section>
    <section class="nav--cart">
      <button id="btnCart">
        <picture>
          <img src="./src/img/icons/icon-cart.png" alt="icon cart" />
        </picture>
      </button>
    </section>
  </nav>
  `;

  const menuList = document.getElementById("menuList");
  const btnMenu = document.getElementById("btnMenu");
  btnMenu.addEventListener("click", menuToggle);

  const menuItems = menuList.querySelectorAll(".menu-item");
  for (const elemento of menuItems) {
    const dataSection = elemento.attributes.getNamedItem("data-section").value;
    elemento.addEventListener("click", () => {
      cambiarSeccion(dataSection);
    })
  }

  function cambiarSeccion(seccion) {
    for (const elemento of menuItems) {
      const elementoSeccion = elemento.attributes.getNamedItem("data-section").value;
      if (elementoSeccion === seccion) {
        elemento.classList.add("selected");
        if (elementoSeccion === "inicio") {
          estructuraInicio();
          guardarSeccionActual("inicio");
          menuToggle();
        } else if (elementoSeccion === "productos") {
          estructuraProductos();
          guardarSeccionActual("productos");
          menuToggle();
        }
      } else {
        elemento.classList.remove("selected");
      }
    }
  }

  function menuToggle() {
    btnMenu.classList.toggle("active");
    if (btnMenu.classList.contains("active")) {
      menuList.style.display = "block";
    } else {
      menuList.style.display = "none";
    }
  }

  const btnCart = document.getElementById("btnCart");
  btnCart.addEventListener("click", () => {
    estructuraCart();
    guardarSeccionActual("cart");
  });

  const inputSearch = document.getElementById("inputSearch");
  inputSearch.addEventListener("keyup", filtroBusqueda);

  cargarSeccionActual();
}