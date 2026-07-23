// =========================================================
// MÓDULO DE ANOTAÇÕES
// =========================================================
//
// Responsável por:
// - Renderizar os campos de anotação.
// - Salvar/carregar anotações do localStorage (futuro).
//
// =========================================================

// Dados das seções de anotação
const secoes = [
    {
        id: 'inventario',
        titulo: '📦 INVENTÁRIO',
        descricao: 'Liste todos os itens, equipamentos, poções e tesouros que o personagem possui.',
        placeholder: 'Ex: Espada longa, Poção de cura, 50 moedas de ouro...'
    },
    {
        id: 'habilidades',
        titulo: '⚡ HABILIDADES',
        descricao: 'Descreva as habilidades especiais, talentos, magias e técnicas do personagem.',
        placeholder: 'Ex: Golpe relâmpago, Cura avançada, Furtividade noturna...'
    },
    {
        id: 'historia',
        titulo: '📜 HISTÓRIA DO PERSONAGEM',
        descricao: 'Conte a história de vida, origens, motivações e traços marcantes do personagem.',
        placeholder: 'Ex: Nascido nas montanhas, foi treinado por um mestre guerreiro...'
    },
    {
        id: 'anotacoes_sessao',
        titulo: '📝 ANOTAÇÕES DA SESSÃO',
        descricao: 'Registre eventos importantes, NPCs, missões, pistas e planejamentos para as próximas sessões.',
        placeholder: 'Ex: Conversamos com o ancião, ele nos deu a chave da masmorra...'
    }
];

// Estado das anotações (em memória)
let anotacoes = {};

// Inicializa com strings vazias
secoes.forEach(sec => {
    anotacoes[sec.id] = '';
});

// =========================================================
// SALVAR E CARREGAR (localStorage)
// =========================================================
function salvarAnotacoes() {
    localStorage.setItem('skyland_anotacoes', JSON.stringify(anotacoes));
}

function carregarAnotacoes() {
    const dados = localStorage.getItem('skyland_anotacoes');
    if (dados) {
        try {
            const parsed = JSON.parse(dados);
            // Mescla com as chaves padrão (para evitar chaves faltando)
            secoes.forEach(sec => {
                if (parsed[sec.id] !== undefined) {
                    anotacoes[sec.id] = parsed[sec.id];
                }
            });
        } catch (e) {
            console.warn('Erro ao carregar anotações:', e);
        }
    }
}

// =========================================================
// RENDERIZAR ABA DE ANOTAÇÕES
// =========================================================
export function renderizarAnotacoes() {
    // Carrega do localStorage se existir
    carregarAnotacoes();

    const container = document.querySelector('#aba-anotacoes');
    if (!container) {
        console.warn('Elemento #aba-anotacoes não encontrado.');
        return;
    }

    // Limpa o container (mas mantém a estrutura se houver cabeçalho)
    container.innerHTML = '';

    // Cabeçalho da aba
    const cabecalho = document.createElement('div');
    cabecalho.classList.add('cabecalho-conteudo');
    cabecalho.innerHTML = `
        <span class="etiqueta-secao">DESENVOLVIMENTO DO PERSONAGEM</span>
        <h2>ANOTAÇÕES</h2>
    `;
    container.appendChild(cabecalho);

    // Descrição geral
    const introducao = document.createElement('div');
    introducao.classList.add('introducao-anotacoes');
    introducao.innerHTML = `
        <p>
            Utilize os campos abaixo para registrar todas as informações importantes sobre seu personagem.
            Os dados são salvos automaticamente no navegador.
        </p>
    `;
    container.appendChild(introducao);

    // Grade de anotações (um campo por linha)
    const grade = document.createElement('div');
    grade.classList.add('grade-anotacoes');

    secoes.forEach(sec => {
        const card = document.createElement('div');
        card.classList.add('card-anotacao');

        card.innerHTML = `
            <div class="anotacao-cabecalho">
                <span class="anotacao-indicador">✦</span>
                <h3>${sec.titulo}</h3>
            </div>
            <p class="anotacao-descricao">${sec.descricao}</p>
            <textarea 
                class="anotacao-textarea" 
                id="anotacao-${sec.id}"
                placeholder="${sec.placeholder}"
                rows="5"
            >${anotacoes[sec.id] || ''}</textarea>
        `;

        grade.appendChild(card);
    });

    container.appendChild(grade);

    // Botão de salvar (opcional, mas útil para feedback)
    const botoesContainer = document.createElement('div');
    botoesContainer.classList.add('anotacoes-acoes');
    botoesContainer.innerHTML = `
        <button type="button" class="botao-salvar-anotacoes">💾 SALVAR ANOTAÇÕES</button>
    `;
    container.appendChild(botoesContainer);

    // Configurar eventos
    configurarEventos();
}

// =========================================================
// CONFIGURAR EVENTOS (auto-save e botão)
// =========================================================
function configurarEventos() {
    // Salvar automaticamente ao digitar (debounce)
    const textareas = document.querySelectorAll('.anotacao-textarea');
    textareas.forEach(textarea => {
        textarea.addEventListener('input', () => {
            const id = textarea.id.replace('anotacao-', '');
            anotacoes[id] = textarea.value;
            salvarAnotacoes();
        });
    });

    // Botão salvar (força salvamento e dá feedback)
    const botaoSalvar = document.querySelector('.botao-salvar-anotacoes');
    if (botaoSalvar) {
        botaoSalvar.addEventListener('click', () => {
            // Atualiza manualmente cada campo (já está sincronizado pelo input)
            // Mas podemos forçar a leitura de todos
            document.querySelectorAll('.anotacao-textarea').forEach(textarea => {
                const id = textarea.id.replace('anotacao-', '');
                anotacoes[id] = textarea.value;
            });
            salvarAnotacoes();
            // Feedback visual
            const original = botaoSalvar.textContent;
            botaoSalvar.textContent = '✅ SALVO!';
            setTimeout(() => {
                botaoSalvar.textContent = original;
            }, 1500);
        });
    }
}

// Opcional: função para resetar anotações (caso queira)
export function limparAnotacoes() {
    secoes.forEach(sec => {
        anotacoes[sec.id] = '';
    });
    salvarAnotacoes();
    renderizarAnotacoes();
}

// =========================================================
// EXPORTAR PARA PERSISTÊNCIA
// =========================================================

export function coletarAnotacoes() {
    // Atualiza o estado a partir dos textareas antes de coletar
    document.querySelectorAll('.anotacao-textarea').forEach(textarea => {
        const id = textarea.id.replace('anotacao-', '');
        if (anotacoes[id] !== undefined) {
            anotacoes[id] = textarea.value;
        }
    });
    return { ...anotacoes };
}

export function carregarAnotacoesExternas(dados) {
    if (!dados) return;
    Object.keys(dados).forEach(key => {
        if (anotacoes[key] !== undefined) {
            anotacoes[key] = dados[key];
        }
    });
    // Atualiza os textareas se já existirem
    document.querySelectorAll('.anotacao-textarea').forEach(textarea => {
        const id = textarea.id.replace('anotacao-', '');
        if (anotacoes[id] !== undefined) {
            textarea.value = anotacoes[id];
        }
    });
}