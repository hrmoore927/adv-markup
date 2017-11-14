<?php
// Create connection
$con = new mysqli("localhost","root","","web215");

// Check connection
if($con->connect_errno > 0){
    die('Unable to connect to database [' . $con->connect_error . ']');
}
?> 