function error(message: string): never {
    throw new Error(message);
  }
  
  error("Algo deu errado!");
  

  function carregandoGame(): never {
    while (true) {
      console.log("Carregando todos processos de um game!");
    }
  }