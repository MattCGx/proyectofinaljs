import Swal from "sweetalert2";
import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";

// Selectores
let productosFilter = document.querySelector("#productosFilter");
let buscar = document.querySelector("#buscar");
let productosContainer = document.querySelector("#productosContainer");
let canvasBody = document.querySelector("#canvasBody");
let carritoPadre = document.querySelector("#carritoPadre");
let carritoContainer = document.querySelector("#carritoContainer");
let totalCarrito = document.querySelector("#totalCarrito");
let botonCarrito = document.querySelector("#botonCarrito");
let botonCarritoNotificacion = document.querySelector(
  "#botonCarritoNotificacion"
);
let botonComprar = document.querySelector(".botonComprar");

// Arrays

let productosFiltrados = [];
const productosData = [
  {
    id: "1yey0oh",
    nombre: "Álbum: Encantamiento Canino",
    precio: 20.99,
    categoria: "discografia",
    descripcion:
      "Sumérgete en la magia musical de Jane con su último álbum, donde cada melodía es un encantamiento para el corazón.",
    imagen: "imagen_album1.jpeg",
  },
  {
    id: "1yey0oi",
    nombre: "Álbum: Sueños Peludos",
    precio: 18.5,
    categoria: "discografia",
    descripcion:
      "Viaja a través de los sueños peludos de Jane con este álbum lleno de ritmos contagiosos y armonías encantadoras.",
    imagen: "imagen_album2.jpeg",
  },
  {
    id: "1yey0oj",
    nombre: "Álbum: Latidos de Pata",
    precio: 25.75,
    categoria: "discografia",
    descripcion:
      "Descubre los latidos sincronizados de las patas de Jane en cada canción de este álbum único que te hará bailar.",
    imagen: "imagen_album3.jpeg",
  },
  {
    id: "1yey0ok",
    nombre: "Álbum: Estrellas Caninas",
    precio: 22.0,
    categoria: "discografia",
    descripcion:
      "Explora el universo de Jane a través de las estrellas caninas en este álbum que ilumina tus sentidos con cada nota.",
    imagen: "imagen_album4.jpeg",
  },

  {
    id: "1yey0ol",
    nombre: "Conjunto Canino Elegante",
    precio: 30.0,
    categoria: "indumentaria",
    descripcion:
      "Viste a la moda canina con este elegante conjunto diseñado especialmente para perritas con estilo, inspirado en Jane.",
    imagen: "imagen_prenda1.jpeg",
  },
  {
    id: "1yey0om",
    nombre: "Chaqueta Peluda de Jane",
    precio: 22.99,
    categoria: "indumentaria",
    descripcion:
      "Obtén la chaqueta peluda de Jane y siéntete tan acogedor como su abrazo. ¡Una prenda imprescindible para los amantes de Jane!",
    imagen: "imagen_prenda2.jpeg",
  },
  {
    id: "1yey0on",
    nombre: "Vestido Estampado de Huellas",
    precio: 35.5,
    categoria: "indumentaria",
    descripcion:
      "Camina con orgullo las huellas de Jane con este encantador vestido estampado. ¡Una declaración de amor a los peludos amigos!",
    imagen: "imagen_prenda3.jpeg",
  },
  {
    id: "1yey0oo",
    nombre: "Collar Brillante de Jane",
    precio: 28.75,
    categoria: "indumentaria",
    descripcion:
      "Luce el brillo de la estrella de Jane con este collar brillante. Una joya canina que hará que todos los ojos estén puestos en ti.",
    imagen: "imagen_prenda4.jpeg",
  },

  {
    id: "1yey0op",
    nombre: "Libro: Aventuras de Jane en el Parque",
    precio: 15.0,
    categoria: "libros",
    descripcion:
      "Embárcate en las emocionantes aventuras de Jane en el parque, donde cada página cuenta una historia única llena de diversión y amistad.",
    imagen: "imagen_libro1.jpeg",
  },
  {
    id: "1yey0oq",
    nombre: "Libro: El Secreto de la Cola Feliz",
    precio: 18.99,
    categoria: "libros",
    descripcion:
      "Descubre el secreto de la cola feliz de Jane en este encantador libro que revela las claves para una vida llena de alegría y wagging.",
    imagen: "imagen_libro2.jpeg",
  },
  {
    id: "1yey0or",
    nombre: "Libro: Paseos Lunares con Jane",
    precio: 21.5,
    categoria: "libros",
    descripcion:
      "Únete a Jane en sus paseos lunares donde la magia se encuentra en cada rincón. Un libro que transporta a todos a un mundo de fantasía canina.",
    imagen: "imagen_libro3.jpeg",
  },
  {
    id: "1yey0os",
    nombre: "Libro: Jane y la Búsqueda del Hueso Dorado",
    precio: 24.75,
    categoria: "libros",
    descripcion:
      "Acompaña a Jane en su épica búsqueda del hueso dorado, una historia llena de intriga, valentía y travesuras caninas.",
    imagen: "imagen_libro4.jpeg",
  },

  {
    id: "1yey0ot",
    nombre: "DVD: Jane en la Gran Pantalla",
    precio: 12.99,
    categoria: "DVD",
    descripcion:
      "Disfruta de las emocionantes actuaciones de Jane en la gran pantalla con este DVD que captura la esencia mágica de sus momentos más destacados.",
    imagen: "imagen_dvd1.jpeg",
  },
  {
    id: "1yey0ou",
    nombre: "DVD: Documental de Jane, la Exploradora",
    precio: 14.5,
    categoria: "DVD",
    descripcion:
      "Sumérgete en la vida de Jane, la exploradora canina, a través de este fascinante documental que revela sus secretos, alegrías y descubrimientos.",
    imagen: "imagen_dvd2.jpeg",
  },
  {
    id: "1yey0ov",
    nombre: "DVD: Aventuras Nocturnas de Jane",
    precio: 19.75,
    categoria: "DVD",
    descripcion:
      "Explora las emocionantes aventuras nocturnas de Jane con este DVD lleno de misterio, diversión y momentos inolvidables bajo la luna.",
    imagen: "imagen_dvd3.jpeg",
  },
  {
    id: "1yey0ow",
    nombre: "DVD: Jane y los Caninos del Futuro",
    precio: 16.0,
    categoria: "DVD",
    descripcion:
      "Viaja al futuro canino con Jane y su pandilla en este DVD que combina ciencia ficción, risas y lecciones de vida canina.",
    imagen: "imagen_dvd4.jpeg",
  },
];
let carritoCompra = JSON.parse(localStorage.getItem("carrito")) || [];

