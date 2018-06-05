<?php
 
	include_once "connect.php";
	 $json = file_get_contents('php://input');
	$obj = json_decode($json,true);

	$namaWisata = $obj['namaWisata'];
	$fasilitas = $obj['fasilitas'];
	$lokasi = $obj['lokasi'];
	$id_kategori= $obj['id_kategori'];
	$foto = $obj['foto'];

	
	$Sql_Query = "INSERT INTO `wisata` (`namaWisata`, `fasilitas`, `lokasi`, `id_kategori`, `foto`) VALUES ('$namaWisata', '$fasilitas', '$lokasi', '$id_kategori', '$foto');";
	 
	 	if(mysqli_query($conn,$Sql_Query)){
				$MSG = 'Wisata berhasil ditambah!' ;
				$json = json_encode($MSG);
			 	echo $json ;
	 	}
	 	else{
				$MSG = 'Gagal Tambah Wisata!' ;
				$json = json_encode($MSG);
			 	echo $json ;
	 	} 	
?>