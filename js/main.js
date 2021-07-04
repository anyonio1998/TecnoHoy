function validar() {
    
    validarNombre();
    validarEmail();
    validarTelefono();
    validarAsunto();
}

    function validarNombre() {
    
        if (document.querySelector('#nombre').value.length == 0) {
            alert("Rellena el campo de nombre");
            return false;
        }
    } 
    function validarEmail() {
    var email =document.querySelector("#email").value;
        if (document.querySelector('#email').value.length == 0) {
            alert("Rellena el campo del email");
            return false;
            // if que comprueba que el formato del email es correcto
        }else  if (!(/\S+@\S+\.\S+/.test(email))) {
            alert("email incorrecto.");
        }

    }
       function validarTelefono() {
    
        if (document.querySelector('#telefono').value.length == 0) {
            alert("Rellena el campo del telefono");
            return false;
        }

    }
      function validarAsunto() {
    
        if (document.Formu
        .Proyectos.checked == false && document.Formu
        .consultoria.checked == false && document.Formu
                .Pedidos.checked == false&& document.Formu
                .Otros.checked == false) {
        alert("Seleccione al menos un asunto");
        return false;
    }
    
    
    }
