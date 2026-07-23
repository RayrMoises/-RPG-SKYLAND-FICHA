import { atributos } from "../data/atributos.js";

import { getModificadoresTotais } from "../state.js";

// =========================================================
// ESTADO DOS ATRIBUTOS MANUAIS
// =========================================================
export const pontosAtributos = {};

// =========================================================
// ESTADO ATUAL DOS RECURSOS (HP, Mana, Stamina)
// =========================================================
export const recursosAtuais = {
    hp: 0,
    mana: 0,
    stamina: 0,
    xp: 0   // esse campo não é usado para XP, mantido por compatibilidade
};

// =========================================================
// NÍVEL E EXPERIÊNCIA (sistema por nível com zeragem)
// =========================================================
export const experiencia = {
    nivel: 1,
    xpAtual: 0,          // progresso dentro do nível atual
    xpNecessario: 100    // valor da tabela para o nível atual
};

// =========================================================
// TABELA DE EXPERIÊNCIA
// =========================================================
const tabelaExperiencia = {
    1: 100,
    2: 300,
    3: 700,
    4: 1200,
    5: 1800,
    6: 2500,
    7: 3300,
    8: 4200,
    9: 5200,
    10: 6300,
    11: 7500,
    12: 8800,
    13: 10200,
    14: 11700,
    15: 13300,
    16: 15000,
    17: 16800,
    18: 18700,
    19: 20700,
    20: 22800
};

const XP_MAXIMO_GLOBAL = tabelaExperiencia[20]; // 22800

// =========================================================
// INICIALIZAR ATRIBUTOS MANUAIS
// =========================================================
export function inicializarAtributos() {
    Object.keys(atributos).forEach((idAtributo) => {
        pontosAtributos[idAtributo] = atributos[idAtributo].pontosIniciais;
    });
}

// =========================================================
// ALTERAR PONTOS DOS ATRIBUTOS MANUAIS
// =========================================================
export function alterarPontosAtributo(idAtributo, quantidade) {
    if (!atributos[idAtributo]) {
        console.warn(`Atributo "${idAtributo}" não existe.`);
        return;
    }
    const novoValor = pontosAtributos[idAtributo] + quantidade;
    pontosAtributos[idAtributo] = Math.max(0, novoValor);
    atualizarAtributosVisuais();
}

// =========================================================
// CALCULAR EFEITOS DOS ATRIBUTOS MANUAIS
// =========================================================
export function calcularEfeitosAtributos() {
    const efeitosTotais = {
        hp: 0,
        mana: 0,
        stamina: 0,
        danoFisico: 0,
        defesaFisica: 0,
        defesaMagica: 0,
        evasiva: 0,
        danoMagico: 0,
        danoProjetil: 0,
        iniciativa: 0
    };

    Object.keys(atributos).forEach((idAtributo) => {
        const dadosAtributo = atributos[idAtributo];
        const pontosInvestidos = pontosAtributos[idAtributo] ?? 0;

        dadosAtributo.efeitos.forEach((efeito) => {
            const valorCalculado = pontosInvestidos * efeito.valorPorPonto;
            const atributoVisual = efeito.atributoVisual;
            if (efeitosTotais[atributoVisual] === undefined) {
                efeitosTotais[atributoVisual] = 0;
            }
            efeitosTotais[atributoVisual] += valorCalculado;
        });
    });

    return efeitosTotais;
}

// =========================================================
// ATUALIZAR ATRIBUTOS VISUAIS
// =========================================================
export function atualizarAtributosVisuais() {
    const efeitos = calcularEfeitosAtributos();

    atualizarValorVisual("dano-fisico", efeitos.danoFisico);
    atualizarValorVisual("defesa-fisica", efeitos.defesaFisica);
    atualizarValorVisual("defesa-magica", efeitos.defesaMagica);
    atualizarValorVisual("evasiva", efeitos.evasiva);
    atualizarValorVisual("dano-magico", efeitos.danoMagico);
    atualizarValorVisual("dano-projetil", efeitos.danoProjetil);

    atualizarValorRecurso("hp", efeitos.hp);
    atualizarValorRecurso("mana", efeitos.mana);
    atualizarValorRecurso("stamina", efeitos.stamina);
}

