import * as leitor from "readline-sync"


function main(){
    let primeiroNumero: Number;
    let segundoNumero: Number;
    let terceiroNumero: Number;
    primeiroNumero = leitor.questionFloat("INSIRA O PRIMEIRO NÚMERO:")
    segundoNumero = leitor.questionFloat("INSIRA O SEGUNDO NÚMERO: ")
    terceiroNumero = leitor.questionFloat("INSIRA O TERCEIRO NÚMERO: ")

    console.log("O RESULTADO DAS SOMAS É:");
    console.log("------------------------")
    console.log(soma());
    console.log("O RESULTADO DAS SUBTRAÇÕES É:");
    console.log("------------------------")
    console.log(subtracao);
    console.log("O RESULTADO DAS DIVISÃO É:");
    console.log("------------------------")
    console.log(divisao);
    console.log("O RESULTADO DAS MULTIPLICAÇÃO É:");
    console.log("------------------------")
    console.log(multiplicacao);
}
main();

function soma(primeiroNumero, segundoNumero, terceiroNumero): String{
    const somaNumeros = primeiroNumero + segundoNumero
    const somaNumeros2 = primeiroNumero + terceiroNumero
    const somaNumeros3 = segundoNumero + terceiroNumero
    return `${somaNumeros}, ${somaNumeros2}, ${somaNumeros3}`;    
}
function subtracao(primeiroNumero, segundoNumero, terceiroNumero): String{
    const primeiraSubtracao = primeiroNumero - segundoNumero
    const segundaSubtracao  = primeiroNumero - terceiroNumero
    const terceiraSubtracao = segundoNumero - terceiroNumero
    return `${primeiraSubtracao}, ${segundaSubtracao}, ${terceiraSubtracao}`;    
}
function divisao(primeiroNumero, segundoNumero, terceiroNumero): String{
    const primeiraDivisao  = primeiroNumero / segundoNumero
    const segundaDivisao   = primeiroNumero / terceiroNumero
    const terceiraDivisao  = segundoNumero / terceiroNumero
    return `${primeiraDivisao}, ${segundaDivisao}, ${terceiraDivisao}`;    
}
function multiplicacao(primeiroNumero, segundoNumero, terceiroNumero): String{
    const primeiraMultiplicacao = primeiroNumero * segundoNumero
    const segundaMultiplicacao  = primeiroNumero * terceiroNumero
    const terceiraMultiplicacao = segundoNumero * terceiroNumero
    return `${primeiraMultiplicacao}, ${segundaMultiplicacao}, ${terceiraMultiplicacao}`;    
}








