<?php
// Create connection
$con=mysqli_connect("issimo.db.11126985.hostedresource.com","issimo","Iss!mo2694884");

// Check connection
if (mysqli_connect_errno())
  {
  echo "Failed to connect to MySQL: " . mysqli_connect_error();
  }
?>