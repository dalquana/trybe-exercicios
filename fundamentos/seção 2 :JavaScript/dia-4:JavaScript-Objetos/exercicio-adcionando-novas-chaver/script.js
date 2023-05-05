let student = {}

function addPropriedade(object, key, value){
    object[key] = value
}

addPropriedade(student, 'name', 'João Pedro Dalquana')
addPropriedade(student, 'email', 'jpdalquana@hotmail.com')
addPropriedade(student, 'telefone', '44 9 9991-3294')
addPropriedade(student, 'linkedin', 'linkedin/in/joao-pedro-dalquana/')

console.log(student);

