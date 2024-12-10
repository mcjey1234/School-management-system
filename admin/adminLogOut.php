<?php 
session_start();
function session_clear() {
// if session exists, unregister all variables that exist and destroy session
  $exists = "no";
  $session_array = explode(";",session_encode());
  for ($x = 0; $x < count($session_array); $x++) {
    $name  = substr($session_array[$x], 0, strpos($session_array[$x],"|")); 
	if (session_is_registered($name)) {
	  session_unregister('$name');
	  $exists = "yes";
	}
  }
if ($exists != "no") {
    session_destroy();
	}
}
session_clear();
if(!session_is_registered(session_name())) {

}
if (isset($_SESSION['basic_is_logged_in'])) {
   unset($_SESSION['basic_is_logged_in']);
}
?>
<?php 
	include("adminLoginForm.php");?>

<center>

</center>