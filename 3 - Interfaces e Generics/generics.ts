class Caixa<T> {
    conteudo: T | null = null;

    public colocar(conteudo: T): void {
        this.conteudo = conteudo;
    }

    public retirar(): T | null {
        return this.conteudo;
    }
}


//export default Caixa;


// Instância da Caixa para armazenar um número
const caixaNumero = new Caixa<number>();
caixaNumero.colocar(123);
console.log(caixaNumero.retirar());  // Saída: 123

// Instância da Caixa para armazenar uma string
const caixaString = new Caixa<string>();
caixaString.colocar("Texto exemplo");
console.log(caixaString.retirar());  // Saída: "Texto exemplo"

// Instância da Caixa para armazenar um objeto
const caixaObjeto = new Caixa<{ nome: string, idade: number }>();
caixaObjeto.colocar({ nome: "Agnes", idade: 4 });
console.log(caixaObjeto.retirar());  // Saída: { nome: "Agnes", idade: 4 }