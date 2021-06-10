import { Token } from './models/token.js';

export function identificaTokensEmLinhas(linhas, simbolos, palavrasReservadas) {
    linhas.forEach(l => {
        let tokens = [];
        let removidoEspaco = l.codigo.replaceAll(' ', '🤡 🤡').replaceAll('\n', '🤡\n🤡').split('🤡');
        simbolos.forEach(simbolo => {
            for (let i = 0; i < removidoEspaco.length; i++) {
                removidoEspaco[i] = removidoEspaco[i].replaceAll(simbolo.token, '🤬' + simbolo.token + '🤬');
            }
        });
        for (let i = 0; i < removidoEspaco.length; i++) {
            removidoEspaco[i] = removidoEspaco[i].split('🤬');
        }
        let removidoVazio = removidoEspaco.flat(Infinity).filter(s => s != '');
        let lastTokenPosition = 0;
        for (let token of removidoVazio) {
            let codigoJs;
            if (!(codigoJs = palavrasReservadas.find(p => p.token == token)?.codigoJs)) {
                if (!(codigoJs = simbolos.find(s => s.token == token)?.codigoJs)) {
                    codigoJs = token;
                }
            }
            let posicao = { linha: l.posicao, inicio: lastTokenPosition, fim: lastTokenPosition + token.length - 1 };
            lastTokenPosition += token.length;

            tokens.push(new Token(token, codigoJs, posicao, undefined))
        };
        l.tokens = tokens;
    });
    return linhas;
}