// clase cuenta corriente ------------------>

export class cuentaCorriente {
    
  #usuario;
  numero;
  agencia;
  #saldo;
  static cantidadCuentas = 0;

  /**
 * @param {import("./Cliente").cliente} valor
 */
  set usuario(valor) {
    if(valor instanceof cliente)
    this.#usuario = valor;
  };

  get usuario() {
    return this.#usuario;
  };

  constructor (usuario, numero, agencia) {
      this.#usuario = usuario;
      this.numero = numero;
      this.agencia = agencia;
      this.#saldo = 0;
      cuentaCorriente.cantidadCuentas++;
  };

  deposito(importe) {
    if(importe > 0) {
    this.#saldo += importe;
    parseFloat(this.#saldo).toFixed(2);
    console.log("**Depósito realizado con éxito**" + "por $" + importe );
    console.log("**Nuevo saldo: $" + this.#saldo);
    return (this.#saldo).toFixed(2);
    } else {
      console.log(`Operación no válida.`);
      parseFloat(this.#saldo).toFixed(2);
      return (this.#saldo).toFixed(2);
    };
  };

  retiro(importe) {
    if (importe <= this.#saldo) {
      this.#saldo -= importe;
      parseFloat(this.#saldo).toFixed(2);
      console.log("**Retiro realizado con éxito**" + "por $" + importe );
      console.log("**Nuevo saldo: $" + this.#saldo);
      return (this.#saldo).toFixed(2);
    } else {
      console.log(`Operación no válida.`);
      parseFloat(this.#saldo).toFixed(2);
      return (this.#saldo).toFixed(2);
      
    };
    
  };

  verSaldo() {
    return (this.#saldo).toFixed(2);
  };

  transferirParaCuenta(importe, cuentaDestino) {
      this.retiro(importe);
      cuentaDestino.deposito(importe);
      console.log("**Transferencia realizada con éxito**" + "por $" + this.#saldo );
      console.log("**Nuevo saldo: $" + this.#saldo);
  };  
};