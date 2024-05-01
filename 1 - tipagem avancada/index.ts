interface Pessoa {
    nome: string;
    idade: number;
    endereco: {
      rua: string;
      cidade: string;
      cep: string;
    };
  }
  
  // Acesso indexado ao tipo da propriedade 'nome'
  type NomeTipo = Pessoa['nome']; // string
  
  // Acesso indexado ao tipo da propriedade dentro de 'endereco'
  type CidadeTipo = Pessoa['endereco']['cidade']; // string
  
  // Usando em funções para garantir a segurança de tipo
  function obterPropriedade(pessoa: Pessoa, prop: 'nome' | 'idade'): string | number {
    return pessoa[prop];
  }
  
  // Criando um objeto do tipo Pessoa
  const pessoa: Pessoa = {
    nome: "Thiago S Adriano",
    idade: 39,
    endereco: {
      rua: "Rua Principal",
      cidade: "New Westminster",
      cep: "12345-678"
    }
  };
  
  // Utilizando os tipos indexados
  const nome: NomeTipo = pessoa.nome; // Corretamente tipado como string
  const cidade: CidadeTipo = pessoa.endereco.cidade; // Corretamente tipado como string
  
  console.log(nome); // Saída: João
  console.log(cidade); // Saída: Porto
  