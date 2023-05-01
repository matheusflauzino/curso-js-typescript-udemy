/* eslint-disable */
let nome: string = 'Luiz'; //this is typeannotation in typescrip
let idade: number = 30;
let adulto: boolean = true;
let simbolo: symbol = Symbol('qualquer-symbol');
let big: bigint = 10n;

//Arrays
let arrayDeNumeros: Array<number>;

let pessoa: { nome: string; idade: number; adulto?: boolean } = {
  nome: 'Luiz',
  idade: 30,
};

//functions
function soma(x: number, y: number): number {
  return x + y;
}

const result = soma(2, 2);

const soma2: (x: number, y: number) => number = (x, y) => x + y;
