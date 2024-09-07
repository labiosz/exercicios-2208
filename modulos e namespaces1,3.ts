
// Importação das classes Pedido e Cliente
import { Pedido } from './modulos e namespaces1,2';
import { Cliente } from './modulos e namespaces1,1';

// Criação de instâncias das classes Cliente e Pedido
const exemploCliente = new Cliente('Lucas', 'lucas@gmail.com');
const exemploPedido = new Pedido(exemploCliente, 'Notebook', 4500);

// Exibindo os detalhes do pedido
console.log(exemploPedido.obterDetalhesPedido());