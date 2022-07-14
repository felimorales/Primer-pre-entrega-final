let precioTotal = 0;

//function suma para calcular precio total
const suma = (a, b) => a + b;

//funcion constructora de productos
class Producto {
  constructor(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
    this.cantidad = 0;
  }

  vender(cantidad) {
    precioTotal = suma(precioTotal, cantidad * this.precio);
    this.cantidad = this.cantidad + cantidad;
  }
}

//Productos
const productos = [
  new Producto("Lasagna de acelga", 400),
  new Producto("Guiso de lentejas", 20),
  new Producto("Malfatti de espinaca", 30),
  new Producto("Fideos de zucchini y zanahoria", 40),
  new Producto("Fideos de repollo", 50),
  new Producto("Pan de carne relleno", 60),
  new Producto("Rollito de cerdo c/pure de coliflor", 70),
  new Producto("Pechuga rellena", 80),
  new Producto("Tacos de pollo", 90),
  new Producto("Empanadas de carne c/ masa de calabaza", 100),
];

console.log(productos);

alert(
  "Bienvenidos a la tienda de Que Rico Soli! \nElija sus productos y empiece a disfrutar!"
);

const nombres = [
  "Elija un producto:",
  ...productos.map((prod, i) => `(${i + 1}) ${prod.nombre}`),
  "(0) Cancelar compra.",
];

function ingresoDatos() {
  let eleccionProducto = parseInt(prompt(nombres.join("\n")));
  let seguirComprando = true;
  while (eleccionProducto !== 0 && seguirComprando) {
    
    if (eleccionProducto >= 1 && eleccionProducto <= productos.length) {
      let cantidad = parseInt(prompt("Indique una cantidad de viandas."));
      if (isNaN(cantidad)) {
        alert("Ingresar cantidad válida");
      } else {
        productos[eleccionProducto - 1].vender(cantidad);
      }
    } else {
      alert("Ingrese opcion válida");
    }
    seguirComprando = confirm("¿Desea seguir comprando?");
   
    if (seguirComprando) {
      return ingresoDatos();
    }
  }

  if (precioTotal != 0) {
    
    let listaVendidos = productos
    .filter((prod) => prod.cantidad > 0)
    .map((prod) => `# ${prod.cantidad} ${prod.nombre}`)
    .join("\n");

  alert(
    `Has comprado: \n${listaVendidos} \n\nEl total a pagar es de $ ${precioTotal}.\n\n¡Muchas Gracias por su compra!`
  );
  }

  alert("Gracias por visitar Que Rico Soli!! Esperamos volver a verte pronto.");
}

ingresoDatos();

console.log(precioTotal);
productos
  .filter((prod) => prod.cantidad > 0)
  .map((prod) => `Se vendieron ${prod.cantidad} ${prod.nombre}`)
  .forEach((resultadoVentaProd) => console.log(resultadoVentaProd));

  