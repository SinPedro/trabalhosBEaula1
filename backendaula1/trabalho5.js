"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var leitor = require("readline-sync");
function main() {
    var primeiroNumero;
    var segundoNumero;
    var terceiroNumero;
    primeiroNumero = leitor.questionFloat("INSIRA O PRIMEIRO NÚMERO:");
    segundoNumero = leitor.questionFloat("INSIRA O SEGUNDO NÚMERO: ");
    terceiroNumero = leitor.questionFloat("INSIRA O TERCEIRO NÚMERO: ");
    console.log("O RESULTADO DAS SOMAS É:");
    console.log("------------------------");
    console.log(soma);
    console.log("O RESULTADO DAS SUBTRAÇÕES É:");
    console.log("------------------------");
    console.log(subtracao);
    console.log("O RESULTADO DAS DIVISÃO É:");
    console.log("------------------------");
    console.log(divisao);
    console.log("O RESULTADO DAS MULTIPLICAÇÃO É:");
    console.log("------------------------");
    console.log(multiplicacao);
}
main();
function soma(primeiroNumero, segundoNumero, terceiroNumero) {
    var somaNumeros = primeiroNumero + segundoNumero;
    var somaNumeros2 = primeiroNumero + terceiroNumero;
    var somaNumeros3 = segundoNumero + terceiroNumero;
    return "".concat(somaNumeros, ", ").concat(somaNumeros2, ", ").concat(somaNumeros3);
}
function subtracao(primeiroNumero, segundoNumero, terceiroNumero) {
    var primeiraSubtracao = primeiroNumero - segundoNumero;
    var segundaSubtracao = primeiroNumero - terceiroNumero;
    var terceiraSubtracao = segundoNumero - terceiroNumero;
    return "".concat(primeiraSubtracao, ", ").concat(segundaSubtracao, ", ").concat(terceiraSubtracao);
}
function divisao(primeiroNumero, segundoNumero, terceiroNumero) {
    var primeiraDivisao = primeiroNumero / segundoNumero;
    var segundaDivisao = primeiroNumero / terceiroNumero;
    var terceiraDivisao = segundoNumero / terceiroNumero;
    return "".concat(primeiraDivisao, ", ").concat(segundaDivisao, ", ").concat(terceiraDivisao);
}
function multiplicacao(primeiroNumero, segundoNumero, terceiroNumero) {
    var primeiraMultiplicacao = primeiroNumero * segundoNumero;
    var segundaMultiplicacao = primeiroNumero * terceiroNumero;
    var terceiraMultiplicacao = segundoNumero * terceiroNumero;
    return "".concat(primeiraMultiplicacao, ", ").concat(segundaMultiplicacao, ", ").concat(terceiraMultiplicacao);
}