// =========================================================
// ATUALIZAR VALORES DE ATRIBUTOS NORMAIS
// =========================================================
function atualizarValorVisual(nomeAtributo, valor) {
    const elemento = document.querySelector(`#valor-${nomeAtributo}`);
    if (!elemento) return;
    elemento.textContent = valor;
}

// =========================================================
// ATUALIZAR RECURSOS (HP, Mana, Stamina)
// =========================================================
function atualizarValorRecurso(recurso, novoValorMaximo) {
    const valorMaximo = Math.max(0, novoValorMaximo);
    const valorAtualAnterior = recursosAtuais[recurso];
    recursosAtuais[recurso] = Math.min(valorAtualAnterior, valorMaximo);

    const elementoMaximo = document.querySelector(`#valor-${recurso}-maximo`);
    if (elementoMaximo) {
        elementoMaximo.textContent = valorMaximo;
    }
    atualizarInterfaceRecurso(recurso, valorMaximo);
}

// =========================================================
// ALTERAR VALOR ATUAL DE UM RECURSO (HP, Mana, Stamina)
// =========================================================
export function alterarRecurso(recurso, quantidade) {
    const efeitos = calcularEfeitosAtributos();
    const valorMaximo = efeitos[recurso] ?? 0;
    const novoValor = recursosAtuais[recurso] + quantidade;
    recursosAtuais[recurso] = Math.max(0, Math.min(novoValor, valorMaximo));
    atualizarInterfaceRecurso(recurso, valorMaximo);
}

// =========================================================
// DEFINIR VALOR ATUAL MANUALMENTE (HP, Mana, Stamina)
// =========================================================
export function definirRecurso(recurso, valor) {
    const efeitos = calcularEfeitosAtributos();
    const valorMaximo = efeitos[recurso] ?? 0;
    const valorNumerico = Number(valor);
    if (Number.isNaN(valorNumerico)) return;

    recursosAtuais[recurso] = Math.max(0, Math.min(valorNumerico, valorMaximo));
    atualizarInterfaceRecurso(recurso, valorMaximo);
}

// =========================================================
// ATUALIZAR INTERFACE DE UM RECURSO (HP, Mana, Stamina)
// =========================================================
function atualizarInterfaceRecurso(recurso, valorMaximo) {
    const valorAtual = recursosAtuais[recurso];
    const elementoAtual = document.querySelector(`#valor-${recurso}-atual`);
    const elementoMaximo = document.querySelector(`#valor-${recurso}-maximo`);
    const barra = document.querySelector(`#barra-${recurso}`);

    if (elementoAtual) elementoAtual.textContent = valorAtual;
    if (elementoMaximo) elementoMaximo.textContent = valorMaximo;

    if (barra) {
        let porcentagem = 0;
        if (valorMaximo > 0) {
            porcentagem = (valorAtual / valorMaximo) * 100;
        }
        barra.style.width = `${porcentagem}%`;
    }
}

// =========================================================
// =========================================================
// SISTEMA DE EXPERIÊNCIA E NÍVEL
// =========================================================
// =========================================================

