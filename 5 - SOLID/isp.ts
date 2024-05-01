interface IConta {
    depositar(valor: number): void;
    retirar(valor: number): boolean;
}

interface IContaInvestimento {
    comprarAcoes(quantidade: number, preco: number): void;
    venderAcoes(quantidade: number, preco: number): void;
}

interface IContaPoupanca {
    calcularJuros(): void;
}

class ContaCorrente implements IConta {
    protected saldo: number;

    constructor(saldoInicial: number) {
        this.saldo = saldoInicial;
    }

    depositar(valor: number): void {
        this.saldo += valor;
        console.log(`Depósito de R$${valor.toFixed(2)} realizado com sucesso.`);
    }

    retirar(valor: number): boolean {
        if (this.saldo >= valor) {
            this.saldo -= valor;
            console.log(`Retirada de R$${valor.toFixed(2)} realizada com sucesso.`);
            return true;
        }
        console.log("Saldo insuficiente.");
        return false;
    }
}

class ContaInvestimento implements IConta, IContaInvestimento {
    protected saldo: number;

    constructor(saldoInicial: number) {
        this.saldo = saldoInicial;
    }

    depositar(valor: number): void {
        this.saldo += valor;
        console.log(`Depósito de R$${valor.toFixed(2)} realizado com sucesso.`);
    }

    retirar(valor: number): boolean {
        if (this.saldo >= valor) {
            this.saldo -= valor;
            console.log(`Retirada de R$${valor.toFixed(2)} realizada com sucesso.`);
            return true;
        }
        console.log("Saldo insuficiente.");
        return false;
    }

    comprarAcoes(quantidade: number, preco: number): void {
        const total = quantidade * preco;
        if (this.saldo >= total) {
            this.saldo -= total;
            console.log(`Compra de ${quantidade} ações a R$${preco.toFixed(2)} cada realizada com sucesso.`);
        } else {
            console.log("Saldo insuficiente para comprar ações.");
        }
    }

    venderAcoes(quantidade: number, preco: number): void {
        const total = quantidade * preco;
        this.saldo += total;
        console.log(`Venda de ${quantidade} ações a R$${preco.toFixed(2)} cada realizada com sucesso.`);
    }
}

class ContaPoupanca implements IConta, IContaPoupanca {
    protected saldo: number;

    constructor(saldoInicial: number) {
        this.saldo = saldoInicial;
    }

    depositar(valor: number): void {
        this.saldo += valor;
        console.log(`Depósito de R$${valor.toFixed(2)} realizado com sucesso.`);
    }

    retirar(valor: number): boolean {
        if (this.saldo >= valor) {
            this.saldo -= valor;
            console.log(`Retirada de R$${valor.toFixed(2)} realizada com sucesso.`);
            return true;
        }
        console.log("Saldo insuficiente.");
        return false;
    }

    calcularJuros(): void {
        const juros = this.saldo * 0.02;
        this.saldo += juros;
        console.log(`Juros de R$${juros.toFixed(2)} calculados e adicionados ao saldo.`);
    }
}

const cc = new ContaCorrente(1000);
cc.depositar(100)
