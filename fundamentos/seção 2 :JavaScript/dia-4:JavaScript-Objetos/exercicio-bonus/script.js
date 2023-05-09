let lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
  };
  
  let lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
  };
  
  let lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
  };
  // adicionando valor 
  function adicionaTurno(obj, key, value){
    obj[key] = value;
  }
  adicionaTurno(lesson2, 'turno', 'noite')
  console.log(lesson2);
  // listando as chaves de um obj
  function listaKeys(obj){
    return Object.keys(obj)
  }
  console.log(listaKeys(lesson1));

  // mosntrando o tamanho de um obj
  function tamanhoObjeto(obj){
    return Object.keys(obj).length;
  }
  console.log(tamanhoObjeto(lesson1));

  // retornando os valores de um objeto em um array
  function listaValues(obj){
    return Object.values(obj)
}
console.log(listaValues(lesson1));

// criando um objeto para agrupar todas as aulas

let allLessons = Object.assign({},{
    lesson1: lesson1,
    lesson2: lesson2,
    lesson3: lesson3,
})
console.log(allLessons);

// retornando total de estudantes em todas as aulas

function totalEstudantes(obj){
    return Object.values = lesson1.numeroEstudantes + lesson2.numeroEstudantes + lesson3.numeroEstudantes
}
console.log(totalEstudantes(lesson1, lesson2 , lesson3));

// verificando se um par chave/valor ecistem em um obj

function verificaPar(obj, key, value) {
    let entries = Object.entries(obj);
    let isEqual = false;
    for (let index in entries) {
      if (entries[index][0] === key && entries[index][1] === value) isEqual = true;
    }
    return isEqual;
  }
  console.log(verificaPar(lesson2,'professor','Carlos'));

  

  