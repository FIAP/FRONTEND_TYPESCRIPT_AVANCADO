// class Conta {
//     protected saldo: number;

//     constructor(saldoInicial: number) {
//         this.saldo = saldoInicial;
//     }

//     depositar(valor: number): void {
//         if (valor > 0) {
//             this.saldo += valor;
//             console.log(`Depósito: ${valor} | Saldo Atual: ${this.saldo}`);
//         }
//     }

//     retirar(valor: number): boolean {
//         if (valor > 0 && this.saldo >= valor) {
//             this.saldo -= valor;
//             console.log(`Retirada: ${valor} | Saldo Atual: ${this.saldo}`);
//             return true;
//         }
//         console.log("Retirada falhou.");
//         return false;
//     }

//     getSaldo(): number {
//         return this.saldo;
//     }
// }



// class ContaInvestimento extends Conta {
//     private taxaRendimento: number;

//     constructor(saldoInicial: number, taxaRendimento: number = 0.02) {
//         super(saldoInicial);
//         this.taxaRendimento = taxaRendimento;
//     }

//     aplicarRendimento(): void {
//         let rendimento = this.saldo * this.taxaRendimento;
//         this.saldo += rendimento;
//         console.log(`Rendimento aplicado: ${rendimento} | Saldo Atual: ${this.saldo}`);
//     }

//     // Sobrescrever o método retirar para contas de investimento pode ter restrições de retirada
//     retirar(valor: number): boolean {
//         if (valor > 1000) {
//             console.log("Retiradas acima de 1000 não permitidas em Conta de Investimento.");
//             return false;
//         }
//         return super.retirar(valor);
//     }
// }

// const conta = new Conta(1000);
// conta.depositar(500);
// conta.retirar(200);

// const contaInvestimento = new ContaInvestimento(1000);
// contaInvestimento.depositar(500);
// contaInvestimento.retirar(200); // Deve ser permitido, dentro do limite de retirada
// contaInvestimento.retirar(1500); // Não permitido, e deve ser tratado pela classe
// contaInvestimento.aplicarRendimento();
