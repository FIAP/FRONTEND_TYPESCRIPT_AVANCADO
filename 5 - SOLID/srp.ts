// class Conta {
//     private saldo: number;

//     constructor(saldoInicial: number) {
//         this.saldo = saldoInicial;
//     }

//     getSaldo(): number {
//         return this.saldo;
//     }

//     depositar(valor: number): void {
//         this.saldo += valor;
//         this.registrar(this, valor, "Deposito");
//     }

//     sacar(valor: number): boolean {
//         if (this.saldo >= valor) {
//             this.saldo -= valor;
//             this.registrar(this, valor, "Saque");
//             return true;
//         }
//         return false;
//     }

//     registrar(conta: Conta, valor: number, tipo: string): void {
//         console.log(`Transação ${tipo}: ${valor.toFixed(2)} | Saldo Atual: ${conta.getSaldo().toFixed(2)}`);
//     }
// }

