let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  };

  info['recorrente'] = 'Sim'

  for(let value in info){
    console.log(info[value]);
  }

  for(let keys in info){
    console.log(keys);

  }

  info['personagem'] = 'Margarida e Tio Patinhas'
  info['origem'] = "Pato Donald e Christas on Bear Mountain, Dell's Four Color Comics"
  info['nota'] = 'Namorada do personagem principal nos quadrinhos do Pato Donald e O último MacPatinhas'
  info['recorrente'] = 'Ambos recorrente'


  console.log('Bem-vinda,',info.personagem);
  console.log(info);