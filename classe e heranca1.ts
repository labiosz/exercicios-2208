// Classe que representa um Funcionário
class Funcionario {
  constructor(public nome: string, public cargo: string, public salario: number) {}

  // Método para exibir a descrição do funcionário
  obterDescricao(): string {
    return `Funcionário: ${this.nome}, Cargo: ${this.cargo}, Salário: R$${this.salario.toFixed(2)}`;
  }
}

// Subclasse que representa um Gerente, derivada de Funcionário
class Gerente extends Funcionario {
  constructor(nome: string, cargo: string, salario: number, public departamento: string) {
    super(nome, cargo, salario);
  }

  // Método para exibir uma descrição detalhada, incluindo o departamento
  obterDescricaoDetalhada(): string {
    return `${super.obterDescricao()}, Departamento: ${this.departamento}`;
  }
}

// Exemplo de uso da classe Gerente
const exemploGerente = new Gerente('Carlos', 'Gerente de TI', 12000, 'Tecnologia');
console.log(exemploGerente.obterDescricaoDetalhada());
