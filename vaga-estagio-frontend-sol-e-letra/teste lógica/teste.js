    function limparFrase(texto){
        var novoTexto = texto;
        var palavras = texto.split(" ");
        var textoLimpo = " "
        for (i = 0; i < palavras.length; i++){
            if (palavras[i].length == 2){
                primeiraMetade = palavras[i].charAt(0);
                segundaMetade = palavras[i].charAt(1);
                if(primeiraMetade === segundaMetade){
                    textoLimpo += " " + palavras[i].substring(0, 1);
                }
            }else if(palavras[i].length > 2 && palavras[i].length % 2 == 0){
                primeiraMetade = palavras[i].substring(0, palavras[i].length/2);
                segundaMetade = palavras[i].substring(palavras[i].length/2, palavras.length-1);
                if(primeiraMetade === segundaMetade){
                    textoLimpo += " " + palavras[i].substring(0, (palavras[i].length/2));
                }
            }else{
                primeiraMetade = palavras[i].substring(1, (palavras[i].length/2+1));
                segundaMetade = palavras[i].substring((palavras[i].length/2)+1, (palavras.length));
                if(primeiraMetade === segundaMetade){
                    textoLimpo += " " + palavras[i].substring(0, (palavras[i].length/2+1));
                }
            }
            }
            return textoLimpo;
        }

    var readline = require('readline');
    var rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
        terminal: false
    });
    rl.on('line', entrada => {
        console.log(limparFrase(entrada))
    })