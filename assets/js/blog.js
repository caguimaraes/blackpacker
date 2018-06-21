// JSON BLOG
var conteudo = {
    "20/06/2018": {
      "title": "Viajar também é para pessoas negras",
      "content": " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel consequat eros. Fusce convallis ante vitae erat scelerisque ornare. Sed eu nunc cursus, gravida purus a, pulvinar nulla. Nunc nec convallis nunc. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec luctus dignissim venenatis. Morbi ac auctor lacus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.Curabitur erat neque, suscipit et fermentum sit amet, pharetra vel massa. Integer mi purus, ornare non placerat sit amet, consectetur non leo.\r\Aliquam diam sapien, pellentesque eget mattis quis, facilisis sed risus. Vestibulum et quam leo. Nulla et urna at turpis egestas consequat. Aliquam malesuada metus orci, vitae feugiat erat pellentesque vel. Nam sagittis posuere libero, ut ornare felis egestas ac. Vivamus tincidunt magna justo, quis rhoncus felis dignissim in.       Vivamus pellentesque nulla metus, a condimentum magna tincidunt sed. Donec aliquet ornare molestie. Proin pretium arcu eget lorem pulvinar pretium. Pellentesque sagittis molestie est, ac posuere metus maximus ut.Sed rhoncus urna quis erat egestas, sit amet ornare magna efficitur. In hac habitasse platea dictumst. Aliquam sodales velit vitae metus iaculis, dignissim consequat mauris dignissim. Quisque posuere nunc ut massa ultrices volutpat. Nulla at augue erat.\n\nMauris imperdiet, nulla at molestie ornare, ipsum magna imperdiet nisl, rhoncus aliquet neque nibh eu mauris. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin ligula justo, porttitor ut diam a, hendrerit tincidunt metus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nam vestibulum elementum enim non dignissim. Proin rutrum mauris id felis pharetra, ut mattis diam tempor. Cras elementum erat a varius vestibulum. Vestibulum vel felis a est faucibus consequat."
    },
    "18/06/2018": {
      "title": "Teste",
      "content": " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel consequat eros. Fusce convallis ante vitae erat scelerisque ornare. Sed eu nunc cursus, gravida purus a, pulvinar nulla. Nunc nec convallis nunc. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec luctus dignissim venenatis. Morbi ac auctor lacus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.Curabitur erat neque, suscipit et fermentum sit amet, pharetra vel massa. Integer mi purus, ornare non placerat sit amet, consectetur non leo. Aliquam diam sapien, pellentesque eget mattis quis, facilisis sed risus. Vestibulum et quam leo. Nulla et urna at turpis egestas consequat. Aliquam malesuada metus orci, vitae feugiat erat pellentesque vel. Nam sagittis posuere libero, ut ornare felis egestas ac. Vivamus tincidunt magna justo, quis rhoncus felis dignissim in. Vivamus pellentesque nulla metus, a condimentum magna tincidunt sed. Donec aliquet ornare molestie. Proin pretium arcu eget lorem pulvinar pretium. Pellentesque sagittis molestie est, ac posuere metus maximus ut.Sed rhoncus urna quis erat egestas, sit amet ornare magna efficitur. In hac habitasse platea dictumst. Aliquam sodales velit vitae metus iaculis, dignissim consequat mauris dignissim. Quisque posuere nunc ut massa ultrices volutpat. Nulla at augue erat. Mauris imperdiet, nulla at molestie ornare, ipsum magna imperdiet nisl, rhoncus aliquet neque nibh eu mauris. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin ligula justo, porttitor ut diam a, hendrerit tincidunt metus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nam vestibulum elementum enim non dignissim. Proin rutrum mauris id felis pharetra, ut mattis diam tempor. Cras elementum erat a varius vestibulum. Vestibulum vel felis a est faucibus consequat."  
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