// ATUALIZAR EXPERIÊNCIA (chamado após qualquer alteração)
export function atualizarExperiencia() {
    // Verifica se o XP atual permite subir de nível
    while (experiencia.xpAtual >= experiencia.xpNecessario && experiencia.nivel < 20) {
        experiencia.xpAtual -= experiencia.xpNecessario;
        experiencia.nivel++;
        experiencia.xpNecessario = tabelaExperiencia[experiencia.nivel];
    }

    if (experiencia.xpAtual < 0) experiencia.xpAtual = 0;

    const elementoNivel = document.querySelector("#nivel-personagem");
    const elementoXpAtual = document.querySelector("#xp-atual");
    const elementoXpMaximo = document.querySelector("#xp-proximo-nivel");
    const barraXp = document.querySelector("#barra-xp");

    if (elementoNivel) elementoNivel.textContent = `Level ${experiencia.nivel}`;
    if (elementoXpAtual) elementoXpAtual.textContent = experiencia.xpAtual;
    if (elementoXpMaximo) elementoXpMaximo.textContent = experiencia.xpNecessario;

    if (barraXp) {
        const progresso = Math.min(experiencia.xpAtual / experiencia.xpNecessario, 1) * 100;
        barraXp.style.width = `${progresso}%`;
    }
}

// ADICIONAR EXPERIÊNCIA (usado pelos botões + e -)
export function adicionarExperiencia(quantidade) {
    if (quantidade === 0) return;
    // Se já está no nível 20, limita o XP ao máximo do nível 20
    if (experiencia.nivel === 20) {
        experiencia.xpAtual = Math.min(experiencia.xpAtual + quantidade, XP_MAXIMO_GLOBAL);
        // Garante que não fique negativo
        if (experiencia.xpAtual < 0) experiencia.xpAtual = 0;
        atualizarExperiencia();
        return;
    }

    experiencia.xpAtual += quantidade;
    // Garante que não fique negativo
    if (experiencia.xpAtual < 0) experiencia.xpAtual = 0;
    atualizarExperiencia();
}

// DEFINIR EXPERIÊNCIA MANUALMENTE (usado pelo campo editável)
export function definirExperiencia(valor) {
    const valorNumerico = Number(valor);
    if (isNaN(valorNumerico)) return;

    // Se o nível for 20, limita ao máximo
    if (experiencia.nivel === 20) {
        experiencia.xpAtual = Math.min(valorNumerico, XP_MAXIMO_GLOBAL);
    } else {
        // Não permite valores negativos
        experiencia.xpAtual = Math.max(0, valorNumerico);
    }
    // OBS: Não forçamos descida de nível aqui; a descida só ocorre via regredirNivel()
    // Mas se o usuário digitar um valor menor que o necessário para o nível atual, o nível permanece.
    // Para manter a consistência, garantimos que o XP não ultrapasse o necessário para o nível atual?
    // Na verdade, se ele digitar 0 no nível 2, queremos que permaneça nível 2 com XP 0 (sem descer).
    // Então não mexemos no nível aqui, apenas atualizamos a interface.
    // Mas se ele digitar um valor que permita subir, a função atualizarExperiencia vai subir automaticamente.
    atualizarExperiencia();
}

// REGREDIR NÍVEL (usado pelo botão - quando XP atual for 0)
export function regredirNivel() {
    if (experiencia.nivel <= 1) return; // não desce abaixo de 1
    // Só permite regredir se o XP atual for 0
    if (experiencia.xpAtual !== 0) {
        // Opcional: avisar que não pode regredir com XP acumulado
        return;
    }

    experiencia.nivel--;
    experiencia.xpNecessario = tabelaExperiencia[experiencia.nivel];
    experiencia.xpAtual = 0; // zera o XP no novo nível
    atualizarExperiencia();
}

// =========================================================
// CONSULTAR PONTOS DOS ATRIBUTOS MANUAIS
// =========================================================
export function obterPontosAtributo(idAtributo) {
    return pontosAtributos[idAtributo] ?? 0;
}

