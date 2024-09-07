// Definição da interface IProduto
interface IProduto {
    nome: string;
    preco: number;
    categoria: string;
  }
  
  // Definição do tipo de união para Forma de Pagamento
  type TFormaPagamento = 'dinheiro' | 'cartão' | 'pix';
  
  // Função que recebe um Produto e uma Forma de Pagamento
  const exibirDetalhesProduto = (produto: IProduto, pagamento: TFormaPagamento): string => {
    const { nome, preco, categoria } = produto;
    return `Produto: ${nome}, Categoria: ${categoria}, Preço: R$${preco.toFixed(2)}, Pagamento: ${pagamento}.`;
  };
  
  // Exemplo de uso
  const exemploProduto: IProduto = { nome: 'Celular', preco: 2000, categoria: 'Eletrônicos' };
  const exemploPagamento: TFormaPagamento = 'cartão';
  
  console.log(exibirDetalhesProduto(exemploProduto, exemploPagamento));
  