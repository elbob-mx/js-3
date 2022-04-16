// atributos privados ----------------->
// clase clientes ----------------->

class cliente {
  nombreCliente;
  ocrCliente;
  nipCliente;
  // numCuenta;
  // #saldoCuenta;
};

class cuentaCorriente {
  numero;
  #saldo;
  agencia;

  constructor() {
    this.#saldo = 0;
    this.numero = "";
    this.agencia = "";
  };

  deposito(importe) {
    if(importe > 0) {
    this.#saldo += importe;
    parseFloat(this.#saldo).toFixed(2);
    return (this.#saldo).toFixed(2);
    } else {
      console.log(`Operación inválida.`);
      parseFloat(this.#saldo).toFixed(2);
      return (this.#saldo).toFixed(2);
    };
  };

  retiro(importe) {
    if (importe <= this.#saldo) {
      this.#saldo -= importe;
      parseFloat(this.#saldo).toFixed(2);
      return (this.#saldo).toFixed(2);
    } else {
      console.log(`Operación inválida.`);
      parseFloat(this.#saldo).toFixed(2);
      return (this.#saldo).toFixed(2);
    };
  };

  verSaldo() {
    return (this.#saldo).toFixed(2);
  }

};

// clientes --------------------->

cuentaDeLaura = new cuentaCorriente();

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

saldo = cuentaDeLaura.deposito(5.753);
// saldo = cuentaDeLaura.verSaldo();

saldo = cuentaDeLaura.deposito(3475);

console.log("El saldo actual es: " + "$ " + saldo + " MXN");

console.log("GRACIAS POR SU PREFERENCIA. GAME OVER. INSERT A COIN.");