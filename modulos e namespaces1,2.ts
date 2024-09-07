// Importação da classe Cliente
import { Cliente } from './modulos e namespaces1,1';

// Definição da classe que representa um Pedido
export class Pedido {
  constructor(public cliente: Cliente, public produto: string, public valor: number) {}

  // Método para exibir os detalhes do pedido
  obterDetalhesPedido(): string {
    return `Cliente: ${this.cliente.nome}, Produto: ${this.produto}, Valor: R$${this.valor.toFixed(2)}`;
  }
}