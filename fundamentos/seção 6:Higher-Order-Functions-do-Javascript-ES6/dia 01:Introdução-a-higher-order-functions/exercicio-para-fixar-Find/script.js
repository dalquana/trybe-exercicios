const numbers = [19, 21, 30, 3, 45, 22, 15];

// Adicione seu código aqui
const verificador = numbers.find((number) => number % 3 === 0 && number % 5 === 0);
console.log(verificador);

const names = ['João', 'Irene', 'Fernando', 'Maria'];

// Adicione seu código aqui
const verificador5Letras = () => {
    return names.find((name) => name.length === 5);
}
console.log(verificador5Letras());

const musicas = [
    { id: '31031685', title: 'Partita in C moll BWV 997' },
    { id: '31031686', title: 'Toccata and Fugue, BWV 565' },
    { id: '31031687', title: 'Chaconne, Partita No. 2 BWV 1004' },
  ];
  
  // Adicione seu código aqui
  const findMusic = musicas.find((musica) => musica.id === '31031685');

  console.log(findMusic);