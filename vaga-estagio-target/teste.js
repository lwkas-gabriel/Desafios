function isFibo(valor){
    fibo = [0, 1]
    for (i = 0; i <= valor; i++){
        first = i;
        last = fibo.length-1
        next = fibo[0] + fibo[1];

        fiboNew = [...fibo, next];
        first =+ 1;
    }
}

function listaFaturamentoPorEstado(colecao){
    total = 0
    for(cidade in colecao) {
        total += colecao[cidade];
    }

    for(cidade in colecao) {
        console.log(`${cidade} - ${((colecao[cidade]/total)*100).toFixed(2)}%`);
    }
}


function inverteString(palavra){
    stringInvertida = ""
    for (i = palavra.length-1; i >= 0; i--){
        stringInvertida += palavra[i]
    }
    console.log(stringInvertida);
}

// inverteString("me contratem!");

// var colecao = {
//     "SP": 67836.43,
//     "RJ": 36678.66,
//     "MG": 29229.88,
//     "ES": 27165.48,
//     "OUTROS": 19849.53
// };

// listaFaturamentoPorEstado(colecao)