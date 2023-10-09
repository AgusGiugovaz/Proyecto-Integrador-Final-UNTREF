let todosLosProductos = document.querySelector('.productos');
//capturo la section donde luego agregaré la información de cada producto

fetch("../datos/productos.json")
.then((respuesta) =>{
    return respuesta.json()
})
.then ((productos) => {
    productos.forEach(pieza => {
        todosLosProductos.innerHTML += `
        <article class = "detalle col-12 col-md-4 col-lg-3"><br><br>
        <img class= "w-100" src= '${pieza.imagen}' alt= '${pieza.producto}' >
        <h3 class="name text-center">${pieza.producto}</h3>
        <h5 class="detail text-center">${pieza.descripcion}</h5>
        <a id='${JSON.stringify(pieza)}' href="#" class="botonDetalle btn btn-lg btn-outline-danger w-100" >Ver Detalle</a> <br><br><br>
      </article>`
     
    });

    //Agrego la información de cada producto (elementos HTML) a la página principal, de manera dinámica

   let botonDetalle = document.querySelectorAll('.botonDetalle');
    //Capturo todos los botones de "ver detalle"
    
    let arrayMiListaDeProductos
    let objeto
    let codigo
  
    botonDetalle.forEach(pieza => {
        pieza.addEventListener('click', function(e){
            e.preventDefault()

         let miListaDeProductos = localStorage.getItem("detallesProducto")

             if(miListaDeProductos == null){
                 arrayMiListaDeProductos = [];
            }else{
                 arrayMiListaDeProductos = JSON.parse(miListaDeProductos)

             }
            // Si no se selecciona nada se crea un array vacío, y si se selecciona algo, se crea un array de obj con esa elección
       
        arrayMiListaDeProductos.push(this.id);
        console.log(arrayMiListaDeProductos);
        objeto = JSON.parse(arrayMiListaDeProductos[0]);
        codigo = objeto.codigo

        localStorage.setItem("detallesProducto", JSON.stringify(arrayMiListaDeProductos))
        //guardo en local storage el producto que selecciona el usuario

        location.href = `detalle.html?codigo=${codigo}`
             
 })  

})

.catch((error) =>{
    console.log("Ha ocurrido un error! "+error);
})
})


