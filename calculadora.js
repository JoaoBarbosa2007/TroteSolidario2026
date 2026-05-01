function limitarInput(input){
    if (input.value.length > 3){ // limite de 3 dígitos
        input.value = input.value.slice(0, 3)
    }
}

function limitarInput150(input){
    let max = 150

    // Limita quantidade de dígitos
    if (input.value.length > 3){
        input.value = input.value.slice(0, 3)
    }

    // Limita valor máximo
    if (Number(input.value) > max){
        input.value = max
    }
}

function limitarInput200(input){
    let max = 200

    // Limita quantidade de dígitos
    if (input.value.length > 3){
        input.value = input.value.slice(0, 3)
    }

    // Limita valor máximo
    if (Number(input.value) > max){
        input.value = max
    }
}

function limitarInput500(input){
    let max = 500

    if (input.value.length > 3){ // limite de 3 dígitos
        input.value = input.value.slice(0, 3)
    }

    // Limita valor máximo
    if (Number(input.value) > max){
        input.value = max
    }
}

function formatarTempo(input){
    let valor = input.value.replace(/\D/g, "") // remove tudo que não for número

    if (valor.length > 4){
        valor = valor.slice(0, 4) // limita a 4 dígitos
    }

    if (valor.length >= 3){
        input.value = valor.slice(0,2) + ":" + valor.slice(2)
    } else {
        input.value = valor
    }
}

function limitarInputFn(input){
    if (input.value.length > 3){ // limite de 5 dígitos
        input.value = input.value.slice(0, 5)
    }
}

let inputs = document.querySelectorAll('input[type="number"]')

inputs.forEach(function(input){
    input.addEventListener("wheel", function(e){
        e.preventDefault()
    })
})

function calcular(){
    let qtdeArroz = Number(document.getElementById("qtdeArroz").value) || 0;
    let qtdeFeijao = Number(document.getElementById("qtdeFeijao").value) || 0;
    let qtdeOleo = Number(document.getElementById("qtdeOleo").value) || 0;
    let qtdeMacarrao = Number(document.getElementById("qtdeMacarrao").value) || 0;
    let pontos = (qtdeArroz * 10) + (qtdeFeijao * 8) + (qtdeOleo * 4) + (qtdeMacarrao * 2) || 0;


    let cor = document.getElementById("cor").value
    let metasEquipes 
    let metasDivididas 

    let qtdeKits = Number(document.getElementById("qtdeKits").value) || 0;
    let qtdeSuplementos = Number(document.getElementById("qtdeSuplementos").value) || 0;
    let qtdeLeite = Number(document.getElementById("qtdeLeite").value) || 0;
    let qtdeSangue = Number(document.getElementById("qtdeSangue").value) || 0;


    let criatividadeAps = Number(document.getElementById("criatividadeAps").value) || 0;
    let performanceAps = Number(document.getElementById("performanceAps").value) || 0;
    let contextAps = Number(document.getElementById("contextualizacaoAps").value) || 0;
    let minutagemAps = document.getElementById("minutagemAps").value;

    let partes = minutagemAps.split(":") // split separa a string em 2 valores a partir do : [(00) : (00)]
    let minutos = Number(partes[0]) || 0;   //recebe os minutos [00]
    let segundos = Number(partes[1]) || 0;  //recebe os segundos [00]
    let tempoTotal = (minutos * 60) + segundos // || 0 serve para garantir que, caso o usuário deixe o campo vazio, o valor seja considerado como 0


    let originalidadeMsc = Number(document.getElementById("originalidadeMsc").value) || 0;
    let caracterizacaoMsc = Number(document.getElementById("caracterizacaoMsc").value) || 0;
    let atuacaoMsc = Number(document.getElementById("atuacaoMsc").value) || 0;


    let attRecreativa = Number(document.getElementById("attRecreativa").value) || 0;


    if (cor == "amarela"){
        metasEquipes = 54
    } else if (cor == "cinza"){
        metasEquipes = 51
    } else if (cor == "laranja"){
        metasEquipes = 21
    } else if (cor == "marrom"){
        metasEquipes = 88
    } else if (cor == "preta"){
        metasEquipes = 60
    } else if (cor == "rosa"){
        metasEquipes = 44
    } else if (cor == "roxa"){
        metasEquipes = 42
    } else if (cor == "verde"){
        metasEquipes = 61
    } else if (cor == "vermelha"){
        metasEquipes = 32
    }
    
    
    if (metasEquipes % 2 == 0){
        metasDivididas = metasEquipes / 2
    } else{
        metasDivididas = (metasEquipes / 2 ) + 0.5
    }


    if (qtdeKits >= metasEquipes){
        pontos = pontos + 5000
        if (qtdeKits > metasEquipes){
            pontos = pontos + (5000 / metasEquipes) * (qtdeKits - metasEquipes)
        }
    } else{
        pontos = pontos + (5000 / metasEquipes) * qtdeKits
    }

    if (qtdeSuplementos >= metasDivididas){
        pontos = pontos + 5000
        if (qtdeSuplementos > metasDivididas){
            pontos = pontos + (5000 / metasDivididas) * (qtdeSuplementos - metasDivididas)
        }
    } else{
        pontos = pontos + (5000 / metasDivididas) * qtdeSuplementos
    }
    
    if (qtdeLeite >= metasEquipes){
        pontos = pontos + 5000
        if (qtdeLeite > metasEquipes){
            pontos = pontos + (5000 / metasEquipes) * (qtdeLeite - metasEquipes)
        }
    } else{
        pontos = pontos + (5000 / metasEquipes) * qtdeLeite
    }

    if (qtdeSangue >= metasDivididas){
        pontos = pontos + 5000
        if (qtdeSangue > metasDivididas){
            pontos = pontos + (5000 / metasDivididas) * (qtdeSangue - metasDivididas)
        }
    } else{
        pontos = pontos + (5000 / metasDivididas) * qtdeSangue
    }


    if (tempoTotal <= 180){
        pontos = pontos + criatividadeAps + performanceAps + contextAps
    } 
    else{
        pontos = pontos + (criatividadeAps + performanceAps + contextAps) - 150
    } 

    pontos = pontos + (originalidadeMsc + caracterizacaoMsc + atuacaoMsc)

    pontos = pontos + attRecreativa

    document.getElementById("resultado").innerText = "Pontuação Total: " + pontos.toFixed(2) + " pontos"
}        