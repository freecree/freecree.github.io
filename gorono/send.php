<?php
$message = '';
if(isset($_POST['name'])){
	$message .= 'Имя: '.$_POST['name'].'<br>';
}
if(isset($_POST['email'])){
	$message .= 'Email: '.$_POST['email'].'<br>';
}
if(isset($_POST['phone'])){
	$message .= 'Телефон: '.$_POST['phone'].'<br>';
}
if(isset($_POST['type'])){
	$message .= 'Тип услуги: '.$_POST['type'].'<br>';
}
if(isset($_POST['photo'])){
	$message .= 'Фото: '.$_POST['photo'].'<br>';
}
if(isset($_POST['review'])){
	$message .= 'Текст отзыва: '.$_POST['review'].'<br>';
}
// пример использования
require_once "SendMailSmtpClass.php"; // подключаем класс
  
$mailSMTP = new SendMailSmtpClass('alfer.evgen@yandex.ru', '1002251Mckurt', 'ssl://smtp.yandex.ru', 'Заявка', 465);
// $mailSMTP = new SendMailSmtpClass('логин', 'пароль', 'хост', 'имя отправителя');
  
// заголовок письма
$headers= "MIME-Version: 1.0\r\n";
$headers .= "Content-type: text/html; charset=utf-8\r\n"; // кодировка письма
$headers .= "From: Заявка <alfer.evgen@yandex.ru>\r\n"; // от кого письмо
$result =  $mailSMTP->send('Assel.bazarbayeva@gmail.com', 'Заявка с сайта', $message, $headers); // отправляем письмо
// $result =  $mailSMTP->send('Кому письмо', 'Тема письма', 'Текст письма', 'Заголовки письма');
if($result === true){
    echo "Письмо успешно отправлено";
}else{
    echo "Письмо не отправлено. Ошибка: " . $result;
}
?>

<!--<script type="text/javascript">-->
<!--window.location = "index.html?modal"-->
<!--</script>-->