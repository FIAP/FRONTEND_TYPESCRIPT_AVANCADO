
import "reflect-metadata";
import { container } from "tsyringe";
import { inject, injectable } from 'tsyringe';

export interface IMessageService {
    sendMessage(recipient: string, message: string): void;
}


@injectable()
export class EmailService implements IMessageService {
    sendMessage(recipient: string, message: string): void {
        console.log(`Enviando email para ${recipient}: ${message}`);
    }
}

@injectable()
export class SMSService implements IMessageService {
    sendMessage(recipient: string, message: string): void {
        console.log(`Enviando SMS para ${recipient}: ${message}`);
    }
}


// Registro das dependências
container.register<IMessageService>("IMessageService", { useClass: EmailService });
// Se você quiser mudar para SMS, simplesmente altere a classe acima para SMSService.

// Obtendo a instância de IMessageService
const messageService = container.resolve<IMessageService>("IMessageService");

// Usando o serviço para enviar uma mensagem
messageService.sendMessage("user@example.com", "Bem-vindo ao nosso serviço!");
