function exibirInformacao(input: number | string) {
    if (typeof input === 'string') {
      console.log(`A entrada é uma string: ${input}`);
    } else {
      console.log(`A entrada é um número: ${input}`);
    }
  }
  
  exibirInformacao("Olá, Alunos do curso Frontend!");
  exibirInformacao(102030);
  

