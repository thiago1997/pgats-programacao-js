function filtrarInteiros(lista) {
    const novaListaDeInteiros = []; 

    for (let i = 0; i < lista.length; i++) { 
        const elementoAtual = lista[i];

        if (typeof elementoAtual === 'number') { 
            novaListaDeInteiros.push(elementoAtual);
        }
    }

    return novaListaDeInteiros;
}
const minhaLista = [1, "Thiago", 2, "Neves", 3];
const apenasNumeros = filtrarInteiros(minhaLista);
console.log(apenasNumeros);

function retornandoNumeroDeVogais (texto){
    let contador = 0
    let vogais = "aeiou"

    for (let i = 0; i < texto.length; i++){
        const caractereAtual = texto[i];

        if (vogais.includes(caractereAtual)){
            contador++;
        }
    }
    return contador;
}
console.log(retornandoNumeroDeVogais("Thiago Neves"));
