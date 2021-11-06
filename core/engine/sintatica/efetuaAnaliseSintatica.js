import { identificacaoLinha } from "../identificacaoLinha.js"
import { identificaErroDeclaracaoVariavel } from "./identificaErroDeclaracaoVariavel.js";
import { Reservadas } from "../reservadas.js";
import { identificaTokensEmLinhas } from "../identificaTokensEmLinhas.js";
import { unificaStringEmToken } from "../unificaStringEmToken.js";
import { identificaErroAusenciaPontoVirgula } from "./identificaErroAusenciaPontoVirgula.js";
import { categorizacaoDeTokens } from "../categorizacaoTokens.js"
import { identificaErroAusenciaFechaSimbolo } from "./identificaErroAusenciaFechaSimbolo.js";
import { Linha } from "../models/linha.js";
import { identificaAusenciaAbreSimbolo } from "./identificaAusenciaAbreSimbolo.js";

export function efetuaAnaliseSintatica(codigo){

    let erros = [];
    
    let codigoQuebradoEmLinhas = identificacaoLinha(codigo);
    let codigoEmTokens = identificaTokensEmLinhas(codigoQuebradoEmLinhas, Reservadas.simbolosReservados, Reservadas.palavrasReservadas);
    let linhas = unificaStringEmToken(codigoEmTokens);
    let variaveis = categorizacaoDeTokens(linhas).valores[0].ocorrencias.map(ocorrencia => ocorrencia.token);
    variaveis = [...new Set(variaveis)];


    linhas.forEach(linha => {
        let erro = identificaErroDeclaracaoVariavel(linha, Reservadas.palavrasReservadas, Reservadas.tiposVariaveis.map(tipo => tipo.token), variaveis);
        
        if(erro){
            erros.push(erro);
        } else {
           variaveis = variaveis.filter(variavel => variavel != linha.tokens[0].token);
        }

        erro = identificaErroAusenciaPontoVirgula(linha);

        if(erro){
            erros.push(erro);
        }
    });




    let erro = identificaErroAusenciaFechaSimbolo(linhas, '`', '´', 'Você abriu um escopo, mas esqueceu de fecha-lo!');

    if(erro){
        erros.push(erro);
    }

     erro = identificaErroAusenciaFechaSimbolo(linhas, '<', '>', 'Você abriu um parametro, mas esqueceu de fecha-lo!');

    if(erro){
        erros.push(erro);
    }

     erro = identificaErroAusenciaFechaSimbolo(linhas, '"', '"', 'Você abriu uma String, mas esqueceu de fecha-la!');

    if(erro){
        erros.push(erro);
    }







    erro = identificaAusenciaAbreSimbolo(linhas, '`', '´', 'Você fechou um escopo sem te-lo aberto!');

    if(erro){
        erros.push(erro);
    }

     erro = identificaAusenciaAbreSimbolo(linhas, '<', '>', 'Você fechou um parametro sem te-lo aberto!');

    if(erro){
        erros.push(erro);
    }


    return erros.length > 0 ? '<p class="text-center text-danger">' + erros[0] + '</p>' : '<p class="text-center text-success">Nenhum erro de sintaxe encontrado!</p>';

}