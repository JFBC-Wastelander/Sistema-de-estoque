const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let dados = []

function menuPrincipal(){
    console.log (`
==== Menu Principal ====
    
    1 - Adicionar
    2 - Listar
    3 - Editar 
    4 - Remover
    5 - Filtrar
    6 - Sair
    `)
}

rl.on("line", (inputMenuPrincipal) => {
    const inputMP = parseInt(inputMenuPrincipal.trim());

    switch(inputMP){
        case 1: adicionar(); break;
        case 2: listar(); break;
        case 3: editar(); break;
        case 4: remover(); break;
        case 5: filtrar(); break;
        case 6: 
            console.log(`Saindo...`);
            process.exit();
        default:
            console.log(`O número não é válido!`);
            menuPrincipal();
        break;
    }
});

menuPrincipal();

function adicionar() {
    rl.question("Nome: ", (nome) => {
        rl.question("Quantidade: ", (quantidade) => {
            rl.question("Valor: ", (valor) => {
                rl.question("Categoria: ", (categoria) => {
                    let valorArrumado = parseFloat(valor)
                    const estoque = {
                        nome,
                        quantidade,
                        valorArrumado,
                        categoria
                    }
                    dados.push(estoque)
                    console.log("Adicionado com sucesso!")
                    menuPrincipal()
                })
            })
        })
    })
}

function listar() {
    rl.question("Tecle 1- para exibir todos ou 2- para filtrar: ", (input) => {
        if (input === "1") {
            listarDeFato();
            menuPrincipal()
        } else if (input === "2") {
            console.log("Filtro ainda não implementado.");
            menuPrincipal()
        } else {
            console.log("Não entendi.");
            menuPrincipal()
        }
    }) 
}

function listarDeFato(){
dados.forEach((a, i) => {
    console.log(`${i + 1} - ${a.nome}, ${a.quantidade} unidades, R$: ${a.valorArrumado}, ${a.categoria}`);       
});
}

function editar() {
    dados.forEach((a, i) => {
        console.log(`${i + 1} - ${a.nome}, ${a.quantidade} unidades, R$: ${a.valorArrumado}, ${a.categoria}`);
    });
    rl.question("Qual produto você deseja atualizar: ", (resposta) => {
        const resposta1 = resposta - 1
        
        rl.question("Digite o novo nome: ", (nome) => {
        rl.question("Digite a nova quantidade: ", (quantidade) => {
        rl.question("Digite o novo valor: ", (valor) => {
            let valorArrumado = parseFloat(valor)
        rl.question("Digite a nova categoria: ", (categoria) => {
            dados[resposta1] = {
                nome,
                quantidade,
                valorArrumado,
                categoria
            }
            console.log("O produto foi atualizado com sucesso!")
            menuPrincipal()
        })
        })
        })
        })
    })
}

function remover() {
    listarDeFato()
    removerDeFato()
}

function removerDeFato() {
    rl.question("Qual produto deseja remover? :", (remover) => {
        let remover1 = remover - 1

        if (remover1 >= dados.length || remover1 < 0 || isNaN(remover1)) {
            console.log(`${remover} não é uma resposta válida.`)
            removerDeFato()
            return;
        }

        dados.splice(remover1, 1);
        console.log("Produto removido com sucesso.")
        menuPrincipal()
    })
}

function filtrar() {

    console.log(`=== Filtrar ===`)
    for (i = 0; i < dados.length; i++) {

        if(dados[i].quantidade < 6 ) {
            
            console.log(`${i + 1} - ${dados[i].nome}, ${dados[i].quantidade} unidades, R$: ${dados[i].valorArrumado}, ${dados[i].categoria}`);
        } 
        menuPrincipal()
    }

}
