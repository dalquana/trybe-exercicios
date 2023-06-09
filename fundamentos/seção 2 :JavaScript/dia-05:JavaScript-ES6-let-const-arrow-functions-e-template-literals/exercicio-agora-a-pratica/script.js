// mudando o tipo de variavel
function imprimeIdade() {
    for (let idade = 30; idade <= 40; idade += 1) {
      console.log('Idade dentro do for:', idade)
    }
  }
  imprimeIdade()

  // reatribuindo valores sem mudar a variavel
  const pessoa = {
    nome: 'Henri',
    idade: 20
  }
    pessoa.nome = 'Luna'
    pessoa.idade = 19;

  console.log('Nome:', pessoa.nome);
  console.log('Idade:', pessoa.idade);

  //modificando as concatenações

  const name = 'Adriana';
  const lastName = 'Soares';
  console.log(`Olá, ${name} ${lastName} ! `);
  function soma(a,b) {
    let resultado = a + b;
    return resultado;
  }
  let a = 3;
  let b = 5;
  console.log(`O resultado da soma de ${a} + ${b} é: ${soma(a,b)}`);

  // modificando a estrutura para uma arrow function

   let numeroAleatorio = () => {
    return Math.random()
  }
  console.log(numeroAleatorio());

  // modificando function para arrow function

 let hello = (nome) => {
    return `Olá, ${nome}!`
  }
  let nome = 'Ivan';
  console.log(hello(nome));

  // modificando function para arrow function

   let nomeCompleto = (nome, sobrenome) => {
    return `${nome} ${sobrenome}`
  }
  nome = 'Ivan';
  sobrenome = 'Pires';
  console.log(nomeCompleto(nome, sobrenome));

  // modificando if/elese para ternary operator

  let speed = 90;
  const speedCar = (speed) => 
    (speed >=120) ? `Você ultrapassou o limite de velocidade` : `Você está na velocidade permitida`;
  
  console.log(speedCar(speed));
 

