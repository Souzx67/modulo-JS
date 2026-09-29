let carro = "Skyline"
let CarroMaisEspecifico = carro + "R34"
let Placa = "FD67S69"
const nome = "Miguel"   
let idade = 16
let cidade = "Londrina"
const nomeCompleto = nome + " de Souza Matos"
let hobby = "Estudar e Cozinhar"
let temperatura = 30
let resultado = ""
let pontos = Number( prompt("Quantos Pontos?"))
let anosDeCliente = Number(prompt("Quantos Anos?"))
let rank = ""

if (pontos > 0 && pontos <= 199 ) {
    rank = "Bronze"
} else if (pontos <= 399 ) {
    rank = "Prata"
} else if (pontos <= 599 ) {
    rank = "Ouro"
} else if (pontos <= 799 ) {
    rank = "Esmeralda"
} else if (pontos <= 1000 ) {
    rank = "Diamante"
}


if (temperatura < 0) {
    resultado = "Alaska"
} else if (temperatura < 10) {
    resultado = "Rio Grande do Sul"
} else if (temperatura < 20) {
    resultado = "Londrina"
} else if (temperatura < 30) {
    resultado = "Minas Gerais"
} else if (temperatura < 40) {
    resultado = "Nordeste"
}

console.log(carro)
console.log("Hello, world")
console.log(`O meu nome é ${nome} e eu tenho ${idade} Anos de idade`)
console.log(`Alguns Hobbys Meus São ${hobby}`)
console.log(`Meu carro é o ${carro} mais especificamente o ${CarroMaisEspecifico} e a placa dele é ${Placa}`)
console.log(`meu nome completo é ${nomeCompleto}`)
console.log(`A temperatura é ${temperatura} e o resultado é ${resultado}`)
console.log(`Seus pontos são ${pontos} e sua idade de cliente é ${anosDeCliente} e seu rank é ${rank}`)

for (let i= 0; i <= 7; i++) {
    console.log (i);
}
