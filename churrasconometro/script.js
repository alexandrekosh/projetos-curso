let InputAdultos = document.getElementById("adultos"),
    inputCriancas = document.getElementById("criancas"),
    inputDuracao = document.getElementById("duracao"),
    resultado = document.getElementById("resultado")


    function calcular(){
        console.log("calculando");
     
        let adultos = InputAdultos.value,
            criancas = inputCriancas.value,
            duracao = inputDuracao.value;

        let carne = carnePP(duracao),
            cerveja = cervejaPP(duracao),
            bebidas = bebidasPP(duracao);

            
        let qtdTotaCarne = carne * adultos + (carne/2 * criancas),
            qtdTotaCerveja = cerveja * adultos,
            qtdTotalBebidas = bebidas * adultos + (bebidas/2 * criancas);

        gerarResultado(qtdTotaCarne, qtdTotaCerveja, qtdTotalBebidas)        
        }

    function carnePP(duracao){
        if(duracao >= 6){
            return 650
        }else{
            return 400
        }
    }

    function cervejaPP(duracao){
        if(duracao >= 6){
            return 2000
        }else{
            return 1200
        }
    }

    function bebidasPP(duracao){
        if(duracao >= 6){
            return 1500
        }else{
            return 1000
        }
    }

    function gerarResultado(carne, cerveja, bebidas){
        resultado.innerHTML = `<p>${carne/1000} kg de carne </p>`
        resultado.innerHTML += `<p>${Math.ceil(cerveja/250)} Latas de Cerveja</p>`
        resultado.innerHTML += `<p>${Math.ceil(bebidas/2000)} Garrafas de 2 litros</p>`
    }