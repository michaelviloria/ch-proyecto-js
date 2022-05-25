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

const productos = [
  new Producto (01, "Nike Air Max Excee", 304900, 15, "nike", "https://i.ibb.co/dgDnpWs/Nike-Air-Max-Excee.png", "Nike Air Max Excee"),
  new Producto (02, "Nike Quest 4", 402900, 15, "nike", "https://i.ibb.co/SQDx5mD/Nike-Quest-4.png","Nike Quest 4"),
  new Producto (03, "Nike Court Royale 2 NN", 272900, 15, "nike", "https://i.ibb.co/2v0M49b/Nike-Court-Royale-2-NN.png", "Nike Court Royale 2 NN"),
  new Producto (04, "Nike Revolucion 6NN", 337900, 15, "nike", "https://i.ibb.co/M8Hrq3T/Nike-Revolucion-6-NN.png", "Nike Revolucion 6 NN"),
  new Producto (05, "Nike Air Max SC", 421900, 15, "nike", "https://i.ibb.co/612rq31/Nike-Air-Max-SC.png", "Nike Air Max SC"),
  new Producto (06, "Nike Court Vision Low", 284900, 15, "nike", "https://i.ibb.co/kVLZJvh/Nike-Court-Vision-Low.png", "Nike Court Vision Low"),
  new Producto (07, "Nike Court Vision Low NBA", 315900, 15, "nike", "https://i.ibb.co/N2jPpKd/Nike-Court-Vision-Low-NBA.png", "Nike Court Vision Low NBA"),
  new Producto (08, "Nike SB Chron 2", 305900, 15, "nike", "https://i.ibb.co/ZxcXTZ7/Nike-SB-Chron-2.png", "Nike SB Chron 2"),
  new Producto (09, "Nike Jordan Stay Loyal", 593900, 15, "nike", "https://i.ibb.co/QD4FCsg/Nike-Jordan-Stay-Loyal.png", "Nike Jordan Stay Loyal"),
  new Producto (10, "Nike Flex Experience Run 10", 262900, 15, "nike", "https://i.ibb.co/5hptnhL/Nike-Flex-Experience-Run-10.png", "Nike Flex Experience Run 10"),
  new Producto (11, "Puma Future Rider Play On", 343900, 15, "puma", "https://i.ibb.co/Bykvzs7/Puma-Future-Rider-Play-On.webp", "Puma Future Rider Play On"),
  new Producto (12, "Puma Rs-X Softcas", 287900, 15, "puma", "https://i.ibb.co/g3rXNFb/Puma-Rs-X-Softcas.png", "Puma Rs-X Softcas"),
  new Producto (13, "Puma Future Rider", 622200, 15, "puma", "https://i.ibb.co/Wn1YTMC/Puma-Future-Rider.png", "Puma Future Rider"),
  new Producto (14, "Puma Gravition Pro", 352900, 15, "puma", "https://i.ibb.co/2KLQHYP/Puma-Gravition-Pro.png", "Puma Gravition Pro"),
  new Producto (15, "Puma X-Ray Lite", 278900, 15, "puma"),
  new Producto (16, "Puma Scuderia Ferrari Race X-Ray 2", 231900, 15, "puma"),
  new Producto (17, "Puma Incinerate Wns D12", 269900, 15, "puma"),
  new Producto (18, "Puma ST Runner v2", 245900, 15, "puma"),
  new Producto (19, "Puma Supertec", 540450, 15, "puma"),
  new Producto (20, "Puma City Rider", 393900, 15, "puma"),
  new Producto (21, "Adidas Alphatorsion 2", 189900, 15, "adidas", "https://i.ibb.co/GxYxMBQ/Adidas-Alphatorsion-2.png", "Adidas Alphatorsion 2"),
  new Producto (22, "Adidas Racer Rebold", 189900, 15, "adidas", "https://i.ibb.co/0n6cC8d/Adidas-Racer-Rebold.png", "Adidas Racer Rebold"),
]