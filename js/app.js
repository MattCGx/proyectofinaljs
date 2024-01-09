import ecomerceManager from "./src/manager/ecomerce.manager";
import htmlElements from "./src/elements/html.elements";

export const app = () => {
  ecomerceManager.mostrarProductos(ecomerceManager.productos);


};
