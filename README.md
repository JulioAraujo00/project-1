# UDEMY REACT

**1** `Criando um projeto`

Para criar um projeto React, utiliza-se o comando no terminal:
<npx create-react-app .>
Esse comando deve ser executado na própria pasta que o projeto será desenvolvido (o ponto (.) faz com que o conteúdo gerado pela instalação seja criado na pasta que está aberta no terminal).

## Package.json

Serve para "configurar" todas as depencências instaladas em nosso projeto.

Na seção __scripts__ são configurados os comandos para execuções diversas do projeto:

"scripts": {
    "start": "react-scripts start", `Inicia nosso projeto`
    "build": "react-scripts build", `Prepara o projeto para deploy`
    "test": "react-scripts test", `Inicia os scripts de teste`
    "eject": "react-scripts eject" `Abre um caminho para configurações do projeto`
  },

## Componentes

Todos os componentes React são criados a partir de uma função e essa função precisa ser nomeada com a primeira letra Maiúscula.

function NomeDoComponente() {
  return (

  )
}

Dentro dessa função utilizamos o <JSX>, que é o <html> dentro do componente! O <babel> é o responsável por traduzir essa linguagem no navegador.

## Class x ClassName

Na utilização de classes no React, ao invés de utilizar somente o termo <class>, é utilizado o <className>. Isso acontece pois o termo <class> é uma <palavra reservada> do `JavaScript`.

## Escrevendo códigos JS no JSX

São utilizadas {} para executar os códigos JS

 {1 + 1}

`TODO ELEMENTO REACT PRECISA DE UM ELEMENTO ROOT, NÃO SENDO POSSÍVEL UM ELEMENTO IRMÃO DE MESMO NÍVEL`

  **ERRADO**

  function ComponenteErrado() {
    return (
      <div `OS DOIS ELEMENTOS SÃO ROOT`>
        código 
      </div>
      <div `OS DOIS ELEMENTOS SÃO ROOT`>
        código
      </div>
    )
  }

  **CORRETO**

  function ComponenteCorreto() {
    return (
      <div `ELEMENTO ROOT`>
        <div `ELEMENTO FILHO`>
          código
        </div>
         <div `ELEMENTO FILHO`>
          código
        </div>
      </div>
    )
  }

  `Também pode ser utilizado um <fragmento React> ao invés do return`

  function ComponenteCorreto() {
    <>
      <div `ELEMENTO ROOT`>
        <div `ELEMENTO FILHO`>
          código
        </div>
         <div `ELEMENTO FILHO`>
          código
        </div>
      </div>
    </>
  }

## EXPORT DEFAULT nome do componente

Serve para exportar o componente para utilização em outras parte do projeto!


## NPM RUN BUILD

Quando criamos nosso projeto com o <create-react-app>, o próprio React configura todo nosso ambiente de desenvolvimento para ser reconhecido pelo navegador. Algumas coisas que são configuradas são o <Babel> e os <WebPacks>.

O **Babel** tem como objetivo transformar o <JSX> em <JS> reconhecível pelo navegador.

O **WebPack** é um <bundler> que unifica todos os arquivos que estão separados e converte todos eles para <JS, Css> e etc...

Quando executamos a build do projeto, essas dependências criam uma pasta chamada <Build> e nela está todo o projeto já pronto para hospedagem e utilização!

## ReactDom

Ele é responsável por manipular o DOM do navagador. 

As páginas web não precisam ser necessáriamente criadas completamente com o React. O arquivo <index.html> pode ser editado e agregar edições nele mesmo, sem a utilização da biblioteca React.

## Componentes Funcionais x Componentes de Classe

**Componentes com e sem estado (stateful e stateless)**

Anteriormente as versões 16 do React, poderiam ser criados elementos sem estado ou com estado. Os componentes <com estado> eram criados a partir de classes e os <sem estado> eram criados a partir de <funções> ou <classes sem estado>

Os componentes de classe tem a seguinte estrutura:

class NomeDaClasse extends Component {
  render() {
    return(
      código
    )
  }
}

