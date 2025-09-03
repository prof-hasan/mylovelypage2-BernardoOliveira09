function transicao(botao){
    botao.style.display = "none"
    const vitoria = botao.parentElement.querySelector(".vitoria")
    vitoria.style.animation = "opaco 1s linear forwards"
}