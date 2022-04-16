// IMPORTACIÓN DE CLASES ---------------------->
// movimientos de cuenta ----------->

import {cliente} from "./Cliente.js";
import {cuentaCorriente} from "./CuentaCorriente.js";

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
// console.log("El saldo actual es: " + "$ " + saldo + " MXN");

saldo = cuentaDeLaura.deposito(1000);
// saldo = cuentaDeLaura.verSaldo();
// console.log("El saldo actual es: " + "$ " + saldo + " MXN");

saldo = cuentaDeLaura.deposito(1000);
// saldo = cuentaDeLaura.verSaldo();
// console.log("El saldo actual es: " + "$ " + saldo + " MXN");

saldo = cuentaDeLaura.retiro(2000);
// saldo = cuentaDeLaura.verSaldo();
// console.log("El saldo actual es: " + "$ " + saldo + " MXN");

saldo = cuentaDeLaura.deposito(-1000000);
// saldo = cuentaDeLaura.verSaldo();
// console.log("El saldo actual es: " + "$ " + saldo + " MXN");

saldo = cuentaDeLaura.retiro(100);
// saldo = cuentaDeLaura.verSaldo();
// console.log("El saldo actual es: " + "$ " + saldo + " MXN");

saldo = cuentaDeLaura.deposito(5.498);
// saldo = cuentaDeLaura.verSaldo();

saldo = cuentaDeLaura.deposito(3475);

console.log("El saldo actual de " + usuario.nombreCliente + " es de: " + "$" + cuentaDeLaura.verSaldo() + "MXN");


const usuario2 = new cliente();
usuario2.nombreCliente = "Dana";
usuario2.ocrCliente = "099433671834";
usuario2.nipCliente = "5593";

const cuentaDeDana = new cuentaCorriente();
cuentaDeDana.numero = "84250304";
cuentaDeDana.agencia = "028";
cuentaDeDana.usuario = usuario2;

cuentaDeLaura.transferirParaCuenta(100, cuentaDeDana);

const saldoDana = cuentaDeDana.verSaldo();
console.log("el saldo actual de " + usuario2.nombreCliente + " es de: " + "$" + cuentaDeDana.verSaldo() + "MXN");

console.log("El saldo actual de " + usuario.nombreCliente + " es de: " + "$" + cuentaDeLaura.verSaldo() + "MXN");