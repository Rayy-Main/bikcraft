//ativar links do menu
const links = document.querySelectorAll('.header-menu a');

function ativarLink(link){
const url = location.href;
const href = link.href;

if(url.includes(href)) {
link.classList.add("ativo");
}
// console.log(url);
// console.log(href);
}

links.forEach(ativarLink);

//Ativar itens do orçamento

const paramentros = new URLSearchParams(location.search);

function ativarProduto(parametro) {
  const elemento = document.getElementById(parametro);
  //verificando se o elemento existe para não retornar null
  if(elemento){
  elemento.checked = true;
}
}
paramentros.forEach(ativarProduto);


//perguntas frequentes

const perguntas = document.querySelectorAll(".perguntas button");

function ativarPergunta(event) {
  const pergunta = event.currentTarget;
  const controls = pergunta.getAttribute("aria-controls")
  const resposta = document.getElementById(controls);

  resposta.classList.toggle("ativa");
  const ativa = resposta.classList.contains("ativa");
  // console.log(ativa);
  pergunta.setAttribute("aria-expanded", ativa);
  // console.log(resposta);
}


function eventosPerguntas(pergunta){
  pergunta.addEventListener("click", ativarPergunta);
}

perguntas.forEach(eventosPerguntas);


//galeria de bicicletas

const galeria = document.querySelectorAll(".bicicleta-imagens img");
const galeriaContainer = document.querySelector(".bicicleta-imagens");

function trocarImagem(event) {
  const img = event.currentTarget;
  const media = matchMedia('(min-width: 1000px)').matches;
 
  if(media) {
    galeriaContainer.prepend(img);
  } 
}

function eventosGaleria(img) {
img.addEventListener('click', trocarImagem);
}
galeria.forEach(eventosGaleria)

//animacao
if(window.SimpleAnime) {
  new SimpleAnime();
}