O termo <Component> deve ser importado da biblioteca!

## ESTADOS NO REACT

Os estados são dados que o componente utiliza, além de servir como "atualizador" do método render (ele avisa o método render do componente a atualizar suas informações). Os estados podem ser objetos que contém os dados do componente.

Utilizando <classes> para criar o componente, vamos iniciar com o constructor e depois com o super:

class App extends Component {
  constructor(props) {
    super(props)
    this.state =  {
      name: 'Julio Araujo'
    }
  }

As <props> dentro do <constructor> são necessárias para utilizar todas as características do método <Component> importado da biblioteca. Já no <super> também são utilizadas <props> como parâmetro, mas agora para herdar as mesmas <props> do elemento <pai>, que é o <constructor>.
Já no <state>, temos a seguinte estrutura:

this`(cria uma associação com o objeto criado)`.state`(default como objeto vazio)` = {
  name: 'Julio Araujo' `(propriedade do estado atual)`
}

Dentro do <render()> vamos criar uma const para utilizar uma chave do objeto estado:

render() {
    const name = this.state.name
    return (
      <div>
        {name}
      </div>      
    );
  }

  ## Destructuring

  A atribuição via desestruturação possibilita extrair dados de arrays ou objetos através de variáveis diferentes:

  const { name } = this.state

  ## Syntatic Events

São ações disparadas pelo React que respondens a eventos da página:

<div onClick={() => alert('Nome clicado')}>
   {name}
</div>    

É comum se criar um método dentro de classes para gerar esses eventos ou outras ações. Em nosso caso, vamos criar um  método para efetuar o evento de alert na página:

handleNameClick() {
  onClick={() => alert('Nome clicado')}
}

Agora a <div> ficaria dessa forma:

<div onClick={this.handleNameClick}> 
  {name}
</div>

 Nesse caso, o código vai funcionar normalmente, mas vamos tentar utilizar alguma chave do state:

 handleNameClick() {
    const { name } = this.state
    alert(`Nome clicado ${name}`)
  }

Esse método não consegue por sí só utilizar as chaves do state pois ele não está 'ligado' com o state (o React não cria o bind automáticamente entre os métodos e states), ou seja, ele não consegue acessar o "this" no método.
Para corrigir esse problema, é necessário fazer uma <bound function>:

this.handleNameClick = this.handleNameClick.bind(this)

Aqui criamos um novo atributo <handleNameClick> que recebe o método <handleNameClick> que está ligado (<bind>) ao <this>! (ufa!!!)


## Alterando o state

Para alterar os valores das chaves de um state, não podemos alterá-lo diretamente, então utilizamos um método chamado <setState>:

 handleNameClick() {
   this.setState({ name: 'Cezar' })
  }

Aqui, ao clicarmos, o nome apresentado na tela foi alterado para Cezar!

Sempre que um estado for alterado, a função <render()> será chamada novamente.

## Retirando ações (não utilizando o this com JS)

Em primeiro lugar, vamos criar um método utilizando <arrow function `=> () {}` >. As arrow functions não exigem a utilização do <bind> para utilizar as chaves dos states.

**Contador de exemplo**

handleAClick =() => {
    const {counter} = this.state
    this.setState({ counter: counter + 1 })
  }

**Prevenindo ações**

Para evitar que o navegador realize ações, utilizamos o método <preventDefault>:

handleAClick =(event) => {
    event.preventDefault()
    const {counter} = this.state
    this.setState({ counter: counter + 1 })
  }


## Class Fields

Permite criar atributos na classe sem ter um construtor! Dessa forma, podemos eliminar o construtor completamente e utilizar a seguinte estrutura:

state =  {
      name: 'Julio Araujo',
      counter: 0
    }

## AULA 13 - STATES COM ARRAYS E OBJETOS

Para utilizar objetos e arrays como estado, vamos primeiro criar um objeto da mesma forma que fizemos anteriormente:

class Aula13 extends Component {
  state =  {
    posts: [
      {
        id: 1,
        title: 'O titulo 1',
        body: 'O corpo 1'
      },
      {
        id: 2,
        title: 'O titulo 2',
        body: 'O corpo 2'
      },
      {
        id: 3,
        title: 'O titulo 3',
        body: 'O corpo 3'
      }
    ]
  }
   render() {
    const { posts } = this.state
    return (
      <div className='App'>
         
      </div>
    );
  }
}

## Utilizando o map()

Todo array em <JS> puro já contém um <map()> dentro de sí. Esse map vai retornar um novo array contendo o que for solicitado ao método:

render() {
    const { posts } = this.state
    return (
      <div className='App'>
        {posts.map (post => <h1>{post.title}</h1>)}
      </div>
    );
  }

Dentro dessa <div> criamos a seguinte lógica:

O método <map()> vai encontrar dentro do objeto **posts** todos os elementos <title> e renderizar na tela como um <h1>. O <post> dentro da função <map> e antes da <arrow Function> dá nome ao elemento que estamos criando.

Ao renderizar esse elemento criado, o React exibe um warning no DevTools dizendo que cada filho da lista precisa de uma chave de identificação unica. Isso acontece devido a otimização de renderização do React funcionar individualmente. Para resolver esse problema, utilizamos a propriedade <key={}>


render() {
    const { posts } = this.state
    return (
      <div className='App'>
        {posts.map (post => <h1 key={post.id}>{post.title}</h1>)}
      </div>
    );
  }

