// function calcularArea (base, altura, forma){
//     switch(forma){
//         case 'R': //Retangular
//             return base*altura
//         case 'T': //Triangulo 
//             return base * altura / 2
//         case 'E': //Elipse
//             return (base / 2) * (altura / 2) * Math.PI
//         default :  //forma não identificada 
//             return null
//     }
// }

// console.log(`Retângulo 15x25: ${calcularArea(15,25,'R')}`)
// console.log(`Triangulo  15x25: ${calcularArea(15,25,'T')}`)
// console.log(`Elipse  15x25: ${calcularArea(15,25,'E')}`)


//nesse caso o usar usa com maior frequência o calculo de retângulo 
function calcularArea (base, altura, forma = 'R'){
    switch(forma){
        case 'R': //Retangular
            return base*altura
        case 'T': //Triangulo 
            return base * altura / 2
        case 'E': //Elipse
            return (base / 2) * (altura / 2) * Math.PI
        default :  //forma não identificada 
            return null
    }
}

console.log(`Retângulo 15x25: ${calcularArea(15,25)}`)
//caso não seja o calculo do retângulo, tenho que declarar o ultimo parâmetro 
console.log(`Triangulo  15x25: ${calcularArea(15,25,'T')}`)
console.log(`Elipse  15x25: ${calcularArea(15,25,'E')}`)