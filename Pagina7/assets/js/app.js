function comprobar(){
    let nombre = document.getElementById("nombre")
    let email = document.getElementById("email")
    let mensaje = document.getElementById("mensaje")

    if(nombre.value==""){
        alert("Debe escribir su nombre en el formulario.")
        nombre.style.borderBottomColor = "red"
        email.style.borderBottomColor = "#9e9e9e"
        mensaje.style.borderBottomColor = "#9e9e9e"
    } else if(email.value==""){
        alert("Debe escribir su email en el formulario.")
        email.style.borderBottomColor = "red"
        nombre.style.borderBottomColor = "#9e9e9e"
        mensaje.style.borderBottomColor = "#9e9e9e"
    } else if(mensaje.value==""){
        alert("Debe escribir su mensaje en el formulario.")
        mensaje.style.borderBottomColor = "red"
        nombre.style.borderBottomColor = "#9e9e9e"
        email.style.borderBottomColor = "#9e9e9e"
    } else{
        alert("Su formulario se ha enviado con éxito. Gracias por tu mensaje, "+nombre.value)
        nombre.style.borderBottomColor = "#9e9e9e"
        email.style.borderBottomColor = "#9e9e9e"
        mensaje.style.borderBottomColor = "#9e9e9e"
    }
}