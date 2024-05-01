import "reflect-metadata"; 
import { inject, injectable } from 'tsyringe';
import { container } from "tsyringe";

type Transaction = {
    amount: number;
    description: string;
    date: Date;
    type: 'income' | 'expense';
};

interface ItransactionRepository {
    add(transaction: Transaction): void;
    getAll(): Transaction[];
}

@injectable()
class ArrayTransactionRepository implements ItransactionRepository {
    private transactions: Transaction[] = [];

    add(transaction: Transaction): void {
        this.transactions.push(transaction);
    }

    getAll(): Transaction[] {
        return this.transactions;
    }
}



@injectable()
class FinanceController {   

    constructor(@inject("ItransactionRepository") private _repository: ItransactionRepository) {}


    public addTransaction(amount: number, description: string, type: 'income' | 'expense'): void {
        const transaction: Transaction = {
            amount,
            description,
            date: new Date(),
            type
        };
        this._repository.add(transaction);
    }

    public getTotalBalance(): number {
        return this._repository.getAll().reduce((total, transaction) => {
            if (transaction.type === 'income') {
                return total + transaction.amount;
            } else {
                return total - transaction.amount;
            }
        }, 0);
    }
}


container.register<ItransactionRepository>("ItransactionRepository", { useClass: ArrayTransactionRepository });

const financeController = container.resolve(FinanceController);

// Adicionando algumas transações
financeController.addTransaction(1000, "Salário", 'income');
financeController.addTransaction(200, "Compras supermercado", 'expense');
financeController.addTransaction(150, "Venda de item usado", 'income');
financeController.addTransaction(50, "Café com amigos", 'expense');

// Calculando e exibindo o saldo total
console.log(`Saldo total: $${financeController.getTotalBalance()}`);
