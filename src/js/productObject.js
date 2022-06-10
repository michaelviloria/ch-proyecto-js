// Clase constructora de los productos
class Producto {
  constructor (id, nombre, precio, cantidad, marca, img, imgAlt) {
    this.id = id,
    this.nombre = nombre,
    this.precio = precio,
    this.cantidad = cantidad,
    this.marca = marca,
    this.img = img,
    this.imgAlt = imgAlt
    this.agotado = false;
  }
  vendido(cantidadVenta) {
    if (cantidadVenta < this.cantidad) {
      this.cantidad -= cantidadVenta;
    } else if (this.cantidad === 0) {
      this.agotado = true;
    }
  }
}

const productos = [];
// Trae los productos del JSON y los guarda dentro de un array
async function traerProductos() {
  const respuesta = await fetch("./productos.json");
  const datos = await respuesta.json();
  for(let elemento of datos) {
    productos.push(new Producto(elemento.id, elemento.nombre, elemento.precio, elemento.cantidad, elemento.marca, elemento.img, elemento.imgAlt));
  }

  // Renderiza los productos en pantalla segun su marca
  estructuraHeader();
}
traerProductos();