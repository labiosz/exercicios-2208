// Classe que representa uma Conta Bancária
class ContaBancaria {
    constructor(public titular: string, public saldo: number) {}
  
    // Método para exibir o saldo da conta
    obterSaldo(): string {
      return `Titular: ${this.titular}, Saldo: R$${this.saldo.toFixed(2)}`;
    }
  }
  
  // Subclasse que representa uma Conta Corrente, derivada de ContaBancaria
  class ContaCorrente extends ContaBancaria {
    constructor(titular: string, saldo: number, public limiteCredito: number) {
      super(titular, saldo);
    }
  
    // Sobrescrita do método obterSaldo para incluir o limite de crédito
    obterSaldo(): string {
      const saldoTotal = this.saldo + this.limiteCredito;
      return `${super.obterSaldo()}, Saldo Total com Crédito: R$${saldoTotal.toFixed(2)}`;
    }
  }
  
  // Exemplo de uso da classe ContaCorrente
  const exemploContaCorrente = new ContaCorrente('Fernanda', 5000, 2000);
  console.log(exemploContaCorrente.obterSaldo());
  