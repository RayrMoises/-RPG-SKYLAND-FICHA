// =========================================================
// MÓDULO DE GERENCIAMENTO DE IMAGEM DO PERSONAGEM
// =========================================================

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

function carregarImagem(file) {
    const reader = new FileReader();
    reader.onload = (e) => {
        imagemDataURL = e.target.result;
        exibirImagem(imagemDataURL);
    };
    reader.readAsDataURL(file);
}

function exibirImagem(dataURL) {
    previewContainer.innerHTML = '';
    const img = document.createElement('img');
    img.src = dataURL;
    img.alt = 'Imagem do personagem';
    img.style.width = '100%';
    img.style.height = '100%';
    img.style.objectFit = 'cover';
    img.style.borderRadius = 'var(--raio-medio)';
    previewContainer.appendChild(img);
    btnRemover.disabled = false;
}

function removerImagem() {
    imagemDataURL = null;
    previewContainer.innerHTML = `
        <span class="icone-imagem">✦</span>
        <p>IMAGEM DO<br>PERSONAGEM</p>
    `;
    btnRemover.disabled = true;
}

export function configurarImagem() {
    btnAdicionar.addEventListener('click', () => fileInput.click());

    fileInput.addEventListener('change', (event) => {
        const file = event.target.files[0];
        if (file) carregarImagem(file);
        fileInput.value = '';
    });

    btnRemover.addEventListener('click', removerImagem);
    btnRemover.disabled = true;
}

export function obterImagemDataURL() {
    return imagemDataURL;
}

export function carregarImagemExterna(dataURL) {
    if (dataURL) {
        imagemDataURL = dataURL;
        exibirImagem(dataURL);
    } else {
        removerImagem();
    }
}