var palavrasReservadas = [
  {
    token: 'vol',
    codigoJs: 'var'
  },
  {
    token: '@int',
    codigoJs: 'number'
  },
  {
    token: '@flt',
    codigoJs: 'number'
  },
  {
    token: '@str',
    codigoJs: 'string'
  },
  {
    token: '@bool',
    codigoJs: 'boolean'
  },
  {
    token: 'is',
    codigoJs: '='
  },
  {
    token: 'input',
    codigoJs: 'INPUT'
  },
  {
    token: 'output',
    codigoJs: 'OUTPUT'
  },
  {
    token: 'condition',
    codigoJs: 'if'
  },
  {
    token: 'otherwise',
    codigoJs: 'else'
  },
  {
    token: 'loop',
    codigoJs: 'while'
  },
  {
    token: 'plus',
    codigoJs: '+'
  },
  {
    token: 'minus',
    codigoJs: '-'
  },
  {
    token: 'times',
    codigoJs: '*'
  },
  {
    token: 'by',
    codigoJs: '/'
  },
  {
    token: 'remainder',
    codigoJs: '%'
  },
  {
    token: 'pot',
    codigoJs: 'POTÊNCIA'
  },
  {
    token: 'root',
    codigoJs: 'RAIZ'
  },
  {
    token: 'greaterthan',
    codigoJs: '>'
  },
  {
    token: 'lessthan',
    codigoJs: '<'
  },
  {
    token: 'equals',
    codigoJs: '=='
  },
  {
    token: 'notequals',
    codigoJs: '!='
  },
  {
    token: 'and',
    codigoJs: '&&'
  },
  {
    token: 'or',
    codigoJs: '||'
  },
  {
    token: 'not',
    codigoJs: '!'
  },
  {
    token: 'true',
    codigoJs: 'true'
  },
  {
    token: 'false',
    codigoJs: 'false'
  },
]; //todas as palavras reservadas
var tiposVariaveis = [
  {
    token: '@int',
    tipoJs: 'number'
  },
  {
    token: '@flt',
    tipoJs: 'number'
  },
  {
    token: '@str',
    tipoJs: 'string'
  },
  {
    token: '@bool',
    tipoJs: 'boolean'
  },
]; // todos os tipos de variaveis
var simbolosReservados = [
  {
    token: '<',
    codigoJs: '('
  },
  {
    token: '>',
    codigoJs: ')'
  },
  {
    token: ';',
    codigoJs: ';'
  },
  {
    token: '`',
    codigoJs: '{'
  },
  {
    token: '´',
    codigoJs: '}'
  },
  {
    token: '"',
    codigoJs: '"'
  },
  {
    token: '|',
    codigoJs: '+'
  },
  {
    token: '#',
    codigoJs: '//'
  },
]; //todos os simbolos da linguagem
var operadoresLogicos = [
  {
    token: 'greaterthan',
    codigoJs: '>'
  },
  {
    token: 'lessthan',
    codigoJs: '<'
  },
  {
    token: 'equals',
    codigoJs: '=='
  },
  {
    token: 'notequals',
    codigoJs: '!='
  },
  {
    token: 'and',
    codigoJs: '&&'
  },
  {
    token: 'or',
    codigoJs: '||'
  },
  {
    token: 'not',
    codigoJs: '!'
  },
];
var operadoresAritmeticos = [
  {
    token: 'plus',
    codigoJs: '+'
  },
  {
    token: 'minus',
    codigoJs: '-'
  },
  {
    token: 'times',
    codigoJs: '*'
  },
  {
    token: 'by',
    codigoJs: '/'
  },
  {
    token: 'remainder',
    codigoJs: '%'
  },
  {
    token: 'pot',
    codigoJs: 'POTÊNCIA'
  },
  {
    token: 'root',
    codigoJs: 'RAIZ'
  },
];