// Clases
//class Producto {
//constructor() {
//this.id = Date.now().toString(36);
//this.nombre = nombre;
//this.precio = precio;
//this.categoria = categoria;
//this.descripcion = texto;
//this.imagen = imagen;
//}
//}

//class testimonio {
//  constructor() {
//    this.nombre = nombre;
//    this.texto = texto;
//  }
//}

// Funciones:

const crearBoton = (texto, ...estilos) => {
  let button = document.createElement("button");
  button.innerText = texto;
  button.classList.add(...estilos);
  return button;
};

const mostrarProductos = (listaproductos) => {
  productosContainer.innerHTML = " ";
  listaproductos.forEach((producto) => {
    let card = document.createElement("div");
    card.className = "card col-4 g-4 text-center";
    card.style.width = "18rem";
    card.innerHTML = `
      <img src="../Assets/img/tienda/${producto.imagen}" class="card-img-top mt-2">
      <div class="card-body">
        <h5 class="card-title fs-4">${producto.nombre}</h5>
        <p class="card-text fs-5">${producto.descripcion}</p>
        <p class="card-text fs-4 badge bg-success">$ ${producto.precio} USD</p>
      </div>
    `;
    let botonCompraContainer = document.createElement("div");
    botonCompraContainer.className = "text-center pt-2";
    card.appendChild(botonCompraContainer);
    let botonCompra = crearBoton(
      "Comprar",
      "btn",
      "btn-primary",
      "shadow",
      "fs-4",
      "mb-3",
      "botonComprar"
    );
    botonCompraContainer.appendChild(botonCompra);
    productosContainer.appendChild(card);
    botonCompra.onclick = () => agregarAlCarrito(producto.id);
  });
};

const verCarrito = (carritoCompra) => {
  if (carritoCompra.length > 0) {
    canvasBody.classList.remove("text-center");
    carritoContainer.innerHTML = " ";
    carritoCompra.forEach((producto) => {
      let cardCarrito = document.createElement("li");
      cardCarrito.className = "cardCanvasCarrito list-group-item";
      cardCarrito.innerText = `${producto.nombre}`;
      let cardCarritoPrecioyEliminar = document.createElement("div");
      cardCarritoPrecioyEliminar.className = "row";
      cardCarritoPrecioyEliminar.innerHTML = `<p class="card-text col-6"> $ ${producto.precio} USD</p>`;
      cardCarrito.appendChild(cardCarritoPrecioyEliminar);
      let botonEliminarCarrito = crearBoton(
        "Eliminar",
        "btn",
        "col-3",
        "btn-danger"
      );
      cardCarritoPrecioyEliminar.appendChild(botonEliminarCarrito);
      carritoContainer.appendChild(cardCarrito);
      botonEliminarCarrito.onclick = () => {
        eliminarProductoCarrito(producto.index);
      };
    });
  } else {
    canvasBody.className = "offcanvas-body text-center";
    carritoContainer.innerHTML = `<h3 class="offcanvas-title text-center" >¡Tu Carrito está Vacío!</h3>   
    <h4 class="offcanvas-title text-center">¿Por qué no revisas nuestra tienda y agregas algunos productos?</h4>
     `;
  }
};

