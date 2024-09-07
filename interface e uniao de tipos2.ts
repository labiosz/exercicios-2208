// Definição da interface para Pessoa
interface IPessoa {
    nome: string;
    idade: number;
  }
  
  // Definição da interface para Empregado
  interface IEmpregado {
    empresa: string;
    salario: number;
  }
  
  // Tipo combinado que representa uma Pessoa que também é Empregado
  type TPessoaEmpregada = IPessoa & IEmpregado;
  
  // Função que exibe as informações de uma PessoaEmpregada
  const exibirInfoEmpregado = (empregado: TPessoaEmpregada): string => {
    const { nome, idade, empresa, salario } = empregado;
    return `Nome: ${nome}, Idade: ${idade}, Empresa: ${empresa}, Salário: R$${salario.toFixed(2)}.`;
  };
  
  // Exemplo de uso
  const exemploPessoaEmpregada: TPessoaEmpregada = { nome: 'Ana', idade: 35, empresa: 'TechCorp', salario: 8000 };
  console.log(exibirInfoEmpregado(exemploPessoaEmpregada));
  