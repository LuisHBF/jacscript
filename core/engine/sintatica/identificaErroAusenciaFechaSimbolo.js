export function identificaErroAusenciaFechaSimbolo(linhas, caractereAbre, caractereFecha, mensagemErro){

    let numeroLinhaEncontrada = null;


    linhas.forEach(linha => {

        if(linha.tokens.filter(token => token.token == caractereAbre).length > 0){
            if(numeroLinhaEncontrada == null){
                numeroLinhaEncontrada = linha.posicao + 1;
            } else {
                return mensagemErro + " na linha " + numeroLinhaEncontrada;
            }
        }

        if(linha.tokens.filter(token => token.token == caractereFecha).length > 0){
            numeroLinhaEncontrada = null;
        }

    })
    
    if(numeroLinhaEncontrada != null){
        return mensagemErro + " na linha " + numeroLinhaEncontrada;
    }
    
    return null;
}