const agregarAlCarrito = (productoID) => {
  const productoAgregado = productosData.find(
    (producto) => producto.id === productoID
  );

  Swal.fire({
    title: `¿Agregar ${productoAgregado.nombre} al carrito?`,
    icon: "question",
    background: "#d09b71",
    showCancelButton: true,
    confirmButtonText: "Si",
    cancelButtonText: "No",
    cancelButtonColor: "red",
    confirmButtonColor: "green",
  }).then((resp) => {
    if (resp.isConfirmed) {
      productoAgregado.index = Date.now().toString(36);
      carritoCompra.push(productoAgregado);
      localStorage.setItem("carrito", JSON.stringify(carritoCompra));
      Toastify({
        text: `Nuevo producto en Carrito: " ${productoAgregado.nombre}" `,
        position: "right",
        gravity: "bottom",
        offset: {
          y: 95,
        },
        style: {
          background: "linear-gradient(258deg, #85FFBD 0%, #FFFB7D 100%)",
          color: "#000000",
          borderRadius: "10px",
        },
      }).showToast();

      Swal.fire({
        icon: "success",
        background: "#d09b71",
        title: "¡Porducto agregado!",
        showConfirmButton: false,
        timer: 1000,
      });

      verCarritoNotificacion();
      verTotal(carritoCompra);
    } else {
      Swal.fire({
        icon: "error",
        background: "#d09b71",
        title: "¡Compra Cancelada!",
        showConfirmButton: false,
        timer: 1000,
      });
    }
  });
};

const verTotal = (carrito) => {
  const total = carrito.reduce((acumulador, producto) => {
    return acumulador + producto.precio;
  }, 0).toFixed(2);

  if (carrito.length > 0) {
    totalCarrito.innerText = `Total a Pagar: $${total} USD`;
  } else {
    totalCarrito.innerText = " ";
  }
};

const eliminarProductoCarrito = (productoIndex) => {
  let index = carritoCompra.findIndex(
    (producto) => producto.index === productoIndex
  );

  Swal.fire({
    title: `¿Estás seguiro que deseas eliminar ${carritoCompra[index].nombre} del carrito?`,
    icon: "warning",
    background: "#d09b71",
    showCancelButton: true,
    confirmButtonText: "Si",
    cancelButtonText: "No",
    cancelButtonColor: "green",
    confirmButtonColor: "orange",
  }).then((resp) => {
    if (resp.isConfirmed) {
      Toastify({
        text: `Producto Eliminado: " ${carritoCompra[index].nombre}" `,
        position: "right",
        gravity: "bottom",
        offset: {
          y: 95,
        },
        style: {
          background:
            "linear-gradient(111deg, #FBAB7E 0%, #F7CE68 33%, #f20e0e 100%)",
          color: "#000000",
          borderRadius: "10px",
        },
      }).showToast();

      if (index !== -1) {
        carritoCompra.splice(index, 1);
        localStorage.setItem("carrito", JSON.stringify(carritoCompra));
        Swal.fire({
          icon: "success",
          background: "#d09b71",
          title: "¡Porducto Eliminado!",
          showConfirmButton: false,
          timer: 1000,
        });

        verCarrito(carritoCompra);
        verTotal(carritoCompra);
        verCarritoNotificacion();
      }
    } else {
      Swal.fire({
        icon: "error",
        background: "#d09b71",
        title: "¡Porducto no Eliminado!",
        showConfirmButton: false,
        timer: 1000,
      });
    }
  });
};

const verCarritoNotificacion = () => {
  botonCarritoNotificacion.innerHTML = " ";

  if (carritoCompra !== undefined) {
    let notificacion = document.createElement("div");
    notificacion.className = "notificacionCarrito";
    notificacion.innerText = `${carritoCompra.length}`;

    if (carritoCompra.length > 0) {
      console.log("hay objetos en el carrito");
      botonCarritoNotificacion.appendChild(notificacion);
    }
  }
};

const filtrarProductos = (categoriaProducto) => {
  switch (categoriaProducto) {
    case "Música":
      productosFiltrados = productosData.filter(
        (producto) => producto.categoria === "discografia"
      );
      mostrarProductos(productosFiltrados);
      break;
    case "Indumentaria":
      productosFiltrados = productosData.filter(
        (producto) => producto.categoria === "indumentaria"
      );
      mostrarProductos(productosFiltrados);
      break;
    case "Peliculas/Documentales":
      productosFiltrados = productosData.filter(
        (producto) => producto.categoria === "DVD"
      );
      mostrarProductos(productosFiltrados);
      break;
    case "Libros":
      productosFiltrados = productosData.filter(
        (producto) => producto.categoria === "libros"
      );
      mostrarProductos(productosFiltrados);
      break;
    case "Todo":
      mostrarProductos(productosData);
      break;
    default:
      mostrarProductos(productosData);
  }
};

verCarritoNotificacion();
mostrarProductos(productosData);
verCarrito(carritoCompra);

buscar.oninput = (event) => {
  if (event.target.value === " ") {
    mostrarProductos(productosData);
  } else {
    productosFiltrados = productosData.filter((producto) =>
      producto.nombre.toLowerCase().includes(event.target.value)
    );
    mostrarProductos(productosFiltrados);
  }
};

productosFilter.onchange = () => {
  filtrarProductos(productosFilter.value);
};

botonCarrito.onclick = () => {
  verCarrito(carritoCompra);
  verTotal(carritoCompra);
};
