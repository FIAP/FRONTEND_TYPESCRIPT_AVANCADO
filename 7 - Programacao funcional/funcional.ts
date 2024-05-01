function calculaRetornoInvestimento(valorInicial: number, taxaRetorno: number, anos: number): number {
    return valorInicial * Math.pow(1 + taxaRetorno, anos);
}

function calculaValorAtual(valorInvestido: number): number {
    return valorInvestido * (1 + obtemTaxaJurosAtual());
}

function obtemTaxaJurosAtual(): number {
    return Math.random();  
}

console.log(obtemTaxaJurosAtual())