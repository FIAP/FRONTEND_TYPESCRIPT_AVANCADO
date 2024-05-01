interface Pessoa {
    nome: string;
    idade: number;
}

type Parcial<T> = {
    [P in keyof T]?: T[P];
}

// Todas as propriedades de Pessoa agora são opcionais
type PessoaParcial = Parcial<Pessoa>;



type SomenteLeitura<T> = {
    readonly [P in keyof T]: T[P];
}

// Todas as propriedades de Pessoa agora são somente leitura
type PessoaSomenteLeitura = SomenteLeitura<Pessoa>;


type PropriedadesEmBooleano<T> = {
    [P in keyof T]: boolean;
}

// Mapeia todas as propriedades de Pessoa para booleanos
type PessoaBooleana = PropriedadesEmBooleano<Pessoa>;
