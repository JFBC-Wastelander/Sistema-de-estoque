const { log } = require("console");
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const dados = []

menuPrincipal();
function menuPrincipal(){
    console.log (`==== Menu Principal ====
    
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