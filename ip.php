<?php
$soubor=fopen("ip.txt", "a");
$text = $_GET["ip"]

fwrite($soubor, $text);
fclose($soubor);
?>