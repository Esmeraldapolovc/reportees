/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/JSP_Servlet/JavaScript.js to edit this template
 */
/**
 * Ejemplos de funciones en JavaScript
 **/
/**
 * 
 * Diferencia entre var y let
 */
function saludar()
{
    alert('Hola Mundo desde JavaScript!');
}

function generarSaludo()
{
    let nombre = document.getElementById("textNombre").value;
    let mensaje = 'Hola, ' + nombre;
    alert(mensaje);
}

function realizarOperacion(oper)
{
    let a = parseFloat(document.getElementById('txtNumero1').value);
    let b = pasrseFloat(document.getElementById('txtNumero2').value);

    let res = 0;

    switch (oper)
    {
        case 1:
            res = sumar(a, b);
            break;
        case 2 :
            res = restar(a, b);
            break;
        case 3:
            res = multiplicar(a, b);
            break;
        case 4 :
            res = dividir(a, b);
            break;

    }
    document.getElementById('txtResultado').value = res;
}

function sumar(a, b)
{
    let resultado = a + b;
    return resultado;
}

function restar(a, b)
{
    let resultado = a - b;
    return resultado;
}

function multiplicar(a, b)
{
    let resultado = a *b;
    return resultado;
}

function dividir(a, b)
{
    if (b != 0)
    {
        resultado = a / b;
    }
    return resultado;
}

function calcularBisiesto()
{
    let anio = parseInt(document.getElementById("txtAnio").value);
    let resultado = anio % 4;

    if (resultado != 0)
    {
        document.getElementById("lblResultadoAnio").innerHTML = "El a&ntilde;o No es Bisiesto";
        document.getElementById("lblResultadoAnio").classList.add("text-success");
        document.getElementById("lblResultadoAnio").classList.add("text-danger");
    } else {
        document.getElementById("lblResultadoAnio").innerHTML = "El a&ntilde;o SI es Bisiesto";
        document.getElementById("lblResultadoAnio").classList.remove("text-danger");
        document.getElementById("lblResultadoAnio").classList.add("text-success");
    }
}


function cotizarchurros()
{


    let costo = parseFloat(document.getElementById("cmbTamanio").value);
// revisa si vamos a cargar costos de la salsa
    if (document.getElementById("chbsalsa").checked === true)
    {
        costo = costo + 2;
    }
    // revisa si vamos a cargar costos de la crema
    if (document.getElementById("chbCrema").checked === true)
    {
        costo = costo + 5;
    }
    // revisa si vamos a cargar costos de la cueritos
    if (document.getElementById("chbcueritos").checked === true)
    {
        costo = costo + 3;
    }
    // revisa si vamos a cargar costos de la col
    if (document.getElementById("chbcol").checked === true)
    {
        costo = costo + 2;
    }

    //revisar si aplicaremos el descuento

    if (document.getElementById("rbtnDescuentoSI").checked === true)
    {
        costo = costo * 0.90;
     }

    document.getElementById("txtTotal").value = costo;
    
  
    Swal.fire('Pedido Listo!','Pasa a recoger tu pedido :)','sucess');
    /*
     * Por que en javaScropt aveces se le pone tres igual
     */
}
function navegar()
{
    window.location.replace('graficador.html');//cambio de documento
    window.location.href='graficador.html';//para regresar
}