var afogamento;
var engasgo;
var consciente;
var respirando;
var batimentos;
var sangramento;
var fratura;
var concussao;
var queimadura;

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

    consciente = true;

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

    consciente = false;

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

    respirando = true;

    var btnRespirandoSim = document.getElementById("btn-respirando-sim");

    btnRespirandoSim.style.backgroundColor = "#4682B4";
    btnRespirandoSim.style.color = "white";
    
    var batimentosDiv = document.getElementById("batimentos");

    batimentosDiv.style.display = "flex";

    var respiracaoSimDiv = document.getElementById("tutorial-respiracao-sim");

    respiracaoSimDiv.style.display = "flex";
}

function respirandoNao(){

    respirando = false;

    var btnRespirandoNao = document.getElementById("btn-respirando-nao");

    btnRespirandoNao.style.backgroundColor = "#4682B4";
    btnRespirandoNao.style.color = "white";
    
    var batimentosDiv = document.getElementById("batimentos");

    batimentosDiv.style.display = "flex";

    var respiracaoNaoDiv = document.getElementById("tutorial-respiracao-nao");

    respiracaoNaoDiv.style.display = "flex";
}

function batimentosSim(){

    batimentos = true;

    var btnBatimentosSim = document.getElementById("btn-batimentos-sim");

    btnBatimentosSim.style.backgroundColor = "#4682B4";
    btnBatimentosSim.style.color = "white";
    
    var sangramentoDiv = document.getElementById("sangramento");

    sangramentoDiv.style.display = "flex";

    var batimentosSimDiv = document.getElementById("tt-batimentos-sim");

    batimentosSimDiv.style.display = "flex";
}

function batimentosNao(){

    batimentos = false;

    var btnBatimentosNao = document.getElementById("btn-batimentos-nao");

    btnBatimentosNao.style.backgroundColor = "#4682B4";
    btnBatimentosNao.style.color = "white";
    
    var sangramentoDiv = document.getElementById("sangramento");

    sangramentoDiv.style.display = "flex";

    var batimentosNaoDiv = document.getElementById("tt-batimentos-nao");

    batimentosNaoDiv.style.display = "flex";
}

function sangramentoSim(){

    sangramento = true;

    var btnSangramentoSim = document.getElementById("btn-sangramento-sim");

    btnSangramentoSim.style.backgroundColor = "#4682B4";
    btnSangramentoSim.style.color = "white";
    
    var fraturaDiv = document.getElementById("fratura");

    fraturaDiv.style.display = "flex";

    var sangramentoSimDiv = document.getElementById("tt-sangramento-sim");

    sangramentoSimDiv.style.display = "flex";
}

function sangramentoNao(){

    sangramento = false;

    var btnSangramentoNao = document.getElementById("btn-sangramento-nao");

    btnSangramentoNao.style.backgroundColor = "#4682B4";
    btnSangramentoNao.style.color = "white";
    
    var fraturaDiv = document.getElementById("fratura");

    fraturaDiv.style.display = "flex";

    var sangramentoNaoDiv = document.getElementById("tt-sangramento-nao");

    sangramentoNaoDiv.style.display = "flex";
}

function fraturaSim(){

    fratura = true;

    var btnFraturaSim = document.getElementById("btn-fratura-sim");

    btnFraturaSim.style.backgroundColor = "#4682B4";
    btnFraturaSim.style.color = "white";
    
    var concussaoDiv = document.getElementById("concussao");

    concussaoDiv.style.display = "flex";

    var fraturaSimDiv = document.getElementById("tt-fratura-sim");

    fraturaSimDiv.style.display = "flex";
}

function fraturaNao(){

    fratura = false;

    var btnFraturaNao = document.getElementById("btn-fratura-nao");

    btnFraturaNao.style.backgroundColor = "#4682B4";
    btnFraturaNao.style.color = "white";
    
    var concussaoDiv = document.getElementById("concussao");

    concussaoDiv.style.display = "flex";

    var fraturaNaoDiv = document.getElementById("tt-fratura-nao");

    fraturaNaoDiv.style.display = "flex";
}

function concussaoNao(){

    concussao = false;

    var btnConcussaoNao = document.getElementById("btn-concussao-nao");

    btnConcussaoNao.style.backgroundColor = "#4682B4";
    btnConcussaoNao.style.color = "white";
    
    var queimaduraDiv = document.getElementById("queimadura");

    queimaduraDiv.style.display = "flex";

    var concussaoNaoDiv = document.getElementById("tt-concussao-nao");

    concussaoNaoDiv.style.display = "flex";
}

function concussaoSim(){

    concussao = true;

    var btnConcussaoSim = document.getElementById("btn-concussao-sim");

    btnConcussaoSim.style.backgroundColor = "#4682B4";
    btnConcussaoSim.style.color = "white";
    
    var queimaduraDiv = document.getElementById("queimadura");

    queimaduraDiv.style.display = "flex";

    var concussaoSimDiv = document.getElementById("tt-concussao-sim");

    concussaoSimDiv.style.display = "flex";
}

