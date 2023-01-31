//Respostas do exercício de função e condição

//1

console.log('Isso é a resposta do exercício 1')

//2

function mostarNome(nome){
    console.log(`Meu nome é ${nome}`)
}

mostarNome(`Júlia`)

//3

let infos = function (nome, idade, gostomusical){
    console.log(`Olá, meu nome é ${nome}, eu tenho ${idade} anos e adoro ouvir ${gostomusical}!`)
}

infos('Victor', '30', 'rock')

//4

let infos2 = function (filme, música){
    console.log(`Eu gosto de assistir ${filme} e de ouvir a música ${música}!`)
}

infos2('Vida de inseto', 'Rebolation')

//5 

function triplo (number){
    return number*3
}

console.log(triplo(10))

//6

let dados = function (num1, num2){
    console.log(`Os números ${num1} e ${num2} são iguais?`)
    if (num1 == num2){
        console.log('Caramba, é verdade!')
    }else{
        console.log('Ih, é mentira!')
    }
}

dados (10,12)
