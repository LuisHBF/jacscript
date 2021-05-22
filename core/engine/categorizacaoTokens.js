import { Reservadas } from './index.js';

export function categorizacaoDeTokens(linhas) {
    let tokens = [];
    linhas.forEach(linha => {
        linha.tokens.forEach(token => {
            tokens.push(token);
        })
    });

    let valores = [
        { token: new RegExp(/^vol_[a-zA-Z_$][a-zA-Z_$0-9]*$/), codigoJs: 'VARIAVEL', ocorrencias: [] },
        { token: new RegExp(/^(["])(?:(?=(\\?))\2.)*?\1$/), codigoJs: 'STIRNG', ocorrencias: [] },
        { token: new RegExp(/^[0-9][0-9]*$/), codigoJs: 'INTEIRO', ocorrencias: [] },
        { token: new RegExp(/^[0-9][0-9]*[.][0-9][0-9]*$/), codigoJs: 'FLOAT', ocorrencias: [] },
        { token: new RegExp(/^true|false$/), codigoJs: 'BOOLEAN', ocorrencias: [] },
    ];

    let tokensRestantes = [...tokens];
    let tokensCategorizados = { ...Reservadas };
    let tokensToFilter = [];
    tokensCategorizados.valores = valores;

    for (let exp of tokensCategorizados.valores) {
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