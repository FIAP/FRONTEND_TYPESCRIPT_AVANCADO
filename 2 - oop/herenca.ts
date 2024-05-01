import { Investimento } from "./encapsulamento";

class Acao extends Investimento {
    public codigoBolsa: string;

    constructor(nome: string, valor: number, codigoBolsa: string) {
        super(nome, valor); 
        this.codigoBolsa = codigoBolsa;
    }
}

try {
    const acao = new Acao("Thiago SA", 10000, "THJUA");
    console.log(`Ação: ${acao.nome}, Valor: ${acao.valor}, Código na Bolsa: ${acao.codigoBolsa}`);
} catch (error) {
    console.error(error);
}