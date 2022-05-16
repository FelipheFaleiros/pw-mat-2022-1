//vetor
let frutas = ['laranja', 'banana', 'maça']

//Desestruturando o vetor em variavel avulsa
let [x,y,z] = frutas

console.log('x:',x)
console.log('y:',y)
console.log('z:',z)

//Desestruturação parcial 
let [a,b] = frutas
console.log('a:', a)
console.log('b:', b)

let [i, , j] = frutas
console.log('i:', i)
console.log('j:', j)

let [,n,m] = frutas
console.log('n:', n)
console.log('m:', m)


//desestruturação de objeto
//1º Regra: as regras devem ter o mesmo nome das propriedades 
//2º Regra: a ordem não importa

let pessoa = {
    nome: 'Josiana Jerônima Junqueira',
    sexo: 'F',
    dataNascimento: '1998-11-09',
    email: 'josianajunqueira@empresa.com.br'
}

//As variáveis podem aparecer em qualquer ordem 
let {email, sexo, dataNascimento, nome} = pessoa

console.log('Nome: ', nome)
console.log('Sexo: ', sexo)
console.log('Data de Nascimento: ', dataNascimento)
console.log('Email : ', email)