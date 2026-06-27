function mostrar(id){

let secciones =
document.querySelectorAll(".contenido");

secciones.forEach(seccion=>{
seccion.style.display="none";
});

document.getElementById(id).style.display="block";
}
function calificarExamen(){

let resultado = document.getElementById("resultado");

resultado.innerHTML = "<h3>✅ Examen enviado correctamente.</h3>";

}
