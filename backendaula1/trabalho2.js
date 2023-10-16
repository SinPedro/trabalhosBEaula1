"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var leitor = require("readline-sync");
function main() {
    var nome = leitor.question("INSIRA O NOME DO ITEM:  ");
    var valor = leitor.questionFloat("INSIRA O VALOR DO ITEM:   ");
    var desconto = leitor.questionInt("INSIRA O DESCONTO:   ");
    var valorDesconto = ((100 - desconto) / 100);
    console.log("O nome do item \u00E9: ".concat(nome));
    console.log("O valor do item \u00E9: ".concat(valor));
    console.log("O valor com o desconto \u00E9: ".concat(valor * valorDesconto));
}
main();
