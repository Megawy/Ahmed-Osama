<?php
if(empty($_POST['name']) || empty($_POST['subject']) || empty($_POST['message']) || !filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)) {
  http_response_code(400); // Bad request
  exit();
}

$name = htmlspecialchars($_POST['name']);
$email = htmlspecialchars($_POST['email']);
$subject = htmlspecialchars($_POST['subject']);
$message = htmlspecialchars($_POST['message']);

$to = "ahmedmega185@outlook.com"; // Change this email to yours
$subject = "$subject: $name";
$body = "You have received a new message from your website contact form.\n\n";
$body .= "Here are the details:\n\nName: $name\nEmail: $email\nSubject: $subject\nMessage: $message";
$headers = "From: $email\r\n"; // Add a newline after "From" header
$headers .= "Reply-To: $email\r\n";

if(mail($to, $subject, $body, $headers)) {
  http_response_code(200); // Success
} else {
  http_response_code(500); // Internal Server Error
}
?>
