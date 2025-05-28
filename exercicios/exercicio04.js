const nome = `Mel`
const peso = 10
const estoque = 5000

const gramasPorDia = peso * 30
const duracaoEstoque = estoque / gramasPorDia

console.log(`Nome do dog: ${nome}`)
console.log(`Peso: ${peso}`)
console.log(`Gramas por dia: ${gramasPorDia}`)
console.log(`O estoque vai durar: ${duracaoEstoque}`)

// ALTERNATIVA 2, usando função com parâmetros

function calcularConsumoDeRacao(nome, peso, estoque) {
  const gramasPorDia = peso * 30
  const duracaoEstoque = Math.floor(estoque / gramasPorDia)

  console.log(`----------------------`)
  console.log(`Nome do dog: ${nome}`)
  console.log(`Peso: ${peso}kg`)
  console.log(`Gramas por dia: ${gramasPorDia}g`)
  console.log(`O estoque vai durar: ${duracaoEstoque} dias`)
  console.log(`----------------------`)
}

calcularConsumoDeRacao('Ada', 1, 2000)
calcularConsumoDeRacao('Laninha', 4.2, 15000)
calcularConsumoDeRacao('Pantera', 14.5, 5000)