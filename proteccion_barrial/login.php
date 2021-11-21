<?php

$host="fdb33.awardspace.net";
$usuario="3918928_proteccionbarrial";
$clave="ispc1234";
$basededatos="3918928_proteccionbarrial";

$conn = new mysqli($host, $usuario, $clave, $basededatos);
if (!$conn) 
{
	die("No hay conexión: ".mysqli_connect_error());
}

$nombre = $_POST["usuarioF"];
$pass = $_POST["contrasenia"];

$query = mysqli_query($conn,"SELECT * FROM Usuario WHERE User = '".$nombre."' and Contrasenia = '".$pass."'");
$nr = mysqli_num_rows($query);


if($nr == 1)
{
    echo'<script type="text/javascript">
    alert("Bienvenido");
    window.location.href="index.html";
    </script>';
    
	//echo "Bienvenido:" .$nombre;
}
else if ($nr == 0) 
{
	echo'<script type="text/javascript">
    alert("Usuario o contraseña incorrectos! Si no está registrado, ingrese sus datos en la sección Registrarse");
    window.location.href="login.html";
    </script>';
}


?>