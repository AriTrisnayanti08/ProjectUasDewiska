<?php
 
	include_once "connect.php";
	$json = file_get_contents('php://input');
	$obj = json_decode($json,true);

	$id_komentar = $obj['id_komentar'];
	$id_wisata = $obj['id_wisata'];
	$id_login = $obj['id_login'];
	$komentar = $obj['komentar'];


	$Sql_Query = "INSERT INTO komentar (id_komentar, id_wisata, id_login, komentar) values ('$id_komentar, $id_wisata, $id_login, $komentar') where id_wisata='$id_wisata', $id_login='$id_login'";
	 
	 	if(mysqli_query($conn,$Sql_Query)){
				$MSG = 'Komentar Ditambahkan' ;
				$json = json_encode($MSG);
			 	echo $json ;
	 	}
	 	else{
				$MSG = 'Gagal Tambah Komentar' ;
				$json = json_encode($MSG);
			 	echo $json ;
	 	} 	
	mysqli_close($conn);
	
?>