interface Peixe {
    nadar: () => void;
  }
   interface Passaro {
    voar: () => void;
  }
   function ePeixe(pet: Peixe | Passaro): pet is Peixe {
    return (pet as Peixe).nadar !== undefined;
  }
   // Exemplo de uso do guarda de tipo
  function mover(pet: Peixe | Passaro) {
    if (ePeixe(pet)) {
      console.log("Este pet é um peixe e pode nadar.");
      pet.nadar();
    } else {
      console.log("Este pet é um pássaro e pode voar.");
      pet.voar();
    }
  }
   // Criando exemplos de Peixe e Pássaro
  const meuPeixe: Peixe = {
    nadar: () => console.log("O peixe está nadando")
  };
   const meuPassaro: Passaro = {
    voar: () => console.log("O pássaro está voando")
  };
   // Testando as funções
  mover(meuPeixe);
  mover(meuPassaro);