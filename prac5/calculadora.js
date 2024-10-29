		var valor1 = null;
		var valor2 = null;
		var status = null;
		function suma(){
			valor1 = document.getElementsByName("num1")[0].value;
			valor2 = document.getElementsByName("num2")[0].value;
			sum=parseInt(valor1)+parseInt(valor2);
			alert("El resultado es "+sum);
		}

		function multi(){
			valor1 = document.getElementsByName("num1")[0].value;
			valor2 = document.getElementsByName("num2")[0].value;
			prod=parseInt(valor1)*parseInt(valor2);
			alert("El resultado es "+prod);
		}

		function resta(){
			valor1 = document.getElementsByName("num1")[0].value;
			valor2 = document.getElementsByName("num2")[0].value;
			res=parseInt(valor1)-parseInt(valor2);
			alert("El resultado es "+res);
		}

		function division(){
			valor1 = document.getElementsByName("num1")[0].value;
			valor2 = document.getElementsByName("num2")[0].value;
			divi=parseInt(valor1)/parseInt(valor2);
			alert("El resultado es "+divi);
		}