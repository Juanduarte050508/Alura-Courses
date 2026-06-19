let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function gerarNumeroAleatorio() {
    return parseInt(Math.random() * 10 + 1);
}

function limaparCampo(){
    chute = document.querySelector('input');
    chute.value = "";
}

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function exbirMensagemInicial(){
exibirTextoNaTela('h1', 'Jogo do número secreto');
exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');
}

exbirMensagemInicial();

function verificarChute() {
    let chute = document.querySelector('input').value;

    if (chute == numeroSecreto){
        exibirTextoNaTela('h1', 'Venceu');
        exibirTextoNaTela('p', `Você escolheu o numero secreto com ${tentativas} tentativas!`);
        document.getElementById("reiniciar").removeAttribute("disabled")
    }
    else{
        if (chute > numeroSecreto){
            exibirTextoNaTela('p', 'O numero é mais baixo');
        }
        else{
            exibirTextoNaTela('p', 'O numero é maior');
        }
        tentativas++;
        limaparCampo();
    }
      

}

function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    let tentativas = 1;
    limaparCampo();
    exbirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}









