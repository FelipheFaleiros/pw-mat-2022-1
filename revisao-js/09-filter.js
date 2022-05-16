const numeros  = [18,19,3,-4,13,-11,15,0,-1]
const frutas = ['laranja', 'banana', 'maça', 'abacaxi']


let primeiroNegativo = numeros.filter(n=> n < 0) //retorna um vetor
let primeiroDiv5 = numeros.filter(x=> x % 5 === 0)
let comecaComM =  frutas.filter(f=> f.charAt(0) ==='m')
let comecaComJ =  frutas.filter(h=> h.charAt(0) ==='j')
let primeiroDiv7 = numeros.filter(i=> i % 7 === 0 && i != 0) //retor um vetor vazio

console.log({primeiroNegativo, primeiroDiv5, comecaComM,comecaComJ,primeiroDiv7})