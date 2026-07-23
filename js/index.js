// =========================================
// IMPORTAÇÕES
// =========================================

import { classes } from "./data/classes.js";
import { racas } from "./data/racas.js";

import {
    pontosAtributos,
    renderizarAtributos,
    atualizarAtributosVisuais,
    configurarControlesRecursos,
    recursosAtuais,
    experiencia,
    atualizarExperiencia 
} from "./modules/atributos.js";

import { renderizarPericias, pontosPericias } from "./modules/pericias.js";
import { renderizarAnotacoes, coletarAnotacoes, carregarAnotacoesExternas } from "./modules/anotacoes.js";
import { renderizarCalculadora } from "./modules/calculadora.js";
import { configurarImagem, obterImagemDataURL, carregarImagemExterna } from "./modules/imagem.js";
import { salvarDados, carregarDados } from "./modules/persistencia.js";
import { aplicarClasse, aplicarRaca } from "./modules/buffs.js";

// =========================================
// ELEMENTOS DOM
// =========================================

const abas = document.querySelectorAll(".aba");
const conteudos = document.querySelectorAll(".conteudo-aba");
const selectClasse = document.querySelector("#classe-personagem");
const selectRaca = document.querySelector("#raca-personagem");
const nomeInput = document.querySelector("#nome-personagem");
const botoesAjuda = document.querySelectorAll(".botao-ajuda");
const modal = document.querySelector("#modal-informacoes");
const botaoFecharModal = document.querySelector("#fechar-modal");

// =========================================
// ESTADO DO PERSONAGEM
// =========================================

const personagem = {
    nome: "",
    classe: null,
    raca: null
};

// =========================================
// FUNÇÃO PARA SALVAR ESTADO COMPLETO
// =========================================

function salvarEstadoAtual() {
    const anotacoes = coletarAnotacoes();
    const estado = {
        imagem: obterImagemDataURL(),
        nome: nomeInput ? nomeInput.value : '',
        classe: selectClasse ? selectClasse.value : '',
        raca: selectRaca ? selectRaca.value : '',
        recursos: {
            hp: recursosAtuais.hp || 0,
            mana: recursosAtuais.mana || 0,
            stamina: recursosAtuais.stamina || 0
        },
        atributos: { ...pontosAtributos },
        pericias: { ...pontosPericias },
        experiencia: {
            nivel: experiencia.nivel || 1,
            xpAtual: experiencia.xpAtual || 0
        },
        anotacoes: anotacoes
    };
    salvarDados(estado);
}

// =========================================
// FUNÇÃO PARA CARREGAR ESTADO
// =========================================

function carregarEstado(dados) {
    if (!dados) return;

    // Nome
    if (dados.nome !== undefined) nomeInput.value = dados.nome;

    // Classe
    if (dados.classe) {
        selectClasse.value = dados.classe;
        const classeData = classes[dados.classe];
        if (classeData) {
            personagem.classe = classeData;
            aplicarClasse(classeData);
        }
    }

    // Raça
    if (dados.raca) {
        selectRaca.value = dados.raca;
        const racaData = racas[dados.raca];
        if (racaData) {
            personagem.raca = racaData;
            aplicarRaca(racaData);
        }
    }

    // Recursos
    if (dados.recursos) {
        if (dados.recursos.hp !== undefined) recursosAtuais.hp = dados.recursos.hp;
        if (dados.recursos.mana !== undefined) recursosAtuais.mana = dados.recursos.mana;
        if (dados.recursos.stamina !== undefined) recursosAtuais.stamina = dados.recursos.stamina;
    }

    // Atributos
    if (dados.atributos) {
        Object.keys(dados.atributos).forEach(key => {
            if (pontosAtributos[key] !== undefined) {
                pontosAtributos[key] = dados.atributos[key];
            }
        });
    }

    // Perícias
    if (dados.pericias) {
        Object.keys(dados.pericias).forEach(key => {
            if (pontosPericias[key] !== undefined) {
                pontosPericias[key] = dados.pericias[key];
            }
        });
    }

    // Experiência
    if (dados.experiencia) {
        experiencia.nivel = dados.experiencia.nivel || 1;
        experiencia.xpAtual = dados.experiencia.xpAtual || 0;
        const tabela = {
            1:100,2:300,3:700,4:1200,5:1800,6:2500,7:3300,8:4200,9:5200,10:6300,
            11:7500,12:8800,13:10200,14:11700,15:13300,16:15000,17:16800,18:18700,19:20700,20:22800
        };
        experiencia.xpNecessario = tabela[experiencia.nivel] || 100;
        // 🔥 FORÇA ATUALIZAÇÃO DA BARRA DE XP E NÍVEL
        atualizarExperiencia();
    }

    // Anotações
    if (dados.anotacoes) {
        carregarAnotacoesExternas(dados.anotacoes);
    }

    // Imagem
    if (dados.imagem) {
        setTimeout(() => carregarImagemExterna(dados.imagem), 50);
    }
}

// =========================================
// INICIALIZAÇÃO
// =========================================

