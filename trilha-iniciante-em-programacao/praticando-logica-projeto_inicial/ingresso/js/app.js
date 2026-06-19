let tipoIngresso = document.getElementById("tipo-ingresso");

// Quantidade input
let qtd = document.getElementById("qtd");

// Quantidade disponível por tipo
let qtdPista = document.getElementById("qtd-pista");
let qtdSuperior = document.getElementById("qtd-superior");
let qtdInferior = document.getElementById("qtd-inferior");


function comprar() {

    // Quantidade de ingressos comprados
    let qtdIngresso = parseInt(qtd.value);

    // Validação mínima
    if (!qtdIngresso || qtdIngresso <= 1) {
        qtdIngresso = 1;
    }

    // Tipo selecionado
    let tipo = tipoIngresso.value;

    // Descobre o estoque atual
    let quantidadeAtual = 0;
    let elementoEstoque = null;

    if (tipo == "pista") {
        elementoEstoque = qtdPista;
    } 
    else if (tipo == "superior") {
        elementoEstoque = qtdSuperior;
    } 
    else if (tipo == "inferior") {
        elementoEstoque = qtdInferior;
    }

    quantidadeAtual = parseInt(elementoEstoque.textContent);

    // Validação de estoque
    if (qtdIngresso > quantidadeAtual) {
        alert("Limite Máximo Atingido");
        return;
    }

    // Atualização do estoque
    elementoEstoque.textContent = quantidadeAtual - qtdIngresso;
}