function processarDado(dado: unknown) {
    if (typeof dado === 'string') {
      console.log("O dado é uma string: ", dado.toUpperCase());
    } else if (typeof dado === 'number') {
      console.log("O dado é um número: ", dado.toFixed(2));
    } else {
      console.log("Tipo de dado não suportado");
    }
  }
  
  // Chamadas da função com diferentes tipos
  processarDado("Olá, aluno!");
  processarDado(42);
  processarDado(true); // Será tratado como tipo não suportado
  