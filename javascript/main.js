import { handleMenuSelection } from './menu.js';
import { mostrarPrecio } from './mostrarPrecio.js';
import { handleComboSelection } from './combos.js';

document.getElementById('btn').onclick = (event) => {
    const menuValue = document.getElementById('menu').value;

    let data = handleMenuSelection(menuValue);

    if (!data) {
        data = handleComboSelection(menuValue);
    }

    if (data) {
        mostrarPrecio(data.items, data.nombreItem, data.precioItem);
    } else {
        alert("Debes seleccionar una opción del menú");
    }
};