import * as leitor from "readline-sync"

function main(){
        let nome = leitor.question("INSIRA O NOME DO ITEM:  ")
        let valor = leitor.questionFloat("INSIRA O VALOR DO ITEM:   ")
        let desconto = leitor.questionInt("INSIRA O DESCONTO:   ")
        let valorDesconto = ((100 - desconto ) /100)
        console.log(`O nome do item é: ${nome}`);
        console.log(`O valor do item é: ${valor}`);
        console.log(`O valor com o desconto é: ${valor*valorDesconto}`);       
}
main();