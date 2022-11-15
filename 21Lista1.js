
let nomeProj = []
let orçamentoTotal = []

function CriarProjeto() {
    nomeProj.push(prompt("Insira um nome para o projeto"))
    orçamentoTotal.push(parseInt(prompt("Insira o orçamento total para o projeto.")))
}

let tipoDespeja

function AtualizarProjeto(nome, valor, tipoD) {
    let index = nomeProj.indexOf(nome)

    if (tipoDespeja == "r") {
        orçamentoTotal[index] = orçamentoTotal[index] + valor
    }else if (valor <= orçamentoTotal[index]) {
        orçamentoTotal[index] = orçamentoTotal[index] - valor
    }else if (valor >= orçamentoTotal[index]) {
        console.log("ERRO")
    }
    console.log(orçamentoTotal[index])
}
