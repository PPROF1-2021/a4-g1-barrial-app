<?php

$nombre = $_POST["nombre"];
$apellido = $_POST["apellido"];
$usuarioF = $_POST["usuarioF"];
$contrasenia = $_POST["contrasenia"];
$email = $_POST["email"];
$direccion = $_POST["direccion"];
$fecha = $_POST["fecha"];
$edad = $_POST["edad"];
$telefono = $_POST["telefono"];
$ciudad = $_POST["ciudad"];
$provincia = $_POST["provincia"];
$cp = $_POST["cp"];


// Datos de conexion
include("datosDB.php");
$con = mysqli_connect($host,$usuario,$clave,$basededatos) or die ("No se ha podido conectar al servidor de Base de datos");
if (!$con) {
    die("Conexion fallida: " . mysqli_connect_error());
}

$db = mysqli_select_db($con, $basededatos) or die ( "Ups! no se ha podido conectar a la base de datos" );
$consulta = "INSERT INTO Usuario (Nombre, Apellido, User, Contrasenia, Email, Domicilio, Fecha, Edad, Telefono, Ciudad, Provincia, CP) VALUES ('$nombre', '$apellido', '$usuarioF', '$contrasenia', '$email', '$direccion', '$fecha', '$edad', '$telefono', '$ciudad', '$provincia', '$cp')";

if(mysqli_query ($con, $consulta)){
    echo'<script type="text/javascript">
    alert("Usuario registrado con éxito! Para iniciar sesión, vaya a la sección Ingresar");
    window.location.href="index.html";
    </script>';
    } else {
    echo'<script type="text/javascript">
    alert("No se pudo registrar al usuario");
    window.location.href="registro.html";
    </script>';
    //echo "Error: " . $consulta . "<br>" . mysqli_error($con);
    }
mysqli_close($con);

?>

</body>
</html>