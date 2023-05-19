const cantidad = document.getElementById("txtCantidad");
const seleccion = document.getElementById("selCategoria");
const form = document.getElementById("form");



//Escucho Eventos

cantidad.addEventListener("keydown", (event) => {
  if ((event.key==".") || (event.key=="e") || (event.key==",") || (event.key=="-") || (event.key=="+")){
    event.preventDefault();
  }
})

cantidad.addEventListener("focusout", (event) => {    
  calcularImporte(cantidad.value, seleccion.value);
});  

seleccion.addEventListener("change", (event) =>{
  if (cantidad.value != ""){
    calcularImporte(cantidad.value, seleccion.value);
  }
})

form.addEventListener("submit", (event) => {  
  event.preventDefault();
  alert(document.getElementById("txtNombre").value + " " + document.getElementById("txtApellido").value + " su compra se ha realizado con éxito!!");
  form.submit();
});

//calculo el importe a pagar
function calcularImporte(entradas, tipo){
  let costo = entradas * 200;
  let descuento = 0
  switch (tipo){
    case "Estudiante":
      descuento = costo * 80 / 100;
      costo = costo - descuento;
      document.getElementById("txtTotal").value = "Total a pagar: $" + costo;
      break;
    
    case "Trainee":
      descuento = costo * 50 / 100;
      costo = costo - descuento;
      document.getElementById("txtTotal").value = "Total a pagar: $" + costo;
      break;

    case "Junior":
      descuento = costo * 15 / 100;
      costo = costo - descuento;
      document.getElementById("txtTotal").value = "Total a pagar: $" + costo;
      break;
  }
}

//borra los datos del formulario
function borrarForm(){
    document.getElementById("txtNombre").value = "";
    document.getElementById("txtApellido").value = "";
    document.getElementById("txtCorreo").value = "";
    document.getElementById("txtCantidad").value = "";    
    document.getElementById("txtTotal").value = "Total a pagar: $";    
    document.getElementById("selCategoria").value = "Estudiante";
}

//cambia el active de los link (activa el que pasan por parámetro y saca el que estaba antes)
function activarLink(id){
  const link = document.getElementById(id);
  const activo = document.querySelector(".active");  
  activo.classList.remove("active");
  link.classList.add("active");
  document.getElementById("carru").classList.add("active");
}


