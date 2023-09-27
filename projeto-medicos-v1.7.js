const readline = require("readline-sync");

let rodar = true;

let gerador_id = 2;

class Medico {
    constructor(id, crm, nome, especialidade) {
        this.id = id;
        this.crm = crm;
        this.nome = nome;
        this.especialidade = especialidade;
    }
}

const medico1 = new Medico(1, "CRM/PE 123456", "Jose Maria", "Cirurgia geral");
const medico2 = new Medico(2, "CRM/PE 789012", "Maria Ferreira", "Cardiologia");

const medicos = [medico1, medico2];

while (rodar) {
    console.clear();
    console.log("========== CADASTRO DE MÉDICOS ==========");
    console.log("================== MENU =================");
    console.log(" ====== 0 - Sair do sistema =============");
    console.log(" ====== 1 - Listar todos os médicos =====");
    console.log(" ====== 2 - Cadastrar um novo médico ====");
    console.log(" ====== 3 - Buscar um médico ============");
    console.log(" ====== 4 - Alterar um médico ===========");
    console.log(" ====== 5 - Excluir um médico ===========");
    console.log("=========================================");

    let opcao = readline.questionInt("Escolha a opcao: ");

    switch (opcao) {
        case 0:
            console.log("Saindo da aplicação......");
            rodar = false;
            break;

        case 1:
            console.log("Listando todos médicos...... \n");
            console.log("==============================");

            listarMedicos();
            readline.keyInPause();
            break;

        case 2:
            medicos.push(cadastrarMedico());
            break;

        case 3:
            pesquisarMedicos();
            break;

        case 4:
            alterarMedico();
            break;
        case 5:
            excluirMedico();
            break;

        default:
            console.log("Opção invalida.....");
            console.log("Escolha uma opção válida......");
            break;
    }

}

function excluirMedico() {
    pesquisaIDExcluir = readline.questionInt("Digite o ID do médico que deseja excluir:");
    for (const m of medicos) {
        if (m.id === pesquisaIDExcluir) {
            console.log(`\n O Id é referente ao médico ${m.nome}`);
            console.log("-------------------------------");
            console.log(`Excluindo o médico ${m.nome} do sistema..."`);
            console.log("-------------------------------");
            medicos.splice(medicos.indexOf(m), 1);

        }
    }
    console.log("Médico excluído com sucesso!");
    readline.keyInPause();
}

function alterarMedico() {
    let pesquisaIDAlterar = readline.questionInt("Digite o ID do médico que deseja alterar: ");
    for (const m of medicos) {
        if (m.id === pesquisaIDAlterar) {
            console.log(`Médico selecionado ${m.nome}`);
            m.nome = readline.question("Digite o nome do médico:");
            m.crm = readline.question("Digite o CRM do médico:");
            m.especialidade = readline.question("Digite a especialidade do médico:");

        }
    }
    console.log("Médico alterado com sucesso!");
    readline.keyInPause();
}

function cadastrarMedico() {
    let crmMedico = readline.question("Digite o CRM do médico: ");
    let nomeMedico = readline.question("Digite o nome do médico: ");
    let especialidadeMedico = readline.question("Digite a especialidade do médico: ");
    const medico = new Medico(++gerador_id, crmMedico, nomeMedico, especialidadeMedico);
    
    console.log("----------------------------------");
    console.log("Médico cadastrado com sucesso!");
    console.log("----------------------------------");
    readline.keyInPause();
    return medico;
}

function pesquisarMedicos() {
    let pesquisaID = readline.questionInt("Digite o ID do médico que deseja buscar: ");
    for (const m of medicos) {
        if (m.id == pesquisaID) {
            console.log("Resultado da busca");
            console.log("-------------------------------");
            console.log(`id: ${m.id}`);
            console.log(`Nome do médico: ${m.nome}`);
            console.log(`CRM: ${m.crm}`);
            console.log(`Especialidade: ${m.especialidade}`);
            console.log("------------------------------------");
            readline.keyInPause();
        }
    }
}

function listarMedicos() {
    for (const m of medicos) {

        console.log(`id: ${m.id}`);
        console.log(`Nome do médico: ${m.nome}`);
        console.log(`CRM: ${m.crm}`);
        console.log(`Especialidade: ${m.especialidade}`);
        console.log("-------------------------------------");
    }
}
