function validarNomeEEmail(){
    
    const emailInput = document.getElementById('form-email');
  
    const nomeInput = document.getElementById('form-nome');

    var emailValidado;
    var nomeValidado;

    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (nomeInput.value === null || nomeInput.value.trim() === '') {
        alert("Nome inválido")    
        emailValidado = false;
    } 
    else{
        emailValidado = true;
    }
  
    if (emailInput.value === null || !regexEmail.test(emailInput.value) || emailInput.value.trim() === '') {
      alert("E-mail inválido") 
      nomeValidado = false;   
    } 
    else{
        nomeValidado = true;
    }

    if(nomeValidado && emailValidado){
        alert("Dados enviados com sucesso!") 
    }
}

function conscienteSim(){

    const consciente = true;

    var btnConscienteSim = document.getElementById("btn-consciente-sim");

    btnConscienteSim.style.backgroundColor = "#4682B4";
    btnConscienteSim.style.color = "white";
    
    var respiracaoDiv = document.getElementById("respiracao");

    // Change the display property to "block" to make it visible
    respiracaoDiv.style.display = "flex";

    var conscienteDiv = document.getElementById("tutorial-consciente");

    // Change the display property to "block" to make it visible
    conscienteDiv.style.display = "flex";
}

function conscienteNao(){

    const consciente = false;

    var btnConscienteNao = document.getElementById("btn-consciente-nao");

    btnConscienteNao.style.backgroundColor = "#4682B4";
    btnConscienteNao.style.color = "white";
    
    var respiracaoDiv = document.getElementById("respiracao");

    // Change the display property to "block" to make it visible
    respiracaoDiv.style.display = "flex";

    var tutorialInconscienteDiv = document.getElementById("tutorial-inconsciente");

    tutorialInconscienteDiv.style.display = "flex";
}

function respirandoSim(){

    const respirando = true;

    var btnRespirandoSim = document.getElementById("btn-respirando-sim");

    btnRespirandoSim.style.backgroundColor = "#4682B4";
    btnRespirandoSim.style.color = "white";
    
    var batimentosDiv = document.getElementById("batimentos");

    batimentosDiv.style.display = "flex";

    var respiracaoSimDiv = document.getElementById("tutorial-respiracao-sim");

    respiracaoSimDiv.style.display = "flex";
}

function respirandoNao(){

    const respirando = false;

    var btnRespirandoNao = document.getElementById("btn-respirando-nao");

    btnRespirandoNao.style.backgroundColor = "#4682B4";
    btnRespirandoNao.style.color = "white";
    
    var batimentosDiv = document.getElementById("batimentos");

    batimentosDiv.style.display = "flex";

    var respiracaoNaoDiv = document.getElementById("tutorial-respiracao-nao");

    respiracaoNaoDiv.style.display = "flex";
}

function batimentosSim(){

    const batimentos = true;

    var btnBatimentosSim = document.getElementById("btn-batimentos-sim");

    btnBatimentosSim.style.backgroundColor = "#4682B4";
    btnBatimentosSim.style.color = "white";
    
    var sangramentoDiv = document.getElementById("sangramento");

    sangramentoDiv.style.display = "flex";

    var batimentosSimDiv = document.getElementById("tt-batimentos-sim");

    batimentosSimDiv.style.display = "flex";
}

function batimentosNao(){

    const batimentos = false;

    var btnBatimentosNao = document.getElementById("btn-batimentos-nao");

    btnBatimentosNao.style.backgroundColor = "#4682B4";
    btnBatimentosNao.style.color = "white";
    
    var sangramentoDiv = document.getElementById("sangramento");

    sangramentoDiv.style.display = "flex";

    var batimentosNaoDiv = document.getElementById("tt-batimentos-nao");

    batimentosNaoDiv.style.display = "flex";
}