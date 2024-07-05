function pesquisaBinaria(lista, item) {
    let baixo = 0;
    let alto = lista.length - 1;
    let iteracoes = 0;

    while (baixo <= alto) {
        iteracoes++;
        const meio = Math.floor((baixo + alto) / 2);
        const chute = lista.get(meio);

        if (chute === item) {
            return { indice: meio, iteracoes: iteracoes };
        } else if (chute > item) {
            alto = meio - 1;
        } else {
            baixo = meio + 1;
        }
    }

    return { indice: null, iteracoes: iteracoes };
}

// Simulação da lista de 1 a 1.000.000.000 de Bob
const listaDeComandos = {
    length: 1000000000,
    get: function(index) {
        return index + 1; // Como estamos simulando, o valor é o índice + 1
    }
};

const numero = 1000000000;
const resultado = pesquisaBinaria(listaDeComandos, numero);
console.log(`Índice: ${resultado.indice}, Iterações: ${resultado.iteracoes}`);
console.log(`Máximo de iterações necessário para lista de tamanho ${listaDeComandos.length}: ${resultado.iteracoes}`);

// Com o logaritmo de 10 elevado a nona potencia sendo 30, no contexto do exercício podemos considerar que 30 ms é o tempo necessário para a execução do algoritmo de Bob. E comparado com  uma pesquisa simples de 10 a nona potencia de ms, o tempo é muito menor. Isso é o que torna o algoritmo de Bob tão eficiente.