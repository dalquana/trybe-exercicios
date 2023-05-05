let student1 = {
    html: 'Muito Bom',
    css: 'Bom',
    javascript: 'Ótimo',
    softskills: 'Ótimo',
  };
  
  let student2 = {
    html: 'Bom',
    css: 'Ótimo',
    javascript: 'Ruim',
    softskills: 'Ótimo',
    git: 'Bom', // chave adicionada
  };

  function skills(student){
    let arraySkills = Object.keys(student)
    for(let index in arraySkills){
        console.log(arraySkills[index], 'Nível', student[arraySkills[index]]);
    }
  }
  console.log('Estudante 1');
  skills(student1)
console.log('------------');
  console.log('Estudante 2');
  skills(student2)