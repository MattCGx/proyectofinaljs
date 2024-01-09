// imports

import htmlElements from "../elements/html.elements";
import arraysData from "../data/arrays.data";
import { crearBoton } from "../elements/boton.elements";

const mostrarProductos = () => {
  htmlElements.productosContainer.innerHTML = "";
  arraysData.productosData.forEach((producto) => {
    let card = document.createElement("div");
    card.className = "card col-4 g-4 text-center";
    card.style.width = "18rem";
    card.innerHTML = `
      <img src="../Assets/img/tienda/${producto.imagen}" class="card-img-top mt-2">
      <div class="card-body">
        <h5 class="card-title fs-4">${producto.nombre}</h5>
        <p class="card-text fs-5">${producto.descripcion}</p>
        <p class="card-text fs-4 badge bg-success">${producto.precio} Usd</p>
      </div>
    `;
    let botonCompraContainer = document.createElement("div");
    botonCompraContainer.className = "text-center pt-2";
    card.appendChild(botonCompraContainer);
    let botonCompra = crearBoton ("Comprar", "btn", "btn-primary", "shadow", "fs-4", "mb-3", "botonComprar");
    botonCompra.onclick = () => agregarAlCarrito(producto.id);
    botonCompraContainer.appendChild(botonCompra);
    htmlElements.productosContainer.appendChild(card);
  });
};

const agregarAlCarrito = (productoID) => {
    const productoAgregado = arraysData.productosData.find(producto => producto.id === productoID);
      arraysData.carrito.push(productoAgregado);
      localStorage.setItem("carrito", JSON.stringify(arraysData.carrito));
  }; 
    
  let carritoCompra = JSON.parse(localStorage.getItem("carrito")) || [];



const verCarritoNotificacion = (carritoCompra) => {

    if(carritoCompra !== undefined) {
    let notificacion = document.createElement("div");
    notificacion.className = "notificacionCarrito"
    notificacion.innerHTML = `${carritoCompra.length}`

    if (carritoCompra.length > 0){ 
        console.log("hay objetos en el carrito");
        htmlElements.botonCarritoNotificacion.appendChild(notificacion)};

    };
    
};


export default {
  mostrarProductos,
  agregarAlCarrito,
  verCarritoNotificacion
};