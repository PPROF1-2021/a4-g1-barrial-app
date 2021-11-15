
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
  
  if(document.form.password.value==password && document.form.username.value==username){
  alert ("Bienvenidos a Proteccion Barrial" );
  }
  else{
    alert("Por favor ingresa, nombre y usuario correctos.");
  
  }
  
  
  }
