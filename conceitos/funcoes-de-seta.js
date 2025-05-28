const exibirNomeDoDog = (nome) => {
  console.log(nome)
}

// funcao nomeada, com parametro + valor default, sem retorno
const exibirPorteDoDog = (porte = 'ND') => {
  console.log(porte)
}

// funcao nomeada, com parametro, com retorno
const obterNomeDoDogFormatado = (nome) => {
  return nome.toUpperCase()
}

const obterObjetoDog = () => {
  return {
    nome: 'Cristiano Messi',
    peso: 11.5,
    dogIrmao: {
      nome: 'Lionel Ronaldo'
    },
    adotado: true
  }
}

const listarObjetosDog = () => {
  return [{
    nome: 'Cristiano Messi',
    peso: 11.5
  }, {
    nome: 'Cristiano Messi',
    peso: 11.5
  }]
}

const listarNomesDeDogs = () => {
  const nomes = [
    'Cr7',
    'Pelé',
    'Maradona'
  ]
  
  console.log(`Passou pela função listarNomesDeDogs`)

  return nomes
}

// arrow function sem bloco + com return 'automatico'
const dobrar = (numero) => numero * 2
const saudacoes = (nome) => `Olá, ${nome}!`

exibirNomeDoDog("Pelé")
exibirPorteDoDog()
console.log(obterNomeDoDogFormatado("Cristiano Messi"))
console.log(obterObjetoDog())
console.log(listarObjetosDog())
console.log(listarNomesDeDogs())

console.log(`--------`)

listarNomesDeDogs()

const nomesDeDogs = listarNomesDeDogs()

// 

// function filtrarNumeros(lista) {
//   return lista.filter(item => typeof item === 'number');
// }


// Mocha 
//teste ('nome do teste', { tags: 'critico' }, function () {
  // implementacao do teste
//})