const formulario = document.getElementById("formulario");

formulario.addEventListener("submit", (event) =>{
    event.preventDefault();
    alert(document.getElementById("nombreIndex").value + " " + document.getElementById("apellidoIndex").value + " sus datos fueron enviados con éxito");
    formulario.submit();
  })

//cambia el active de los link (activa el que pasan por parámetro y saca el que estaba antes)
function activarLink(id){
    const link = document.getElementById(id);
    const activo = document.querySelector(".active");  
    activo.classList.remove("active");
    link.classList.add("active");
    document.getElementById("carru").classList.add("active");
  }