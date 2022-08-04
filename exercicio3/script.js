let nacionalidade = prompt("Qual a sua nacionalidade? ");
const respNacionalidade = nacionalidade;

if(respNacionalidade === "brasileira" || respNacionalidade === "argentina" || respNacionalidade === "uruguaia" || respNacionalidade === "chilena" || respNacionalidade === "colombiana"){
    console.log("A sua nacionalidade é: ", respNacionalidade)
}else{
    console.log("Nacionalidade não encontrada")
}
