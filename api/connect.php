<?php
$servername = "localhost";
$username = "id5358009_dewiska";
$password = "dewiska";
$dbname = "id5358009_dewiska";

// Create connection
$conn = mysqli_connect($servername, $username, $password, $dbname);
// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}else{
	//echo "Koneksi berhasil";
}
?>
