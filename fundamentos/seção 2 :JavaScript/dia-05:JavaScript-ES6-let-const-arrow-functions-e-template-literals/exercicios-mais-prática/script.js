// 1. crie uma função liga e desliga motor


const ligarDesligar = (status) => {
    status = status === 'desligado' ? 'ligado' : 'desligado';
    console.log(`O motor está ${status}`);
    return status;
};

// 2. crie a função da area de um ciruclo

const circleArea = (radius) => {
    const PI = 3.14;
    let area = PI * (radius ** 2) 
    return `Esta é a area do circulo ${area}`;
}

// 3. crie uma função que recebe uma frase como parametro e retorne a maior palavra da frase

const longestWord = (text) => {
    const wordArray = text.split(' ');
    let maxLength = 0;
    let result = '';
  
    for (const word of wordArray) {
        if (word.length > maxLength) {
            maxLength = word.length;
            result = word;
        }
    }
  
    return result;
  }
  
  console.log(longestWord('Antonio foi ao banheiro e não sabemos o que aconteceu'));