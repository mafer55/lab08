// ============================================
// CLASE PRODUCTO
// ============================================

class Producto {

    constructor(nombre, precio, descuento, imagen) {
        this.nombre = nombre;
        this.precio = precio;
        this.descuento = descuento;
        this.imagen = imagen;
    }

    calcularPrecioFinal() {

        let descuento =
            this.precio * this.descuento / 100;

        return this.precio - descuento;
    }
}
const imagenLaptop =
    "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=500&q=80";

const imagenTablet =
    "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=500&q=80";

const imagenSmartwatch =
    "https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&w=500&q=80";


// ============================================
// CREAR LOS PRODUCTOS
// ============================================

const producto1 = new Producto(
    "Laptop Lenovo",
    2800,
    15,
    imagenLaptop
);

const producto2 = new Producto(
    "Tablet Samsung",
    1500,
    10,
    imagenTablet
);

const producto3 = new Producto(
    "Smartwatch",
    650,
    20,
    imagenSmartwatch
);


// ============================================
// ARREGLO CATALOGO
// ============================================

const catalogo = [
    producto1,
    producto2,
    producto3
];


// ============================================
// CAPTURAR CONTENEDOR
// ============================================

const contenedor =
    document.getElementById("catalogo");


// ============================================
// RECORRER EL CATALOGO
// ============================================

catalogo.forEach(function(producto) {

    // Crear tarjeta
    const tarjeta =
        document.createElement("div");

    tarjeta.classList.add("producto");


    // Crear contenido
    tarjeta.innerHTML = `

        <img
            src="${producto.imagen}"
            alt="${producto.nombre}"
        >

        <h2>${producto.nombre}</h2>

        <p class="precio">
            Precio: S/ ${producto.precio.toFixed(2)}
        </p>

        <p class="descuento">
            Descuento: ${producto.descuento}%
        </p>

        <p class="precio-final">
            Precio final: S/ ${producto.precio.toFixed(2)}
        </p>

        <button>
            Aplicar descuento
        </button>

    `;


    // ========================================
    // EVENTO CLICK
    // ========================================

    const boton =
        tarjeta.querySelector("button");


    boton.addEventListener("click", function() {

        // Calcular descuento
        const precioFinal =
            producto.calcularPrecioFinal();


        // Buscar precio
        const precio =
            tarjeta.querySelector(".precio-final");


        // Cambiar el DOM
        precio.textContent =
            `Precio final: S/ ${precioFinal.toFixed(2)}`;


        // Cambiar botón
        boton.textContent =
            "Descuento aplicado";

    });


    // Agregar tarjeta
    contenedor.appendChild(tarjeta);

});