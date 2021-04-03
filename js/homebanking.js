//Declaración de variables
var nombreUsuario = "Jorge Rodríguez";
var saldoCuenta = "6000";
var limiteExtraccion = 5000;

var agua = 350;
var telefono = 425;
var luz = 210;
var internet = 570;

var cuentaAmiga1 = 1234567;
var cuentaAmiga2 = 7654321;

var codigo = 1212;

var chequenro = 1234;
var chequenro2 = 4321;
var chequenro3 = 1122;

var nrovalor = 30000;
var nro2 = 10000;
var nro3 = 2000;

//Ejecución de las funciones que actualizan los valores de las variables en el HTML.
window.onload =
     iniciarSesion();
     cargarNombreEnPantalla();
     actualizarSaldoEnPantalla();
     actualizarLimiteEnPantalla();


//Funciones creadas

function sumarDinero(cantidad) {
    saldoCuenta += cantidad;
    actualizarSaldoEnPantalla();
}

function restarDinero(cantidad) {
    saldoCuenta -= cantidad;
    actualizarSaldoEnPantalla();
}

function haySaldoDisponible() {
    return cantidad <= saldoCuenta;
}

function hayLimite() {
    return cantidad <= limiteExtraccion;
}


function billetesCien() {
    return cantidad % 100 ===0;
}

function ejecutar() {
    var saldoAnterior = saldoCuenta;
    saldoCuenta = saldoCuenta - cantidad;
    actualizarSaldoEnPantalla();
    alert("Ha retirado: $ " + cantidad + "\nSaldo Anterior: $ " + saldoAnterior + "\nSaldo Actual: $ " + saldoCuenta);
}

function ejecutarTransferencia(cifra) {
    var saldoAnterior = saldoCuenta;
    saldoCuenta = saldoCuenta - cantidad;
    actualizarSaldoEnPantalla();
    alert("Se han transferido: $ " + cantidad + "\nCuenta destino: " + cifra);
}

function depositarCheques() {
    var cheques = prompt("Ingrese el numero de cheque que desea depositar: ");
    papel = parseInt (cheques);
    if (!isNaN(papel)) { // Elegí isNan para evitar hacer un código más largo usando null, undefined o typeof//
    switch (papel) {
        case chequenro:
            if (cheques == chequenro) {
                saldoCuenta = saldoCuenta + nrovalor;
                actualizarSaldoEnPantalla();
                alert("Has depositado el cheque N° " + chequenro + "\nPor un valor de $: " + nrovalor + "\nSaldo actual: " + saldoCuenta);}
            break;
        case chequenro2:
            if (cheques == chequenro2) {
                saldoCuentaaldoCuenta = saldoCuenta + nro2;
                 actualizarSaldoEnPantalla();
                alert("Has depositado el cheque N° " + chequenro2 + "\nPor un valor de $: " + nro2 + "\nSaldo actual: " + saldoCuenta);}
            break;
        case chequenro3:
            if (cheques == chequenro3) {
                saldoCuenta = saldoCuenta + nro3;
                 actualizarSaldoEnPantalla();
                alert("Has depositado el cheque N° " + chequenro3 + "\nPor un valor de $: " + nro3 + "\nSaldo actual: " + saldoCuenta);}
            break;
        default:
            alert("El número de cheque no es válido.");}
    }else{
         alert("Datos incorrectos. Intente nuevamente.");
    }
}


//Funciones que tenes que completar

function cambiarLimiteDeExtraccion() {
    limiteExtraccion = prompt("Ingrese el nuevo límite de extracción: ");
    cantidad = parseInt (limiteExtraccion);
    if (!isNaN(cantidad)) {
        alert("El nuevo límite de extracción es: $ " + cantidad);
        actualizarLimiteEnPantalla(); }
    else {
        alert("Datos incorrectos. Vuelva a intentar.");
}
}


function extraerDinero() {
    var extraccion = prompt("Ingrese el monto que desea extraer:");
    cantidad = parseInt(extraccion);
    if (!isNaN(cantidad)) {
    if (haySaldoDisponible()) {
         if (hayLimite()) {
             if (billetesCien()) {
                 ejecutar();
             }else{
                 alert("Sólo puede extraer billetes de $ 100");}
         }else {
             alert("El límite de extracción no le permite retirar esa cantidad de dinero.");}
    }else{
        alert("No hay saldo disponible para retirar ese dinero."); }
    }else {
        alert("Datos incorrectos. Vuelva a intentar.");}
}

