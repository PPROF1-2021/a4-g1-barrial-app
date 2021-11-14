
<<<<<<< HEAD

function calcularEdad(){
    var fecha = document.getElementById(nacimiento);
    var hoy = new Date();
    var cumpleanos = new Date(fecha);
    var edad = hoy.getFullYear() - cumpleanos.getFullYear();
    var m = hoy.getMonth() - cumpleanos.getMonth();
/*     var campo = document.getElementById(edad)
 */
    if (m < 0 || (m === 0 && hoy.getDate() < cumpleanos.getDate())) {
        edad--;
    }
    document.getElementById('edad').value = edad;
}

=======
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

function ir(){

  var username= 2468;
  var password= "martin";

  if(document.getElementById('usuario')== username && document.getElementById('contraseña')== password){
  alert ("Bienvenidos a Proteccion Barrial" );
  
  }
  else{
    alert("Por favor ingresa, nombre y usuario correctos.");
  
  }
  
}

function calcularEdad() {
  var fecha = document.getElementById(nacimiento)
  var hoy = new Date();
  var cumpleanos = new Date(fecha);
  var edad = parseInt(hoy.getFullYear()) - parseInt(cumpleanos.getFullYear());
  var m = parseInt(hoy.getMonth()) - parseInt(cumpleanos.getMonth());

  if (m < 0 || (m == 0 && hoy.getDate() < cumpleanos.getDate())) {
      edad--;
  }

  document.getElementById('edad').value = edad;
}
>>>>>>> 94df67974a92bc758641f76304b2260b570863f7
