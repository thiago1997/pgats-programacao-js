console.log("Hello Word!")
console.error("Falha na execução")
console.warn("Atenção")

console.table([{
    nome: 'Thiago Neves',
    turma: '02', 
    disciplina: 'Prog JS'
},{
    nome: "Neves Thiago",
    turma: "02",
    disciplina: "Prog JS"

}])

/**
 * Constantes e Variáveis
 */

// const - Para informações que nunca mudam 
// var ou let - para informações que podem mudar

// Informações de um cachorro

// Informações que mudam
    const raca = 'Vira Lata'
    const cor = 'Caramelo'
    const dataDeNascimento = '01/01/2018'

// Informações que não mudam    
    let idade = 7
    let peso = 6.5
    let vacinado = true 
    let tamanho = 'M'

// hoisting -> içamento ou elevação 

const irmaos = ["Thor", "Loki"]
console.table(irmaos)

/**
 * Tipos de Dados
 * 
 * Cadeia - String
 * inteira/real - Number
 * logico - Boolean
 * vetor/matriz - Array
 * 
 * undefined - Armazena um valor quando nenhum for definido de forma temporária
 * null - Armazena um valor vazio propositalmente 
 * 
 * 
 */

/**
 * Declaração de String -> Aspas simples '' , Aspas duplas "" , crase ``
 */

//'Turma 02 do PGATS' - aspas simples ou single quote
//"Turma 02 do PGATS" - aspas duplas ou double quote
//`Turma 02 do PGATS` - Template strings 

const turma = "02"

console.log("Aula 03 da turma " + turma + " no Sábado dia 05 de Abril")

console.log(`Aula 03 da turma ${turma} no Sábado dia 05 de Abril`)

console.log(cor.length)

const nomesDeAlunos = "Thiago Santos Neves"
const nomesDeAlunosSplit = nomesDeAlunos.split(" ")

console.log(nomesDeAlunosSplit)
console.log(nomesDeAlunos.toLocaleLowerCase())
console.log(nomesDeAlunos.toLocaleUpperCase())

console.log(nomesDeAlunos.includes("Neves"))

console.log(nomesDeAlunos.replaceAll('e', 'i'))

const espacamento = "         inteiro            "

console.log(espacamento.trim())

console.log(cor.slice(0,4))