function depositarDinero() {
    var deposito = prompt("Ingrese el monto que desea depositar:");
    cantidad = parseInt(deposito);
    if (!isNaN(cantidad)) {
        var saldoAnterior = saldoCuenta;
        saldoCuenta = saldoCuenta + cantidad;
        actualizarSaldoEnPantalla();
        alert("Ha depositado: $ " + cantidad + "\nSaldo Anterior: $ " + saldoAnterior + "\nSaldo Actual: $ " + saldoCuenta);
    }else {
        alert("Datos incorrectos. Vuelva a intentar.");
    }
}

function pagarServicio() {
    var abonar = prompt("¿Qué servicio desea abonar? \n1. Agua \n2. Teléfono \n3. Luz \n4. Internet");
    cantidad = parseInt(abonar);
    if (!isNaN(cantidad)) {
    var saldoAnterior = saldoCuenta;
    switch (cantidad) {
        case 1:
            if (agua <= saldoCuenta) {
                restarDinero(agua);
                actualizarSaldoEnPantalla();
                alert("Has pagado el servicio de Agua\n" + "Saldo anterior: " + saldoAnterior + "\n" + "Dinero descontado: "+ agua + "\n" + "Saldo actual: " + saldoCuenta);
            }else{
                alert("No hay saldo disponible para pagar.");
            }
            break;
        case 2:
            if (telefono <= saldoCuenta)  {
                restarDinero(telefono);
                actualizarSaldoEnPantalla();
                alert("Has pagado el servicio de Teléfono\n" + "Saldo anterior: " + saldoAnterior + "\n" + "Dinero descontado: "+ telefono + "\n" + "Saldo actual: " + saldoCuenta);
            }else {
                 alert("No hay saldo disponible para pagar.");
            }
              break;
        case 3:
            if (luz <= saldoCuenta)  {
                restarDinero(luz);
                actualizarSaldoEnPantalla();
                alert("Has pagado el servicio de Luz\n" + "Saldo anterior: " + saldoAnterior + "\n" + "Dinero descontado: "+ luz + "\n" + "Saldo actual: " + saldoCuenta);
            }else{
                alert("No hay saldo disponible para pagar.");
            }
            break;
        case 4:
            if (internet <= saldoCuenta) {
                restarDinero(internet);
                actualizarSaldoEnPantalla();
                alert("Has pagado el servicio de Internet\n" + "Saldo anterior: " + saldoAnterior + "\n" + "Dinero descontado: "+ internet + "\n" + "Saldo actual: " + saldoCuenta);
            }else {
                alert("No hay saldo disponible para pagar.");
            }
            break;
        default:
            alert("No existe la opción seleccionada");
            break;
    }
    }else {
        alert("Datos incorrectos. Intente nuevamente.");
    }
}

function transferirDinero() {
    var transferencia = prompt("Indique el monto de dinero que desea transferir: ");
    cantidad = parseInt(transferencia);
    if (!isNaN(cantidad)) {
        if (haySaldoDisponible()) {
            var numeroCuenta1 = prompt ("Indique el número de cuenta para transferir el dinero: ");
            var cifra = parseInt(numeroCuenta1); }
        else {alert("No hay saldo disponible para poder realizar la transferencia.");
             }
        if (cifra == cuentaAmiga1 || cifra == cuentaAmiga2) {
            ejecutarTransferencia(cifra);
        }else {
            alert("Sólo puede transferir dinero a sus cuentas amigas.");}
    }else {
        alert("Datos incorrectos. Vuelva a intentar.");
    }
}

function iniciarSesion() {
    var clave = prompt("Ingrese el código de su cuenta: ");
    var llave = parseInt(clave);
    if (llave == codigo) {
        alert("Bienvenido, " + nombreUsuario + ", ya puedes comenzar a realizar operaciones.");}
    else {
        alert("Código incorrecto. Tu dinero ha sido retenido por cuestiones de seguridad.");
        saldoCuenta = "0";}
}

//Funciones que actualizan el valor de las variables en el HTML
function cargarNombreEnPantalla() {
    document.getElementById("nombre").innerHTML = "Bienvenido/a " + nombreUsuario;
}

function actualizarSaldoEnPantalla() {
    document.getElementById("saldo-cuenta").innerHTML = "$" + saldoCuenta;
}

function actualizarLimiteEnPantalla() {
    document.getElementById("limite-extraccion").innerHTML = "Tu límite de extracción es: $" + limiteExtraccion;
}
