export function handleMenuSelection(value) {
    switch (value) {
        case "1":
            return {
                items: [{ src: "./img/hamburguesa.png", alt: "Imagen de hamburguesa" }],
                nombreItem: "Hamburguesa",
                precioItem: "15.000"
            };
        case "2":
            return {
                items: [{ src: "./img/perro.png", alt: "Imagen de perro caliente" }],
                nombreItem: "Perro caliente",
                precioItem: "10.000"
            };
        case "3":
            return {
                items: [{ src: "./img/helado.png", alt: "Imagen de helado" }],
                nombreItem: "Helado",
                precioItem: "7.000"
            };
        case "4":
            return {
                items: [{ src: "./img/ensalada.png", alt: "Imagen de ensalada" }],
                nombreItem: "Ensalada",
                precioItem: "8.000"
            };
        default:
            return null;
    }
}