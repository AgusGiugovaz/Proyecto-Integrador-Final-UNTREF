let codigo = location.search;
//console.log(producto); Obtengo la query string de la pag

let codigoProducto = new URLSearchParams(codigo);
//console.log(codigoProducto);  me permite trabajar con los parametros de las query string (ej: codigoProducto.get('producto'))

let productoSeleccionado = codigoProducto.get("codigo");
//console.log(productoSeleccionado); Obtengo el valor del parametro "producto" que el usuario selecciona


let codigoFinal = document.getElementById("codigo");
let nombre = document.getElementById("nombre");
let imagen = document.getElementById("imagen");
let detalle = document.getElementById("detalle");
let precio = document.getElementById("precio");
let puntuacion = document.getElementById("puntuacion");
// Capturo los datos de "detalle.html" que quiero que luego aparezcan a futuro cuando el usuario seleccione un producto

let detalleProducto = JSON.parse(localStorage.getItem("detallesProducto"));
// Tomo los datos del local storage que guardé en "index.js" pero lo asigno a otra variable

let arrayDetalle = JSON.parse(detalleProducto[0]);
console.log(arrayDetalle);
// Convierto el objeto en un array (POR QUE VA CON EL "0" DENTRO DE LOS CORCHETES???) porque captura el primer elemento del array 

codigoFinal.innerHTML = `Código del producto: ${productoSeleccionado}`;
nombre.innerHTML = `${arrayDetalle.producto}`;
imagen.innerHTML = `<img class="w-100" src="${arrayDetalle.imagen}" alt="${arrayDetalle.producto}"/>`;
detalle.innerHTML = `${arrayDetalle.detalle}`;
precio.innerHTML = `Precio: ${arrayDetalle.precio}`;
puntuacion.innerHTML = `Puntación: ${arrayDetalle.puntuacion}`;

let botonRegresar = document.getElementById('botonRegresar');
botonRegresar.addEventListener('click', function(){
    //Este a mi no me funcionó
    //localStorage.removeItem('detalleProducto');
    //Pero este sí -Perfectamente borra todo lo que está en el localStorage
    localStorage.clear()
    //Aquí retorno a la página principal y muestro todos los datos que estan en el archivo json
    location.href = 'index.html'
})


