// abstract class CalculadoraDeJuros {
//     protected valorPrincipal: number;

//     constructor(valorPrincipal: number) {
//         this.valorPrincipal = valorPrincipal;
//     }

//     abstract calcularJuros(): number;
// }


// class JurosSimples extends CalculadoraDeJuros {
//     private taxa: number;
//     private tempo: number;

//     constructor(valorPrincipal: number, taxa: number, tempo: number) {
//         super(valorPrincipal);
//         this.taxa = taxa;
//         this.tempo = tempo;
//     }

//     calcularJuros(): number {
//         return this.valorPrincipal * this.taxa * this.tempo;
//     }
// }


// class JurosCompostos extends CalculadoraDeJuros {
//     private taxa: number;
//     private tempo: number;

//     constructor(valorPrincipal: number, taxa: number, tempo: number) {
//         super(valorPrincipal);
//         this.taxa = taxa;
//         this.tempo = tempo;
//     }

//     calcularJuros(): number {
//         return this.valorPrincipal * (Math.pow((1 + this.taxa), this.tempo) - 1);
//     }
// }


// const jurosSimples = new JurosSimples(1000, 0.05, 1);
// console.log(`Juros Simples: ${jurosSimples.calcularJuros()} reais`);

// const jurosCompostos = new JurosCompostos(1000, 0.05, 1); 
// console.log(`Juros Compostos: ${jurosCompostos.calcularJuros()} reais`);
