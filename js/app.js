//Variables 
const carrito = document.querySelector("#carrito");
const listaCursos = document.querySelector("#lista-cursos");
const listaCarrito = document.querySelector("#lista-carrito tbody");
const vaciarCarrito = document.querySelector("#vaciar-carrito");

let articulosCarrito = [];

// addEventListener
listaCursos.addEventListener("click", (e) => {
    e.preventDefault();

    if(e.target.classList.contains("agregar-carrito")) {
        const cursoSeleccionado = e.target.parentElement.parentElement;

        leerDatosCurso(cursoSeleccionado);
    }
}) 

//Funciones
const leerDatosCurso = (curso => {
    // console.log(curso)

    //Creación de objeto con el contenido del elemento actual
    const infoCurso = {
        imagen: curso.querySelector("img").src,
        nombre: curso.querySelector("h4").textContent,
        precio: curso.querySelector(".precio span").textContent,
        id : curso.querySelector("a").getAttribute("data-id"),
        cantidad: 1   
    }

    //Agrega elementos al arreglo del carrito
    articulosCarrito = [...articulosCarrito, infoCurso];
    console.log(articulosCarrito);

    carritoHTML();
})

//Muestra el carrito de compras en el HTML
const carritoHTML = () => {

    limpiarHTML();

    articulosCarrito.forEach( curso => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>
                
                ${curso.nombre}
               
            </td>
        `;

        //Agrega el html del carrito en el tbody
        listaCarrito.appendChild(row)
    })
}

//Elimina los elementos del tbody
const limpiarHTML = () => {
    while(listaCarrito.firstChild){
        listaCarrito.removeChild(listaCarrito.firstChild);
    }
}