// IConta.ts
export interface IConta {
    depositar(valor: number): void;
    retirar(valor: number): boolean;
    getSaldo(): number;
}

// IRegistroTransacao.ts
export interface IRegistroTransacao {
    registrar(conta: IConta, valor: number, operacao: string): void;
}

//
// Conta.ts
export class Conta implements IConta {
    private saldo: number;

    constructor(saldoInicial: number) {
        this.saldo = saldoInicial;
    }

    depositar(valor: number): void {
        this.saldo += valor;
        console.log(`Depósito: R$${valor} realizado com sucesso. Saldo atual: R$${this.saldo}`);
    }

    retirar(valor: number): boolean {
        if (this.saldo >= valor) {
            this.saldo -= valor;
            console.log(`Retirada: R$${valor} realizada com sucesso. Saldo atual: R$${this.saldo}`);
            return true;
        }
        console.log("Falha na retirada: saldo insuficiente.");
        return false;
    }

    getSaldo(): number {
        return this.saldo;
    }
}

// RegistroTransacao.ts
export class RegistroTransacao implements IRegistroTransacao {
    registrar(conta: IConta, valor: number, operacao: string): void {
        console.log(`Transação registrada: ${operacao} de R$${valor} na conta com saldo de R$${conta.getSaldo()}.`);
    }
}



// App.ts
class App {
    private conta: IConta;
    private registroTransacao: IRegistroTransacao;

    constructor(conta: IConta, registroTransacao: IRegistroTransacao) {
        this.conta = conta;
        this.registroTransacao = registroTransacao;
    }

    executar(): void {
        this.conta.depositar(100);
        this.registroTransacao.registrar(this.conta, 100, "Depósito");
        this.conta.retirar(50);
        this.registroTransacao.registrar(this.conta, 50, "Retirada");
    }
}

const app = new App(new Conta(500), new RegistroTransacao());
app.executar();
