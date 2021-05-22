import { Linha } from './models/linha.js';

export function identificacaoLinha(codigo) {
    let arrayDeLinhas = [];

    let codigoSeparadoPorLinhas = codigo.split(/(?<=;)|(?<=`)|(?<=´)/g);
    let removidoEspaco = codigoSeparadoPorLinhas.map(s => s.trim());
    let removidoLinhasVazias = removidoEspaco.filter(s => s != '');
    
    removidoLinhasVazias.forEach((l, i) => {
        let linha = new Linha(l, i, []);
        arrayDeLinhas.push(linha);
    });
    return arrayDeLinhas;
}
