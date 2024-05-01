// Suponha que temos um dado que vem de uma fonte externa como JSON
let algumDado: any = '123';

// Afirmação de tipo para tratar algumDado como string
let numeroComoString: string = algumDado as string;
console.log(numeroComoString.length); // Saída será o número de caracteres: 3

// Outra forma de realizar afirmação usando o estilo "angle-bracket"
let numeroComoString2: string = <string>algumDado;
console.log(numeroComoString2.length); // Saída será o número de caracteres: 3

// Afirmação de tipo para tratar algumDado como número
let stringComoNumero: number = +algumDado;
console.log(stringComoNumero.toFixed(2)); // Saída será 123.00
