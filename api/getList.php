<?php 
	header("Content-type: application/json; charset=ISO-8859-1");
	include_once "connect.php";

	    $id_kategori = $_GET['id_kategori'];
		$sql = "select * from wisata where id_kategori='$id_kategori'";
		$query = mysqli_query($conn, $sql);

		$arraySiswa  = array();
		while ($row = mysqli_fetch_array($query)){
			$arraySiswa[] = $row;
		}
		echo json_encode($arraySiswa);
		mysqli_close($conn);
 ?>