<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $subject = $_POST['subject'];
    $message = $_POST['message'];

    $to = 'tudirecciondeemail@gmail.com'; // Reemplaza con tu dirección de correo electrónico de Gmail
    $subject = 'Nuevo mensaje de ' . $name;
    $message_body = "Nombre: $name\nEmail: $email\n\nMensaje:\n$message";

    if (mail($to, $subject, $message_body)) {
        echo 'Tu mensaje ha sido enviado. Muchas gracias!';
    } else {
        echo 'Error al enviar el mensaje.';
    }
} else {
    echo 'Acceso denegado.';
}
?>
