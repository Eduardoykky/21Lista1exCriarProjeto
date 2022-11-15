
let nomeProj = []
let orçamentoTotal = []

function CriarProjeto() {
    nomeProj.push(prompt("Insira um nome para o projeto"))
    orçamentoTotal.push(parseInt(prompt("Insira o orçamento total para o projeto.")))
    console.log("Projeto criado com sucesso!")
}

function AtualizarProjeto(nome, valor, tipoD) {
    let index = nomeProj.indexOf(nome)

    if (tipoD == "r") {
        orçamentoTotal[index] = orçamentoTotal[index] + valor
    }else if (valor <= orçamentoTotal[index]) {
        orçamentoTotal[index] = orçamentoTotal[index] - valor
    }else if (valor >= orçamentoTotal[index]) {
        console.log("ERRO")
    }
    console.log(orçamentoTotal[index])
}

let continuar = "s"

while (continuar == "s") {
    let opcao = prompt("1 Para criar um projeto e 2 Para atualizar ele.")
    if (opcao == "1") {
        CriarProjeto()
    }else{
        let nome = prompt("Insira o nome do projeto que deseja atualizar.")
        let valor = parseInt(prompt("Insira o valor que deseja atualizar."))
        let tipoD = prompt("Insira o tipo de despeja que deseja fazer r ou d")
        AtualizarProjeto(nome, valor, tipoD)
    }
    continuar = prompt("Deseja continuar? s ou n")
}