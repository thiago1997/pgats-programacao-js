// funcao nomeada, com parametro, sem retorno
function exibirNomeDoDog(nome) {
  console.log(nome)
}

// funcao nomeada, com parametro + valor default, sem retorno
function exibirPorteDoDog(porte = 'ND') {
  console.log(porte)
}

// funcao nomeada, com parametro, com retorno
function obterNomeDoDogFormatado(nome) {
  return nome.toUpperCase()
}

function obterObjetoDog() {
  return {
    nome: 'Bailey Maria',
    peso: 11.5,
    dogIrmao: {
      nome: 'Billy'
    },
    adotado: true
  }
}

function listarObjetosDog() {
  return [{
    nome: 'Cristiano Messi',
    peso: 11.5
  }, {
    nome: 'Cristiano Messi',
    peso: 11.5
  }]
}

function listarNomesDeDogs() {
  const nomes = [
    'Cr7',
    'Pelé',
    'Maradona'
  ]
  
  console.log(`Passou pela função listarNomesDeDogs`)

  return nomes
}


exibirNomeDoDog("Pelé")
exibirPorteDoDog()
console.log(obterNomeDoDogFormatado("Cristiano Messi"))
console.log(obterObjetoDog())
console.log(listarObjetosDog())
console.log(listarNomesDeDogs())

console.log(`--------`)

listarNomesDeDogs()

const nomesDeDogs = listarNomesDeDogs()
