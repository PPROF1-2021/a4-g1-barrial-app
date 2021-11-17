<?php
$host="fdb33.awardspace.net";
$usuario="3918928_proteccionbarrial";
$clave="ispc1234";
$basededatos="3918928_proteccionbarrial";

$conn = new mysqli($host, $usuario, $clave, $basededatos);
    mysqli_query($conn, "SET character_set_result=utf8");
    if($conn->connect_error){
        die("Database Error : " . $conn->connect_error);
    }
?>