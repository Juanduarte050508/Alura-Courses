let amigosLista = [];

let nomeAmigo = document.getElementById("nome-amigo");
let listaAmigos = document.getElementById("lista-amigos");
let listaSorteio = document.getElementById("lista-sorteio");


function adicionar() {

    //Verificação nomedigitado
    if (amigo.value == '') {
        alert('Informe o nome do amigo!');
        return;
    }
    
    //Nomes diferentes
     if (amigos.includes(amigo.value)) {
        alert('Nome já adicionado!');
        return;
    }
    // adiciona no array
    amigosLista.push(nomeAmigo.value);

    // atualiza lista na tela
    if (listaAmigos.textContent == "") {
        listaAmigos.textContent = nomeAmigo.value;
    } 
    else {
        listaAmigos.textContent =
            listaAmigos.textContent + " - " + nomeAmigo.value;
    }

    // limpa input
    nomeAmigo.value = "";
}


function sortear() {

    //Verificar minimo 4 pessoas
    if (amigos.length < 4) {
        alert("Adicione pelo menos 4 amigos");
        return;
}
    embaralha(amigosLista);

    listaSorteio.innerHTML = "";

    for (let i = 0; i < amigosLista.length; i++) {

        let proximo = i + 1;

        if (proximo == amigosLista.length) {
            proximo = 0;
        }

        listaSorteio.innerHTML =
            listaSorteio.innerHTML +
            amigosLista[i] + " ---> " + amigosLista[proximo] + "<br>";
    }
}


function embaralha(lista) {

    for (let indice = lista.length; indice; indice--) {

        const indiceAleatorio = Math.floor(Math.random() * indice);

        [lista[indice - 1], lista[indiceAleatorio]] =
        [lista[indiceAleatorio], lista[indice - 1]];
    }
}


function reiniciar() {
    listaAmigos.textContent = ""
    listaSorteio.textContent = ""
    amigosLista = [];

}