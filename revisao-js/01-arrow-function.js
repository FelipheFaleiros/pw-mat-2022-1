/*
    Função tradicional com 1 argumento 
    1 linha de corpo contendo return 
*/

function quadrado (n){
    return n*n
}
console.log(quadrado(7))

//  Arrow function equivalente com 1 argumento 

const quadrado2 = n => n * n
console.log (quadrado2(7))

//  Função tradicional com 2 argumentos e uma linha de corpo com return 
function soma (a, b){
    return a + b
}
console.log(soma(10,20))

/*
    Arrow function equivalente com 2 argumentos os 
    parênteses em volta argumentos são OBRIGATÓRIOS
 */
const soma2 = (a,b) => a + b
console.log(soma2(10,20))


//  Função tradicional
function msgErro(){
    return 'ERROR FATAL. Entre em contato com o suporte'
}
console.log(msgErro())
//  Arrow function
const msgErro2 = () => 'ERROR FATAL. Entre em contato com o suporte'
console.log (msgErro2())



//  Função tradicional
function fatorial(n){
    let fat = 1
    for (let i=n; i>1; i--) fat *= i 
    return fat
}
console.log(fatorial(5))
//  Arrow function
const fatorial2 = n => {
    let fat = 1 
    for (let i=n; i>1; i--) fat *= i 
    return fat
}
console.log(fatorial2(5))


