export const racas = {

    // =====================================================
    // HUMANO
    // =====================================================

    humano: {

        id: "humano",

        nome: "Humano",

        descricao:
            "Uma raça adaptável e equilibrada, sem resistências naturais específicas.",

        buffs: [

            {

                nome: "Ponto de Atributo Extra",

                descricao:
                    "Recebe +2 pontos de atributo extra na criação de personagem, à escolha do jogador.",

                modificadores: {

                    pontosAtributoCriacao: 2

                }

            },

            {

                nome: "Evolução Acelerada",

                descricao:
                    "Recebe +2 pontos de atributo adicionais nos níveis 5, 10, 15 e 20.",

                modificadores: {

                    pontosAtributoPorNivel: 2,

                    niveisDeAtivacao: [

                        5,

                        10,

                        15,

                        20

                    ]

                }

            },

            {

                nome: "Inteligência Adaptativa",

                descricao:
                    "Recebe +2 em testes de perícias relacionadas à Inteligência.",

                modificadores: {

                    periciasRelacionadasInteligencia: 2

                }

            }

        ],

        debuffs: [

            {

                nome: "Nenhuma Resistência Natural",

                descricao:
                    "Não possui resistências naturais especiais a elementos, doenças ou efeitos mentais. Serve como base neutra do sistema, sem bônus ou penalidades inerentes.",

                modificadores: {}

            }

        ]

    },


    // =====================================================
    // ELFO
    // =====================================================

    elfo: {

        id: "elfo",

        nome: "Elfo",

        descricao:
            "Uma raça ancestral com grande afinidade com magia, conhecimento e forças arcanas.",

        buffs: [

            {

                nome: "Mestre da Mana",

                descricao:
                    "Recebe +25% na reserva máxima de Mana e +2 em testes de Arcanismo e perícias relacionadas à magia.",

                modificadores: {

                    manaPercentual: 25,

                    arcanismo: 2,

                    periciasRelacionadasMagia: 2

                }

            },

            {

                nome: "Resistência Arcana",

                descricao:
                    "Reduz em 30% todo dano mágico recebido e ganha vantagem em testes de resistência contra magias e efeitos mentais.",

                modificadores: {

                    danoMagicoRecebidoPercentual: -30,

                    resistenciaMagica: "vantagem",

                    resistenciaMentalContraMagia: "vantagem"

                }

            },

            {

                nome: "Sabedoria Eterna",

                descricao:
                    "Uma vez por sessão, pode rerolar um teste de perícia relacionado a conhecimento antigo, natureza ou magia, ficando com o melhor resultado.",

                modificadores: {

                    rerolagemPorSessao: 1

                }

            }

        ],

        debuffs: [

            {

                nome: "Arrogância Ancestral",

                descricao:
                    "Recebe -2 em testes sociais com raças mais jovens, como humanos e orcs.",

                modificadores: {

                    testesSociaisContraRacasJovens: -2

                }

            }

        ]

    },


    // =====================================================
    // SYLVARA
    // =====================================================

    sylvara: {

        id: "sylvara",

        nome: "Sylvara",

        descricao:
            "Uma raça conectada à natureza, à cura e às criaturas da floresta.",

        buffs: [

            {

                nome: "Conexão com a Natureza",

                descricao:
                    "Recebe +20% em efeitos de cura recebidos e +2 em testes relacionados à natureza, sobrevivência e cura.",

                modificadores: {

                    curaRecebidaPercentual: 20,

                    natureza: 2,

                    sobrevivencia: 2,

                    medicina: 2

                }

            },

            {

                nome: "Resiliência Silenciosa",

                descricao:
                    "Uma vez por descanso curto, pode se conectar a uma área com vegetação para recuperar 15% de Vida e Stamina sem gastar recursos, permanecendo imóvel por 1 rodada.",

                modificadores: {

                    curaVidaPercentual: 15,

                    curaStaminaPercentual: 15,

                    usosPorDescansoCurto: 1

                }

            },

            {

                nome: "Espírito Gentil",

                descricao:
                    "Recebe vantagem em testes sociais com animais, plantas mágicas e criaturas da floresta, representada por um bônus de +4.",

                modificadores: {

                    testesSociaisCriaturasDaFloresta: 4

                }

            }

        ],

        debuffs: [

            {

                nome: "Rejeição Ancestral",

                descricao:
                    "Recebe -2 em testes sociais com Elfos puros e -2 com humanos que temem sua herança élfica.",

                modificadores: {

                    testesSociaisComElfosPuros: -2,

                    testesSociaisComHumanosTemerosos: -2

                }

            },

            {

                nome: "Raros e Isolados",

                descricao:
                    "Sua população extremamente reduzida dificulta encontrar aliados e informações sobre a própria raça.",

                modificadores: {}

            }

        ]

    },


    // =====================================================
    // ORC
    // =====================================================

    orc: {

        id: "orc",

        nome: "Orc",

        descricao:
            "Uma raça de força brutal, resistência e instinto de sobrevivência.",

        buffs: [

            {

                nome: "Força Brutal",

                descricao:
                    "Recebe +15% de dano em Golpes Pesados e +2 em Atletismo, Intimidação e Armas Brancas.",

                modificadores: {

                    danoGolpesPesadosPercentual: 15,

                    atletismo: 2,

                    intimidacao: 2,

                    armasBrancas: 2

                }

            },

            {

                nome: "Sangue Fervente",

                descricao:
                    "Ao cair abaixo de 30% de Vida, recebe vantagem em todas as rolagens de ataque físico pelas próximas 2 rodadas.",

                modificadores: {

                    vidaGatilhoPercentual: 30,

                    duracaoRodadas: 2,

                    vantagemAtaquesFisicos: true

                }

            },

            {

                nome: "Pele de Aço",

                descricao:
                    "Recebe 20% de redução de dano físico quando está em combate corpo a corpo.",

                modificadores: {

                    reducaoDanoFisicoPercentual: 20,

                    apenasCombateCorpoACorpo: true

                }

            }

        ],

        debuffs: [

            {

                nome: "Falta de Sutileza",

                descricao:
                    "Recebe -3 em testes de perícias sociais que exigem finesse, discrição ou enganação.",

                modificadores: {

                    testesSociaisDeSutileza: -3

                }

            },

            {

                nome: "Impulsividade",

                descricao:
                    "Recebe -3 em testes de resistência mental contra efeitos de medo ou provocação.",

                modificadores: {

                    resistenciaMentalMedoProvocacao: -3

                }

            },

            {

                nome: "Estigma Selvagem",

                descricao:
                    "Sofre preconceito em cidades civilizadas, recebendo -3 em testes sociais com humanos, elfos e outras raças consideradas civilizadas.",

                modificadores: {

                    testesSociaisComRacasCivilizadas: -3

                }

            }

        ]

    },


    // =====================================================
    // KHAAJIT
    // =====================================================

    khaajit: {

        id: "khaajit",

        nome: "Khaajit",

        descricao:
            "Uma raça felina nômade, ágil e naturalmente adaptada à escuridão.",

        buffs: [

            {

                nome: "Reflexos Felinos",

                descricao:
                    "Recebe +2 em Furtividade, Acrobacia e Percepção. Nunca fica no estado 'Caído' ao ser derrubado ou cair de altura, reequilibrando-se automaticamente.",

                modificadores: {

                    furtividade: 2,

                    acrobacia: 2,

                    percepcao: 2,

                    imuneEstadoCaido: true

                }

            },

            {

                nome: "Comerciante Nômade",

                descricao:
                    "Recebe +2 em Persuasão, Enganação e perícias relacionadas a comércio ou negociação.",

                modificadores: {

                    persuasao: 2,

                    enganacao: 2,

                    comercio: 2

                }

            },

            {

                nome: "Visão Noturna",

                descricao:
                    "Possui excelente visão no escuro e em ambientes com pouca luz, sem sofrer penalidades.",

                modificadores: {

                    visaoNoturna: true

                }

            }

        ],

        debuffs: [

            {

                nome: "Impulsividade Felina",

                descricao:
                    "Recebe -2 em testes de Vontade e Resistência Mental.",

                modificadores: {

                    vontade: -2,

                    resistenciaMental: -2

                }

            },

            {

                nome: "Estigma de Nômade",

                descricao:
                    "Em algumas cidades conservadoras, sofre preconceito por ser visto como ladrão ou oportunista, recebendo -2 em testes sociais iniciais.",

                modificadores: {

                    testesSociaisIniciaisCidadesConservadoras: -2

                }

            }

        ]

    },


    // =====================================================
    // ARGONIANO
    // =====================================================

    argoniano: {

        id: "argoniano",

        nome: "Argoniano",

        descricao:
            "Uma raça reptiliana adaptada a ambientes aquáticos e úmidos, dotada de grande capacidade regenerativa.",

        buffs: [

            {

                nome: "Regeneração Ancestral",

                descricao:
                    "Pode ativar sua regeneração para recuperar 20% de HP por rodada. Membros perdidos são recuperados após 2 rodadas com a regeneração ativa, e efeitos de sangramento duram apenas 1 rodada.",

                modificadores: {

                    regeneracaoVidaPorRodadaPercentual: 20,

                    regeneracaoMembroRodadas: 2,

                    duracaoSangramentoRodadas: 1

                }

            },

            {

                nome: "Respiração Anfíbia",

                descricao:
                    "Pode respirar normalmente debaixo d'água por tempo ilimitado e recebe +2 em testes de Natação e Sobrevivência em ambientes aquáticos ou úmidos.",

                modificadores: {

                    respiracaoAquatica: true,

                    natacao: 2,

                    sobrevivenciaAmbientesAquaticos: 2

                }

            },

            {

                nome: "Furtividade Escamosa",

                descricao:
                    "Recebe +2 em Furtividade, Acrobacia e Sobrevivência. Seu corpo produz pouco ruído ao se mover.",

                modificadores: {

                    furtividade: 2,

                    acrobacia: 2,

                    sobrevivencia: 2,

                    movimentoSilencioso: true

                }

            }

        ],

        debuffs: [

            {

                nome: "Preconceito Repulsivo",

                descricao:
                    "Recebe -2 em testes sociais na maioria das cidades, onde são vistos como perigosos ou repulsivos.",

                modificadores: {

                    testesSociaisEmCidades: -2

                }

            },

            {

                nome: "Raros e Isolados",

                descricao:
                    "Sua população reduzida dificulta encontrar aliados e informações sobre sua própria raça.",

                modificadores: {}

            }

        ]

    },


    // =====================================================
    // DRAKNIR
    // =====================================================

    draknir: {

        id: "draknir",

        nome: "Draknir",

        descricao:
            "Descendentes de dragões ancestrais, os Draknir possuem força elemental, escamas resistentes e características dracônicas.",

        buffs: [

            {

                nome: "Sopro Dracônico",

                descricao:
                    "Escolhe um elemento para seu sopro. O ataque não consome Mana nem Stamina, causa 80% de dano e pode aplicar efeitos relacionados ao elemento escolhido. Pode ser usado a cada 2 rodadas.",

                modificadores: {

                    danoPercentual: 80,

                    custoMana: 0,

                    custoStamina: 0,

                    cooldownRodadas: 2,

                    elementoEscolhido: true

                }

            },

            {

                nome: "Escamas Ancestrais",

                descricao:
                    "Recebe +20% de resistência ao elemento escolhido para o Sopro Dracônico e +2 em testes de Vigor e Intimidação.",

                modificadores: {

                    resistenciaElementoEscolhidoPercentual: 20,

                    vigor: 2,

                    intimidacao: 2

                }

            },

            {

                nome: "Herança das Alturas",

                descricao:
                    "Recebe +2 em testes de Atletismo relacionados a escalada, voo planado e sobrevivência em ambientes montanhosos ou rochosos.",

                modificadores: {

                    atletismoEscalada: 2,

                    atletismoVooPlanado: 2,

                    sobrevivenciaAmbientesMontanhosos: 2

                }

            }

        ],

        debuffs: [

            {

                nome: "Sangue Dracônico Visível",

                descricao:
                    "Recebe -2 em testes sociais em regiões que temem ou caçam descendentes dracônicos.",

                modificadores: {

                    testesSociaisRegioesHostis: -2

                }

            },

            {

                nome: "Asas Incômodas",

                descricao:
                    "As asas e a cauda dificultam o uso de armaduras e roupas comuns, causando -3 em testes de Disfarce ou Furtividade em ambientes urbanos.",

                modificadores: {

                    disfarceAmbienteUrbano: -3,

                    furtividadeAmbienteUrbano: -3

                }

            },

            {

                nome: "Orgulho Dracônico",

                descricao:
                    "Recebe -3 em testes de Diplomacia quando sua superioridade ancestral é questionada.",

                modificadores: {

                    diplomaciaQuandoQuestionado: -3

                }

            }

        ]

    },


    // =====================================================
    // UMBRYS
    // =====================================================

    umbrys: {

        id: "umbrys",

        nome: "Umbrys",

        descricao:
            "Uma raça ligada às sombras e à noite, capaz de manipular a escuridão para ocultar-se e deslocar-se.",

        buffs: [

            {

                nome: "Manto das Sombras",

                descricao:
                    "Pode ficar invisível por até 2 rodadas. Após o uso, a habilidade possui um cooldown de 2 rodadas.",

                modificadores: {

                    invisibilidadeRodadas: 2,

                    cooldownRodadas: 2

                }

            },

            {

                nome: "Passo das Sombras",

                descricao:
                    "Pode se teleportar entre sombras próximas. Uma vez por rodada, pode usar o teletransporte para tentar esquivar completamente de um ataque, realizando uma rolagem de 1d20 + bônus.",

                modificadores: {

                    teleporteSombras: true,

                    esquivaPorTeleportePorRodada: 1

                }

            },

            {

                nome: "Filho da Noite",

                descricao:
                    "Recebe +2 em Furtividade, Percepção e Sobrevivência durante a noite ou em ambientes escuros.",

                modificadores: {

                    furtividadeAmbienteEscuro: 2,

                    percepcaoAmbienteEscuro: 2,

                    sobrevivenciaAmbienteEscuro: 2

                }

            }

        ],

        debuffs: [

            {

                nome: "Vulnerabilidade Solar",

                descricao:
                    "Durante o dia ou sob luz solar direta, não pode ficar invisível e seu teletransporte pelas sombras funciona apenas em distâncias muito curtas.",

                modificadores: {

                    invisibilidadeSobLuzSolar: false,

                    teleporteSobLuzSolar: "limitado"

                }

            },

            {

                nome: "Fraqueza Arcana",

                descricao:
                    "Recebe 20% de dano extra de magias.",

                modificadores: {

                    danoMagicoRecebidoPercentual: 20

                }

            },

            {

                nome: "Rejeição Universal",

                descricao:
                    "Recebe -2 em todos os testes sociais em cidades e vilarejos, onde são frequentemente temidos, expulsos ou atacados.",

                modificadores: {

                    testesSociaisCidadesEVilarejos: -2

                }

            },

            {

                nome: "Existência Solitária",

                descricao:
                    "São extremamente raros e isolados, dificultando a formação de alianças.",

                modificadores: {}

            }

        ]

    },


    // =====================================================
    // AETHERION
    // =====================================================

    aetherion: {

        id: "aetherion",

        nome: "Aetherion",

        descricao:
            "Uma raça rara associada à luz, à energia espiritual e a poderes de natureza celestial.",

        buffs: [

            {

                nome: "Passo da Luz",

                descricao:
                    "Durante o dia ou em ambientes bem iluminados, pode se teleportar entre pontos de luz. À noite, a habilidade depende de áreas com iluminação forte.",

                modificadores: {

                    teleporteEntrePontosDeLuz: true

                }

            },

            {

                nome: "Aura Luminosa",

                descricao:
                    "Recebe +2 em Persuasão, Diplomacia e perícias sociais. Pode ativar uma Explosão de Luz até 2 vezes por combate, causando dano de luz e deixando inimigos próximos cegos e atordoados por 2 rodadas.",

                modificadores: {

                    persuasao: 2,

                    diplomacia: 2,

                    periciasSociais: 2,

                    explosaoDeLuzPorCombate: 2,

                    duracaoCegueiraEAtordoamentoRodadas: 2

                }

            },

            {

                nome: "Filho da Luz",

                descricao:
                    "Recebe +2 em perícias relacionadas à cura, conhecimento arcano ou espiritual. Habilidades da classe Restaurador têm seus efeitos melhorados em 15%.",

                modificadores: {

                    periciasCura: 2,

                    conhecimentoArcano: 2,

                    conhecimentoEspiritual: 2,

                    efeitosRestauradorPercentual: 15

                }

            }

        ],

        debuffs: [

            {

                nome: "Fraqueza Arcana",

                descricao:
                    "Recebe 20% de dano extra de magias.",

                modificadores: {

                    danoMagicoRecebidoPercentual: 20

                }

            },

            {

                nome: "Dependência da Luz",

                descricao:
                    "Em ambientes completamente escuros, seus poderes de teletransporte ficam muito limitados e recebe -3 em testes de Vigor e Furtividade.",

                modificadores: {

                    vigorAmbienteCompletamenteEscuro: -3,

                    furtividadeAmbienteCompletamenteEscuro: -3,

                    teleporteAmbienteCompletamenteEscuro: "limitado"

                }

            },

            {

                nome: "Incapacidade Necromântica",

                descricao:
                    "É incapaz de utilizar magias de roubo de vida, comandar mortos ou efeitos semelhantes de natureza necromântica.",

                modificadores: {

                    necromanciaPermitida: false

                }

            },

            {

                nome: "Raros e Adorados",

                descricao:
                    "Sua raridade e aparência divina podem fazer com que sejam perseguidos por cultos, reis e outras pessoas que desejam sua presença ou poder.",

                modificadores: {}

            }

        ]

    },


    // =====================================================
    // AUTOMOTOS
    // =====================================================

    automotos: {

        id: "automotos",

        nome: "Automotos",

        descricao:
            "Relíquias mecânicas de uma civilização perdida, movidas por tecnologia ancestral e uma Gema de Alma.",

        buffs: [

            {

                nome: "Corpo Mecânico",

                descricao:
                    "Reduz em 30% todo dano físico recebido.",

                modificadores: {

                    danoFisicoRecebidoPercentual: -30

                }

            },

            {

                nome: "Evolução Modular",

                descricao:
                    "Não possui uma classe fixa. A cada nível, ganha 2 habilidades novas, criadas em conjunto pelo jogador e pelo Mestre, podendo ser mecânicas, mágicas ou híbridas.",

                modificadores: {

                    habilidadesExtrasPorNivel: 2,

                    classeFixa: false

                }

            },

            {

                nome: "Núcleo Eterno",

                descricao:
                    "É imune a efeitos que afetam seres vivos, como venenos, doenças, envelhecimento e medo natural. Pode ser consertado ou melhorado por meio de engenharia e runas.",

                modificadores: {

                    imuneVeneno: true,

                    imuneDoencas: true,

                    imuneEnvelhecimento: true,

                    imuneMedoNatural: true

                }

            }

        ],

        debuffs: [

            {

                nome: "Vulnerabilidade Elétrica",

                descricao:
                    "Recebe 20% de dano extra de ataques e magias elétricas.",

                modificadores: {

                    danoEletricoRecebidoPercentual: 20

                }

            },

            {

                nome: "Dependência do Núcleo",

                descricao:
                    "Se a Gema de Alma for destruída ou removida, o Automoto é imediatamente desativado e permanece incapacitado até ser reparado.",

                modificadores: {

                    dependenciaGemaDeAlma: true

                }

            },

            {

                nome: "Raros e Procurados",

                descricao:
                    "Por serem relíquias de uma civilização perdida, podem ser caçados por colecionadores, magos ou facções interessadas em estudar ou controlar sua tecnologia ancestral.",

                modificadores: {}

            }

        ]

    },


    // =====================================================
    // FÚNGICOS
    // =====================================================

    fungicos: {

        id: "fungicos",

        nome: "Fúngicos",

        descricao:
            "Uma raça de origem fúngica, adaptada a ambientes úmidos e escuros e dotada de uma mente coletiva peculiar.",

        buffs: [

            {

                nome: "Esporos Regenerativos",

                descricao:
                    "Em ambientes úmidos ou escuros, recupera 10% de sua Vida por turno.",

                modificadores: {

                    regeneracaoVidaPorTurnoPercentual: 10,

                    exigeAmbienteUmidoOuEscuro: true

                }

            },

            {

                nome: "Mente de Colmeia",

                descricao:
                    "É imune a feitiços de controle mental e pode se comunicar telepaticamente com aliados a curta distância.",

                modificadores: {

                    imuneControleMental: true,

                    comunicacaoTelepaticaCurtaDistancia: true

                }

            },

            {

                nome: "Corpo Esponjoso",

                descricao:
                    "Reduz o dano de quedas pela metade e possui resistência natural a concussões, reduzindo esse tipo de dano em 50%.",

                modificadores: {

                    danoDeQuedaPercentual: -50,

                    danoConcussaoPercentual: -50

                }

            }

        ],

        debuffs: [

            {

                nome: "Secura Extrema",

                descricao:
                    "Recebe 20% de dano extra de fogo. Além disso, ambientes quentes impõem -3 em rolagens.",

                modificadores: {

                    danoFogoRecebidoPercentual: 20,

                    penalidadeAmbienteQuente: -3

                }

            },

            {

                nome: "Aparência Aberrante",

                descricao:
                    "Possui extrema dificuldade em testes de Diplomacia ou Carisma com raças urbanas, recebendo -5.",

                modificadores: {

                    diplomaciaComRacasUrbanas: -5,

                    carismaComRacasUrbanas: -5

                }

            }

        ]

    },


    // =====================================================
    // AERIS
    // =====================================================

    aeris: {

        id: "aeris",

        nome: "Aeris",

        descricao:
            "Uma raça extremamente leve e adaptada aos céus, capaz de se mover com velocidade e precisão incomuns.",

        buffs: [

            {

                nome: "Leveza Celestial",

                descricao:
                    "Recebe +20% de Evasiva para reduzir danos de ataques e +3 de bônus em rolagens de Evasiva.",

                modificadores: {

                    evasivaPercentual: 20,

                    rolagemEvasiva: 3

                }

            },

            {

                nome: "Visão de Rapina",

                descricao:
                    "Enxerga perfeitamente através de neblina, fumaça e tempestades naturais.",

                modificadores: {

                    visaoAtravessaNeblina: true,

                    visaoAtravessaFumaca: true,

                    visaoAtravessaTempestadesNaturais: true

                }

            }

        ],

        debuffs: [

            {

                nome: "Fraqueza Óssea",

                descricao:
                    "Por possuírem ossos mais ocos e leves, recebem 20% de dano extra quando atingidos por um golpe físico crítico.",

                modificadores: {

                    danoCriticoFisicoRecebidoPercentual: 20

                }

            },

            {

                nome: "Vertigem de Ferro",

                descricao:
                    "Usar armaduras pesadas ou armas pesadas remove o bônus de Leveza Celestial.",

                modificadores: {

                    armaduraPesadaRemoveLeveza: true,

                    armaPesadaRemoveLeveza: true

                }

            }

        ]

    }

};