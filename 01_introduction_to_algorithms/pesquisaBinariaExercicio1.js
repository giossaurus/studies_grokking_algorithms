function pesquisaBinaria(lista, item) {
    let baixo = 0;
    let alto = lista.length - 1;

    while (baixo <= alto) {
        const meio = Math.floor((baixo + alto) / 2);
        const chute = lista[meio];

        if (chute === item) {
            return meio;
        } else if (chute > item) {
            alto = meio - 1;
        } else {
            baixo = meio + 1;
        }
    }

    return null;
}

const listaDeNomes = Array.from({ length: 128 }, (v, i) => i + 1);

console.log(pesquisaBinaria(listaDeNomes, 3)); // 2
console.log(pesquisaBinaria(listaDeNomes, -1)); // null

// Resposta: O número máximo de etapas seria de 7, pois 2^7 = 128. O número de etapas é igual ao logaritmo do número de itens na lista.