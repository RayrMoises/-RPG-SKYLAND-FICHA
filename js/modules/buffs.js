// =========================================================
// MÓDULO DE BUFFS/DEBUFFS (Classes e Raças)
// =========================================================

import { pericias } from "../data/pericias.js";
import { setModificadoresClasse, setModificadoresRaca, getModificadoresTotais } from "../state.js";
import { atualizarAtributosVisuais } from "./atributos.js";
import { definirModificadorPericia } from "./pericias.js";

// =========================================================
// APLICAR MODIFICADORES DE CLASSE
// =========================================================
export function aplicarClasse(classeData) {
    if (!classeData) {
        setModificadoresClasse({});
        atualizarSistema();
        return;
    }

    const todosMods = {};
    classeData.buffs.forEach(buff => {
        if (buff.modificadores) Object.assign(todosMods, buff.modificadores);
    });
    classeData.debuffs.forEach(debuff => {
        if (debuff.modificadores) Object.assign(todosMods, debuff.modificadores);
    });

    setModificadoresClasse(todosMods);
    atualizarSistema();
}

// =========================================================
// APLICAR MODIFICADORES DE RAÇA
// =========================================================
export function aplicarRaca(racaData) {
    if (!racaData) {
        setModificadoresRaca({});
        atualizarSistema();
        return;
    }

    const todosMods = {};
    racaData.buffs.forEach(buff => {
        if (buff.modificadores) Object.assign(todosMods, buff.modificadores);
    });
    racaData.debuffs.forEach(debuff => {
        if (debuff.modificadores) Object.assign(todosMods, debuff.modificadores);
    });

    setModificadoresRaca(todosMods);
    atualizarSistema();
}

// =========================================================
// APLICAR AO SISTEMA
// =========================================================
function atualizarSistema() {
    // Atualiza atributos visuais
    atualizarAtributosVisuais();

    // Atualiza modificadores de perícias
    const totalMods = getModificadoresTotais();
    const periciasIds = Object.keys(pericias);
    periciasIds.forEach(idPericia => {
        if (totalMods[idPericia] !== undefined) {
            definirModificadorPericia(idPericia, totalMods[idPericia]);
        } else {
            definirModificadorPericia(idPericia, 0);
        }
    });
}

// =========================================================
// EXPORTAR GETTER PARA ATRIBUTOS
// =========================================================
export { getModificadoresTotais };