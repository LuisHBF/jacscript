import { Condicao } from "../models/condicao";

export function identificaCondicao(linhas) {
    let linhasAuxiliar
    let condicao = [];
    let erros = [];
    let isConditionLine = false;
    let condicaoAtual;

    for (linha in linhas) {
        // sucessos
        if (linha.tokens.contains(condition)) {

            
            if (linha.tokens[0] == 'condition') {
                if (linha.tokens[1] == '<') {
                    if (linha.token[linha.tokens.length - 2] == '>') {
                        if (linha.token[linha.tokens.length - 1] == '`') {
                            if(!isConditionLine){
                                isConditionLine = true
                            }
                        }
                    }
                }
            }
        }
    }

}