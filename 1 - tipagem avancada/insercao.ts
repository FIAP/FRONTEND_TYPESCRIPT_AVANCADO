type Veiculo = {
    fabricante: string;
    anoDeFabricacao: number;
  };
  
  type Caracteristicas = {
    cor: string;
    numeroDePortas: number;
  };
  
  type Carro = Veiculo & Caracteristicas;
  
  function criarCarro(fabricante: string, anoDeFabricacao: number, cor: string, numeroDePortas: number): Carro {
    const carro: Carro = {
      fabricante,
      anoDeFabricacao,
      cor,
      numeroDePortas
    };
    return carro;
  }
  
  const meuCarro = criarCarro("Honda HRV", 2016, "Vinho", 4);
  console.log(meuCarro);
  