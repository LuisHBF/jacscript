import { Linha } from './model/linha.js';

export function quebrarCodigoEmArrayPorLinha(codigo) {
    let arrayDeLinhas = [];
    let separadoPorFimDeLinha = codigo.split(';|`|´');
    let removidoEspaco = separadoPorFimDeLinha.map(s => s.trim());
    let removidoLinhasVazias = removidoEspaco.filter(s => s != '');
    removidoLinhasVazias.forEach((l, i) => {
        let linha = new Linha(l, i, []);
        arrayDeLinhas.push(linha);
    });
    return arrayDeLinhas;
}
