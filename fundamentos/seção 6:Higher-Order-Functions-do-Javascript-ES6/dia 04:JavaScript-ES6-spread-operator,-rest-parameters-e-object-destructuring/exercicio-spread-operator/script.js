// Faça uma lista com as suas frutas favoritas
const specialFruit = ['morango', 'banana', 'uva'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['aveia', 'granola', 'mel'];

const fruitSalad = (fruit, additional) => {
  // Escreva sua função aqui
const fruitSaladaWithAdditional = [...fruit, ...additional];
return fruitSaladaWithAdditional;
};

console.log(fruitSalad(specialFruit, additionalItens));