  Em nossa propriedade <key={post.id}>, utilizamos uma das chaves do array para identificar o elemento (em nosso caso, utilizamos o <id>).

  **Sempre que utilizarmos o método map(), utilizar a propriedade KEY!**

## Retornando mais de uma linha 

Para retornar mais de uma linha na mesmo método que estamos utilizando, vamos adicionar mais um ():

render() {
    const { posts } = this.state
    return (
      <div className='App'>
        {posts.map (post => (
          <h1 key={post.id}>{post.title}</h1>
        ))}
      </div>
    );
  }

  ## Renderizando mais um elemento

Para renderizar mais um elemento dentro do nosso método <map()>, precisamos adicionar uma <div> envolvendo tudo que será renderizado (regra de pai e filho para renderização). Também vamos colocar o propriedade <key> nessa <div> que foi adicionada:

render() {
    const { posts } = this.state
    return (
      <div className='App'>
         {posts.map (post =>(
          <div key={post.id}>
            <h1>{post.title}</h1>
            <p>{post.body}</p> 
          </div>
        ))}
      </div>
    );
  }

## 15 - LifeCicle Methods

Esses métodos são utilizados quando precisamos de uma ação específica em momentos específicos. Uma forma de ser utilizado é na chamadas de API's externos. 

Utilizando para chamar API's externas, é interessante utilizar o método nativo <js> <setTimeout()> para aguardar um determinado tempo para garantir o carregamento das informações:

componentDidMount() {
 setTimeout(() => {
  this.setState({
    posts: [
      {
        id: 1,
        title: 'O titulo 1',
        body: 'O corpo 1'
      },
      {
        id: 2,
        title: 'O titulo 2',
        body: 'O corpo 2'
      },
      {
        id: 3,
        title: 'O titulo 3',
        body: 'O corpo 3'
      }
    ]
  })
 },5000)
}

<LifeCicleMethods>

## ComponentDidMount()
https://pt-br.reactjs.org/docs/react-component.html#componentdidmount

Dispara uma ação assim que o componente for renderizado.

## ComponentDidUpdate(prevProps, prevState, snapshot)  
https://pt-br.reactjs.org/docs/react-component.html#componentdidupdate

*prevProps*
Propriedades anteriores
*prevState*
Estado anterior
*snapshot*
É utilizado quando utilizamos outro <lifeCicleMethod>

## 17 - Buscando dados externos com fetch (Data fetching)
https://developer.mozilla.org/pt-BR/docs/Web/API/Fetch_API

Para realizar buscas em API's externas, vamos utilizar o método <componentDidMount>. Dentro dele, vamos utilizar o <fetch API> do navegador.

 componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/posts') **1** Endereço da API
      .then(response => response.json()) **2**
      .then(posts =>this.setState({ posts})) **3**
  }
**1**
Endereço da API
**2**
Uma <promise> que, depois de recebidos os dados da API, atribui os valores recebidos a uma variável chamada <response>, que recebe uma <arrow function> convertendo os valores para <json>.

**3**
Outra <promise> que atribui a variável <posts> os valores convertidos e essa mesma <posts> recebe uma arrow function atribuindo os valores ao estado <posts>

Com essa lógica preparada, vamos criar um método para executa-la.

loadPosts = async () => {
   fetch('https://jsonplaceholder.typicode.com/posts') **1** Endereço da API
      .then(response => response.json()) **2**
      .then(posts =>this.setState({ posts})) **3**
}

Agora vamos alterar a forma de realizar o <fetch>, onde vamos atribuí-lo a uma <const> chamada <postsResponse>. Não vamos utilizar <promises> nesse método para utilizar em outro método mais a frente.

loadPosts = async () => {
  const postsResponse = fetch('https://jsonplaceholder.typicode.com/posts') **1** Endereço da API
}

Como vamos fazer mais uma requisição da <API>, vamos utilizar o <Promise.All()>. Dessa forma, todas as requisições serão realizadas da forma mais rápida possivel.

const [posts] = await Promise.all([postsResponse])**1**

consts postsJson = await posts.json()**2**

this.setState({posts: postsJson})

**1**
Utilizando o método <Promise.all()>, como parâmetro criamos um <array> de promessas.
**2**
Convertemos essas <promisses> em <json>
**3**
No <state>, foi definido o item <posts>

Agora vamos utilizar o <componentDidMount>:
componentDidMount() {
  this.loadPosts()
  }

Depois de fazer toda a estilização, vamos fazer o <fetch> das imagens.

loadPosts = async () => {
  const postsResponses = fetch('https://jsonplaceholder.typicode.com/posts')
  const photosResponse = fetch('https://jsonplaceholder.typicode.com/photos') **adicionamos as fotos**

  const [posts,photos] = await Promise.all([postsResponses,photosResponse]) **fotos no array de promisses**

  const postsJson = await posts.json()
  const photosJson = await photos.json() **conversão das fotos para json**

  this.setState({posts: postsJson})
  }

Quando utilizarmos as fotos da <API>, teremos um número muito maior que a quantidade de <posts> de nossa página, então precisamos fazer com que as imagens e os posts sejam conectados entre sí. Para isso, vamos utilizar o <ziper> para unir esses dois <arrays> que criamos:

const postsAndPhotos = posts.map((post, index) => {
  return {...post, cover: photosJson[index].url}
}) 

Utilizamos o <posts> como base por ser o menor array. Como parâmetro do <map()>, vamos utilizar os atributos do <state> <posts, index>, sendo o <index> o valor único de cada <post> que é o <id>. Dentro do <return>, também vamos utilizar o atributo <cover> do <array> de imagens e vamos utilizar o <index> dele sendo sua <url>. Também precisamos atribuir o <postsAndPhotos> no <setState>, pois agora ele carrega todas as definições de <posts> e <photos>.

  loadPosts = async () => {
     const postsResponses = fetch('https://jsonplaceholder.typicode.com/posts')
     const photosResponse = fetch('https://jsonplaceholder.typicode.com/photos')
   
     const [posts,photos] = await Promise.all([postsResponses,photosResponse])

     const postsJson = await posts.json()
     const photosJson = await photos.json()

     const postsAndPhotos = postsJson.map((post,index) => {
       return { ...post, cover: photosJson[index].url }
     })
     
     this.setState({posts: postsAndPhotos})
  }

Feito isso, vamos atualizar nosso <render()> para inserir as imagens:

render() {
    const { posts } = this.state
    return (
      <section className='container'>
        <div className='posts'>
          {posts.map(post =>(
            <div className='post'>
              <img src={post.cover} alt={post.title}/>
              <div key={post.id} className='post-content'>
                <h1 >{post.title}</h1>
                <p>{post.body}</p> 
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }