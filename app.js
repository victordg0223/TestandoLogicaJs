//1.Pergunte ao usuário qual é o dia da semana. Se a resposta for "Sábado" ou "Domingo", mostre "Bom fim de semana!". Caso contrário, mostre "Boa semana!".
let diaSemana = prompt("Qual é o dia da semana?");
if (diaSemana === "Sábado" || diaSemana === "Domingo") {
    alert("Bom fim de semana!");
} else {
    alert("Boa semana!");
}
//2.Verifique se um número digitado pelo usuário é positivo ou negativo. Mostre um alerta informando.
let numeroDigitado = prompt("Digite um número:");
if (numeroDigitado >= 0) {
    alert("O número é positivo.");
    }else{
        alert("O número é negativo.");  
    }
//3.Crie um sistema de pontuação para um jogo. Se a pontuação for maior ou igual a 100, mostre "Parabéns, você venceu!". Caso contrário, mostre "Tente novamente para ganhar.".
let timeA = prompt("Digite a pontuação do Time A:");
if (timeA >= 100) {
    alert("Parabéns, Time A venceu!");
} else {
    alert("Tente novamente para ganhar.");
}
//4.Crie uma mensagem que informa o usuário sobre o saldo da conta, usando uma template string para incluir o valor do saldo.
let saldo = 2500.75;
alert(`Seu saldo atual é de R$ ${saldo}.`);
//5.Peça ao usuário para inserir seu nome usando prompt. Em seguida, mostre um alerta de boas-vindas usando esse nome.
let nomeUsuario = prompt("Por favor, insira seu nome:");
alert(`Boas vindas, ${nomeUsuario}!`);