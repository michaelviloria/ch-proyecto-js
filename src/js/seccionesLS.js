
function guardarSeccionActual(seccionActual) {
  localStorage.setItem("seccion", seccionActual);
}

function cargarSeccionActual() {
  const seccionActual = localStorage.getItem("seccion");

  switch (seccionActual) {
    case "inicio":
      estructuraInicio();
      break;
    case "productos":
        estructuraProductos();
      break;
    case "cart":
        estructuraCart();
      break;
    case "producto":
      const producto = JSON.parse(localStorage.getItem("producto"));
      esructuraSeccionProducto(producto);
      break;
    default:
      estructuraInicio();
      break;
  }
}