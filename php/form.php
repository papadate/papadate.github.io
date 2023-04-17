<?php
    session_start();
    $value = $_GET["value"];
    $_SESSION["value"] = $value;
    echo "Value: " . $value;
    echo "<br>";
    echo '$_SESSION[\'value\']' . $_SESSION['value'];
?>