function mostrar(id){
    let secciones = document.querySelectorAll(".contenido");
    secciones.forEach(seccion=>{
        seccion.style.display="none";
    });
    document.getElementById(id).style.display="block";
}

function calificarExamen(){
    const total = 12;
    let buenas = 0;

    for(let i = 1; i <= total; i++){
        let opcion = document.querySelector(`input[name="p${i}"]:checked`);
        if(opcion && opcion.value === "1"){
            buenas++;
        }
    }

    const malas = total - buenas;
    const nota = Math.round((buenas / total) * 100);

    document.getElementById("resultado").innerHTML = `
    ✅ Respuestas correctas: ${buenas}<br>
    ❌ Respuestas incorrectas: ${malas}<br>
    📈 Nota final: ${nota} / 100
    `;
}

