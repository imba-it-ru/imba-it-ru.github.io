<?php
// Файлы phpmailer
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';
require 'phpmailer/Exception.php';

// $file = $_FILES['file'];
$host       = 'smtp-relay.sendinblue.com';
$username   = 'vk@imba-it.ru';
$password   = '*****************';
$secure     = 'tls';
$port       = 587;

$c = true;
$body = "";
// Формирование самого письма
foreach ( $_POST as $key => $value ) {
  if ( $value != "" && $key != "project_name" && $key != "admin_email" && $key != "form_subject" ) {
    $body .= "
    " . ( ($c = !$c) ? '<tr>':'<tr style="background-color: #f8f8f8;">' ) . "
      <td style='padding: 10px; border: #e9e9e9 1px solid;'><b>$key</b></td>
      <td style='padding: 10px; border: #e9e9e9 1px solid;'>$value</td>
    </tr>
    ";
  }
}

$body = "<table style='width: 100%;'>$body</table>";

// Настройки PHPMailer
$mail = new PHPMailer\PHPMailer\PHPMailer();

try {
  $mail->isSMTP();
  $mail->CharSet = "UTF-8";
  $mail->SMTPAuth   = true;

  $mail->Host       = $host;
  $mail->Username   = $username;
  $mail->Password   = $password;
  $mail->SMTPSecure = $secure;
  $mail->Port       = $port;

  $mail->setFrom('hello@imba-it.ru', 'ИМБА ИТ'); // Адрес самой почты и имя отправителя

  // Получатель письма
  $mail->addAddress('hello@imba-it.ru');

  // Отправка сообщения
  $mail->isHTML(true);
  $mail->Subject = "Запрос обратной связи с сайта imba-it.ru от " . $_POST['Имя'];
  $mail->Body = $body;

  $mail->send();

} catch (Exception $e) {
  $status = "Сообщение не было отправлено. Причина ошибки: {$mail->ErrorInfo}";
}

$mail = new PHPMailer\PHPMailer\PHPMailer();

try {
  $mail->isSMTP();
  $mail->CharSet = "UTF-8";
  $mail->SMTPAuth   = true;

  // Настройки вашей почты
  $mail->Host       = $host;
  $mail->Username   = $username;
  $mail->Password   = $password;
  $mail->SMTPSecure = $secure;
  $mail->Port       = $port;

  $mail->setFrom('hello@imba-it.ru', 'ИМБА ИТ'); // Адрес самой почты и имя отправителя

  // Получатель письма
  $mail->addAddress($_POST['Email'], $_POST['Имя']);

  // Отправка сообщения
  $mail->Subject = "Благодарим за заявку ❤️";
  $mail->Body = "Наши менеджеры свяжутся с вами в рабочее время с 10 до 18 по Москве.

  Оперативные контакты для связи:
  Телефон: +7 (495) 969 39 77
  Почта: hello@imba-it.ru";

  $mail->send();

} catch (Exception $e) {
  $status = "Сообщение не было отправлено. Причина ошибки: {$mail->ErrorInfo}";
}