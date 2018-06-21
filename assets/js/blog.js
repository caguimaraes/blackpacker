// JSON BLOG
var conteudo = {
    "20/06/2018": {
      "title": "Viajar também é para pessoas negras",
      "content": "lorem lorem"
    },
    "18/06/2018": {
      "title": "Teste",
      "content": "lorem lorem"  
    }
  }

var conteudoBlog = Object.keys(conteudo);
console.log(conteudoBlog, 'conteudoBlog')

var dataDiv = document.createElement('div')
    dataDiv.classList.add('data') // criar css 

var conteudoDiv = document.createElement('div')
    conteudoDiv.classList.add('conteudo')

for (conteudoBlog in conteudo) {
    var data = conteudoBlog
    var title = conteudo[conteudoBlog].title
    var content = conteudo[conteudoBlog].content
    console.log(data)
    console.log(title)
    console.log(content)  
    
    var dataDiv = document.createElement('div')
    var dataH1 = document.createElement('h3')
    dataH1.innerHTML = data 
    
    dataDiv.appendChild(dataH1)
    conteudoDiv.appendChild(dataDiv)

    var tituloDiv = document.createElement('div')
    var tituloH1 = document.createElement('h1')
    tituloH1.innerHTML = title

    tituloDiv.appendChild(tituloH1)
    conteudoDiv.appendChild(tituloDiv)

    var textoDiv = document.createElement('div')
    var textoP = document.createElement('p')
    textoDiv.innerHTML = content

    textoDiv.appendChild(textoP)
    conteudoDiv.appendChild(textoDiv)

 
    var data = document.getElementById('data')
    data.appendChild(dataDiv)

    var titulo = document.getElementById('tituloEtexto')
    titulo.appendChild(conteudoDiv)

    var texto = document.getElementById('tituloEtexto')
    texto.appendChild(conteudoDiv)

}
