
const cantidad = document.getElementById("txtCantidad");
const seleccion = document.getElementById("selCategoria");

cantidad.addEventListener("focusout", (event) => {
    console.log("esooooooooooo");
  switch (document.getElementById("selCategoria").valueof){
    case "Estudiante":
        document.getElementById("txtTotal").value = "Total a pagar: $" + parseInt(cantidad)*200;
        break;
  }
});

function borrarForm(){
    document.getElementById("txtNombre").value = "";
    document.getElementById("txtApellido").value = "";
    document.getElementById("txtCorreo").value = "";
    document.getElementById("txtCantidad").value = "";    
    document.getElementById("txtTotal").value = "Total a pagar: $";    
}