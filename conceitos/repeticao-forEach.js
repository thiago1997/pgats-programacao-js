const listaDeAlunos = [
  'Pelé',
  'Maradona',
  'Cr7',
  'Messi',
  'Mbappe'
]

listaDeAlunos.forEach(aluno => {
  console.log(aluno)
})

const listaDeAlunosENotas = [
  {
    nome: 'Pelé',
    nota: 10
  },
  {
    nome: 'Maradona',
    nota: 8
  },
  {
    nome: 'Cr7',
    nota: 9
  },
  {
    nome: 'Messi',
    nota: 9
  },
  {
    nome: 'Mbappe',
    nota: 7
  }
]

listaDeAlunosENotas.forEach(aluno => {

  console.log(index)

  if (aluno.nota < 7) {
    console.log(`O aluno ${aluno.nome} precisa do trabalho extra`)
    console.log(`O aluno ${aluno.nome} tem a nota ${aluno.nota}`)
  }

})
