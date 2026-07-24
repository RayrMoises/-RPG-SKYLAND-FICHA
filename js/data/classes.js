export const classes = {

    guerreiro: {

        id: "guerreiro",

        nome: "Guerreiro",

        descricao:
            "Especialista em combate físico, resistência e força bruta.",

        buffs: [

            {
                nome: "Ímpeto Marcial",

                descricao:
                    "Concede +15% em todo o Dano Físico causado e +15% de Defesa Física.",

                modificadores: {

                    danoFisicoPercentual: 15,

                    defesaFisicaPercentual: 15

                }

            },

            {
                nome: "Sangue Frio",

                descricao:
                    "Uma vez por combate, pode ignorar completamente penalidades e debuffs de rolagem.",

                modificadores: {}

            }

        ],

        debuffs: [

            {
                nome: "Mente Blindada",

                descricao:
                    "Reduz permanentemente em 20% a capacidade máxima de Mana.",

                modificadores: {

                    manaPercentual: -20

                }

            },

            {
                nome: "Peso do Aço",

                descricao:
                    "Equipamentos pesados adicionam -3 em Furtividade e Acrobacia.",

                modificadores: {

                    furtividade: -3,

                    acrobacia: -3

                }

            }

        ]

    },


    espadachim: {

        id: "espadachim",

        nome: "Espadachim",

        descricao:
            "Combatente especializado em precisão, velocidade e ataques letais.",

        buffs: [

            {
                nome: "Florestamento Letal",

                descricao:
                    "Concede +10% de Chance de Acerto Crítico. Tirar 18 no dado é considerado um acerto crítico.",

                modificadores: {

                    chanceCriticoPercentual: 10

                }

            },

            {
                nome: "Foco Cirúrgico",

                descricao:
                    "Ataques ignoram 10% da Defesa Física contra inimigos feridos na mesma rodada.",

                modificadores: {
                    

                }

            }

        ],

        debuffs: [

            {
                nome: "Fragilidade Física",

                descricao:
                    "Recebe +20% de dano extra de ataques físicos.",

                modificadores: {

                    danoFisicoRecebidoPercentual: 20

                }

            },

            {
                nome: "Redução de Peso",

                descricao:
                    "Usar armaduras pesadas reduz a Evasiva em 10%.",

                modificadores: {

                    evasivaPercentual: -10

                }

            }

        ]

    },


    ladino: {

        id: "ladino",

        nome: "Ladino",

        descricao:
            "Especialista em furtividade, precisão, enganação e ataques surpresa.",

        buffs: [

            {
                nome: "Passo Silencioso",

                descricao:
                    "Concede +4 em Furtividade e permite movimentação normal enquanto camuflado.",

                modificadores: {

                    furtividade: 4

                }

            },

            {
                nome: "Ataque Furtivo",

                descricao:
                    "Causa +30% de dano físico contra alvos desprevenidos, flanqueados ou que não viram o Ladino.",

                modificadores: {

                }

            },

            {
                nome: "Mãos Leves",

                descricao:
                    "Concede +4 em rolagens de Roubo, arrombamento e desarmamento de armadilhas.",

                modificadores: {
                    roubo: 4,

                    acrobacia: 2,

                    arrombamento: 4,

                    prestidigitacao: 4,

                    sobrevivencia: 2

                }

            }

        ],

        debuffs: [

            {
                nome: "Desonra das Armas",

                descricao:
                    "Não pode usar armas de duas mãos ou escudos. Em combate frontal, causa -15% de dano físico.",

                modificadores: {

                    danoFisicoPercentual: -15

                }

            }

        ]

    },


atirador: {
    id: "atirador",
    nome: "Atirador",
    descricao: "Especialista em combate à distância e ataques de precisão.",
    buffs: [
        {
            nome: "Especialista de Vanguarda",
            descricao: "Ignora penalidades de distância, vento e cobertura parcial.",
            modificadores: {}
        },
        {
            nome: "Cadência Veloz",
            descricao: "Pode recarregar e disparar no mesmo turno sem gastar ações adicionais.",
            modificadores: {}
        },
        {
            nome: "Ponto Vulnerável",
            descricao: "Causa +15% de dano contra inimigos engajados em combate corpo a corpo com aliados.",
            modificadores: {
                danoProjetilPercentual: 15
            }
        },
        {
            nome: "Precisão Letal",
            descricao: "Recebe +4 em testes de Pontaria e Esquiva.",
            modificadores: {
                pontaria: 4,
                acrobacia: 4,
                esquiva: 4
            }
        }
    ],
    debuffs: [
        {
            nome: "Desvantagem de Proximidade",
            descricao: "Sofre -20% de dano físico em combate corpo a corpo.",
            modificadores: {
                danoFisicoPercentual: -20
            }
        },
        {
            nome: "Foco Fixado",
            descricao: "Enquanto mira ou ataca à distância, recebe +15% de dano de ataques surpresa.",
            modificadores: {
                danoSurpresaRecebidoPercentual: 15
            }
        }
    ]
},


    mago: {

        id: "mago",

        nome: "Mago",

        descricao:
            "Conjurador especializado em magia, conhecimento e poder arcano.",

        buffs: [

            {
                nome: "Reserva Arcana",

                descricao:
                    "Concede +25% de Mana máxima e regeneração acelerada fora de combate.",

                modificadores: {

                    manaPercentual: 25

                }

            },

            {
                nome: "Especialização de Winterhold",

                descricao:
                    "Escolhe uma escola mágica principal. Seus feitiços custam 20% menos Mana e têm efeitos 15% maiores.",

                modificadores: {}

            },

            {
                nome: "Mente Expandida",

                descricao:
                    "Concede +20% em testes de História, Identificação de Itens Mágicos e Runas Antigas.",

                modificadores: {}

            }

        ],

        debuffs: [

            {
                nome: "Corpo Fragilizado",

                descricao:
                    "Possui -20% de Defesa Física e não pode usar armaduras pesadas.",

                modificadores: {

                    defesaFisicaPercentual: -20

                }

            }

        ]

    }

};