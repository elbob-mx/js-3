// IMPORTACIÓN DE CLASES ---------------------->
// movimientos de cuenta Laura ----------->

import {cliente} from "./Cliente.js";
import {cuentaCorriente} from "./CuentaCorriente.js";

// variables *** //

const usuario = new cliente();
usuario.nombreCliente = "Laura";
usuario.ocrCliente = "850690845005";
usuario.nipCliente = "2351";

const cuentaDeLaura = new cuentaCorriente();
cuentaDeLaura.numero = "58280270";
cuentaDeLaura.agencia = "051";
cuentaDeLaura.usuario = usuario;

console.log(cuentaDeLaura);

let saldo = cuentaDeLaura.verSaldo();
console.log("El saldo actual es: " + "$ " + saldo + " MXN");

saldo = cuentaDeLaura.deposito(1000);
// saldo = cuentaDeLaura.verSaldo();
console.log("El saldo actual es: " + "$ " + saldo + " MXN");

saldo = cuentaDeLaura.retiro(100);
saldo = cuentaDeLaura.verSaldo();
console.log("El saldo actual es: " + "$ " + saldo + " MXN");

saldo = cuentaDeLaura.deposito(5.498);
saldo = cuentaDeLaura.verSaldo();

console.log("El saldo actual de " + usuario.nombreCliente + " es de: " + "$" + cuentaDeLaura.verSaldo() + "MXN");


// nuevo cliente 2 ------------------------->
const usuario2 = new cliente();
usuario2.nombreCliente = "Dana";
usuario2.ocrCliente = "099433671834";
usuario2.nipCliente = "5593";

const cuentaDeDana = new cuentaCorriente();
cuentaDeDana.numero = "84250304";
cuentaDeDana.agencia = "028";
cuentaDeDana.usuario = usuario2;

saldo = cuentaDeDana.deposito(103475.756);
saldo = cuentaDeDana.retiro(3475.756);
saldo = cuentaDeDana.retiro(99999.99);

// resumen cuentas ------------------------------->
console.log("Cuenta de Laura: ", cuentaDeLaura);
console.log("Cuenta de Laura: ", cuentaDeLaura.verSaldo());
console.log("Cuenta de Dana: ", cuentaDeDana);
console.log("Cuenta de Dana: ", cuentaDeDana.verSaldo());

let paramValor = 100;

console.log("Parámetro 'Valor'", paramValor);
cuentaDeLaura.transferirParaCuenta(paramValor, cuentaDeDana);
console.log("Parámetro 'Valor'", paramValor);

console.log("el saldo actual de " + usuario2.nombreCliente + " es de: " + "$" + cuentaDeDana.verSaldo() + "MXN");
console.log("El saldo actual de " + usuario.nombreCliente + " es de: " + "$" + cuentaDeLaura.verSaldo() + "MXN");