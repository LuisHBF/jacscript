import { Linha } from '../models/linha.js'
import { Variavel } from '../models/variavel.js'

//recebe uma linha qualquer e retorna uma string com o erro caso essa linha seja uma declaração de variavel invalida
export function identificaErroDeclaracaoVariavel(linha, palavrasReservadas, tiposVariaveis, variaveisExistentes) {

    if(linha.tokens[0].token.startsWith("vol")){

        let nomeVariavel = linha.tokens[0].token;
    
        if(variaveisExistentes.includes(nomeVariavel)){
            if(!linha.tokens[0].token.startsWith("vol_")){
                return `Erro ao declarar variável na linha ${linha.posicao + 1}! A variavel precisa começar com vol_`; 
            }
    
            if(!tiposVariaveis.includes(linha.tokens[1].token)){
                return `Erro ao declarar variável na linha ${linha.posicao + 1}! É preciso informar o tipo da variavel`; 
            }
    
            if(linha.tokens[2].token != "is"){
                return `Erro ao declarar variável na linha ${linha.posicao + 1}! É preciso utilizar o operador is`; 
            }
        }



    }
    return null;
}