<?php
	include_once "connect.php";

	$sql = "SELECT * FROM kategori";
	$query = mysqli_query($conn, $sql);

	$arraySiswa  = array();
	while ($row = mysqli_fetch_array($query)){
		$arraySiswa[] = $row;
	}
	echo json_encode($arraySiswa);
	mysqli_close($conn);
?>
