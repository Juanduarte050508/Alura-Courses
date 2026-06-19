alert('Boas vindas ao jogo do número secreto');
// LOG 1: Ver o número antes de começar
// Para você saber o valor da variável "numeroSecreto" logo de cara no console.
let numeroSecreto = parseInt (Math.random()* numeroMaximo + 1);
console.log(numeroSecreto);
let tentativa = 1;
let numeroMaximo = 5000
let chute 
// LOG 2: Ver o que o prompt guardou
// Para conferir se o que você digitou realmente entrou na variável "chute".
console.log(chute);

//Enquanto chute não for igual ao numero secreto
while (chute != numeroSecreto) {
    chute =parseInt(prompt(`Escolha um número entre ${numeroMaximo} e 100`))
     // (= define valor) (== compara)
    if (chute == numeroSecreto)
        break;
     // serve para PARAR!       
    else
        if (chute >= `${numeroSecreto}`) 
            {alert (`O numero é menor que ${chute}`)}
    // ` + $ + {} = TemplateStrings (exiba o valor de uma variavel na mensagem)

        else 
        {alert (`o numero é maior que ${chute}`)}
        
         // LOG 3: Confirmar que o erro aconteceu
        {console.log("o usuario errou o numero")}
   
        //Para atribuir +1
        tentativa++}
    console.log(tentativa)
let palavratentativa = tentativa > 1 ? "tentativas" : "tentativa";
alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativa} ${palavratentativa}`);