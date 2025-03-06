let linhas = 3
let colunas = 3

function tabuleiro(linha, coluna){
    linhas += linha
    colunas += coluna
    
    const tabuleiro = document.querySelector(".tabuleiro")
    const largura = tabuleiro.clientHeight
    const altura = tabuleiro.clientWidth
    
    const tamanhoBlocoVertical = largura / colunas 
    const tamanhoBlocoHorizontal = altura /  linhas 
    const tamanhoBloco = Math.min(tamanhoBlocoVertical, tamanhoBlocoHorizontal)
   
    tabuleiro.innerHTML = `
       <div class="linha">
           ${`<div class="celula" style='width: ${tamanhoBloco}px; height: ${tamanhoBloco}px;'></div>`.repeat(colunas)}
       </div>
    `.repeat(linhas)
   
    document.getElementById("linhas").innerHTML = linhas
    document.getElementById("colunas").innerHTML = colunas
}

