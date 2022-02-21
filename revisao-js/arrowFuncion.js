function fatorial (n){
    if (n <= 1) return 1
    else return n * fatorial (n-1)
}
//transformação para Arrow Function
const fatorial = n => {
    if (n<=1) return 1
    else return n * fatorial (n-n)
}


function p (n){
    return n = 3.1416
}

const p = n => 3.1416

    
function vazia (){
    console.log("Error")
}

const vazia = () => console.log("Error")




let media = 7.2
let situacao
if (media >= 6){
    situação = "Aprovado" 
}
else {
    situação = "Reprovado "
}
// usar operador ternário 
let situacao = media >= 6 ? "Aprovado" :  "Reprovado"