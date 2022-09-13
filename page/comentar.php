<?php
	
	$nombre=$_POST["name"];
	$comentario=$_POST["message"];
	$con=mysqli_connect('localhost','root','','comentarios');
	mysqli_select_db($con,'comentarios');
	$query = mysqli_query($con,'SELECT * FROM comentario');
	$insertar="INSERT INTO comentario(nombre,comentario) VALUES ('$nombre','$comentario')";
	mysqli_query($con,$insertar);
	header("Location: " . $_SERVER["HTTP_REFERER"]);
?>