import { Linha } from '../models/linha.js'
import { Variavel } from '../models/variavel.js'

export function identificaVariavelEmLinha(linha, palavrasReservadas, tiposVariaveis) {
    if (linha.tokens.length != 5) {
        return null;
    }

    if (linha.tokens[0].token != 'vol') {
        return null;
    }

    if (palavrasReservadas.includes(linha.tokens[1].token)) {
        return new Variavel(undefined, undefined, undefined, linha,
            `Erro na tentativa de declarar uma variável na linha ${linha.posicao}!
            Uma variável NÃO PODE ter o nome de uma palavra reservada!
            ${linha.tokens[1].token} é uma palavra reservada!`)
    }

    if (!/[a-zA-Z]/.test(linha.tokens[1].token[0])) {
        return new Variavel(undefined, undefined, undefined, linha,
            `Erro na tentativa de declarar uma variável na linha ${linha.posicao}!
            Uma variável deve iniciar com uma letra!`)
    }

    if (!tiposVariaveis.includes(linha.tokens[2].token)) {
        return new Variavel(undefined, undefined, undefined, linha,
                `Erro na tentativa de declarar uma variável na linha ${linha.posicao}!
             O tipo de dado especificado não existe! Tipos permitidos: ${tiposVariaveis.map((tipo) => `"${tipo}",`).toString()}`)
    }

    if (linha.tokens[3].token != 'is'){
        return new Variavel(undefined, undefined, undefined, linha,
            `Erro na tentativa de declarar uma variável na linha ${linha.posicao}!
            Você precisa utilizar o operador de atribuição (is) para atribuir valor a sua variável!`);
    }

    if(linha.tokens[4].token[linha.tokens[4].token.length - 1] != ";"){
        return new Variavel(undefined, undefined, undefined, linha,
            `Erro na tentativa de declarar uma variável na linha ${linha.posicao}!
            Você esqueceu do ponto e vírgula!`);
    }

    if(linha.tokens[2].token == '@str' && (linha.tokens[4].token[0] != '"' || linha.tokens[4].token[linha.tokens[4].token.length - 2] != '"')){
        return new Variavel(undefined, undefined, undefined, linha,
            `Erro na tentativa de declarar uma variável na linha ${linha.posicao}!
            Para declarar uma variável do tipo @str, você precisa atribuir seu valor iniciando e terminando com aspas (")`);
    }

    return new Variavel(linha.tokens[1].token, linha.tokens[2].codigoJs, linha.tokens[4].token, linha, null);
}