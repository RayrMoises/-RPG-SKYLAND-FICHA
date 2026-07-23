// =========================================================
// ESTADO GLOBAL DOS MODIFICADORES
// =========================================================

let modificadoresClasse = {};
let modificadoresRaca = {};

export function setModificadoresClasse(mods) {
    modificadoresClasse = mods || {};
}

export function setModificadoresRaca(mods) {
    modificadoresRaca = mods || {};
}

export function getModificadoresTotais() {
    const total = {};
    const fontes = [modificadoresClasse, modificadoresRaca];
    fontes.forEach(fonte => {
        Object.keys(fonte).forEach(chave => {
            const valor = fonte[chave];
            if (typeof valor === 'number') {
                total[chave] = (total[chave] || 0) + valor;
            }
        });
    });
    return total;
}