export {
  geradorDeTagsDeIdentificacao,
  verificarSePodeSerAdotado,
  calcularConsumoDeRacao,
  decidirTipoDeAtividadePorPorte,
  buscarDadoAsync
}

function geradorDeTagsDeIdentificacao(nome) {
  return nome.toUpperCase()
}

function verificarSePodeSerAdotado(idade, porte) {
  return idade === 1 && porte === "M"
}

function calcularConsumoDeRacao (name, idade, peso) {
  return peso = 14.5 * 300
}

function decidirTipoDeAtividadePorPorte (porte, atividade){
  if (porte = "Pequeno"){
    return atividade = "brincar dentro de casa"
  } else {
    return atividade = "brincar fora de casa"
  }
}

async function buscarDadoAsync (nome){
  return nome = "Pipoca"
}