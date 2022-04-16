// IMPORTACIÓN DE CLASES ---------------------->
// movimientos de cuenta ----------->

import {cliente} from "./Cliente.js";
import {cuentaCorriente} from "./CuentaCorriente.js";

const usuario = new cliente();
cliente.nombreCliente = "Laura";
cliente.ocrCliente = "850690845005";
cliente.nipCliente = "2351";

const cuentaDeLaura = new cuentaCorriente();

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

console.log("El saldo actual es: " + "$ " + saldo + " MXN");

console.log("GAME OVER. INSERT A COIN.");