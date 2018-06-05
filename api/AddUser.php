<?php
 
	include_once "connect.php";
	
	$json = file_get_contents('php://input');
	$obj = json_decode($json,true);

	$nama = $obj['nama'];
	$email = $obj['email'];
	$Username = $obj['Username'];
	$Password = $obj['Password'];

	$Sql_Query = "INSERT INTO login (nama,email,Username,Password) values ('$nama','$email','$Username','$Password')";
	 
	 	if(mysqli_query($conn,$Sql_Query)){
				$MSG = 'Daftar Akun Berhasil' ;
				$json = json_encode($MSG);
			 	echo $json ;
	 	}
	 	else{
				$MSG = 'Gagal Daftar Akun' ;
				$json = json_encode($MSG);
			 	echo $json ;
	 	} 	
	mysqli_close($conn);
	
?>