// =========================================
// IMPORTAÇÃO DOS DADOS
// =========================================

import { configurarImagem } from "./modules/imagem.js";

import { classes } from "./data/classes.js";

import { racas } from "./data/racas.js";

import {

    pontosAtributos,

    alterarPontosAtributo,

    calcularEfeitosAtributos,

    renderizarAtributos,
    
    atualizarAtributosVisuais,

    configurarControlesRecursos

} from "./modules/atributos.js";

// =========================================
// ELEMENTOS DO DOM
// =========================================

const abas = document.querySelectorAll(
    ".aba"
);


const conteudos = document.querySelectorAll(
    ".conteudo-aba"
);


const selectClasse = document.querySelector(
    "#classe-personagem"
);


const selectRaca = document.querySelector(
    "#raca-personagem"
);


const botoesAjuda = document.querySelectorAll(
    ".botao-ajuda"
);


const modal = document.querySelector(
    "#modal-informacoes"
);


const botaoFecharModal = document.querySelector(
    "#fechar-modal"
);

renderizarAtributos();

atualizarAtributosVisuais();


// =========================================
// ESTADO ATUAL DO PERSONAGEM
// =========================================

const personagem = {

    nome: "",

    classe: null,

    raca: null

};


// =========================================
// SISTEMA DE ABAS
// =========================================

abas.forEach((aba) => {

    aba.addEventListener(
        "click",

        () => {

            const abaSelecionada =
                aba.dataset.aba;


            // Remove a classe ativa
            // de todas as abas

            abas.forEach((item) => {

                item.classList.remove(
                    "ativa"
                );

            });


            // Esconde todos os conteúdos

            conteudos.forEach((conteudo) => {

                conteudo.classList.remove(
                    "ativo"
                );

            });


            // Ativa a aba clicada

            aba.classList.add(
                "ativa"
            );


            // Busca o conteúdo correspondente

            const conteudoSelecionado =
                document.querySelector(
                    `#aba-${abaSelecionada}`
                );


            // Mostra o conteúdo

            conteudoSelecionado.classList.add(
                "ativo"
            );

        }

    );

});


// =========================================
// SELEÇÃO DE CLASSE
// =========================================

selectClasse.addEventListener(

    "change",

    () => {

        const idClasse =
            selectClasse.value;


        // Se o usuário voltar
        // para a opção vazia

        if (!idClasse) {

            personagem.classe =
                null;

            return;

        }


        // Busca a classe
        // dentro do objeto classes

        personagem.classe =
            classes[idClasse];


        console.log(
            "Classe selecionada:"
        );


        console.log(
            personagem.classe
        );

    }

);


// =========================================
// SELEÇÃO DE RAÇA
// =========================================

selectRaca.addEventListener(

    "change",

    () => {

        const idRaca =
            selectRaca.value;


        // Se o usuário voltar
        // para a opção vazia

        if (!idRaca) {

            personagem.raca =
                null;

            return;

        }


        // Busca a raça
        // dentro do objeto racas

        personagem.raca =
            racas[idRaca];


        console.log(
            "Raça selecionada:"
        );


        console.log(
            personagem.raca
        );

    }

);


// =========================================
// BOTÕES DE INFORMAÇÃO
// =========================================

botoesAjuda.forEach(

    (botao) => {

        botao.addEventListener(

            "click",

            () => {

                const tipo =
                    botao.dataset.tipo;


                if (
                    tipo === "classe"
                ) {

                    abrirInformacoesClasse();

                }


                if (
                    tipo === "raca"
                ) {

                    abrirInformacoesRaca();

                }

            }

        );

    }

);


// =========================================
// INFORMAÇÕES DA CLASSE
// =========================================

function abrirInformacoesClasse() {

    if (
        !personagem.classe
    ) {

        alert(
            "Selecione uma classe primeiro."
        );


        return;

    }


    abrirModal(

        personagem.classe,

        "CLASSE"

    );

}


// =========================================
// INFORMAÇÕES DA RAÇA
// =========================================

function abrirInformacoesRaca() {

    if (
        !personagem.raca
    ) {

        alert(
            "Selecione uma raça primeiro."
        );


        return;

    }


    abrirModal(

        personagem.raca,

        "RAÇA"

    );

}


// =========================================
// ABRIR MODAL
// =========================================

function abrirModal(

    dados,

    tipo

) {

    const modalTipo =
        document.querySelector(
            "#modal-tipo"
        );


    const modalTitulo =
        document.querySelector(
            "#modal-titulo"
        );


    const modalDescricao =
        document.querySelector(
            "#modal-descricao"
        );


    const modalBuffs =
        document.querySelector(
            "#modal-buffs"
        );


    const modalDebuffs =
        document.querySelector(
            "#modal-debuffs"
        );


    // Preenche informações básicas

    modalTipo.textContent =
        tipo;


    modalTitulo.textContent =
        dados.nome;


    modalDescricao.textContent =
        dados.descricao;


    // Limpa conteúdos anteriores

    modalBuffs.innerHTML =
        "";


    modalDebuffs.innerHTML =
        "";


    // Renderiza buffs

    dados.buffs.forEach(

        (buff) => {

            const elemento =
                criarModificador(
                    buff
                );


            modalBuffs.appendChild(
                elemento
            );

        }

    );


    // Renderiza debuffs

    dados.debuffs.forEach(

        (debuff) => {

            const elemento =
                criarModificador(
                    debuff
                );


            modalDebuffs.appendChild(
                elemento
            );

        }

    );


    // Abre o modal

    modal.classList.add(
        "ativo"
    );

}


// =========================================
// CRIAR MODIFICADOR
// =========================================

function criarModificador(

    modificador

) {

    const elemento =
        document.createElement(
            "div"
        );


    elemento.classList.add(
        "modificador"
    );


    elemento.innerHTML = `

        <strong>
            ${modificador.nome}
        </strong>


        <p>
            ${modificador.descricao}
        </p>

    `;


    return elemento;

}


// =========================================
// FECHAR MODAL
// =========================================

botaoFecharModal.addEventListener(

    "click",

    () => {

        modal.classList.remove(
            "ativo"
        );

    }

);


// =========================================
// FECHAR CLICANDO FORA DO MODAL
// =========================================

modal.addEventListener(

    "click",

    (evento) => {

        if (
            evento.target === modal
        ) {

            modal.classList.remove(
                "ativo"
            );

        }

    }

);

renderizarAtributos();

configurarControlesRecursos();

configurarImagem();