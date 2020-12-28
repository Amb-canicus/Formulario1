function validar(){
    let nombre, correo, telefono, clave, expresion;
     
    nombre = document.getElementById("nombre").value;
    correo = document.getElementById("correo").value;
    telefono = document.getElementById("telefono").value;
    clave = document.getElementById("contraseña").value;

    expresion = /\w+@+\w+\.+[a-z]/;

    if(nombre ==="" || correo ==="" || telefono ==="" || clave ===""){
        alert("TODOS LOS CAMPOS SON OBLIGATORIOS");
        return false;
    }
    else if(nombre.length>30){
        alert("Demasiado caracteres en el campo nombre")
        return false;
    }
    else if(clave.length<6){
    alert("La clave debe contener al menos seis caracteres")
    }
    else if(isNaN(telefono) || telefono.length<10 || telefono.length>15){
        alert("El telefono debe contener al menos 10 numeros y un maximo de 15, sin guiones ni puntos")
    }
    else if(!expresion.test(correo)){
        alert("Correo no valido")
    }

}