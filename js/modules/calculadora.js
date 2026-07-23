// js/modules/calculadora.js

export function renderizarCalculadora() {
    const container = document.querySelector('#aba-calculadora');
    if (!container) return;

    container.innerHTML = `

        <div class="calculadora-wrapper">
            <div class="calculadora-display">
                <div class="calculadora-historico" id="calc-historico"></div>
                <div class="calculadora-resultado" id="calc-resultado">0</div>
            </div>
            <div class="calculadora-botoes">
                <button data-valor="C" class="calc-btn calc-btn-limpar">C</button>
                <button data-valor="CE" class="calc-btn calc-btn-limpar">CE</button>
                <button data-valor="%" class="calc-btn calc-btn-operador">%</button>
                <button data-valor="/" class="calc-btn calc-btn-operador">÷</button>

                <button data-valor="7" class="calc-btn calc-btn-numero">7</button>
                <button data-valor="8" class="calc-btn calc-btn-numero">8</button>
                <button data-valor="9" class="calc-btn calc-btn-numero">9</button>
                <button data-valor="*" class="calc-btn calc-btn-operador">×</button>

                <button data-valor="4" class="calc-btn calc-btn-numero">4</button>
                <button data-valor="5" class="calc-btn calc-btn-numero">5</button>
                <button data-valor="6" class="calc-btn calc-btn-numero">6</button>
                <button data-valor="-" class="calc-btn calc-btn-operador">−</button>

                <button data-valor="1" class="calc-btn calc-btn-numero">1</button>
                <button data-valor="2" class="calc-btn calc-btn-numero">2</button>
                <button data-valor="3" class="calc-btn calc-btn-numero">3</button>
                <button data-valor="+" class="calc-btn calc-btn-operador">+</button>

                <button data-valor="0" class="calc-btn calc-btn-numero calc-btn-zero">0</button>
                <button data-valor="." class="calc-btn calc-btn-numero">,</button>
                <button data-valor="=" class="calc-btn calc-btn-igual">=</button>
            </div>
        </div>
    `;

    // Adicionar eventos
    configurarCalculadora();
}

function configurarCalculadora() {
    let displayResultado = document.getElementById('calc-resultado');
    let displayHistorico = document.getElementById('calc-historico');
    let expressao = '';
    let resultado = '0';
    let ultimoResultado = null;

    function atualizarDisplay() {
        displayResultado.textContent = resultado;
        displayHistorico.textContent = expressao;
    }

    function limparTudo() {
        expressao = '';
        resultado = '0';
        ultimoResultado = null;
        atualizarDisplay();
    }

    function limparEntrada() {
        if (resultado !== '0') {
            resultado = '0';
            atualizarDisplay();
        }
    }

    function adicionarNumero(valor) {
        if (resultado === '0' && valor !== '.') {
            resultado = valor;
        } else {
            if (resultado.length < 15) {
                resultado += valor;
            }
        }
        atualizarDisplay();
    }

    function adicionarOperador(op) {
        // Se já houver expressão, tenta calcular antes de adicionar novo operador
        if (expressao && resultado) {
            calcular();
        }
        expressao = resultado + ' ' + op + ' ';
        resultado = '0';
        atualizarDisplay();
    }

    function calcular() {
        let expressaoCompleta = expressao + resultado;
        try {
            // Substituir operadores por equivalentes JS
            let expr = expressaoCompleta.replace(/×/g, '*').replace(/÷/g, '/');
            // Evitar eval malicioso, mas é uma calculadora simples
            let resultadoCalc = Function('"use strict"; return (' + expr + ')')();
            if (typeof resultadoCalc === 'number' && !isNaN(resultadoCalc)) {
                resultado = String(resultadoCalc);
                expressao = '';
                ultimoResultado = resultado;
                atualizarDisplay();
            } else {
                throw new Error('Erro');
            }
        } catch (e) {
            resultado = 'Erro';
            atualizarDisplay();
        }
    }

    function tratarPercentual() {
        // Calcula percentual do número atual: valor / 100
        let num = parseFloat(resultado);
        if (!isNaN(num)) {
            resultado = String(num / 100);
            atualizarDisplay();
        }
    }

    // Event listeners
    document.querySelectorAll('.calc-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const valor = btn.dataset.valor;

            if (valor === 'C') {
                limparTudo();
                return;
            }
            if (valor === 'CE') {
                limparEntrada();
                return;
            }
            if (valor === '%') {
                tratarPercentual();
                return;
            }
            if (valor === '=') {
                if (expressao) {
                    calcular();
                }
                return;
            }
            if (valor === '+' || valor === '-' || valor === '*' || valor === '/') {
                adicionarOperador(valor);
                return;
            }
            // Números e ponto
            adicionarNumero(valor);
        });
    });
}