// =========================================================
// RENDERIZAR ATRIBUTOS MANUAIS
// =========================================================
export function renderizarAtributos() {
    const listaAtributos = document.querySelector("#lista-atributos");
    if (!listaAtributos) {
        console.warn("Elemento #lista-atributos não encontrado.");
        return;
    }

    listaAtributos.innerHTML = "";

    Object.keys(atributos).forEach((idAtributo) => {
        const dadosAtributo = atributos[idAtributo];
        const pontosAtuais = pontosAtributos[idAtributo];

        const elementoAtributo = document.createElement("article");
        elementoAtributo.classList.add("card-atributo");
        elementoAtributo.innerHTML = `
            <div class="atributo-cabecalho">
                <div>
                    <span class="atributo-indicador">✦</span>
                    <h3>${dadosAtributo.nome}</h3>
                </div>
            </div>
            <p class="atributo-descricao">${dadosAtributo.descricao}</p>
            <div class="atributo-controle">
                <button type="button" class="botao-atributo" data-atributo="${idAtributo}" data-acao="diminuir">−</button>
                <div class="valor-atributo">
                    <span class="pontos-atributo" data-valor="${idAtributo}">${pontosAtuais}</span>
                    <small>PONTOS</small>
                </div>
                <button type="button" class="botao-atributo" data-atributo="${idAtributo}" data-acao="aumentar">+</button>
            </div>
        `;

        listaAtributos.appendChild(elementoAtributo);
    });

    configurarBotoesAtributos();
}

// =========================================================
// CONFIGURAR BOTÕES DOS ATRIBUTOS MANUAIS
// =========================================================
function configurarBotoesAtributos() {
    const botoes = document.querySelectorAll(".botao-atributo");
    botoes.forEach((botao) => {
        botao.addEventListener("click", () => {
            const idAtributo = botao.dataset.atributo;
            const quantidade = botao.dataset.acao === "aumentar" ? 1 : -1;
            alterarPontosAtributo(idAtributo, quantidade);
            atualizarInterfaceAtributos();
        });
    });
}

// =========================================================
// ATUALIZAR INTERFACE DOS ATRIBUTOS MANUAIS
// =========================================================
function atualizarInterfaceAtributos() {
    Object.keys(atributos).forEach((idAtributo) => {
        const elementoValor = document.querySelector(`[data-valor="${idAtributo}"]`);
        if (!elementoValor) return;
        elementoValor.textContent = pontosAtributos[idAtributo];
    });
}

// =========================================================
// CONFIGURAR CONTROLES DOS RECURSOS (HP, Mana, Stamina, XP)
// =========================================================
export function configurarControlesRecursos() {
    // --- Botões + e - ---
    const botoes = document.querySelectorAll(".botao-recurso");
    botoes.forEach((botao) => {
        botao.addEventListener('click', () => {
            const recurso = botao.dataset.recurso;
            const acao = botao.dataset.acao; // 'aumentar' ou 'diminuir'

            if (recurso === 'xp') {
                if (acao === 'diminuir') {
                    // Se o XP atual for 0 e nível > 1, regride
                    if (experiencia.xpAtual === 0 && experiencia.nivel > 1) {
                        regredirNivel();
                    } else {
                        // Subtrai 1 (e permite valores negativos? Não, a função trata)
                        adicionarExperiencia(-1);
                    }
                } else {
                    // Aumenta 1
                    adicionarExperiencia(1);
                }
                return;
            }

            // Para HP, Mana, Stamina
            const quantidade = acao === 'aumentar' ? 1 : -1;
            alterarRecurso(recurso, quantidade);
        });
    });

    // --- Campos editáveis (clique para digitar) ---
    const camposEditaveis = document.querySelectorAll("[data-recurso-atual]");
    camposEditaveis.forEach((campo) => {
        campo.addEventListener('click', () => {
            campo.contentEditable = "true";
            campo.focus();
        });

        campo.addEventListener('blur', () => {
            const recurso = campo.dataset.recursoAtual;
            const valor = Number(campo.textContent);

            if (recurso === 'xp') {
                definirExperiencia(valor);
            } else {
                definirRecurso(recurso, valor);
            }

            campo.contentEditable = "false";
        });

        campo.addEventListener('keydown', (evento) => {
            if (evento.key === "Enter") {
                evento.preventDefault();
                campo.blur();
            }
        });
    });
}

// =========================================================
// INICIALIZAÇÃO
// =========================================================
inicializarAtributos();