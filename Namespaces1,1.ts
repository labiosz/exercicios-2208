// Namespace que agrupa funções e classes relacionadas a operações financeiras
export namespace Financeiro {
  
    // Função para calcular o imposto com base no valor e na taxa fornecidos
    export function calcularImposto(valor: number, taxa: number): number {
      return valor * taxa;
    }
  
    // Função para calcular o valor com desconto com base no valor e na taxa fornecidos
    export function calcularDesconto(valor: number, taxa: number): number {
      return valor - (valor * taxa);
    }
  
    // Classe que representa um orçamento, contendo valor total e lista de itens
    export class Orcamento {
      constructor(public valorTotal: number, public itens: string[]) {}
  
      // Método para exibir os detalhes do orçamento, incluindo itens e valor total
      exibirDetalhesOrcamento(): string {
        return `Itens: ${this.itens.join(', ')}, Valor Total: R$${this.valorTotal.toFixed(2)}`;
      }
    }
  }
  