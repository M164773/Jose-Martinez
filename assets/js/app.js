function comprobar(){
    let email = document.getElementById("email")
    let mensaje = document.getElementById("mensaje")
    
    if(email.value==""){
        alert("Debe escribir su email en el formulario.")
        email.style.borderBottomColor = "red"
        mensaje.style.borderBottomColor = "#9e9e9e"
    } else if(mensaje.value==""){
        alert("Debe escribir su mensaje en el formulario.")
        mensaje.style.borderBottomColor = "red"
        email.style.borderBottomColor = "#9e9e9e"
    } else{
        alert("Su formulario se ha enviado con éxito. Gracias por tu mensaje.")
        email.style.borderBottomColor = "#9e9e9e"
        mensaje.style.borderBottomColor = "#9e9e9e"
    }
}