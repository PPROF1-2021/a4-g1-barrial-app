
// Example starter JavaScript for disabling form submissions if there are invalid fields
(function() {
  'use strict';
  window.addEventListener('load', function() {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.getElementsByClassName('needs-validation');
    // Loop over them and prevent submission
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


function validarTamaño() {

  var nombre = document.getElementById('nombre');
  var apellido = document.getElementById('apellido');
  var usuario = document.getElementById('usuario');
  var contraseña = document.getElementById('contraseña');
  var email = document.getElementById('email');
  var direccion = document.getElementById('direccion');


}

function validarEmail() {

  var email = document.getElementById('email').value;

  if(email == ""){
    alert("Ingrese el email de forma correcta.");
  }else {
    alert('Se envió un correo a su dirección de email.');
  }
 
  console.log(email)
}