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

//Elimina cursos del carrito
carrito.addEventListener("click", (e) => {
    e.preventDefault();
    if(e.target.classList.contains("borrar-curso")){
        const cursoId = e.target.getAttribute("data-id");

        //Elimina de arreglo del articuloCrrito por el ID
        articulosCarrito = articulosCarrito.filter( curso => curso.id !== cursoId);
        console.log(articulosCarrito);

        carritoHTML();
    }
})

//Vaciar carrito
vaciarCarrito.addEventListener("click", (e) => {
    articulosCarrito = [];

    limpiarHTML();
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

    //Verifica que existe un articulo
    const existe = articulosCarrito.some(curso => curso.id === infoCurso.id);
    if (existe) {
        const cursos = articulosCarrito.map (curso => {
            if(curso.id === infoCurso.id){
                curso.cantidad++;
                return curso;
            }else {
                return curso;
            }
        })
    } else {
        //Agrega elementos al arreglo del carrito
        articulosCarrito = [...articulosCarrito, infoCurso];
        console.log(articulosCarrito);
    }
    carritoHTML();
})

//Muestra el carrito de compras en el HTML
const carritoHTML = () => {

    limpiarHTML();

    articulosCarrito.forEach( curso => {
        const { imagen, nombre, precio, cantidad, id} = curso;
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>
                <img src="${imagen}" width="100">
            </td>
            <td>${nombre}</td>
            <td>${precio}</td>
            <td>${cantidad}</td>
            <td><a href="#" class="borrar-curso" data-id="${id}"> X </a></td>
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