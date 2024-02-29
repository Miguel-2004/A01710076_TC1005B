/* PROBLEMA 1 CUADRADOS Y CUBOS */


var num = parseInt(prompt("Ingrese un número:"));


document.write("<table border='1'>");
document.write("<tr><th>Número</th><th>Cuadrado</th><th>Cubo</th></tr>");


for (var i = 1; i <= num; i++) {
    var cuadrado = i * i;
    var cubo = i * i * i;
    document.write("<tr>");
    document.write("<td>" + i + "</td>");
    document.write("<td>" + cuadrado + "</td>");
    document.write("<td>" + cubo + "</td>");
    document.write("</tr>");
}


document.write("</table>");


/* PROBLEMA 2 SUMA DE 2 NÚMEROS */


var num1 = Math.floor(Math.random() * 10);
var num2 = Math.floor(Math.random() * 10);
var result = parseInt(prompt("¿Cuál es la suma de " + num1 + " y " + num2 + "?"));


if (result === num1 + num2) {
    document.write("Respuesta correcta.");
} else {
    document.write("Respuesta incorrecta.");
}


/* PROBLEMA 3 CONTADOR*/


function contador(arr) {
    var negativos = 0;
    var ceros = 0;
    var mayoresCero = 0;


    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            negativos++;
        } else if (arr[i] === 0) {
            ceros++;
        } else {
            mayoresCero++;
        }
    }


    return [negativos, ceros, mayoresCero];
}


var arr = [-2, 0, 1, 3, -5, 0, 7];
var resultado = contador(arr);
document.write("Negativos: " + resultado[0] + "<br>");
document.write("Ceros: " + resultado[1] + "<br>");
document.write("Mayores a cero: " + resultado[2]);


/* PROBLEMA 4 PROMEDIOS */


function promedios(matriz) {
    var promedios = [];


    for (var i = 0; i < matriz.length; i++) {
        var suma = 0;
        for (var j = 0; j < matriz[i].length; j++) {
            suma += matriz[i][j];
        }
        promedios.push(suma / matriz[i].length);
    }


    return promedios;
}


var matriz = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
var resultado = promedios(matriz);
document.write("Promedios: " + resultado.join(", "));


/* PROBLEMA 5 INVERSO */


function inverso(numero) {
    return parseInt(numero.toString().split("").reverse().join(""));
}


var numero = 12345;
var resultado = inverso(numero);
document.write("Número inverso: " + resultado);




/* PROBLEMA 6 CALCULADORA DE IMC*/


function CalculadoraIMC() {
    this.calcularIMC = function(peso, altura) {
        return peso / (altura * altura);
    };


    this.interpretarResultado = function(imc) {
        if (imc < 18.5) {
            return "Bajo peso";
        } else if (imc >= 18.5 && imc < 25) {
            return "Normal";
        } else if (imc >= 25 && imc < 30) {
            return "Sobrepeso";
        } else {
            return "Obesidad";
        }
    };


    this.mostrarResultado = function(imc) {
        var resultado = this.interpretarResultado(imc);
        var mensaje = "Tu IMC es " + imc.toFixed(2) + ", lo que indica: " + resultado;
        document.getElementById("resultado").innerText = mensaje;
    };
}


function calcularIMC() {
    var peso = parseFloat(document.getElementById("peso").value);
    var altura = parseFloat(document.getElementById("altura").value);


    var calculadora = new CalculadoraIMC();
    var imc = calculadora.calcularIMC(peso, altura);
    calculadora.mostrarResultado(imc);
}



