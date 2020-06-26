document.body.onload = adcElemento

function adcElemento(){
    //cria um elemento div
    //e dá à ele conteúdo
    var divNova = document.createElement('div')
    var conteudoNovo = document.createTextNode('Olá, comprimentos !!')
    divNova.appendChild(conteudoNovo)//adiciona o nó de texto à nova div criada

    //adiciona o novo elemento criado e seu conteúdo ao DOM
    var divAtual = documet.getElmentById('div1')
    document.body.insertBefore(divNova,divAtual)



}