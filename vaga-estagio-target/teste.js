//2
function isFibo(valor){
    fibo = [0, 1] //vetor inicial
    firstToLast = 0
    last = 0
    next = 0
    while(next < valor){
        firstToLast = fibo.length-2;
        last = fibo.length-1
            if(fibo[firstToLast] + fibo[last] > valor)
                break
        fibo = [...fibo, fibo[firstToLast] + fibo[last]];
        console.log(fibo);
    }

    if(next == valor)
        return `${valor} pertence a sequência de fibonacci (ultimo calculado = ${fibo[fibo.length-1]})`
    else{
        return `${valor} não pertence a sequência de fibonacci (ultimo calculado = ${fibo[fibo.length-1]})`
    }

}

//3
function faturamentoMaiorMenor(){
    const jsonData = require('./dados.json');
    menor = Infinity;
    maior = -Infinity;
    media = 0;
    contadorMedia = 0;
    contadorMesMaiorMedia = 0;
    for (let dado in jsonData){
        console.log(jsonData[dado]);
        if(jsonData[dado].valor == 0){
            continue
        }else if(jsonData[dado].valor < menor){
            menor = jsonData[dado].valor;
            media += jsonData[dado].valor
            contadorMedia++;
        }else if(jsonData[dado].valor > maior){
            maior = jsonData[dado].valor;
            media += jsonData[dado].valor
            contadorMedia++;
        }else{
            media += jsonData[dado].valor;
            contadorMedia++;
        }
    }
    
    for (let dado in jsonData){
        if(jsonData[dado].valor == 0){
            continue
        }else if(jsonData[dado].valor > (media/contadorMedia)){
            contadorMesMaiorMedia++;
        }
    }
    
    console.log(`O menor faturamento do mês foi: ${menor}`);
    console.log(`O maior faturamento do mês foi: ${maior}`);
    console.log(`A média de faturamento foi: ${media/contadorMedia}`);
    console.log(`O faturamento do dia foi maior que a média do mês em ${contadorMesMaiorMedia} dia(s)`);
}

//4
function listaFaturamentoPorEstado(colecao){
    total = 0
    for(cidade in colecao) {
        total += colecao[cidade];
    }

    for(cidade in colecao) {
        console.log(`${cidade} - ${((colecao[cidade]/total)*100).toFixed(2)}%`);
    }
}

//5
function inverteString(palavra){
    stringInvertida = ""
    for (i = palavra.length-1; i >= 0; i--){
        stringInvertida += palavra[i]
    }
    console.log(stringInvertida);
}

// inverteString("me contratem!");

//faturamentoMaiorMenor();

// var colecao = {
//     "SP": 67836.43,
//     "RJ": 36678.66,
//     "MG": 29229.88,
//     "ES": 27165.48,
//     "OUTROS": 19849.53
// };

// listaFaturamentoPorEstado(colecao)

//console.log(isFibo(670));