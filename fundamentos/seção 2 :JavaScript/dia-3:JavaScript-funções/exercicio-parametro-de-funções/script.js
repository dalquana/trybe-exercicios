//ADICIONANDO CLIENTE EM UM ARRAY
// let clientesTrybeBank = ['Ada', 'John', 'Gus'];

// // escreva aqui sua função
// function adicionaCliente(cliente) {
//   if (typeof cliente === 'string') {
//     clientesTrybeBank.push(cliente)
//     return 'Cliente adicionado com sucesso'
//   } else {
//     return 'O parâmetro passado deve ser do tipo "string"';
//   }
// }

// console.log(adicionaCliente(true));
// console.log(adicionaCliente('joaquin'));
// console.log(clientesTrybeBank);

//REMOVENDO UM CLIENTE DE UM ARRAY

let clientesTrybeBank = ['Ada', 'John', 'Gus'];

function removeCliente(cliente){
    if(typeof cliente === 'string'){
        let clienteEncontrado = false;
        for(let index = 0; index < clientesTrybeBank.length; index += 1){
        if(cliente === clientesTrybeBank[index]){
            clientesTrybeBank.splice(index, 1)
            clienteEncontrado = true;
            return 'Cliente excluido(a) com sucesso'
        }
    }if(clienteEncontrado === false)
    return 'Cliente não encontrado'
    }else{
        return 'O valor passado não é uma "string"'
    }
}

console.log(removeCliente(false));
console.log(removeCliente('Barney'));
console.log(removeCliente('John'));
console.log(clientesTrybeBank);