function queimaduraSim(){

    queimadura = true;

    var btnQueimaduraSim = document.getElementById("btn-queimadura-sim");

    btnQueimaduraSim.style.backgroundColor = "#4682B4";
    btnQueimaduraSim.style.color = "white";
    
    var engasgoDiv = document.getElementById("engasgo");

    engasgoDiv.style.display = "flex";

    var queimaduraSimDiv = document.getElementById("tt-queimadura-sim");

    queimaduraSimDiv.style.display = "flex";
}

function queimaduraNao(){

    queimadura = false;

    var btnQueimaduraNao = document.getElementById("btn-queimadura-nao");

    btnQueimaduraNao.style.backgroundColor = "#4682B4";
    btnQueimaduraNao.style.color = "white";
    
    var engasgoDiv = document.getElementById("engasgo");

    engasgoDiv.style.display = "flex";

    var queimaduraNaoDiv = document.getElementById("tt-queimadura-nao");

    queimaduraNaoDiv.style.display = "flex";
}

function engasgoNao(){

    engasgo = false;

    var btnEngasgoNao = document.getElementById("btn-engasgo-nao");

    btnEngasgoNao.style.backgroundColor = "#4682B4";
    btnEngasgoNao.style.color = "white";
    
    var afogamentoDiv = document.getElementById("afogamento");

    afogamentoDiv.style.display = "flex";

    var engasgoNaoDiv = document.getElementById("tt-engasgo-nao");

    engasgoNaoDiv.style.display = "flex";
}

function engasgoSim(){

    engasgo = true;

    var btnEngasgoSim = document.getElementById("btn-engasgo-sim");

    btnEngasgoSim.style.backgroundColor = "#4682B4";
    btnEngasgoSim.style.color = "white";
    
    var afogamentoDiv = document.getElementById("afogamento");

    afogamentoDiv.style.display = "flex";

    var engasgoSimDiv = document.getElementById("tt-engasgo-sim");

    engasgoSimDiv.style.display = "flex";
}

function engasgoNao(){

    engasgo = false;

    var btnEngasgoNao = document.getElementById("btn-engasgo-nao");

    btnEngasgoNao.style.backgroundColor = "#4682B4";
    btnEngasgoNao.style.color = "white";
    
    var afogamentoDiv = document.getElementById("afogamento");

    afogamentoDiv.style.display = "flex";

    var engasgoNaoDiv = document.getElementById("tt-engasgo-nao");

    engasgoNaoDiv.style.display = "flex";
}

function afogamentoNao(){

    afogamento = false;

    var btnAfogamentoNao = document.getElementById("btn-afogamento-nao");

    btnAfogamentoNao.style.backgroundColor = "#4682B4";
    btnAfogamentoNao.style.color = "white";
    
    var afogamentoNaoDiv = document.getElementById("tt-afogamento-nao");

    afogamentoNaoDiv.style.display = "flex";

    const relatorio = document.querySelector("#relatorio-informacoes");

    relatorio.innerHTML = `
        <tr>
          <td>${consciente}</td>
          <td>${respirando}</td>
          <td>${batimentos}</td>
          <td>${sangramento}</td>
          <td>${fratura}</td>
          <td>${concussao}</td>
          <td>${queimadura}</td>
          <td>${engasgo}</td>
          <td>${afogamento}</td>
        </tr>
      `;

      const mostrarRelatorio = document.querySelector("#relatorio-medico");

      mostrarRelatorio.style.display = "flex";
    }

function afogamentoSim(){

    afogamento = true;

    var btnAfogamentoSim = document.getElementById("btn-afogamento-sim");

    btnAfogamentoSim.style.backgroundColor = "#4682B4";
    btnAfogamentoSim.style.color = "white";
    
    var afogamentoSimDiv = document.getElementById("tt-afogamento-sim");

    afogamentoSimDiv.style.display = "flex";

    const relatorio = document.querySelector("#relatorio-informacoes");

    relatorio.innerHTML = `
        <tr>
          <td class="tentativa">${consciente}</td>
          <td class="tentativa">${respirando}</td>
          <td class="tentativa">${batimentos}</td>
          <td class="tentativa">${sangramento}</td>
          <td class="tentativa">${fratura}</td>
          <td class="tentativa">${concussao}</td>
          <td class="tentativa">${queimadura}</td>
          <td class="tentativa">${engasgo}</td>
          <td class="tentativa">${afogamento}</td>
        </tr>
      `;

      const mostrarRelatorio = document.querySelector("#relatorio-medico");

      mostrarRelatorio.style.display = "flex";

}

  