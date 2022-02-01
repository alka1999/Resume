<?php

$name = $_POST['name'];
$email = $_POST['email'];
$subject = $_POST['subject'];
$message = $_POST['message'];

// Create connection
$conn = new mysqli('localhost', 'root', '', 'resume_data');
// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}
else{
    $stmt = $conn->prepare("insert into contact_me(name, email, subject, message) values(?,?,?,?)");
    $stmt->bind_param("ssss",$name, $semail, $subject, $message);
    $stmt->execute();
    echo "message sent successfully...";
    $stmt->close();
    $conn->close();
    // $stmt = $conn->prepare("insert into contact_me(name, email, subject, message) values(?, ?, ?, ?);
    // $stmt->bind_param("ssss", $name, $semail, $subject, $message);
    // $stmt->execute();
    // echo "message sent successfully...";
    // $stmt->close();
    // $conn->close();
}

?>