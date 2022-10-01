function exibe_esconde(cod){
  textoBotao = "exibe-" + cod
  textoSection = "conteudo-" + cod

  botao = document.getElementById(textoBotao)

  if(botao.innerHTML == "[exibir conteúdo]"){
    botao.innerHTML = "[esconder conteúdo]"
    document.getElementById(textoSection).style.display = "block"
  }
  else{
    botao.innerHTML = "[exibir conteúdo]"
    document.getElementById(textoSection).style.display = "none"
  }
  
}