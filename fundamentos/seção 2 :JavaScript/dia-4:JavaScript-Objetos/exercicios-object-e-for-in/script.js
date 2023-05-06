let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  };
    // Atribuindo nova chave e novo objeto
  info['recorrente'] = 'Sim'
  // Mostrando somonete os valores
  for(let value in info){
    console.log(info[value]);
  }
  // Mostrando somente as chaves
  for(let keys in info){
    console.log(keys);

  }
  //Atribuindo novos valores aos objetos
  info['personagem'] = 'Margarida e Tio Patinhas'
  info['origem'] = "Pato Donald e Christas on Bear Mountain, Dell's Four Color Comics"
  info['nota'] = 'Namorada do personagem principal nos quadrinhos do Pato Donald e O último MacPatinhas'
  info['recorrente'] = 'Ambos recorrente'

    // Imprimindo frase concatenada com a personagem e imprimimindo INFO
  console.log('Bem-vinda,',info.personagem);
  console.log(info);