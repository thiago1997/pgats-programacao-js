const brinquedos = [
  'Bola',
  'Osso',
  'Corda',
  'Sino'
]

brinquedos.forEach(brinquedo => {
  console.log(`Entregando o brinquedo - ${brinquedo}`)
})

console.log(`Todos brinquedos foram entregues!`)

// Exemplo de aluno

const brinquedosEntregues = []

const brinquedos2 = [
  'Bola',
  'Osso',
  'Corda',
  'Sino'
]

brinquedos2.forEach(brinquedo => {
  console.log(`Entregando o brinquedo - ${brinquedo}`)

  brinquedosEntregues.push(brinquedo)
})

console.log(`Todos brinquedos foram entregues! - ${brinquedosEntregues.join(',')}`)

// Exemplo de aluno 

const brinquedosComNomeECor = [
  {
    nome: 'Bola',
    cor: 'Amarela'
  },
  {
    nome: 'Osso',
    cor: 'Cinza'
  }
]

brinquedosComNomeECor.forEach(brinquedo => {
  console.log(`Entregando o brinquedo ${brinquedo.nome}, de cor ${brinquedo.cor}`)
})

// ---

const listaDeBrinquedosDoCachorro = [
  'Bola',
  'Osso',
  'Corda',
  'Sino',
]

listaDeBrinquedosDoCachorro.forEach(Cachorro => {
  console.log(Cachorro)
})
      
// exemplo de aluno - extra 

function entregarBrinquedos(brinquedos) {
  brinquedos.forEach((brinquedo, i) => {
      console.log(`Entregando brinquedo ${i + 1}: ${brinquedo}`);
  });
}

entregarBrinquedos(brinquedos)
