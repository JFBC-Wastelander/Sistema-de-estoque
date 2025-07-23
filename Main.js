const { log } = require("console");
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const dados = []

menuPrincipal();
function menuPrincipal(){
    console.log (`
==== Menu Principal ====
    
    1 - Adicionar
    2 - Listar
    3 - Editar 
    4 - Remover
    5 - Sair
    `)

    rl.on("line", (imputMenuPrincipal) =>{
        const  imputMP = parseInt(imputMenuPrincipal.trim())

        switch(imputMP){
            case 1: adicionar(); break;
            case 2: listar(); break;
            case 3: editar(); break;
            case 4: remover(); break;
            case 5: console.log(`Saindo...`);process.exit();
            default:
                console.log(`O numero não é valido como resposta!`);
            break;
        }
    });
}

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
                    console.log("Adicionado com sucesso! 🫃\n")
                    menuPrincipal()
                })
            })
        })
    })
}

function listar() {
    rl.question("Tecle 1- para exibir todos ou 2- para filtrar ", (input) => {
        if (input == "1") {
            dados.forEach((a, i) => {
                console.log(`${i + 1} - ${a.nome}, ${a.quantidade} unidades, R$: ${a.valorArrumado}, ${a.categoria}`);
              });
              menuPrincipal()

        } else if (input == "2") {

        } else {
            console.log("Não entendi seu burro")
        }
    }) 
}
