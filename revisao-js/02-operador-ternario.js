let media = 7.2, situacao
/*
if (media >=6){
    situacao = 'APROVADO'
}
else {
    situacao = 'REPROVADO'
}

console.log(situacao)
*/
//usando operador ternario
situacao = media >= 6 ? 'APROVADO' : 'REPROVADO'
console.log (situacao)

//------------------

let user = 'gest', msg
msg = user === 'admin' ? 'AUTOTIZADO' : 'NÃO AUTORIZADO'
console.log(msg)