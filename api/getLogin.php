<?php
// Importing DBConfig.php file.
include 'connect.php';
 // Getting the received JSON into $json variable.
 $json = file_get_contents('php://input');
 
 // decoding the received JSON and store into $obj variable.
 $obj = json_decode($json,true);
 
// Populate User email from JSON $obj array and store into $email.
$username = $obj['Username'];
// Populate Password from JSON $obj array and store into $password.
$password = $obj['Password'];

//Applying User Login query with email and password match.
$Sql_Query = "select * from login where Username = '$username' and Password = '$password' ";

// Executing SQL Query.
$check = mysqli_fetch_array(mysqli_query($conn,$Sql_Query));


if(isset($check)){

 $SuccessLoginMsg = 'Login berhasil!';
 
 // Converting the message into JSON format.
$SuccessLoginJson = json_encode($SuccessLoginMsg);
 
// Echo the message.
 echo $SuccessLoginJson ; 

 }
 
 else{
 
 // If the record inserted successfully then show the message.
$InvalidMSG = 'Login Gagal Username atau Password Salah' ;
 
// Converting the message into JSON format.
$InvalidMSGJSon = json_encode($InvalidMSG);
 
// Echo the message.
 echo $InvalidMSGJSon ;
 
 }
 
 mysqli_close($conn);
?>