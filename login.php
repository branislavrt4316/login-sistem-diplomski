<?php 
session_start();
 
 if(isset($_POST['email'])){
  $email = $_POST['email'];
 }
 if (isset($_POST['password'])) {
  $loz = $_POST['password'];
 }
	$db=@mysqli_connect("localhost", "root", "", "probnabazadiplomski") or die ("Neuspela konekcija na bazu!");
	mysqli_query($db, "SET NAMES UTF8");
	$upit="SELECT * FROM korisnici WHERE email='{$email}' AND loz='{$loz}'";
	$rez=mysqli_query($db, $upit);
	if(mysqli_num_rows($rez)==0)
	{       
        header('Location: http://localhost/SAJT%20-%20RADNA%20VERZIJA/login.html'); //Ako ni lozinka ni korime ne postoje vraca na login str
	}

    $red=mysqli_fetch_array($rez); //rezultat upita pretvara u niz


  $_SESSION['sess_user_id'] = $red['id_korisnika'];
  $_SESSION['sess_user_email'] = $red['email'];
  $_SESSION['sess_user_lozinka'] = $red['loz'];
  $_SESSION['sess_user_ime'] = $red['ime'];
  $_SESSION['sess_user_prezime'] = $red['prezime'];
  $_SESSION['sess_user_status'] = $red['status'];
  $_SESSION['sess_user_datum'] = $red['datum'];
  $_SESSION['logged_in_time'] = time(); // Taking now logged in time.
  $_SESSION['expire'] = $_SESSION['logged_in_time'] + (10 * 60); // Ending a session in 10 minutes from the starting time.
  $_SESSION['sess_user_logedIn'] = "true";
  $_SESSION['kategorija'] = "sve";

  session_write_close(); //zatvara sesiju

if( $_SESSION['sess_user_status'] == "admin"){
   header('Location: http://localhost/SAJT%20-%20radna%20verzija/adminProfile.html');
}elseif($_SESSION['sess_user_status'] == "kupac"){
 header('Location: http://localhost/SAJT%20-%20RADNA%20VERZIJA/userProfile.php');
}else{
   header('Location: http://localhost/SAJT%20-%20RADNA%20VERZIJA/login.html');
  };

?>

