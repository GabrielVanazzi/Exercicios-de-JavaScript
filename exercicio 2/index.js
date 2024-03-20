let num1 = 0
let num2 = 0
let num3 = 0

num1 = Number(prompt("Digite um primeiro número:"));
num2 = Number(prompt("Digite um segundo número:"));
num3 = Number(prompt("Digite um terceiro número:"));

if(num1 > num2 && num1 > num3){
    console.log(" O primeiro número, " +num1+ ", é o maior dentre os outros");
}else if(num2 > num1 && num2 > num3){
    console.log(" O segundo número, " +num2+ ", é o maior dentre os outros")
}else{
    console.log(" O terceiro número, " +num3+ ", é o maior dentre os outros")
}