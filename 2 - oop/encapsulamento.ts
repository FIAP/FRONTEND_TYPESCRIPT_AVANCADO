
export class Investimento {
    private _valor: number = 0;
    public nome: string;

    constructor(nome: string, valor: number) {
        this.nome = nome;
        this._valor = valor;
    }

    get valor(): number {
        return this._valor;
    }

    set valor(novoValor: number) {
        if (novoValor > 0) {
            this._valor = novoValor;
        } else {
            throw new Error("O valor do investimento deve ser positivo.");
        }
    }
}