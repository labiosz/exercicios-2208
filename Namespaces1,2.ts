// Importando o namespace Financeiro, que contém funções e classes para cálculos financeiros
import { Financeiro } from './Namespaces1,1';

// Criação de uma instância da classe Orcamento e exibição dos detalhes do orçamento
const exemploOrcamento = new Financeiro.Orcamento(5000, ['Notebook', 'Mouse']);
console.log(exemploOrcamento.exibirDetalhesOrcamento());

// Cálculo do imposto sobre o valor especificado e exibição do resultado formatado
const valorComImposto = Financeiro.calcularImposto(5000, 0.15);
console.log(`Valor com Imposto: R$${valorComImposto.toFixed(2)}`);

// Cálculo do valor com desconto aplicado e exibição do resultado formatado
const valorComDesconto = Financeiro.calcularDesconto(5000, 0.10);
console.log(`Valor com Desconto: R$${valorComDesconto.toFixed(2)}`);
