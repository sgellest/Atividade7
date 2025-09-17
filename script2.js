//Acesso ao Clube
//Para entrar no clube, a pessoa precisa:
//Ser maior de 18 anos E ter o cartão de sócio.
//OU
//Estar acompanhada de um responsável.
//Crie variáveis para cada condição e verifique se a pessoa pode ou não entrar.

let idade = 17
let cartaoSocio = false
let responsavel = true

console.log((idade >= 18 && cartaoSocio == true) || responsavel == true ? "Pode entrar no clube!" : "Não pode entrar no clube!")