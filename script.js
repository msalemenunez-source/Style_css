function mostrar(id){

let secciones =
document.querySelectorAll(".contenido");

secciones.forEach(seccion=>{
seccion.style.display="none";
});

document.getElementById(id).style.display="block";
}

function correcto(){
alert("✅ Respuesta Correcta");
}

function incorrecto(){
alert("❌ Respuesta Incorrecta");
}
