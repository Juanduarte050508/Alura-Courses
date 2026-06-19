let titulo = document.querySelector ("h1");
titulo.innerHTML = "Hora do Desafio";

function Verifyclickconsole () { 
    console.log("O botão foi clicado")
};

function Alertlovjs () { 
    alert("Eu amo JS")
};

function Cidadelembrada() {
   Cidade = prompt("Digite o nome de uma cidade do Brasil")
    alert(`Estive em ${Cidade} e lembrei de você`)
}

function Calculadora() {
    let n1 = parseInt(prompt("Digite um número inteiro:"));
    let n2 = parseInt(prompt("Digite outro número inteiro:"));
    let soma = n1 + n2;
    alert(`Resultado da soma: ${soma}`);
}
