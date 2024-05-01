export abstract class Investimento {
    public nome: string;
    public valor: number;

    constructor(nome: string, valor: number) {
        this.nome = nome;
        this.valor = valor;
    }

    // Método abstrato que deve ser implementado pelas subclasses
    abstract calcularRetorno(): number;
}


class Acao extends Investimento {
    private taxaRetorno: number;

    constructor(nome: string, valor: number, taxaRetorno: number) {
        super(nome, valor);
        this.taxaRetorno = taxaRetorno;
    }

    calcularRetorno(): number {
        return this.valor * this.taxaRetorno;
    }
}

// Testando a implementação
const acao = new Acao("Thiago SA", 10000, 0.05);
console.log(`Retorno esperado para ${acao.nome}: ${acao.calcularRetorno()}`);
