<?php

$lines = file("files/texto.txt");

$cadena = "valor";

foreach($lines as $line)
{
    $pos = strpos($line, $cadena);
    if ($pos === false) {
        echo($line);
        echo "<br>";
    }
    
}

?>
