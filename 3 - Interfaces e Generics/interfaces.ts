interface Notificacao {
    enviarMensagem(mensagem: string): void;
}


class NotificadorEmail implements Notificacao {
    enviarMensagem(mensagem: string): void {
        console.log(`Enviando email: ${mensagem}`);
    }
}

class NotificadorSMS implements Notificacao {
    enviarMensagem(mensagem: string): void {
        console.log(`Enviando SMS: ${mensagem}`);
    }
}

class NotificadorApp implements Notificacao {
    enviarMensagem(mensagem: string): void {
        console.log(`Enviando mensagem via app: ${mensagem}`);
    }
}

//export { NotificadorEmail, NotificadorSMS, NotificadorApp };


function enviarNotificacoes() {
    const notificadores: Notificacao[] = [
        new NotificadorEmail(),
        new NotificadorSMS(),
        new NotificadorApp()
    ];

    notificadores.forEach(notificador => notificador.enviarMensagem("Olá, isso é uma notificação de teste!"));
}

enviarNotificacoes();

