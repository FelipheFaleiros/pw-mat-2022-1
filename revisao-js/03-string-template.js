let nome = 'Feliphe'
let idade = 19
let cidade = 'Franca'

console.log('Meu nome é ' + nome +', tenho ' +idade+' anos e sou de ' + cidade + '.')

//String template é uma string especial delimitada por acentos graves("crases") 
//e que permite a interpolação de variáveis diretamente dentro dela 
console.log(`Meu nome é ${nome}, tenho ${idade} anos e sou de ${cidade}.`)

//a interpolação só funciona em strings delimitadas por acentos graves
console.log(`Meu nome é ${nome.toUpperCase}, tenho ${idade + 5} anos e sou de ${cidade}.`)
