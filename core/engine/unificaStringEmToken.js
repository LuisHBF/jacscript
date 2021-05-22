export function unificaStringEmToken(linhas) {
    let isString = false;
    let startOfString = 0;
    let currentString = '';

    for (let linha of linhas) {
        if (linha.tokens.find(t => t.token == '"')) {
            for (let [position, token] of linha.tokens.entries()) {
                if (token.token == '"') {
                    if (isString) {
                        linha.tokens[startOfString].token = currentString + '"';
                        linha.tokens[startOfString].codigoJs = currentString + '"';
                        linha.tokens[startOfString].posicao.fim = token.posicao.fim
                        isString = false;
                        token.token = '';
                        currentString = '';
                    } else {
                        isString = true;
                        startOfString = position;
                    }
                }
                if (isString) {
                    currentString += token.token;
                    token.token = '';
                }
            }
        }
        if (startOfString) {
            startOfString = 0;
        }
        linha.tokens = linha.tokens.filter(t => t.token.trim() != '');
    }

    return linhas;

}