// =========================================================
// SISTEMA DE PERÍCIAS
// =========================================================
//
// Este módulo é responsável por:
//
// - Inicializar os pontos das perícias.
// - Controlar os pontos investidos manualmente.
// - Controlar modificadores externos.
// - Calcular o valor total de cada perícia.
// - Renderizar as perícias na interface.
// - Configurar os botões de aumento e redução.
//
// A estrutura foi separada dos atributos porque:
//
// PERÍCIAS NÃO DEPENDEM DOS ATRIBUTOS.
//
// O valor final de uma perícia será:
//
// Pontos Manuais
// + Modificador de Classe
// + Modificador de Raça
// + Bônus Extras
// - Penalidades
//
// =========================================================


import { pericias } from "../data/pericias.js";


// =========================================================
// ESTADO DOS PONTOS MANUAIS
// =========================================================
//
// Estes são os pontos que o jogador pode distribuir.
//
// Exemplo:
//
// atletismo: 5
//
// O jogador poderá alterar este valor
// diretamente pela interface.
//
// =========================================================


export const pontosPericias = {};


// =========================================================
// ESTADO DOS MODIFICADORES
// =========================================================
//
// Estes valores NÃO são alterados pelo jogador
// através dos botões principais.
//
// Eles serão preenchidos futuramente por:
//
// - Classes
// - Raças
// - Buffs
// - Debuffs
// - Banco de dados
// - Google Sheets
//
// Exemplo:
//
// modificadoresPericias.atletismo = 2;
//
// Resultado:
//
// Pontos manuais: 5
// Modificador:    2
// Total:          7
//
// =========================================================


export const modificadoresPericias = {};


// =========================================================
// LIMITE DE PONTOS MANUAIS
// =========================================================


const PONTOS_MINIMOS = 0;

const PONTOS_MAXIMOS = 15;


// =========================================================
// INICIALIZAR PERÍCIAS
// =========================================================
//
// Cria o estado inicial de todas as perícias.
//
// Exemplo:
//
// pontosPericias = {
//
//     atletismo: 0,
//
//     acrobacia: 0,
//
//     furtividade: 0
//
// };
//
// =========================================================


export function inicializarPericias() {


    Object.keys(pericias).forEach(

        (idPericia) => {


            pontosPericias[idPericia] = 0;


            modificadoresPericias[idPericia] = 0;


        }

    );

}


// =========================================================
// ALTERAR PONTOS MANUAIS
// =========================================================


export function alterarPontosPericia(

    idPericia,

    quantidade

) {


    // Verifica se a perícia existe

    if (

        !pericias[idPericia]

    ) {


        console.warn(

            `Perícia "${idPericia}" não existe.`

        );


        return;

    }


    // Valor atual

    const valorAtual =

        pontosPericias[idPericia] ?? 0;


    // Novo valor

    const novoValor =

        valorAtual + quantidade;


    // Aplica os limites

    pontosPericias[idPericia] =

        Math.min(

            PONTOS_MAXIMOS,

            Math.max(

                PONTOS_MINIMOS,

                novoValor

            )

        );


    // Atualiza a interface

    atualizarInterfacePericia(

        idPericia

    );

}


// =========================================================
// ALTERAR MODIFICADOR
// =========================================================
//
// Esta função será muito importante futuramente.
//
// Exemplos:
//
// aplicarModificadorPericia(
//     "atletismo",
//     2
// );
//
// aplicarModificadorPericia(
//     "atletismo",
//     -1
// );
//
// Isso NÃO altera os pontos manuais.
//
// Apenas altera o modificador externo.
//
// =========================================================


export function alterarModificadorPericia(

    idPericia,

    quantidade

) {


    if (

        !pericias[idPericia]

    ) {


        console.warn(

            `Perícia "${idPericia}" não existe.`

        );


        return;

    }


    modificadoresPericias[idPericia] =

        (

            modificadoresPericias[idPericia] ?? 0

        ) + quantidade;


    atualizarInterfacePericia(

        idPericia

    );

}


