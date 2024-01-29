<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $message = trim($_POST["message"]);

    // Set the recipient email address.
    $to = 'sarkorpython@gmail.com';

    // Subject of the email.
    $subject = 'New Message from Your Website Chat';

    // Mail headers.
    $headers = "From: webmaster@example.com\r\n";
    $headers .= "Reply-To: webmaster@example.com\r\n";
    $headers .= "X-Mailer: PHP/" . phpversion();

    // Send the email.
    if (mail($to, $subject, $message, $headers)) {
        echo 'Message sent successfully.';
    } else {
        echo 'Message sending failed.';
    }
}
?>
