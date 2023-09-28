// Función para cargar los datos de productos desde el archivo JSON
function cargarProductos() {
    fetch('productos.json') 
        .then(response => response.json())
        .then(data => {
            const productosContainer = document.getElementById("productos");

            data.forEach(producto => {
                const card = document.createElement("div");
                card.classList.add("producto-card");
                card.innerHTML = `
                    <img src="${producto.foto}" alt="${producto.nombre}">
                    <h3>${producto.nombre}</h3>
                    <p><strong>Precio:</strong> $${producto.precio.toFixed(2)}</p>
                `;
                card.addEventListener("click", () => mostrarDetalleProducto(producto));
                productosContainer.appendChild(card);
            });
        })
}

// Función para mostrar el detalle de un producto
function mostrarDetalleProducto(producto) {
    const detalleProductoContainer = document.getElementById("detalle-producto");
    detalleProductoContainer.innerHTML = `
        <h2>${producto.nombre}</h2>
        <img src="${producto.foto}" alt="${producto.nombre}">
        <p><strong>Precio:</strong> $${producto.precio.toFixed(2)}</p>
        <p><strong>Descripción:</strong> ${producto.descripcion}</p>
        <p><strong>Indicación Médica:</strong> ${producto.indicacionMedica}</p>
        <p><strong>Contraindicación:</strong> ${producto.contraindicacion}</p>
        <p><strong>Medicamentos Similares:</strong> ${producto.similares.join(", ")}</p>
    `;
    detalleProductoContainer.classList.remove("hidden");
}

// Cargar los productos al cargar la página
window.addEventListener("load", cargarProductos);
