// =========================================================
// MÓDULO DE GERENCIAMENTO DE IMAGEM DO PERSONAGEM
// =========================================================

// Estado da imagem (dataURL ou null)
let imagemDataURL = null;

// Elementos DOM
const previewContainer = document.querySelector('.imagem-preview');
const btnAdicionar = document.querySelector('.acoes-imagem button:first-child');
const btnRemover = document.querySelector('.acoes-imagem button:last-child');

// Cria um input file oculto
const fileInput = document.createElement('input');
fileInput.type = 'file';
fileInput.accept = 'image/*';
fileInput.style.display = 'none';
document.body.appendChild(fileInput);

// =========================================================
// FUNÇÃO PARA CARREGAR IMAGEM
// =========================================================
function carregarImagem(file) {
    const reader = new FileReader();
    reader.onload = (e) => {
        imagemDataURL = e.target.result;
        exibirImagem(imagemDataURL);
    };
    reader.readAsDataURL(file);
}

// =========================================================
// FUNÇÃO PARA EXIBIR IMAGEM
// =========================================================
function exibirImagem(dataURL) {
    // Limpa o conteúdo do preview
    previewContainer.innerHTML = '';
    
    // Cria a tag img
    const img = document.createElement('img');
    img.src = dataURL;
    img.alt = 'Imagem do personagem';
    img.style.width = '100%';
    img.style.height = '100%';
    img.style.objectFit = 'cover';
    img.style.borderRadius = 'var(--raio-medio)';
    
    previewContainer.appendChild(img);
    
    // Habilita o botão remover
    btnRemover.disabled = false;
}

// =========================================================
// FUNÇÃO PARA REMOVER IMAGEM (volta ao estado original)
// =========================================================
function removerImagem() {
    imagemDataURL = null;
    previewContainer.innerHTML = `
        <span class="icone-imagem">✦</span>
        <p>IMAGEM DO<br>PERSONAGEM</p>
    `;
    btnRemover.disabled = true;
}

// =========================================================
// CONFIGURAR EVENTOS
// =========================================================
export function configurarImagem() {
    // Botão "ADICIONAR IMAGEM"
    btnAdicionar.addEventListener('click', () => {
        fileInput.click();
    });

    // Quando o usuário selecionar um arquivo
    fileInput.addEventListener('change', (event) => {
        const file = event.target.files[0];
        if (file) {
            carregarImagem(file);
        }
        // Resetar o input para permitir selecionar a mesma imagem novamente
        fileInput.value = '';
    });

    // Botão "REMOVER"
    btnRemover.addEventListener('click', removerImagem);

    // Inicia com remover desabilitado (sem imagem)
    btnRemover.disabled = true;
}