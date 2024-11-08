<!DOCTYPE html>
<html lang="es">
	<head>
		<meta charset="UTF-8">
    	<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<title> Calcular </title>
		<style>
			* {
    			margin: 0;
    			padding: 0;
    			box-sizing: border-box;
			}

			body {
    			font-family: 'Pokemon Solid';
    			background-color: #f4f4f4;
    			display: flex;
    			justify-content: center;
    			align-items: center;
    			min-height: 100vh;
    			color: gold;
            	text-shadow: -1px -1px 0 #000080, 1px -1px 0 #000080, -1px 1px 0 #000080, 1px 1px 0 #000080;
			}

			.container {
    			background-color: #fff;
    			padding: 20px;
    			border-radius: 8px;
    			box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    			text-align: center;
    			width: 100%;
    			max-width: 400px;
			}

			h1 {
    			font-size: 24px;
    			color: #4CAF50;
    			margin-bottom: 20px;
    			color: gold;
            	text-shadow: -1px -1px 0 #000080, 1px -1px 0 #000080, -1px 1px 0 #000080, 1px 1px 0 #000080;
			}

			p {
    			font-size: 16px;
    			color: #333;
			}

			strong {
    			color: #4CAF50;
			}

			.btn {
    			display: inline-block;
    			padding: 10px 20px;
    			background-color: #4CAF50;
    			text-decoration: none;
    			border-radius: 5px;
    			margin-top: 20px;
    			font-size: 16px;
    			color: gold;
            	text-shadow: -1px -1px 0 #000080, 1px -1px 0 #000080, -1px 1px 0 #000080, 1px 1px 0 #000080;
			}

			.btn:hover {
    			background-color: #45a049;
			}

			a {
    			text-decoration: none;
			}
		</style>
	</head>
	<body>
		<div class="container">
			<h1> RESULTADO DE LA OPERACIÓN </h1>
			<?php
			if ($_REQUEST['radio1'] == "suma") {
				$suma = $_REQUEST[ 'valor1'] + $_REQUEST['valor2'];
				echo "La suma es: " . $suma;
			} elseif ($_REQUEST[ 'radio1'] == "resta") {
				$resta = $_REQUEST['valor1'] - $_REQUEST[ 'valor2'];
				echo "La resta es: " . $resta;
		  	  } elseif ($_REQUEST[ 'radio1'] == "multi") {
					$multi = $_REQUEST['valor1'] * $_REQUEST[ 'valor2'];
					echo "La multiplicacion es: " . $multi;
				} elseif ($_REQUEST[ 'radio1'] == "dividir") {
			  		$dividir = $_REQUEST['valor1'] / $_REQUEST[ 'valor2'];
			  		echo "La division es: " . $dividir;
			  	  }
			?>
			<br>
		<a href="index.html" class="btn"> Volver al inicio </a>
	</div>
	</body>
</html>