async function calcula(){
    let nome = document.getElementById("nome").value
    const cep = document.getElementById("cep").value
    const renda = document.getElementById("renda").value
    const dependente = document.getElementById("dependentes").value
    const rendaCapita = renda/dependente;

    if(cep.length == 8 && /^[0-9]+$/.test(cep)){
        const url = `http://viacep.com.br/ws/${cep}/json/`;

        const dados = await fetch(url);
        const enderecoCompleto = await dados.json();

        if(enderecoCompleto.hasOwnProperty("erro")){
            window.alert("cep inválido!");
        }else{
            if(!nome){
                nome = "sr ou sr(a)"
            }
                const alert =
            `Olá, ${nome}!
            CEP = ${enderecoCompleto.cep}
            UF = ${enderecoCompleto.uf}
            Localidade = ${enderecoCompleto.localidade}
            Bairro = ${enderecoCompleto.bairro}
            Logradouro = ${enderecoCompleto.logradouro}
            Sua renda per capita = R$ ${rendaCapita}`;

            window.alert(alert);
        }
    }else{
        window.alert("cep inválido!");
    }
}