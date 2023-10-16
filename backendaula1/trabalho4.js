"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var leitor = require("readline-sync");
function main() {
    var salarioBruto;
    var salarioInss;
    var salarioIrrf;
    var salarioLiquido;
    salarioBruto = leitor.questionFloat("INSIRA O VALOR DO SEU SALÁRIO BRUTO: ");
    salarioInss = INSS(salarioBruto);
    salarioLiquido = IRRF(salarioInss);
    console.log("SEU SALÁRIO É:", salarioBruto);
    console.log("SEU SALÁRIO COM DESCONTO DO INSS SERÁ DE:", salarioInss);
    console.log("SEU SALÁRIO LIQUIDO:", salarioLiquido);
}
function INSS(salario) {
    if (salario <= 1320) {
        return salario * 0.925;
    }
    else if (salario > 1320 && salario <= 2.572) {
        return salario * 0.91;
    }
    else if (salario > 2752 && salario <= 3856) {
        return salario * 0.88;
    }
    else if (salario > 3856) {
        return salario * 0.86;
    }
    else {
        console.log("VALOR INVÁLIDO");
        return 0;
    }
}
function IRRF(salario) {
    if (salario <= 2112) {
        return salario;
    }
    else if (salario > 2112 && salario <= 2826) {
        return salario * 0.925;
    }
    else if (salario > 2826 && salario <= 3751) {
        return salario * 0.85;
    }
    else if (salario > 3751 && salario <= 4664) {
        return salario * 0.785;
    }
    else if (salario > 4664) {
        return salario * 0.725;
    }
    else {
        console.log("VALOR INVALIDO");
        return 0;
    }
}
main();
