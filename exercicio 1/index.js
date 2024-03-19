let nota1 
let nota2

nota1 = Number(prompt("Qual foi sua primeira nota?"))
nota2 = Number(prompt("Qual foi sua segunda nota?"))

let somaMedia = (nota1+nota2) / 2

if(somaMedia == 10){
console.log("a sua média foi de " +somaMedia+ " e você foi aprovado com distinção!")
}else if (somaMedia >= 7){
console.log("a sua média foi de " +somaMedia+ " e você foi aprovado!!")
}else{
    console.log("a sua média foi de " +somaMedia+ " e você foi reprovado!")
} 
