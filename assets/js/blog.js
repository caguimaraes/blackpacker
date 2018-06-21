// JSON BLOG
var conteudo = {
    "20/06/2018": {
      "title": "Como é ser um intercambista negro?",
      "content": " Fazer intercâmbio dá chance ao participante de viver muitas histórias, agregar experiência ao currículo e ao crescimento pessoal, além de permitir ter visão mais ampla de mundo. Além disso, quem o faz adquire uma série de saberes para ter condições de resolver situações complicadas de modo autônomo.Uma das formas mais consagradas de intercâmbio é o universitário. As universidades públicas e parte das privadas oferecem aos seus estudantes a possibilidade de estudar em outra instituição de ensino superior em diferentes países, com culturas distintas da brasileira. A ressalva vem à tona ao se recordar que a universidade, em especial a pública no Brasil, é um privilégio da classe média branca. De acordo com pesquisa feita pelo IBGE (Instituto Brasileiro de Geografia e Estatística), o percentual de negros com idades entre 18 e 24 nas universidades brasileiras mais do que dobrou desde 2005, mas, ainda assim, está significativamente abaixo do número de estudantes brancos no espaço acadêmico público ou privado – 5,5% dos jovens negros estavam na universidade em 2005, ao passo que 12,8% compunham o nível superior em 2015. “É bem gratificante estar aqui e é prazeroso porque eu estou realizando um sonho”. O segredo apontado por ela é o planejamento. Quando decidiu ir para Dublin, ela procurou uma agência dois anos antes, de acordo com suas condições. Segundo ela, o planejamento foi essencial."
    },
    "18/06/2018": {
      "title": "Como é ser um negro viajante",
      "content": "Quando decidi tirar um sabático para viajar pelo mundo não imaginava fazer o recorte racial. Comecei a juntar dinheiro pretendendo mochilar e passei a acompanhar diversos blogueiros que estavam fazendo o mesmo. O mundo ficou pequeno, as fronteiras diminuíram, ficou mais barato viajar e tem um monte de gente vivendo como viajante. Dos blogueiros que conheci nenhum era negro. A pessoa que mais me identifiquei nesse momento foi Kivia Mendonça, do Kiviagem, mulher, de família simples, jornalista, que economizou dinheiro com seu próprio trabalho e viajava de carona, ficando na casa das pessoas e o mais importante: tentando conhecer os lugares de fato, sem glamourizar as viagens como um consumo supérfluo. Ela ajudou a me inspirar e a perceber que minha ideia não era maluca. Eu também podia.Dinheiro economizado, passagens, mochila e seguro de viagem comprados, eu parti. Percorri 23 países em nove meses pelos cinco continentes. Uma viagem dessas deve ser muito cara e é impossível para um trabalhador comum fazer, certo? Errado. O valor que eu gastei foi o mesmo que eu usaria para comprar um carro popular zero quilômetro. Quantas pessoas que você conhece têm carro? Várias. Todas elas economizaram e investiram tempo e dinheiro para adquiri-lo. Foi o mesmo com essa viagem. Não estou dizendo que é fácil e que todas as pessoas conseguem fazer isso. Infelizmente não. Mas estou dizendo que é possível.."  
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
