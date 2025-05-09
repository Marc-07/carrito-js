//Variables 
const carrito = document.querySelector("#carrito");
const listaCursos = document.querySelector("#lista-cursos");
const listaCarrito = document.querySelector("#lista-carrito tbody");
const vaciarCarrito = document.querySelector("#vaciar-carrito");

// addEventListener
listaCursos.addEventListener("click", (e) => {
    e.preventDefault();

    if(e.target.classList.contains("agregar-carrito")) {
        const cursoSeleccionado = e.target.parentElement.parentElement;

        leerDatosCurso(cursoSeleccionado);
    }
}) 

const leerDatosCurso = (curso => {
    console.log(curso)

    //Creación de objeto con el contenido del elemento actual
    const infoCurso = {
        imagen: curso.querySelector("img").src,
        nombre: curso.querySelector("h4").textContent,
        precio: curso.querySelector(".precio span").textContent,
        id : curso.querySelector("a").getAttribute("data-id"),
        cantidad: 1

        
    }

    console.log(infoCurso)
})