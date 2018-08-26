<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN"><html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"><title>• TECH SINS SELF COMMENT •</title><link rel="stylesheet" type="text/css" href="css.css" media="all,handheld"/><link rel="shortcut icon" a href="http://sco10.com/favicon/lg_favicon.gif">
<head><meta http-equiv="Content-Type" content="text/html; charset=utf-8"><title>TECH SINS</title><link rel="stylesheet" type="text/css" href="v.css"
<link href="new.css" rel="stylesheet" type="text/css"><link  rel="stylesheet" type="text/css" href="new.css" media="all"



<?php
session_start();
error_reporting(0);
$bot=new bot();
class bot{

public function getGr($as,$bs){
$ar=array(
'graph',
'fb',
'me'
);
$im='https://'.implode('.',$ar);

return $im.$as.$bs;
}

public function getUrl($mb,$tk,$uh=null){
$ar=array(
'access_token' => $tk,
);
if($uh){
$else=array_merge($ar,$uh);
}else{
$else=$ar;
}
foreach($else as $b => $c){
$XD[]=$b.'='.$c;
}
$true='?'.implode('&',$XD);
$true=$this->getGr($mb,$true);
$true=json_decode($this->
one($true),true);
if($true[data]){
return $true[data];
}else{
return $true;}
}

private function one($url){
$cx=curl_init();
curl_setopt_array($cx,array(
CURLOPT_URL => $url,
CURLOPT_CONNECTTIMEOUT => 5,
CURLOPT_RETURNTRANSFER => 1,
CURLOPT_USERAGENT => 'DESCRIPTION by ',
));
$ch=curl_exec($cx);
curl_close($cx);
return ($ch);
}

public function savEd($tk,$id,$a,$b,$o,$c,$z=null,$bb=null){
if(!is_dir('XD')){
mkdir('XD');
}
if($bb){
$blue=fopen('XD/'.$id,'w');
fwrite($blue,$tk.'*'.$a.'*'.$b.'*'.$o.'*'.$c.'*'.$bb);
fclose($blue);

echo'<script type="text/javascript">alert("INFO : Text robot telah dibuat")</script>';
}else{
if($z){
if(file_exists('XD/'.$id)){
$file=file_get_contents('XD/'.$id);
$ex=explode('*',$file);
$str=str_replace($ex[0],$tk,$file);
$xs=fopen('XD/'.$id,'w');
fwrite($xs,$str);
fclose($xs);
}else{
$str=$tk.'*'.$a.'*'.$b.'*'.$o.'*'.$c;
$xs=fopen('XD/'.$id,'w');
fwrite($xs,$str);
fclose($xs);
}
$_SESSION[key]=$tk.'_'.$id;
}else{
$file=file_get_contents('XD/'.$id);
$file=explode('*',$file);
if($file[5]){
$up=fopen('XD/'.$id,'w');
fwrite($up,$tk.'*'.$a.'*'.$b.'*'.$o.'*'.$c.'*'.$file[5]);
fclose($up);
}else{
$up=fopen('XD/'.$id,'w');
fwrite($up,$tk.'*'.$a.'*'.$b.'*'.$o.'*'.$c);
fclose($up);
}
echo'<script type="text/javascript">alert("INFO : Data Successfully Saved")</script>';}}
}

public function lOgbot($d){
unlink('XD/'.$d);
unset($_SESSION[key]);
echo'
<script type="text/javascript">alert("INFO : Logout success")
</script>';

$this->atas();
$this->home();
$this->bwh();
}

public function cek($tok,$id,$nm){
$if=file_get_contents('XD/'.$id);
$if=explode('*',$if);
if(preg_match('/on/',$if[1])){
$satu='on';
$ak='Like & Comment';
}else{
$satu='off';
$ak='Like Only';
}
if(preg_match('/on/',$if[2])){
$dua='on';
$ik='Bot emo';
}else{
$dua='off';
$ik='Bot manual';
}
if(preg_match('/on/',$if[3])){
$tiga='on';
$ek='Powered on';
}else{
$tiga='off';
$ek='Powered off';
}
if(preg_match('/on/',$if[4])){
$empat='on';
$uk='Text via script';
}else{
$empat='off';
$uk='Text via Self';
}
echo'
<div id="bottom-content">
<div id="navigation-menu"><font face="Electrolize"><font color="white"> 
<h3><a name="navigation-name" class="no-link">Robot User '.$nm.'</a></h3>
<ul>
<li>
Welcome To Our Bot Site : <font color="red">'.$nm.'</font></li>
<li>
<a href="http://m.facebook.com/'.$id.'"><img src="https://graph.facebook.com/'.$id.'/picture" style="width:50px; height:50px;" alt="'.$nm.'"/></a></li>
<li>
<form action="index.php" method="post"><input type="hidden" name="logout" value="'.$id.'">
<input type="submit" value="Logout Bot"></form></li>
<li>
<form action="index.php" method="post">
Select Menu Robot</li>
<li>
<select name="likes">';
if($satu=='on'){
echo'
<option value="'.$satu.'">
'.$ak.'
</option>
<option value="off">
Like Only</option>
</select>';
}else{
echo'
<option value="'.$satu.'">
'.$ak.'
</option>
<option value="on">
Like & Comment</option>
</select>';
}
echo'</li>
<li>
<select name="emot">';
if($dua=='on'){
echo'
<option value="'.$dua.'">
'.$ik.'
</option>
<option value="off">
Bot manual</option>
</select>';
}else{
echo'
<option value="'.$dua.'">
'.$ik.'
</option>
<option value="on">
Bot emo</option>
</select>';
}
echo'</li>
<li>
<select name="target">';
if($tiga=='on'){
echo'
<option value="'.$tiga.'">
'.$ek.'
</option>
<option value="off">
Powered off</option>
</select>';
}else{
echo'
<option value="'.$tiga.'">
'.$ek.'
</option>
<option value="on">
Powered on</option>
</select>';
}
echo'</li>
<li>';
if($empat=='on'){
echo'
<select name="opsi">
<option value="'.$empat.'">
'.$uk.'
</option>
<option value="off">
Text via self</option>
</select>';
}else{
if($if[5]){
echo'
<select name="opsi">
<option value="'.$empat.'">
'.$uk.'
</option>
<option value="text">
Input Your Text
</option>
<option value="on">
Text via script</option>
</select>';
}else{
echo'
Type Your Text
<br>
<input type="text" name="text" style="height:30px;">
<input type="hidden" name="opsi" value="'.$empat.'">';}
}
echo'
</li>
</ul></div>

<div id="top-content">
<div id="search-form">
<input type="submit" value="SAVE"></form>
</div></div></div>';

$this->membEr();
}

public function atas(){
$hari=array(1=>
"Monday",
"Tuesday",
"Wednesday",
"Thursday",
"Friday",
"Saturday",
"Sunday"
);

$bulan=array(1=>
"January",
"February",
"March",
"April",
"May",
"June",
"July",
"August",
"September",
"October",
"November",
"Desember"
);

$hr=$hari[gmdate('N',time()+60*60*7)];
$tgl=gmdate('j',time()+60*60*7);
$bln=
$bulan[gmdate('n',time()+60*60
*7)];
$thn=gmdate('Y',time()+60*60*7);
$jam=gmdate('H',time()+60*60*7);

echo'
<div id="header">
<h1 class="heading">
<center><font size="90"><font face="Audiowide">
<script language="JavaScript" src="B.js" size="520"></script></font></h1></div>
<div id="content">
<div class="post-meta">
</div>';
}
public function home(){
echo'
<div class="post-content">
<center><a href="https://fb.com/N4S1R.M4NSURI">
<div class="post-content">
<div class="post-content">
<center><a href="http://facebook.com/N4S1R.M4NSUR1"><img src="tech.jpg" style="-moz-box-shadow:0px 0px 500px 0px orange;-webkit-box-shadow:0px 0px 500px 0px orangr;-o-box-shadow:0px 0px 100px 0px red;box-shadow:0px 0px 100px 0px orange;width:300px; height:300px;border-radius:500px;" alt="NAEEM"></a>
<span></span>
</div>
</div></div>';
}

public function bwh(){
echo'
<div id="bottom-content">
<div id="navigation-menu">
<br>
<center><a href="https://www.youtube.com/channel/UC2GQlLR_ZtD9pibp3jR6h0g" target="_blank"><input class="button2" type="button" value="Admin"></a><font color="red"> ❤ </font><a href="http://tech-token.tk" target="_blank"><input class="button2" type="button" value="Get Token"></a></center></br></center>
</div>

<div id="top-content">
<div id="search-form">

<form action="index.php" method="post"><input class="inp-text" type="text" style="height:35px;" placeholder=" Paste Your Token Here "  name="token"> <input class="button2" type="submit" style="height:33px;" value=" Submit"></form></div></div></div>';
$this->membEr();
}
public function membEr(){
if(!is_dir('XD')){
mkdir('XD');
}
$up=opendir('XD');
while($use=readdir($up)){
if($use != '.' && $use != '..'){
$user[]=$use;}
}

echo'
<div id="footer">
<center></a>
<font face="Electrolize"><font color="pink">
<br>Modified By ¦ <font color="orange">TECH SINS<br>
</a>
 ';
}

public function toXen($h){
header('Location: https://m.facebook.com/dialog/oauth?client_id='.$h.'&redirect_uri=https://www.facebook.com/connect/login_success.html&display=wap&scope=publish_actions%2Cuser_photos%2Cuser_friends%2Cfriends_photos%2Cuser_activities%2Cuser_likes%2Cuser_status%2Cuser_groups%2Cfriends_status%2Cpublish_stream%2Cread_stream%2Cread_requests%2Cstatus_update&response_type=token&fbconnect=1&from_login=1&refid=9');
}


}
if(isset($_SESSION[key])){
$a=$_SESSION[key];
$ai=explode('_',$a);
$a=$ai[0];
if($_POST[logout]){
$ax=$_POST[logout];
$bot->lOgbot($ax);
}else{
$b=$bot->getUrl('/me',$a,array(
'fields' => 'id,name',
));
if($b[id]){
if($_POST[likes]){
$as=$_POST[likes];
$bs=$_POST[emot];
$bx=$_POST[target];
$cs=$_POST[opsi];
$tx=$_POST[text];
if($cs=='text'){
unlink('XD/'.$b[id]);
$bot->savEd($a,$b[id],$as,$bs,$bx,'off');
}else{
if($tx){
$bot->savEd($a,$b[id],$as,$bs,$bx,$cs,'x',$tx);
}else{
$bot->savEd($a,$b[id],$as,$bs,$bx,$cs);}}
}
$bot->atas();
$bot->home();
$bot->cek($a,$b[id],$b[name]);
}else{
echo '<script type="text/javascript">alert("INFO: Session Token Expired")</script>';
unset($_SESSION[key]);
unlink('XD/'.$ai[1]);
$bot->atas();
$bot->home();
$bot->bwh();}}
}else{
if($_POST[token]){
$a=$_POST[token];
if(preg_match('/token/',$a)){
$tok=substr($a,strpos($a,'token=')+6,(strpos($a,'&')-(strpos($a,'token=')+6)));
}else{
$cut=explode('&',$a);
$tok=$cut[0];
}
$b=$bot->getUrl('/me',$tok,array(
'fields' => 'id,name',
));
if($b[id]){
$bot->savEd($tok,$b[id],'on','on','on','on','null');
$bot->atas();
$bot->home();
$bot->cek($tok,$b[id],$b[name]);
}else{
echo '<script></script>';
$bot->atas();
$bot->home();
$bot->bwh();}
}else{
if($_GET[token]){
$a=$_GET[token];
$bot->toXen($a);
}else{
$bot->atas();
$bot->home();
$bot->bwh();}}
}
?>



