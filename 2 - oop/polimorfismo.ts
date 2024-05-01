import { Investimento } from "./abstracao";

export class FundoImobiliario extends Investimento {
    constructor(nome: string, valor: number) {
        super(nome, valor);
    }

    calcularRetorno(): number {
        return this.valor * 0.06;  
    }
}

// Usando polimorfismo
const meuInvestimento: Investimento = new FundoImobiliario("FII XYZ", 1000);
console.log(`Retorno do investimento: ${meuInvestimento.calcularRetorno()}`);
