// let minino = Math.min(2,-7,8,4,0)
// let maximo = Math.max(2,-7,8,4,0)

//console.log({minino, maximo})

let nums = [2,-7,8,4,0]
minino = Math.min(nums)
maximo = Math.max(nums)

// A sintaxe de espalhamento é capaz de "desempacotar"
//  um vetor em uma lista de valores avulsos
minino = Math.min(...nums)
maximo = Math.max(...nums)

console.log({minino, maximo})

console.log('Vetor:',nums)
console.log('Soltos:',...nums)

//Espalhamento com objetos
let carro1 = {marca: "Fiat", modelo:"147", cor: "Azul", ano:1981}

//let carro2 = carro1; //copiando carro para nova variável . Isso faz apenas uma referencia ao primeiros objeto caso  altere o carro2 o carro1 também será alterado

//Usando espalhamento 
//para o objeto oque vale é o nome não importa se na chamada ele venha ao contrario 
//para o vetor oque vale é o ordem 
let carro2 = {...carro1}

carro2.marca = "Chevrolet"
carro2.modelo = "Chevete"
carro2.marrom  = "Marrom"

console.log({carro1,carro2})

//Criando função com um números arbitrário de parâmetros
function somartudo(...nums){
    let soma = 0
    for (let n of nums) soma += n
    return soma
}

console.log(somartudo(1,2,3,4))
console.log(somartudo(1,2))
console.log(somartudo(1,2,3,4,5,6,7,8,9,10))

//Função em que o primeiro parâmetro é fixo e os demais são arbitrários 
//Neste caso, o parâmetro de espelhamento também é chamado de PARÂMETRO RESTO
function calcular(operador, ...operandos){
    switch(operador){
        case '+':
            let soma = 0
            for (let o of operandos) soma += o
            return soma
        case '*':
            let produto = 1
            for (let o of operandos) produto *= o
            return produto
    }
}
console.log(calcular('*',1,2,3,4))
console.log(calcular("+",1,2,3,4))

//Usado espelhamento para concatenação de vetores 
let hortalicias = ['alface', 'beterraba', 'cenoura', 'chuchu']
let frutas =  ['abacaxi','laranja','maçã', 'uva']
let hortfruti = [...hortalicias,...frutas]
console.log(hortfruti)