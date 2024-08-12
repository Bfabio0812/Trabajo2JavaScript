export function mostrarPrecio(items, nombreItem, precioItem) {
    let item = document.getElementById("item");
    item.innerHTML = ""; 
    items.forEach(({ src, alt }) => {
        item.innerHTML += `<img src="${src}" alt="${alt}">`;
    });

    item.innerHTML += `<p>${nombreItem}: $${precioItem}</p>`;
}