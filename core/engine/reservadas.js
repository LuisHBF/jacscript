export const Reservadas = {
  palavrasReservadas: [
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
  ], //todas as palavras reservadas
  tiposVariaveis: [
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
  ], // todos os tipos de variaveis
  simbolosReservados: [
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
  ], //todos os simbolos da linguagem
  operadoresLogicos: [
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
  ],
  operadoresAritmeticos: [
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
    }
  ],
  valores: [
    { 
      token: new RegExp(/^vol_[a-zA-Z_$][a-zA-Z_$0-9]*$/), 
      codigoJs: 'VARIAVEL'
    },
    { 
      token: new RegExp(/^(["])(?:(?=(\\?))\2.)*?\1$/), 
      codigoJs: 'STRING'
    },
    { 
      token: new RegExp(/^[0-9][0-9]*$/), 
      codigoJs: 'INTEIRO'
    },
    { 
      token: new RegExp(/^[0-9][0-9]*[.][0-9][0-9]*$/), 
      codigoJs: 'FLOAT'
    },
    { 
      token: new RegExp(/^true|false$/), 
      codigoJs: 'BOOLEAN'
    },
  ]
}