// =========================================================
// DEFINIR MODIFICADOR
// =========================================================
//
// Diferente da função anterior:
//
// alterarModificadorPericia()
//
// soma ou subtrai.
//
// Já esta função:
//
// definirModificadorPericia()
//
// substitui completamente o valor.
//
// Isso será útil quando carregarmos dados
// vindos do Google Sheets.
//
// =========================================================


export function definirModificadorPericia(

    idPericia,

    valor

) {


    if (

        !pericias[idPericia]

    ) {


        console.warn(

            `Perícia "${idPericia}" não existe.`

        );


        return;

    }


    modificadoresPericias[idPericia] =

        valor;


    atualizarInterfacePericia(

        idPericia

    );

}


// =========================================================
// CALCULAR VALOR TOTAL
// =========================================================


export function calcularValorPericia(

    idPericia

) {


    if (

        !pericias[idPericia]

    ) {


        return 0;

    }


    const pontosManuais =

        pontosPericias[idPericia] ?? 0;


    const modificador =

        modificadoresPericias[idPericia] ?? 0;


    return (

        pontosManuais +

        modificador

    );

}


// =========================================================
// OBTER PONTOS MANUAIS
// =========================================================


export function obterPontosPericia(

    idPericia

) {


    return (

        pontosPericias[idPericia] ?? 0

    );

}


// =========================================================
// OBTER MODIFICADOR
// =========================================================


export function obterModificadorPericia(

    idPericia

) {


    return (

        modificadoresPericias[idPericia] ?? 0

    );

}


// =========================================================
// RENDERIZAR PERÍCIAS
// =========================================================
//
// Por enquanto vamos criar uma estrutura simples.
//
// O HTML final poderá ser refinado depois,
// mas o módulo já ficará funcional.
//
// =========================================================


export function renderizarPericias() {


    const listaPericias =

        document.querySelector(

            "#lista-pericias"

        );


    if (!listaPericias) {

        console.warn(

            "Elemento #lista-pericias não encontrado."

        );


        return;

    }


    listaPericias.innerHTML = "";


    const categorias = {


        fisicas: {

            nome: "PERÍCIAS FÍSICAS",

            descricao:
                "Habilidades relacionadas ao corpo, movimento, agilidade e coordenação."

        },


        mentaisSociais: {

            nome: "PERÍCIAS MENTAIS E SOCIAIS",

            descricao:
                "Habilidades relacionadas à interação, percepção e influência sobre outras pessoas."

        },


        conhecimento: {

            nome: "PERÍCIAS DE CONHECIMENTO",

            descricao:
                "Conhecimentos adquiridos através de estudo, experiência e compreensão do mundo."

        },


        combateSobrevivencia: {

            nome: "PERÍCIAS DE COMBATE E SOBREVIVÊNCIA",

            descricao:
                "Habilidades utilizadas em combate, exploração e sobrevivência."

        }

    };


    Object.keys(categorias).forEach(

        (idCategoria) => {


            const dadosCategoria =

                categorias[idCategoria];


            const periciasCategoria =

                Object.keys(pericias)

                    .filter(

                        (idPericia) =>

                            pericias[idPericia].categoria

                            === idCategoria

                    );


            const secao =

                document.createElement(

                    "section"

                );


            secao.classList.add(

                "secao-pericias"

            );


            secao.innerHTML = `

                <div class="titulo-secao-pericias">


                    <div class="simbolo-secao">

                        ✦

                    </div>


                    <div>


                        <h3>

                            ${dadosCategoria.nome}

                        </h3>


                        <p>

                            ${dadosCategoria.descricao}

                        </p>


                    </div>


                </div>


                <div class="grade-pericias">

                </div>

            `;


            const grade =

                secao.querySelector(

                    ".grade-pericias"

                );


            periciasCategoria.forEach(

                (idPericia) => {


                    const elementoPericia =

                        criarCardPericia(

                            idPericia

                        );


                    grade.appendChild(

                        elementoPericia

                    );

                }

            );


            listaPericias.appendChild(

                secao

            );

        }

    );


    configurarBotoesPericias();

}


