document.getElementById("botaoEnviar").addEventListener("click", validarFormulario)

function validarFormulario(){
  if(document.getElementById("nome-da-usuaria").value != "" && document.getElementById("email-da-usuaria").value != "" && document.getElementById("telefone-da-usuaria").value != ""){
    alert("Prontinho! Você receberá as novidades por e-mail.")
  }else{
    alert("Por favor, preencha os campos nome e email!")
  }
}