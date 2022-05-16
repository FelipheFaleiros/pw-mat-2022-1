const numeros  = [18,19,3,-4,13,-11,15,0,-1]
const frutas = ['laranja', 'banana', 'maça', 'abacaxi']


let primeiroNegativo = numeros.find(n=> n < 0) // retorna uma variável 
let primeiroDiv5 = numeros.find(x=> x % 5 === 0)
let comecaComM =  frutas.find (f=> f.charAt(0) ==='m')
let comecaComJ =  frutas.find(h=> h.charAt(0) ==='j')
let primeiroDiv7 = numeros.find(i=> i % 7 === 0 && i != 0) //retorna um valor undefined

console.log({primeiroNegativo, primeiroDiv5, comecaComM,comecaComJ,primeiroDiv7})
