alert('Boas vindas ao jogo do número secreto');
// LOG 1: Ver o número antes de começar
// Para você saber o valor da variável "numeroSecreto" logo de cara no console.
let numeroSecreto = 6;
console.log(numeroSecreto);

let chute = prompt('Escolha um número entre 1 e 10');
// LOG 2: Ver o que o prompt guardou
// Para conferir se o que você digitou realmente entrou na variável "chute".
console.log(chute);


if (chute == numeroSecreto) 
    // (= define valor) (== compara)

{alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto}`);}
// ` + $ + {} = TemplateStrings (exiba o valor de uma variavel na mensagem)

// LOG 3: Confirmar que o erro aconteceu
    else{console.log("o usuario errou o numero");
     alert(`Errou! O numero secreto era ${numeroSecreto}, e você escolheu ${chute}`)}