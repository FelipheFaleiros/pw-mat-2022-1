//Criando um objeto 

//Criando objeto a partir das variáveis 
// let user = {
//     username: 'Feliphe',
//     name: 'Feliphe Faleiros Arlarcon Lima',
//     group: 'aluno',
//     password: '123456'
// }
//Exibindo o objeto 
//console.log(user)

/*  Quando o objeto a ser criado tiver propriedades de nome identifico as variáveis de 
    onde virão os respectivos valores. pode-se usar as chamadas PROPRIEDADES ABREVIATIVAS
 */



//criando as propriedades primeiramente como variáveis avulsa
let username = 'Feliphe'
let names =  'Feliphe Faleiros Arlarcon Lima'
let group =  'aluno'
let password =  '123456'

let user = {
    username,
    names,
    group,
    password
}
//Exibindo o objeto 
console.log(user)

//Propriedades abreviadas são muitos utilizadas para depuração, quando precisamos 
//saber além do valor da variável, também seu nome
console.log(username, group)


//Transformando variáveis avulsas em um objeto para que o  
//nome das variáveis  também aparecem na depuração 
console.log({username, group})