// 1. Carregar dados salvos
const dadosSalvos = carregarDados();
if (dadosSalvos) {
    carregarEstado(dadosSalvos);
}

// 2. Renderizar tudo (ordem importa: atributos primeiro, depois perícias)
renderizarAtributos();
renderizarPericias();
renderizarAnotacoes();
renderizarCalculadora();

// 3. Atualizar atributos visuais (barras, etc)
atualizarAtributosVisuais();

// 4. Configurar controles (botões +/-, campos editáveis)
configurarControlesRecursos();

// 5. Configurar imagem
configurarImagem();

// 6. SALVAR AUTOMATICAMENTE APÓS INICIALIZAÇÃO (para sincronizar)
setTimeout(salvarEstadoAtual, 100);

// =========================================
// SISTEMA DE ABAS
// =========================================

abas.forEach(aba => {
    aba.addEventListener("click", () => {
        const abaSelecionada = aba.dataset.aba;
        abas.forEach(item => item.classList.remove("ativa"));
        conteudos.forEach(conteudo => conteudo.classList.remove("ativo"));
        aba.classList.add("ativa");
        const conteudoSelecionado = document.querySelector(`#aba-${abaSelecionada}`);
        if (conteudoSelecionado) conteudoSelecionado.classList.add("ativo");
    });
});

// =========================================
// EVENTOS COM AUTO-SALVAMENTO
// =========================================

// Nome
nomeInput.addEventListener('input', salvarEstadoAtual);

// Classe
selectClasse.addEventListener("change", () => {
    const idClasse = selectClasse.value;
    if (!idClasse) {
        personagem.classe = null;
        aplicarClasse(null);
    } else {
        personagem.classe = classes[idClasse];
        aplicarClasse(personagem.classe);
    }
    salvarEstadoAtual();
});

// Raça
selectRaca.addEventListener("change", () => {
    const idRaca = selectRaca.value;
    if (!idRaca) {
        personagem.raca = null;
        aplicarRaca(null);
    } else {
        personagem.raca = racas[idRaca];
        aplicarRaca(personagem.raca);
    }
    salvarEstadoAtual();
});

// =========================================
// CAPTURAR ALTERAÇÕES VIA EVENT DELEGATION
// =========================================

// Botões de atributo, perícia e recurso
document.addEventListener('click', (e) => {
    const target = e.target.closest('.botao-atributo, .botao-pericia, .botao-recurso');
    if (target) {
        setTimeout(salvarEstadoAtual, 50);
    }
});

// Campos editáveis (contenteditable)
document.addEventListener('blur', (e) => {
    if (e.target.closest('[contenteditable="true"]')) {
        setTimeout(salvarEstadoAtual, 50);
    }
}, true);

// Anotações
document.addEventListener('input', (e) => {
    if (e.target.closest('.anotacao-textarea')) {
        setTimeout(salvarEstadoAtual, 50);
    }
});

// Salvar ao fechar a página
window.addEventListener('beforeunload', salvarEstadoAtual);

// =========================================
// MODAL DE AJUDA (CLASSE/RAÇA)
// =========================================

botoesAjuda.forEach(botao => {
    botao.addEventListener("click", () => {
        const tipo = botao.dataset.tipo;
        if (tipo === "classe") abrirInformacoesClasse();
        if (tipo === "raca") abrirInformacoesRaca();
    });
});

function abrirInformacoesClasse() {
    if (!personagem.classe) {
        alert("Selecione uma classe primeiro.");
        return;
    }
    abrirModal(personagem.classe, "CLASSE");
}

function abrirInformacoesRaca() {
    if (!personagem.raca) {
        alert("Selecione uma raça primeiro.");
        return;
    }
    abrirModal(personagem.raca, "RAÇA");
}

function abrirModal(dados, tipo) {
    const modalTipo = document.querySelector("#modal-tipo");
    const modalTitulo = document.querySelector("#modal-titulo");
    const modalDescricao = document.querySelector("#modal-descricao");
    const modalBuffs = document.querySelector("#modal-buffs");
    const modalDebuffs = document.querySelector("#modal-debuffs");

    modalTipo.textContent = tipo;
    modalTitulo.textContent = dados.nome;
    modalDescricao.textContent = dados.descricao;

    modalBuffs.innerHTML = "";
    modalDebuffs.innerHTML = "";

    dados.buffs.forEach(buff => {
        const el = document.createElement("div");
        el.classList.add("modificador");
        el.innerHTML = `<strong>${buff.nome}</strong><p>${buff.descricao}</p>`;
        modalBuffs.appendChild(el);
    });

    dados.debuffs.forEach(debuff => {
        const el = document.createElement("div");
        el.classList.add("modificador");
        el.innerHTML = `<strong>${debuff.nome}</strong><p>${debuff.descricao}</p>`;
        modalDebuffs.appendChild(el);
    });

    modal.classList.add("ativo");
}

botaoFecharModal.addEventListener("click", () => modal.classList.remove("ativo"));
modal.addEventListener("click", (e) => {
    if (e.target === modal) modal.classList.remove("ativo");
});

console.log('🚀 Ficha carregada com persistência!');