// =========================================================
// CONFIGURAR BOTÕES
// =========================================================


function configurarBotoesPericias() {


    const botoes =

        document.querySelectorAll(

            ".botao-pericia"

        );


    botoes.forEach(

        (botao) => {


            botao.addEventListener(

                "click",

                () => {


                    const idPericia =

                        botao.dataset.pericia;


                    const acao =

                        botao.dataset.acao;


                    const quantidade =

                        acao === "aumentar"

                            ? 1

                            : -1;


                    alterarPontosPericia(

                        idPericia,

                        quantidade

                    );

                }

            );

        }

    );

}


// =========================================================
// ATUALIZAR UMA PERÍCIA
// =========================================================


function atualizarInterfacePericia(

    idPericia

) {


    const elementoPontos =

        document.querySelector(

            `[data-pontos="${idPericia}"]`

        );


    const elementoModificador =

        document.querySelector(

            `[data-modificador="${idPericia}"]`

        );


    const elementoTotal =

        document.querySelector(

            `[data-total="${idPericia}"]`

        );


    if (

        elementoPontos

    ) {


        elementoPontos.textContent =

            pontosPericias[idPericia];

    }


    if (

        elementoModificador

    ) {


        elementoModificador.textContent =

            modificadoresPericias[idPericia];

    }


    if (

        elementoTotal

    ) {


        elementoTotal.textContent =

            calcularValorPericia(

                idPericia

            );

    }

}


// =========================================================
// ATUALIZAR TODAS AS PERÍCIAS
// =========================================================


export function atualizarTodasPericias() {


    Object.keys(pericias).forEach(

        (idPericia) => {


            atualizarInterfacePericia(

                idPericia

            );

        }

    );

}


// =========================================================
// INICIALIZAÇÃO
// =========================================================


inicializarPericias();

function criarCardPericia(

    idPericia

) {


    const dadosPericia =

        pericias[idPericia];


    const pontosManuais =

        pontosPericias[idPericia];


    const modificador =

        modificadoresPericias[idPericia];


    const valorTotal =

        calcularValorPericia(

            idPericia

        );


    const elementoPericia =

        document.createElement(

            "article"

        );


    elementoPericia.classList.add(

        "card-pericia"

    );


    elementoPericia.dataset.pericia =

        idPericia;


    elementoPericia.innerHTML = `

        <div class="pericia-cabecalho">


            <div>

                <span class="pericia-indicador">

                    ✦

                </span>


                <h3>

                    ${dadosPericia.nome}

                </h3>

            </div>


        </div>


        <p class="pericia-descricao">

            ${dadosPericia.descricao}

        </p>


        <div class="pericia-controle">


            <button

                type="button"

                class="botao-pericia"

                data-pericia="${idPericia}"

                data-acao="diminuir"

            >

                −

            </button>


            <div class="valores-pericia">


                <div class="valor-manual-pericia">


                    <span

                        class="pontos-pericia"

                        data-pontos="${idPericia}"

                    >

                        ${pontosManuais}

                    </span>


                    <small>

                        PONTOS

                    </small>


                </div>


                <span class="separador-pericia">

                    +

                </span>


                <span

                    class="modificador-pericia"

                    data-modificador="${idPericia}"

                >

                    ${modificador}

                </span>


                <span class="separador-pericia">

                    =

                </span>


                <strong

                    class="total-pericia"

                    data-total="${idPericia}"

                >

                    ${valorTotal}

                </strong>

            </div>


            <button

                type="button"

                class="botao-pericia"

                data-pericia="${idPericia}"

                data-acao="aumentar"

            >

                +

            </button>


        </div>

    `;


    return elementoPericia;

}