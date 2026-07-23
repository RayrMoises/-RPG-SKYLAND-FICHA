// =========================================================
// DADOS DAS PERÍCIAS
// =========================================================
//
// Este arquivo define:
//
// - Quais perícias existem no sistema.
// - O nome de cada perícia.
// - A categoria à qual ela pertence.
// - A descrição da perícia.
//
// Este arquivo NÃO realiza:
//
// - Cálculos.
// - Manipulação do HTML.
// - Controle de pontos.
// - Cálculo de modificadores.
//
// Essas responsabilidades pertencem ao módulo:
// js/modules/pericias.js
//
// =========================================================


export const pericias = {


    // =====================================================
    // PERÍCIAS FÍSICAS
    // =====================================================


    atletismo: {

        id: "atletismo",

        nome: "Atletismo",

        categoria: "fisicas",

        descricao:
            "Correr, saltar, nadar, escalar e realizar proezas físicas que exigem força e resistência."

    },


    acrobacia: {

        id: "acrobacia",

        nome: "Acrobacia",

        categoria: "fisicas",

        descricao:
            "Manter equilíbrio, fazer cambalhotas, cair de alturas e realizar movimentos ágeis e precisos."

    },


    furtividade: {

        id: "furtividade",

        nome: "Furtividade",

        categoria: "fisicas",

        descricao:
            "Mover-se silenciosamente, esconder-se, seguir alguém sem ser notado e desaparecer em ambientes."

    },


    prestidigitacao: {

        id: "prestidigitacao",

        nome: "Prestidigitação",

        categoria: "fisicas",

        descricao:
            "Realizar truques manuais, como esconder objetos, desarmar armadilhas simples e executar movimentos rápidos com as mãos."

    },


    cavalgar: {

        id: "cavalgar",

        nome: "Cavalgar",

        categoria: "fisicas",

        descricao:
            "Montar e controlar montarias, realizar manobras montado e cuidar de animais de carga."

    },


    natacao: {

        id: "natacao",

        nome: "Natação",

        categoria: "fisicas",

        descricao:
            "Deslocar-se na água, mergulhar, nadar em correntezas e sobreviver em ambientes aquáticos."

    },


    // =====================================================
    // PERÍCIAS MENTAIS E SOCIAIS
    // =====================================================


    persuasao: {

        id: "persuasao",

        nome: "Persuasão",

        categoria: "mentaisSociais",

        descricao:
            "Convencer, negociar, inspirar confiança e influenciar pessoas com argumentos lógicos ou carisma."

    },


    intimidacao: {

        id: "intimidacao",

        nome: "Intimidação",

        categoria: "mentaisSociais",

        descricao:
            "Amedrontar, coagir e quebrar a vontade de alguém usando ameaças, força ou presença intimidadora."

    },


    enganacao: {

        id: "enganacao",

        nome: "Enganação",

        categoria: "mentaisSociais",

        descricao:
            "Mentir, disfarçar-se, criar falsas identidades e enganar pessoas com histórias convincentes."

    },


    intuicao: {

        id: "intuicao",

        nome: "Intuição",

        categoria: "mentaisSociais",

        descricao:
            "Perceber intenções ocultas, identificar mentiras, sentir perigo iminente e ler as emoções alheias."

    },


    interpretacao: {

        id: "interpretacao",

        nome: "Interpretação",

        categoria: "mentaisSociais",

        descricao:
            "Atuar, representar um papel, contar histórias, cantar, tocar instrumentos e se expressar artisticamente."

    },


    lideranca: {

        id: "lideranca",

        nome: "Liderança",

        categoria: "mentaisSociais",

        descricao:
            "Comandar grupos, inspirar aliados, coordenar estratégias e manter a moral da equipe."

    },


    // =====================================================
    // PERÍCIAS DE CONHECIMENTO
    // =====================================================


    arcanismo: {

        id: "arcanismo",

        nome: "Arcanismo",

        categoria: "conhecimento",

        descricao:
            "Conhecimento sobre magia, escolas mágicas, artefatos encantados, planos de existência e criaturas mágicas."

    },


    historia: {

        id: "historia",

        nome: "História",

        categoria: "conhecimento",

        descricao:
            "Conhecimento sobre eventos passados, linhagens reais, guerras antigas, lendas e figuras históricas."

    },


    religiao: {

        id: "religiao",

        nome: "Religião",

        categoria: "conhecimento",

        descricao:
            "Conhecimento sobre deuses, crenças, rituais, ordens religiosas, criaturas divinas e planos celestiais."

    },


    natureza: {

        id: "natureza",

        nome: "Natureza",

        categoria: "conhecimento",

        descricao:
            "Conhecimento sobre animais, plantas, climas, geografia, ecossistemas e criaturas da natureza."

    },


    investigacao: {

        id: "investigacao",

        nome: "Investigação",

        categoria: "conhecimento",

        descricao:
            "Analisar pistas, encontrar padrões, pesquisar em livros, decifrar códigos e solucionar mistérios."

    },


    medicina: {

        id: "medicina",

        nome: "Medicina",

        categoria: "conhecimento",

        descricao:
            "Diagnosticar doenças, tratar ferimentos, identificar venenos, conhecer anatomia e realizar primeiros socorros."

    },


    // =====================================================
    // PERÍCIAS DE COMBATE E SOBREVIVÊNCIA
    // =====================================================


    esquiva: {

        id: "esquiva",

        nome: "Esquiva",

        categoria: "combateSobrevivencia",

        descricao:
            "Desviar de ataques físicos e projéteis, rolar para fora do perigo e usar agilidade para evitar dano."

    },


    briga: {

        id: "briga",

        nome: "Briga",

        categoria: "combateSobrevivencia",

        descricao:
            "Lutar desarmado ou com armas improvisadas, agarrar, derrubar e imobilizar oponentes."

    },


    pontaria: {

        id: "pontaria",

        nome: "Pontaria",

        categoria: "combateSobrevivencia",

        descricao:
            "Usar armas de arremesso e projéteis com precisão, incluindo arcos, bestas e armas de fogo."

    },


    bloqueio: {

        id: "bloqueio",

        nome: "Bloqueio",

        categoria: "combateSobrevivencia",

        descricao:
            "Usar escudos, armas ou o próprio corpo para bloquear ataques físicos e reduzir dano."

    },


    sobrevivencia: {

        id: "sobrevivencia",

        nome: "Sobrevivência",

        categoria: "combateSobrevivencia",

        descricao:
            "Encontrar água e comida, caçar, pescar, construir abrigos, rastrear criaturas e navegar em ambientes selvagens."

    },


    artesanato: {

        id: "artesanato",

        nome: "Artesanato",

        categoria: "combateSobrevivencia",

        descricao:
            "Criar, consertar e melhorar equipamentos, armas, armaduras, poções e itens úteis."

    }

};