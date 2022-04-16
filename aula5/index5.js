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
    parseFloat(this.#saldo);
    console.log(this.#saldo.toFixed(2));
    } else {
      console.log(`Operación inválida.`);
      console.log(this.#saldo.toFixed(2));
    };
  };

  retiro(importe) {
    if (importe <= this.#saldo) {
      this.#saldo -= importe;
      parseFloat(this.#saldo);
      console.log(this.#saldo.toFixed(2));
    } else {
      console.log(`Operación inválida.`);
      console.log(this.#saldo.toFixed(2));
    };
  };
};

// clientes --------------------->

cuentaDeLaura = new cuentaCorriente();

console.log(cuentaDeLaura);
cuentaDeLaura.deposito(1000);
// console.log(cuentaDeLaura.#saldo);

cuentaDeLaura.deposito(150.3);
// console.log(cuentaDeLaura.#saldo);

cuentaDeLaura.retiro(2000);

cuentaDeLaura.deposito(-100);

console.log("GAME OVER. INSERT A COIN.");
