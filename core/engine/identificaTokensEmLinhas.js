import { Token } from './models/token.js';

export function identificaTokensEmLinhas(linhas, simbolos, palavrasReservadas) {
    linhas.forEach(l => {
        let tokens = [];
        let separadoPorEspaco = l.codigo.split(' ');
        let removidoEspaco = separadoPorEspaco.map(t => t.trim());
        simbolos.forEach(simbolo => {
            for (i = 0; i < removidoEspaco.length; i++) {
                removidoEspaco[i] = removidoEspaco[i].replaceAll(simbolo.token, '🤬' + simbolo.token + '🤬');
            }
        });
        for (i = 0; i < removidoEspaco.length; i++) {
            removidoEspaco[i] = removidoEspaco[i].split('🤬');
        }
        let removidoVazio = removidoEspaco.flat(Infinity).filter(s => s != '');
        removidoVazio.forEach(token => {
            let codigoJs;
            if (!(codigoJs = palavrasReservadas.find(p => p.token == token)?.codigoJs)) {
                if (!(codigoJs = simbolos.find(s => s.token == token)?.codigoJs)) {
                    codigoJs = token;
                }
            }
            let posicao = { inicio: l.codigo.indexOf(token), fim: l.codigo.indexOf(token) + token.length - 1 };
            tokens.push(new Token(token, codigoJs, posicao, undefined))
        });
        l.tokens = tokens;
    });
    return linhas;
}