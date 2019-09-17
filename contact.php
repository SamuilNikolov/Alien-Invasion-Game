<?php
function ValidateEmail($email)
{
   $pattern = '/^([0-9a-z]([-.\w]*[0-9a-z])*@(([0-9a-z])+([-\w]*[0-9a-z])*\.)+[a-z]{2,6})$/i';
   return preg_match($pattern, $email);
}
if ($_SERVER['REQUEST_METHOD'] == 'POST' && isset($_POST['formid']) && $_POST['formid'] == 'form1')
{
   $mailto = 'mathinvasion@mail.bg';
   $mailfrom = isset($_POST['email']) ? $_POST['email'] : $mailto;
   $subject = 'Zapitvane ot mathinvasion';
   $message = 'Zapitvane ot mathinvasion';
   $success_url = './yes.php';
   $error_url = './no.php';
   $error = '';
   $eol = "\n";
   $max_filesize = isset($_POST['filesize']) ? $_POST['filesize'] * 1024 : 1024000;
   $boundary = md5(uniqid(time()));

   $header  = 'From: '.$mailfrom.$eol;
   $header .= 'Reply-To: '.$mailfrom.$eol;
   $header .= 'MIME-Version: 1.0'.$eol;
   $header .= 'Content-Type: multipart/mixed; boundary="'.$boundary.'"'.$eol;
   $header .= 'X-Mailer: PHP v'.phpversion().$eol;
   if (!ValidateEmail($mailfrom))
   {
      $error .= "The specified email address is invalid!\n<br>";
   }

   if (!empty($error))
   {
      $errorcode = file_get_contents($error_url);
      $replace = "##error##";
      $errorcode = str_replace($replace, $error, $errorcode);
      echo $errorcode;
      exit;
   }

   $internalfields = array ("submit", "reset", "send", "filesize", "formid", "captcha_code", "recaptcha_challenge_field", "recaptcha_response_field", "g-recaptcha-response");
   $message .= $eol;
   $message .= "IP Address : ";
   $message .= $_SERVER['REMOTE_ADDR'];
   $message .= $eol;
   $logdata = '';
   foreach ($_POST as $key => $value)
   {
      if (!in_array(strtolower($key), $internalfields))
      {
         if (!is_array($value))
         {
            $message .= ucwords(str_replace("_", " ", $key)) . " : " . $value . $eol;
         }
         else
         {
            $message .= ucwords(str_replace("_", " ", $key)) . " : " . implode(",", $value) . $eol;
         }
      }
   }
   $body  = 'This is a multi-part message in MIME format.'.$eol.$eol;
   $body .= '--'.$boundary.$eol;
   $body .= 'Content-Type: text/plain; charset=UTF-8'.$eol;
   $body .= 'Content-Transfer-Encoding: 8bit'.$eol;
   $body .= $eol.stripslashes($message).$eol;
   if (!empty($_FILES))
   {
       foreach ($_FILES as $key => $value)
       {
          if ($_FILES[$key]['error'] == 0 && $_FILES[$key]['size'] <= $max_filesize)
          {
             $body .= '--'.$boundary.$eol;
             $body .= 'Content-Type: '.$_FILES[$key]['type'].'; name='.$_FILES[$key]['name'].$eol;
             $body .= 'Content-Transfer-Encoding: base64'.$eol;
             $body .= 'Content-Disposition: attachment; filename='.$_FILES[$key]['name'].$eol;
             $body .= $eol.chunk_split(base64_encode(file_get_contents($_FILES[$key]['tmp_name']))).$eol;
          }
      }
   }
   $body .= '--'.$boundary.'--'.$eol;
   if ($mailto != '')
   {
      mail($mailto, $subject, $body, $header);
   }
   header('Location: '.$success_url);
   exit;
}
?>
<!doctype html>
<html>
<head>
<meta charset="utf-8">
<title>Математическо нашествие</title>
<link href="U1.css" rel="stylesheet">
<link href="contact.css" rel="stylesheet">
</head>
<body>
<div id="container">
<div id="wb_Form1" style="position:absolute;left:0px;top:0px;width:877px;height:549px;z-index:9;">
<form name="contact" method="post" action="<?php echo basename(__FILE__); ?>" enctype="multipart/form-data" accept-charset="UTF-8" id="Form1">
<input type="hidden" name="formid" value="form1">
<input type="text" id="Editbox1" style="position:absolute;left:265px;top:79px;width:336px;height:23px;line-height:23px;z-index:0;" name="name" value="" placeholder=" &#1048;&#1084;&#1077;*">
<input type="text" id="Editbox2" style="position:absolute;left:265px;top:113px;width:336px;height:23px;line-height:23px;z-index:1;" name="email" value="" placeholder=" E-mail*">
<input type="submit" id="Button1" name="" value="Изпрати" style="position:absolute;left:265px;top:342px;width:338px;height:20px;z-index:2;">
<div id="wb_Text3" style="position:absolute;left:5px;top:5px;width:272px;height:15px;z-index:3;text-align:left;">
<span style="color:#000000;font-family:Calibri;font-size:13px;"><strong>ФОРМА ЗА КОНТАКТИ:</strong></span></div>
<div id="wb_Text7" style="position:absolute;left:605px;top:5px;width:272px;height:15px;z-index:4;text-align:left;">
<span style="color:#000000;font-family:Calibri;font-size:13px;"><strong>АДРЕС:</strong></span></div>
<textarea name="question:" id="TextArea1" style="position:absolute;left:265px;top:148px;width:336px;height:183px;z-index:5;" rows="10" cols="64" placeholder=" &#1057;&#1098;&#1086;&#1073;&#1097;&#1077;&#1085;&#1080;&#1077;"></textarea>
<div id="wb_Text1" style="position:absolute;left:266px;top:386px;width:211px;height:136px;text-align:right;z-index:6;">
<span style="color:#FFFFFF;font-family:'Trebuchet MS';font-size:13px;"><strong>Автор: Самуил Николов<br>ученик от 8 клас<br>ПМГ &quot;В. Друмев&quot;, гр. В. Търново<br></strong></span><span style="color:#FFFFFF;font-family:'Trebuchet MS';font-size:11px;"><strong>___________________________<br>Ръководител: Георги Игнатов<br>учител по информатика и ИТ<br></strong>___________________________</span></div>
<div id="wb_Image8" style="position:absolute;left:484px;top:370px;width:119px;height:160px;z-index:7;">
<img src="images/img00031.png" id="Image8" alt=""></div>
<div id="wb_Text2" style="position:absolute;left:248px;top:20px;width:375px;height:43px;text-align:center;z-index:8;">
<span style="color:#FFFFFF;font-family:'Trebuchet MS';font-size:35px;">СВЪРЖЕТЕ СЕ С МЕН</span></div>
</form>
</div>
</div>
</body>
</html>