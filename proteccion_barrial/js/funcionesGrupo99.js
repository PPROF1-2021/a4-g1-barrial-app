<<<<<<< HEAD
// Example starter JavaScript for disabling form submissions if there are invalid fields
=======

>>>>>>> 92275adf8702c94a6259fc29d785da4c95139cfb
(function() {
  'use strict';
  window.addEventListener('load', function() {
    var forms = document.getElementsByClassName('needs-validation');
    var validation = Array.prototype.filter.call(forms, function(form) {
      form.addEventListener('submit', function(event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      }, false);
    });
  }, false);
})();

function ir() {

  var password=2468;
  var username="Martin";
  
  if(document.getElementById('contraseña').value==password && document.getElementById('usuario').value==username){
    alert ("Bienvenidos a Proteccion Barrial" );
  }
  else{
    alert("Por favor ingresa, nombre y usuario correctos.");
  
  }
  
  
}

function calcularEdad() {
  var fecha = document.getElementById('nacimiento').value;
  var hoy = new Date();
  var cumpleanos = new Date(fecha);
  var edad = hoy.getFullYear() - cumpleanos.getFullYear();

  document.getElementById('edad').value = edad;
}


function validarInfo() {

  var nombre = document.getElementById('nombre').value;
  var apellido = document.getElementById('apellido').value;
  var usuario = document.getElementById('usuario').value;
  var contraseña = document.getElementById('contraseña').value;
  var email = document.getElementById('email').value;
  var direccion = document.getElementById('direccion').value;
  var telefono = document.getElementById('telefono').value;
  var ciudad = document.getElementById('ciudad').value;

  //validacion del tipo de dato y longitud
	if (isNaN(nombre) == false){
    alert("El nombre debe contener letras.")
  }
  else if(nombre.length<=2){
		alert("El nombre debe tener más de dos caracteres.");
		return false;
	}
	else if(nombre.length>20){
		alert("El nombre debe ser de menos de 20 caracteres.");
		return false;
	}
  else if(isNaN(apellido) == false){
		alert("El apellido debe contener letras.");
		return false;
  }
	else if(apellido.length<=2){
		alert("El apellido debe tener más de dos caracteres.");
		return false;
	}
	else if(apellido.length>15){
		alert("El apellido debe ser de menos de 15 caracteres.");
		return false;
	}
  else if(usuario.length<=2){
		alert("El usuario debe tener más de dos caracteres.");
		return false;
  }
  else if(usuario.length>12){
		alert("El usuario debe ser de menos de 12 caracteres.");
		return false;
  }
  else if(contraseña.length<=2){
		alert("La contraseña debe tener más de dos caracteres.");
		return false;
  }
  else if(contraseña.length>12){
		alert("La contraseña debe ser de menos de 12 caracteres.");
		return false;
  }
  else if (/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(email) == false){
    alert("La dirección de email es incorrecta.");
  }
  else if(direccion.length<=2){
		alert("La dirección debe tener más de dos caracteres.");
		return false;
  }
  else if(direccion.length>20){
		alert("La dirección debe ser de menos de 20 caracteres.");
		return false;
  }
  else if(isNaN(telefono) == true){
		alert("Número de teléfono no válido.");
		return false;
  }
  else if(telefono.length<7){
		alert("Número de teléfono no válido.");
		return false;
  }
  else if(isNaN(ciudad) == false){
		alert("La ciudad debe contener letras.");
		return false;
  }
  else if(ciudad.length<=2){
		alert("La ciudad debe tener más de dos caracteres.");
		return false;
  }
}

function validarEmail() {

  var email = document.getElementById('email').value;
  if (/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(email) == false){
    alert("La dirección de email es incorrecta.");
  }
}

function validarContacto() {
  
  var nombre = document.getElementById('nombre').value;
  var apellido = document.getElementById('apellido').value;
  var email = document.getElementById('email').value;

  if (isNaN(nombre) == false){
    alert("El nombre debe contener letras.")
  }
  else if(nombre.length<=2){
		alert("El nombre debe tener más de dos caracteres.");
		return false;
	}
	else if(nombre.length>20){
		alert("El nombre debe ser de menos de 20 caracteres.");
		return false;
	}
  else if(isNaN(apellido) == false){
		alert("El apellido debe contener letras.");
		return false;
  }
	else if(apellido.length<=2){
		alert("El apellido debe tener más de dos caracteres.");
		return false;
	}
	else if(apellido.length>15){
		alert("El apellido debe ser de menos de 15 caracteres.");
		return false;
	}
  else if (/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(email) == false){
    alert("La dirección de email es incorrecta.");
  }
}

function validarLogin() {

  var usuario = document.getElementById('usuario').value;
  var contraseña = document.getElementById('contraseña').value;

  if(usuario.length<=2){
		alert("El usuario debe tener más de dos caracteres.");
		return false;
  }
  else if(usuario.length>12){
		alert("El usuario debe ser de menos de 12 caracteres.");
		return false;
  }
  else if(contraseña.length<=2){
		alert("La contraseña debe tener más de dos caracteres.");
		return false;
  }
  else if(contraseña.length>12){
		alert("La contraseña debe ser de menos de 12 caracteres.");
		return false;
  }
}

function redireccionarPagina() {
  window.location.href="index.html";
}

