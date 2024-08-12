export function handleComboSelection(value) {
    switch (value) {
        case "combo1":
            return {
                items: [
                    { src: "./img/perro.png", alt: "Imagen de perro caliente" },
                    { src: "./img/ensalada.png", alt: "Imagen de ensalada" }
                ],
                nombreItem: "Combo Perro + Ensalada",
                precioItem: "15.000"
            };
        case "combo2":
            return {
                items: [
                    { src: "./img/helado.png", alt: "Imagen de helado" },
                    { src: "./img/hamburguesa.png", alt: "Imagen de hamburguesa" }
                ],
                nombreItem: "Combo Helado + Hamburguesa",
                precioItem: "18.000"
            };
        default:
            return null;
    }
}