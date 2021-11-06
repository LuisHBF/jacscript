export function identificaErroAusenciaPontoVirgula(linha){

    if(linha.tokens[linha.tokens.length - 1].token != ";"){
        if(linha.tokens[linha.tokens.length - 1].token != '`' && linha.tokens[linha.tokens.length - 1].token != '´'){
            return `Erro na linha ${linha.posicao + 1}! Você esqueceu do ;`; 
        }
    }    

    return null;
}