<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE-edge">
    <meta name="viewport" content="width-device-width, initial scale=1.0">
    <title>Guardar datos del cliente</title>
    
</head>
<body>
    <p> <a href="registro.html"> Regresar</a> </p>
    <input type="button" value="Volver" onclick=""> <br>

    <input type="button" value="Submit" id="submit" onclick=""> <br/>

    <!-- Mensaje -->
    <div id="mensaje"></div>

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

print " <p>Su Nombre es <strong>$nombre</strong>.</p>\n";
print "\n";
print " <p>Su Apellido es <strong>$apellido</strong>.</p>\n";
print "\n";
print " <p>Su Usuario es <strong>$usuarioF</strong>.</p>\n";
print "\n";
print " <p>Su Contraseña es <strong>$contrasenia</strong>.</p>\n";
print "\n";
print " <p>Su Email es <strong>$email</strong>.</p>\n";
print "\n";
print " <p>Su Direccion es <strong>$direccion</strong>.</p>\n";
print "\n";
print " <p>Su Fecha es <strong>$fecha</strong>.</p>\n";
print "\n";
print " <p>Su Edad es <strong>$edad</strong>.</p>\n";
print "\n";
print " <p>Su Telefono es <strong>$telefono</strong>.</p>\n";
print "\n";
print " <p>Su Ciudad es <strong>$ciudad</strong>.</p>\n";
print "\n";
print " <p>Su Provincia es <strong>$provincia</strong>.</p>\n";
print "\n";
print " <p>Su CP es <strong>$cp</strong>.</p>\n";
print "\n";

// Datos de conexion
include("datosDB.php");
$con = mysqli_connect($host,$usuario,$clave,$basededatos) or die ("No se ha podido conectar al servidor de Base de datos");
if (!$con) {
    die("Conexion fallida: " . mysqli_connect_error());
}

$db = mysqli_select_db($con, $basededatos) or die ( "Ups! no se ha podido conectar a la base de datos" );
$consulta = "INSERT INTO Usuario (Nombre, Apellido, Usuario, Contrasenia, Email, Domicilio, Fecha, Edad, Telefono, Ciudad, Provincia, CP) VALUES ('$nombre', '$apellido', '$usuarioF', '$contrasenia', '$email', '$direccion', '$fecha', '$edad', '$telefono', '$ciudad', '$provincia', '$cp')";

if(mysqli_query ($con, $consulta)){
    echo "<p>Registro agregado.</p>";
    } else {
    echo "<p>No se agrego nuevo registro</p>";
    echo "Error: " . $consulta . "<br>" . mysqli_error($con);
    }
mysqli_close($con);

?>

</body>
</html>