<?php 

    $name = $_POST['name'];
    $visitor_email = $_POST['email'];
    $message = $_POST['message'];


    // email of the website
    $email_from = 'info@hernanpinovalencia.com';

    $email_subjet = ' Envio de nuevo formulario ';

    $email_body = "Nombre : $name.\n ".
                    "Email : $visitor_email.\n ".
                    "Mensaje: $message.\n ";

    $to = 'hernan.pino76@gmail.com';

    $headers = "De : $email_from \r\n ";

    $headers .= "Responder a: $visitor_email \r\n";

    mail($to,$email_subjet,$email_body,$headers);

    header("Location: index.html");

?>