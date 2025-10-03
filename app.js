alert('Boas vindas ao jogo do número secreto');

let numeroSecreto = 2;
console.log(numeroSecreto);
let chute;
let numChute = 1;
while (chute != numeroSecreto){
    chute = prompt("Escolhga um numero de 1 a 10");
    if (chute == numeroSecreto){
        alert("boa voce acertou");
    } else {
        numChute++;
        if (numeroSecreto > chute){
        alert(`O numero secreto e maior que o ${chute}`);
        } else {
        alert(`O numero secreto e menor que ${chute}`);
        }
    }
}
alert(numChute);