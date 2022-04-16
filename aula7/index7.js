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
};

// clientes --------------------->

cuentaDeLaura = new cuentaCorriente();

cuentaDeLaura.deposito(1000);
cuentaDeLaura.deposito(1000);

console.log("GAME OVER. INSERT A COIN.");
