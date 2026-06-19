
let produto = document.getElementById("produto")
let quantidade = document.getElementById("quantidade")
let listaProdutos = document.getElementById("lista-produtos")
let valorTotal = document.getElementById("valor-total")

function adicionar(){

    // Recuperar valores do formulário
    let produtosCarrinho = produto.value
    let qtdCarrinho = parseFloat(quantidade.value) || 1 
    
     // Validar quantidade minima (vazio ou menor que 1)
    if(!quantidade.value || qtdCarrinho < 1) {
        qtdCarrinho = 1
    }

    // Separar nome do produto e valor
    let produtoFiltrado = produtosCarrinho.split("-")
    let filtroValorProduto = produtoFiltrado[1].replace("R$", "").trim()
    let valorUnitario = parseFloat(filtroValorProduto)
    
    // Calcular subtotal
    let subtotalProduto = valorUnitario * qtdCarrinho
    
    // Adicionar no carrinho
    let novoHTML = `<section class="carrinho__produtos__produto"><span class="texto-azul">${qtdCarrinho}x</span> ${produtosCarrinho} <span class="texto-azul">R$ ${subtotalProduto}</span></section>`

    // Atualizar valor total
    let totalAtual = parseFloat(valorTotal.innerHTML) || 0
    valorTotal.innerHTML = totalAtual + subtotalProduto
    listaProdutos.innerHTML += novoHTML
}
 
function limpar(){
    listaProdutos.innerHTML = ""
    valorTotal.innerHTML = "0"
}
