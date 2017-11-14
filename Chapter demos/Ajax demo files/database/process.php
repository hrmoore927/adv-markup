<?php
require('db-con.php');
?> 

<?php
if($_GET['choice']=='both'){
	$sql = "SELECT name_car, name_cha FROM cartoons_car INNER JOIN characters_cha ON id_car = id_car_cha WHERE pet_cha = 1 ORDER BY name_car";
	} else if ($_GET['choice']=='pets'){
	$sql = "SELECT name_cha FROM characters_cha WHERE pet_cha = 1 ORDER BY name_cha";
	} else if ($_GET['choice']=='cartoons'){
	$sql = "SELECT name_car FROM cartoons_car ORDER BY name_car";
}

if(!$result = $con->query($sql)){
    die('There was an error running the query [' . $con->error . ']');
}

echo '<h2>Hello ' . $_GET['name'] . '</h2><h3>' . ucfirst($_GET['choice']) . '</h3>';

while($row = $result->fetch_assoc()){
	if($_GET['choice']=='both'){
		echo $row['name_car'] . ' - '. $row['name_cha'] . '<br />';
	} else if ($_GET['choice']=='pets'){
		echo $row['name_cha'] . '<br />';
	} else if ($_GET['choice']=='cartoons'){
		echo $row['name_car'] . '<br />';
	}
}
$result->free();

echo '<p id="searchReturn"><a href="ajaxDatabase.htm">Back to search form</a></p>';
?>