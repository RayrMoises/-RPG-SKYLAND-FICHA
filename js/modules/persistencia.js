// =========================================================
// MÓDULO DE PERSISTÊNCIA (localStorage)
// =========================================================
//
// Salva e carrega todo o estado da ficha.
//
// =========================================================

const CHAVE = 'skyland_ficha';

// =========================================================
// SALVAR DADOS
// =========================================================
export function salvarDados(dados) {
    try {
        const json = JSON.stringify(dados);
        localStorage.setItem(CHAVE, json);
        console.log('✅ Dados salvos com sucesso.');
    } catch (e) {
        console.error('❌ Erro ao salvar dados:', e);
    }
}

// =========================================================
// CARREGAR DADOS
// =========================================================
export function carregarDados() {
    try {
        const dados = localStorage.getItem(CHAVE);
        if (!dados) return null;
        return JSON.parse(dados);
    } catch (e) {
        console.error('❌ Erro ao carregar dados:', e);
        return null;
    }
}

// =========================================================
// LIMPAR DADOS (opcional, pode ser usado para debug)
// =========================================================
export function limparDados() {
    localStorage.removeItem(CHAVE);
    console.log('🗑️ Dados removidos.');
}