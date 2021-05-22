import { Reservadas } from './reservadas.js';

export function categorizacaoDeTokens(linhas) {
    let tokens = [];
    linhas.forEach(linha => {
        linha.tokens.forEach(token => {
            tokens.push(token);
        })
    });

    let tokensRestantes = [...tokens];
    let tokensCategorizados = { ...Reservadas };
    let tokensToFilter = [];

    for (let exp of tokensCategorizados.valores) {
        exp.ocorrencias = [];
        for (let token of tokensRestantes) {
            if (exp.token.test(token.token)) {
                exp.ocorrencias.push(token);
                tokensToFilter.push(token.token);
            }
        }
    }

    for (let categoria in Reservadas) {
        for (let reservada of Reservadas[categoria]) {
            reservada.ocorrencias = []
            for (let token of tokensRestantes) {
                if (reservada.token == token.token) {
                    if (token.token == '<') {
                        token.token = '&lt';
                    }

                    if (token.token == '>') {
                        token.token = '&gt';
                    }
                    reservada.ocorrencias.push(token);
                    tokensToFilter.push(token.token);

                }
            }
        }
    }

    tokensToFilter.filter((v, i, s) => { s.indexOf(v) == i });
    tokensToFilter.forEach(token => {
        tokensRestantes = tokensRestantes.filter(t => t.token != token);
    })

    tokensCategorizados.naoIdentificados = tokensRestantes;
    return tokensCategorizados;
}