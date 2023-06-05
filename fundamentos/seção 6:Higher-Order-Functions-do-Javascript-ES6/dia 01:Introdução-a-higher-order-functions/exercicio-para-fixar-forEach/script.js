const emailListInData = [
    'roberta@email.com',
    'paulo@email.com',
    'anaroberta@email.com',
    'fabiano@email.com',
  ];
  
  // Adicione seu código aqui
  const enviarEmail = (email) => {
    console.log(`O Email ${email} está cadastrado no nosso banco de dados!`);
  };

  emailListInData.forEach(enviarEmail);
  