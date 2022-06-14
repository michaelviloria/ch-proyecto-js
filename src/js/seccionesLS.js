// Guarda en el Local Storage la sección actual de la página
function guardarSeccionActual(seccionActual) {
  localStorage.setItem("seccion", seccionActual);
}
// Carga la seccion actual guardada en el Local Storage
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
      // Trae un objeto del Local Storage para usar su informacion para el renderizado.
      const producto = JSON.parse(localStorage.getItem("producto"));
      esructuraSeccionProducto(producto);
      break;
    default:
      estructuraInicio();
      break;
  }
}