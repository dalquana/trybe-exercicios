// Percorra o array imprimindo todos os valores contidos nele com a função console.log().

// Some todos os valores contidos no array e imprima o resultado.

// Calcule e imprima a média aritmética dos valores contidos no array.

// A média aritmética é o resultado da soma de todos os elementos dividido pelo número total de elementos.
// Com base no código que acabou de gerar, referente ao calculo da média aritmética, faça com que: caso o valor final seja maior que 20, imprima a mensagem “O valor da média aritmética é maior que 20”; e, caso não seja maior que 20, imprima a mensagem “O valor da média aritmética é menor ou igual a 20”.

// Utilizando for, descubra o maior valor contido no array e imprima-o.

// Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: “Nenhum valor ímpar encontrado”.

// Utilizando for, descubra o menor valor contido no array e imprima-o.

// Utilizando for, crie um array que vá de 1 a 25 e imprima o resultado.

// Utilizando o array que acabou de criar, imprima o resultado da divisão de cada um dos elementos por 2.


// tópico 1
// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// for(let i = 0; i < numbers.length; i += 1){
//     console.log(numbers[i]);
// }

// tópico 2 
// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// soma = 0
// for(let i = 0;i <numbers.length; i += 1){
//     soma += numbers[i];
// }
// console.log("A soma do array é", soma);

// tópico 3 
// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let soma = 278;
// let médiaAritmética = 0
// for(let i = 0; i < numbers.length;i += 1){
//     médiaAritmética = soma / numbers.length
// }
// console.log(médiaAritmética);

// tópico 3 
// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let soma = 278;
// let médiaAritmética = 0
// for(let i = 0; i < numbers.length;i += 1){
//     médiaAritmética = soma / numbers.length
// }
// if(médiaAritmética >20){
//     console.log('O valor da média aritmética é maior que 20');
// }
// else{
//     console.log("O valor da média aritmética é menor ou igual a 20");
// }

// tópico 4
// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let maiorNumero = numbers [0]
// for(let i = 0; i < numbers.length;i += 1){
//     if (numbers[i] > maiorNumero){
//         maiorNumero = numbers[i]
//     }
// }
// console.log('O maior número é', maiorNumero);

// tópico 5 
// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let numerosImpares = []
// for(let i = 0; i < numbers.length; i += 1){
//     if(numbers[i] %2 !== 0 ){
//         numerosImpares++
//     }
// }
// if(numerosImpares === 0 ){
//     console.log('Nenhum valor ímpar emcontrado');
// }
// else{
//     console.log('A quantidade de números ímpares é:', numerosImpares);
// }

// tópico 6

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let menorValor = numbers[0]
// for(let i = 1; i < numbers.length; i += 1){
//     if(numbers[i] < menorValor){
//         menorValor = numbers[i]
//     }
// }
// console.log('O menor valor do array é:', menorValor);

// tópico 7
// let array = []
// for(let i = 1;i <= 25; i+= 1){
//     array.push(i)
// }
// console.log(array);

// tópico 8
// let numeros = [];
// for (let i = 1; i <= 25; i+=1) {
//   numeros.push(i);
// }
// for (let i = 0; i < numeros.length; i+=1) {
//   let resultado = numeros[i] / 2;
//   console.log(resultado);
// }
