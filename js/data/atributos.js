// =========================================================
// DADOS DOS ATRIBUTOS MANUAIS
// =========================================================
//
// Este arquivo define:
//
// - Quais atributos o jogador pode evoluir manualmente.
// - O nome e a descrição de cada atributo.
// - Quais atributos visuais são afetados.
// - Quanto cada ponto investido adiciona.
//
// Este arquivo NÃO realiza cálculos.
//
// Os cálculos serão feitos posteriormente pelo sistema
// responsável por combinar:
//
// Atributos manuais
// + Bônus raciais
// + Bônus de classe
// + Buffs temporários
// + Debuffs temporários
//
// =========================================================


export const atributos = {


    // =====================================================
    // FORÇA BRUTA
    // =====================================================

    forcaBruta: {

        id: "forcaBruta",

        nome: "Força Bruta",

        descricao:
            "Aumenta o Dano Físico do personagem. Ideal para guerreiros e combatentes corpo a corpo que desejam causar mais dano com armas pesadas.",

        pontosIniciais: 0,

        efeitos: [

            {

                atributoVisual: "danoFisico",

                tipo: "percentual",

                valorPorPonto: 2

            }

        ]

    },


    // =====================================================
    // VIGOR
    // =====================================================

    vigor: {

        id: "vigor",

        nome: "Vigor",

        descricao:
            "Aumenta a capacidade de Vida e a Defesa Física do personagem. Perfeito para tanques e jogadores que desejam resistir a ataques físicos.",

        pontosIniciais: 0,

        efeitos: [

            {

                atributoVisual: "hp",

                tipo: "valor",

                valorPorPonto: 5

            },

            {

                atributoVisual: "defesaFisica",

                tipo: "percentual",

                valorPorPonto: 3

            }

        ]

    },


    // =====================================================
    // AGILIDADE
    // =====================================================

    agilidade: {

        id: "agilidade",

        nome: "Agilidade",

        descricao:
            "Aumenta a capacidade de evasão e concede bônus de Iniciativa. Essencial para ladinos e atiradores que dependem de reflexos rápidos.",

        pontosIniciais: 0,

        efeitos: [

            {

                atributoVisual: "evasiva",

                tipo: "percentual",

                valorPorPonto: 2

            },

            {

                atributoVisual: "iniciativa",

                tipo: "valor",

                valorPorPonto: 1

            }

        ]

    },


    // =====================================================
    // POTÊNCIA DE TIRO
    // =====================================================

    potenciaDeTiro: {

        id: "potenciaDeTiro",

        nome: "Potência de Tiro",

        descricao:
            "Aumenta o Dano de Projétil. Focado em atiradores e usuários de armas de longa distância.",

        pontosIniciais: 0,

        efeitos: [

            {

                atributoVisual: "danoProjetil",

                tipo: "percentual",

                valorPorPonto: 3

            }

        ]

    },


    // =====================================================
    // RESISTÊNCIA FÍSICA
    // =====================================================

    resistenciaFisica: {

        id: "resistenciaFisica",

        nome: "Resistência Física",

        descricao:
            "Aumenta a Defesa Física do personagem. Ideal para quem deseja uma defesa sólida sem depender exclusivamente de HP.",

        pontosIniciais: 0,

        efeitos: [

            {

                atributoVisual: "defesaFisica",

                tipo: "percentual",

                valorPorPonto: 4

            }

        ]

    },


    // =====================================================
    // POTÊNCIA ARCANA
    // =====================================================

    potenciaArcana: {

        id: "potenciaArcana",

        nome: "Potência Arcana",

        descricao:
            "Aumenta o Dano Mágico do personagem. Essencial para magos especializados em escolas como Destruição e Conjuração.",

        pontosIniciais: 0,

        efeitos: [

            {

                atributoVisual: "danoMagico",

                tipo: "percentual",

                valorPorPonto: 3

            }

        ]

    },


    // =====================================================
    // ESPÍRITO RESILIENTE
    // =====================================================

    espiritoResiliente: {

        id: "espiritoResiliente",

        nome: "Espírito Resiliente",

        descricao:
            "Aumenta a Defesa Mágica e a capacidade máxima de Mana. Perfeito para magos que enfrentam outros conjuradores ou precisam de uma reserva maior de energia.",

        pontosIniciais: 0,

        efeitos: [

            {

                atributoVisual: "defesaMagica",

                tipo: "percentual",

                valorPorPonto: 4

            },

            {

                atributoVisual: "mana",

                tipo: "valor",

                valorPorPonto: 3

            }

        ]

    },


    // =====================================================
    // FOCO MENTAL
    // =====================================================

    focoMental: {

        id: "focoMental",

        nome: "Foco Mental",

        descricao:
            "Aumenta a capacidade máxima de Mana. Recomendado para magos que utilizam muitas magias durante um combate.",

        pontosIniciais: 0,

        efeitos: [

            {

                atributoVisual: "mana",

                tipo: "valor",

                valorPorPonto: 5

            }

        ]

    },


    // =====================================================
    // ESTAMINA
    // =====================================================

    estamina: {

        id: "estamina",

        nome: "Estamina",

        descricao:
            "Aumenta a capacidade máxima de Stamina. Útil para classes que dependem de ações físicas e habilidades que consomem Stamina.",

        pontosIniciais: 0,

        efeitos: [

            {

                atributoVisual: "stamina",

                tipo: "valor",

                valorPorPonto: 4

            }

        ]

    },


    // =====================================================
    // INSTINTO DE SOBREVIVÊNCIA
    // =====================================================

    instintoDeSobrevivencia: {

        id: "instintoDeSobrevivencia",

        nome: "Instinto de Sobrevivência",

        descricao:
            "Aumenta o HP máximo do personagem. Focado em sobrevivência pura e resistência a grandes quantidades de dano.",

        pontosIniciais: 0,

        efeitos: [

            {

                atributoVisual: "hp",

                tipo: "valor",

                valorPorPonto: 8

            }

        ]

    }

};