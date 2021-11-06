export function traduzirTokens(codigoEmTokens, tipos, variaveis) {
    let linhasTraduzidas = [];

    for (let linha of codigoEmTokens) {
        linhasTraduzidas.push(linha.tokens.filter(token => !tipos.map((t) => t.token).includes(token.token)).map(t => t.codigoJs).join(''));
    }

    let codigoComVariaveis = linhasTraduzidas.join('\n');
    [...new Set(variaveis.ocorrencias.map(t => t.token))].forEach(v => {
        codigoComVariaveis = codigoComVariaveis.replace(v, 'var ' + v);
    });
    
    return codigoComVariaveis;
}
