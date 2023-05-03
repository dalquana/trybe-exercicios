let pessoaCandidata = "reprovad"
switch(pessoaCandidata){
    case "aprovada":
            console.log("Parabéns, você está no grupo de pessoas aprovadas!");
            break;

    case "lista":
            console.log("você está na nossa lista de espera.");
            break;

    case "reprovada":
            console.log("Infelizmente, você reprovou.");
            break;

    default:
        console.log("informação incorreta");

}