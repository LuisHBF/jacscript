export class Conteudo {
    constructor(titulo, valor, callback, obj) {
        this.titulo = titulo;
        this.valor = valor;
        this.callback = callback ? callback : `exibeGenerico('${btoa(JSON.stringify(obj))}', '${titulo}')`;
    }
}