<?php
include 'cnct.php';
mysqli_select_db ( $con,'issimo') or die(mysql_error.'error selecting db');

$user= mysqli_real_escape_string($con,$_POST['uName']);
$klink= mysqli_real_escape_string($con,$_POST['kLink']);

$startup = "INSERT INTO Links (Link, User)VALUES('$klink', '$user')";

$result = mysqli_query($con, $startup);	//order executes
if($result){
	echo("<br>Input data successful");
} else{
	echo("<br>Input data failed");
}
?>