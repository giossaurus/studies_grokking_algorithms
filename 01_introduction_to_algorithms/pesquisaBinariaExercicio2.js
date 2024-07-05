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

const listaDeNomes = Array.from({ length: 256 }, (v, i) => i + 1);

console.log(pesquisaBinaria(listaDeNomes, 82)); // 2
console.log(pesquisaBinaria(listaDeNomes, -1)); // null

// Resposta: O número máximo de etapas seria de 8, pois 2^8 = 256. O número de etapas é igual ao logaritmo do número de itens na lista.

// O logaritmo base 2 de 256 é 8. Isso significa que, se você precisar dividir repetidamente um conjunto de 256 itens pela metade, levará no máximo 8 etapas para reduzir o conjunto a um único item. Este é o motivo pelo qual a pesquisa binária, que divide o espaço de pesquisa pela metade a cada iteração, levará no máximo 8 etapas para encontrar um item ou determinar que ele não está presente em uma lista de 256 elementos.