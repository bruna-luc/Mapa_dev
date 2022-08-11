// subir no git começa as 2:02 da live

/*
Botão avançar - Quando clicar em avançar temos que mostrar o proximo cartão da lista
1º Dar um jeito de pegar o elemento HTML da seta avançar

2º Dar um jeito de identificar o click do usuario na seta avançar
3º Fazer o proximo cartão da lista;
4º Buscar o cartão que esta selecionado e esconder
*/

/*
Botão Voltar - Qunado clicar em voltar temos que mostrar o cartão anterior da lista
1º Dar um jeito de pegar o elemento HTML da seta voltar

2º Dar um jeito de identificar o click do usuario na seta voltar
3º Fazer o anterior cartão da lista;
4ª Buscar o cartão que esta selecionado e esconder
*/

function esconderCartaoSelecionado(){
  const cartaoSelecionado = document.querySelector(".selecionado");
  cartaoSelecionado.classList.remove("selecionado")
}

function mostrarCartao(indiceCartao){
  cartoes[indiceCartao].classList.add("selecionado");
}

console.log(document.querySelectorAll(".cartao"));
let cartaoAtual =0;
const cartoes =document.querySelectorAll(".cartao");// Essa linha teve que subir para que a variavel possa ser declarada antes da clasura de guarda

//botão avançar



// 1º Dar um jeito de pegar o elemento HTML da seta avançar
const btnAvancar = document.getElementById("btn-avancar");

// 2º Dar um jeito de identificar o click do usuario na seta avançar
btnAvancar.addEventListener("click", function(){

// Reset no carrosel 
if(cartaoAtual === cartoes.length-1){
  esconderCartaoSelecionado();  
  cartaoAtual=0
  mostrarCartao(cartaoAtual)
  return
};

// 3º Fazer o proximo cartão da lista;
// const cartoes =document.querySelectorAll(".cartao");
cartaoAtual++;
mostrarCartao(cartaoAtual)
// 4º Buscar o cartão que esta selecionado e esconder
esconderCartaoSelecionado();
})

//botão Voltar

// 1º Dar um jeito de pegar o elemento HTML da seta avançar
const btnVoltar = document.getElementById("btn-voltar");

// 2º Dar um jeito de identificar o click do usuario na seta avançar
btnVoltar.addEventListener("click", function(){

  // Reset no carrosel 
  if(cartaoAtual === 0){
    console.log("3.",cartaoAtual)
    esconderCartaoSelecionado();  
    cartaoAtual=2
    mostrarCartao(cartaoAtual)
    return
  };
// 4º Buscar o cartão que esta selecionado e esconder

esconderCartaoSelecionado();

// 3º Fazer o proximo cartão da lista;
cartaoAtual--;
mostrarCartao(cartaoAtual)

})

